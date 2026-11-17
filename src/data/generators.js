/* ===================== UNLIMITED ITEM GENERATOR =====================
   Builds new items on the fly. Math, logic and clerical answers are computed, so they are always correct;
   vocabulary, laws and Constitution items are drawn from curated fact lists in random combinations. */
import { R, pk, shuffle } from '../lib/util.js'

const num = n => n.toLocaleString('en-US', { maximumFractionDigits: 2 })
const peso = n => {
  n = Math.round(n * 100) / 100
  return '₱' + n.toLocaleString('en-US', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 })
}
const gcd = (a, b) => (b ? gcd(b, a % b) : a)
function frac(n, d) {
  const g = gcd(n, d); n /= g; d /= g
  if (d === 1) return String(n)
  const w = Math.floor(n / d), r = n % d
  return w ? `${w} ${r}/${d}` : `${r}/${d}`
}
function mk(c, d, q, correct, wrongs, e) {
  const opts = [String(correct)]
  for (const w of wrongs) { const s = String(w); if (s && s !== 'undefined' && !opts.includes(s) && opts.length < 4) opts.push(s) }
  if (opts.length < 4) return null
  shuffle(opts)
  return { c, d, q, o: opts, a: opts.indexOf(String(correct)), e, gen: true }
}
const near = (x, ds) => ds.map(k => Math.round((x + k) * 100) / 100).filter(v => v > 0 && v !== x)
const L = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const DIRS = ['north', 'east', 'south', 'west']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const ord = k => k + (['th', 'st', 'nd', 'rd'][(k % 10 < 4 && (k % 100 < 11 || k % 100 > 13)) ? k % 10 : 0])

