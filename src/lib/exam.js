import { BANK } from '../data/bank.js'
import { genItem } from '../data/generators.js'
import { LEVELS, levelPool } from './config.js'
import { avg, shuffle } from './util.js'
import { ls } from './storage.js'

export const SESSION_KEY = 'csc-session'

export function examLevel(items) {
  const w = { easy: 1, average: 2, difficult: 3 }
  const m = avg(items.map(q => w[q.d] || 2))
  return m < 1.67 ? 'easy' : m < 2.34 ? 'average' : 'difficult'
}

export const diffPool = (pool, diff) => (diff === 'mixed' || diff === 'all' ? [...pool] : pool.filter(q => q.d === diff))

/* Realistic set: every subject represented, grouped by part like a test booklet.
   Weighted random pick: each item gets random × level weight; the highest scores are kept. */
export function buildReal(level) {
  const L = LEVELS[level]
  const pick = levelPool(level).map(q => ({ q, k: Math.random() * L.w[q.d] })).sort((a, b) => b.k - a.k).slice(0, L.items).map(x => x.q)
  // Top up with generated items if the written bank is smaller than the official item count
  const out = L.cats.flatMap(k => shuffle(pick.filter(q => q.c === k)))
  if (out.length < L.items) {
    const extra = []
    while (out.length + extra.length < L.items) { const g = genItem(L.cats, null, 'mixed'); if (g) extra.push(g) }
    return L.cats.flatMap(k => shuffle([...out, ...extra].filter(q => q.c === k)))
  }
  return out
}

/* Shuffle option order per item and track where the correct answer lands */
export const prep = q => {
  const ord = shuffle(q.o.map((_, i) => i))
  return { ...q, o: ord.map(i => q.o[i]), a: ord.indexOf(q.a) }
}

/* Endless batch: unseen written items first, topped up with generated ones */
export function nextBatch(have, level, diff) {
  const used = new Set(have.filter(q => !q.gen).map(q => q.id))
  const written = shuffle(diffPool(levelPool(level), diff).filter(q => !used.has(q.id))).slice(0, 15)
  const out = [...written]
  while (out.length < 25) { const g = genItem(LEVELS[level].cats, null, diff); if (!g) break; out.push(g) }
  return shuffle(out)
}

export function weakestCat(level) {
  const t = ls.get('csc-subj', {}); let worst = null, low = 101
  for (const k of LEVELS[level].cats) { const r = t[k]; if (r && r.t) { const p = r.s / r.t * 100; if (p < low) { low = p; worst = k } } }
  return worst
}

/* Turn a stored session record back into full items with the examinee's answers */
export function hydrate(rec) {
  return rec.items.map((it, i) => {
    if (it && it.g) return { ...it.g, gen: true, ans: it.s < 0 ? null : it.s, flag: rec.flags.includes(i) }
    const [id, ord, ans] = it, b = BANK[id]; if (!b) return null
    const order = [...ord].map(Number)
    return { ...b, o: order.map(k => b.o[k]), a: order.indexOf(b.a), ans: ans < 0 ? null : ans, flag: rec.flags.includes(i) }
  }).filter(Boolean)
}

/* In-progress exam, so it survives closing the app */
export function saveProgress(e) {
  if (!e) return
  ls.set(SESSION_KEY, {
    items: e.items, ans: e.ans, flags: e.flags, idx: e.idx, timeLeft: e.timeLeft, used: e.used, mode: e.mode,
    timed: e.timed, label: e.label, name: e.name, level: e.level, realSec: e.realSec, diff: e.diff
  })
}
