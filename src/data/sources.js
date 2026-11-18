/* Basis and sources for every item.
   - Every item is tagged with the part of the official CSC Career Service Examination coverage it tests.
   - General Information items link to the official text of the law, Constitution or treaty behind the answer.
   All links were checked to open (Lawphil hosts the full text of Philippine laws and the 1987 Constitution). */
import { lessonIdsFor } from '../lib/lessonmap.js'

export const CSC_URL = 'https://csc.gov.ph/'
export const CONSTITUTION = { label: '1987 Constitution of the Philippines (full text)', url: 'https://lawphil.net/consti/cons1987.html' }

// Year of enactment, used to build the Lawphil address of each Republic Act
const RA_YEAR = { 3019: 1960, 6713: 1989, 6969: 1990, 7080: 1991, 7160: 1991, 7277: 1992, 7586: 1992, 7610: 1992, 7659: 1993, 7877: 1995, 8371: 1997, 8491: 1998, 8550: 1998, 8749: 1999, 9003: 2001, 9147: 2001, 9165: 2002, 9184: 2003, 9208: 2003, 9262: 2004, 9275: 2004, 9344: 2006, 9485: 2007, 9710: 2009, 9729: 2009, 9745: 2009, 9851: 2009, 9994: 2010, 10121: 2010, 10173: 2012, 10175: 2012, 10368: 2013, 10533: 2013, 10627: 2013, 10931: 2017, 11032: 2018, 11036: 2018, 11223: 2019, 11313: 2019 }
export const lawRef = n => RA_YEAR[n] ? { label: `Republic Act No. ${n} (full text)`, url: `https://lawphil.net/statutes/repacts/ra${RA_YEAR[n]}/ra_${n}_${RA_YEAR[n]}.html` } : null

const TREATIES = [
  [/universal declaration|udhr|human rights day|december 10, 1948/i, { label: 'Universal Declaration of Human Rights (United Nations)', url: 'https://www.un.org/en/about-us/universal-declaration-of-human-rights' }],
  [/geneva|humanitarian law/i, { label: 'Geneva Conventions (International Committee of the Red Cross)', url: 'https://www.icrc.org/en/law-and-policy/geneva-conventions-and-their-commentaries' }],
  [/paris agreement/i, { label: 'The Paris Agreement (UNFCCC)', url: 'https://unfccc.int/process-and-meetings/the-paris-agreement' }],
  [/montreal protocol|ozone/i, { label: 'Montreal Protocol (UN Ozone Secretariat)', url: 'https://ozone.unep.org/treaties/montreal-protocol' }],
  [/sustainable development goals|\bsdgs?\b/i, { label: 'The 17 Sustainable Development Goals (United Nations)', url: 'https://sdgs.un.org/goals' }]
]
const CONSTITUTION_HINT = /article\s+[ivx]+|constitution|senat|president|supreme court|impeach|congress|commission on|civil service|suffrage|vote|ombudsman|flag|national language|official languages|martial law|people’s initiative|sovereignty|legislative power/i

/* The official scope, worded exactly as in CSC Examination Advisory No. 10, s. 2026, Part D (Scope of Examination) */
export const ADVISORY = 'CSC Examination Advisory No. 10, s. 2026, Part D: Scope of Examination'
export const SCOPE = {
  general: { area: 'General Information', topics: ['Philippine Constitution', 'Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)', 'Peace and Human Rights Issues and Concepts', 'Environment Management and Protection'] },
  verbal: { area: 'Verbal Ability (English)', topics: ['Word meaning', 'Sentence completion', 'Error recognition', 'Sentence structure', 'Paragraph organization', 'Reading comprehension'] },
  filipino: { area: 'Verbal Ability (Filipino)', topics: ['Word meaning', 'Sentence completion', 'Error recognition', 'Sentence structure', 'Paragraph organization', 'Reading comprehension'] },
  numerical: { area: 'Numerical Ability', topics: ['Basic operations', 'Number sequence', 'Word problems'] },
  analytical: { area: 'Analytical Ability (Professional)', topics: ['Word analogy', 'Symbolic logic/abstract reasoning', 'Identifying assumptions and drawing conclusions', 'Data interpretation'] },
  clerical: { area: 'Clerical Ability (Subprofessional)', topics: ['Filing', 'Spelling'] }
}
export const COVERAGE = Object.fromEntries(Object.entries(SCOPE).map(([k, v]) => [k, v.area]))

