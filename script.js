'use strict';

// All content is local. No tracking, embedded players, network APIs or dependencies.
const MOODS = {
  calm: {
    name: 'Спокойствие', caption: 'тишина тоже звучит', thought: 'для твоего спокойствия',
    genre: 'Ambient · Soft piano', title: 'Мир на паузе', description: 'Мягкие клавиши и воздух между нотами.',
    artists: ['Ólafur Arnalds', 'Nils Frahm', 'Brian Eno'], query: 'Ólafur Arnalds Nils Frahm Brian Eno ambient piano', album: ['slow', 'down.'], color: [172, 166, 245],
    phrases: [
      'Необязательно всё успевать. Иногда достаточно просто быть.',
      'Пусть этот вечер ничего от тебя не требует.',
      'У тишины есть место, приготовленное специально для тебя.',
      'Можно поставить мир на паузу, а чайник — на плиту.',
      'Ты не опоздаешь к себе, если немного замедлишься.',
      'Плечи можно опустить. Небо пока держится само.',
      'Сделай вдох, в котором не будет никаких планов.',
      'Пусть мысли сегодня идут пешком.',
      'В твоём дне осталось место для мягкого света.',
      'Отдых не нужно заслуживать хорошим поведением.',
      'Сегодня можно выбрать самый тихий маршрут.',
      'Между двумя делами поместится маленькая вечность.',
      'Не каждая минута должна становиться результатом.',
      'Закрой лишнюю вкладку. Открой окно.',
      'Пусть покой будет не наградой, а частью дороги.'
    ]
  },
  joy: {
    name: 'Радость', caption: 'твоё личное солнце', thought: 'для твоей радости',
    genre: 'Indie pop · Nu-disco', title: 'Солнечной стороной вверх', description: 'Тёплый грув для маленьких праздников.',
    artists: ['Parcels', 'Jungle', 'Khruangbin'], query: 'Parcels Jungle Khruangbin feel good mix', album: ['hello', 'sun.'], color: [255, 207, 135],
    phrases: [
      'Пусть сегодня будет повод улыбнуться без повода.',
      'Сохрани этот свет. Он тебе очень идёт.',
      'Маленькая радость тоже умеет освещать большую комнату.',
      'Этот день ещё может стать твоим любимым воспоминанием.',
      'Праздник начинается там, где ты разрешаешь себе радоваться.',
      'Солнечные зайчики не спрашивают, закончены ли дела.',
      'Потанцуй на кухне. Пол вполне подходит для сцены.',
      'Иногда счастье пахнет свежей выпечкой и выходным.',
      'Добавь в этот день что-нибудь цвета мандарина.',
      'Улыбка — хороший способ поздороваться с собой.',
      'Можно радоваться тихо. Солнце ведь тоже не шумит.',
      'Отметь маленькую победу большим глотком любимого чая.',
      'Пусть хорошее случится и останется на подольше.',
      'Сегодня у твоего настроения открыты окна.',
      'Забери этот момент с собой, как тёплый камешек с моря.'
    ]
  },
  sad: {
    name: 'Грусть', caption: 'и дождю здесь есть место', thought: 'чтобы побыть рядом',
    genre: 'Neo-classical · Quiet folk', title: 'Пока за окном дождь', description: 'Бережные мелодии, которые никуда не торопят.',
    artists: ['Daughter', 'Bon Iver', 'Max Richter'], query: 'Daughter Bon Iver Max Richter quiet rainy day', album: ['soft', 'rain.'], color: [142, 181, 209],
    phrases: [
      'Тебе не нужно улыбаться, чтобы заслуживать тепла.',
      'Пусть грусть посидит рядом. Для неё тоже найдётся чашка.',
      'Облачный день не делает небо менее бесконечным.',
      'Сегодня достаточно заботиться о себе понемногу.',
      'Слёзы не отменяют твою силу. Они просто случаются.',
      'Можно не находить правильных слов и всё равно быть услышанным.',
      'Завернись в плед, будто в очень длинное объятие.',
      'Не проси себя расцвести посреди собственной зимы.',
      'У тебя есть право на день без восклицательных знаков.',
      'Даже у дождя бывают паузы.',
      'Необязательно чинить всё прямо сейчас. Начни с чашки воды.',
      'Твои чувства не должны проходить проверку на важность.',
      'Можно скучать по тому, чего уже не вернуть.',
      'Если тяжело нести день целиком, возьми только этот час.',
      'Пусть сегодня рядом будет хотя бы одна добрая мелочь.'
    ]
  },
  love: {
    name: 'Любовь', caption: 'на одной частоте', thought: 'для твоего тёплого чувства',
    genre: 'Dream pop · Soft soul', title: 'Ближе, чем слова', description: 'Мягкий свет и мелодии для двоих. Или для себя.',
    artists: ['Men I Trust', 'Sade', 'The Marías'], query: 'Men I Trust Sade The Marías romantic dream pop', album: ['with', 'love.'], color: [246, 165, 207],
    phrases: [
      'Иногда целый дом помещается в чьём-то голосе.',
      'Тепло становится больше, когда им делятся.',
      'Напиши тому, о ком подумалось на этих словах.',
      'Любовь бывает тихой, как оставленная для тебя чашка чая.',
      'Быть рядом — тоже способ сказать очень многое.',
      'Сохраняй нежность не на особый случай, а на сегодня.',
      'Твоему сердцу не обязательно говорить громче, чтобы его услышали.',
      'Есть люди, рядом с которыми даже ноябрь немного июнь.',
      'Пусть сегодня найдётся место для долгого объятия.',
      'Забота — это любовь, у которой свободны руки.',
      'Оставь немного нежности и для самого себя.',
      'Самые важные расстояния иногда измеряются одним сообщением.',
      'Вспомни, как звучит смех любимого человека.',
      'У каждого тёплого воспоминания есть свой внутренний свет.',
      'Любить — иногда просто замечать, что человеку нужен шарф.'
    ]
  },
  energy: {
    name: 'Энергия', caption: 'зажги свою орбиту', thought: 'для твоего нового импульса',
    genre: 'French house · Electronica', title: 'Поймать импульс', description: 'Упругий бит, смелый шаг и немного неона.',
    artists: ['Justice', 'Daft Punk', 'The Chemical Brothers'], query: 'Justice Daft Punk The Chemical Brothers energetic mix', album: ['let’s', 'go.'], color: [255, 139, 111],
    phrases: [
      'Начни с того шага, который помещается в сегодняшнее утро.',
      'У твоей идеи уже есть первый сторонник — ты.',
      'Не жди красивого старта. Пусть красивым будет движение.',
      'Нажми «начать», пока сомнения завязывают шнурки.',
      'Сегодня можно попробовать то, что вчера казалось слишком смелым.',
      'Сделай музыку громче, а первый шаг — проще.',
      'Пусть любопытство сегодня ведёт тебя за руку.',
      'Один честный шаг лучше десяти идеальных планов.',
      'У тебя есть искра. Дай ей немного воздуха.',
      'Большая дорога тоже начинается с движения к двери.',
      'Необязательно видеть весь маршрут, чтобы выйти на него.',
      'Попытка — уже событие. Отметь его.',
      'Преврати «когда-нибудь» в двадцать минут сегодня.',
      'Смелость иногда выглядит как открытый пустой документ.',
      'Двигайся в своём ритме. Это и есть твоя скорость.'
    ]
  },
  dream: {
    name: 'Мечтательность', caption: 'где-то начинается бесконечность', thought: 'для твоих далёких горизонтов',
    genre: 'Atmospheric electronic · Downtempo', title: 'За краем знакомого неба', description: 'Невесомые синтезаторы и далёкие горизонты.',
    artists: ['Tycho', 'M83', 'Ben Böhmer'], query: 'Tycho M83 Ben Böhmer atmospheric electronic mix', album: ['far', 'away.'], color: [194, 164, 255],
    phrases: [
      'Может быть, твоя следующая вселенная начинается с «а что, если».',
      'У мечты нет расписания последнего поезда.',
      'Оставь в планах немного места для невозможного.',
      'Не все созвездия уже получили свои имена.',
      'Представь место, в котором тебе станет чуть свободнее.',
      'Некоторые дороги сначала появляются на обороте блокнота.',
      'Внутри тебя достаточно неба для ещё одной мечты.',
      'Будущее пока написано карандашом. Можно дорисовать звёзды.',
      'Дай своей фантазии окно с самым красивым видом.',
      'Может быть, далёкое — это просто то, к чему ты ещё идёшь.',
      'Смотри на облака так, будто они прислали тебе письмо.',
      'Самая тихая мысль иногда открывает самую большую дверь.',
      'Не спеши объяснять свою мечту. Сначала побудь внутри неё.',
      'Нарисуй маршрут туда, где ещё не бывал даже мысленно.',
      'Пусть у этой ночи будет продолжение размером с космос.'
    ]
  }
};

