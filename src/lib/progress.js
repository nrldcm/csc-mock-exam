import { BANK } from '../data/bank.js'
import { genItem } from '../data/generators.js'
import { LEVELS, levelPool } from './config.js'
import { ls } from './storage.js'
import { dayDiff, dayKey, shuffle } from './util.js'

/* ===================== SAVED SESSIONS (on this device) ===================== */
export const SKEY = 'csc-sessions'
export function saveSession(rec) {
  const all = ls.get(SKEY, []); all.unshift(rec)
  // If storage is full, drop the oldest sessions until it fits
  while (all.length && !ls.set(SKEY, all)) all.pop()
}

/* ===================== POINTS, RANKS, STREAKS, BADGES ===================== */
export const PTS = { easy: 5, average: 10, difficult: 15 }
export const ptsFor = q => PTS[q.d] || 10
/* Ranks follow the path to eligibility */
export const RANKS = [[0, 'Applicant'], [250, 'Reviewee'], [750, 'Examinee'], [1500, 'Passer'], [3000, 'Eligible'], [6000, 'Topnotcher']]
export const rankOf = p => { let i = 0; RANKS.forEach((r, j) => { if (p >= r[0]) i = j }); return i }
export const BADGES = [
  ['first-trivia', 'First trivia', 'Finish a daily trivia'], ['perfect-trivia', 'Perfect trivia', 'Get 5 out of 5 in a daily trivia'],
  ['first-mock', 'Full mock', 'Finish a realistic exam'], ['first-pass', 'Passing mark', 'Reach 80.00 in a realistic exam'],
  ['streak-7', 'One week strong', 'Keep a 7-day streak'], ['streak-30', 'Habit formed', 'Keep a 30-day streak'],
  ['pts-1000', '1,000 points', 'Earn 1,000 points'], ['century', 'Century', 'Answer 100 items correctly'],
  ['scholar', 'Scholar', 'Read every study note topic']
]

/* Streak: one finished session with 5+ answers (or the daily trivia) marks the day.
   A shield is earned every 7 days (max 2) and covers one missed day automatically. */
export const getStreak = () => ls.get('csc-streak', { last: null, streak: 0, best: 0, shields: 0, days: [] })
export function markActive() {
  const st = getStreak(), t = dayKey(), msgs = []
  if (st.last === t) return msgs
  const gap = st.last ? dayDiff(st.last, t) : 1
  if (gap === 1) st.streak++
  else if (gap > 1 && st.shields >= gap - 1) { st.shields -= gap - 1; st.streak++; msgs.push(`A streak shield covered ${gap - 1} missed day${gap > 2 ? 's' : ''}.`) }
  else st.streak = 1
  st.last = t; st.best = Math.max(st.best, st.streak); st.days = [...new Set([...st.days, t])].slice(-60)
  if (st.streak % 7 === 0 && st.shields < 2) { st.shields++; msgs.push('You earned a streak shield.') }
  ls.set('csc-streak', st)
  return msgs
}
export function liveStreak() {
  const st = getStreak()
  if (!st.last) return { ...st, streak: 0, state: 'none' }
  const gap = dayDiff(st.last, dayKey())
  if (gap === 0) return { ...st, state: 'done' }
  if (gap === 1) return { ...st, state: 'risk' }
  if (gap - 1 <= st.shields) return { ...st, state: 'shield' }
  return { ...st, streak: 0, state: 'broken' }
}
export function addPoints(n, label) {
  const x = ls.get('csc-xp', { total: 0, log: [] })
  x.total += n; x.log.unshift({ at: new Date().toISOString(), label, pts: n }); x.log = x.log.slice(0, 50)
  ls.set('csc-xp', x)
  return x.total
}
export function grantBadge(id, earned = []) {
  const b = ls.get('csc-badges', {}); if (b[id]) return
  b[id] = new Date().toISOString(); ls.set('csc-badges', b)
  earned.push(BADGES.find(x => x[0] === id)[1])
}

