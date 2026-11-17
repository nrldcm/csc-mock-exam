import { useEffect, useMemo, useState } from 'react'
import { CATS } from '../data/bank.js'
import { genItem } from '../data/generators.js'
import { genAbstract } from '../data/abstract.js'
import { LEVELS, levelPool } from '../lib/config.js'
import { ls } from '../lib/storage.js'
import { Footer, ItemCard, TopBar } from './common.jsx'
import { ListSkeleton } from './ui.jsx'

const STEP = 25

export default function Reviewer({ level, onPractice }) {
  const L = LEVELS[level]
  const lp = useMemo(() => levelPool(level), [level])
  const [src, setSrc] = useState('bank')
  const [cat, setCat] = useState('all')
  const [diff, setDiff] = useState('all')
  const [filter, setFilter] = useState('all')
  const [hide, setHide] = useState(false)
  const [limit, setLimit] = useState(STEP)
  const [term, setTerm] = useState('')
  const [q, setQ] = useState('')
  const [gen, setGen] = useState([])
  const [revealed, setRevealed] = useState(() => new Set())
  const [done, setDone] = useState(() => new Set(ls.get('csc-studied', [])))

  // Debounced search
  useEffect(() => { const t = setTimeout(() => { setQ(term); setLimit(STEP) }, 200); return () => clearTimeout(t) }, [term])

  // Generated items: build in the background so the skeleton can show first
  useEffect(() => {
    if ((src !== 'gen' && src !== 'abs') || gen.length >= limit) return
    const t = setTimeout(() => {
      const add = []
      while (gen.length + add.length < limit) {
        const g = src === 'abs' ? genAbstract(diff) : genItem(L.cats, cat === 'all' ? null : cat, diff)
        if (!g) break; add.push(g)
      }
      setGen(x => [...x, ...add])
    }, 30)
    return () => clearTimeout(t)
  }, [src, gen.length, limit, cat, diff, L.cats])

  const reset = () => { setLimit(STEP); setGen([]); setRevealed(new Set()) }
  const toggleStudied = id => {
    const s = new Set(done); s.has(id) ? s.delete(id) : s.add(id)
    ls.set('csc-studied', [...s]); setDone(s)
  }
  const reveal = k => setRevealed(s => new Set(s).add(k))
  const nd = lp.filter(x => done.has(x.id)).length
  const isGen = src === 'gen' || src === 'abs'
  const lowered = q.trim().toLowerCase()
  const shown = isGen ? [] : lp.filter(x => (cat === 'all' || x.c === cat) && (diff === 'all' || x.d === diff)
    && (filter === 'all' || (filter === 'done') === done.has(x.id))
    && (!lowered || (x.q + ' ' + x.o.join(' ') + ' ' + x.e).toLowerCase().includes(lowered)))

  return (
    <>
      <TopBar title={`${L.name} reviewer`} right={`${nd}/${lp.length}`} progress={nd / lp.length * 100} />
      <main className="wrap has-nav" id="main">
        <div className="card">
          <div className="chips" style={{ marginTop: 0 }} role="group" aria-label="Source">
            {[['bank', `Written items (${lp.length})`], ['gen', 'Unlimited new items'], ['abs', 'Abstract figures']].map(([k, v]) => (
              <button key={k} className="chip" aria-pressed={src === k} onClick={() => { setSrc(k); reset() }}>{v}</button>
            ))}
          </div>
          {!isGen && <input className="input" type="search" placeholder="Search a word, law or topic" aria-label="Search items" value={term} onChange={e => setTerm(e.target.value)} style={{ marginTop: 12 }} />}
          {src !== 'abs' && (
            <div className="chips" role="group" aria-label="Subject">
              {[['all', `All ${L.name} subjects`], ...L.cats.map(k => [k, CATS[k]])].map(([k, v]) => (
                <button key={k} className="chip" aria-pressed={cat === k} onClick={() => { setCat(k); reset() }}>{v}</button>
              ))}
            </div>
          )}
          <div className="chips" role="group" aria-label="Difficulty">
            {[['all', 'All levels'], ['easy', 'Easy'], ['average', 'Average'], ['difficult', 'Difficult']].map(([k, v]) => (
              <button key={k} className="chip" aria-pressed={diff === k} onClick={() => { setDiff(k); reset() }}>{v}</button>
            ))}
          </div>
          {!isGen && (
            <div className="chips" role="group" aria-label="Studied filter">
              {[['all', 'All items'], ['todo', 'Not yet studied'], ['done', 'Studied']].map(([k, v]) => (
                <button key={k} className="chip" aria-pressed={filter === k} onClick={() => { setFilter(k); setLimit(STEP) }}>{v}</button>
              ))}
            </div>
          )}
          <div className="switch">
            <div><b>Hide answers</b><small>Try each item first, then tap to reveal the answer</small></div>
            <button className="tog" role="switch" aria-checked={hide} aria-label="Hide answers" onClick={() => { setHide(!hide); setRevealed(new Set()) }} />
          </div>
          {src === 'abs'
            ? <button className="btn ghost block" style={{ marginTop: 14 }} onClick={() => onPractice('abstract')}>Practice abstract reasoning now</button>
            : cat !== 'all' && <button className="btn ghost block" style={{ marginTop: 14 }} onClick={() => onPractice(cat)}>Practice {CATS[cat]} now</button>}
        </div>

        <p className="sub" style={{ margin: '14px 2px 0' }} aria-live="polite">
          {isGen ? `${gen.length} new items so far. There is no limit; keep tapping “Show more items.”` : `${shown.length} item${shown.length === 1 ? '' : 's'}`}
        </p>

        {isGen ? <>
          {gen.map((x, i) => {
            const hidden = hide && !revealed.has('g' + i)
            return (
              <ItemCard key={i} q={x} label={`New item ${i + 1}, ${CATS[x.c]}`} hidden={hidden}>
                {hidden && <div className="ractions"><button className="btn small" onClick={() => reveal('g' + i)}>Show answer</button></div>}
              </ItemCard>
            )
          })}
          {gen.length < limit && <ListSkeleton n={gen.length ? 1 : 3} />}
          <div className="stack"><button className="btn ghost block" disabled={gen.length < limit} onClick={() => setLimit(l => l + STEP)}>Show more items</button></div>
        </> : <>
          {!shown.length && <p className="empty">No items match. Try another subject or search word.</p>}
          {shown.slice(0, limit).map(x => {
            const hidden = hide && !revealed.has(x.id)
            return (
              <ItemCard key={x.id} q={x} label={`No. ${x.id + 1}, ${CATS[x.c]}`} hidden={hidden}>
                <div className="ractions">
                  {hidden && <button className="btn small" onClick={() => reveal(x.id)}>Show answer</button>}
                  <button className={`btn ghost small${done.has(x.id) ? ' done' : ''}`} onClick={() => toggleStudied(x.id)} aria-pressed={done.has(x.id)}>{done.has(x.id) ? '✓ Studied' : 'Mark as studied'}</button>
                </div>
              </ItemCard>
            )
          })}
          {shown.length > limit && <div className="stack"><button className="btn ghost block" onClick={() => setLimit(l => l + STEP)}>Show more items ({shown.length - limit} left)</button></div>}
        </>}
        <Footer />
      </main>
    </>
  )
}