/* ---------- Verbal: vocabulary [word, synonym, antonym, meaning group] ---------- */
const VOCAB = [
 ['ABUNDANT','plentiful','scarce','amount'],['BENEVOLENT','kind','cruel','kind'],['CANDID','frank','evasive','honest'],
 ['DILIGENT','hardworking','lazy','work'],['ELOQUENT','articulate','inarticulate','speech'],['FRUGAL','thrifty','wasteful','money'],
 ['GREGARIOUS','sociable','reclusive','social'],['HOSTILE','unfriendly','friendly','social'],['IMPARTIAL','unbiased','biased','fair'],
 ['JOVIAL','cheerful','gloomy','mood'],['LUCID','clear','confusing','clear'],['METICULOUS','thorough','careless','care'],
 ['NOVICE','beginner','expert','skill'],['OBSOLETE','outdated','modern','age'],['PRUDENT','wise','reckless','care'],
 ['RELUCTANT','unwilling','eager','will'],['SERENE','calm','agitated','calm'],['UBIQUITOUS','widespread','rare','amount'],
 ['VIVID','bright','dull','bright'],['WARY','cautious','trusting','care'],['ADVERSARY','opponent','ally','people'],
 ['AMBIGUOUS','unclear','explicit','clear'],['ARDUOUS','difficult','easy','hard'],['AUTHENTIC','genuine','fake','honest'],
 ['BRIEF','short','lengthy','short'],['COMPETENT','capable','incompetent','skill'],['CONCUR','agree','disagree','agree'],
 ['CURTAIL','reduce','extend','size'],['DEFER','postpone','hasten','delay'],['DETRIMENTAL','harmful','beneficial','harm'],
 ['DILAPIDATED','run-down','well-kept','condition'],['EPHEMERAL','short-lived','permanent','short'],['FEASIBLE','possible','impossible','possible'],
 ['FRAGILE','delicate','sturdy','strength'],['HAUGHTY','arrogant','humble','pride'],['HINDER','obstruct','assist','help'],
 ['IMMINENT','impending','distant','soon'],['INCESSANT','nonstop','occasional','often'],['INNATE','inborn','acquired','origin'],
 ['LETHARGIC','sluggish','energetic','will'],['LENIENT','tolerant','strict','strict'],['MEAGER','scanty','ample','amount'],
 ['MUNDANE','ordinary','extraordinary','ordinary'],['NEGLIGENT','inattentive','careful','care'],['OPTIMISTIC','hopeful','pessimistic','mood'],
 ['TRANQUIL','peaceful','turbulent','calm'],['VERBOSE','wordy','concise','speech'],['ZEALOUS','enthusiastic','apathetic','will'],
 ['ACCELERATE','speed up','slow down','speed'],['ACQUIRE','obtain','lose','get'],['ALLEVIATE','relieve','aggravate','better'],
 ['COMMENCE','begin','terminate','start'],['CONCEAL','hide','reveal','hide'],['DIMINISH','decrease','increase','size'],
 ['LUCRATIVE','profitable','unprofitable','money'],['PROHIBIT','forbid','permit','allow'],['RIGID','stiff','flexible','strict'],
 ['COHERENT','logical','disjointed','clear'],['CORDIAL','warm','unfriendly','social'],['DUBIOUS','doubtful','certain','doubt'],
 ['EXPEDITE','hasten','delay','delay'],['INTEGRITY','honesty','corruption','honest'],['TEDIOUS','boring','exciting','bright'],
 ['ADEPT','skilled','clumsy','skill'],['AFFLUENT','wealthy','poor','money'],['BOISTEROUS','noisy','quiet','calm'],
 ['CAPRICIOUS','unpredictable','steady','change'],['CONSPICUOUS','noticeable','hidden','hide'],['DEBILITATE','weaken','strengthen','strength'],
 ['DIVULGE','disclose','conceal','hide'],['ENIGMATIC','mysterious','obvious','clear'],['FERVENT','passionate','indifferent','will'],
 ['FUTILE','useless','effective','possible'],['IMPECCABLE','flawless','faulty','condition'],['INDOLENT','lazy','industrious','work'],
 ['MAGNANIMOUS','generous','petty','kind'],['OBSTINATE','stubborn','yielding','change'],['PAUCITY','scarcity','abundance','amount'],
 ['PRAGMATIC','practical','idealistic','possible'],['REPROACH','criticize','praise','praise'],['TENACIOUS','persistent','irresolute','will'],
 ['VENERATE','revere','scorn','praise'],['VOLATILE','unstable','stable','change']
]
/* Filipino: [salita, kasingkahulugan, kasalungat, grupo] */
const SALITA = [
 ['MASIPAG','masigasig','tamad','work'],['MATAPANG','magiting','duwag','brave'],['MAYAMAN','maykaya','mahirap','money'],
 ['MASAYA','maligaya','malungkot','mood'],['MATALINO','marunong','mangmang','smart'],['MATAYOG','mataas','mababa','height'],
 ['MABILIS','matulin','mabagal','speed'],['MALAWAK','maluwang','makitid','size'],['MALIIT','munti','malaki','size'],
 ['TAHIMIK','payapa','maingay','calm'],['MAGANDA','marikit','pangit','beauty'],['MALAMIG','maginaw','mainit','temp'],
 ['MATANDA','may-edad','bata','age'],['MALUMBAY','malungkot','masaya','mood'],['MAPAGBIGAY','bukas-palad','maramot','give'],
 ['MATIBAY','matatag','marupok','strength'],['MAYABANG','palalo','mapagpakumbaba','pride'],['MALINIS','busilak','marumi','clean'],
 ['MATAPAT','tapat','sinungaling','honest'],['MASAGANA','mayaman','salat','amount'],['MAHINAHON','kalmado','mainitin','calm2'],
 ['MALIKSI','mabilis kumilos','makupad','speed2'],['MASUNURIN','sumusunod','suwail','obey'],['MATIPID','masinop','gastador','money2'],
 ['MALAPAD','malaki ang lapad','makipot','size2'],['MAPAGKUMBABA','mababang-loob','mapagmataas','pride2']
]
function vocabItem(list, cat, fil) {
  const [w, syn, ant, g] = pk(list), others = list.filter(x => x[3] !== g)
  const isSyn = Math.random() < 0.5
  const wrong = shuffle([...others]).slice(0, 3).map(x => (isSyn ? x[1] : x[2]))
  const d = fil ? 'average' : w.length > 8 ? 'difficult' : 'average'
  if (fil) {
    return mk(cat, d, isSyn ? `Ano ang kasingkahulugan ng ${w}?` : `Ano ang kasalungat ng ${w}?`, isSyn ? syn : ant, wrong,
      `Ang ${w.toLowerCase()} ay ${syn}; ang kasalungat nito ay ${ant}.`)
  }
  return mk(cat, d, isSyn ? `Choose the word closest in meaning to ${w}.` : `Choose the word opposite in meaning to ${w}.`, isSyn ? syn : ant, wrong,
    `${w[0] + w.slice(1).toLowerCase()} means ${syn}. Its opposite is ${ant}.`)
}
/* Subject-verb agreement: [subject, singular?, reason] */
const SUBJ = [
 ['Each of the employees',1,'“Each” is singular.'],['Every applicant',1,'“Every” makes the subject singular.'],
 ['Everyone in the office',1,'“Everyone” is singular.'],['Neither of the clerks',1,'“Neither” is singular in formal usage.'],
 ['One of the supervisors',1,'The subject is “one,” not “supervisors.”'],['The number of applicants',1,'“The number of” is singular.'],
 ['A number of employees',0,'“A number of” means “several” and is plural.'],['Both the clerk and the cashier',0,'Two subjects joined by “and” are plural.'],
 ['Several of the applicants',0,'“Several” is plural.'],['Many of the supervisors',0,'“Many” is plural.'],['The new employees',0,'“Employees” is plural.'],
 ['Neither the manager nor the clerks',0,'With neither…nor, the verb agrees with the nearer subject, “clerks.”'],
 ['Either the clerks or the manager',1,'With either…or, the verb agrees with the nearer subject, “manager.”'],
 ['The director, together with her staff,',1,'Phrases like “together with” do not change the subject, “director.”'],
 ['Mathematics',1,'Subjects ending in -ics such as mathematics are singular.'],
 ['The committee',1,'A collective noun acting as one unit is singular.']
]
const PRED = [[['is','are','be','being'],'required to attend the seminar.'],[['was','were','be','been'],'present during the inspection.'],[['has','have','having','to have'],'submitted the requirements.']]
function agreeItem() {
  const [s, sing, why] = pk(SUBJ), [v, p] = pk(PRED), ans = v[sing ? 0 : 1]
  if (s === 'Mathematics' && p.startsWith('present')) return null
  return mk('verbal', /Neither|Either|One of|number|together|ics|committee/.test(s) ? 'difficult' : 'average',
    `${s} ____ ${p}`, ans, v.filter(x => x !== ans), `${why} So the verb is “${ans}.”`)
}
/* Analogies: [a, b, relation] pairs grouped by the relation */
const ANALOGY = {
  'is used by a': [['Scalpel','Surgeon'],['Gavel','Judge'],['Stethoscope','Doctor'],['Chalk','Teacher'],['Brush','Painter'],['Wrench','Mechanic']],
  'is a young': [['Puppy','Dog'],['Kitten','Cat'],['Calf','Cow'],['Foal','Horse'],['Chick','Hen'],['Lamb','Sheep']],
  'is where a person works:': [['Teacher','School'],['Doctor','Hospital'],['Judge','Court'],['Pilot','Cockpit'],['Chef','Kitchen'],['Farmer','Field']],
  'is the opposite of': [['Victory','Defeat'],['Ancient','Modern'],['Generous','Stingy'],['Expand','Contract'],['Praise','Criticize'],['Arrive','Depart']],
  'is a part of a': [['Page','Book'],['Petal','Flower'],['Wheel','Car'],['Key','Keyboard'],['Branch','Tree'],['Chapter','Novel']]
}
function analogyItem() {
  const rel = pk(Object.keys(ANALOGY)), [p1, p2] = shuffle([...ANALOGY[rel]]).slice(0, 2)
  const others = Object.entries(ANALOGY).filter(([k]) => k !== rel).flatMap(([, v]) => v.map(x => x[1]))
  return mk('verbal', 'average', `${p1[0].toUpperCase()} : ${p1[1].toUpperCase()} :: ${p2[0].toUpperCase()} : ____`, p2[1],
    shuffle(others).slice(0, 3), `${p1[0]} ${rel} ${p1[1].toLowerCase()}, just as ${p2[0].toLowerCase()} ${rel} ${p2[1].toLowerCase()}.`)
}

