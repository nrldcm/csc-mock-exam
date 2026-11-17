import { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react'
import { BANK, CATS, DIFF } from './data/bank.js'
import { genItem } from './data/generators.js'
import { genAbstract } from './data/abstract.js'
import { LEVELS, MODES, PASS, SEC_PER_ITEM, levelPool } from './lib/config.js'
import { SESSION_KEY, buildReal, diffPool, examLevel, nextBatch, prep, weakestCat } from './lib/exam.js'
import { award, requestPersistence, saveSession, triviaItems, triviaToday } from './lib/progress.js'
import { ls } from './lib/storage.js'
import { checkForUpdate, dismiss as dismissUpdate, isNative, startUpdate, wasDismissed } from './lib/updater.js'
import { avg, shortDate, shuffle } from './lib/util.js'
import { BottomNav } from './components/common.jsx'
import Home from './components/Home.jsx'
import { ScreenSkeleton, UIProvider, useUI } from './components/ui.jsx'

// Screens load on demand; a skeleton shows while each one loads
const Brief = lazy(() => import('./components/Brief.jsx'))
const Quiz = lazy(() => import('./components/Quiz.jsx'))
const Results = lazy(() => import('./components/Results.jsx'))
const Reviewer = lazy(() => import('./components/Reviewer.jsx'))
const Sessions = lazy(() => import('./components/Sessions.jsx'))
const Detail = lazy(() => import('./components/Detail.jsx'))
const About = lazy(() => import('./components/About.jsx'))
const NotesList = lazy(() => import('./components/Notes.jsx').then(m => ({ default: m.NotesList })))
const NoteView = lazy(() => import('./components/Notes.jsx').then(m => ({ default: m.NoteView })))

const NAV_SCREENS = ['home', 'notes', 'reviewer', 'sessions', 'about']

export default function App() {
  return <UIProvider><Main /></UIProvider>
}

function Main() {
  const { toast, dismiss, ask } = useUI()
  const [screen, setScreen] = useState('home')
  const [level, setLevelRaw] = useState(() => { const v = ls.get('csc-level', 'pro'); return LEVELS[v] ? v : 'pro' })
  const [mode, setMode] = useState('real')
  const [diff, setDiff] = useState('mixed')
  const [timed, setTimed] = useState(true)
  const [pending, setPending] = useState(null)
  const [exam, setExam] = useState(null)
  const [result, setResult] = useState(null)
  const [detail, setDetail] = useState(null)
  const [note, setNote] = useState(null)
  const [homeKey, setHomeKey] = useState(0)
  const quizBack = useRef(null)

  const setLevel = v => { setLevelRaw(v); ls.set('csc-level', v) }
  const go = useCallback(s => { setScreen(s); if (s === 'home') setHomeKey(k => k + 1) }, [])

  useEffect(() => { window.scrollTo(0, 0) }, [screen])
  // Ask once to keep this app's data from being cleared automatically (granted silently for installed apps)
  useEffect(() => { requestPersistence() }, [])

  /* Android app: look for a newer release when the app opens or comes back to the front.
     Never interrupts an exam in progress. */
  const screenRef = useRef(screen); screenRef.current = screen
  useEffect(() => {
    if (!isNative()) return
    let handle, busy = false
    const run = async () => {
      if (busy || screenRef.current === 'quiz') return
      busy = true
      try {
        const info = await checkForUpdate().catch(() => null)
        if (!info?.available || wasDismissed(info) || screenRef.current === 'quiz') return
        const ok = await ask(`Update available: ${info.latest}`,
          `You have version ${info.current.name}. The new version downloads from GitHub and installs over this app. Your sessions and progress stay on this device.`,
          'Update now', 'Later')
        if (ok) startUpdate(info); else dismissUpdate(info)
      } finally { busy = false }
    }
    const t = setTimeout(run, 1500)
    import('@capacitor/app').then(({ App }) => App.addListener('resume', run)).then(h => { handle = h }).catch(() => {})
    return () => { clearTimeout(t); handle?.remove?.() }
  }, [ask])

  /* ---------- Starting an exam ---------- */
  const begin = (items, m, t, label, name = '') => {
    if (!items.length) { toast('No items match this choice. Try another difficulty.', 'bad'); return }
    const its = items.map(prep), L = LEVELS[level]
    setExam({
      items: its, ans: Array(its.length).fill(null), flags: Array(its.length).fill(false), idx: 0, mode: m, timed: t, used: 0,
      name, level, diff, realSec: L.sec, timeLeft: m === 'real' ? L.sec : its.length * SEC_PER_ITEM, label: label || MODES[m].label
    })
    setScreen('quiz')
  }

  const start = () => {
    const L = LEVELS[level], dl = diff === 'mixed' ? '' : `, ${DIFF[diff]}`
    if (mode === 'real') { setPending(buildReal(level)); setScreen('brief'); return }
    if (mode === 'endless') { begin(nextBatch([], level, diff), 'endless', false, `Unlimited practice, ${L.name}${dl}`); return }
    if (mode === 'quick') { begin(shuffle(diffPool(levelPool(level), diff)).slice(0, 30), 'quick', timed, `Practice with answers, ${L.name}${dl}`); return }
    const w = weakestCat(level)
    if (!w) { toast('Finish one exam first so the drill can find your weakest subject.'); return }
    let pool = diffPool(BANK.filter(q => q.c === w), diff), lbl = dl
    if (pool.length < 5) {
      pool = BANK.filter(q => q.c === w); lbl = ''
      if (diff !== 'mixed') toast(`Not enough ${DIFF[diff].toLowerCase()} items in this subject, so all levels are used.`)
    }
    begin(shuffle([...pool]).slice(0, 20), 'weak', timed, `${CATS[w]} drill${lbl}`)
  }

  /* Practice one subject from the notes or reviewer: 15 written + 5 fresh items */
  const practiceCat = c => {
    if (c === 'abstract') {
      const items = []; let guard = 0
      while (items.length < 20 && guard++ < 100) { const g = genAbstract('mixed'); if (g) items.push(g) }
      begin(items, 'quick', false, 'Abstract reasoning practice'); return
    }
    const written = shuffle(BANK.filter(q => q.c === c)).slice(0, 15)
    const cats = LEVELS[level].cats.includes(c) ? LEVELS[level].cats : [c]
    let guard = 0
    while (written.length < 20 && guard++ < 60) { const g = genItem(cats, c, 'mixed'); if (g) written.push(g) }
    begin(shuffle(written), 'quick', false, `${CATS[c]} practice`)
  }

  const resume = () => {
    const s = ls.get(SESSION_KEY, null); if (!s) return
    s.items.forEach(q => { if (!q.gen && q.id == null) q.id = BANK.findIndex(b => b.q === q.q) })
    if (s.items.some(q => !q.gen && q.id < 0)) {
      ls.del(SESSION_KEY); toast('That saved exam is from an older version and can’t be continued.', 'bad'); setHomeKey(k => k + 1); return
    }
    setExam({ ...s, flags: s.flags || Array(s.items.length).fill(false), level: s.level || level, diff: s.diff || 'mixed' })
    setScreen('quiz')
  }

  const playTrivia = () => {
    const tv = triviaToday(level); if (tv.done) return
    begin(triviaItems(tv), 'trivia', false, `Daily trivia, ${shortDate()}`)
  }

  /* ---------- Finishing: score, save to device, award points ---------- */
  const finish = useCallback((e, timeUp) => {
    ls.del(SESSION_KEY)
    let { items, ans, flags } = e
    if (e.mode === 'endless') {
      const keep = ans.map((a, i) => (a !== null ? i : -1)).filter(i => i >= 0)
      items = keep.map(i => items[i]); flags = keep.map(i => flags[i]); ans = keep.map(i => ans[i])
    }
    const total = items.length, score = items.filter((q, i) => ans[i] === q.a).length
    const rating = score / total * 100, passed = rating >= PASS

    const by = {}
    items.forEach((q, i) => { by[q.c] = by[q.c] || { t: 0, s: 0 }; by[q.c].t++; if (ans[i] === q.a) by[q.c].s++ })
    const runTot = ls.get('csc-subj', {})
    for (const [k, v] of Object.entries(by)) { runTot[k] = runTot[k] || { t: 0, s: 0 }; runTot[k].t += v.t; runTot[k].s += v.s }
    ls.set('csc-subj', runTot)

    // Compact record: [bank id, option order, chosen option] per written item; generated items stored whole
    const rec = {
      id: Date.now(), at: new Date().toISOString(), label: e.label, examLevel: e.level, level: examLevel(items), mode: e.mode, name: e.name || '',
      timeUp: !!timeUp, used: e.used, score, total, rating,
      items: items.map((q, i) => (q.gen
        ? { g: { c: q.c, d: q.d, q: q.q, o: q.o, a: q.a, e: q.e, ...(q.fig ? { fig: q.fig } : {}) }, s: ans[i] === null ? -1 : ans[i] }
        : [q.id, q.o.map(t => BANK[q.id].o.indexOf(t)).join(''), ans[i] === null ? -1 : ans[i]])),
      flags: flags.map((f, i) => (f ? i : -1)).filter(i => i >= 0)
    }
    saveSession(rec)

    const hist = ls.get('csc-history', [])
    hist.unshift({ date: shortDate(), label: e.label, score, total, rating })
    ls.set('csc-history', hist.slice(0, 30))

    const aw = award({ score, total, passed, mode: e.mode, label: e.label, correctItems: items.filter((q, i) => ans[i] === q.a) })
    const wrong = items.map((q, i) => ({ q, i, yours: ans[i] })).filter(({ q, i }) => ans[i] !== q.a)
    setResult({
      label: e.label, name: e.name, timeUp, rating, passed, score, total, by, items, ans, wrong, award: aw,
      need: Math.max(0, Math.ceil(PASS / 100 * total) - score),
      subjAvg: avg(Object.values(by).map(v => v.s / v.t * 100)), overallAvg: avg(hist.map(r => r.rating)),
      used: e.used, timed: e.timed, mode: e.mode, realSec: e.realSec || LEVELS[e.level || 'pro'].sec, blank: ans.filter(x => x === null).length,
      sessionId: rec.id, lastWrong: wrong.map(({ q }) => (q.gen ? { ...q } : BANK[q.id])).filter(Boolean)
    })
    setExam(null)
    setScreen('results')
  }, [])

  const leave = useCallback(() => { setExam(null); go('home') }, [go])

  /* ---------- Android back button / browser back ---------- */
  useEffect(() => {
    if (screen !== 'home' && !window.history.state?.csc) window.history.pushState({ csc: 1 }, '')
  }, [screen])
  const backRef = useRef()
  backRef.current = () => {
    const stay = () => window.history.pushState({ csc: 1 }, '')
    if (dismiss()) { if (screen !== 'home') stay(); return }
    if (screen === 'quiz') { stay(); quizBack.current?.(); return }
    if (screen === 'detail') { setScreen(detail?.from === 'results' ? 'results' : 'sessions'); return }
    if (screen === 'note') { setScreen('notes'); return }
    if (screen !== 'home') go('home')
  }
  useEffect(() => {
    const onPop = () => backRef.current()
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const openDetail = (id, from) => { setDetail({ id, from }); setScreen('detail') }

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      {screen === 'home' && (
        <Home key={homeKey} level={level} setLevel={setLevel} mode={mode} setMode={setMode} diff={diff} setDiff={setDiff}
          timed={timed} setTimed={setTimed} onStart={start} onResume={resume} onTrivia={playTrivia} go={go} />
      )}
      <Suspense fallback={<ScreenSkeleton />}>
        {screen === 'brief' && pending && (
          <Brief set={pending} level={level} onBack={() => go('home')} onBegin={nm => begin(pending, 'real', true, `Realistic exam, ${LEVELS[level].name}`, nm)} />
        )}
        {screen === 'quiz' && exam && <Quiz exam={exam} setExam={setExam} onFinish={finish} onLeave={leave} backRef={quizBack} />}
        {screen === 'results' && result && (
          <Results r={result} onReview={() => openDetail(result.sessionId, 'results')}
            onRetry={() => begin(shuffle([...result.lastWrong]), 'quick', false, 'Missed items practice')} onHome={() => go('home')} />
        )}
        {screen === 'reviewer' && <Reviewer level={level} onPractice={practiceCat} />}
        {screen === 'notes' && <NotesList level={level} onOpen={id => { setNote(id); setScreen('note') }} />}
        {screen === 'note' && note && <NoteView id={note} onBack={() => setScreen('notes')} onOpen={setNote} onPractice={practiceCat} />}
        {screen === 'sessions' && <Sessions onOpen={id => openDetail(id, 'sessions')} />}
        {screen === 'detail' && detail && (
          <Detail id={detail.id} onBack={() => setScreen(detail.from === 'results' ? 'results' : 'sessions')} onDeleted={() => setScreen('sessions')} />
        )}
        {screen === 'about' && <About />}
      </Suspense>
      {NAV_SCREENS.includes(screen) && <BottomNav current={screen} go={go} />}
    </>
  )
}