/* Which official topic an item practices. Word analogy and data interpretation items found in other subjects
   are labeled with the Analytical topic they belong to in the official scope. */
export function officialTopic(q) {
  const t = (q.q || '').toLowerCase(), lesson = lessonIdsFor(q)[0]
  switch (q.c) {
    case 'verbal': case 'filipino':
      if (/read the passage/.test(t)) return 'Reading comprehension'
      if (/arrange the sentences|begins a paragraph/.test(t)) return 'Paragraph organization'
      if (/identify the error/.test(t)) return 'Error recognition'
      if (/choose the correct sentence|which sentence/.test(t)) return 'Sentence structure'
      if (t.includes('::')) return 'Word analogy (Analytical Ability)'
      if (/spelled|misspelled/.test(t)) return 'Spelling (Clerical Ability)'
      if (/____/.test(t)) return 'Sentence completion'
      return 'Word meaning'
    case 'numerical':
      if (/what comes next/.test(t)) return 'Number sequence'
      if (lesson === 'math-statistics-data' && /\n.*:/.test(q.q)) return 'Data interpretation (Analytical Ability)'
      if (q.q.length > 45 || /cost|days|km|years|workers|price|salary|interest|profit|solution|ratio|budget/.test(t)) return 'Word problems'
      return 'Basic operations'
    case 'analytical':
      if (q.abs) return 'Symbolic logic/abstract reasoning'
      if (t.includes('::')) return 'Word analogy'
      if (/data|table|percent|share|total|average/.test(t) && /\n/.test(q.q)) return 'Data interpretation'
      if (/assum|conclu|must be true|therefore|follows|cause|statement|enough/.test(t)) return 'Identifying assumptions and drawing conclusions'
      return 'Symbolic logic/abstract reasoning'
    case 'clerical':
      return /spell|encoding a letter|type\?/.test(t) ? 'Spelling' : 'Filing'
    case 'general':
      return { constitution: 'Philippine Constitution', ra6713: 'Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)', humanrights: 'Peace and Human Rights Issues and Concepts', environment: 'Environment Management and Protection' }[lesson] || 'Philippine Constitution'
    default: return null
  }
}

/* { area, subtopic, refs: [{label, url}] } */
export function sourcesFor(q) {
  if (!q) return null
  const refs = [], seen = new Set()
  const add = r => { if (r && !seen.has(r.url)) { seen.add(r.url); refs.push(r) } }
  // Items that name their own sources (checked against the official text when written) come first
  for (const s of q.src || []) add(s)
  if (q.c === 'general' && !(q.src || []).length) {
    const answer = q.o?.[q.a] || ''
    // Laws named in the correct answer first, then in the question, then in the explanation
    for (const text of [answer, q.q, q.e]) {
      const re = /(?:RA|R\.A\.|Republic Act(?: No\.)?)\s*(\d{4,5})/g; let m
      while ((m = re.exec(text || ''))) add(lawRef(+m[1]))
      if (refs.length) break
    }
    for (const [re, ref] of TREATIES) if (re.test(`${q.q} ${answer} ${q.e}`)) add(ref)
    if (!refs.length || CONSTITUTION_HINT.test(`${q.q} ${answer} ${q.e}`)) add(CONSTITUTION)
  }
  return { area: COVERAGE[q.c], subtopic: q.t || officialTopic(q), refs: refs.slice(0, 3) }
}
