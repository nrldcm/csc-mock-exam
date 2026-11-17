import { useEffect, useRef, useState } from 'react'
import { PASS } from '../lib/config.js'
import { examLevel, hydrate } from '../lib/exam.js'
import { SKEY, importData, requestPersistence, saveBackupFile, storageInfo } from '../lib/progress.js'
import { ls } from '../lib/storage.js'
import { avg, fmt, fmtWhen } from '../lib/util.js'
import { DBadge, Footer, TopBar } from './common.jsx'
import { ListSkeleton, Spinner, useUI } from './ui.jsx'

export default function Sessions({ onOpen }) {
  const { ask, toast } = useUI()
  const [all, setAll] = useState(null)
  const [info, setInfo] = useState(null)
  const [busy, setBusy] = useState('')
  const fileRef = useRef(null)

  useEffect(() => {
    // Read after first paint so the skeleton shows on slow devices with many sessions
    const t = setTimeout(() => setAll(ls.get(SKEY, [])), 0)
    storageInfo().then(setInfo)
    return () => clearTimeout(t)
  }, [])

  const clear = async () => {
    if (await ask('Delete all sessions?', 'Every saved exam and its answers will be removed from this device. Make a backup first if you want to keep them.', 'Delete all', 'Cancel', true)) {
      ls.del(SKEY); ls.del('csc-history'); ls.del('csc-subj'); setAll([])
    }
  }
  const backup = async () => {
    setBusy('backup')
    try {
      const r = await saveBackupFile()
      if (r !== 'cancelled') toast(r === 'shared' ? 'Backup ready. Save it to Files or Drive.' : 'Backup file saved to Downloads.')
    } catch { toast('Could not create the backup file.', 'bad') }
    setBusy('')
  }
  const restore = async e => {
    const f = e.target.files?.[0]; e.target.value = ''
    if (!f) return
    setBusy('restore')
    try {
      const { added } = importData(await f.text())
      setAll(ls.get(SKEY, []))
      toast(added ? `Restored ${added} session${added > 1 ? 's' : ''} and your progress.` : 'Backup restored. No new sessions were found.')
    } catch (err) { toast(err.message || 'That file could not be read.', 'bad') }
    setBusy('')
  }
  const keep = async () => {
    const ok = await requestPersistence()
    setInfo(await storageInfo())
    toast(ok ? 'Storage protected. Your data will not be cleared automatically.' : 'This browser did not allow it. Install the app or make regular backups.')
  }

  return (
    <>
      <TopBar title="My sessions" right={all ? `${all.length} saved` : ''} />
      <main className="wrap has-nav" id="main">
        {all === null ? <ListSkeleton n={2} /> : <>
          {all.length > 0 && (
            <div className="card">
              <div className="stats">
                <div className="stat"><b>{fmt(avg(all.map(r => r.rating)))}</b><span>Average rating</span></div>
                <div className="stat"><b>{fmt(Math.max(...all.map(r => r.rating)))}</b><span>Best rating</span></div>
                <div className="stat"><b>{all.filter(r => r.rating >= PASS).length}/{all.length}</b><span>Passed</span></div>
              </div>
            </div>
          )}
          <div className="card">
            <h2>Saved exams</h2>
            <p className="sub">Every finished exam is saved on this device. Tap one to see each item, your answer and the explanation.</p>
            <ul className="slist">
              {!all.length && <li className="empty">No saved sessions yet. Finish an exam or practice and it will appear here.</li>}
              {all.map(r => (
                <li key={r.id}>
                  <button onClick={() => onOpen(r.id)}>
                    <span><b>{r.label}</b><DBadge d={r.level || examLevel(hydrate(r))} /><br /><small>{fmtWhen(r.at)}, {r.score}/{r.total} correct</small></span>
                    <span style={{ textAlign: 'right' }}><b>{fmt(r.rating)}</b><br /><span className={`pill ${r.rating >= PASS ? 'pass' : 'fail'}`}>{r.rating >= PASS ? 'Passed' : 'Failed'}</span></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>}

        <div className="card">
          <h2>Data on this device</h2>
          <p className="sub">
            Sessions, points, streaks and notes are stored only on this phone or tablet. Nothing is uploaded.
            {info && <> Storage: <b>{info.persisted ? 'protected' : 'not yet protected'}</b>{info.usage != null ? `, ${(info.usage / 1024).toFixed(0)} KB used` : ''}.</>}
          </p>
          <div className="stack" style={{ marginTop: 0 }}>
            {info && !info.persisted && <button className="btn ghost block" onClick={keep}>Protect my data from automatic clearing</button>}
            <div className="row2">
              <button className="btn ghost" onClick={backup} disabled={!!busy}>{busy === 'backup' ? <Spinner label="Saving" /> : 'Back up to a file'}</button>
              <button className="btn ghost" onClick={() => fileRef.current?.click()} disabled={!!busy}>{busy === 'restore' ? <Spinner label="Restoring" /> : 'Restore from file'}</button>
            </div>
            <input ref={fileRef} type="file" accept="application/json,.json" hidden onChange={restore} />
            {all?.length > 0 && <button className="btn danger block" onClick={clear}>Delete all sessions</button>}
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
