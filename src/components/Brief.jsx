import { useState } from 'react'
import { CATS } from '../data/bank.js'
import { LEVELS } from '../lib/config.js'
import { ls } from '../lib/storage.js'
import { fmtTime } from '../lib/util.js'
import { Masthead } from './common.jsx'

export default function Brief({ set, level, onBack, onBegin }) {
  const L = LEVELS[level]
  const [name, setName] = useState(() => ls.get('csc-name', ''))
  const cnt = {}; set.forEach(q => { cnt[q.c] = (cnt[q.c] || 0) + 1 })
  const parts = Object.keys(CATS).filter(k => cnt[k])
  return (
    <>
      <Masthead title="Before you begin" sub="Read the instructions as you would on exam day" />
      <main className="wrap narrow" id="main">
        <div className="booklet">
          <div className="head">
            <div className="rp">Mock Examination Booklet</div>
            <h2>Career Service Examination, {L.name} Level</h2>
            <div className="rp">Practice set based on the official coverage</div>
          </div>
          <div className="body">
            <div className="facts">
              <div><b>{set.length}</b><span>items</span></div>
              <div><b>{fmtTime(L.sec)}</b><span>time limit</span></div>
              <div><b>80.00</b><span>passing rating</span></div>
            </div>
            <table className="parts">
              <tbody>{parts.map((k, i) => <tr key={k}><td>Part {i + 1}: {CATS[k]}</td><td>{cnt[k]} items</td></tr>)}</tbody>
            </table>
            <ol className="rules">
              <li>Choose the best answer for each item. Answers can be changed until you submit.</li>
              <li>The correct answers are shown only after you submit, just like the actual exam.</li>
              <li>Unanswered items are counted as wrong. There is no penalty for guessing, so answer every item.</li>
              <li>Flag items you are unsure of and go back to them using the answer sheet.</li>
              <li>When the time runs out, your answer sheet is submitted automatically.</li>
              <li>Your progress is saved on this device. You can leave and continue later.</li>
            </ol>
            <label htmlFor="examinee" style={{ fontWeight: 600, fontSize: '.9rem', display: 'block', marginBottom: 6 }}>Name of examinee (optional)</label>
            <input className="input" id="examinee" autoComplete="name" placeholder="Last name, First name" value={name} onChange={e => setName(e.target.value)} />
            <div className="stack" style={{ gridTemplateColumns: '1fr 2fr' }}>
              <button className="btn ghost" onClick={onBack}>Back</button>
              <button className="btn" onClick={() => { const nm = name.trim(); ls.set('csc-name', nm); onBegin(nm) }}>Begin examination</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