/* ---------- General information: laws and Constitution ---------- */
const LAWS = [
 [6713,'Code of Conduct and Ethical Standards for Public Officials and Employees','e'],[3019,'Anti-Graft and Corrupt Practices Act','a'],
 [7080,'Anti-Plunder Act','a'],[9485,'Anti-Red Tape Act of 2007','a'],[11032,'Ease of Doing Business and Efficient Government Service Delivery Act of 2018','a'],
 [10173,'Data Privacy Act of 2012','a'],[10175,'Cybercrime Prevention Act of 2012','a'],[7160,'Local Government Code of 1991','e'],
 [9003,'Ecological Solid Waste Management Act of 2000','a'],[8749,'Philippine Clean Air Act of 1999','a'],[9275,'Philippine Clean Water Act of 2004','a'],
 [9729,'Climate Change Act of 2009','a'],[10121,'Philippine Disaster Risk Reduction and Management Act of 2010','d'],[9710,'Magna Carta of Women','a'],
 [11313,'Safe Spaces Act','a'],[7877,'Anti-Sexual Harassment Act of 1995','d'],[9262,'Anti-Violence Against Women and Their Children Act of 2004','a'],
 [8371,'Indigenous Peoples’ Rights Act of 1997','d'],[9184,'Government Procurement Reform Act','d'],[7610,'Special Protection of Children Against Abuse, Exploitation and Discrimination Act','d'],
 [9344,'Juvenile Justice and Welfare Act of 2006','d'],[7586,'National Integrated Protected Areas System (NIPAS) Act of 1992','d'],
 [9147,'Wildlife Resources Conservation and Protection Act','d'],[8550,'Philippine Fisheries Code of 1998','d'],
 [6969,'Toxic Substances and Hazardous and Nuclear Wastes Control Act of 1990','d'],[10533,'Enhanced Basic Education Act of 2013','a'],
 [10931,'Universal Access to Quality Tertiary Education Act','a'],[11223,'Universal Health Care Act','a'],[9165,'Comprehensive Dangerous Drugs Act of 2002','a'],
 [8491,'Flag and Heraldic Code of the Philippines','d'],[7277,'Magna Carta for Disabled Persons','d'],[9994,'Expanded Senior Citizens Act of 2010','d'],
 [11036,'Mental Health Act','a'],[10627,'Anti-Bullying Act of 2013','a'],[9208,'Anti-Trafficking in Persons Act of 2003','d'],
 [10368,'Human Rights Victims Reparation and Recognition Act of 2013','d'],[9745,'Anti-Torture Act of 2009','d'],
 [9851,'Philippine Act on Crimes Against International Humanitarian Law, Genocide, and Other Crimes Against Humanity','d']
]
const ARTS = ['National Territory','Declaration of Principles and State Policies','Bill of Rights','Citizenship','Suffrage','Legislative Department',
 'Executive Department','Judicial Department','Constitutional Commissions','Local Government','Accountability of Public Officers',
 'National Economy and Patrimony','Social Justice and Human Rights','Education, Science and Technology, Arts, Culture and Sports',
 'The Family','General Provisions','Amendments or Revisions','Transitory Provisions']
const ROMAN = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII']
const lvl = x => ({ e: 'easy', a: 'average', d: 'difficult' })[x]
function lawItem() {
  const [n, t, dl] = pk(LAWS), others = shuffle(LAWS.filter(x => x[0] !== n)).slice(0, 3)
  return Math.random() < 0.5
    ? mk('general', lvl(dl), `Republic Act No. ${n} is known as the:`, t, others.map(x => x[1]), `RA ${n} is the ${t}.`)
    : mk('general', lvl(dl), `The ${t} is:`, `RA ${n}`, others.map(x => `RA ${x[0]}`), `The ${t} is Republic Act No. ${n}.`)
}
function articleItem() {
  const i = R(0, 17), others = shuffle([...Array(18).keys()].filter(x => x !== i)).slice(0, 3), d = [2, 5, 6, 7, 8, 10].includes(i) ? 'average' : 'difficult'
  return Math.random() < 0.5
    ? mk('general', d, `Article ${ROMAN[i]} of the 1987 Constitution covers:`, ARTS[i], others.map(x => ARTS[x]), `Article ${ROMAN[i]} is “${ARTS[i]}.”`)
    : mk('general', d, `Which article of the 1987 Constitution covers “${ARTS[i]}”?`, `Article ${ROMAN[i]}`, others.map(x => `Article ${ROMAN[x]}`), `“${ARTS[i]}” is Article ${ROMAN[i]}.`)
}
/* Officials: [office, term, min age, max consecutive terms] */
const OFFICES = [
  ['President', '6 years', 40, 'no reelection'], ['Vice President', '6 years', 40, 'two consecutive terms'],
  ['Senator', '6 years', 35, 'two consecutive terms'], ['Member of the House of Representatives', '3 years', 25, 'three consecutive terms'],
  ['local elective official (e.g. mayor)', '3 years', null, 'three consecutive terms']
]
function officeItem() {
  const [o, t, age, lim] = pk(OFFICES)
  if (age && Math.random() < 0.5) {
    return mk('general', 'average', `What is the minimum age to be ${/^[AEIOU]/.test(o) ? 'an' : 'a'} ${o}?`, age, [21, 25, 30, 35, 40, 45].filter(x => x !== age).slice(0, 4).sort(() => Math.random() - 0.5),
      `A ${o} must be at least ${age} years old on election day.`)
  }
  return mk('general', 'average', `What is the term of office of a ${o}?`, t, ['3 years', '4 years', '5 years', '6 years', '9 years'].filter(x => x !== t),
    `The term is ${t}, with ${lim}.`)
}

