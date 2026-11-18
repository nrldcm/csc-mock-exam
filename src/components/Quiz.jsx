import { useCallback, useEffect, useRef, useState } from 'react'
import { CATS } from '../data/bank.js'
import { feedbackOn } from '../lib/config.js'
import { SESSION_KEY, nextBatch, prep, saveProgress } from '../lib/exam.js'
import { ptsFor } from '../lib/progress.js'
import { ls } from '../lib/storage.js'
import { fmt, fmtTime, reducedMotion } from '../lib/util.js'
import { isFig } from '../data/abstract.js'
import { DBadge, FullExplain } from './common.jsx'
import { explainFor } from '../lib/lessons.js'
import { FigQ, OptText, optWords } from './Figure.jsx'
import { useUI } from './ui.jsx'

const WARN = [[1800, '30 minutes remaining'], [600, '10 minutes remaining'], [300, '5 minutes remaining. Shade all your answers.']]

export default function Quiz({ exam, setExam, onFinish, onLeave, backRef }) {
  const { ask, toast, dismiss } = useUI()
  const fbOn = feedbackOn(exam.mode)
  const [sheet, setSheet] = useState(false)
  const [showMore, setShowMore] = useState(false)
  useEffect(() => { setShowMore(false) }, [exam.idx])
  const warned = useRef({})
  const done = useRef(false)
  const answered = useRef(false)
  const fbRef = useRef(null)
  const ex = useRef(exam); ex.current = exam
  const sheetRef = useRef(sheet); sheetRef.current = sheet

  /* Clock: one tick per second while this screen is open */
  useEffect(() => {
    const id = setInterval(() => setExam(e => (e ? { ...e, used: e.used + 1, timeLeft: e.timed ? e.timeLeft - 1 : e.timeLeft } : e)), 1000)
    return () => clearInterval(id)
  }, [setExam])

  /* Save to the device on every change of answer/flag/position, and every 10 seconds */
  useEffect(() => { if (!done.current) saveProgress(ex.current) }, [exam.ans, exam.flags, exam.idx, exam.items.length])
  useEffect(() => { if (!done.current && exam.used % 10 === 0) saveProgress(ex.current) }, [exam.used])

  /* Proctor-style time calls and automatic submission */
  useEffect(() => {
    if (!exam.timed || done.current) return
    for (const [sec, msg] of WARN) if (exam.timeLeft === sec && !warned.current[sec]) { warned.current[sec] = 1; toast(msg) }
    if (exam.timeLeft <= 0) {
      done.current = true; dismiss()
      toast('Time is up. Your answer sheet was submitted.', 'bad')
      onFinish(ex.current, true)
    }
  }, [exam.timeLeft, exam.timed, toast, dismiss, onFinish])

  /* Keep the screen awake during the exam (supported browsers) */
  useEffect(() => {
    let lock = null, alive = true
    const req = async () => {
      try {
        if ('wakeLock' in navigator && document.visibilityState === 'visible') {
          const l = await navigator.wakeLock.request('screen')
          if (alive) lock = l; else l.release().catch(() => {})
        }
      } catch { /* not allowed */ }
    }
    req()
    const onVis = () => { if (document.visibilityState === 'visible') req(); else saveProgress(ex.current) }
    document.addEventListener('visibilitychange', onVis)
    return () => { alive = false; document.removeEventListener('visibilitychange', onVis); lock?.release().catch(() => {}) }
  }, [])

  /* Scroll the feedback into view right after answering */
  useEffect(() => {
    if (answered.current) { answered.current = false; fbRef.current?.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'nearest' }) }
  })

  const goTo = useCallback(i => { setExam(e => ({ ...e, idx: i })); window.scrollTo(0, 0) }, [setExam])

  const choose = i => {
    const e = ex.current
    if (fbOn && e.ans[e.idx] !== null) return
    answered.current = fbOn
    setExam(x => { const ans = [...x.ans]; ans[x.idx] = (!fbOn && ans[x.idx] === i) ? null : i; return { ...x, ans } })
  }
  const shade = (qi, k) => setExam(x => { const ans = [...x.ans]; ans[qi] = ans[qi] === k ? null : k; return { ...x, ans } })
  const toggleFlag = () => setExam(x => { const flags = [...x.flags]; flags[x.idx] = !flags[x.idx]; return { ...x, flags } })

  const trySubmit = useCallback(async () => {
    const e = ex.current
    if (e.mode === 'endless') {
      const n = e.ans.filter(x => x !== null).length
      if (!n) {
        if (await ask('Stop practicing?', 'You haven’t answered any items yet, so nothing will be saved.', 'Stop', 'Keep going')) {
          done.current = true; ls.del(SESSION_KEY); onLeave()
        }
        return
      }
      if (await ask('Finish unlimited practice?', `${n} answered item${n > 1 ? 's' : ''} will be scored and saved. Skipped items are left out.`, 'Finish', 'Keep going')) {
        if (done.current) return
        done.current = true; setSheet(false); onFinish(ex.current, false)
      }
      return
    }
    const blank = e.ans.filter(x => x === null).length, fl = e.flags.filter(Boolean).length
    const bits = []
    if (blank) bits.push(`${blank} item${blank > 1 ? 's are' : ' is'} still blank and will be counted as wrong.`)
    if (fl && !fbOn) bits.push(`${fl} item${fl > 1 ? 's are' : ' is'} flagged for review.`)
    const ok = await ask(fbOn ? 'Finish this practice?' : 'Submit your answer sheet?',
      bits.join(' ') || 'All items are answered. You cannot change answers after submitting.', fbOn ? 'Finish' : 'Submit', 'Go back')
    if (ok && !done.current) { done.current = true; setSheet(false); onFinish(ex.current, false) }
  }, [ask, fbOn, onFinish, onLeave])

  const next = () => {
    const e = ex.current
    if (e.idx < e.items.length - 1) return goTo(e.idx + 1)
    if (e.mode === 'endless') {
      const more = nextBatch(e.items, e.level, e.diff || 'mixed').map(prep)
      setExam(x => ({ ...x, items: [...x.items, ...more], ans: [...x.ans, ...more.map(() => null)], flags: [...x.flags, ...more.map(() => false)], idx: x.idx + 1 }))
      window.scrollTo(0, 0); return
    }
    trySubmit()
  }

  const exit = useCallback(async () => {
    if (await ask('Leave the exam?', 'Your progress and remaining time are saved on this device. Continue from the home screen anytime.', 'Leave', 'Stay')) {
      saveProgress(ex.current); done.current = true; onLeave()
    }
  }, [ask, onLeave])

  /* Android back button / browser back */
  useEffect(() => {
    backRef.current = () => { if (sheetRef.current) setSheet(false); else exit() }
    return () => { backRef.current = null }
  }, [backRef, exit])

  /* Keyboard: A-D to answer, F to flag, arrows to move (tablets with keyboards, desktop) */
  const keyRef = useRef(); keyRef.current = { choose, next, goTo, toggleFlag, fbOn }
  useEffect(() => {
    const k = e => {
      if (sheetRef.current || document.querySelector('.dialog') || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) || e.ctrlKey || e.metaKey || e.altKey) return
      const h = keyRef.current, key = e.key.toUpperCase(), cur = ex.current
      if (key.length === 1 && 'ABCD'.includes(key) && 'ABCD'.indexOf(key) < cur.items[cur.idx].o.length) h.choose('ABCD'.indexOf(key))
      else if (key === 'F' && !h.fbOn) h.toggleFlag()
      else if (e.key === 'ArrowRight') h.next()
      else if (e.key === 'ArrowLeft' && cur.idx > 0) h.goTo(cur.idx - 1)
    }
    document.addEventListener('keydown', k)
    return () => document.removeEventListener('keydown', k)
  }, [])

  const q = exam.items[exam.idx], a = exam.ans[exam.idx], n = exam.items.length
  const locked = fbOn && a !== null
  const nAns = exam.ans.filter(x => x !== null).length
  const right = fbOn ? exam.items.filter((x, i) => exam.ans[i] === x.a).length : 0
  const flagged = exam.flags.filter(Boolean).length
  const three = !fbOn || exam.mode === 'endless'
  const last = exam.idx === n - 1 && exam.mode !== 'endless'

  return (
    <div className="quiz">
      <div className="qbar">
        <div className="in">
          <div className="r1">
            <button className="lnk" onClick={exit}>Exit</button>
            <span style={{ fontWeight: 700 }} aria-live="polite">{exam.mode === 'endless' ? `Item ${exam.idx + 1}` : `Item ${exam.idx + 1} of ${n}`}</span>
            {exam.timed ? <span className={`timer${exam.timeLeft < 300 ? ' low' : ''}`} role="timer" aria-label="Time left">{fmtTime(Math.max(exam.timeLeft, 0))}</span> : <span style={{ minWidth: 56 }} />}
          </div>
          <div className="track" role="progressbar" aria-valuemin={0} aria-valuemax={n} aria-valuenow={nAns} aria-label="Items answered"><i style={{ width: `${nAns / n * 100}%` }} /></div>
          <div className="live">
            {fbOn ? <>
              <span>✓ {right} correct</span><span>✗ {nAns - right} wrong</span>{nAns > 0 && <span>{fmt(right / nAns * 100)}% so far</span>}
            </> : <>
              <span>{nAns} answered</span><span>{n - nAns} blank</span>{flagged > 0 && <span>⚑ {flagged} flagged</span>}
            </>}
          </div>
        </div>
      </div>

      <main className="wrap quizpad" id="main">
        <div className="card">
          <div className="qhead">
            <span className="qsection">{CATS[q.c]}{fbOn && <DBadge d={q.d} />}</span>
            {exam.flags[exam.idx] && <span className="qflag">⚑ Flagged</span>}
          </div>
          <div className="q"><span className="n">{exam.idx + 1}.</span><span>{q.q}</span></div>
          <FigQ fig={q.fig} />
          <div role="group" aria-label="Choices" className={isFig(q.o[0]) ? 'figopts' : undefined}>
            {q.o.map((t, i) => {
              let c = 'opt'
              if (locked) c += i === q.a ? ' right' : i === a ? ' wrong' : ' dim'
              else if (a === i) c += ' sel'
              return (
                <button key={i} className={c} disabled={locked} aria-pressed={a === i} onClick={() => choose(i)}>
                  <span className="bub">{'ABCD'[i]}</span><span><OptText t={t} /></span>
                </button>
              )
            })}
          </div>
          {locked && (
            <div ref={fbRef} className={`fb ${a === q.a ? 'ok' : 'no'}`} role="status">
              <strong>{a === q.a ? `Correct  +${ptsFor(q)} pts` : `Wrong. The answer is ${'ABCD'[q.a]}${optWords(q.o[q.a])}`}</strong>
              <p>{q.e}</p>
              {explainFor(q) && (showMore
                ? <FullExplain q={q} />
                : <button className="btn ghost small xtoggle" onClick={() => setShowMore(true)}>Show full explanation</button>)}
            </div>
          )}
          <div className="more">
            <button className="btn ghost block" onClick={() => setSheet(true)}>{fbOn ? 'Jump to an item' : 'Open answer sheet'}</button>
          </div>
        </div>
      </main>

      <div className="dock">
        <div className={`in${three ? ' three' : ''}`}>
          <button className="btn ghost" onClick={() => goTo(exam.idx - 1)} disabled={exam.idx === 0}>Back</button>
          {three && (exam.mode === 'endless'
            ? <button className="btn ghost" onClick={trySubmit}>Finish</button>
            : <button className={`btn ghost${exam.flags[exam.idx] ? ' flagged' : ''}`} onClick={toggleFlag} aria-pressed={exam.flags[exam.idx]}>{exam.flags[exam.idx] ? '⚑ Flagged' : '⚑ Flag'}</button>)}
          <button className="btn" onClick={next}>{last ? (fbOn ? 'Finish' : 'Submit') : (a === null && fbOn ? 'Skip' : 'Next')}</button>
        </div>
      </div>

      {sheet && <AnswerSheet exam={exam} fbOn={fbOn} onClose={() => setSheet(false)} onGo={i => { setSheet(false); goTo(i) }} onShade={shade} onSubmit={trySubmit} />}
    </div>
  )
}

