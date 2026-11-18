/* Which study-note lesson teaches each kind of item. Returns candidate note ids, best first;
   the caller picks the first one that exists. Pure (no app imports) so it can be tested in Node. */
export function lessonIdsFor(q) {
  if (!q) return []
  const t = (q.q || '').toLowerCase()
  if (q.abs) return ['abstract']
  switch (q.c) {
    case 'verbal':
      if (t.includes('::')) return ['analogy']
      if (/read the passage|arrange the sentences|begins a paragraph/.test(t)) return ['reading']
      if (/^“|” means|means to|“a |a person who is/.test(t)) return ['analogy']
      if (/closest in meaning|opposite in meaning|most nearly means|means:|spelled/.test(t)) return ['vocab']
      return ['grammar']
    case 'filipino':
      if (/kasingkahulugan|kasalungat|ang taong|ang “|sino ang tinutukoy/.test(t)) return ['sawikain']
      return ['filipino']
    case 'numerical':
      if (/what comes next/.test(t)) return ['math-number-series', 'math-series', 'series']
      if (/area|perimeter|volume|triangle|circle|rectangle|angle|hypotenuse|box|room|sides of a right/.test(t)) return ['math-geometry-measurement', 'math-geometry', 'geometry']
      if (/average|median|mode|applicants|spending|share of/.test(t)) return ['math-statistics', 'math-statistics-data', 'geometry']
      if (/\bold\b/.test(t) && /years|age/.test(t)) return ['math-age-problems', 'math-age', 'wordprob']
      if (/finish|job|workers|pipe|fills|paint/.test(t)) return ['math-work-problems', 'math-work', 'wordprob']
      if (/km|speed|travels|bus|car|train|apart/.test(t)) return ['math-distance-rate-time', 'math-distance', 'wordprob']
      if (/solution|mixture|liters of water/.test(t)) return ['math-mixtures', 'math-mixture', 'wordprob']
      if (/interest|profit|cost|discount|vat|price|salary|marks up|earns|budget|fare|change/.test(t)) return ['math-money', 'math-money-problems', 'wordprob']
      if (/ratio|divided among|divided in/.test(t)) return ['math-ratio-proportion', 'math-ratio', 'wordprob']
      if (/solve for|sum of two|consecutive/.test(t)) return ['math-basic-algebra', 'math-algebra', 'wordprob']
      if (/%|percent/.test(t)) return ['math-percent', 'basics']
      if (/scientific|√|²|³|\d\^/.test(t)) return ['math-exponents', 'math-exponents-roots', 'basics']
      if (/round|decimal|0\.\d/.test(t)) return ['math-decimals', 'basics']
      if (/\d+\/\d+|fraction|multiple|factor/.test(t)) return ['math-fractions', 'basics']
      return ['math-whole-numbers', 'math-order-of-operations', 'basics']
    case 'analytical':
      if (/must be true|conclusion|therefore|follows|assumed|cause|statement|enough/.test(t)) return ['logic']
      return ['puzzles']
    case 'clerical':
      if (/alphabetical|alphabetically|exactly|compare|how many times|which date|which time|lowest to highest|file number|pairs|arranged/.test(t)) return ['filing']
      return ['office']
    case 'general':
      if (/6713|saln|norms? of conduct|prohibited act|professionalism|political neutrality|plunder|11032|anti-red tape|anti-graft|privacy/.test(t)) return ['ra6713']
      if (/human rights|udhr|universal declaration|peace|violence|geneva|humanitarian|generation|torture|women|children/.test(t)) return ['humanrights']
      if (/environment|waste|clean air|clean water|climate|ozone|paris|kyoto|earth day|greenhouse|sustainable|three rs|9003|8749|9275|9729|10121|materials recovery|biodiversity/.test(t)) return ['environment']
      return ['constitution']
    default:
      return []
  }
}
