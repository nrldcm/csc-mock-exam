/* Logic regression tests. Run: npm test  (plain Node, no dependencies)
   Covers the question bank, explanations, lessons, generators, abstract figures, exam building,
   session storage format, backup/restore, points/streaks and the result-share caption. */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const src = p => new URL('file:///' + path.join(ROOT, 'src', p).replace(/\\/g, '/'))
const readJSON = p => JSON.parse(fs.readFileSync(path.join(ROOT, 'src', p), 'utf8'))

// Browser shims for modules that touch localStorage / window
const store = new Map()
globalThis.localStorage = { getItem: k => (store.has(k) ? store.get(k) : null), setItem: (k, v) => store.set(k, String(v)), removeItem: k => store.delete(k), key: i => [...store.keys()][i] ?? null, get length() { return store.size } }
globalThis.window = globalThis.window || {}

let pass = 0, fail = 0
const failures = []
function test(name, fn) {
  try { fn(); pass++; console.log('  ✓', name) }
  catch (e) { fail++; failures.push([name, e.message]); console.log('  ✗', name, '\n     ', e.message) }
}
function assert(cond, msg) { if (!cond) throw new Error(msg) }
function eq(a, b, msg) { if (a !== b) throw new Error(`${msg}: expected ${JSON.stringify(b)}, got ${JSON.stringify(a)}`) }

const { BANK, CATS, DIFF } = await import(src('data/bank.js'))
const { genItem } = await import(src('data/generators.js'))
const { genAbstract, enc, dec, isFig } = await import(src('data/abstract.js'))
const { LEVELS, MODES, levelPool, PASS } = await import(src('lib/config.js'))
const { buildReal, nextBatch, prep, hydrate, examLevel, diffPool } = await import(src('lib/exam.js'))
const { NOTES: BASE_NOTES, NOTE_GROUPS } = await import(src('data/notes.js'))
const { lessonIdsFor } = await import(src('lib/lessonmap.js'))
const progress = await import(src('lib/progress.js'))
const { DONATE } = await import(src('data/donate.js'))

const MATH = fs.existsSync(path.join(ROOT, 'src/data/notes-math.json')) ? readJSON('data/notes-math.json') : []
const NOTES = [...BASE_NOTES, ...MATH]
const noteIds = new Set(NOTES.map(n => n.id))
const EXPLAIN_DIR = path.join(ROOT, 'src/data/explain')
const EXPLAIN = Object.assign({}, ...fs.readdirSync(EXPLAIN_DIR).filter(f => f.endsWith('.json')).map(f => readJSON('data/explain/' + f)))

