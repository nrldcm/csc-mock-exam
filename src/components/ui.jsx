import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

/* App-wide dialog (confirm) and toast messages */
const UICtx = createContext(null)
export const useUI = () => useContext(UICtx)

export function UIProvider({ children }) {
  const [dlg, setDlg] = useState(null)
  const [toastMsg, setToastMsg] = useState(null)
  const dlgRef = useRef(null)
  const tRef = useRef()
  dlgRef.current = dlg

  const close = useCallback(v => {
    const d = dlgRef.current; if (!d) return
    dlgRef.current = null; setDlg(null); d.res(v)
  }, [])
  const ask = useCallback((title, body, yes, no, danger = false) =>
    new Promise(res => setDlg({ title, body, yes, no, danger, res })), [])
  const dismiss = useCallback(() => { if (!dlgRef.current) return false; close(false); return true }, [close])
  const toast = useCallback((msg, kind = '') => {
    setToastMsg({ msg, kind }); clearTimeout(tRef.current)
    tRef.current = setTimeout(() => setToastMsg(null), 4000)
  }, [])

  return (
    <UICtx.Provider value={{ ask, toast, dismiss }}>
      {children}
      {dlg && <Dialog dlg={dlg} onClose={close} />}
      {toastMsg && <div className={`toast ${toastMsg.kind}`} role="status" aria-live="polite">{toastMsg.msg}</div>}
    </UICtx.Provider>
  )
}

function Dialog({ dlg, onClose }) {
  const yesRef = useRef(null)
  useEffect(() => {
    yesRef.current?.focus()
    const k = e => { if (e.key === 'Escape') onClose(false) }
    document.addEventListener('keydown', k)
    return () => document.removeEventListener('keydown', k)
  }, [onClose])
  return (
    <div className="dialog" onClick={e => { if (e.target === e.currentTarget) onClose(false) }}>
      <div className="box" role="alertdialog" aria-modal="true" aria-labelledby="dlg-t" aria-describedby="dlg-b">
        <h2 id="dlg-t">{dlg.title}</h2>
        <p className="sub" id="dlg-b">{dlg.body}</p>
        <div className="row2" style={{ marginTop: 6 }}>
          <button className="btn ghost" onClick={() => onClose(false)}>{dlg.no}</button>
          <button ref={yesRef} className={`btn${dlg.danger ? ' danger' : ''}`} onClick={() => onClose(true)}>{dlg.yes}</button>
        </div>
      </div>
    </div>
  )
}

/* ---------- Loading states ---------- */
export const Spinner = ({ label }) => <span className="spin" role="progressbar" aria-label={label || 'Loading'} />

export function ScreenSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <div className="skel mast" />
      <main className="wrap">
        {[0, 1, 2].map(i => (
          <div className="card" key={i}>
            <div className="skel title" />
            <div className="skel line w90" />
            <div className="skel line w80" />
            <div className="skel block" />
            <div className="skel block" />
          </div>
        ))}
      </main>
    </div>
  )
}
export function ListSkeleton({ n = 3 }) {
  return Array.from({ length: n }, (_, i) => (
    <div className="card" key={i} aria-hidden="true">
      <div className="skel line w40" />
      <div className="skel line w90" />
      <div className="skel line w60" />
      <div className="skel block" />
      <div className="skel block" />
    </div>
  ))
}