const $ = (selector) => document.querySelector(selector);
const root = document.documentElement;
const moodKeys = Object.keys(MOODS);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const storage = {
  get(key) { try { return localStorage.getItem(`moodspace:${key}`); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(`moodspace:${key}`, value); return true; } catch { return false; } }
};
let currentMood = moodKeys.includes(storage.get('mood')) ? storage.get('mood') : 'calm';
let lastPhrase = Object.fromEntries(moodKeys.map(key => [key, -1]));
let motionEnabled = storage.get('motion') !== 'off';
let toastTimeout;
let breathing = false;
let breathTimer;
let breathStarted = 0;
let secretUntil = 0;

function toast(message) {
  clearTimeout(toastTimeout);
  $('#toast').textContent = message;
  $('#toast').classList.add('visible');
  toastTimeout = setTimeout(() => $('#toast').classList.remove('visible'), 4200);
}

function randomOther(length, previous) {
  if (previous < 0) return Math.floor(Math.random() * length);
  const result = Math.floor(Math.random() * (length - 1));
  return result >= previous ? result + 1 : result;
}

function showPhrase(initial = false) {
  const phrases = MOODS[currentMood].phrases;
  const index = initial && lastPhrase[currentMood] === -1 ? 0 : randomOther(phrases.length, lastPhrase[currentMood]);
  lastPhrase[currentMood] = index;
  $('#quote').textContent = phrases[index];
}

