/* ===================== STUDY NOTES =====================
   Short lessons for every part of the CSC Career Service Examination coverage.
   Each topic: id, c (subject), title, summary, sections [{ h, p?, list?, table? }] */
export const NOTES = [
  // ---------------- ABOUT THE EXAM ----------------
  {
    id: 'exam', c: 'about', title: 'About the Career Service Examination',
    summary: 'Coverage, item counts, time limits and the passing rating.',
    sections: [
      { h: 'Two levels', table: { head: ['', 'Professional', 'Subprofessional'], rows: [
        ['Items', '170', '165'], ['Time limit', '3 hours 10 minutes', '2 hours 40 minutes'], ['Passing rating', '80.00', '80.00'],
        ['Verbal ability', 'English and Filipino', 'English and Filipino'], ['Numerical ability', 'Yes', 'Yes'],
        ['Analytical ability', 'Yes', 'No'], ['Clerical operations', 'No', 'Yes'], ['General information', 'Yes', 'Yes']
      ] } },
      { h: 'General information covers', list: ['The 1987 Philippine Constitution', 'RA 6713, the Code of Conduct and Ethical Standards for Public Officials and Employees', 'Peace and human rights', 'Environment management and protection'] },
      { h: 'Exam-day habits', list: [
        'Answer every item. A blank counts as wrong and there is no penalty for guessing.',
        'Do the easy items first, flag the hard ones and come back to them.',
        'Keep a steady pace: about 67 seconds per item for both levels.',
        'Shade answers as you go, not all at the end.',
        'Always confirm current requirements and schedules on the official Civil Service Commission website.'
      ] }
    ]
  },

  // ---------------- VERBAL (ENGLISH) ----------------
  {
    id: 'vocab', c: 'verbal', title: 'Vocabulary: synonyms and antonyms',
    summary: 'How to work out meanings, plus common exam words.',
    sections: [
      { h: 'Strategies', list: [
        'Read the word in its sentence. Context often tells you if it is positive or negative.',
        'Use word parts: bene- (good), mal- (bad), -cide (kill), omni- (all), ante- (before), post- (after), circum- (around), dis-/in-/un- (not).',
        'Watch out: in antonym items one choice is usually a synonym. Read the instruction twice.',
        'Eliminate choices that are a different part of speech from the given word.'
      ] },
      { h: 'Common exam words', table: { head: ['Word', 'Means', 'Opposite'], rows: [
        ['Benevolent', 'kind', 'cruel'], ['Frugal', 'thrifty', 'wasteful'], ['Candid', 'frank', 'evasive'], ['Mitigate', 'lessen', 'worsen'],
        ['Ubiquitous', 'everywhere', 'rare'], ['Verbose', 'wordy', 'concise'], ['Prudent', 'wise, careful', 'reckless'], ['Lucid', 'clear', 'confusing'],
        ['Obsolete', 'outdated', 'modern'], ['Diligent', 'hardworking', 'lazy'], ['Meticulous', 'very careful', 'careless'], ['Ephemeral', 'short-lived', 'permanent'],
        ['Adamant', 'firm, unyielding', 'flexible'], ['Ameliorate', 'improve', 'worsen'], ['Obfuscate', 'make unclear', 'clarify'], ['Exonerate', 'clear of blame', 'accuse']
      ] } }
    ]
  },
  {
    id: 'grammar', c: 'verbal', title: 'Grammar and correct usage',
    summary: 'Subject-verb agreement, pronouns, tenses and commonly confused words.',
    sections: [
      { h: 'Subject-verb agreement', list: [
        'Each, every, either, neither, everyone, someone, nobody: singular. “Each of the forms IS signed.”',
        'Two subjects joined by “and”: plural. “The clerk and the cashier ARE here.”',
        'Either…or / neither…nor: the verb agrees with the NEARER subject. “Neither the manager nor the clerks ARE …”',
        '“The number of” is singular; “a number of” is plural.',
        'Phrases like “as well as,” “together with,” “along with” do not change the subject. “The report, along with the receipts, WAS submitted.”',
        'Collective nouns (committee, team) are singular when acting as one unit.',
        'Words ending in -ics (mathematics, economics) and “news” are usually singular.',
        '“One of the ___ who” takes a plural verb: “one of the employees who ARE always on time.”'
      ] },
      { h: 'Pronouns', list: [
        'After prepositions (to, for, between, with) use object pronouns: me, him, her, us, them. “Between you and ME.”',
        'Who = subject (he); whom = object (him). “Whom did you call?” (You called him.)',
        'Use reflexive pronouns (myself) only when the subject does the action to itself.'
      ] },
      { h: 'Verbs and tenses', list: [
        'Since + starting point; for + length of time: “since 2019,” “for five years.”',
        'Unreal present: “If I WERE you, I would…”',
        'Unreal past: “If I HAD KNOWN, I would have…”',
        'Future perfect: “By the time he arrives, we WILL HAVE FINISHED.”',
        'After suggest/recommend/insist that, use the base verb: “He suggested that she SUBMIT…”',
        'Lie (rest) – lay – lain – lying; lay (put something) – laid – laid – laying.'
      ] },
      { h: 'Commonly confused words', table: { head: ['Word', 'Use'], rows: [
        ['affect / effect', 'affect = verb (to influence); effect = noun (result)'], ['between / among', 'between two; among three or more'],
        ['fewer / less', 'fewer for countable things; less for amounts'], ['despite / in spite of', 'never “despite of”'],
        ['its / it’s', 'its = belonging to it; it’s = it is'], ['principal / principle', 'principal = main, head; principle = rule'],
        ['comparative / superlative', '-er or more for two; -est or most for three or more']
      ] } }
    ]
  },
  {
    id: 'analogy', c: 'verbal', title: 'Analogies and idioms',
    summary: 'Find the relationship first, then match it.',
    sections: [
      { h: 'How to solve analogies', list: ['Make a sentence for the first pair: “A book is kept in a library.”', 'Apply the same sentence to the choices: “A painting is kept in a gallery.”', 'If two choices fit, make the sentence more specific.'] },
      { h: 'Common relationships', table: { head: ['Type', 'Example'], rows: [
        ['Worker : tool', 'Surgeon : scalpel'], ['Worker : workplace', 'Teacher : school'], ['Part : whole', 'Page : book'], ['Opposites', 'Ascend : descend'],
        ['Young : adult', 'Puppy : dog'], ['Cause : effect', 'Drought : famine'], ['Creator : work', 'Composer : song'], ['Unit : bigger unit', 'Month : year'], ['Lack of', 'Famine : food, drought : water']
      ] } },
      { h: 'Idioms often asked', table: { head: ['Idiom', 'Meaning'], rows: [
        ['Burn the midnight oil', 'work or study late at night'], ['Cut corners', 'do something cheaply or carelessly'], ['Blessing in disguise', 'something good that first seemed bad'],
        ['Hit the nail on the head', 'be exactly right'], ['Spill the beans', 'reveal a secret'], ['Once in a blue moon', 'very rarely'],
        ['Bite the bullet', 'face something hard bravely'], ['Wet blanket', 'person who spoils the fun'], ['Beat around the bush', 'avoid the main point'],
        ['Break the ice', 'start a conversation in an awkward situation'], ['Red tape', 'excessive bureaucratic rules'], ['Piece of cake', 'very easy']
      ] } }
    ]
  },
  {
    id: 'reading', c: 'verbal', title: 'Reading comprehension and paragraph organization',
    summary: 'Main idea, details, inference, and putting sentences in order.',
    sections: [
      { h: 'Reading comprehension', list: [
        'Read the question first so you know what to look for.',
        'Main idea: the point the whole passage supports, not one detail.',
        'Detail questions: the answer is stated in the passage. Do not use outside knowledge.',
        'Inference: what the passage strongly suggests without saying it directly.',
        'Vocabulary in context: replace the word with each choice and see which keeps the meaning.',
        'Watch extreme words like always, never, only, all. They are usually wrong.'
      ] },
      { h: 'Paragraph organization', list: [
        'Find the opening sentence: it introduces the topic and does not refer back (no “this,” “these,” “however,” “then”).',
        'Follow signal words: first, next, then, after that, finally; however (contrast); as a result, therefore (effect).',
        'Pronouns point back: “It,” “they,” “these files” must come after the sentence that names them.',
        'Check the full order by reading it once from start to end.'
      ] }
    ]
  },

  // ---------------- FILIPINO ----------------
  {
    id: 'filipino', c: 'filipino', title: 'Wastong gamit ng salita',
    summary: 'Ng at nang, din at rin, may at mayroon, at iba pa.',
    sections: [
      { h: 'Ng at nang', list: [
        '“Ng” bago ang pangngalan o bilang pang-ukol: kumain ng mangga, aklat ng bata.',
        '“Nang” bilang pang-abay na nagsasaad ng paraan: tumakbo nang mabilis.',
        '“Nang” kapag nangangahulugang “noong” o “upang”: Nang dumating siya…; Nag-aral siya nang pumasa.',
        '“Nang” sa pagitan ng inuulit na pandiwa: tawa nang tawa.'
      ] },
      { h: 'Din/rin at daw/raw', list: ['Rin at raw: kapag nagtatapos sa patinig o malapatinig (w, y) ang sinusundang salita. Sasama rin, ikaw raw.', 'Din at daw: kapag nagtatapos sa katinig. Pagod daw, aalis din.'] },
      { h: 'May at mayroon', list: ['“May” kapag sinusundan ng pangngalan, pandiwa, pang-uri o panghalip paari: may pera, may sakit.', '“Mayroon” kapag sinusundan ng kataga o panghalip panao: Mayroon ka bang…, Mayroon siyang…; o bilang sagot.'] },
      { h: 'Mga salitang madalas mapagpalit', table: { head: ['Salita', 'Wastong gamit'], rows: [
        ['Subukin / subukan', 'subukin = alamin kung maayos; subukan = tiktikan nang palihim'], ['Pahirin / pahiran', 'pahirin = alisin (pawis); pahiran = lagyan (gamot, langis)'],
        ['Walisin / walisan', 'walisin = ang dumi; walisan = ang lugar'], ['Sundin / sundan', 'sundin = tuparin ang utos; sundan = gayahin o puntahan'],
        ['Operahin / operahan', 'operahin = bahagi ng katawan; operahan = ang tao'], ['Kung / kapag', 'kung = di-tiyak na kalagayan; kapag = tiyak o karaniwang nangyayari']
      ] } }
    ]
  },
  {
    id: 'sawikain', c: 'filipino', title: 'Mga sawikain at talasalitaan',
    summary: 'Mga idyomang madalas lumabas sa pagsusulit.',
    sections: [
      { h: 'Mga sawikain', table: { head: ['Sawikain', 'Kahulugan'], rows: [
        ['Nagsusunog ng kilay', 'nag-aaral nang mabuti'], ['Balat-sibuyas', 'maramdamin, madaling masaktan'], ['Bukas-palad', 'mapagbigay'],
        ['Kapit-tuko', 'ayaw bumitaw'], ['Ilaw ng tahanan', 'ina'], ['Haligi ng tahanan', 'ama'], ['Kabiyak ng dibdib', 'asawa'],
        ['Makapal ang mukha', 'walang hiya'], ['Ningas-kugon', 'masigasig sa umpisa lamang'], ['Itaga sa bato', 'tandaan at tuparin'],
        ['Butas ang bulsa', 'walang pera'], ['Taingang kawali', 'nagbibingi-bingihan'], ['Bahag ang buntot', 'duwag'], ['Anak-pawis', 'manggagawa'],
        ['Mababaw ang luha', 'iyakin'], ['Matigas ang ulo', 'suwail, ayaw makinig'], ['Mahaba ang kamay', 'magnanakaw'], ['Di makabasag-pinggan', 'mahinhin']
      ] } },
      { h: 'Talasalitaan', table: { head: ['Salita', 'Kasingkahulugan', 'Kasalungat'], rows: [
        ['Mapagkumbaba', 'mababang-loob', 'mapagmataas'], ['Masagana', 'mayaman, marami', 'salat'], ['Matiwasay', 'payapa', 'magulo'], ['Malumbay', 'malungkot', 'masaya'],
        ['Mailap', 'mahirap lapitan', 'maamo'], ['Masinop', 'maingat sa gamit', 'burara'], ['Hinagpis', 'matinding kalungkutan', 'galak'], ['Dalisay', 'puro, malinis', 'marumi']
      ] } }
    ]
  },

  // ---------------- NUMERICAL ----------------
  {
    id: 'basics', c: 'numerical', title: 'Fractions, decimals, percent and order of operations',
    summary: 'The building blocks of every numerical item.',
    sections: [
      { h: 'Order of operations (PEMDAS)', p: 'Parentheses, Exponents, Multiplication and Division (left to right), Addition and Subtraction (left to right).' },
      { h: 'Fractions', list: ['Add or subtract: use a common denominator. 3/4 + 2/3 = 9/12 + 8/12 = 17/12.', 'Multiply: top × top, bottom × bottom.', 'Divide: multiply by the reciprocal. 60 ÷ 2/5 = 60 × 5/2 = 150.', 'Always reduce to lowest terms.'] },
      { h: 'Percent', list: ['Percent of a number: 15% of 840 = 0.15 × 840.', 'Part is what percent of whole: part ÷ whole × 100.', 'Whole from part: 40% of what is 64? 64 ÷ 0.40.', 'Percent change: (new − old) ÷ old × 100.', 'Successive changes multiply: +20% then −20% = 1.2 × 0.8 = 0.96, a 4% decrease.'] },
      { h: 'Handy equivalents', table: { head: ['Fraction', 'Decimal', 'Percent'], rows: [
        ['1/2', '0.5', '50%'], ['1/3', '0.333…', '33⅓%'], ['1/4', '0.25', '25%'], ['1/5', '0.2', '20%'], ['1/8', '0.125', '12.5%'], ['3/8', '0.375', '37.5%'], ['1/20', '0.05', '5%']
      ] } }
    ]
  },
  {
    id: 'wordprob', c: 'numerical', title: 'Word problems and formulas',
    summary: 'Work, age, motion, ratio, interest, discount and mixtures.',
    sections: [
      { h: 'Formulas', table: { head: ['Problem', 'Formula'], rows: [
        ['Work together', '1/a + 1/b = 1/t (t = time together)'], ['Pipe fills, pipe drains', '1/a − 1/b = 1/t'], ['Workers and days', 'workers × days stays the same (inverse)'],
        ['Distance', 'd = r × t'], ['Opposite directions', 'add the speeds'], ['Simple interest', 'I = P × r × t'], ['Compound interest', 'A = P(1 + r)ⁿ'],
        ['Profit', 'selling price − cost; profit % is based on cost'], ['Discount', 'price × (1 − rate); successive discounts multiply'], ['VAT (12%)', 'price × 1.12'],
        ['Mixture', 'amount of pure substance stays the same when water is added'], ['Average', 'sum ÷ count; missing value = average × count − known sum']
      ] } },
      { h: 'Age problems', p: 'Let the younger person’s age be x and write each condition as an equation. Example: Ana is 3 times Ben’s age; in 10 years she will be twice his age: 3x + 10 = 2(x + 10), so x = 10.' },
      { h: 'Ratio and proportion', list: ['Divide in a ratio: add the parts, find one part, multiply. ₱36,000 in 2:3:4 → 9 parts → ₱4,000 each part.', 'Direct proportion: more items, more cost.', 'Inverse proportion: more workers, fewer days.'] }
    ]
  },
  {
    id: 'geometry', c: 'numerical', title: 'Geometry, measurement and statistics',
    summary: 'Areas, volumes, conversions, mean, median and mode.',
    sections: [
      { h: 'Area, perimeter and volume', table: { head: ['Figure', 'Formula'], rows: [
        ['Rectangle', 'A = l × w; P = 2(l + w)'], ['Square', 'A = s²; P = 4s'], ['Triangle', 'A = ½ × b × h'], ['Circle', 'A = πr²; C = 2πr'],
        ['Rectangular box', 'V = l × w × h'], ['Cylinder', 'V = πr²h'], ['Right triangle', 'c² = a² + b²']
      ] } },
      { h: 'Conversions', list: ['1 km = 1,000 m; 1 m = 100 cm; 1 inch = 2.54 cm; 1 foot = 12 inches.', '1 kg = 1,000 g; 1 L = 1,000 mL.', '1 hour = 60 minutes; 1 day = 24 hours; a leap year has 366 days.'] },
      { h: 'Statistics', list: ['Mean: sum ÷ count.', 'Median: middle value after sorting (average of the two middle values if the count is even).', 'Mode: the value that appears most often.'] },
      { h: 'Clock angles', p: 'Each hour mark is 30°. At 3:00 the hands are 90° apart; at 6:00, 180°. The hands overlap 11 times in 12 hours.' }
    ]
  },
  {
    id: 'series', c: 'numerical', title: 'Number and letter series',
    summary: 'Spot the pattern quickly.',
    sections: [
      { h: 'Check in this order', list: ['Constant difference (+3, +3…).', 'Growing difference (+2, +4, +6…).', 'Multiply or divide (×2, ×3, ÷3).', 'Squares (1, 4, 9, 16) and cubes (1, 8, 27, 64).', 'Primes (2, 3, 5, 7, 11, 13, 17).', 'Fibonacci: each term is the sum of the two before.', 'Alternating patterns (×2, −1, ×2, −1).', 'Letters: turn them into numbers (A = 1 … Z = 26).'] }
    ]
  },

  // ---------------- ANALYTICAL ----------------
  {
    id: 'logic', c: 'analytical', title: 'Logic, syllogisms and conclusions',
    summary: 'What must be true, what may be true, and common fallacies.',
    sections: [
      { h: 'Syllogisms', list: ['All A are B + all B are C → all A are C.', 'Some A are B + all B are C → some A are C.', 'All A are B + no B is C → no A is C.', 'Draw circles (Venn diagrams) when unsure.', '“All A are B” does NOT mean all B are A.'] },
      { h: 'If–then statements', list: ['If P then Q. Q is false → P is false (valid).', 'If P then Q. Q is true → nothing about P (affirming the consequent, a fallacy).', 'If P then Q. P is false → nothing about Q (denying the antecedent, a fallacy).'] },
      { h: 'Assumptions, conclusions and data sufficiency', list: ['An assumption is something unstated that must be true for the statement to make sense.', 'A conclusion must follow from the statements only, not from your own knowledge.', 'Data sufficiency: test each statement alone first, then together.', 'Cause and effect: ask which event logically leads to the other.'] }
    ]
  },
  {
    id: 'puzzles', c: 'analytical', title: 'Arrangements, directions, relations and coding',
    summary: 'Draw it out: most of these are solved with a quick sketch.',
    sections: [
      { h: 'Techniques', list: [
        'Seating and ranking: write positions as blanks and fill in the fixed clues first.',
        'Position from the other end: total − position + 1.',
        'Directions: draw a compass; right turn = clockwise.',
        'Family relations: draw a family tree. “Only daughter of my mother” is the speaker herself.',
        'Calendar: count remainders after dividing by 7. A normal year shifts the day by 1, a leap year by 2.',
        'Coding: compare the original and coded word letter by letter (shift, reverse, number value).',
        'Odd one out: find the rule three items share.'
      ] }
    ]
  },

  {
    id: 'abstract', c: 'analytical', practice: 'abstract', title: 'Abstract reasoning (figures)',
    summary: 'Figure series, figure analogies and odd one out.',
    sections: [
      { h: 'What the items look like', list: [
        'Series: four figures follow a rule. Pick the fifth.',
        'Analogy: figure A changes into figure B. Apply the same change to figure C.',
        'Odd one out: three figures share a rule; one does not.'
      ] },
      { h: 'Rules to check, in this order', list: [
        'Rotation: how many degrees does the figure turn each step (45°, 90°, 180°), and in which direction?',
        'Count: does the number of sides, dots or lines go up or down by a fixed amount?',
        'Position: does a shaded part or small mark move around the figure? Count how many places it moves.',
        'Shading: does the figure switch between solid and outline?',
        'Mirror image: a flipped figure can never be made by turning it. This is a favorite odd-one-out trap.',
        'Two rules at once: sometimes the figure turns AND changes shading. Check each change separately.'
      ] },
      { h: 'Tips', list: [
        'Compare figure 1 with 2, then 2 with 3. The change between neighbors is the rule.',
        'Eliminate choices that break any rule you already found.',
        'A choice that repeats the last figure in the series is a common distractor.',
        'Turn the page or phone in your mind, not your head: track one corner or tip of the figure.'
      ] }
    ]
  },

  // ---------------- CLERICAL ----------------
  {
    id: 'filing', c: 'clerical', title: 'Alphabetical filing and checking',
    summary: 'Rules for ordering names and spotting differences.',
    sections: [
      { h: 'Filing rules', list: [
        'File by surname, then first name, then middle initial.',
        'Nothing comes before something: “Santos, Mar” before “Santos, Maria.”',
        'Go letter by letter and ignore spaces and punctuation: Dela Cruz is filed as DELACRUZ.',
        'Prefixes like De, Del, Dela, Mac, Mc are part of the surname and filed exactly as written.',
        'Abbreviations are filed as written (Ma. as M-A).',
        'Numbers are filed by value: 2 before 12.',
        'Titles and suffixes (Jr., Sr., III) are used only to break ties.'
      ] },
      { h: 'Checking and comparing', list: ['Compare in small chunks: three or four characters at a time.', 'Watch swapped digits (4567 vs 4576) and look-alike letters (O/Q, M/N, C/G, E/F).', 'Count characters with a finger or pen tip moving along the line.'] }
    ]
  },
  {
    id: 'office', c: 'clerical', title: 'Records management and office procedures',
    summary: 'Filing systems, letters and handling documents.',
    sections: [
      { h: 'Filing systems', table: { head: ['System', 'Arranges records by'], rows: [
        ['Alphabetic', 'names'], ['Numeric', 'assigned numbers'], ['Subject', 'topic (Personnel, Finance, Procurement, Legal)'], ['Geographic', 'location'], ['Chronological', 'date']
      ] } },
      { h: 'Records', list: ['Active records are used often; inactive records are kept for a retention period, then archived or disposed of under the approved schedule.', 'Vital records are essential to the office and must be protected.', 'Stamp incoming documents with the date and time received.', 'Confidential documents go only to authorized persons.'] },
      { h: 'Parts of a business letter', p: 'Heading (letterhead and date), inside address, salutation, body, complimentary close, signature line. Full block: every line starts at the left margin. Modified block: date and closing start at the center.' }
    ]
  },

  // ---------------- GENERAL INFORMATION ----------------
  {
    id: 'constitution', c: 'general', title: 'The 1987 Philippine Constitution',
    summary: 'Articles, branches of government and key numbers.',
    sections: [
      { h: 'Basics', list: ['Ratified February 2, 1987; 18 articles plus the Preamble.', 'Article II: the Philippines is a democratic and republican State. Sovereignty resides in the people.', 'Article III: Bill of Rights.', 'Article XI, Section 1: Public office is a public trust.'] },
      { h: 'The 18 articles', table: { head: ['Article', 'Title'], rows: [
        ['I', 'National Territory'], ['II', 'Declaration of Principles and State Policies'], ['III', 'Bill of Rights'], ['IV', 'Citizenship'], ['V', 'Suffrage'],
        ['VI', 'Legislative Department'], ['VII', 'Executive Department'], ['VIII', 'Judicial Department'], ['IX', 'Constitutional Commissions'], ['X', 'Local Government'],
        ['XI', 'Accountability of Public Officers'], ['XII', 'National Economy and Patrimony'], ['XIII', 'Social Justice and Human Rights'],
        ['XIV', 'Education, Science and Technology, Arts, Culture and Sports'], ['XV', 'The Family'], ['XVI', 'General Provisions'], ['XVII', 'Amendments or Revisions'], ['XVIII', 'Transitory Provisions']
      ] } },
      { h: 'Elected officials', table: { head: ['Office', 'Term', 'Limit', 'Minimum age'], rows: [
        ['President', '6 years', 'no reelection', '40'], ['Vice President', '6 years', 'two successive terms', '40'], ['Senator (24)', '6 years', 'two consecutive terms', '35'],
        ['House member', '3 years', 'three consecutive terms', '25'], ['Local officials', '3 years', 'three consecutive terms', 'set by law']
      ] } },
      { h: 'Other key provisions', list: [
        'Supreme Court: Chief Justice and 14 Associate Justices; they serve until age 70.',
        'Martial law or suspension of the writ of habeas corpus: up to 60 days; Congress may revoke or extend.',
        'Impeachment: the House initiates, the Senate tries; conviction needs two-thirds of all Senators. Impeachable: President, Vice President, Supreme Court members, Constitutional Commission members, Ombudsman.',
        'Constitutional Commissions (Article IX): Civil Service Commission (Chairman + 2), COMELEC (Chairman + 6), Commission on Audit (Chairman + 2). Seven-year terms without reappointment.',
        'Civil service: appointments by merit and fitness, determined as far as practicable by competitive examination. Civil servants may not engage in partisan political campaigns.',
        'Suffrage: Filipino citizens at least 18 years old, resident in the Philippines for one year and in the place of voting for six months.',
        'National language: Filipino. Official languages: Filipino and, until otherwise provided by law, English.',
        'Amendments: by Congress (three-fourths vote), a constitutional convention, or a people’s initiative (12% of registered voters, at least 3% per district).'
      ] }
    ]
  },
  {
    id: 'ra6713', c: 'general', title: 'RA 6713: Code of Conduct and Ethical Standards',
    summary: 'The eight norms of conduct, duties and prohibited acts.',
    sections: [
      { h: 'Eight norms of conduct (Section 4)', table: { head: ['Norm', 'Meaning'], rows: [
        ['Commitment to public interest', 'Public interest above personal interest; use resources efficiently.'],
        ['Professionalism', 'Excellence, intelligence and skill; no undue patronage.'],
        ['Justness and sincerity', 'Truthful, fair; no discrimination; respect the rights of others.'],
        ['Political neutrality', 'Serve everyone regardless of party affiliation.'],
        ['Responsiveness to the public', 'Courteous, prompt service; explain procedures clearly.'],
        ['Nationalism and patriotism', 'Loyalty to the country; promote local products and resources.'],
        ['Commitment to democracy', 'Uphold the democratic way of life; accountability to the people.'],
        ['Simple living', 'Modest lifestyle appropriate to the position; no extravagant display of wealth.']
      ] } },
      { h: 'Duties (Section 5)', list: ['Act on letters and requests within 15 working days from receipt.', 'Submit annual performance reports.', 'Process documents promptly, with the fewest signatories possible.', 'Act immediately on the public’s personal transactions.', 'Make public documents accessible during office hours.'] },
      { h: 'Prohibited acts (Section 7)', list: ['Having a financial or material interest in a transaction that needs the approval of one’s office.', 'Outside employment or private practice that conflicts with official functions, unless authorized.', 'Disclosing or misusing confidential information.', 'Soliciting or accepting gifts, gratuities, favors, loans or anything of monetary value in connection with official duties.'] },
      { h: 'SALN (Section 8)', p: 'The Statement of Assets, Liabilities and Net Worth is filed within 30 days after assuming office, on or before April 30 of every year, and within 30 days after leaving the service.' },
      { h: 'Related laws', table: { head: ['Law', 'Title'], rows: [
        ['RA 3019', 'Anti-Graft and Corrupt Practices Act'], ['RA 7080', 'Anti-Plunder Act (₱50 million or more)'], ['RA 9485', 'Anti-Red Tape Act of 2007'],
        ['RA 11032', 'Ease of Doing Business Act of 2018: simple 3, complex 7, highly technical 20 working days; created ARTA'], ['RA 10173', 'Data Privacy Act of 2012 (National Privacy Commission)']
      ] } }
    ]
  },
  {
    id: 'humanrights', c: 'general', title: 'Peace and human rights',
    summary: 'UDHR, kinds of rights, peace concepts and Philippine laws.',
    sections: [
      { h: 'Human rights basics', list: ['Universal Declaration of Human Rights: adopted December 10, 1948 by the UN General Assembly; 30 articles. December 10 is Human Rights Day.', 'Characteristics: universal, inalienable, indivisible, interdependent and interrelated.', 'The Commission on Human Rights is created under Article XIII of the 1987 Constitution.'] },
      { h: 'Generations of rights', table: { head: ['Generation', 'Examples'], rows: [
        ['First: civil and political', 'life, liberty, free speech, right to vote, fair trial'], ['Second: economic, social, cultural', 'work, education, health, social security'],
        ['Third: solidarity (collective)', 'development, peace, healthy environment, self-determination']
      ] } },
      { h: 'Peace concepts', list: ['Negative peace: the absence of war and direct violence.', 'Positive peace: justice, equality and the removal of structural violence.', 'Structural violence: harm built into social systems, such as poverty and discrimination.', 'International humanitarian law (the Geneva Conventions of 1949) protects civilians, the wounded and prisoners during armed conflict.'] },
      { h: 'Philippine laws', table: { head: ['Law', 'Title'], rows: [
        ['RA 9710', 'Magna Carta of Women'], ['RA 9262', 'Anti-Violence Against Women and Their Children Act'], ['RA 11313', 'Safe Spaces Act'],
        ['RA 7610', 'Special Protection of Children Against Abuse'], ['RA 9745', 'Anti-Torture Act of 2009'], ['RA 8371', 'Indigenous Peoples’ Rights Act'],
        ['RA 9208', 'Anti-Trafficking in Persons Act'], ['RA 10368', 'Human Rights Victims Reparation and Recognition Act']
      ] } }
    ]
  },
  {
    id: 'environment', c: 'general', title: 'Environment management and protection',
    summary: 'Environmental laws, treaties and key concepts.',
    sections: [
      { h: 'Philippine laws', table: { head: ['Law', 'Title and key points'], rows: [
        ['RA 9003', 'Ecological Solid Waste Management Act of 2000: segregation at source, Materials Recovery Facility per barangay, no open dumps'],
        ['RA 8749', 'Clean Air Act of 1999: bans incineration that emits poisonous and toxic fumes'], ['RA 9275', 'Clean Water Act of 2004'],
        ['RA 9729', 'Climate Change Act of 2009: created the Climate Change Commission'], ['RA 10121', 'Disaster Risk Reduction and Management Act of 2010'],
        ['RA 7586', 'NIPAS Act of 1992 (protected areas)'], ['RA 9147', 'Wildlife Resources Conservation and Protection Act'], ['RA 8550', 'Philippine Fisheries Code of 1998'],
        ['RA 6969', 'Toxic Substances and Hazardous and Nuclear Wastes Control Act']
      ] } },
      { h: 'Concepts', list: ['Sustainable development: meeting present needs without compromising future generations (Brundtland Report, 1987).', 'Greenhouse gases (carbon dioxide, methane) trap heat and cause global warming.', 'The 3Rs: reduce, reuse, recycle.', 'Biodiversity: the variety of genes, species and ecosystems. The Philippines is a megadiverse country.'] },
      { h: 'Treaties and dates', table: { head: ['Item', 'Detail'], rows: [
        ['Montreal Protocol (1987)', 'phases out ozone-depleting substances'], ['Kyoto Protocol (1997)', 'emission targets for developed countries'], ['Paris Agreement (2015)', 'keep warming well below 2°C'],
        ['Earth Day', 'April 22'], ['World Environment Day', 'June 5'], ['World Water Day', 'March 22']
      ] } }
    ]
  }
]

export const NOTE_GROUPS = [
  ['about', 'About the exam'], ['verbal', 'Verbal ability (English)'], ['filipino', 'Verbal ability (Filipino)'], ['numerical', 'Numerical ability'],
  ['analytical', 'Analytical ability'], ['clerical', 'Clerical operations'], ['general', 'General information']
]
