import { useMemo, useState } from 'react'
import { CATS } from '../data/bank.js'
import { PASS } from '../lib/config.js'
import { hydrate } from '../lib/exam.js'
import { SKEY } from '../lib/progress.js'
import { ls } from '../lib/storage.js'
import { avg, fmt, fmtTime, fmtWhen } from '../lib/util.js'
import { DiffCard, ItemCard, SubjBars, TopBar } from './common.jsx'
import { useUI } from './ui.jsx'

const TESTS = {
  all: () => true, wrong: q => q.ans !== null && q.ans !== q.a, blank: q => q.ans === null,
  correct: q => q.ans === q.a, flag: q => q.flag
}
const NAMES = { all: 'All', wrong: 'Wrong', blank: 'Blank', correct: 'Correct', flag: 'Flagged' }

export default function Detail({ id, onBack, onDeleted }) {
  const { ask } = useUI()
  const [filter, setFilter] = useState('all')
  const [limit, setLimit] = useState(30)
  const rec = useMemo(() => ls.get(SKEY, []).find(r => r.id === id), [id])
  const items = useMemo(() => (rec ? hydrate(rec) : []), [rec])

  if (!rec) {
    return (<><TopBar left="Back" onLeft={onBack} title="Session" /><main className="wrap"><p className="empty">This session is no longer saved on this device.</p></main></>)
  }

  const by = {}
  items.forEach(q => { by[q.c] = by[q.c] || { t: 0, s: 0 }; by[q.c].t++; if (q.ans === q.a) by[q.c].s++ })
  const shown = items.map((q, i) => ({ q, i })).filter(({ q }) => TESTS[filter](q))
  const del = async () => {
    if (await ask('Delete this session?', 'This exam and its answers will be removed from this device.', 'Delete', 'Cancel', true)) {
      ls.set(SKEY, ls.get(SKEY, []).filter(r => r.id !== id)); onDeleted()
    }
  }

  return (
    <>
      <TopBar left="Back" onLeft={onBack} title={rec.label.length > 28 ? rec.label.slice(0, 26) + '…' : rec.label} />
      <main className="wrap narrow" id="main">
        <div className="card rating">
          <div className="lbl">{[rec.name, fmtWhen(rec.at), rec.timeUp ? 'time ran out' : ''].filter(Boolean).join(', ')}</div>
          <div className="num">{fmt(rec.rating)}</div>
          <div className={`stamp ${rec.rating >= PASS ? 'pass' : 'fail'}`}>{rec.rating >= PASS ? 'Passed' : 'Failed'}</div>
          <div className="stats" style={{ marginTop: 18 }}>
            <div className="stat"><b>{rec.score}/{rec.total}</b><span>Total score</span></div>
            <div className="stat"><b>{fmt(avg(Object.values(by).map(v => v.s / v.t * 100)))}</b><span>Average per subject</span></div>
            <div className="stat"><b>{fmtTime(rec.used || 0)}</b><span>Time used</span></div>
          </div>
        </div>
        <div className="card"><h2>Exam difficulty</h2><DiffCard items={items} answers={items.map(q => q.ans)} /></div>
        <div className="card"><h2>By subject</h2><div style={{ marginTop: 10 }}><SubjBars by={by} /></div></div>
        <div className="card">
          <h2>Every item explained</h2>
          <div className="chips" style={{ marginTop: 6 }} role="group" aria-label="Filter items">
            {Object.keys(TESTS).map(k => {
              const n = items.filter(TESTS[k]).length
              if (k === 'flag' && !n) return null
              return <button key={k} className="chip" aria-pressed={filter === k} onClick={() => { setFilter(k); setLimit(30) }}>{NAMES[k]} ({n})</button>
            })}
          </div>
        </div>
        {!shown.length && <p className="empty">No items in this filter.</p>}
        {shown.slice(0, limit).map(({ q, i }) => <ItemCard key={i} q={q} label={`Item ${i + 1}, ${CATS[q.c]}`} yours={q.ans} showStatus />)}
        <div className="stack">
          {shown.length > limit && <button className="btn ghost block" onClick={() => setLimit(l => l + 30)}>Show more items ({shown.length - limit} left)</button>}
          <button className="btn danger block" onClick={del}>Delete this session</button>
        </div>
      </main>
    </>
  )
}
