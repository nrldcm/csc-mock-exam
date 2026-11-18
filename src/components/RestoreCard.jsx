import { useEffect, useRef, useState } from 'react'
import { importData, isFreshInstall, readAutoBackup } from '../lib/progress.js'
import { ls } from '../lib/storage.js'
import { fmtWhen } from '../lib/util.js'
import { Spinner, useUI } from './ui.jsx'

/* Shown on a fresh install (no progress yet): restore the automatic backup or a backup file */
export default function RestoreCard({ onRestored }) {
  const { toast } = useUI()
  const [show, setShow] = useState(() => isFreshInstall() && !ls.get('csc-restore-dismissed', false))
  const [auto, setAuto] = useState(null)
  const [busy, setBusy] = useState(false)
  const fileRef = useRef(null)

  useEffect(() => { if (show) readAutoBackup().then(setAuto) }, [show])
  if (!show) return null

  const done = added => {
    toast(added ? `Welcome back! Restored ${added} session${added > 1 ? 's' : ''} and your progress.` : 'Backup restored.')
    setShow(false); onRestored?.()
  }
  const restoreAuto = () => {
    setBusy(true)
    try { done(importData(auto.text).added) } catch (e) { toast(e.message || 'Could not restore.', 'bad') }
    setBusy(false)
  }
  const restoreFile = async e => {
    const f = e.target.files?.[0]; e.target.value = ''
    if (!f) return
    setBusy(true)
    try { done(importData(await f.text()).added) } catch (err) { toast(err.message || 'That file could not be read.', 'bad') }
    setBusy(false)
  }
  const skip = () => { ls.set('csc-restore-dismissed', true); setShow(false) }

  return (
    <div className="card" style={{ borderColor: 'var(--seal)' }}>
      <h2>Reinstalled the app?</h2>
      <p className="sub">
        {auto
          ? <>We found an automatic backup from <b>{auto.at ? fmtWhen(auto.at) : 'an earlier install'}</b> with {auto.sessions} saved session{auto.sessions === 1 ? '' : 's'}.</>
          : <>If you used this app before, restore your sessions, points and streak from a backup file. Look in <b>Documents/CSC-Mock-Exam</b> or where you saved it.</>}
      </p>
      <div className="stack" style={{ marginTop: 0 }}>
        {auto && <button className="btn block" onClick={restoreAuto} disabled={busy}>{busy ? <Spinner label="Restoring" /> : 'Restore my progress'}</button>}
        <div className="row2">
          <button className="btn ghost" onClick={() => fileRef.current?.click()} disabled={busy}>Choose a backup file</button>
          <button className="btn ghost" onClick={skip}>I’m new here</button>
        </div>
        <input ref={fileRef} type="file" accept="application/json,.json" hidden onChange={restoreFile} />
      </div>
    </div>
  )
}