/* OMR-style answer sheet for every item */
function AnswerSheet({ exam, fbOn, onClose, onGo, onShade, onSubmit }) {
  const ref = useRef(null)
  useEffect(() => {
    ref.current?.querySelector(`[data-go="${exam.idx}"]`)?.scrollIntoView({ block: 'center' })
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  const nAns = exam.ans.filter(x => x !== null).length
  const rows = []; let lastC = null, part = 0
  exam.items.forEach((q, i) => {
    if (q.c !== lastC) { lastC = q.c; part++; rows.push(<div className="part" key={`p${i}`}>Part {part}: {CATS[q.c]}</div>) }
    const a = exam.ans[i]
    rows.push(
      <div className="orow" key={i}>
        <button className={`num${exam.flags[i] ? ' fl' : ''}${i === exam.idx ? ' cur' : ''}`} data-go={i} onClick={() => onGo(i)} aria-label={`Go to item ${i + 1}`}>{i + 1}</button>
        {q.o.map((_, k) => (
          <button key={k} className={`ob${a === k ? ' on' : ''}`} disabled={fbOn} onClick={() => onShade(i, k)} aria-label={`Item ${i + 1} choice ${'ABCD'[k]}`} aria-pressed={a === k}>{'ABCD'[k]}</button>
        ))}
      </div>
    )
  })
  return (
    <div className="sheet" role="dialog" aria-modal="true" aria-label="Answer sheet" ref={ref}>
      <div className="top">
        <div className="in">
          <h2>Answer sheet</h2>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn ghost sheet-close" onClick={onClose}>Close</button>
            <button className="btn sheet-submit" onClick={onSubmit}>{fbOn ? 'Finish' : 'Submit'}</button>
          </div>
        </div>
      </div>
      <div className="legend">
        <span>{nAns} of {exam.items.length} shaded</span>
        <span>{fbOn ? 'Tap a number to go to that item' : 'Tap a circle to shade it, or a number to open the item'}</span>
        {!fbOn && <span style={{ color: 'var(--flag)' }}>⚑ orange numbers are flagged</span>}
      </div>
      <div className="omr">{rows}</div>
    </div>
  )
}