function setMood(key, initial = false) {
  if (!MOODS[key]) return;
  currentMood = key;
  const mood = MOODS[key];
  root.dataset.mood = key;
  document.querySelectorAll('.mood-card').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mood === key)));
  $('#orb-caption').textContent = mood.caption;
  $('#thought-mood').textContent = mood.thought;
  $('#music-genre').textContent = mood.genre;
  $('#music-title').textContent = mood.title;
  $('#music-description').textContent = mood.description;
  $('#artists').textContent = mood.artists.join(' · ');
  $('.album-word').replaceChildren(document.createTextNode(mood.album[0]), document.createElement('br'), document.createTextNode(mood.album[1]));
  $('#youtube').href = `https://www.youtube.com/results?search_query=${encodeURIComponent(mood.query)}`;
  $('#spotify').href = `https://open.spotify.com/search/${encodeURIComponent(mood.query)}`;
  $('#youtube').setAttribute('aria-label', `Найти музыку: ${mood.name} на YouTube (в новой вкладке)`);
  $('#spotify').setAttribute('aria-label', `Найти музыку: ${mood.name} в Spotify (в новой вкладке)`);
  $('meta[name="theme-color"]').content = getComputedStyle(root).getPropertyValue('--bg').trim();
  showPhrase(initial);
  if (!initial) {
    const saved = storage.set('mood', key);
    toast(`${mood.name} ${saved ? '· твой мир сохранён' : '· твой мир здесь и сейчас'}`);
  }
  drawStaticSky();
}

