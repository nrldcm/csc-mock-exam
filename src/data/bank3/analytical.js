// New items for analytical, written to the official CSC scope. Append new items at the END only.
export const ITEMS = [
 {
  "c": "analytical",
  "d": "easy",
  "t": "Word analogy",
  "q": "DRIZZLE : DOWNPOUR :: BREEZE : ?",
  "o": [
   "Gale",
   "Rain",
   "Calm",
   "Sail"
  ],
  "a": 0,
  "e": "A downpour is a very heavy drizzle; a gale is a very strong breeze. The relationship is degree (mild to intense).",
  "x": {
   "steps": [
    "Make a sentence for the first pair: \"A downpour is a much stronger drizzle.\"",
    "The relationship is degree: same thing, higher intensity.",
    "Apply it: \"A ___ is a much stronger breeze.\"",
    "Only gale (a very strong wind) fits the sentence."
   ],
   "wrong": {
    "Rain": "Rain is about weather too, but a breeze is not a weak form of rain.",
    "Calm": "Calm is the opposite of wind; the pair needs a stronger degree, not an opposite.",
    "Sail": "A sail uses wind (a function link), not a stronger degree of it."
   },
   "tip": "Say the first pair as a sentence, then plug each option into the same sentence."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Word analogy",
  "q": "Which pair shows the same relationship as CARPENTER : HAMMER?",
  "o": [
   "Nail : Wood",
   "Surgeon : Scalpel",
   "Teacher : Student",
   "Tailor : Barong"
  ],
  "a": 1,
  "e": "A carpenter works with a hammer, and a surgeon works with a scalpel. The relationship is worker–tool.",
  "x": {
   "steps": [
    "Sentence: \"A carpenter uses a hammer as a tool of his trade.\"",
    "Relationship: worker : tool.",
    "Test each option with \"A ___ uses a ___ as a tool.\"",
    "Only \"A surgeon uses a scalpel as a tool\" makes sense."
   ],
   "wrong": {
    "Nail : Wood": "Both relate to carpentry, but neither word is a worker; a nail is driven into wood.",
    "Teacher : Student": "A student is the person a teacher serves, not the tool the teacher uses.",
    "Tailor : Barong": "A barong is what a tailor makes (worker–product), not the tool he works with."
   },
   "tip": "Watch for worker–product traps when the relationship is worker–tool."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Word analogy",
  "q": "BAKER : BREAD :: POTTER : ?",
  "o": [
   "Clay",
   "Wheel",
   "Vase",
   "Oven"
  ],
  "a": 2,
  "e": "A baker makes bread; a potter makes a vase. The relationship is worker–product.",
  "x": {
   "steps": [
    "Sentence: \"A baker makes bread.\"",
    "Relationship: worker : product.",
    "Apply: \"A potter makes a ___.\"",
    "A vase is a finished product of a potter; clay is only the raw material."
   ],
   "wrong": {
    "Clay": "Clay is the material a potter uses, not the product he makes.",
    "Wheel": "The wheel is the potter's tool, not his product.",
    "Oven": "An oven is the baker's tool, and it is not something a potter makes."
   },
   "tip": "Material, tool and product are different relationships — name which one the first pair uses."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Word analogy",
  "q": "Which pair shows the same relationship as BAMBOO : BAHAY KUBO?",
  "o": [
   "Roof : House",
   "Farmer : Palay",
   "Carabao : Plow",
   "Clay : Palayok"
  ],
  "a": 3,
  "e": "A bahay kubo is built from bamboo, and a palayok is made from clay. The relationship is material–product.",
  "x": {
   "steps": [
    "Sentence: \"A bahay kubo is made of bamboo.\"",
    "Relationship: material : product made from it.",
    "Test: \"A palayok is made of clay\" — true.",
    "Check the others: a house is not made of a roof, palay is not made of a farmer, a plow is not made of a carabao."
   ],
   "wrong": {
    "Roof : House": "A roof is a part of a house (part–whole), not the material it is made of.",
    "Farmer : Palay": "A farmer grows palay (worker–product), not a material–product pair.",
    "Carabao : Plow": "A carabao pulls a plow (function), but a plow is not made of carabao."
   },
   "tip": "Part–whole and material–product look alike; ask \"is it MADE OF it, or does it HAVE it?\""
  }
 },
 {
  "c": "analytical",
  "d": "easy",
  "t": "Word analogy",
  "q": "SCARCE : ABUNDANT :: FRUGAL : ?",
  "o": [
   "Thrifty",
   "Wealthy",
   "Careful",
   "Extravagant"
  ],
  "a": 3,
  "e": "Scarce is the opposite of abundant; frugal (spending little) is the opposite of extravagant (spending too much).",
  "x": {
   "steps": [
    "Scarce means very little; abundant means plenty — they are antonyms.",
    "Frugal means spending carefully and little.",
    "Its opposite is extravagant, meaning spending wastefully.",
    "Thrifty and careful are synonyms, so they fail."
   ],
   "wrong": {
    "Thrifty": "Thrifty means almost the same as frugal; the pair needs an opposite.",
    "Wealthy": "Wealthy is about money, but it is not the opposite of careful spending.",
    "Careful": "Careful is close in meaning to frugal, not its opposite."
   },
   "tip": "In antonym analogies, cross out the synonyms first — they are the most common trap."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Word analogy",
  "q": "Which pair shows the same relationship as ANONYMOUS : NAME?",
  "o": [
   "Famous : Reputation",
   "Signature : Name",
   "Impartial : Bias",
   "Author : Pseudonym"
  ],
  "a": 2,
  "e": "Anonymous means without a name; impartial means without bias. The relationship is \"lacks.\"",
  "x": {
   "steps": [
    "Sentence: \"Something anonymous has no name.\"",
    "Relationship: the first word describes a lack of the second.",
    "Test: \"Someone impartial has no bias\" — true.",
    "Famous HAS reputation, a signature SHOWS a name, an author USES a pseudonym — none show a lack."
   ],
   "wrong": {
    "Famous : Reputation": "Famous means having a big reputation — the reverse of lacking something.",
    "Signature : Name": "A signature shows a name; it shares the topic but expresses it instead of lacking it.",
    "Author : Pseudonym": "An author may use a pseudonym (user–thing), not lack one."
   },
   "tip": "For \"lack of\" analogies, test with \"___ is without ___.\""
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Word analogy",
  "q": "PETAL : FLOWER :: KEY : ?",
  "o": [
   "Keyboard",
   "Lock",
   "Door",
   "Locksmith"
  ],
  "a": 0,
  "e": "A petal is one part of a flower; a key is one part of a keyboard. The relationship is part–whole.",
  "x": {
   "steps": [
    "Sentence: \"A petal is one of the parts of a flower.\"",
    "Relationship: part : whole.",
    "Apply: \"A key is one of the parts of a ___.\"",
    "The keys of a keyboard are its parts; the lock-and-key meaning is a different relationship (function)."
   ],
   "wrong": {
    "Lock": "A key opens a lock (function), but it is not a part of the lock.",
    "Door": "A key is used on a door, but it is not a part of the door.",
    "Locksmith": "A locksmith makes keys (worker–product), not a whole the key belongs to."
   },
   "tip": "If a word has two meanings, pick the meaning that makes the same relationship as the first pair."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Word analogy",
  "q": "Which pair shows the same relationship as THERMOMETER : TEMPERATURE?",
  "o": [
   "Stethoscope : Doctor",
   "Barometer : Air pressure",
   "Fever : Infection",
   "Weighing scale : Palengke"
  ],
  "a": 1,
  "e": "A thermometer measures temperature, and a barometer measures air pressure. The relationship is instrument–what it measures.",
  "x": {
   "steps": [
    "Sentence: \"A thermometer is used to measure temperature.\"",
    "Relationship: measuring instrument : quantity measured.",
    "Test: \"A barometer is used to measure air pressure\" — true.",
    "The other pairs are tool–user, sign–cause and tool–place."
   ],
   "wrong": {
    "Stethoscope : Doctor": "This is tool–user; a stethoscope does not measure a doctor.",
    "Fever : Infection": "This shares the health topic but is sign–cause, not instrument–what it measures.",
    "Weighing scale : Palengke": "This is tool–place where it is used, not what it measures."
   },
   "tip": "A distractor from the same topic (health, fever) is usually a trap; match the relationship, not the subject."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Word analogy",
  "q": "Which pair shows the same relationship as ANNOYED : FURIOUS?",
  "o": [
   "Terrified : Uneasy",
   "Pleased : Elated",
   "Calm : Agitated",
   "Hungry : Thirsty"
  ],
  "a": 1,
  "e": "Furious is an intense form of annoyed; elated is an intense form of pleased. The order (mild to strong) must match.",
  "x": {
   "steps": [
    "Sentence: \"Furious is a much stronger form of annoyed.\"",
    "Relationship: mild : intense, in that order.",
    "Pleased : Elated — mild happiness to intense happiness. Fits.",
    "Terrified : Uneasy is also degree, but strong to mild — the order is reversed, so it fails."
   ],
   "wrong": {
    "Terrified : Uneasy": "This is a degree pair but in the reverse order (strong to mild).",
    "Calm : Agitated": "These are opposites, not a mild and strong form of the same feeling.",
    "Hungry : Thirsty": "These are two different needs, not two degrees of one feeling."
   },
   "tip": "In degree analogies, check the direction: mild-to-strong must stay mild-to-strong."
  }
 },
 {
  "c": "analytical",
  "d": "easy",
  "t": "Word analogy",
  "q": "KALESA : KUTSERO :: JEEPNEY : ?",
  "o": [
   "Passenger",
   "Barker",
   "Mechanic",
   "Driver"
  ],
  "a": 3,
  "e": "A kutsero drives a kalesa; a driver drives a jeepney. The relationship is vehicle–operator.",
  "x": {
   "steps": [
    "Sentence: \"A kalesa is driven by a kutsero.\"",
    "Relationship: vehicle : person who operates it.",
    "Apply: \"A jeepney is driven by a ___.\"",
    "Only the driver operates the jeepney."
   ],
   "wrong": {
    "Passenger": "A passenger rides the jeepney but does not operate it.",
    "Barker": "A barker calls passengers to the jeepney but does not drive it.",
    "Mechanic": "A mechanic repairs the jeepney; he is not the one who operates it on the road."
   },
   "tip": "Many people are linked to a vehicle — pick the one with the same role."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Word analogy",
  "q": "WEAVER : BANIG :: BLACKSMITH : ?",
  "o": [
   "Anvil",
   "Iron",
   "Bolo",
   "Forge"
  ],
  "a": 2,
  "e": "A weaver makes a banig (woven mat); a blacksmith makes a bolo. The relationship is worker–product.",
  "x": {
   "steps": [
    "Sentence: \"A weaver makes a banig.\"",
    "Relationship: worker : finished product.",
    "Apply: \"A blacksmith makes a ___.\"",
    "Sort the options: anvil = tool, iron = material, forge = workplace, bolo = product."
   ],
   "wrong": {
    "Anvil": "The anvil is the blacksmith's tool, not his product.",
    "Iron": "Iron is the blacksmith's raw material, not his finished product.",
    "Forge": "The forge is the blacksmith's workplace or furnace, not what he makes."
   },
   "tip": "Label each option as tool, material, place or product before choosing."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Word analogy",
  "q": "Which pair shows the same relationship as DROUGHT : RAIN?",
  "o": [
   "Famine : Food",
   "Flood : Water",
   "Typhoon : Wind",
   "Harvest : Palay"
  ],
  "a": 0,
  "e": "A drought is a long lack of rain; a famine is a severe lack of food. The relationship is \"lack of.\"",
  "x": {
   "steps": [
    "Sentence: \"A drought is a long period without rain.\"",
    "Relationship: condition : what is lacking.",
    "Test: \"A famine is a period without enough food\" — true.",
    "Flood is the excess of water, so it is the reverse relationship."
   ],
   "wrong": {
    "Flood : Water": "A flood is too much water — an excess, the reverse of a lack.",
    "Typhoon : Wind": "A typhoon is made up of strong wind; it does not mean a lack of wind.",
    "Harvest : Palay": "Palay is what is gathered in a harvest, not something missing."
   },
   "tip": "Shortage and excess are opposite relationships — do not confuse \"too little\" with \"too much.\""
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Symbolic logic/abstract reasoning",
  "q": "Statements:\nAll barangay tanods are volunteers.\nSome volunteers are college students.\n\nWhich conclusion necessarily follows?",
  "o": [
   "Some volunteers are barangay tanods.",
   "Some barangay tanods are college students.",
   "All volunteers are barangay tanods.",
   "No barangay tanod is a college student."
  ],
  "a": 0,
  "e": "Since every tanod is a volunteer, the tanods form part of the volunteer group, so some volunteers are tanods. Nothing certain links tanods to students.",
  "x": {
   "steps": [
    "Draw a big circle VOLUNTEERS with a smaller circle TANODS completely inside it.",
    "Draw a STUDENTS circle that overlaps VOLUNTEERS somewhere.",
    "The students may or may not touch the tanod circle — both drawings fit the statements.",
    "What is true in every drawing: the tanod circle sits inside the volunteer circle, so some volunteers are tanods."
   ],
   "wrong": {
    "Some barangay tanods are college students.": "The students may be volunteers outside the tanod circle; nothing forces an overlap.",
    "All volunteers are barangay tanods.": "This reverses the first statement (converse); volunteers can be more than tanods.",
    "No barangay tanod is a college student.": "The statements also allow some tanods to be students, so \"no\" cannot be certain."
   },
   "tip": "A conclusion \"must follow\" only if it is true in every Venn drawing that fits the statements."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Symbolic logic/abstract reasoning",
  "q": "Statements:\nNo clerk is an auditor.\nAll auditors are CPAs.\n\nWhich conclusion necessarily follows?",
  "o": [
   "No clerk is a CPA.",
   "Some clerks are CPAs.",
   "Some CPAs are not clerks.",
   "All CPAs are auditors."
  ],
  "a": 2,
  "e": "The auditors are CPAs who are not clerks, so at least some CPAs are not clerks.",
  "x": {
   "steps": [
    "Draw AUDITORS inside a larger CPAs circle.",
    "Draw CLERKS completely apart from AUDITORS (no clerk is an auditor).",
    "The clerk circle may still overlap the part of CPAs outside the auditors — or not.",
    "In every drawing, the auditors are CPAs outside the clerk circle, so \"Some CPAs are not clerks\" is always true."
   ],
   "wrong": {
    "No clerk is a CPA.": "A clerk could be a CPA who is not an auditor; the statements do not rule this out.",
    "Some clerks are CPAs.": "This is possible but not certain — the clerks may have no CPAs at all.",
    "All CPAs are auditors.": "This reverses \"All auditors are CPAs\"; CPAs can be more than auditors."
   },
   "tip": "\"No A is B\" + \"All B are C\" always gives \"Some C are not A.\""
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Symbolic logic/abstract reasoning",
  "q": "Given: \"If the municipal office is open, the security guard is on duty.\"\n\nWhich statement must also be true?",
  "o": [
   "If the security guard is on duty, the office is open.",
   "If the office is not open, the security guard is not on duty.",
   "The security guard is on duty only when the office is closed.",
   "If the security guard is not on duty, the office is not open."
  ],
  "a": 3,
  "e": "The contrapositive (if not Q, then not P) is always equivalent to \"if P, then Q.\"",
  "x": {
   "steps": [
    "Write the rule: P = office is open, Q = guard is on duty. If P then Q.",
    "Contrapositive: if not Q then not P — always true.",
    "Converse (if Q then P) and inverse (if not P then not Q) are NOT guaranteed.",
    "The correct choice is the contrapositive: no guard means the office is not open."
   ],
   "wrong": {
    "If the security guard is on duty, the office is open.": "This is the converse; the guard may also be on duty when the office is closed.",
    "If the office is not open, the security guard is not on duty.": "This is the inverse; the rule says nothing about closed days.",
    "The security guard is on duty only when the office is closed.": "This contradicts the rule, which puts the guard on duty when the office is open."
   },
   "tip": "Flip AND negate (contrapositive) = still true. Flip only or negate only = not guaranteed."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Symbolic logic/abstract reasoning",
  "q": "Given:\nIf the budget is approved, the farm-to-market road will be repaired.\nIf the road is repaired, travel time to the town market will drop.\nTravel time to the town market did NOT drop.\n\nWhich conclusion follows?",
  "o": [
   "The road was repaired.",
   "The budget was not approved.",
   "The budget was approved but the road was not repaired.",
   "Nothing can be concluded about the budget."
  ],
  "a": 1,
  "e": "Chain: approved → repaired → time drops. Since time did not drop, the road was not repaired, so the budget was not approved.",
  "x": {
   "steps": [
    "Link the rules: Approved → Repaired → Travel time drops.",
    "We know: travel time did NOT drop.",
    "Contrapositive of the second rule: no drop → road not repaired.",
    "Contrapositive of the first rule: road not repaired → budget not approved."
   ],
   "wrong": {
    "The road was repaired.": "If the road had been repaired, travel time would have dropped — but it did not.",
    "The budget was approved but the road was not repaired.": "An approved budget guarantees the repair, so this contradicts the first statement.",
    "Nothing can be concluded about the budget.": "Working backward through the chain does give a certain conclusion about the budget."
   },
   "tip": "When the last result in a chain fails, every earlier \"if\" in the chain fails too."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Symbolic logic/abstract reasoning",
  "q": "Five employees took a qualifying test.\n• Ana scored higher than Ben.\n• Carlo scored lower than Dina but higher than Ana.\n• Ella had the lowest score.\n\nWho had the second-highest score?",
  "o": [
   "Dina",
   "Ana",
   "Ben",
   "Carlo"
  ],
  "a": 3,
  "e": "The order from highest is Dina, Carlo, Ana, Ben, Ella, so Carlo is second.",
  "x": {
   "steps": [
    "From the clues: Ana > Ben.",
    "Dina > Carlo > Ana.",
    "Combine: Dina > Carlo > Ana > Ben.",
    "Ella is lowest: Dina > Carlo > Ana > Ben > Ella. Second place = Carlo."
   ],
   "wrong": {
    "Dina": "Dina scored higher than Carlo, who beat everyone else — so Dina is first, not second.",
    "Ana": "Ana scored below both Dina and Carlo, so she is third.",
    "Ben": "Ben is below Ana and above only Ella, so he is fourth."
   },
   "tip": "Write the names in a line and insert each clue one at a time."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Symbolic logic/abstract reasoning",
  "q": "Five offices occupy a five-storey municipal building, one office per floor (Floor 1 is the lowest).\n• The Mayor's Office is on the top floor.\n• The Budget Office is on Floor 1.\n• The Treasurer's Office is directly above the Assessor's Office.\n• The HR Office is not next to the Budget Office.\n\nOn which floor is the Assessor's Office?",
  "o": [
   "Floor 2",
   "Floor 3",
   "Floor 4",
   "Floor 1"
  ],
  "a": 0,
  "e": "Only Assessor on 2, Treasurer on 3, HR on 4 satisfies every clue.",
  "x": {
   "steps": [
    "Fix the sure ones: Mayor = 5, Budget = 1. Floors 2, 3, 4 remain for Treasurer, Assessor and HR.",
    "HR cannot be next to Budget (Floor 1), so HR is on 3 or 4.",
    "Treasurer must be directly above Assessor: either (Assessor 2, Treasurer 3) or (Assessor 3, Treasurer 4).",
    "Assessor 3, Treasurer 4 leaves Floor 2 for HR — not allowed. So Assessor = 2, Treasurer = 3, HR = 4."
   ],
   "wrong": {
    "Floor 3": "If the Assessor were on Floor 3, the Treasurer would take Floor 4 and HR would be forced onto Floor 2, next to Budget.",
    "Floor 4": "If the Assessor were on Floor 4, the Treasurer would need Floor 5, which belongs to the Mayor.",
    "Floor 1": "Floor 1 is already taken by the Budget Office."
   },
   "tip": "Place the fixed items first, then try each remaining case and cross out the ones that break a rule."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Symbolic logic/abstract reasoning",
  "q": "If ★ means ×, ◆ means −, ▲ means +, and ● means ÷, what is the value of:\n18 ● 3 ▲ 4 ★ 5 ◆ 6",
  "o": [
   "14",
   "20",
   "26",
   "44"
  ],
  "a": 1,
  "e": "Replace the symbols: 18 ÷ 3 + 4 × 5 − 6 = 6 + 20 − 6 = 20.",
  "x": {
   "steps": [
    "Replace symbols: 18 ÷ 3 + 4 × 5 − 6.",
    "Do ÷ and × first: 18 ÷ 3 = 6 and 4 × 5 = 20.",
    "Now: 6 + 20 − 6.",
    "Answer: 20."
   ],
   "wrong": {
    "14": "This drops the first term 18 ÷ 3 and computes only 4 × 5 − 6.",
    "26": "This drops the final \"− 6\" (◆ 6).",
    "44": "This works strictly left to right: (18 ÷ 3 + 4) × 5 − 6. Multiplication must be done before addition."
   },
   "tip": "Rewrite the whole expression with real signs first, then follow MDAS."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Symbolic logic/abstract reasoning",
  "q": "If + means ÷, − means ×, × means +, and ÷ means −, what is the value of:\n36 + 4 − 3 × 10 ÷ 7",
  "o": [
   "6",
   "37",
   "30",
   "44"
  ],
  "a": 2,
  "e": "Translate: 36 ÷ 4 × 3 + 10 − 7 = 9 × 3 + 10 − 7 = 27 + 10 − 7 = 30.",
  "x": {
   "steps": [
    "Translate each sign: + → ÷, − → ×, × → +, ÷ → −.",
    "New expression: 36 ÷ 4 × 3 + 10 − 7.",
    "Left to right for ÷ and ×: 36 ÷ 4 = 9, then 9 × 3 = 27.",
    "Then 27 + 10 − 7 = 30."
   ],
   "wrong": {
    "6": "This multiplies 4 × 3 first; ÷ and × have equal rank and are done left to right: 36 ÷ 4 = 9, then 9 × 3.",
    "37": "This forgets the last operation (− 7).",
    "44": "This treats the final ÷ as + instead of − (the rule says ÷ means −)."
   },
   "tip": "Division and multiplication share the same rank — go left to right between them."
  }
 },
 {
  "c": "analytical",
  "d": "easy",
  "t": "Symbolic logic/abstract reasoning",
  "q": "In a certain code, CIVIL is written as DJWJM. How is SERVICE written in that code?",
  "o": [
   "TFSWJDF",
   "RDQUHBD",
   "TFSXJDF",
   "TFSWJCF"
  ],
  "a": 0,
  "e": "Each letter of CIVIL moves one place forward (C→D, I→J, V→W, L→M), so SERVICE becomes TFSWJDF.",
  "x": {
   "steps": [
    "Compare CIVIL with DJWJM: C→D, I→J, V→W, I→J, L→M.",
    "Rule: each letter moves +1 in the alphabet.",
    "Apply to SERVICE: S→T, E→F, R→S, V→W, I→J, C→D, E→F.",
    "Result: TFSWJDF."
   ],
   "wrong": {
    "RDQUHBD": "This moves each letter one step BACK; the code moves each letter one step forward.",
    "TFSXJDF": "The V should become W, not X — every letter moves exactly one step.",
    "TFSWJCF": "The C should become D; here it was left unchanged."
   },
   "tip": "Find the rule from two or three letters, then check it on every letter of the answer."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Symbolic logic/abstract reasoning",
  "q": "In a certain code, BANK is written as LOBC. How is CASH written in that code?",
  "o": [
   "DBTI",
   "ITBD",
   "GRZB",
   "ITBC"
  ],
  "a": 1,
  "e": "The code reverses the word (BANK → KNAB) and then moves each letter one step forward (→ LOBC). CASH → HSAC → ITBD.",
  "x": {
   "steps": [
    "Notice LOBC looks like BANK backward: reverse BANK → KNAB.",
    "Compare KNAB with LOBC: K→L, N→O, A→B, B→C, so each letter moves +1.",
    "Apply to CASH: reverse → HSAC.",
    "Shift +1: H→I, S→T, A→B, C→D. Answer: ITBD."
   ],
   "wrong": {
    "DBTI": "This shifts each letter +1 but forgets to reverse the order of the letters.",
    "GRZB": "This reverses the word but shifts each letter one step back instead of forward.",
    "ITBC": "The last letter C should also shift to D."
   },
   "tip": "If the shift does not fit letter by letter, try reversing the word first."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Symbolic logic/abstract reasoning",
  "q": "If 2 ⊕ 3 = 13 and 4 ⊕ 1 = 17, what is 5 ⊕ 2?",
  "o": [
   "10",
   "21",
   "29",
   "49"
  ],
  "a": 2,
  "e": "The rule is a ⊕ b = a² + b²: 4 + 9 = 13 and 16 + 1 = 17, so 5 ⊕ 2 = 25 + 4 = 29.",
  "x": {
   "steps": [
    "Test a rule on 2 ⊕ 3 = 13: 2² + 3² = 4 + 9 = 13. ✓",
    "Check it on 4 ⊕ 1 = 17: 4² + 1² = 16 + 1 = 17. ✓",
    "Apply: 5 ⊕ 2 = 5² + 2² = 25 + 4.",
    "Answer: 29."
   ],
   "wrong": {
    "10": "This simply multiplies 5 × 2; that rule gives 6 and 4 for the examples, not 13 and 17.",
    "21": "This subtracts the squares (25 − 4); the examples ADD the squares.",
    "49": "This squares the sum (5 + 2)²; that rule would make 2 ⊕ 3 = 25, not 13."
   },
   "tip": "A rule is only correct if it works for EVERY given example."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Symbolic logic/abstract reasoning",
  "q": "Rule posted at the barangay hall: \"Only registered voters of the barangay may vote in the barangay assembly.\"\n\nWhich statement must be true?",
  "o": [
   "Every registered voter of the barangay votes in the assembly.",
   "A resident who did not vote in the assembly is not a registered voter.",
   "An unregistered resident may vote if endorsed by the barangay captain.",
   "A resident who is not a registered voter of the barangay may not vote in the assembly."
  ],
  "a": 3,
  "e": "\"Only A may do B\" means \"if someone does B, he is A.\" Its contrapositive: if not A, then he may not do B.",
  "x": {
   "steps": [
    "Rewrite \"Only registered voters may vote\" as: If a person votes → the person is a registered voter.",
    "Contrapositive: If NOT a registered voter → may NOT vote. Always true.",
    "Converse (registered → votes) is not guaranteed.",
    "Inverse (did not vote → not registered) is not guaranteed either."
   ],
   "wrong": {
    "Every registered voter of the barangay votes in the assembly.": "The rule says who MAY vote, not who WILL vote; being registered does not guarantee voting.",
    "A resident who did not vote in the assembly is not a registered voter.": "Registered voters may choose not to vote, so not voting says nothing about registration.",
    "An unregistered resident may vote if endorsed by the barangay captain.": "The rule allows no exceptions; only registered voters may vote."
   },
   "tip": "\"Only A are B\" = \"All B are A.\" The word after \"only\" goes AFTER the arrow."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Identifying assumptions and drawing conclusions",
  "q": "The municipal health office plans to lower malaria cases in upland Barangay Malinis by giving free mosquito nets to every household.\n\nThe plan assumes that:",
  "o": [
   "Malaria is the most serious disease in the province.",
   "The nets will be bought from a local supplier.",
   "Other barangays have no malaria cases.",
   "Residents will actually use the mosquito nets."
  ],
  "a": 3,
  "e": "Nets can only lower cases if people use them; if no one uses them, the plan cannot work.",
  "x": {
   "steps": [
    "Identify the plan: give nets → fewer malaria cases.",
    "Ask: what must be true for the nets to lower cases?",
    "Negation test: \"Residents will NOT use the nets\" — the plan falls apart, so this is a needed assumption.",
    "Negate the others: the plan still makes sense, so they are not needed."
   ],
   "wrong": {
    "Malaria is the most serious disease in the province.": "The plan can make sense even if other diseases are more serious.",
    "The nets will be bought from a local supplier.": "Where the nets come from does not affect whether the plan works.",
    "Other barangays have no malaria cases.": "Malaria elsewhere is irrelevant to whether the plan helps Barangay Malinis."
   },
   "tip": "Negation test: if denying a statement destroys the argument, it is a necessary assumption."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Identifying assumptions and drawing conclusions",
  "q": "After the city installed 40 CCTV cameras in the downtown area, reported thefts there fell by 30% within a year. The city council concludes that the cameras reduced theft.\n\nWhich statement, if true, most WEAKENS the conclusion?",
  "o": [
   "Each camera cost about ₱45,000 to install.",
   "Most downtown store owners support the cameras.",
   "During the same year, the police doubled the number of foot patrols downtown.",
   "Some of the cameras were placed near banks and pawnshops."
  ],
  "a": 2,
  "e": "More foot patrols are another possible cause of the drop, so the cameras may not be the reason.",
  "x": {
   "steps": [
    "Conclusion: cameras caused the 30% drop in thefts.",
    "To weaken a cause claim, offer another cause for the same effect.",
    "Doubling foot patrols during the same year could also explain the drop.",
    "The other options are about cost, opinion or placement — none gives an alternative cause."
   ],
   "wrong": {
    "Each camera cost about ₱45,000 to install.": "The cost says nothing about whether the cameras reduced theft.",
    "Most downtown store owners support the cameras.": "Support or opinion does not show what caused the drop in thefts.",
    "Some of the cameras were placed near banks and pawnshops.": "Camera locations do not offer another cause for the drop."
   },
   "tip": "Weaken a cause–effect claim by showing something else happened at the same time."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Identifying assumptions and drawing conclusions",
  "q": "After a government bureau launched an online appointment system, the average waiting time at its main office dropped from 3 hours to 1 hour. The director concludes that the online system caused the drop.\n\nWhich statement, if true, most STRENGTHENS the conclusion?",
  "o": [
   "The number of daily clients and the number of staff on duty stayed the same before and after the system started.",
   "Several other agencies also use online appointment systems.",
   "Clients prefer shorter waiting times.",
   "The system was built by the bureau's own programmers."
  ],
  "a": 0,
  "e": "If clients and staff stayed the same, two other possible causes are ruled out, making the system the more likely cause.",
  "x": {
   "steps": [
    "Conclusion: the online system caused shorter waits.",
    "Other possible causes: fewer clients, or more staff.",
    "The correct option rules out both alternatives.",
    "The remaining options are irrelevant to the cause."
   ],
   "wrong": {
    "Several other agencies also use online appointment systems.": "What other agencies use tells us nothing about the cause of this office's drop.",
    "Clients prefer shorter waiting times.": "This is obvious and does not connect the system to the drop.",
    "The system was built by the bureau's own programmers.": "Who built the system has no bearing on what caused the shorter waits."
   },
   "tip": "Strengthen a cause–effect claim by ruling out other possible causes."
  }
 },
 {
  "c": "analytical",
  "d": "easy",
  "t": "Identifying assumptions and drawing conclusions",
  "q": "Every scholar of the provincial scholarship program must keep a general weighted average (GWA) of at least 85. Lorna's GWA this semester is 83.\n\nWhich conclusion is justified?",
  "o": [
   "Lorna will be removed from the program next semester.",
   "Lorna does not meet the program's grade requirement.",
   "Lorna is a poor student.",
   "Lorna should apply for a different scholarship."
  ],
  "a": 1,
  "e": "The requirement is at least 85, and 83 is below 85, so Lorna does not meet it. Nothing else is stated.",
  "x": {
   "steps": [
    "Rule: scholars need GWA ≥ 85.",
    "Fact: Lorna's GWA = 83, which is less than 85.",
    "So Lorna does not meet the requirement.",
    "Anything about penalties, her ability or advice goes beyond the facts."
   ],
   "wrong": {
    "Lorna will be removed from the program next semester.": "We are not told Lorna is a scholar or what penalty applies.",
    "Lorna is a poor student.": "A GWA of 83 does not prove she is a poor student.",
    "Lorna should apply for a different scholarship.": "This is advice, not a conclusion that follows from the facts."
   },
   "tip": "A justified conclusion uses only the given facts — no added penalties, opinions or advice."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Identifying assumptions and drawing conclusions",
  "q": "Barangay San Roque has the most basketball courts in the town and also the lowest rate of juvenile offenses. Therefore, building more basketball courts in other barangays will lower their juvenile offense rates.\n\nWhich best describes the flaw in this reasoning?",
  "o": [
   "It relies on the opinion of a person who is not an expert.",
   "It treats an association between two things in one barangay as proof that one causes the other.",
   "It uses a key word in two different meanings.",
   "It attacks the character of people who disagree."
  ],
  "a": 1,
  "e": "Many courts and low offenses happen together in one barangay, but other factors may explain both; correlation is not causation.",
  "x": {
   "steps": [
    "Evidence: one barangay has many courts AND low offenses.",
    "Conclusion: courts cause fewer offenses.",
    "Problem: other factors (income, schools, parenting, policing) could explain the low rate.",
    "So the flaw is jumping from correlation to causation."
   ],
   "wrong": {
    "It relies on the opinion of a person who is not an expert.": "No expert opinion is cited in the argument.",
    "It uses a key word in two different meanings.": "The words \"courts\" and \"offenses\" keep the same meaning throughout.",
    "It attacks the character of people who disagree.": "The argument does not mention or attack any opponent."
   },
   "tip": "\"These two go together\" does not mean \"one causes the other.\""
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Identifying assumptions and drawing conclusions",
  "q": "In 2025, the city library extended its weekday closing time to 9:00 p.m. Library visits rose from 12,000 in 2024 to 15,000 in 2025. Of the visitors who came after 5:00 p.m., 40% were working adults.\n\nWhich conclusion is NOT justified by the information?",
  "o": [
   "Working adults made up most of the library's visitors in 2025.",
   "Library visits increased by 25% from 2024 to 2025.",
   "Some of the library's evening visitors were working adults.",
   "Most evening visitors were not working adults."
  ],
  "a": 0,
  "e": "The 40% figure covers only evening visitors, and even there working adults are a minority, so nothing shows they were most of all visitors.",
  "x": {
   "steps": [
    "Percent increase: (15,000 − 12,000) ÷ 12,000 = 3,000 ÷ 12,000 = 25% — justified.",
    "40% of evening visitors were working adults → \"some\" is justified.",
    "60% of evening visitors were not working adults → \"most were not\" is justified.",
    "Nothing is given about working adults among daytime visitors, and 40% is not \"most\" — so that conclusion is not justified."
   ],
   "wrong": {
    "Library visits increased by 25% from 2024 to 2025.": "This is justified: (15,000 − 12,000) ÷ 12,000 = 25%.",
    "Some of the library's evening visitors were working adults.": "This is justified: 40% of evening visitors were working adults.",
    "Most evening visitors were not working adults.": "This is justified: 100% − 40% = 60% were not working adults."
   },
   "tip": "Check what group a percentage describes before applying it to everyone."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Identifying assumptions and drawing conclusions",
  "q": "A field officer said: \"Since Barangay Bagong Silang submitted its annual budget on time, it will surely receive its full allocation this quarter.\"\n\nWhich assumption does the officer make?",
  "o": [
   "Other barangays submitted their budgets late.",
   "Barangay Bagong Silang needs more funds than last quarter.",
   "Barangay officials prefer quarterly releases.",
   "No other requirement can prevent the release of the full allocation once the budget is submitted on time."
  ],
  "a": 3,
  "e": "The word \"surely\" only works if on-time submission is enough, meaning no other requirement can block the release.",
  "x": {
   "steps": [
    "Premise: the budget was submitted on time.",
    "Conclusion: the full allocation will surely be released.",
    "Gap: what if another requirement (e.g., liquidation reports) is missing?",
    "The officer must assume nothing else can block the release."
   ],
   "wrong": {
    "Other barangays submitted their budgets late.": "What other barangays did does not affect this barangay's release.",
    "Barangay Bagong Silang needs more funds than last quarter.": "The barangay's need is not part of the officer's reasoning.",
    "Barangay officials prefer quarterly releases.": "Preferences have nothing to do with whether the funds will surely be released."
   },
   "tip": "Words like \"surely\" or \"always\" hide the assumption that nothing else is required."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Identifying assumptions and drawing conclusions",
  "q": "A survey of 500 government employees found that those who attended more training seminars tended to receive higher performance ratings.\n\nWhich statement is best supported by the survey?",
  "o": [
   "Attending more seminars causes employees to get higher ratings.",
   "Supervisors send their best performers to more seminars, so the seminars are useless.",
   "Seminar attendance and performance ratings are related, but the survey alone does not show that seminars caused the higher ratings.",
   "Training seminars have no effect on performance."
  ],
  "a": 2,
  "e": "The survey shows only that the two go together; the cause could run either way or come from a third factor.",
  "x": {
   "steps": [
    "Note the type of evidence: a survey showing a pattern (correlation).",
    "A pattern alone can be explained in several ways: seminars help, good performers get more seminars, or a third factor affects both.",
    "So \"they are related\" is supported, but \"one causes the other\" is not.",
    "Any option that claims a definite cause or a definite \"no effect\" goes too far."
   ],
   "wrong": {
    "Attending more seminars causes employees to get higher ratings.": "A survey that shows a pattern cannot by itself prove cause and effect.",
    "Supervisors send their best performers to more seminars, so the seminars are useless.": "This reverse explanation is possible, but the survey does not prove it, nor that seminars are useless.",
    "Training seminars have no effect on performance.": "The survey gives no basis for saying there is no effect."
   },
   "tip": "Correlation supports \"related,\" never \"caused\" or \"no effect.\""
  }
 },
 {
  "c": "analytical",
  "d": "easy",
  "t": "Identifying assumptions and drawing conclusions",
  "q": "All street vendor permits in the city expire on December 31 of the year they are issued. Mang Tonyo was issued a street vendor permit on March 5 of this year.\n\nWhich conclusion must be true?",
  "o": [
   "Mang Tonyo's permit expires on December 31 of this year.",
   "Mang Tonyo's permit is valid for 12 months.",
   "Mang Tonyo will renew his permit next year.",
   "Mang Tonyo sells cooked food."
  ],
  "a": 0,
  "e": "His permit was issued this year, and such permits expire on December 31 of the year issued.",
  "x": {
   "steps": [
    "Rule: permits expire on December 31 of the year issued.",
    "Fact: Mang Tonyo's permit was issued this year (March 5).",
    "Apply the rule: his permit expires December 31 this year.",
    "The other options add information that is not given."
   ],
   "wrong": {
    "Mang Tonyo's permit is valid for 12 months.": "From March 5 to December 31 is less than 12 months.",
    "Mang Tonyo will renew his permit next year.": "We do not know his plans; renewal is not stated.",
    "Mang Tonyo sells cooked food.": "Nothing is said about what he sells."
   },
   "tip": "Apply the general rule to the specific case — do not add facts."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Identifying assumptions and drawing conclusions",
  "q": "A town councilor argues: \"Our ban on plastic bags will reduce flooding in our town. Clogged drainage canals are the main cause of flooding here, and plastic bags are the most common item found in our clogged canals.\"\n\nWhich statement, if true, most WEAKENS the argument?",
  "o": [
   "Paper bags cost more than plastic bags.",
   "Some residents oppose the ban.",
   "Heavy rains in the town happen mostly from June to October.",
   "Most of the plastic bags found in the town's canals are washed in from a neighboring town that has no ban."
  ],
  "a": 3,
  "e": "If most bags come from a town without a ban, the local ban will barely reduce the bags clogging the canals, so flooding may not drop.",
  "x": {
   "steps": [
    "Chain: ban → fewer plastic bags in canals → fewer clogs → less flooding.",
    "To weaken, break a link in the chain.",
    "If the bags mostly come from outside the town, the ban will not reduce them much — the first link breaks.",
    "The other options are about cost, opinion and season, which do not break any link."
   ],
   "wrong": {
    "Paper bags cost more than plastic bags.": "Cost does not affect whether the ban reduces flooding.",
    "Some residents oppose the ban.": "Opposition says nothing about whether the ban will work.",
    "Heavy rains in the town happen mostly from June to October.": "The rainy season timing does not challenge the link between the ban and fewer clogged canals."
   },
   "tip": "Map the argument as a chain of links and look for the option that breaks one."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Identifying assumptions and drawing conclusions",
  "q": "To speed up the processing of business permits, the city government will hire five additional processing clerks.\n\nWhich assumption underlies this decision?",
  "o": [
   "Business owners are willing to pay higher permit fees.",
   "The five new clerks will be hired from other cities.",
   "A shortage of processing clerks is one reason for the slow processing.",
   "Business permits are processed faster in other cities."
  ],
  "a": 2,
  "e": "Hiring clerks only speeds things up if too few clerks is part of the problem.",
  "x": {
   "steps": [
    "Plan: more clerks → faster processing.",
    "For this to work, the slowness must be at least partly due to too few clerks.",
    "Negation test: \"The number of clerks has nothing to do with the delay\" — the plan makes no sense.",
    "The other options can be denied without hurting the plan."
   ],
   "wrong": {
    "Business owners are willing to pay higher permit fees.": "Fees are not part of the plan to speed up processing.",
    "The five new clerks will be hired from other cities.": "Where the clerks come from does not matter to the decision.",
    "Business permits are processed faster in other cities.": "Comparison with other cities is not needed for the decision to make sense."
   },
   "tip": "A solution assumes it targets an actual cause of the problem."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Identifying assumptions and drawing conclusions",
  "q": "In a certain agency, every employee who completed the data privacy training was given access to the records system. Some employees of the Records Section were not given access to the records system.\n\nWhich statement must be true?",
  "o": [
   "No employee of the Records Section completed the training.",
   "Some employees of the Records Section did not complete the data privacy training.",
   "Everyone given access completed the data privacy training.",
   "Some Records Section employees completed the training but were denied access."
  ],
  "a": 1,
  "e": "Completed training → access. Those without access therefore did not complete the training, and some Records employees had no access.",
  "x": {
   "steps": [
    "Rule: completed training → given access.",
    "Contrapositive: NOT given access → did NOT complete training.",
    "Some Records employees were not given access.",
    "So those employees did not complete the training: \"Some Records Section employees did not complete the training.\""
   ],
   "wrong": {
    "No employee of the Records Section completed the training.": "Only SOME were denied access; others in the section may have completed the training.",
    "Everyone given access completed the data privacy training.": "This reverses the rule; access might also be given for other reasons.",
    "Some Records Section employees completed the training but were denied access.": "This contradicts the rule that everyone who completed the training was given access."
   },
   "tip": "Use the contrapositive on the people who lack the result."
  }
 },
 {
  "c": "analytical",
  "d": "easy",
  "t": "Identifying assumptions and drawing conclusions",
  "q": "A notice at the passport office reads: \"Apply early to avoid the rush.\"\n\nWhich assumption is implicit in the notice?",
  "o": [
   "Early applicants will receive a discount.",
   "The office has more staff than it needs.",
   "Late applications will be rejected.",
   "A large number of applicants is expected later on."
  ],
  "a": 3,
  "e": "Telling people to \"avoid the rush\" only makes sense if a rush of applicants is expected later.",
  "x": {
   "steps": [
    "The notice advises applying early.",
    "The reason given: to avoid the rush.",
    "This takes for granted that a rush (many applicants) will come later.",
    "The other options add ideas the notice never implies."
   ],
   "wrong": {
    "Early applicants will receive a discount.": "The notice mentions no discount.",
    "The office has more staff than it needs.": "If anything, the notice suggests the office could be overwhelmed later.",
    "Late applications will be rejected.": "The notice warns of a rush, not of rejection."
   },
   "tip": "An implicit assumption is what the speaker takes for granted for the statement to make sense."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Identifying assumptions and drawing conclusions",
  "q": "Barangay Maligaya says its new weekly \"Clean-Up Saturday\" program caused dengue cases to fall from 48 last year to 20 this year.\n\nWhich information would be MOST useful in evaluating this claim?",
  "o": [
   "How many volunteers joined each clean-up.",
   "Whether residents enjoyed the clean-up activities.",
   "Whether dengue cases also fell in nearby barangays that had no clean-up program.",
   "How much the barangay spent on the program."
  ],
  "a": 2,
  "e": "Comparing with similar barangays without the program shows whether the drop came from the program or from a wider cause such as weather.",
  "x": {
   "steps": [
    "The claim is cause–effect: program → fewer dengue cases.",
    "Possible other causes: less rain, a province-wide drop, other health drives.",
    "Nearby barangays without the program act as a comparison group.",
    "If they also dropped by a similar amount, the program is probably not the cause; if not, the claim is stronger."
   ],
   "wrong": {
    "How many volunteers joined each clean-up.": "Turnout shows effort, not whether the program caused the drop.",
    "Whether residents enjoyed the clean-up activities.": "Residents' enjoyment does not show cause and effect.",
    "How much the barangay spent on the program.": "Cost does not help decide whether the program caused the drop."
   },
   "tip": "To test a cause, compare with a similar group that did not get the \"cause.\""
  }
 },
 {
  "c": "analytical",
  "d": "easy",
  "t": "Data interpretation",
  "q": "Quarterly real property tax collections of a municipality:\nQ1: ₱150,000\nQ2: ₱180,000\nQ3: ₱165,000\nQ4: ₱205,000\n\nWhat is the total collection for the year?",
  "o": [
   "₱700,000",
   "₱680,000",
   "₱720,000",
   "₱175,000"
  ],
  "a": 0,
  "e": "Add the four quarters: 150,000 + 180,000 + 165,000 + 205,000 = ₱700,000.",
  "x": {
   "steps": [
    "Q1 + Q2 = 150,000 + 180,000 = 330,000.",
    "Add Q3: 330,000 + 165,000 = 495,000.",
    "Add Q4: 495,000 + 205,000 = 700,000.",
    "Total = ₱700,000."
   ],
   "wrong": {
    "₱680,000": "This is ₱20,000 short — recheck the addition.",
    "₱720,000": "This is ₱20,000 too high — recheck the addition.",
    "₱175,000": "This is the quarterly average (₱700,000 ÷ 4), not the total."
   },
   "tip": "Add in pairs and keep a running total to avoid errors."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Data interpretation",
  "q": "Monthly collections of a city's public market:\nJanuary: ₱150,000\nFebruary: ₱162,000\nMarch: ₱205,000\n\nBy about what percent did collections increase from January to March?",
  "o": [
   "About 26.8%",
   "About 36.7%",
   "55%",
   "8%"
  ],
  "a": 1,
  "e": "Percent change = (205,000 − 150,000) ÷ 150,000 × 100 = 55,000 ÷ 150,000 × 100 ≈ 36.7%.",
  "x": {
   "steps": [
    "Difference: 205,000 − 150,000 = 55,000.",
    "Divide by the starting value (January): 55,000 ÷ 150,000 = 0.3667.",
    "Multiply by 100: about 36.7%.",
    "February is not needed for this question."
   ],
   "wrong": {
    "About 26.8%": "This divides the ₱55,000 increase by the March amount; percent change uses the earlier (January) amount as the base.",
    "55%": "This treats the ₱55,000 peso increase as if it were a percent.",
    "8%": "This uses the change from January to February only (₱12,000 ÷ ₱150,000), not January to March."
   },
   "tip": "Percent change = (new − old) ÷ OLD × 100."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Data interpretation",
  "q": "A barangay's annual budget is allocated as follows:\nHealth: ₱480,000\nEducation: ₱360,000\nInfrastructure: ₱900,000\nSocial services: ₱260,000\n\nWhat percent of the total budget goes to Health and Education combined?",
  "o": [
   "21%",
   "45%",
   "58%",
   "42%"
  ],
  "a": 3,
  "e": "Total = ₱2,000,000. Health + Education = ₱840,000. 840,000 ÷ 2,000,000 = 42%.",
  "x": {
   "steps": [
    "Total: 480,000 + 360,000 + 900,000 + 260,000 = 2,000,000.",
    "Health + Education: 480,000 + 360,000 = 840,000.",
    "Share: 840,000 ÷ 2,000,000 = 0.42.",
    "Answer: 42%."
   ],
   "wrong": {
    "21%": "This averages the two shares (24% and 18%) instead of adding them.",
    "45%": "This is the share of Infrastructure alone (₱900,000 ÷ ₱2,000,000).",
    "58%": "This is the share of everything EXCEPT Health and Education."
   },
   "tip": "Share of total = part ÷ whole; combine parts by adding, never averaging."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Data interpretation",
  "q": "Results of a fictional qualifying examination by region:\nRegion A: 2,400 examinees, 480 passed\nRegion B: 1,500 examinees, 375 passed\nRegion C: 3,000 examinees, 450 passed\nRegion D: 800 examinees, 240 passed\n\nWhich statement is supported by the data?",
  "o": [
   "Region C had the most passers.",
   "Region B's passing rate was double that of Region C.",
   "Region D had the highest passing rate even though it had the fewest examinees.",
   "The overall passing rate of the four regions was above 25%."
  ],
  "a": 2,
  "e": "Passing rates: A 20%, B 25%, C 15%, D 30%. Region D has the top rate with only 800 examinees.",
  "x": {
   "steps": [
    "Compute each rate: A = 480 ÷ 2,400 = 20%; B = 375 ÷ 1,500 = 25%; C = 450 ÷ 3,000 = 15%; D = 240 ÷ 800 = 30%.",
    "Region D: highest rate (30%) and fewest examinees (800) — supported.",
    "Most passers: A (480), not C.",
    "Overall rate: total passers 1,545 ÷ total examinees 7,700 ≈ 20.1%, not above 25%."
   ],
   "wrong": {
    "Region C had the most passers.": "Region A had 480 passers, more than Region C's 450.",
    "Region B's passing rate was double that of Region C.": "Region B had 25% and Region C had 15%; double of 15% is 30%.",
    "The overall passing rate of the four regions was above 25%.": "Overall: 1,545 ÷ 7,700 ≈ 20.1%, which is below 25%."
   },
   "tip": "A count (number passed) and a rate (percent passed) can rank regions differently."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Data interpretation",
  "q": "Number of patients served by a rural health unit in one week:\nMonday: 42\nTuesday: 38\nWednesday: 55\nThursday: 47\nFriday: 33\n\nWhat is the average number of patients served per day?",
  "o": [
   "42",
   "43",
   "44",
   "215"
  ],
  "a": 1,
  "e": "Average = (42 + 38 + 55 + 47 + 33) ÷ 5 = 215 ÷ 5 = 43.",
  "x": {
   "steps": [
    "Add all five days: 42 + 38 + 55 + 47 + 33 = 215.",
    "Count the days: 5.",
    "Divide: 215 ÷ 5 = 43.",
    "Average = 43 patients per day."
   ],
   "wrong": {
    "42": "This is the median (middle value when sorted: 33, 38, 42, 47, 55), not the average.",
    "44": "This averages only the highest and lowest days: (55 + 33) ÷ 2.",
    "215": "This is the total for the week; it still needs to be divided by 5 days."
   },
   "tip": "Average = sum of ALL values ÷ number of values."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Data interpretation",
  "q": "Road accidents reported in a municipality:\n2023: 250\n2024: 200\n2025: 230\n\nWhich statement is supported by the data?",
  "o": [
   "Accidents rose by 15% from 2024 to 2025.",
   "Accidents in 2025 were 8% higher than in 2023.",
   "The 2024 drop and the 2025 rise cancel out, so 2025 had as many accidents as 2023.",
   "Accidents fell by 25% from 2023 to 2024."
  ],
  "a": 0,
  "e": "From 2024 to 2025: (230 − 200) ÷ 200 = 30 ÷ 200 = 15% increase.",
  "x": {
   "steps": [
    "2023 → 2024: (200 − 250) ÷ 250 = −20%.",
    "2024 → 2025: (230 − 200) ÷ 200 = +15%.",
    "2023 → 2025: (230 − 250) ÷ 250 = −8%.",
    "Only \"rose by 15% from 2024 to 2025\" matches."
   ],
   "wrong": {
    "Accidents in 2025 were 8% higher than in 2023.": "From 250 to 230 is a DECREASE of 8%, not an increase.",
    "The 2024 drop and the 2025 rise cancel out, so 2025 had as many accidents as 2023.": "2025 had 230 accidents, still 20 fewer than 2023's 250.",
    "Accidents fell by 25% from 2023 to 2024.": "The drop is 50 ÷ 250 = 20%; 25% wrongly uses 200 as the base."
   },
   "tip": "A 20% fall followed by a 15% rise does not return you to the start — each change has a different base."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Data interpretation",
  "q": "Sacks of rice distributed by a municipal social welfare office:\nJanuary: 120\nFebruary: 150\nMarch: 90\nApril: 180\nMay: 160\n\nIn which month was the INCREASE from the previous month the largest?",
  "o": [
   "April",
   "March",
   "February",
   "May"
  ],
  "a": 0,
  "e": "Month-to-month changes: Feb +30, Mar −60, Apr +90, May −20. The largest increase is April (+90).",
  "x": {
   "steps": [
    "February: 150 − 120 = +30.",
    "March: 90 − 150 = −60 (a decrease).",
    "April: 180 − 90 = +90.",
    "May: 160 − 180 = −20. Largest increase: April."
   ],
   "wrong": {
    "March": "March had the largest change in size (60 sacks), but it was a decrease, not an increase.",
    "February": "February rose by only 30 sacks.",
    "May": "May fell by 20 sacks from April."
   },
   "tip": "Keep the sign: a big drop is not a big increase."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Data interpretation",
  "q": "A municipality's ₱12,000,000 disaster fund is divided as follows:\nRelief goods: 35%\nEvacuation centers: 25%\nRescue equipment: 20%\nTraining: 12%\nOthers: 8%\n\nHow much more is allotted to relief goods than to training?",
  "o": [
   "₱4,200,000",
   "₱2,760,000",
   "₱1,440,000",
   "₱276,000"
  ],
  "a": 1,
  "e": "Difference = (35% − 12%) of ₱12,000,000 = 23% × 12,000,000 = ₱2,760,000.",
  "x": {
   "steps": [
    "Difference in percent: 35% − 12% = 23%.",
    "Convert: 23% = 0.23.",
    "Multiply: 0.23 × 12,000,000 = 2,760,000.",
    "Check: relief ₱4,200,000 − training ₱1,440,000 = ₱2,760,000."
   ],
   "wrong": {
    "₱4,200,000": "This is the full amount for relief goods (35%), not the difference.",
    "₱1,440,000": "This is the amount for training (12%), not the difference.",
    "₱276,000": "The decimal point is misplaced; 23% of ₱12,000,000 is ₱2,760,000."
   },
   "tip": "When both parts share the same total, subtract the percents first, then convert once."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Data interpretation",
  "q": "Population and number of barangay health workers (BHWs):\nBarangay P: 4,800 residents, 12 BHWs\nBarangay Q: 6,300 residents, 14 BHWs\nBarangay R: 3,600 residents, 10 BHWs\nBarangay S: 5,000 residents, 10 BHWs\n\nWhich barangay has the FEWEST residents per health worker?",
  "o": [
   "Barangay Q",
   "Barangay P",
   "Barangay S",
   "Barangay R"
  ],
  "a": 3,
  "e": "Residents per BHW: P 400, Q 450, R 360, S 500. Barangay R has the fewest (360).",
  "x": {
   "steps": [
    "P: 4,800 ÷ 12 = 400.",
    "Q: 6,300 ÷ 14 = 450.",
    "R: 3,600 ÷ 10 = 360.",
    "S: 5,000 ÷ 10 = 500. Fewest residents per BHW: R."
   ],
   "wrong": {
    "Barangay Q": "Q has the most BHWs, but 6,300 ÷ 14 = 450 residents per BHW, more than R.",
    "Barangay P": "P has 4,800 ÷ 12 = 400 residents per BHW, more than R's 360.",
    "Barangay S": "S has 5,000 ÷ 10 = 500 residents per BHW — the most, not the fewest."
   },
   "tip": "For \"per\" questions, divide first — the biggest raw number does not mean the best ratio."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Data interpretation",
  "q": "Scores of three batches of trainees in a civil service orientation course:\nBatch 1: 20 trainees, average score 80\nBatch 2: 30 trainees, average score 85\nBatch 3: 50 trainees, average score 90\n\nWhat is the average score of all 100 trainees?",
  "o": [
   "85",
   "90",
   "86.5",
   "8,650"
  ],
  "a": 2,
  "e": "Weighted average = (20×80 + 30×85 + 50×90) ÷ 100 = (1,600 + 2,550 + 4,500) ÷ 100 = 86.5.",
  "x": {
   "steps": [
    "Batch totals: 20 × 80 = 1,600; 30 × 85 = 2,550; 50 × 90 = 4,500.",
    "Sum of all scores: 1,600 + 2,550 + 4,500 = 8,650.",
    "Number of trainees: 20 + 30 + 50 = 100.",
    "Average: 8,650 ÷ 100 = 86.5."
   ],
   "wrong": {
    "85": "This averages the three batch averages, ignoring that the batches have different sizes.",
    "90": "This is only Batch 3's average; the other batches pull the overall average down.",
    "8,650": "This is the total of all scores; it must still be divided by 100 trainees."
   },
   "tip": "When groups differ in size, multiply each average by its group size before averaging."
  }
 },
 {
  "c": "analytical",
  "d": "average",
  "t": "Data interpretation",
  "q": "A barangay's vaccination target for the first quarter is 1,200 residents. Residents vaccinated:\nJanuary: 250\nFebruary: 310\nMarch: 280\n\nWhat percent of the target was reached by the end of March?",
  "o": [
   "30%",
   "70%",
   "About 23.3%",
   "84%"
  ],
  "a": 1,
  "e": "Total vaccinated = 840. 840 ÷ 1,200 = 0.70 = 70% of the target.",
  "x": {
   "steps": [
    "Total vaccinated: 250 + 310 + 280 = 840.",
    "Divide by the target: 840 ÷ 1,200 = 0.7.",
    "Convert to percent: 0.7 × 100 = 70%.",
    "Remaining (30%) is what is still left to reach."
   ],
   "wrong": {
    "30%": "This is the percent of the target NOT yet reached.",
    "About 23.3%": "This uses only March (280 ÷ 1,200), not the total for the quarter.",
    "84%": "This divides 840 by 1,000 instead of the actual target of 1,200."
   },
   "tip": "Percent of target = total achieved ÷ target × 100."
  }
 },
 {
  "c": "analytical",
  "d": "difficult",
  "t": "Data interpretation",
  "q": "Locally sourced revenue of a city (in millions of pesos):\nReal property tax: 2024 = ₱8.0M; 2025 = ₱8.8M\nBusiness tax: 2024 = ₱5.0M; 2025 = ₱6.0M\nFees and charges: 2024 = ₱2.0M; 2025 = ₱1.8M\n\nWhich statement is NOT supported by the data?",
  "o": [
   "Business tax made up the same share of total revenue in both years.",
   "Real property tax rose by 10%.",
   "Business tax grew faster in percentage terms than real property tax.",
   "Fees and charges fell by 10%."
  ],
  "a": 0,
  "e": "Business tax was 5.0 ÷ 15.0 ≈ 33.3% of the total in 2024 but 6.0 ÷ 16.6 ≈ 36.1% in 2025, so its share was not the same.",
  "x": {
   "steps": [
    "Totals: 2024 = 8.0 + 5.0 + 2.0 = 15.0M; 2025 = 8.8 + 6.0 + 1.8 = 16.6M.",
    "Changes: RPT +10%, business tax +20%, fees −10% — those three statements are supported.",
    "Business tax share: 2024 = 5.0 ÷ 15.0 ≈ 33.3%; 2025 = 6.0 ÷ 16.6 ≈ 36.1%.",
    "The shares differ, so the \"same share\" statement is NOT supported."
   ],
   "wrong": {
    "Real property tax rose by 10%.": "Supported: (8.8 − 8.0) ÷ 8.0 = 10%.",
    "Business tax grew faster in percentage terms than real property tax.": "Supported: business tax grew 20% versus 10% for real property tax.",
    "Fees and charges fell by 10%.": "Supported: (1.8 − 2.0) ÷ 2.0 = −10%."
   },
   "tip": "For \"NOT supported\" questions, verify every option and pick the one that fails."
  }
 }
]
