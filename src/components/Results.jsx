import { CATS } from '../data/bank.js'
import { PASS } from '../lib/config.js'
import { fmt, fmtTime } from '../lib/util.js'
import { DiffCard, Footer, Masthead, SubjBars } from './common.jsx'

export default function Results({ r, onReview, onRetry, onHome }) {
  return (
    <>
      <Masthead title="Examination result" sub={[r.name, r.label, r.timeUp ? 'time ran out' : ''].filter(Boolean).join(', ')} />
      <main className="wrap narrow" id="main">
        <div className="card rating">
          <div className="lbl">General rating</div>
          <div className="num">{fmt(r.rating)}</div>
          <div className={`stamp ${r.passed ? 'pass' : 'fail'}`}>{r.passed ? 'Passed' : 'Failed'}</div>
          <div className="need">
            {r.passed ? `You cleared the ${PASS}.00 passing rating by ${fmt(r.rating - PASS)} points.`
              : `You needed ${r.need} more correct answer${r.need > 1 ? 's' : ''} to reach ${PASS}.00.`}
          </div>
        </div>

        {r.award && (
          <div className="card award">
            <div className="muted" style={{ fontSize: '.9rem' }}>Points earned</div>
            <div className="big">+{r.award.sum}</div>
            <ul>{r.award.lines.map(([t, n], i) => <li key={i}><span>{t}</span><b>+{n}</b></li>)}</ul>
            {r.award.notes.length > 0 && <div className="note">{r.award.notes.join(' ')}</div>}
          </div>
        )}

        <div className="card">
          <h2>Score summary</h2>
          <div className="stats" style={{ marginTop: 10 }}>
            <div className="stat"><b>{r.score}/{r.total}</b><span>Total score</span></div>
            <div className="stat"><b>{fmt(r.subjAvg)}</b><span>Average per subject</span></div>
            <div className="stat"><b>{fmt(r.overallAvg)}</b><span>Average of all attempts</span></div>
          </div>
          <p className="sub" style={{ margin: '12px 0 0' }}>
            Time used: {fmtTime(r.used)}{r.timed && r.mode === 'real' ? ` of ${fmtTime(r.realSec)}` : ''}. Blank items: {r.blank}. Saved to My sessions on this device.
          </p>
        </div>

        <div className="card"><h2>Exam difficulty</h2><DiffCard items={r.items} answers={r.ans} /></div>
        <div className="card"><h2>By subject</h2><p className="sub">Green bars are at or above 80%.</p><SubjBars by={r.by} /></div>

        <div className="card">
          <div className="stack" style={{ marginTop: 0 }}>
            <button className="btn block" onClick={onReview}>Review every item with explanations</button>
            {r.wrong.length > 0 && <button className="btn ghost block" onClick={onRetry}>Practice the items I missed</button>}
            <button className="btn ghost block" onClick={onHome}>Back to home</button>
          </div>
        </div>

        <div className="card">
          <h2>Answer key for items you missed</h2>
          {!r.wrong.length && <p className="sub" style={{ margin: 0 }}>Every item correct.</p>}
          {r.wrong.slice(0, 60).map(({ q, i, yours }) => (
            <div className="rev" key={i}>
              <div className="qsection">Item {i + 1}, {CATS[q.c]}</div>
              <div className="q">{q.q}</div>
              <div className="ans">Your answer: <span className="y">{yours === null ? 'Left blank' : q.o[yours]}</span></div>
              <div className="ans">Correct answer: <span className="k">{q.o[q.a]}</span></div>
              <div className="ex">{q.e}</div>
            </div>
          ))}
          {r.wrong.length > 60 && <p className="sub" style={{ marginTop: 12 }}>Showing 60 of {r.wrong.length}. Open “Review every item” to see the rest.</p>}
        </div>
        <Footer />
      </main>
    </>
  )
}
