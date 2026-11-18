/* Extended explanations (written per item) and the study-note lesson that teaches each item's topic */
import { NOTES } from '../data/allNotes.js'
import { lessonIdsFor } from './lessonmap.js'

// Every src/data/explain/<subject>.json, merged; keys are bank ids. Missing files are simply skipped.
const files = import.meta.glob('../data/explain/*.json', { eager: true, import: 'default' })
const EXPLAIN = Object.assign({}, ...Object.values(files))

/* { steps, wrong: { optionText: reason }, tip } for an item, or null */
export function explainFor(q) {
  if (!q) return null
  if (q.x) return q.x
  if (!q.gen && q.id != null && EXPLAIN[q.id]) return EXPLAIN[q.id]
  if (q.steps || q.tip) return { steps: q.steps, tip: q.tip }
  return null
}

/* The study-note topic that teaches this kind of item */
export function lessonFor(q) {
  for (const id of lessonIdsFor(q)) { const n = NOTES.find(x => x.id === id); if (n) return n }
  return null
}
