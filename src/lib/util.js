export const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}
export const fmt = n => n.toFixed(2)
export const avg = a => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0)
export const fmtTime = s => {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60
  return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(x).padStart(2, '0')
}
export const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1))
export const pk = a => a[Math.floor(Math.random() * a.length)]

export const dayKey = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
export const dayDiff = (a, b) => {
  const [y1, m1, d1] = a.split('-').map(Number), [y2, m2, d2] = b.split('-').map(Number)
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 864e5)
}
export const fmtWhen = iso =>
  new Date(iso).toLocaleString('en-PH', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })
export const shortDate = () => new Date().toLocaleDateString('en-PH', { month: 'short', day: 'numeric' })
export const reducedMotion = () =>
  typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches
export const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`
