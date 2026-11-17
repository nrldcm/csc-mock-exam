import { dec, describe, isFig } from '../data/abstract.js'

const SW = 4.5
const POINTS = {
  L: '30,14 46,14 46,66 76,66 76,82 30,82',
  arrow: '14,41 56,41 56,22 87,50 56,78 56,59 14,59'
}
const polar = (deg, r = 36) => [50 + r * Math.cos(deg * Math.PI / 180), 50 + r * Math.sin(deg * Math.PI / 180)]
const regular = n => Array.from({ length: n }, (_, i) => polar(-90 + i * 360 / n).map(v => v.toFixed(2)).join(',')).join(' ')
const DOT_POS = [[30, 30], [50, 30], [70, 30], [30, 50], [50, 50], [70, 50], [30, 70], [50, 70], [70, 70]]

/* One abstract-reasoning figure, drawn in currentColor so it follows the theme and option states */
export function Fig({ spec }) {
  const s = spec, fill = s.fill ? 'currentColor' : 'none'
  let body
  if (s.s === 'L' || s.s === 'arrow') {
    body = <polygon points={POINTS[s.s]} fill={fill} stroke="currentColor" strokeWidth={SW} strokeLinejoin="round" />
  } else if (s.s === 'flag') {
    body = <>
      <line x1="32" y1="14" x2="32" y2="86" stroke="currentColor" strokeWidth={SW + 1} strokeLinecap="round" />
      <polygon points="32,15 76,29 32,44" fill={fill} stroke="currentColor" strokeWidth={SW} strokeLinejoin="round" />
    </>
  } else if (s.s === 'poly') {
    body = <polygon points={regular(s.n)} fill={fill} stroke="currentColor" strokeWidth={SW} strokeLinejoin="round" />
  } else if (s.s === 'circle') {
    body = <circle cx="50" cy="50" r="36" fill={fill} stroke="currentColor" strokeWidth={SW} />
  } else if (s.s === 'dots') {
    body = <>
      <rect x="12" y="12" width="76" height="76" rx="10" fill="none" stroke="currentColor" strokeWidth={SW} />
      {DOT_POS.slice(0, s.n).map(([x, y], i) => <circle key={i} cx={x} cy={y} r="7" fill="currentColor" />)}
    </>
  } else if (s.s === 'sector') {
    const step = 360 / s.k, a0 = -90 + s.p * step, a1 = a0 + step
    const [x0, y0] = polar(a0), [x1, y1] = polar(a1)
    body = <>
      <path d={`M50 50 L${x0.toFixed(2)} ${y0.toFixed(2)} A36 36 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`} fill="currentColor" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth={SW} />
      {Array.from({ length: s.k }, (_, i) => { const [x, y] = polar(-90 + i * step); return <line key={i} x1="50" y1="50" x2={x.toFixed(2)} y2={y.toFixed(2)} stroke="currentColor" strokeWidth={SW - 1.5} /> })}
    </>
  }
  const tf = [s.r ? `rotate(${s.r} 50 50)` : '', s.f ? 'translate(100 0) scale(-1 1)' : ''].filter(Boolean).join(' ')
  return (
    <svg className="fig" viewBox="0 0 100 100" role="img" aria-label={describe(s)}>
      <g transform={tf || undefined}>{body}</g>
    </svg>
  )
}

/* An option or answer: a figure when encoded, otherwise plain text */
export function OptText({ t }) {
  return isFig(t) ? <span className="optfig"><Fig spec={dec(t)} /></span> : <>{t}</>
}
/* Short text for an option, for sentences like "The answer is B: …" */
export const optWords = t => (isFig(t) ? '' : `: ${t}`)

/* The figures shown with the question (series or analogy) */
export function FigQ({ fig }) {
  if (!fig) return null
  const box = (t, i) => <div className="figbox" key={i}><Fig spec={dec(t)} /></div>
  const ask = <div className="figbox ask" aria-label="Missing figure">?</div>
  if (fig.t === 'series') {
    return <div className="figrow" role="group" aria-label="Figure series">{fig.items.map(box)}{ask}</div>
  }
  if (fig.t === 'analogy') {
    const [a, b, c] = fig.items
    return (
      <div className="figrow" role="group" aria-label="Figure analogy">
        {box(a, 0)}<span className="figop" aria-label="is to">:</span>{box(b, 1)}
        <span className="figop wide" aria-label="as">::</span>
        {box(c, 2)}<span className="figop" aria-label="is to">:</span>{ask}
      </div>
    )
  }
  return null
}
