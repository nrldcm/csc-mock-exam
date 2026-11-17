import { isFig } from '../data/abstract.js'
import { CATS, DIFF } from '../data/bank.js'
import { FigQ, OptText } from './Figure.jsx'
import { PASS } from '../lib/config.js'
import { examLevel } from '../lib/exam.js'
import { fmt } from '../lib/util.js'

export const LINKEDIN = 'https://linkedin.com/in/nrldcm'
export const DEVELOPER = 'Norell Mantilla'

export function Masthead({ title, sub }) {
  return (
    <header className="mast">
      <div className="in">
        <div className="seal" aria-hidden="true">CS</div>
        <div><h1>{title}</h1>{sub && <p>{sub}</p>}</div>
      </div>
    </header>
  )
}

export function TopBar({ left, onLeft, title, right, progress }) {
  return (
    <div className="qbar">
      <div className="in">
        <div className="r1">
          {onLeft ? <button className="lnk" onClick={onLeft}>{left}</button> : <span style={{ minWidth: 56 }} />}
          <span style={{ fontWeight: 700 }}>{title}</span>
          <span style={{ fontSize: '.85rem', minWidth: 56 }}>{right}</span>
        </div>
        {progress != null && <div className="track"><i style={{ width: `${progress}%` }} /></div>}
      </div>
    </div>
  )
}

export const DBadge = ({ d }) => (d ? <span className={`dbadge d-${d}`}>{DIFF[d]}</span> : null)

export function Footer() {
  return (
    <footer className="foot">
      For practice only. Not affiliated with or endorsed by the Civil Service Commission.<br />
      Developed by <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">{DEVELOPER}</a>
    </footer>
  )
}

/* Score per subject as bars */
export function SubjBars({ by }) {
  return (
    <div className="subj">
      {Object.keys(CATS).filter(k => by[k]).map(k => {
        const { s, t } = by[k], p = s / t * 100
        return (
          <div className="row" key={k}>
            <span>{CATS[k]}</span><b>{s}/{t}, {fmt(p)}%</b>
            <div className="meter" role="img" aria-label={`${fmt(p)} percent`}><i style={{ width: `${p}%`, background: `var(${p >= PASS ? '--ok' : '--bad'})` }} /></div>
          </div>
        )
      })}
    </div>
  )
}

/* Overall level of the set, then the score at each level */
export function DiffCard({ items, answers }) {
  const lvl = examLevel(items), rows = []
  for (const k of ['easy', 'average', 'difficult']) {
    const idx = items.map((q, i) => i).filter(i => items[i].d === k); if (!idx.length) continue
    const sc = idx.filter(i => answers[i] === items[i].a).length
    rows.push({ k, sc, t: idx.length, p: sc / idx.length * 100 })
  }
  const weak = rows.filter(r => r.p < PASS).map(r => r.k)
  const tip = !weak.length ? 'You reached 80% at every level.'
    : weak.includes('easy') ? 'You are missing easy items. Slow down and read each question fully before answering.'
    : weak.includes('average') ? 'Average items are pulling your rating down. Use the study notes and reviewer on your weakest subject.'
    : 'Only the difficult items are below 80%. Study their explanations in the reviewer.'
  return (
    <>
      <p className="sub" style={{ marginBottom: 12 }}>
        This set is rated <DBadge d={lvl} /> overall, from its mix of {rows.map(r => `${r.t} ${DIFF[r.k].toLowerCase()}`).join(', ')} items.
      </p>
      <div className="subj">
        {rows.map(r => (
          <div className="row" key={r.k}>
            <span><DBadge d={r.k} /></span><b>{r.sc}/{r.t}, {fmt(r.p)}%</b>
            <div className="meter"><i style={{ width: `${r.p}%`, background: `var(${r.p >= PASS ? '--ok' : '--bad'})` }} /></div>
          </div>
        ))}
      </div>
      <p className="sub" style={{ margin: '12px 0 0' }}>{tip}</p>
    </>
  )
}

/* One item with every choice, the key, the examinee's answer and the explanation */
export function ItemCard({ q, label, yours, hidden, showStatus, children }) {
  const st = showStatus ? (yours == null ? 'b' : yours === q.a ? 'c' : 'w') : null
  return (
    <div className="card ritem">
      <div className="qhead">
        <span className="qsection">{label}<DBadge d={q.d} /></span>
        {st && <span className={`spill ${st}`}>{st === 'c' ? 'Correct' : st === 'w' ? 'Wrong' : 'Blank'}{q.flag ? ' ⚑' : ''}</span>}
      </div>
      <div className="q">{q.q}</div>
      <FigQ fig={q.fig} />
      <div>
        {q.o.map((t, i) => {
          const isKey = !hidden && i === q.a, isYours = showStatus && yours === i && i !== q.a
          return (
            <div key={i} className={'ropt' + (isKey ? ' k' : '') + (isYours ? ' y' : '')}>
              <span className="bub">{'ABCD'[i]}</span><span><OptText t={t} /></span>
              <span className="mk">{isKey ? (showStatus && yours === i ? 'Your answer, correct' : 'Correct answer') : isYours ? 'Your answer' : ''}</span>
            </div>
          )
        })}
      </div>
      {!hidden && (
        <div className="explain"><b>Explanation</b><p>The answer is {'ABCD'[q.a]}{isFig(q.o[q.a]) ? '' : `, ${q.o[q.a]}`}. {q.e}</p></div>
      )}
      {children}
    </div>
  )
}

/* ---------- Icons (inline SVG, inherit currentColor) ---------- */
const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', viewBox: '0 0 24 24', 'aria-hidden': true }
export const Icon = {
  home: () => <svg {...S}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M10 21v-6h4v6" /></svg>,
  book: () => <svg {...S}><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z" /><path d="M4 19.5V4.5" /><path d="M8 7h8M8 11h6" /></svg>,
  list: () => <svg {...S}><circle cx="5" cy="6" r="1.4" /><circle cx="5" cy="12" r="1.4" /><circle cx="5" cy="18" r="1.4" /><path d="M9 6h11M9 12h11M9 18h11" /></svg>,
  clock: () => <svg {...S}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  info: () => <svg {...S}><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5h.01" /></svg>,
  badge: () => <svg {...S} width="20" height="20"><circle cx="12" cy="9" r="6" /><path d="M8.5 14 7 22l5-3 5 3-1.5-8" /></svg>,
  help: () => <svg {...S} width="34" height="34"><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.3" /><path d="M12 17h.01" /></svg>,
  link: () => <svg {...S} width="18" height="18"><path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>,
  topic: { about: () => <svg {...S}><path d="M4 4h16v16H4z" /><path d="M8 9h8M8 13h8M8 17h5" /></svg> }
}

export function BottomNav({ current, go }) {
  const items = [['home', 'Home', Icon.home], ['notes', 'Study', Icon.book], ['reviewer', 'Reviewer', Icon.list], ['sessions', 'Sessions', Icon.clock], ['about', 'About', Icon.info]]
  return (
    <nav className="nav" aria-label="Main">
      <div className="in">
        {items.map(([k, label, Ic]) => (
          <button key={k} onClick={() => go(k)} aria-current={current === k ? 'page' : undefined}><Ic />{label}</button>
        ))}
      </div>
    </nav>
  )
}