document.querySelectorAll('.mood-card').forEach(button => button.addEventListener('click', () => setMood(button.dataset.mood)));
$('#surprise').addEventListener('click', () => setMood(moodKeys[randomOther(moodKeys.length, moodKeys.indexOf(currentMood))]));
$('#new-quote').addEventListener('click', () => showPhrase());
$('#copy').addEventListener('click', async () => {
  const text = $('#quote').textContent;
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
    else {
      const field = document.createElement('textarea');
      field.value = text;
      field.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.append(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      $('#copy').focus({ preventScroll: true });
      if (!copied) throw new Error('Clipboard unavailable');
    }
    toast('Мысль скопирована. Забери её с собой ♡');
  } catch { toast('Не удалось скопировать. Можно выделить текст мысли вручную.'); }
});

function effectiveMotion() { return motionEnabled && !reducedMotion.matches; }
function updateMotion() {
  root.dataset.motion = effectiveMotion() ? 'on' : 'off';
  const control = $('#motion-toggle');
  control.textContent = reducedMotion.matches ? 'Анимации: по системе выкл.' : `Анимации: ${motionEnabled ? 'вкл.' : 'выкл.'}`;
  control.setAttribute('aria-pressed', String(!effectiveMotion()));
  control.setAttribute('aria-label', effectiveMotion() ? 'Выключить анимации' : 'Включить анимации');
  if (!effectiveMotion()) {
    root.style.setProperty('--pointer-x', '0px');
    root.style.setProperty('--pointer-y', '0px');
  }
  restartSky();
}
$('#motion-toggle').addEventListener('click', () => {
  if (reducedMotion.matches) { toast('Анимации отключены в настройках твоей системы.'); return; }
  motionEnabled = !motionEnabled;
  storage.set('motion', motionEnabled ? 'on' : 'off');
  updateMotion();
});
reducedMotion.addEventListener('change', updateMotion);

function updateBreath() {
  const phase = (Date.now() - breathStarted) % 10000;
  $('#breath-label').textContent = `${phase < 4000 ? 'Вдох' : 'Выдох'} · остановить`;
}
function stopBreathing() {
  breathing = false;
  clearInterval(breathTimer);
  $('#universe').classList.remove('breathing');
  $('#breath').setAttribute('aria-pressed', 'false');
  $('#breath-label').textContent = 'Дышать со сферой';
}
$('#breath').addEventListener('click', () => {
  if (breathing) { stopBreathing(); return; }
  breathing = true;
  breathStarted = Date.now();
  $('#universe').classList.add('breathing');
  $('#breath').setAttribute('aria-pressed', 'true');
  updateBreath();
  breathTimer = setInterval(updateBreath, 200);
  toast('Вдох — 4 секунды, выдох — 6. Следуй удобному для тебя ритму.');
});

$('#universe').addEventListener('pointermove', event => {
  if (!effectiveMotion() || event.pointerType === 'touch') return;
  const rect = $('#universe').getBoundingClientRect();
  root.style.setProperty('--pointer-x', `${(event.clientX - rect.left - rect.width / 2) * .045}px`);
  root.style.setProperty('--pointer-y', `${(event.clientY - rect.top - rect.height / 2) * .045}px`);
});
$('#universe').addEventListener('pointerleave', () => {
  root.style.setProperty('--pointer-x', '0px'); root.style.setProperty('--pointer-y', '0px');
});
$('#orb').addEventListener('click', () => {
  toast('Ты коснулся своей вселенной. Она улыбается тебе ✦');
  if (!effectiveMotion()) return;
  const ring = document.createElement('span');
  ring.className = 'burst-ring';
  ring.setAttribute('aria-hidden', 'true');
  $('#universe').append(ring);
  setTimeout(() => ring.remove(), 1800);
});
let moonClicks = [];
$('.brand').addEventListener('click', () => {
  moonClicks = moonClicks.filter(time => Date.now() - time < 4000);
  moonClicks.push(Date.now());
  if (moonClicks.length >= 5) {
    moonClicks = [];
    secretUntil = performance.now() + 9000;
    root.classList.add('constellation');
    toast('Найдено созвездие «Ты здесь». Оно всегда на твоей стороне ✦');
    drawStaticSky();
    setTimeout(() => { root.classList.remove('constellation'); drawStaticSky(); }, 9100);
  }
});
const dialog = $('#about-dialog');
$('#about-open').addEventListener('click', () => dialog.showModal());
$('#about-close').addEventListener('click', () => dialog.close());
$('#about-done').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });

