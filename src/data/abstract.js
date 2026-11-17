/* ===================== ABSTRACT REASONING (FIGURES) =====================
   Generated figure items: series, analogies and odd-one-out. Answers are computed from the rule,
   and options are compared by a canonical encoding so no two choices look the same.

   A figure spec: { s: shape, r: rotation°, f: mirrored (1), fill: solid (1), n: sides/dots, p: shaded sector, k: sectors }
   Options and figure frames are stored as strings: '§' + canonical JSON (so they shuffle, save and compare like text). */
import { R, pk, shuffle } from '../lib/util.js'

export const FIG = '§'
const ASYM = ['L', 'flag', 'arrow'] // no rotational symmetry, so every rotation looks different
const CHIRAL = ['L', 'flag'] // mirror image cannot be made by rotating
const SHAPE_NAME = { L: 'L-shaped figure', flag: 'flag', arrow: 'arrow', poly: 'polygon', circle: 'circle', dots: 'box of dots', sector: 'divided circle' }

/* Canonical encoding: fixed key order, rotation normalized, irrelevant fields dropped */
export function enc(spec) {
  const o = { s: spec.s }
  if (ASYM.includes(spec.s)) { const r = (((spec.r || 0) % 360) + 360) % 360; if (r) o.r = r; if (spec.f && CHIRAL.includes(spec.s)) o.f = 1 }
  if (spec.fill && spec.s !== 'dots' && spec.s !== 'sector') o.fill = 1
  if (spec.n != null) o.n = spec.n
  if (spec.p != null) o.p = ((spec.p % spec.k) + spec.k) % spec.k
  if (spec.k != null) o.k = spec.k
  return FIG + JSON.stringify(o)
}
export const isFig = t => typeof t === 'string' && t.startsWith(FIG)
export const dec = t => JSON.parse(t.slice(1))

/* Plain-language description (screen readers) */
export function describe(s) {
  const bits = [s.s === 'poly' ? `${s.n}-sided polygon` : s.s === 'dots' ? `box with ${s.n} dot${s.n === 1 ? '' : 's'}` : s.s === 'sector' ? `circle in ${s.k} parts, part ${s.p + 1} shaded` : SHAPE_NAME[s.s]]
  if (s.r) bits.push(`turned ${s.r}°`)
  if (s.f) bits.push('mirrored')
  if (s.fill) bits.push('solid')
  return bits.join(', ')
}

function mkFig(d, q, fig, correct, wrongs, e) {
  const opts = [correct]
  for (const w of wrongs) if (w && !opts.includes(w) && opts.length < 4) opts.push(w)
  if (opts.length < 4) return null
  shuffle(opts)
  return { c: 'analytical', d, q, fig, o: opts, a: opts.indexOf(correct), e, gen: true, abs: true }
}
const dir = k => (k > 0 ? 'clockwise' : 'counterclockwise')

/* 1. Rotation series */
function rotSeries() {
  const s = pk(ASYM), k = pk([45, 90, -45, -90, 135]), r0 = pk([0, 45, 90, 135, 180, 225, 270, 315]), fill = R(0, 1)
  const frames = [0, 1, 2, 3].map(i => enc({ s, r: r0 + i * k, fill }))
  const ans = enc({ s, r: r0 + 4 * k, fill })
  const wr = [r0 + 3 * k, r0 + 4 * k + 180, r0 + 5 * k, r0 + 2 * k].map(r => enc({ s, r, fill }))
  if (CHIRAL.includes(s)) wr.unshift(enc({ s, r: r0 + 4 * k, f: 1, fill }))
  return mkFig(Math.abs(k) === 90 ? 'average' : 'difficult', 'Which figure comes next in the series?', { t: 'series', items: frames }, ans, shuffle(wr.slice(0, 2)).concat(wr.slice(2)),
    `The figure turns ${Math.abs(k)}° ${dir(k)} at every step, so the next one is turned another ${Math.abs(k)}° ${dir(k)}.`)
}

/* 2. Number of sides grows by one */
function sidesSeries() {
  const n0 = pk([3, 4])
  const frames = [0, 1, 2, 3].map(i => enc({ s: 'poly', n: n0 + i }))
  return mkFig('easy', 'Which figure comes next in the series?', { t: 'series', items: frames }, enc({ s: 'poly', n: n0 + 4 }),
    [enc({ s: 'poly', n: n0 + 5 }), enc({ s: 'poly', n: n0 + 3 }), enc({ s: 'circle' }), enc({ s: 'poly', n: n0 + 2 })],
    `Each figure has one more side than the one before (${n0}, ${n0 + 1}, ${n0 + 2}, ${n0 + 3}), so the next has ${n0 + 4} sides.`)
}

