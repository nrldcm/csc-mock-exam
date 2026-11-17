import { useState } from 'react'
import { DONATE } from '../data/donate.js'
import { useUI } from './ui.jsx'

export const hasDonate = () => DONATE.methods.length > 0

const Heart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.7 4.5c2.1 0 3.6 1.1 4.3 2.6.7-1.5 2.2-2.6 4.3-2.6 3.7 0 5.8 3.8 4.3 7.2C19.5 16.4 12 21 12 21z" />
  </svg>
)

/* Full donate card with every method */
export function DonateCard({ compact = false }) {
  const { toast } = useUI()
  const [open, setOpen] = useState(!compact)
  const [tab, setTab] = useState(0)
  if (!hasDonate()) return null
  const m = DONATE.methods[tab]
  const copy = async text => {
    try { await navigator.clipboard.writeText(text.replace(/\s+/g, '')); toast(`${m.label} number copied`) }
    catch { toast('Could not copy. Long-press the number to copy it.') }
  }
  return (
    <div className="card donate">
      <div className="donate-head">
        <span className="heart"><Heart /></span>
        <div><h2>Support this app</h2><p className="sub" style={{ margin: 0 }}>{DONATE.message}</p></div>
      </div>
      {!open ? (
        <button className="btn block donate-btn" style={{ marginTop: 14 }} onClick={() => setOpen(true)}><Heart /> Donate</button>
      ) : (
        <>
          {DONATE.methods.length > 1 && (
            <div className="chips" role="tablist" aria-label="Donation method">
              {DONATE.methods.map((x, i) => <button key={x.label} className="chip" role="tab" aria-selected={tab === i} aria-pressed={tab === i} onClick={() => setTab(i)}>{x.label}</button>)}
            </div>
          )}
          <div className="donate-body">
            {m.qr && <img src={m.qr} alt={`${m.label} QR code`} className="donate-qr" loading="lazy" />}
            <div>
              <b style={{ fontSize: '1.05rem' }}>{m.label}</b>
              {m.number && <div className="donate-num">{m.number}</div>}
              {m.name && <div className="muted" style={{ fontSize: '.9rem' }}>{m.name}</div>}
              <div className="ractions">
                {m.number && <button className="btn small" onClick={() => copy(m.number)}>Copy number</button>}
                {m.url && <a className="btn small donate-btn" href={m.url} target="_blank" rel="noopener noreferrer"><Heart /> Donate with {m.label}</a>}
              </div>
            </div>
          </div>
          <p className="muted" style={{ fontSize: '.82rem', margin: '12px 0 0' }}>Donations are voluntary. Every feature stays free.</p>
        </>
      )}
    </div>
  )
}
