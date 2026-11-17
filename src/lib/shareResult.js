/* Draws a 1080×1080 result card (rating, stamp, subject scores, repo link) and shares it. */
import { CATS } from '../data/bank.js'
import { PASS } from './config.js'
import { fmt, fmtTime } from './util.js'

export const REPO_URL = 'https://github.com/nrldcm/csc-mock-exam'
const NAVY = '#1F3A68', GOLD = '#B8901C', GOLD2 = '#D9B54A', OK = '#23704A', BAD = '#B3261E', INK = '#161A22', MUTED = '#5B6270'
const SERIF = '"Source Serif 4", Georgia, serif', SANS = '"Public Sans", "Segoe UI", Roboto, sans-serif'
const GH = 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.3 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3'

function rr(ctx, x, y, w, h, r) {
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath()
}
function fit(ctx, text, max) {
  if (ctx.measureText(text).width <= max) return text
  while (text.length > 1 && ctx.measureText(text + '…').width > max) text = text.slice(0, -1)
  return text + '…'
}

export async function drawResultCard(r) {
  try { await document.fonts?.ready } catch { /* ignore */ }
  const S = 1080, c = document.createElement('canvas'); c.width = S; c.height = S
  const ctx = c.getContext('2d')

  // Background
  const g = ctx.createLinearGradient(0, 0, S, S); g.addColorStop(0, '#22427A'); g.addColorStop(1, '#172C52')
  ctx.fillStyle = g; ctx.fillRect(0, 0, S, S)
  const glow = ctx.createRadialGradient(S * 0.9, S * 0.08, 0, S * 0.9, S * 0.08, 460)
  glow.addColorStop(0, 'rgba(217,181,74,.32)'); glow.addColorStop(1, 'rgba(217,181,74,0)')
  ctx.fillStyle = glow; ctx.fillRect(0, 0, S, S)
  ctx.fillStyle = 'rgba(255,255,255,.06)'
  for (let y = 11; y < S; y += 22) for (let x = 11; x < S; x += 22) { ctx.beginPath(); ctx.arc(x, y, 1.3, 0, 7); ctx.fill() }

  // Header
  ctx.strokeStyle = GOLD; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(102, 104, 32, 0, 7); ctx.stroke()
  ctx.fillStyle = GOLD2; ctx.font = `700 24px ${SERIF}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('CS', 102, 106)
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'
  ctx.font = `800 25px ${SANS}`; ctx.fillStyle = GOLD2
  if ('letterSpacing' in ctx) ctx.letterSpacing = '4px'
  ctx.fillText('CIVIL SERVICE MOCK EXAM', 154, 98)
  if ('letterSpacing' in ctx) ctx.letterSpacing = '0px'
  ctx.font = `500 23px ${SANS}`; ctx.fillStyle = 'rgba(255,255,255,.8)'
  ctx.fillText(fit(ctx, [r.label, r.name].filter(Boolean).join(' · '), 840), 154, 132)

  // Result card
  const cx = 72, cy = 186, cw = S - 144, ch = 650
  ctx.save(); ctx.shadowColor = 'rgba(0,0,0,.3)'; ctx.shadowBlur = 40; ctx.shadowOffsetY = 14
  ctx.fillStyle = '#fff'; rr(ctx, cx, cy, cw, ch, 34); ctx.fill(); ctx.restore()

  ctx.textAlign = 'center'; ctx.fillStyle = MUTED; ctx.font = `600 26px ${SANS}`
  ctx.fillText('General rating', S / 2, cy + 70)
  ctx.fillStyle = NAVY; ctx.font = `700 150px ${SERIF}`
  ctx.fillText(fmt(r.rating), S / 2, cy + 225)

  // Stamp
  const col = r.passed ? OK : BAD, word = r.passed ? 'PASSED' : 'KEEP GOING'
  ctx.save(); ctx.translate(S / 2, cy + 292); ctx.rotate(-0.06)
  ctx.font = `700 40px ${SERIF}`; const sw = ctx.measureText(word).width + 64
  ctx.strokeStyle = col; ctx.lineWidth = 5; rr(ctx, -sw / 2, -36, sw, 72, 12); ctx.stroke()
  ctx.fillStyle = col; ctx.textBaseline = 'middle'; ctx.fillText(word, 0, 2); ctx.restore()
  ctx.textBaseline = 'alphabetic'

  ctx.fillStyle = INK; ctx.font = `600 25px ${SANS}`
  ctx.fillText(`${r.score} of ${r.total} correct   ·   passing rating ${PASS}.00${r.used ? `   ·   ${fmtTime(r.used)}` : ''}`, S / 2, cy + 378)

  // Subject bars
  const rows = Object.keys(CATS).filter(k => r.by[k]).slice(0, 5)
  const top = cy + 420, step = rows.length > 4 ? 44 : 52, bx = cx + 56, bw = cw - 112
  ctx.textAlign = 'left'
  rows.forEach((k, i) => {
    const { s, t } = r.by[k], p = s / t * 100, y = top + i * step
    ctx.fillStyle = INK; ctx.font = `600 21px ${SANS}`; ctx.fillText(CATS[k], bx, y)
    ctx.textAlign = 'right'; ctx.fillStyle = MUTED; ctx.fillText(`${s}/${t} · ${Math.round(p)}%`, bx + bw, y); ctx.textAlign = 'left'
    ctx.fillStyle = '#E4E8EE'; rr(ctx, bx, y + 9, bw, 10, 5); ctx.fill()
    ctx.fillStyle = p >= PASS ? OK : BAD; rr(ctx, bx, y + 9, Math.max(10, bw * p / 100), 10, 5); ctx.fill()
  })

  // Repo pill
  ctx.font = `700 30px ${SANS}`
  const link = 'github.com/nrldcm/csc-mock-exam', lw = ctx.measureText(link).width + 110, ly = 880
  ctx.save(); ctx.shadowColor = 'rgba(0,0,0,.25)'; ctx.shadowBlur = 24; ctx.shadowOffsetY = 8
  ctx.fillStyle = '#fff'; rr(ctx, 72, ly, lw, 72, 36); ctx.fill(); ctx.restore()
  ctx.save(); ctx.translate(96, ly + 16); ctx.scale(40 / 24, 40 / 24); ctx.fillStyle = NAVY; ctx.fill(new Path2D(GH)); ctx.restore()
  ctx.fillStyle = NAVY; ctx.fillText(link, 152, ly + 47)

  ctx.fillStyle = 'rgba(255,255,255,.88)'; ctx.font = `500 22px ${SANS}`
  ctx.fillText('Free reviewer app · Developed by Norell Mantilla', 72, 1000)
  ctx.fillStyle = 'rgba(255,255,255,.55)'; ctx.font = `400 17px ${SANS}`
  ctx.fillText('Practice exam score. Independent study aid, not affiliated with the Civil Service Commission.', 72, 1036)

  return c
}

export const shareText = r =>
  `I got ${fmt(r.rating)} (${r.passed ? 'Passed' : 'not yet passing'}) on a CSC ${r.label.includes('Subprofessional') ? 'Subprofessional' : r.label.includes('Professional') ? 'Professional' : 'Civil Service'} mock exam: ${r.score}/${r.total} correct. Review for free: ${REPO_URL}`

/* Share the card image. Returns 'shared' | 'cancelled' | 'downloaded' */
export async function shareResult(r) {
  const canvas = await drawResultCard(r)
  const text = shareText(r)
  const name = `csc-result-${fmt(r.rating).replace('.', '-')}.png`

  if (window.Capacitor?.isNativePlatform?.()) {
    const [{ Filesystem, Directory }, { Share }] = await Promise.all([import('@capacitor/filesystem'), import('@capacitor/share')])
    const data = canvas.toDataURL('image/png').split(',')[1]
    const f = await Filesystem.writeFile({ path: name, data, directory: Directory.Cache })
    try { await Share.share({ title: 'My CSC mock exam result', text, files: [f.uri], dialogTitle: 'Share your result' }); return 'shared' }
    catch (e) { if (/cancel/i.test(e?.message || '')) return 'cancelled'; throw e }
  }

  const blob = await new Promise(res => canvas.toBlob(res, 'image/png'))
  const file = new File([blob], name, { type: 'image/png' })
  if (navigator.canShare?.({ files: [file] })) {
    try { await navigator.share({ files: [file], text, title: 'My CSC mock exam result' }); return 'shared' }
    catch (e) { if (e?.name === 'AbortError') return 'cancelled' }
  }
  // Desktop fallback: save the image and copy the caption
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 2000)
  try { await navigator.clipboard?.writeText(text) } catch { /* ignore */ }
  return 'downloaded'
}
