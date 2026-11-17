import { cp, mkdir, rm } from 'node:fs/promises';

// Optional packaging for Sites. GitHub Pages serves the root files directly.
await rm(new URL('./dist/', import.meta.url), { recursive: true, force: true });
await mkdir(new URL('./dist/', import.meta.url), { recursive: true });
for (const name of ['index.html', 'style.css', 'script.js', 'assets', '.nojekyll']) {
  await cp(new URL(`./${name}`, import.meta.url), new URL(`./dist/${name}`, import.meta.url), { recursive: true });
}
console.log('MOODSPACE is ready in dist/');
