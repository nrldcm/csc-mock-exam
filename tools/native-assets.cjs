// Renders the source images @capacitor/assets needs (app icon, adaptive icon layers, splash)
// from the same seal-and-check mark as public/icon.svg. Run: node tools/native-assets.cjs
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const out = path.join(__dirname, '..', 'assets')
fs.mkdirSync(out, { recursive: true })
const NAVY = '#1F3A68', GOLD = '#B8901C', DARK = '#11141A'

// The mark is drawn on a 512 grid; place it centered at (cx, cy) with scale s
const mark = (cx, cy, s) => `<g transform="translate(${cx} ${cy}) scale(${s}) translate(-256 -256)">
  <circle cx="256" cy="256" r="150" fill="none" stroke="${GOLD}" stroke-width="22"/>
  <circle cx="256" cy="256" r="112" fill="${GOLD}"/>
  <path d="M200 260 l40 40 l74 -82" fill="none" stroke="${NAVY}" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/>
</g>`
const svg = (size, bg, body) => Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${bg ? `<rect width="${size}" height="${size}" fill="${bg}"/>` : ''}${body}</svg>`)

const jobs = [
  ['icon-only.png', svg(1024, NAVY, mark(512, 512, 2))],
  // Adaptive icon: keep the mark inside the 66/108 safe zone
  ['icon-foreground.png', svg(1024, null, mark(512, 512, 1.55))],
  ['icon-background.png', svg(1024, NAVY, '')],
  ['splash.png', svg(2732, NAVY, mark(1366, 1366, 1.6))],
  ['splash-dark.png', svg(2732, DARK, mark(1366, 1366, 1.6))]
]
Promise.all(jobs.map(([name, buf]) => sharp(buf).png().toFile(path.join(out, name))))
  .then(() => console.log('Native assets written to', out))
  .catch(e => { console.error(e); process.exit(1) })
