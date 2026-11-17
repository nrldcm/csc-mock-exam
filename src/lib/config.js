import { BANK } from '../data/bank.js'
import { fmtTime } from './util.js'

export const PASS = 80
export const SEC_PER_ITEM = 67

/* Each level has its own coverage, item count and time limit.
   w = selection weights so the Subprofessional set leans easier and the Professional set harder. */
export const LEVELS = {
  pro: {
    name: 'Professional', cats: ['verbal', 'filipino', 'numerical', 'analytical', 'general'], items: 170, sec: 190 * 60,
    note: 'Verbal, numerical and analytical ability (including abstract reasoning), and general information. 170 items in 3 hours 10 minutes.',
    w: { easy: 0.8, average: 1, difficult: 1.3 },
    abstract: 10 // figure items placed in the Analytical part of the realistic exam
  },
  sub: {
    name: 'Subprofessional', cats: ['verbal', 'filipino', 'numerical', 'clerical', 'general'], items: 165, sec: 160 * 60,
    note: 'Verbal and numerical ability, clerical operations, and general information. 165 items in 2 hours 40 minutes.',
    w: { easy: 1.4, average: 1.1, difficult: 0.7 }
  }
}

export const levelPool = level => BANK.filter(q => LEVELS[level].cats.includes(q.c))

export const MODES = {
  real: {
    label: 'Realistic exam', tag: 'Like exam day', feedback: false,
    desc: L => `${L.items} items, ${fmtTime(L.sec)} time limit, shaded answer sheet. Answers are checked only after you submit.`
  },
  quick: {
    label: 'Practice with answers', feedback: true,
    desc: () => '30 random items. The correct answer and explanation appear right after each item.'
  },
  endless: {
    label: 'Unlimited practice', tag: 'No limit', feedback: true,
    desc: () => 'Keeps going with new items as long as you want: written items first, then freshly generated ones. Answers after each item.'
  },
  trivia: { label: 'Daily trivia', hidden: true, feedback: true, desc: () => '' },
  weak: {
    label: 'Weakest subject drill', feedback: true,
    desc: () => '20 items from your lowest-scoring subject, with answers after each item.'
  }
}

export const feedbackOn = mode => MODES[mode]?.feedback ?? true
