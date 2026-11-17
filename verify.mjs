import { readFile, access } from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const base = new URL('./', import.meta.url);
const source = await readFile(new URL('script.js', base), 'utf8');
const content = source.slice(0, source.indexOf('const $ ='));
const moods = vm.runInNewContext(`${content}\nJSON.parse(JSON.stringify(MOODS));`);
assert.equal(Object.keys(moods).length, 6);
let phraseCount = 0;
const allPhrases = [];
for (const [key, mood] of Object.entries(moods)) {
  assert.ok(mood.phrases.length >= 15, `${key}: at least 15 phrases`);
  assert.equal(new Set(mood.phrases).size, mood.phrases.length, `${key}: unique phrases`);
  assert.equal(mood.artists.length, 3);
  assert.ok(mood.query.length > 10);
  phraseCount += mood.phrases.length;
  allPhrases.push(...mood.phrases);
  for (const prefix of ['https://www.youtube.com/results?search_query=', 'https://open.spotify.com/search/']) {
    const url = new URL(prefix + encodeURIComponent(mood.query));
    assert.equal(url.protocol, 'https:');
  }
}
assert.equal(new Set(allPhrases).size, phraseCount);
const randomSource = source.match(/function randomOther\(length, previous\) \{[\s\S]*?\n\}/)[0];
const randomOther = vm.runInNewContext(`${randomSource}\nrandomOther`);
for (const length of [6, 15]) {
  for (let prev = -1; prev < length; prev++) {
    for (let i = 0; i < 500; i++) {
      const index = randomOther(length, prev);
      assert.ok(index >= 0 && index < length && index !== prev);
    }
  }
}
const html = await readFile(new URL('index.html', base), 'utf8');
const css = await readFile(new URL('style.css', base), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Unique HTML IDs');
for (const [, selector] of source.matchAll(/\$\('#([^']+)'\)/g)) assert.ok(ids.includes(selector), `Missing #${selector}`);
for (const [, path] of html.matchAll(/(?:src|href)="(\.\/[^"?#]+)"/g)) await access(new URL(path, base));
for (const [, path] of css.matchAll(/url\("(\.\/[^"?#]+)"\)/g)) await access(new URL(path, base));
assert.ok(css.includes('prefers-reduced-motion'));
assert.ok(css.includes('minmax(0,1fr)'));
assert.ok(!html.match(/(?:src|href)="\/(?!\/)/), 'No root-relative assets');
assert.ok(html.includes('lang="ru"'));
console.log(`PASS: 6 moods, ${phraseCount} unique phrases, 12 music URLs, no-repeat selection (11,500 draws), local assets, HTML IDs, reduced motion, relative paths.`);
