import { useEffect, useState } from 'react'
import { CATS } from '../data/bank.js'
import { NOTES, NOTE_GROUPS } from '../data/notes.js'
import { LEVELS } from '../lib/config.js'
import { grantBadge } from '../lib/progress.js'
import { ls } from '../lib/storage.js'
import { Footer, Icon, TopBar } from './common.jsx'
import { useUI } from './ui.jsx'

const readSet = () => new Set(ls.get('csc-notes-read', []))

/* List of lessons, grouped by subject; subjects outside the chosen level are shown last */
export function NotesList({ level, onOpen }) {
  const L = LEVELS[level]
  const read = readSet()
  const inLevel = c => c === 'about' || L.cats.includes(c)
  const groups = [...NOTE_GROUPS].sort((a, b) => Number(inLevel(b[0])) - Number(inLevel(a[0])))
  const total = NOTES.length, nRead = NOTES.filter(n => read.has(n.id)).length
  return (
    <>
      <TopBar title="Study notes" right={`${nRead}/${total}`} progress={nRead / total * 100} />
      <main className="wrap has-nav" id="main">
        <p className="sub" style={{ margin: '4px 2px 0' }}>Short lessons for every part of the {L.name} exam. Read a topic, then practice it.</p>
        {groups.map(([c, title]) => {
          const list = NOTES.filter(n => n.c === c)
          if (!list.length) return null
          return (
            <div className="card" key={c}>
              <h2>{title}{!inLevel(c) && <span className="dbadge d-average">Other level</span>}</h2>
              {list.map(n => (
                <button className="topic" key={n.id} onClick={() => onOpen(n.id)}>
                  <span className="ic"><Icon.book /></span>
                  <span className="tx"><b>{n.title}</b><small>{n.summary}</small></span>
                  {read.has(n.id) && <span className="ck" aria-label="Read">✓</span>}
                </button>
              ))}
            </div>
          )
        })}
        <Footer />
      </main>
    </>
  )
}

export function NoteView({ id, onBack, onOpen, onPractice }) {
  const { toast } = useUI()
  const i = NOTES.findIndex(n => n.id === id)
  const n = NOTES[i]
  const [read, setRead] = useState(readSet)

  useEffect(() => { window.scrollTo(0, 0) }, [id])
  if (!n) return null

  const markRead = () => {
    const s = readSet(); s.add(n.id); ls.set('csc-notes-read', [...s]); setRead(s)
    if (NOTES.every(x => s.has(x.id))) { const e = []; grantBadge('scholar', e); if (e.length) toast('Achievement unlocked: Scholar') }
  }
  const prev = NOTES[i - 1], next = NOTES[i + 1]
  return (
    <>
      <TopBar left="Back" onLeft={onBack} title="Study notes" right={`${i + 1}/${NOTES.length}`} />
      <main className="wrap narrow" id="main">
        <div className="card note">
          <span className="qsection">{CATS[n.c] || 'Overview'}</span>
          <h2 style={{ fontSize: '1.4rem', margin: '4px 0 6px' }}>{n.title}</h2>
          <p className="sub">{n.summary}</p>
          {n.sections.map((s, k) => (
            <section key={k}>
              <h3>{s.h}</h3>
              {s.p && <p>{s.p}</p>}
              {s.list && <ul>{s.list.map((x, j) => <li key={j}>{x}</li>)}</ul>}
              {s.table && (
                <div className="tablewrap">
                  <table className="ntable">
                    <thead><tr>{s.table.head.map((h, j) => <th key={j} scope="col">{h}</th>)}</tr></thead>
                    <tbody>{s.table.rows.map((r, j) => <tr key={j}>{r.map((c, m) => <td key={m}>{c}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>
        <div className="stack">
          <button className={`btn block${read.has(n.id) ? ' done' : ''}`} onClick={markRead} disabled={read.has(n.id)}>{read.has(n.id) ? '✓ Marked as read' : 'Mark as read'}</button>
          {n.practice === 'abstract'
            ? <button className="btn ghost block" onClick={() => onPractice('abstract')}>Practice abstract reasoning (20 figure items)</button>
            : CATS[n.c] && <button className="btn ghost block" onClick={() => onPractice(n.c)}>Practice {CATS[n.c]}</button>}
          <div className="row2">
            <button className="btn ghost" disabled={!prev} onClick={() => prev && onOpen(prev.id)}>Previous</button>
            <button className="btn ghost" disabled={!next} onClick={() => next && onOpen(next.id)}>Next topic</button>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