/* Points for a finished session, plus streak, rank and badge updates */
export function award({ score, total, passed, correctItems, mode, label }) {
  const lines = [], earned = []
  const base = correctItems.reduce((s, q) => s + ptsFor(q), 0)
  if (base) lines.push([`${score} correct answer${score > 1 ? 's' : ''}`, base])
  if (mode === 'trivia') {
    lines.push(['Daily trivia finished', 20]); if (score === total) lines.push(['Perfect trivia', 30])
    const tv = ls.get('csc-trivia', {}); if (tv.day === dayKey()) { tv.done = true; tv.score = score; tv.total = total; ls.set('csc-trivia', tv) }
    grantBadge('first-trivia', earned); if (score === total) grantBadge('perfect-trivia', earned)
  }
  if (mode === 'real') { lines.push(['Realistic exam finished', 50]); grantBadge('first-mock', earned); if (passed) { lines.push(['Passing rating', 100]); grantBadge('first-pass', earned) } }
  const before = ls.get('csc-xp', { total: 0 }).total
  const sum = lines.reduce((s, l) => s + l[1], 0)
  const after = sum ? addPoints(sum, label) : before
  const notes = []
  if (total >= 5 || mode === 'trivia') {
    const already = getStreak().last === dayKey()
    notes.push(...markActive())
    if (!already) { const n = getStreak().streak; notes.unshift(`Streak: ${n} day${n > 1 ? 's' : ''}.`) }
  }
  const st = getStreak(); if (st.streak >= 7) grantBadge('streak-7', earned); if (st.streak >= 30) grantBadge('streak-30', earned)
  if (after >= 1000) grantBadge('pts-1000', earned)
  const cc = ls.get('csc-correct', 0) + score; ls.set('csc-correct', cc); if (cc >= 100) grantBadge('century', earned)
  if (rankOf(after) > rankOf(before)) notes.push(`New rank: ${RANKS[rankOf(after)][1]}.`)
  if (earned.length) notes.push(`Achievement${earned.length > 1 ? 's' : ''} unlocked: ${earned.join(', ')}.`)
  return { sum, lines, notes }
}

/* Daily trivia: 5 items per day per level, the same set all day */
export function triviaToday(level) {
  const t = dayKey(); let tv = ls.get('csc-trivia', {})
  if (tv.day !== t || tv.level !== level) {
    const items = shuffle(levelPool(level)).slice(0, 3)
    let guard = 0
    while (items.length < 5 && guard++ < 50) { const g = genItem(LEVELS[level].cats, null, 'mixed'); if (g) items.push(g) }
    tv = { day: t, level, items: shuffle(items).map(q => (q.gen ? q : { id: q.id })), done: false }
    ls.set('csc-trivia', tv)
  }
  return tv
}
export const triviaItems = tv => tv.items.map(x => (x.gen ? x : BANK[x.id])).filter(Boolean)

/* ===================== DEVICE STORAGE: persistence, backup, restore ===================== */
/* Ask the browser to keep this app's data even when the device runs low on space */
export async function requestPersistence() {
  try {
    if (navigator.storage?.persisted && await navigator.storage.persisted()) return true
    if (navigator.storage?.persist) return await navigator.storage.persist()
  } catch { /* not supported */ }
  return false
}
export async function storageInfo() {
  let persisted = false, usage = null
  try { persisted = !!(await navigator.storage?.persisted?.()) } catch { /* ignore */ }
  try { const e = await navigator.storage?.estimate?.(); usage = e?.usage ?? null } catch { /* ignore */ }
  return { persisted, usage }
}

const PREFIX = 'csc-'
export function exportData() {
  const data = {}
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (k && k.startsWith(PREFIX)) data[k] = localStorage.getItem(k)
    }
  } catch { /* ignore */ }
  return { app: 'csc-mock-exam', version: 1, exportedAt: new Date().toISOString(), data }
}
/* Save the backup as a file. Uses the share sheet on phones when available (works inside installed apps),
   otherwise a normal download. */