const validItem = (q, where) => {
  assert(CATS[q.c], `${where}: unknown subject ${q.c}`)
  assert(Array.isArray(q.o) && q.o.length === 4, `${where}: needs 4 options`)
  assert(new Set(q.o).size === 4, `${where}: duplicate options ${JSON.stringify(q.o)}`)
  assert(Number.isInteger(q.a) && q.a >= 0 && q.a < 4, `${where}: answer index out of range`)
  assert(DIFF[q.d], `${where}: bad difficulty ${q.d}`)
  assert(q.e && q.e.length > 5, `${where}: missing explanation`)
  assert(!/undefined|NaN|\[object/.test(q.q + q.o.join('|') + q.e), `${where}: contains undefined/NaN`)
}

console.log('\nQuestion bank')
test(`every written item is valid (${BANK.length})`, () => BANK.forEach(q => validItem(q, `#${q.id}`)))
test('ids equal positions', () => BANK.forEach((q, i) => eq(q.id, i, 'id')))
test('no duplicate questions', () => { const s = new Set(); BANK.forEach(q => { const k = q.q + '|' + [...q.o].sort().join('|'); assert(!s.has(k), `duplicate #${q.id}`); s.add(k) }) })
test('every subject has items at every level it is used', () => {
  for (const [k, L] of Object.entries(LEVELS)) for (const c of L.cats) assert(BANK.some(q => q.c === c), `${k}: no ${c} items`)
})
test('written pool covers the realistic exam size', () => {
  for (const [k, L] of Object.entries(LEVELS)) assert(levelPool(k).length >= L.items - (L.abstract || 0), `${k}: pool too small`)
})

console.log('\nExplanations')
const fullX = q => q.x || EXPLAIN[q.id]
test('every written item has a full explanation', () => { const miss = BANK.filter(q => !fullX(q)).map(q => q.id); eq(miss.length, 0, `missing ids ${miss.slice(0, 20)}`) })
test('explanations: steps, tip, and a reason for every wrong option', () => {
  for (const q of BANK) {
    const x = fullX(q); if (!x) continue
    assert(Array.isArray(x.steps) && x.steps.length >= 2, `#${q.id}: steps`)
    assert(typeof x.tip === 'string' && x.tip.length > 3, `#${q.id}: tip`)
    const wrong = q.o.filter((_, i) => i !== q.a)
    for (const w of wrong) assert(x.wrong && x.wrong[w], `#${q.id}: no reason for "${w}"`)
    for (const k of Object.keys(x.wrong || {})) assert(wrong.includes(k), `#${q.id}: reason for non-option or for the answer "${k}"`)
  }
})
test('no explanation for an unknown id', () => { const extra = Object.keys(EXPLAIN).filter(k => !BANK[+k]); eq(extra.length, 0, `unknown ids ${extra}`) })

console.log('\nStudy notes and lessons')
test('note ids are unique', () => eq(noteIds.size, NOTES.length, 'unique ids'))
test('notes are well formed', () => {
  for (const n of NOTES) {
    assert(n.id && n.title && n.summary && Array.isArray(n.sections) && n.sections.length, `note ${n.id}`)
    for (const s of n.sections) {
      assert(s.h, `note ${n.id}: section without heading`)
      assert(s.p || s.list || s.table || s.examples, `note ${n.id}/${s.h}: empty section`)
      if (s.table) for (const r of s.table.rows) eq(r.length, s.table.head.length, `note ${n.id}/${s.h}: row width`)
      for (const e of s.examples || []) assert(e.q && Array.isArray(e.steps) && e.steps.length && e.a, `note ${n.id}: bad example`)
    }
  }
})
test('every note belongs to a known group', () => { const g = new Set(NOTE_GROUPS.map(x => x[0])); NOTES.forEach(n => assert(g.has(n.c), `note ${n.id}: group ${n.c}`)) })
test('16 detailed math lessons present', () => eq(MATH.length, 16, 'math lessons'))
const lessonOf = q => lessonIdsFor(q).find(id => noteIds.has(id))
test('every written item links to an existing lesson', () => { const miss = BANK.filter(q => !lessonOf(q)).map(q => q.id); eq(miss.length, 0, `no lesson for ${miss}`) })
test('numerical items link to the detailed math lessons', () => {
  const nonMath = BANK.filter(q => q.c === 'numerical' && !lessonOf(q).startsWith('math-')).map(q => q.id)
  eq(nonMath.length, 0, `numerical items not linked to a math lesson: ${nonMath}`)
})

console.log('\nGenerators')
test('24,000 generated items are valid in every subject and level', () => {
  for (const c of Object.keys(CATS)) for (let i = 0; i < 4000; i++) {
    const q = genItem([c], c, ['mixed', 'easy', 'average', 'difficult'][i % 4]); assert(q, `${c}: null`); validItem(q, `gen ${c}`)
    assert(lessonOf(q), `gen ${c}: no lesson for "${q.q.slice(0, 40)}"`)
  }
})
test('generated math items carry step-by-step solutions', () => {
  for (let i = 0; i < 3000; i++) { const q = genItem(['numerical'], 'numerical', 'mixed'); assert(Array.isArray(q.steps) && q.steps.length >= 2 && q.tip, `no steps: ${q.q.slice(0, 50)}`) }
})
test('generated math answers are computed correctly (spot checks)', () => {
  for (let i = 0; i < 3000; i++) {
    const q = genItem(['numerical'], 'numerical', 'mixed'), ans = q.o[q.a]
    let m
    if ((m = /^What is (\d+)% of ([\d,]+)\?$/.exec(q.q))) eq(+ans.replace(/,/g, ''), +m[1] * +m[2].replace(/,/g, '') / 100, q.q)
    if ((m = /^Solve for x: (\d+)x \+ (\d+) = (\d+)$/.exec(q.q))) eq(+ans, (+m[3] - +m[2]) / +m[1], q.q)
    if ((m = /^A rectangle is (\d+) m long and (\d+) m wide\. What is its perimeter\?$/.exec(q.q))) eq(ans, `${2 * (+m[1] + +m[2])} m`, q.q)
  }
})

console.log('\nAbstract reasoning')
test('20,000 abstract items are valid and unambiguous', () => {
  for (let i = 0; i < 20000; i++) {
    const q = genAbstract(['mixed', 'easy', 'average', 'difficult'][i % 4]); assert(q, 'null')
    validItem(q, 'abstract'); assert(q.o.every(isFig), 'options must be figures')
    q.o.forEach(t => eq(enc(dec(t)), t, 'canonical encoding'))
    if (q.fig) q.fig.items.forEach(t => eq(enc(dec(t)), t, 'canonical frame'))
    eq(lessonOf(q), 'abstract', 'abstract lesson')
  }
})
test('a rotation and its mirror image never encode the same', () => {
  for (const s of ['L', 'flag']) for (const r of [0, 45, 90, 135, 180, 225, 270, 315]) for (const r2 of [0, 45, 90, 135, 180, 225, 270, 315]) assert(enc({ s, r }) !== enc({ s, r: r2, f: 1 }), `${s} ${r}/${r2}`)
})

console.log('\nExam building')
for (const [k, L] of Object.entries(LEVELS)) {
  test(`${L.name} realistic exam: ${L.items} items, parts in order, no repeats`, () => {
    const set = buildReal(k); eq(set.length, L.items, 'item count')
    const order = [...new Set(set.map(q => q.c))]; eq(order.join(), L.cats.filter(c => set.some(q => q.c === c)).join(), 'part order')
    L.cats.forEach(c => assert(set.some(q => q.c === c), `missing part ${c}`))
    const ids = set.filter(q => !q.gen).map(q => q.id); eq(new Set(ids).size, ids.length, 'repeated written item')
    eq(set.filter(q => q.abs).length, L.abstract || 0, 'abstract items')
    assert(set.every(q => L.cats.includes(q.c)), 'item outside the level coverage')
  })
}
test('prep shuffles choices but keeps the right answer', () => { for (const q of BANK) { const p = prep(q); eq(p.o[p.a], q.o[q.a], `#${q.id}`) } })
test('unlimited practice batches respect difficulty', () => { for (const d of ['easy', 'average', 'difficult']) { const b = nextBatch([], 'pro', d); assert(b.length >= 20, 'batch size'); b.forEach(q => eq(q.d, d, 'difficulty')) } })
test('difficulty filter', () => { eq(diffPool(BANK, 'mixed').length, BANK.length, 'mixed'); assert(diffPool(BANK, 'easy').every(q => q.d === 'easy'), 'easy') })
test('exam level rating', () => { eq(examLevel(BANK.filter(q => q.d === 'easy')), 'easy', 'easy'); eq(examLevel(BANK.filter(q => q.d === 'difficult')), 'difficult', 'difficult') })

console.log('\nSaved sessions')
test('compact session record hydrates back exactly (written, generated and figure items)', () => {
  const items = [prep(BANK[5]), prep(BANK[44]), prep(genItem(['numerical'], 'numerical', 'mixed')), prep(genAbstract('mixed'))]
  const ans = [items[0].a, (items[1].a + 1) % 4, null, items[3].a]
  const rec = { flags: [1], items: items.map((q, i) => q.gen ? { g: { c: q.c, d: q.d, q: q.q, o: q.o, a: q.a, e: q.e, ...(q.fig ? { fig: q.fig } : {}) }, s: ans[i] ?? -1 } : [q.id, q.o.map(t => BANK[q.id].o.indexOf(t)).join(''), ans[i] ?? -1]) }
  const h = hydrate(JSON.parse(JSON.stringify(rec)))
  eq(h.length, 4, 'count')
  h.forEach((q, i) => { eq(q.o.join('|'), items[i].o.join('|'), `order ${i}`); eq(q.a, items[i].a, `key ${i}`); eq(q.ans, ans[i], `answer ${i}`) })
  eq(h[1].flag, true, 'flag'); assert(h[3].fig || !items[3].fig, 'figure kept')
})

console.log('\nBackup and progress')
test('backup → restore merges sessions without duplicates', () => {
  store.clear()
  progress.saveSession({ id: 1, rating: 85, items: [], flags: [] }); progress.saveSession({ id: 2, rating: 70, items: [], flags: [] })
  progress.addPoints(120, 'x')
  const backup = JSON.stringify(progress.exportData())
  store.clear(); progress.saveSession({ id: 3, rating: 90, items: [], flags: [] })
  const { added } = progress.importData(backup)
  eq(added, 2, 'added'); eq(JSON.parse(localStorage.getItem('csc-sessions')).map(r => r.id).join(), '3,2,1', 'merged order')
  eq(JSON.parse(localStorage.getItem('csc-xp')).total, 120, 'points restored')
  const again = progress.importData(backup); eq(again.added, 0, 'second import adds nothing')
})
test('restore rejects a file that is not a backup', () => { let threw = false; try { progress.importData('{"hello":1}') } catch { threw = true } assert(threw, 'should throw') })
test('fresh install detection', () => { store.clear(); eq(progress.isFreshInstall(), true, 'fresh'); progress.saveSession({ id: 9, rating: 1, items: [], flags: [] }); eq(progress.isFreshInstall(), false, 'not fresh') })
test('points, ranks and badges', () => {
  store.clear()
  const correct = BANK.slice(0, 10)
  const a = progress.award({ score: 10, total: 10, passed: true, correctItems: correct, mode: 'real', label: 'Realistic exam' })
  assert(a.sum >= 150, 'points for passing a realistic exam'); assert(JSON.parse(localStorage.getItem('csc-badges'))['first-pass'], 'passing badge')
  eq(progress.rankOf(0), 0, 'rank 0'); eq(progress.rankOf(6000), progress.RANKS.length - 1, 'top rank')
  eq(progress.getStreak().streak, 1, 'streak starts')
})
test('daily trivia: 5 items, same set all day', () => {
  store.clear(); const a = progress.triviaToday('pro'), b = progress.triviaToday('pro')
  eq(a.items.length, 5, 'count'); eq(JSON.stringify(a.items), JSON.stringify(b.items), 'stable'); eq(progress.triviaItems(a).length, 5, 'resolved')
})

console.log('\nConfiguration and content')
test('levels match CSC Advisory No. 10, s. 2026: 150 items / 3h10 and 145 items / 2h40', () => { eq(LEVELS.pro.items, 150, 'pro'); eq(LEVELS.pro.sec, 11400, 'pro time'); eq(LEVELS.sub.items, 145, 'sub'); eq(LEVELS.sub.sec, 9600, 'sub time'); eq(PASS, 80, 'passing') })
test('level coverage matches the official scope', () => {
  eq(LEVELS.pro.cats.join(), 'verbal,filipino,numerical,analytical,general', 'pro subjects')
  eq(LEVELS.sub.cats.join(), 'verbal,filipino,numerical,clerical,general', 'sub subjects')
})

console.log('\nOfficial scope and sources')
const { sourcesFor, SCOPE } = await import(src('data/sources.js'))
const allowedTopics = c => new Set([...SCOPE[c].topics, ...SCOPE.analytical.topics.map(t => `${t} (Analytical Ability)`), ...SCOPE.clerical.topics.map(t => `${t} (Clerical Ability)`)])
test('every written item is labeled with an official CSC topic', () => {
  const bad = BANK.filter(q => !allowedTopics(q.c).has(sourcesFor(q).subtopic)).map(q => `#${q.id}:${sourcesFor(q).subtopic}`)
  eq(bad.length, 0, `unlabeled ${bad.slice(0, 10)}`)
})
test('every official topic is practiced by at least one written item', () => {
  for (const [c, s] of Object.entries(SCOPE)) for (const t of s.topics) {
    if (c === 'analytical' && t === 'Symbolic logic/abstract reasoning') continue // also covered by the figure generator
    assert(BANK.some(q => q.c === c && sourcesFor(q).subtopic === t) || BANK.some(q => sourcesFor(q).subtopic === `${t} (${c === 'analytical' ? 'Analytical' : 'Clerical'} Ability)`), `${c}: no item for "${t}"`)
  }
})
test('every General Information item links to an official source', () => {
  const bad = BANK.filter(q => q.c === 'general' && !sourcesFor(q).refs.some(r => /^https:\/\//.test(r.url))).map(q => q.id)
  eq(bad.length, 0, `no source for ${bad}`)
})
test('every visible mode has a description', () => Object.entries(MODES).filter(([, m]) => !m.hidden).forEach(([k, m]) => assert(m.desc(LEVELS.pro).length > 10, k)))
test('donate methods are complete', () => DONATE.methods.forEach(m => assert(m.label && (m.num || m.url), m.label)))
const { revealNumber, maskNumber } = await import(src('data/donate.js'))
test('donation number is hidden: only masked on the page, full only when copied', () => {
  for (const m of DONATE.methods.filter(x => x.num)) {
    const full = revealNumber(m.num)
    assert(/^09\d{9}$/.test(full), `${m.label}: decodes to a mobile number`)
    const masked = maskNumber(m.num)
    assert(masked.startsWith(full.slice(0, 4)) && masked.endsWith(full.slice(-2)) && !masked.includes(full.slice(4, 9)), `${m.label}: mask hides the middle digits`)
  }
})
test('the full donation number appears nowhere in the source code', () => {
  const full = revealNumber(DONATE.methods.find(x => x.num).num)
  const spaced = `${full.slice(0, 4)} ${full.slice(4, 7)} ${full.slice(7)}`
  const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)])
  const hits = [...walk(path.join(ROOT, 'src')), path.join(ROOT, 'index.html'), path.join(ROOT, 'README.md')]
    .filter(f => /\.(js|jsx|json|html|md|css)$/.test(f)).filter(f => { const t = fs.readFileSync(f, 'utf8'); return t.includes(full) || t.includes(spaced) })
  eq(hits.length, 0, `number found in ${hits}`)
})
const { shareText, REPO_URL } = await import(src('lib/shareResult.js'))
test('share caption mentions the score, level and the repo', () => {
  const t = shareText({ rating: 86.47, passed: true, label: 'Realistic exam, Professional', score: 147, total: 170 })
  assert(t.includes('86.47') && t.includes('147/170') && t.includes('Professional') && t.includes(REPO_URL), t)
})

console.log(`\n${pass} passed, ${fail} failed`)
if (fail) { console.log('\nFailures:'); failures.forEach(([n, m]) => console.log(' -', n, '→', m)); process.exit(1) }