/* 3. Number of dots grows by a fixed amount */
function dotSeries() {
  const d = pk([1, 2]), n0 = d === 1 ? R(1, 4) : 1, ans = n0 + 4 * d
  if (ans > 9) return null
  const frames = [0, 1, 2, 3].map(i => enc({ s: 'dots', n: n0 + i * d }))
  const wr = [ans - 1, ans + 1, n0 + 3 * d, ans - 2].filter(x => x >= 1 && x <= 9 && x !== ans).map(n => enc({ s: 'dots', n }))
  return mkFig('easy', 'Which figure comes next in the series?', { t: 'series', items: frames }, enc({ s: 'dots', n: ans }), wr,
    `The number of dots goes up by ${d} each time (${[0, 1, 2, 3].map(i => n0 + i * d).join(', ')}), so the next box has ${ans}.`)
}

/* 4. Shaded part moves around a divided circle */
function sectorSeries() {
  const k = pk([4, 6, 8]), step = pk([1, 2, -1, 3])
  if (k === 4 && Math.abs(step) !== 1) return null
  const p0 = R(0, k - 1), at = i => p0 + i * step
  const frames = [0, 1, 2, 3].map(i => enc({ s: 'sector', k, p: at(i) }))
  const ans = enc({ s: 'sector', k, p: at(4) })
  const wr = [at(3), at(5), at(4) + 1, at(4) - 1, at(4) + Math.floor(k / 2)].map(p => enc({ s: 'sector', k, p }))
  return mkFig(Math.abs(step) > 1 ? 'average' : 'easy', 'Which figure comes next in the series?', { t: 'series', items: frames }, ans, wr,
    `The shaded part moves ${Math.abs(step)} section${Math.abs(step) > 1 ? 's' : ''} ${dir(step)} at every step.`)
}

/* 5. Figure analogy: A is to B as C is to ? */
const TRANS = {
  rot90: [s => ({ ...s, r: (s.r || 0) + 90 }), 'turned 90° clockwise'],
  rotm90: [s => ({ ...s, r: (s.r || 0) - 90 }), 'turned 90° counterclockwise'],
  rot180: [s => ({ ...s, r: (s.r || 0) + 180 }), 'turned upside down (180°)'],
  mirror: [s => ({ ...s, f: s.f ? 0 : 1 }), 'flipped into its mirror image'],
  fill: [s => ({ ...s, fill: s.fill ? 0 : 1 }), 'changed from outline to solid, or from solid to outline']
}
function analogy() {
  const tk = pk(Object.keys(TRANS)), [fn, desc] = TRANS[tk]
  const [s1, s2] = shuffle([...(tk === 'mirror' ? CHIRAL : ASYM)])
  const a = { s: s1, r: pk([0, 90, 180, 270]), fill: R(0, 1) }, c = { s: s2, r: pk([0, 90, 180, 270]), fill: R(0, 1) }
  const others = Object.keys(TRANS).filter(x => x !== tk && (x !== 'mirror' || CHIRAL.includes(s2)))
  const wr = [enc(c), ...shuffle(others).map(x => enc(TRANS[x][0](c)))]
  return mkFig(tk === 'mirror' || tk === 'rotm90' ? 'difficult' : 'average', 'The first figure is to the second as the third is to which figure?',
    { t: 'analogy', items: [enc(a), enc(fn(a)), enc(c)] }, enc(fn(c)), wr,
    `In the first pair the figure is ${desc}. Do the same to the third figure.`)
}

/* 6. Odd one out: three rotations of a figure and one mirror image */
function oddMirror() {
  const s = pk(CHIRAL), fill = R(0, 1), rots = shuffle([0, 45, 90, 135, 180, 225, 270, 315]).slice(0, 4)
  return mkFig('difficult', 'Three of these figures are the same figure turned in different directions. Which figure does NOT belong?', null,
    enc({ s, r: rots[3], f: 1, fill }), rots.slice(0, 3).map(r => enc({ s, r, fill })),
    'The other three are the same figure turned around. The odd one is a mirror image: no amount of turning can produce it.')
}

/* 7. Odd one out: the solid/outline or side count that breaks the group */
function oddSides() {
  const even = Math.random() < 0.5, pool = even ? [4, 6, 8] : [3, 5, 7], odd = even ? pk([3, 5, 7]) : pk([4, 6, 8])
  return mkFig('average', 'Which figure does NOT belong?', null, enc({ s: 'poly', n: odd }), pool.map(n => enc({ s: 'poly', n })),
    `The other figures all have an ${even ? 'even' : 'odd'} number of sides (${pool.join(', ')}). This one has ${odd}.`)
}

export const ABSGEN = [rotSeries, rotSeries, sidesSeries, dotSeries, sectorSeries, sectorSeries, analogy, analogy, oddMirror, oddSides]

export function genAbstract(diff) {
  for (let t = 0; t < 80; t++) {
    const q = pk(ABSGEN)()
    if (q && (!diff || diff === 'mixed' || diff === 'all' || q.d === diff)) return q
  }
  for (let t = 0; t < 40; t++) { const q = pk(ABSGEN)(); if (q) return q }
  return null
}