/* ---------- Numerical ---------- */
const NUMGEN = [
 () => { const p = pk([5,10,12,15,20,25,30,35,40,45,60,75]), n = R(2, 40) * 20, a = n * p / 100; if (!Number.isInteger(a)) return null
   return mk('numerical', 'easy', `What is ${p}% of ${num(n)}?`, num(a), near(a, [n / 20, -n / 20, n / 10, p]).map(num), `${p}% = ${p / 100}, and ${p / 100} × ${num(n)} = ${num(a)}.`) },
 () => { const p = pk([10,15,20,25,40,50,60,75]), w = R(4, 60) * 20, part = w * p / 100; if (!Number.isInteger(part)) return null
   return mk('numerical', 'average', `${p}% of what number is ${num(part)}?`, num(w), near(w, [20, -20, w / 2, part]).map(num), `Divide by ${p / 100}: ${num(part)} ÷ ${p / 100} = ${num(w)}.`) },
 () => { const pr = R(6, 40) * 100, d1 = pk([10,20,25,30]), d2 = pk([5,10,15,20]), f = pr * (1 - d1 / 100) * (1 - d2 / 100); if (Math.round(f * 100) % 1) return null
   return mk('numerical', 'difficult', `An item costs ${peso(pr)}. It is discounted ${d1}%, then an extra ${d2}% off the reduced price. What is the final price?`, peso(f),
     [pr * (1 - (d1 + d2) / 100), pr * (1 - d1 / 100), f + pr * 0.05].map(peso), `${peso(pr)} × ${(1 - d1 / 100).toFixed(2)} = ${peso(pr * (1 - d1 / 100))}; then × ${(1 - d2 / 100).toFixed(2)} = ${peso(f)}. Successive discounts are not simply added.`) },
 () => { const P = R(2, 50) * 1000, r = pk([3,4,5,6,8,10,12]), t = R(2, 5), I = P * r * t / 100
   return mk('numerical', 'average', `What is the simple interest on ${peso(P)} at ${r}% per year for ${t} years?`, peso(I), [P * r / 100, I + P * r / 100, I * 2].map(peso), `I = P × r × t = ${num(P)} × ${r / 100} × ${t} = ${peso(I)}.`) },
 () => { const [a, b] = pk([[6,3],[12,6],[10,15],[20,30],[4,12],[6,12],[8,24],[9,18],[12,4],[10,40],[15,30],[12,24]]), t = a * b / (a + b), n1 = pk(['Ana','Liza','Rosa']), n2 = pk(['Ben','Carlo','Dan'])
   return mk('numerical', 'average', `${n1} can finish a job in ${a} days. ${n2} can finish the same job in ${b} days. Working together, how many days will they take?`, num(t), [(a + b) / 2, Math.abs(a - b), t + 1, a + b].map(num),
     `Together they do 1/${a} + 1/${b} = 1/${t} of the job per day, so ${num(t)} days.`) },
 () => { const r = [R(1,4), R(2,5), R(3,7)], s = r[0] + r[1] + r[2], k = R(2, 9) * 500, T = s * k, big = Math.random() < 0.5, v = big ? Math.max(...r) : Math.min(...r)
   if (new Set(r).size < 3) return null
   return mk('numerical', 'average', `${peso(T)} is divided in the ratio ${r.join(' : ')}. What is the ${big ? 'largest' : 'smallest'} share?`, peso(v * k),
     [...r.filter(x => x !== v).map(x => x * k), T / 3, (v + 1) * k].map(peso), `${s} parts = ${peso(T)}, so 1 part = ${peso(k)}. The ${big ? 'largest' : 'smallest'} share is ${v} × ${peso(k)} = ${peso(v * k)}.`) },
 () => { const ns = [R(60,99), R(60,99), R(60,99)], av = R(72, 92), x = av * 4 - ns.reduce((a, b) => a + b, 0); if (x < 50 || x > 100) return null
   return mk('numerical', 'average', `The average of four scores is ${av}. Three of them are ${ns.join(', ')}. What is the fourth?`, x, near(x, [2, -2, 4, -4]), `Total = 4 × ${av} = ${av * 4}; ${av * 4} − ${ns.reduce((a, b) => a + b, 0)} = ${x}.`) },
 () => { const v = pk([40,45,50,55,60,65,70,75,80]), t = R(2, 6), D = v * t
   return Math.random() < 0.5
    ? mk('numerical', 'easy', `A bus travels ${D} km at a constant ${v} km/h. How many hours does the trip take?`, t, near(t, [1, -1, 2]), `Time = distance ÷ speed = ${D} ÷ ${v} = ${t} hours.`)
    : mk('numerical', 'easy', `A van travels at ${v} km/h for ${t} hours. How far does it go?`, `${D} km`, near(D, [v, -v, 10]).map(x => `${x} km`), `Distance = speed × time = ${v} × ${t} = ${D} km.`) },
 () => { const t = pk(['ar','geo','sec']); let s = [], nx, d, e
   if (t === 'ar') { const a = R(1, 30), k = R(2, 12); s = [0,1,2,3,4].map(i => a + k * i); nx = a + 5 * k; d = 'easy'; e = `Each term adds ${k}: ${s[4]} + ${k} = ${nx}.` }
   else if (t === 'geo') { const a = R(1, 5), k = pk([2, 3]); s = [0,1,2,3,4].map(i => a * k ** i); nx = a * k ** 5; d = 'easy'; e = `Each term is multiplied by ${k}: ${s[4]} × ${k} = ${nx}.` }
   else { const a = R(1, 10), k = R(1, 4); let v = a, g = k; s = []; for (let i = 0; i < 5; i++) { s.push(v); v += g; g += 2 } nx = v; d = 'average'; e = `The differences grow by 2 each time (${s.slice(1).map((x, i) => x - s[i]).join(', ')}), so the next difference is ${nx - s[4]}: ${nx}.` }
   return mk('numerical', d, `What comes next?\n${s.join(', ')}, ___`, nx, near(nx, [-2, 2, s[4] - s[3], 4]), e) },
 () => { const w1 = R(4, 15), d1 = R(6, 30), w2 = R(2, 30); if (w1 === w2 || (w1 * d1) % w2) return null; const d2 = w1 * d1 / w2
   return mk('numerical', 'average', `${w1} workers can finish a project in ${d1} days. How many days will ${w2} workers take at the same rate?`, d2, near(d2, [2, -2, d1 - d2, 4]).filter(x => Number.isInteger(x)), `${w1} × ${d1} = ${w1 * d1} worker-days; ${w1 * d1} ÷ ${w2} = ${d2} days.`) },
 () => { const b = pk([2,3,4,5,6,8,10,12]), dd = pk([2,3,4,5,6,8,10,12]); if (b === dd) return null; const a = R(1, b - 1), c = R(1, dd - 1), N = a * dd + c * b, D = b * dd
   return mk('numerical', 'average', `${a}/${b} + ${c}/${dd} = ?`, frac(N, D), [frac(a + c, b + dd), frac(N + 1, D), frac(Math.abs(N - dd) || 1, D)], `Use the common denominator ${D}: ${a * dd}/${D} + ${c * b}/${D} = ${N}/${D} = ${frac(N, D)}.`) },
 () => { const [k, m] = pk([[3,2],[4,3],[5,3],[4,2]]), n = R(2, 8) * 2, B = n * (m - 1) / (k - m); if (!Number.isInteger(B)) return null
   return mk('numerical', 'difficult', `A mother is ${k} times as old as her son. In ${n} years she will be ${m} times as old as he will be. How old is the son now?`, B, near(B, [2, -2, n, 5]),
     `${k}B + ${n} = ${m}(B + ${n}), so ${k - m}B = ${n * (m - 1)} and B = ${B}.`) },
 () => { if (Math.random() < 0.5) { const p = R(5, 90) * 100; return mk('numerical', 'easy', `An item costs ${peso(p)} before 12% VAT. What is the price with VAT?`, peso(p * 1.12), [p * 1.2, p * 1.1, p * 1.15].map(peso), `${peso(p)} × 1.12 = ${peso(p * 1.12)}.`) }
   const c = R(5, 60) * 100, m = pk([20,25,40,50]), s = c * (1 + m / 100)
   return mk('numerical', 'average', `An item sold for ${peso(s)} earned a ${m}% profit on its cost. What was the cost?`, peso(c), [s * (1 - m / 100), s - m * 10, c + 100].map(peso), `Cost × ${1 + m / 100} = ${peso(s)}, so cost = ${peso(s)} ÷ ${1 + m / 100} = ${peso(c)}. Taking ${m}% off the selling price is a common trap.`) },
 () => { const a = R(2, 12), b = R(2, 30), c = a * R(2, 15) + b
   return mk('numerical', 'easy', `Solve for x: ${a}x + ${b} = ${c}`, (c - b) / a, near((c - b) / a, [1, -1, 2, b]), `${a}x = ${c} − ${b} = ${c - b}, so x = ${(c - b) / a}.`) },
 () => { const l = R(4, 25), w = R(3, 20); if (l === w) return null; const per = Math.random() < 0.5
   return per ? mk('numerical', 'easy', `A rectangle is ${l} m long and ${w} m wide. What is its perimeter?`, `${2 * (l + w)} m`, [`${l * w} m`, `${l + w} m`, `${2 * (l + w) + 2} m`], `P = 2(l + w) = 2(${l} + ${w}) = ${2 * (l + w)} m.`)
     : mk('numerical', 'easy', `A room is ${l} m long and ${w} m wide. What is its floor area?`, `${l * w} m²`, [`${2 * (l + w)} m²`, `${l * w + l} m²`, `${l * w - w} m²`], `A = l × w = ${l} × ${w} = ${l * w} m².`) },
 () => { const a = pk([4,6,8,9,10,12,14,15,16,18,20,24]), b = pk([6,8,9,10,12,15,16,18,20,21,24,30]); if (a === b) return null
   const g = gcd(a, b), l = a * b / g, isL = Math.random() < 0.5
   return isL ? mk('numerical', 'average', `What is the least common multiple of ${a} and ${b}?`, l, [g, a * b, l * 2, l / 2].filter(x => Number.isInteger(x) && x !== l), `LCM = ${a} × ${b} ÷ GCF(${g}) = ${l}.`)
     : mk('numerical', 'average', `What is the greatest common factor of ${a} and ${b}?`, g, [l, g * 2, Math.max(1, g - 1), g + 1].filter(x => x !== g), `The largest number that divides both ${a} and ${b} is ${g}.`) }
]