// A bounded, low-density canvas instead of hundreds of DOM particles.
const canvas = $('#sky');
const ctx = canvas.getContext('2d');
let stars = [], width = 0, height = 0, animationFrame = 0, lastFrame = 0;
function resizeSky() {
  width = window.innerWidth; height = window.innerHeight;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
  if (ctx) ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  stars = Array.from({ length: Math.min(95, Math.floor(width * height / 12500)) }, () => ({
    x: Math.random() * width, y: Math.random() * height, r: .4 + Math.random() * .9,
    phase: Math.random() * Math.PI * 2, speed: .3 + Math.random() * .7
  }));
  drawStaticSky();
}
function paintSky(time, animate) {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  const color = MOODS[currentMood].color;
  const rgb = color.join(',');
  for (const star of stars) {
    const twinkle = animate ? .35 + Math.sin(time * .0005 + star.phase) * .2 : .35;
    ctx.fillStyle = `rgba(${rgb},${twinkle})`;
    if (currentMood === 'sad') {
      const y = animate ? (star.y + time * .06 * star.speed) % (height + 30) - 30 : star.y;
      ctx.strokeStyle = `rgba(${rgb},${twinkle * .45})`;
      ctx.lineWidth = .6; ctx.beginPath(); ctx.moveTo(star.x, y); ctx.lineTo(star.x - 3, y + 14); ctx.stroke();
    } else {
      const speed = currentMood === 'energy' ? .015 : .003;
      const y = animate ? (star.y - time * speed * star.speed % height + height) % height : star.y;
      ctx.beginPath(); ctx.arc(star.x, y, currentMood === 'love' ? star.r * 1.5 : star.r, 0, Math.PI * 2); ctx.fill();
      if (currentMood === 'dream' && star.r > 1.1) {
        ctx.strokeStyle = `rgba(${rgb},${twinkle * .5})`; ctx.lineWidth = .6;
        ctx.beginPath(); ctx.moveTo(star.x - 3, y); ctx.lineTo(star.x + 3, y); ctx.moveTo(star.x, y - 3); ctx.lineTo(star.x, y + 3); ctx.stroke();
      }
    }
  }
  if (secretUntil > performance.now()) {
    const points = [[.12,.2],[.25,.13],[.4,.23],[.55,.12],[.72,.2],[.86,.08]];
    ctx.strokeStyle = `rgba(${rgb},.3)`; ctx.lineWidth = 1; ctx.beginPath();
    points.forEach(([x,y], index) => index ? ctx.lineTo(x*width,y*height) : ctx.moveTo(x*width,y*height)); ctx.stroke();
    ctx.fillStyle = `rgba(${rgb},.9)`;
    points.forEach(([x,y]) => { ctx.beginPath(); ctx.arc(x*width,y*height,2,0,Math.PI*2); ctx.fill(); });
  }
}
function drawStaticSky() { paintSky(0, false); }
function animateSky(time) {
  if (time - lastFrame > 32) { paintSky(time, true); lastFrame = time; }
  animationFrame = requestAnimationFrame(animateSky);
}
function restartSky() {
  cancelAnimationFrame(animationFrame);
  drawStaticSky();
  if (ctx && effectiveMotion() && !document.hidden) animationFrame = requestAnimationFrame(animateSky);
}
window.addEventListener('resize', resizeSky);
document.addEventListener('visibilitychange', () => { if (document.hidden) stopBreathing(); restartSky(); });
resizeSky();
setMood(currentMood, true);
updateMotion();
if (!storage.get('visited')) {
  setTimeout(() => toast('Выбери своё настроение. Всё остальное подстроится под тебя ✦'), 1700);
  storage.set('visited', 'yes');
}