export async function saveBackupFile() {
  const json = JSON.stringify(exportData())
  const name = `csc-exam-backup-${dayKey()}.json`
  if (window.Capacitor?.isNativePlatform?.()) {
    // Android app: write the file, then open the share sheet (Save to Files, Drive, Messenger…)
    const [{ Filesystem, Directory, Encoding }, { Share }] = await Promise.all([import('@capacitor/filesystem'), import('@capacitor/share')])
    const r = await Filesystem.writeFile({ path: name, data: json, directory: Directory.Cache, encoding: Encoding.UTF8 })
    try { await Share.share({ title: 'CSC Mock Exam backup', files: [r.uri] }); return 'shared' }
    catch (e) { if (/cancel/i.test(e?.message || '')) return 'cancelled'; throw e }
  }
  const file = typeof File === 'function' ? new File([json], name, { type: 'application/json' }) : null
  if (file && navigator.canShare?.({ files: [file] })) {
    try { await navigator.share({ files: [file], title: 'CSC Mock Exam backup' }); return 'shared' }
    catch (e) { if (e?.name === 'AbortError') return 'cancelled' }
  }
  const url = URL.createObjectURL(new Blob([json], { type: 'application/json' }))
  const a = document.createElement('a'); a.href = url; a.download = name
  document.body.appendChild(a); a.click(); a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 2000)
  return 'downloaded'
}
/* Restore from a backup file. Sessions are merged (no duplicates); other progress takes the backup's value
   when it is further along. */
export function importData(text) {
  const b = JSON.parse(text)
  if (!b || b.app !== 'csc-mock-exam' || typeof b.data !== 'object') throw new Error('This is not a CSC Mock Exam backup file.')
  const parse = v => { try { return JSON.parse(v) } catch { return null } }
  const incoming = Object.fromEntries(Object.entries(b.data).filter(([k]) => k.startsWith(PREFIX)).map(([k, v]) => [k, parse(v)]))
  // Sessions: merge by id
  const mine = ls.get(SKEY, []), ids = new Set(mine.map(r => r.id))
  const merged = [...mine, ...(incoming[SKEY] || []).filter(r => r && !ids.has(r.id))].sort((x, y) => y.id - x.id)
  let added = merged.length - mine.length
  while (merged.length && !ls.set(SKEY, merged)) { merged.pop(); added = Math.max(0, added - 1) }
  // Points: keep the larger total
  const xp = ls.get('csc-xp', { total: 0, log: [] }), xpIn = incoming['csc-xp']
  if (xpIn && xpIn.total > xp.total) ls.set('csc-xp', xpIn)
  // Badges and studied items: union
  ls.set('csc-badges', { ...(incoming['csc-badges'] || {}), ...ls.get('csc-badges', {}) })
  ls.set('csc-studied', [...new Set([...ls.get('csc-studied', []), ...(incoming['csc-studied'] || [])])])
  ls.set('csc-notes-read', [...new Set([...ls.get('csc-notes-read', []), ...(incoming['csc-notes-read'] || [])])])
  // Streak and correct-count: keep the one further along
  const st = getStreak(), stIn = incoming['csc-streak']
  if (stIn && (stIn.best > st.best || (stIn.last || '') > (st.last || ''))) ls.set('csc-streak', { ...stIn, best: Math.max(st.best, stIn.best) })
  if ((incoming['csc-correct'] || 0) > ls.get('csc-correct', 0)) ls.set('csc-correct', incoming['csc-correct'])
  // History and subject totals: rebuild-friendly, take the backup's when we have none
  for (const k of ['csc-history', 'csc-subj', 'csc-examdate', 'csc-name', 'csc-level']) {
    const cur = ls.get(k, null)
    if ((cur == null || (Array.isArray(cur) && !cur.length) || (typeof cur === 'object' && !Array.isArray(cur) && !Object.keys(cur).length)) && incoming[k] != null) ls.set(k, incoming[k])
  }
  return { added }
}