/* ---------- Analytical ---------- */
const WORDS = ['CAT','DOG','BOOK','PEN','DESK','FILE','CODE','MAIL','DATA','PLAN','TEAM','LOAD','GOLD','RICE','FISH','BIRD','LAMP','CARD','SHIP','ROAD']
const shift = (w, k) => [...w].map(ch => L[(L.indexOf(ch) + k + 26) % 26]).join('')
const NAMES = ['Pedro','Juan','Marco','Luis','Ana','Rosa','Liza','Carlo','Mia','Nina','Ramon','Tess']
const NOUNS = [['glim','glims'],['trod','trods'],['vank','vanks'],['mirp','mirps'],['zorb','zorbs'],['plunk','plunks'],['dree','drees'],['wex','wexes']]
/* Odd one out: [group name, members...] */
const GROUPS = [
  ['fruits', 'Mango', 'Banana', 'Papaya', 'Guava', 'Apple'], ['vegetables', 'Carrot', 'Cabbage', 'Eggplant', 'Squash', 'Okra'],
  ['planets', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Mercury'], ['units of length', 'Meter', 'Inch', 'Foot', 'Yard', 'Mile'],
  ['musical instruments', 'Guitar', 'Piano', 'Violin', 'Drum', 'Flute'], ['mammals', 'Whale', 'Dog', 'Carabao', 'Bat', 'Goat'],
  ['birds', 'Eagle', 'Maya', 'Parrot', 'Owl', 'Heron'], ['colors', 'Red', 'Blue', 'Green', 'Yellow', 'Violet']
]
const ANAGEN = [
 () => { const k = pk([2,3,4,-2,-3]), st = k > 0 ? R(0, 6) : R(19, 25), s = [0,1,2,3,4].map(i => L[st + k * i]), nx = L[st + 5 * k]; if (!nx || s.includes(undefined)) return null
   return mk('analytical', Math.abs(k) > 2 || k < 0 ? 'average' : 'easy', `What comes next?\n${s.join(', ')}, ___`, nx, [L[st + 5 * k + 1], L[st + 5 * k - 1], L[st + 4 * k + k * 2 + 2]].filter(Boolean), `Each letter moves ${Math.abs(k)} step${Math.abs(k) > 1 ? 's' : ''} ${k > 0 ? 'forward' : 'backward'}: ${s[4]} to ${nx}.`) },
 () => { const [a, b] = shuffle([...WORDS]).slice(0, 2), k = pk([1, 2, -1])
   return mk('analytical', k === 1 ? 'average' : 'difficult', `If ${a} is coded as ${shift(a, k)}, how is ${b} coded?`, shift(b, k), [shift(b, k + 1), shift(b, k === -1 ? 1 : -1), [...shift(b, k)].reverse().join('')],
     `Each letter moves ${Math.abs(k)} step${Math.abs(k) > 1 ? 's' : ''} ${k > 0 ? 'forward' : 'backward'} in the alphabet.`) },
 () => { const [a, b] = shuffle([...WORDS]).slice(0, 2), rv = w => [...w].reverse().join('')
   return mk('analytical', 'easy', `If ${a} is coded as ${rv(a)}, how is ${b} coded?`, rv(b), [shift(b, 1), rv(shift(b, 1)), b.slice(1) + b[0]], 'The word is written backward.') },
 () => { const [a, b] = shuffle([...WORDS]).slice(0, 2), v = w => [...w].reduce((s, ch) => s + L.indexOf(ch) + 1, 0)
   return mk('analytical', 'average', `If ${a} = ${v(a)} (A = 1, B = 2, … Z = 26), what is ${b}?`, v(b), near(v(b), [1, -1, 2, -2]), `${[...b].map(ch => `${ch}=${L.indexOf(ch) + 1}`).join(', ')}; total ${v(b)}.`) },
 () => { const i = R(0, 3), a = R(2, 9), b = R(2, 9), t = pk([1, -1]); if (a === b) return null; const D = j => DIRS[(j + 8) % 4], tw = t > 0 ? 'right' : 'left'
   return mk('analytical', 'average', `You walk ${a} km ${D(i)}, turn ${tw} and walk ${b} km, then turn ${tw} again and walk ${a} km. Where are you from your starting point?`, `${b} km ${D(i + t)}`, [`${b} km ${D(i - t)}`, `${a} km ${D(i)}`, `${a + b} km ${D(i + t)}`],
     `The ${D(i)} and ${D(i + 2)} legs of ${a} km cancel out, leaving ${b} km ${D(i + t)}.`) },
 () => { const N = R(20, 60), k = R(3, N - 3), n = pk(NAMES)
   return mk('analytical', 'average', `In a row of ${N} people, ${n} is ${ord(k)} from the left. What is ${n}’s position from the right?`, N - k + 1, [N - k, N - k + 2, k], `Position from right = ${N} − ${k} + 1 = ${N - k + 1}.`) },
 () => { const t = R(0, 6), n = R(10, 200), ans = DAYS[(t + n) % 7]
   return mk('analytical', n > 100 ? 'difficult' : 'average', `Today is ${DAYS[t]}. What day will it be ${n} days from today?`, ans, shuffle(DAYS.filter(x => x !== ans)).slice(0, 3), `${n} ÷ 7 leaves a remainder of ${n % 7}; ${DAYS[t]} + ${n % 7} day${n % 7 === 1 ? '' : 's'} = ${ans}.`) },
 () => { const p = shuffle([...NAMES]).slice(0, 4), st = shuffle([`${p[0]} is taller than ${p[1]}.`, `${p[1]} is taller than ${p[2]}.`, `${p[2]} is taller than ${p[3]}.`]), w = pk([[0,'tallest','easy'],[3,'shortest','easy'],[1,'second tallest','average'],[2,'second shortest','average']])
   return mk('analytical', w[2], `${st.join(' ')} Who is the ${w[1]}?`, p[w[0]], p.filter((_, i) => i !== w[0]), `From tallest to shortest: ${p.join(', ')}.`) },
 () => { const cube = Math.random() < 0.5, f = x => (cube ? x ** 3 : x ** 2), a = R(2, 6), b = R(2, 9); if (a === b) return null
   return mk('analytical', cube ? 'average' : 'easy', `${a} : ${f(a)} :: ${b} : ____`, f(b), [cube ? b ** 2 : b ** 3, f(b) + b, f(b) - 1], `The second number is the ${cube ? 'cube' : 'square'} of the first: ${b}${cube ? '³' : '²'} = ${f(b)}.`) },
 () => { const k = pk([3,4,6,7,9]), m = shuffle([...Array(Math.floor(99 / k)).keys()].map(i => (i + 1) * k).filter(x => x >= 10)).slice(0, 3); let odd = R(11, 98); while (odd % k === 0) odd++
   return mk('analytical', 'average', `Which does not belong?\n${shuffle([...m, odd]).join(', ')}`, odd, m, `All the others are divisible by ${k}; ${odd} is not.`) },
 () => { const [g1, g2] = shuffle([...GROUPS]).slice(0, 2), ins = shuffle(g1.slice(1)).slice(0, 3), odd = pk(g2.slice(1))
   return mk('analytical', 'easy', `Which does not belong?\n${shuffle([...ins, odd]).join(', ')}`, odd, ins, `${ins.join(', ')} are ${g1[0]}; ${odd} is not.`) },
 () => { const [A, B, C] = shuffle([...NOUNS]).slice(0, 3), f = R(0, 2)
   const P = [`All ${A[1]} are ${B[1]}. All ${B[1]} are ${C[1]}.`, `Some ${A[1]} are ${B[1]}. All ${B[1]} are ${C[1]}.`, `All ${A[1]} are ${B[1]}. No ${B[0]} is a ${C[0]}.`][f]
   const ok = [`All ${A[1]} are ${C[1]}`, `Some ${A[1]} are ${C[1]}`, `No ${A[0]} is a ${C[0]}`][f]
   const wr = [[`All ${C[1]} are ${A[1]}`, `No ${A[0]} is a ${C[0]}`, `Some ${C[1]} are not ${B[1]}`], [`All ${A[1]} are ${C[1]}`, `No ${A[0]} is a ${C[0]}`, `All ${C[1]} are ${B[1]}`], [`Some ${A[1]} are ${C[1]}`, `All ${C[1]} are ${B[1]}`, `Some ${C[1]} are ${A[1]}`]][f]
   const why = [`${A[1]} are inside ${B[1]}, which are inside ${C[1]}.`, `The ${A[1]} that are ${B[1]} are also ${C[1]}.`, `Every ${A[0]} is a ${B[0]}, and no ${B[0]} is a ${C[0]}, so no ${A[0]} can be a ${C[0]}.`][f]
   return mk('analytical', ['average', 'average', 'difficult'][f], `${P} Which must be true?`, ok, wr, why) }
]

/* ---------- Clerical ---------- */
const LOOK = { O: 'Q', Q: 'O', M: 'N', N: 'M', C: 'G', G: 'C', E: 'F', F: 'E', P: 'R', R: 'P' }
const SUR = ['Santos','Santiago','Reyes','Reyna','Cruz','Cruzado','Garcia','Garces','Ramos','Ramirez','Villa','Villamor','Villanueva','Mendoza','Mendez','Torres','Torre','Lopez','Lope','Castro','Castillo','Aquino','Aquinto']
const FIRST = ['Ana','Anabel','Mario','Maria','Mar','Carlo','Carla','Jose','Josefa','Ben','Benito','Lea','Leah','Teo','Teodoro','Rosa','Rosalie']
const swapAt = (s, i) => s.slice(0, i) + s[i + 1] + s[i] + s.slice(i + 2)
function swapDigits(s) {
  const idx = [...s].map((c, i) => i).filter(i => /\d/.test(s[i]) && /\d/.test(s[i + 1] || '') && s[i] !== s[i + 1])
  return idx.length ? swapAt(s, pk(idx)) : null
}
const FILING = [
  ['a request for a new computer', 'Procurement'], ['a leave application', 'Personnel'], ['a payroll summary', 'Finance'],
  ['a contract under legal review', 'Legal'], ['a seminar attendance sheet', 'Training'], ['an appointment paper of a new employee', 'Personnel'],
  ['a quotation from a supplier', 'Procurement'], ['a disbursement voucher', 'Finance'], ['a notice of a court hearing', 'Legal'],
  ['a list of participants for a workshop', 'Training']
]
const CLEGEN = [
 () => { const lt = () => pk([...'ABCDEFGHJKLMNPQRSTUVWXYZ']), code = `${lt()}${lt()}-${R(1000, 9999)}-${lt()}${lt()}${R(1, 9)}`
   const letterIdx = [...code].map((c, i) => i).filter(i => LOOK[code[i]]), v1 = swapDigits(code),
     v2 = letterIdx.length ? code.slice(0, letterIdx[0]) + LOOK[code[letterIdx[0]]] + code.slice(letterIdx[0] + 1) : code.replace(/\d(?=\d{3}-)/, m => String((+m + 1) % 10)),
     v3 = code.replace(/-(\d)/, (m, dd) => '-' + ((+dd + 1) % 10 || 1))
   return mk('clerical', 'average', `Which is exactly the same as ${code}?`, code, [v1, v2, v3], 'Compare character by character; the other options swap digits, use a look-alike letter, or change one digit.') },
 () => { const nm = `${pk(FIRST)} ${pk([...'ABCDEFGMPRST'])}. ${pk(SUR)}`, ph = `09${R(10, 99)}-${R(100, 999)}-${R(1000, 9999)}`, t = R(0, 3)
   const surStart = nm.lastIndexOf(' ') + 1, nm2 = t === 1 || t === 3 ? swapAt(nm, surStart + 1) : nm, ph2 = t === 2 || t === 3 ? swapDigits(ph) : ph
   if ((nm2 === nm && (t === 1 || t === 3)) || (ph2 === ph && (t === 2 || t === 3)) || !ph2) return null
   const key = ['Exactly alike', 'Different in the name', 'Different in the number', 'Different in both']
   return mk('clerical', 'average', `Compare the two entries:\n${nm}, ${ph}\n${nm2}, ${ph2}`, key[t], key.filter((_, i) => i !== t), t === 0 ? 'Both entries match character for character.' : `Look closely: ${[t !== 2 ? 'the surname has two letters swapped' : '', t !== 1 ? 'the number has two digits swapped' : ''].filter(Boolean).join(' and ')}.`) },
 () => { const es = new Set(); while (es.size < 4) es.add(`${pk(SUR)}, ${pk(FIRST)}`); const arr = [...es]
   const sorted = [...arr].sort((x, y) => { const [s1, f1] = x.toLowerCase().split(', '), [s2, f2] = y.toLowerCase().split(', '); return s1 === s2 ? (f1 < f2 ? -1 : 1) : (s1 < s2 ? -1 : 1) })
   const n = R(0, 3), word = ['first', 'second', 'third', 'last'][n], tight = new Set(arr.map(x => x.split(',')[0].slice(0, 4))).size < 4
   return mk('clerical', tight ? 'difficult' : 'average', `Arranged alphabetically, which name comes ${word}?\n${arr.join('\n')}`, sorted[n], sorted.filter((_, i) => i !== n), `Order: ${sorted.join('; ')}. Compare surnames letter by letter first (nothing comes before something), then first names.`) },
 () => { const g = [0, 1, 2].map(() => String(R(1000, 9999))), dg = String(R(0, 9)), c = g.join('').split(dg).length - 1
   return mk('clerical', c > 3 ? 'average' : 'easy', `How many times does the digit ${dg} appear?\n${g.join(' ')}`, c, near(c, [1, -1, 2]).concat([c + 3]), `${g.map(x => `${x} has ${x.split(dg).length - 1}`).join(', ')}: ${c} in all.`) },
 () => { const ds = new Set(); while (ds.size < 4) ds.add(new Date(R(2024, 2026), R(0, 11), R(1, 28)).getTime()); const arr = [...ds], f = t => { const x = new Date(t); return `${MONTHS[x.getMonth()]} ${x.getDate()}, ${x.getFullYear()}` }
   const s = [...arr].sort((a, b) => a - b), w = pk([[0, 'earliest'], [3, 'latest'], [1, 'second earliest']])
   return mk('clerical', w[0] === 1 ? 'average' : 'easy', `Which date is the ${w[1]}?`, f(s[w[0]]), arr.filter(t => t !== s[w[0]]).map(f), `In order: ${s.map(f).join('; ')}.`) },
 () => { const base = [...String(R(1000, 9999))]; if (new Set(base).size < 3) return null; const ns = new Set(); let tries = 0
   while (ns.size < 4 && tries++ < 50) { const p = shuffle([...base]).join(''); if (p[0] !== '0') ns.add(+p) } if (ns.size < 4) return null
   const arr = [...ns], s = [...arr].sort((a, b) => a - b), n = pk([1, 2])
   return mk('clerical', 'average', `Arranged from lowest to highest, which number comes ${n === 1 ? 'second' : 'third'}?\n${arr.join(', ')}`, s[n], arr.filter(x => x !== s[n]), `Order: ${s.join(', ')}.`) },
 () => { const [doc, head] = pk(FILING)
   return mk('clerical', 'easy', `An office files records by subject. Under which heading should ${doc} be filed?`, head, ['Personnel', 'Procurement', 'Finance', 'Legal', 'Training'].filter(x => x !== head).sort(() => Math.random() - 0.5), `${doc[0].toUpperCase() + doc.slice(1)} belongs under ${head}.`) }
]

const GEN = {
  verbal: [() => vocabItem(VOCAB, 'verbal', false), () => vocabItem(VOCAB, 'verbal', false), agreeItem, analogyItem],
  filipino: [() => vocabItem(SALITA, 'filipino', true)],
  numerical: NUMGEN, analytical: ANAGEN, clerical: CLEGEN,
  general: [lawItem, lawItem, articleItem, officeItem]
}

/* Make one item for a subject (or any subject in `cats`), matching a difficulty when asked */
export function genItem(cats, cat, diff) {
  for (let t = 0; t < 60; t++) {
    const c = cat || pk(cats), q = pk(GEN[c])()
    if (q && (!diff || diff === 'mixed' || diff === 'all' || q.d === diff)) return q
  }
  for (let t = 0; t < 30; t++) { const q = pk(GEN[cat || pk(cats)])(); if (q) return q }
  return null
}
