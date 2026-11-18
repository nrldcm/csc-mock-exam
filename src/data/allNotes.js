/* All study notes: the short notes plus the detailed math lessons (notes-math.json, if present).
   The math lessons are placed right after the short numerical notes. */
import { NOTES as BASE, NOTE_GROUPS } from './notes.js'

const files = import.meta.glob('./notes-math.json', { eager: true, import: 'default' })
const MATH = Object.values(files)[0] || []

export function mergeNotes(base, math) {
  let i = -1
  base.forEach((n, j) => { if (n.c === 'numerical') i = j })
  return i < 0 ? [...base, ...math] : [...base.slice(0, i + 1), ...math, ...base.slice(i + 1)]
}
export const NOTES = mergeNotes(BASE, MATH)
export { NOTE_GROUPS }
