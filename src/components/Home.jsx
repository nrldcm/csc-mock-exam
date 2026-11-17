import { useMemo, useState } from 'react'
import { CATS, DIFF } from '../data/bank.js'
import { LEVELS, MODES, PASS, SEC_PER_ITEM, levelPool } from '../lib/config.js'
import { SESSION_KEY, weakestCat } from '../lib/exam.js'
import { BADGES, RANKS, SKEY, liveStreak, rankOf, triviaToday } from '../lib/progress.js'
import { ls } from '../lib/storage.js'
import { avg, dayDiff, dayKey, fmt, fmtTime } from '../lib/util.js'
import { Footer, Icon, Masthead } from './common.jsx'
import { DonateCard } from './Donate.jsx'
import { useUI } from './ui.jsx'

export default function Home({ level, setLevel, mode, setMode, diff, setDiff, timed, setTimed, onStart, onResume, onTrivia, go }) {
  const { ask } = useUI()
  const [, refresh] = useState(0)
  const L = LEVELS[level]
  const weak = weakestCat(level)
  const real = mode === 'real'
  const n = mode === 'quick' ? 30 : 20
  const sess = ls.get(SESSION_KEY, null)
  const nS = ls.get(SKEY, []).length
  const hist = ls.get('csc-history', [])
  const pool = useMemo(() => levelPool(level), [level])

  const discard = async () => {
    if (await ask('Discard this exam?', 'Your answers in this attempt will be deleted.', 'Discard', 'Keep it', true)) {
      ls.del(SESSION_KEY); refresh(x => x + 1)
    }
  }

  return (
    <>
      <Masthead title="Civil Service Mock Exam" sub={`Career Service ${L.name}, 80.00 passing rating`} />
      <main className="wrap has-nav" id="main">
        {sess && (
          <div className="card" style={{ borderColor: 'var(--seal)' }}>
            <h2>You have an exam in progress</h2>
            <p className="sub">{sess.label}: {sess.ans.filter(x => x !== null).length} of {sess.items.length} answered{sess.timed ? `, ${fmtTime(sess.timeLeft)} left` : ''}.</p>
            <div className="row2">
              <button className="btn ghost" onClick={discard}>Discard</button>
              <button className="btn" onClick={onResume}>Continue</button>
            </div>
          </div>
        )}

        <div className="home-grid">
          <div>
            <div className="card">
              <h2>Exam level</h2>
              <p className="sub">{L.note}</p>
              <div className="chips" style={{ margin: '-4px 0 18px' }} role="group" aria-label="Exam level">
                {Object.entries(LEVELS).map(([k, v]) => (
                  <button key={k} className="chip" aria-pressed={level === k} onClick={() => setLevel(k)}>{v.name}</button>
                ))}
              </div>
              <h2>Choose an exam</h2>
              <p className="sub">{real ? 'A full-length simulation with the same item count and time limit as the actual exam.' : 'Learn as you go: every answer is checked right away.'}</p>
              <div className="tiles" role="group" aria-label="Exam type">
                {Object.entries(MODES).filter(([, m]) => !m.hidden).map(([k, m]) => {
                  const off = k === 'weak' && !weak
                  const d = k === 'weak' && weak ? `20 items from ${CATS[weak]}, your lowest subject so far, with answers after each item.`
                    : off ? 'Finish one exam first so this can find your weakest subject.' : m.desc(L)
                  return (
                    <button key={k} className="tile" aria-pressed={mode === k} disabled={off} onClick={() => setMode(k)}>
                      <b>{m.label}{m.tag && <span className="tag">{m.tag}</span>}</b><span>{d}</span>
                    </button>
                  )
                })}
              </div>
              <div style={{ marginTop: 14 }}>
                <b>Difficulty</b>
                <small style={{ display: 'block', color: 'var(--muted)' }}>
                  {real ? 'The realistic exam always mixes easy, average and difficult items, like the actual exam.' : 'Choose the level of items for this practice.'}
                </small>
                {!real && (
                  <div className="chips" style={{ marginTop: 8 }} role="group" aria-label="Difficulty">
                    {[['mixed', 'Mixed'], ['easy', 'Easy'], ['average', 'Average'], ['difficult', 'Difficult']].map(([k, v]) => (
                      <button key={k} className="chip" aria-pressed={diff === k} onClick={() => setDiff(k)}>
                        {v}{k === 'mixed' ? '' : ` (${pool.filter(q => q.d === k).length})`}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {!(real || mode === 'endless') && (
                <div className="switch">
                  <div><b>Timer</b><small>{timed ? `${fmtTime(n * SEC_PER_ITEM)} for ${n} items, the same pace as the actual exam` : 'Off: take as long as you need'}</small></div>
                  <button className="tog" role="switch" aria-checked={timed} aria-label="Timer" onClick={() => setTimed(!timed)} />
                </div>
              )}
              <div className="stack">
                <button className="btn block" onClick={onStart}>
                  {real ? 'Continue to instructions' : mode === 'endless' ? 'Start unlimited practice' : 'Start practice'}
                </button>
              </div>
            </div>

            <div className="card">
              <h2>Study and review</h2>
              <p className="sub">Lessons for every part of the exam, and every item with its answer and explanation.</p>
              <div className="stack" style={{ marginTop: 0 }}>
                <button className="btn block" onClick={() => go('notes')}>Study notes for every subject</button>
                <button className="btn ghost block" onClick={() => go('reviewer')}>{L.name} reviewer, {pool.length} written items plus unlimited new ones</button>
                <button className="btn ghost block" onClick={() => go('sessions')}>{nS ? `My sessions (${nS} saved)` : 'My sessions'}</button>
              </div>
            </div>
          </div>

          <div>
            <TodayCard level={level} onTrivia={onTrivia} />

            {hist.length > 0 && (
              <div className="card">
                <h2>Your progress</h2>
                <p className="sub">Across your attempts on this device.</p>
                <div className="stats">
                  <div className="stat"><b>{fmt(avg(hist.map(r => r.rating)))}</b><span>Average rating</span></div>
                  <div className="stat"><b>{fmt(Math.max(...hist.map(r => r.rating)))}</b><span>Best rating</span></div>
                  <div className="stat"><b>{hist.filter(r => r.rating >= PASS).length}/{hist.length}</b><span>Passed</span></div>
                </div>
                <ul className="hist">
                  {hist.slice(0, 6).map((r, i) => (
                    <li key={i}>
                      <span>{r.date}, {r.label}<br /><small className="muted">{r.score}/{r.total} correct</small></span>
                      <span style={{ textAlign: 'right' }}><b>{fmt(r.rating)}</b><br /><span className={`pill ${r.rating >= PASS ? 'pass' : 'fail'}`}>{r.rating >= PASS ? 'Passed' : 'Failed'}</span></span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Badges />
            <DonateCard compact />
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

function TodayCard({ level, onTrivia }) {
  const st = liveStreak()
  const tv = useMemo(() => triviaToday(level), [level])
  const [examDate, setExamDate] = useState(() => ls.get('csc-examdate', ''))
  const days = new Set(st.days || [])
  const week = []
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i); const k = dayKey(d)
    week.push({ k, on: days.has(k), td: i === 0, l: 'SMTWTFS'[d.getDay()] })
  }
  const msg = {
    none: 'Finish the daily trivia or any practice to start a streak.', done: 'Today is covered. See you tomorrow.',
    risk: 'Review today to keep your streak going.', shield: 'You missed a day, but a shield will cover it if you review today.',
    broken: 'Your streak ended. Start a new one today.'
  }[st.state]
  const p = ls.get('csc-xp', { total: 0 }).total, ri = rankOf(p), nx = RANKS[ri + 1]
  const n = examDate ? dayDiff(dayKey(), examDate) : null

  return (
    <div className="card today">
      <div className="top">
        <div className="flame" aria-label={`${st.streak} day review streak`}><div><b>{st.streak}</b><span>day streak</span></div></div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
            <b>Review streak</b><small className="muted">{st.shields ? `${st.shields} shield${st.shields > 1 ? 's' : ''}` : ''}</small>
          </div>
          <div className="week">{week.map(w => <i key={w.k} className={`${w.on ? 'on' : ''}${w.td ? ' td' : ''}`} title={w.k}>{w.l}</i>)}</div>
          <div className="streakmsg">{msg}</div>
        </div>
      </div>
      <div className="trivia">
        <span style={{ color: 'var(--accent-text)' }}><Icon.help /></span>
        <div className="tx"><b>Daily trivia</b><span>{tv.done ? `Done today: ${tv.score}/${tv.total}. New questions tomorrow.` : '5 questions from today’s set, +20 bonus when you finish'}</span></div>
        <button className="btn" onClick={onTrivia} disabled={!!tv.done}>{tv.done ? 'Done' : 'Play'}</button>
      </div>
      <div className="rankrow">
        <div className="r1">
          <span><span style={{ fontSize: '.8rem', display: 'block' }} className="muted">Eligibility rank</span><span className="rk">{RANKS[ri][1]}</span></span>
          <span className="pts">{p.toLocaleString('en-US')} pts</span>
        </div>
        <div className="bar"><i style={{ width: nx ? `${(p - RANKS[ri][0]) / (nx[0] - RANKS[ri][0]) * 100}%` : '100%' }} /></div>
        <small>{nx ? `${(nx[0] - p).toLocaleString('en-US')} points to ${nx[1]}. Easy items give 5, average 10, difficult 15.` : 'Top rank reached.'}</small>
      </div>
      <div className="count">
        <label htmlFor="examDate" style={{ fontWeight: 600 }}>My exam date</label>
        <input type="date" id="examDate" value={examDate} onChange={e => { setExamDate(e.target.value); ls.set('csc-examdate', e.target.value) }} />
        <span>
          {n == null ? 'Set it to see a countdown.'
            : n > 0 ? <><span className="days">{n}</span> day{n > 1 ? 's' : ''} to go</>
            : n === 0 ? <><span className="days">Exam day.</span> You’ve got this.</>
            : 'That date has passed. Set your next exam date.'}
        </span>
      </div>
    </div>
  )
}

function Badges() {
  const got = ls.get('csc-badges', {})
  return (
    <div className="card">
      <h2>Achievements</h2>
      <p className="sub">{Object.keys(got).length} of {BADGES.length} unlocked</p>
      <div className="badges">
        {BADGES.map(([id, t, d]) => (
          <div key={id} className={`badge${got[id] ? ' got' : ''}`}>
            <div className="ic"><Icon.badge /></div><b>{t}</b>{d}
          </div>
        ))}
      </div>
    </div>
  )
}

export const diffText = d => (d === 'mixed' ? '' : `, ${DIFF[d]}`)
