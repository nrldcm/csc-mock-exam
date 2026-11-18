// New items for general, written to the official CSC scope. Append new items at the END only.
// Facts verified against the official texts (1987 Constitution, Republic Acts on lawphil.net, and the UDHR on un.org).
export const ITEMS = [
  {
    "c": "general",
    "d": "average",
    "t": "Philippine Constitution",
    "q": "Ben is a natural-born Filipino, a registered voter who can read and write, and has lived in the Philippines for the five years immediately before the election. He will be 34 years old on election day. Under the 1987 Constitution, which requirement for Senator does he fail?",
    "o": [
      "The age requirement, because a Senator must be at least 35 years old on the day of the election",
      "The residence requirement, because a Senator must have lived in the Philippines for at least ten years",
      "The citizenship requirement, because a Senator must be a Filipino by naturalization",
      "None, because the minimum age for Senator is 25 years"
    ],
    "a": 0,
    "e": "Article VI, Section 3 of the 1987 Constitution requires a Senator to be at least thirty-five years of age on the day of the election, so a 34-year-old cannot qualify.",
    "x": {
      "steps": [
        "Article VI, Section 3: a Senator must be natural-born, at least 35 years old on election day, able to read and write, a registered voter, and a resident of the Philippines for at least two years immediately before the election.",
        "Ben meets citizenship, literacy, voter registration and residence (five years is more than two).",
        "He is only 34 on election day, so he fails the age requirement."
      ],
      "wrong": {
        "The residence requirement, because a Senator must have lived in the Philippines for at least ten years": "Ten years of residence is the requirement for President (Article VII, Section 2). A Senator needs only two years, and Ben has five.",
        "The citizenship requirement, because a Senator must be a Filipino by naturalization": "The Constitution requires a Senator to be a natural-born citizen, which Ben already is.",
        "None, because the minimum age for Senator is 25 years": "25 is the minimum age for a Member of the House of Representatives (Article VI, Section 6), not for a Senator."
      },
      "tip": "Senate: \"35 years, 2 years\" (age 35, residence 2 years)."
    },
    "src": [
      {
        "label": "1987 Constitution, Article VI, Section 3",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "easy",
    "t": "Philippine Constitution",
    "q": "Which of the following correctly states the age and residence requirements for a district Representative in the House of Representatives?",
    "o": [
      "At least 35 years old on election day, and a resident of the Philippines for at least two years immediately before the election",
      "At least 25 years old on election day, and a resident of the district for at least one year immediately before the election",
      "At least 40 years old on election day, and a resident of the Philippines for at least ten years immediately before the election",
      "At least 18 years old, and a resident of the district for at least six months immediately before the election"
    ],
    "a": 1,
    "e": "Article VI, Section 6 requires a Member of the House to be at least twenty-five years old on election day and, except party-list representatives, a registered voter and resident of the district for at least one year immediately before the election.",
    "x": {
      "steps": [
        "Article VI, Section 6 lists the qualifications of a Member of the House: natural-born citizen, at least 25 years old on election day, able to read and write.",
        "Except for party-list representatives, he must be a registered voter in the district and a resident of it for not less than one year immediately preceding the election.",
        "So the correct pair is \"25 years old\" and \"one year in the district\"."
      ],
      "wrong": {
        "At least 35 years old on election day, and a resident of the Philippines for at least two years immediately before the election": "These are the requirements for Senator (Article VI, Section 3).",
        "At least 40 years old on election day, and a resident of the Philippines for at least ten years immediately before the election": "These are the requirements for President (Article VII, Section 2).",
        "At least 18 years old, and a resident of the district for at least six months immediately before the election": "Age 18 and six months of residence in the place of voting are requirements for voting (suffrage) under Article V, Section 1, not for running for the House."
      },
      "tip": "Count up the ladder: House 25, Senate 35, President 40."
    },
    "src": [
      {
        "label": "1987 Constitution, Article VI, Section 6",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "difficult",
    "t": "Philippine Constitution",
    "q": "A Vice-President becomes President after the death of the President and serves as President for five years of the remaining term. Under the 1987 Constitution, may this person later run for President?",
    "o": [
      "Yes, because only an elected President is barred from running again",
      "Yes, but only after waiting for one full presidential term to pass",
      "No, because a person who has succeeded as President and served for more than four years is not qualified for election to the same office at any time",
      "Yes, if the Supreme Court declares the succession a special case"
    ],
    "a": 2,
    "e": "Article VII, Section 4 states that no person who has succeeded as President and has served as such for more than four years shall be qualified for election to the same office at any time.",
    "x": {
      "steps": [
        "Article VII, Section 4: the President is elected for six years and is not eligible for any re-election.",
        "The same section adds that a person who succeeded as President and served for more than four years cannot be elected to the same office at any time.",
        "Five years is more than four, so this person can never run for President."
      ],
      "wrong": {
        "Yes, because only an elected President is barred from running again": "Article VII, Section 4 specifically covers a person who succeeded as President, not only one who was elected.",
        "Yes, but only after waiting for one full presidential term to pass": "The bar applies \"at any time\"; there is no waiting period that removes it.",
        "Yes, if the Supreme Court declares the succession a special case": "The Constitution gives no such power to the Supreme Court; the rule is written directly in Article VII, Section 4."
      },
      "tip": "Successor rule: \"more than 4 = no more\"."
    },
    "src": [
      {
        "label": "1987 Constitution, Article VII, Section 4",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Philippine Constitution",
    "q": "Under the 1987 Constitution, which of the following officials may be removed from office by impeachment?",
    "o": [
      "A Cabinet Secretary",
      "A Senator",
      "A provincial governor",
      "A Member of the Commission on Audit"
    ],
    "a": 3,
    "e": "Article XI, Section 2 lists the impeachable officers: the President, the Vice-President, the Members of the Supreme Court, the Members of the Constitutional Commissions, and the Ombudsman. The Commission on Audit is a Constitutional Commission (Article IX-A, Section 1).",
    "x": {
      "steps": [
        "Article XI, Section 2 names only five groups: the President, the Vice-President, the Members of the Supreme Court, the Members of the Constitutional Commissions, and the Ombudsman.",
        "Article IX-A, Section 1 says the Constitutional Commissions are the Civil Service Commission, the Commission on Elections and the Commission on Audit.",
        "So a Member of the Commission on Audit is impeachable; all other public officers may be removed as provided by law, but not by impeachment."
      ],
      "wrong": {
        "A Cabinet Secretary": "Cabinet Secretaries are not in the list of impeachable officers in Article XI, Section 2; they may be removed as provided by law, but not by impeachment.",
        "A Senator": "Senators are not impeachable officers under Article XI, Section 2. (Each House of Congress may discipline its own Members.)",
        "A provincial governor": "Local officials are not in the list in Article XI, Section 2, so they cannot be impeached."
      },
      "tip": "Impeachable list: \"P-V-S-C-O\" — President, Vice-President, Supreme Court, Constitutional Commissions, Ombudsman."
    },
    "src": [
      {
        "label": "1987 Constitution, Article XI, Section 2",
        "url": "https://lawphil.net/consti/cons1987.html"
      },
      {
        "label": "1987 Constitution, Article IX-A, Section 1",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Philippine Constitution",
    "q": "Which statement about impeachment under the 1987 Constitution is correct?",
    "o": [
      "The Senate initiates the case, and the Supreme Court tries and decides it",
      "The House of Representatives both initiates and decides the case by a simple majority vote",
      "The Ombudsman initiates the case, and the Sandiganbayan tries and decides it",
      "The House of Representatives has the exclusive power to initiate, the Senate tries and decides, and conviction needs two-thirds of all the Senators"
    ],
    "a": 3,
    "e": "Article XI, Section 3 gives the House the exclusive power to initiate all impeachment cases and the Senate the sole power to try and decide them; no person shall be convicted without the concurrence of two-thirds of all the Members of the Senate.",
    "x": {
      "steps": [
        "Article XI, Section 3: the House of Representatives has the exclusive power to initiate all cases of impeachment.",
        "The Senate has the sole power to try and decide; when the President is on trial, the Chief Justice presides but does not vote.",
        "Conviction requires two-thirds of all the Members of the Senate, and the judgment cannot go beyond removal from office and disqualification to hold office."
      ],
      "wrong": {
        "The Senate initiates the case, and the Supreme Court tries and decides it": "The roles are reversed and wrong: the House initiates and the Senate tries. The Chief Justice only presides (without voting) when the President is on trial.",
        "The House of Representatives both initiates and decides the case by a simple majority vote": "The House only initiates. The Senate has the sole power to try and decide.",
        "The Ombudsman initiates the case, and the Sandiganbayan tries and decides it": "The Ombudsman is itself an impeachable officer, and the Sandiganbayan is the anti-graft court (Article XI, Section 4); neither handles impeachment."
      },
      "tip": "\"House accuses, Senate judges\" — like a prosecutor and a court."
    },
    "src": [
      {
        "label": "1987 Constitution, Article XI, Section 3",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Philippine Constitution",
    "q": "During the campaign period, an employee of a city government spends her weekends going house to house distributing leaflets for a mayoral candidate. Under the 1987 Constitution, what is the status of her activity?",
    "o": [
      "It is allowed, because she does it only on weekends and outside office hours",
      "It is allowed, because the right to self-organization of government employees protects it",
      "It is prohibited, because no officer or employee in the civil service shall engage, directly or indirectly, in any electioneering or partisan political campaign",
      "It is allowed, as long as the candidate is her relative"
    ],
    "a": 2,
    "e": "Article IX-B, Section 2 of the Constitution provides that no officer or employee in the civil service shall engage, directly or indirectly, in any electioneering or partisan political campaign.",
    "x": {
      "steps": [
        "Article IX-B, Section 2: the civil service covers all branches, subdivisions, instrumentalities and agencies of the Government, including local governments.",
        "The same section states that no officer or employee in the civil service shall engage, directly or indirectly, in any electioneering or partisan political campaign.",
        "House-to-house campaigning for a candidate is partisan political activity, so it is prohibited even on weekends."
      ],
      "wrong": {
        "It is allowed, because she does it only on weekends and outside office hours": "Article IX-B, Section 2 makes no exception for weekends or off-duty hours.",
        "It is allowed, because the right to self-organization of government employees protects it": "The right to self-organization refers to forming unions and associations; it does not permit partisan campaigning.",
        "It is allowed, as long as the candidate is her relative": "The Constitution gives no exception for relatives."
      },
      "tip": "Civil servants serve all parties — so they campaign for none."
    },
    "src": [
      {
        "label": "1987 Constitution, Article IX-B, Section 2",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Philippine Constitution",
    "q": "Three months after the May elections, a newly elected mayor wants to appoint his running mate, who lost the vice-mayoral race, as city administrator. Under the 1987 Constitution, can he do this?",
    "o": [
      "No, because a candidate who lost in any election cannot be appointed to any government office within one year after that election",
      "Yes, because the ban covers only national offices, not local ones",
      "Yes, as long as the Commission on Appointments confirms the appointment",
      "Yes, because the ban lasts only six months after the election"
    ],
    "a": 0,
    "e": "Article IX-B, Section 6 states that no candidate who has lost in any election shall, within one year after such election, be appointed to any office in the Government or any government-owned or controlled corporation or their subsidiaries.",
    "x": {
      "steps": [
        "Article IX-B, Section 6 sets a one-year ban on appointing losing candidates.",
        "The ban covers any office in the Government, GOCCs and their subsidiaries.",
        "Only three months have passed since the election, so the losing candidate cannot yet be appointed."
      ],
      "wrong": {
        "Yes, because the ban covers only national offices, not local ones": "Article IX-B, Section 6 covers \"any office in the Government\", which includes local government offices.",
        "Yes, as long as the Commission on Appointments confirms the appointment": "The Commission on Appointments has no role here, and the one-year ban cannot be waived.",
        "Yes, because the ban lasts only six months after the election": "The ban lasts one year, not six months."
      },
      "tip": "\"Lose, then wait one year\" before any government appointment."
    },
    "src": [
      {
        "label": "1987 Constitution, Article IX-B, Section 6",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Philippine Constitution",
    "q": "A city councilor, while still serving his elected term, is offered an appointment as regional director of a national government agency. Under the 1987 Constitution, what is the rule?",
    "o": [
      "He may accept the appointment as long as he goes on leave as councilor",
      "He is not eligible for appointment or designation in any capacity to any public office during his tenure as an elective official",
      "He may accept if the position is in a government-owned or controlled corporation",
      "He may accept because the position is highly technical"
    ],
    "a": 1,
    "e": "Article IX-B, Section 7 of the Constitution states that no elective official shall be eligible for appointment or designation in any capacity to any public office or position during his tenure.",
    "x": {
      "steps": [
        "Article IX-B, Section 7, first sentence: no elective official shall be eligible for appointment or designation in any capacity to any public office or position during his tenure.",
        "The councilor is still serving his elected term, so he is still within his tenure.",
        "He therefore cannot be appointed regional director while he holds his elective office."
      ],
      "wrong": {
        "He may accept the appointment as long as he goes on leave as councilor": "Article IX-B, Section 7 does not allow this; going on leave does not end his tenure.",
        "He may accept if the position is in a government-owned or controlled corporation": "The ban covers \"any public office or position\" for elective officials; there is no GOCC exception for them.",
        "He may accept because the position is highly technical": "Being highly technical matters only for exemption from competitive examination (Article IX-B, Section 2); it does not lift the ban on elective officials."
      },
      "tip": "Elected? Then you are not \"appointable\" while your term runs."
    },
    "src": [
      {
        "label": "1987 Constitution, Article IX-B, Section 7",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "easy",
    "t": "Philippine Constitution",
    "q": "Under the 1987 Constitution, how is the Civil Service Commission composed?",
    "o": [
      "A Chairman and six Commissioners, appointed for a term of seven years without reappointment",
      "A Chairman and two Commissioners, appointed for a term of seven years without reappointment",
      "A Chairman and four Members, a majority of whom must be members of the Bar",
      "A Chairman and two Commissioners, appointed for a term of six years with one reappointment"
    ],
    "a": 1,
    "e": "Article IX-B, Section 1 provides that the Civil Service Commission is composed of a Chairman and two Commissioners appointed by the President with the consent of the Commission on Appointments for a term of seven years without reappointment.",
    "x": {
      "steps": [
        "Article IX-B, Section 1: the CSC has a Chairman and two Commissioners.",
        "They must be natural-born citizens, at least 35 years old at appointment, with proven capacity for public administration, and not candidates in the elections immediately before their appointment.",
        "They are appointed by the President with the consent of the Commission on Appointments for seven years without reappointment."
      ],
      "wrong": {
        "A Chairman and six Commissioners, appointed for a term of seven years without reappointment": "A Chairman and six Commissioners is the composition of the Commission on Elections (Article IX-C, Section 1).",
        "A Chairman and four Members, a majority of whom must be members of the Bar": "This is the composition of the Commission on Human Rights (Article XIII, Section 17).",
        "A Chairman and two Commissioners, appointed for a term of six years with one reappointment": "The term is seven years, and reappointment is not allowed."
      },
      "tip": "CSC = 1 + 2 = 3 members; 7-year term, no repeat."
    },
    "src": [
      {
        "label": "1987 Constitution, Article IX-B, Section 1",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Philippine Constitution",
    "q": "A suspect under police investigation says he wants to give up his right to remain silent and to have counsel. Under the 1987 Constitution, how may these rights be validly waived?",
    "o": [
      "By saying so aloud before the investigating officer",
      "In writing, signed in front of the chief of police",
      "By a video recording, even without counsel",
      "Only in writing and in the presence of counsel"
    ],
    "a": 3,
    "e": "Article III, Section 12 states that the rights of a person under investigation to remain silent and to have competent and independent counsel cannot be waived except in writing and in the presence of counsel.",
    "x": {
      "steps": [
        "Article III, Section 12 gives a person under investigation the right to be informed of the right to remain silent and to have competent and independent counsel, preferably of his own choice.",
        "If he cannot afford counsel, one must be provided.",
        "These rights cannot be waived except in writing and in the presence of counsel; a confession obtained in violation is inadmissible."
      ],
      "wrong": {
        "By saying so aloud before the investigating officer": "An oral waiver is not enough; Article III, Section 12 requires writing and the presence of counsel.",
        "In writing, signed in front of the chief of police": "Writing alone is not enough; counsel must be present. The police chief cannot take the place of counsel.",
        "By a video recording, even without counsel": "Without counsel present, the waiver is invalid no matter how it is recorded."
      },
      "tip": "Waiver needs \"W + C\": Writing plus Counsel."
    },
    "src": [
      {
        "label": "1987 Constitution, Article III, Section 12",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Philippine Constitution",
    "q": "A municipal mayor was elected for three consecutive terms. In the middle of her third term she resigned \"to rest,\" and she now wants to run again for mayor in the next election. Under the 1987 Constitution, may she run?",
    "o": [
      "Yes, because her resignation interrupted her third term",
      "Yes, because local officials have no term limit under the Constitution",
      "No, because voluntary renunciation of office is not considered an interruption of the continuity of her service",
      "Yes, if the Sangguniang Bayan passes a resolution allowing it"
    ],
    "a": 2,
    "e": "Article X, Section 8 sets the term of elective local officials (except barangay officials) at three years with no more than three consecutive terms, and states that voluntary renunciation of the office for any length of time is not an interruption of the continuity of service.",
    "x": {
      "steps": [
        "Article X, Section 8: elective local officials, except barangay officials, serve three-year terms and may not serve more than three consecutive terms.",
        "The same section says voluntary renunciation of the office for any length of time is not an interruption of the continuity of service.",
        "Her resignation was voluntary, so she is treated as having served three full consecutive terms and cannot run for the next term."
      ],
      "wrong": {
        "Yes, because her resignation interrupted her third term": "The Constitution says the opposite: voluntary renunciation for any length of time is not an interruption.",
        "Yes, because local officials have no term limit under the Constitution": "Article X, Section 8 limits elective local officials (except barangay officials, whose term is set by law) to three consecutive terms.",
        "Yes, if the Sangguniang Bayan passes a resolution allowing it": "A local council cannot override the constitutional term limit."
      },
      "tip": "Resigning is not \"resetting\" — voluntary renunciation does not break the count."
    },
    "src": [
      {
        "label": "1987 Constitution, Article X, Section 8",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Philippine Constitution",
    "q": "A city mayor wants to merge two small barangays into one to cut administrative costs. Under the 1987 Constitution, besides following the criteria of the Local Government Code, what else is required?",
    "o": [
      "Approval by a majority of the votes cast in a plebiscite in the political units directly affected",
      "An executive order issued by the President",
      "A resolution of the Sangguniang Panlungsod alone",
      "Approval of the Secretary of the Interior and Local Government"
    ],
    "a": 0,
    "e": "Article X, Section 10 provides that no province, city, municipality or barangay may be created, divided, merged, abolished, or its boundary substantially altered except in accordance with the Local Government Code criteria and subject to approval by a majority of the votes cast in a plebiscite in the political units directly affected.",
    "x": {
      "steps": [
        "Article X, Section 10 covers creating, dividing, merging, abolishing, or substantially altering the boundary of a local government unit.",
        "Two requirements: (1) follow the criteria in the Local Government Code; and (2) approval by a majority of votes cast in a plebiscite in the units directly affected.",
        "Merging two barangays falls under this rule, so a plebiscite is needed."
      ],
      "wrong": {
        "An executive order issued by the President": "The Constitution requires a plebiscite, not a presidential order.",
        "A resolution of the Sangguniang Panlungsod alone": "A council resolution alone is not enough; the people directly affected must approve in a plebiscite.",
        "Approval of the Secretary of the Interior and Local Government": "The Constitution gives the final say to the voters in a plebiscite, not to a department secretary."
      },
      "tip": "Changing the map of an LGU? Ask the people — plebiscite."
    },
    "src": [
      {
        "label": "1987 Constitution, Article X, Section 10",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "difficult",
    "t": "Philippine Constitution",
    "q": "A citizens' group wants to propose an amendment to the Constitution through people's initiative. Under the 1987 Constitution, what petition is required?",
    "o": [
      "A petition of at least 12% of all registered voters, with every legislative district represented by at least 3% of its registered voters",
      "A petition signed by a majority of all registered voters nationwide",
      "A vote of three-fourths of all the Members of Congress",
      "A petition of at least 12% of all registered voters, with no requirement per legislative district"
    ],
    "a": 0,
    "e": "Article XVII, Section 2 allows amendments to be directly proposed by the people through initiative upon a petition of at least twelve per centum of the total number of registered voters, of which every legislative district must be represented by at least three per centum of its registered voters.",
    "x": {
      "steps": [
        "Article XVII, Section 2: the people may directly propose amendments through initiative.",
        "The petition needs at least 12% of total registered voters, and each legislative district must be represented by at least 3% of its registered voters.",
        "It cannot be used more often than once every five years; the amendment becomes valid when ratified by a majority of votes cast in a plebiscite (Section 4)."
      ],
      "wrong": {
        "A petition signed by a majority of all registered voters nationwide": "The Constitution sets 12% nationwide, not a majority.",
        "A vote of three-fourths of all the Members of Congress": "That is how Congress itself proposes amendments (Article XVII, Section 1), not the people's initiative.",
        "A petition of at least 12% of all registered voters, with no requirement per legislative district": "The Constitution also requires that every legislative district be represented by at least 3% of its registered voters."
      },
      "tip": "People's initiative: \"12-3-5\" — 12% total, 3% per district, once every 5 years."
    },
    "src": [
      {
        "label": "1987 Constitution, Article XVII, Sections 2 and 4",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "easy",
    "t": "Philippine Constitution",
    "q": "Under the 1987 Constitution, what is the national language of the Philippines?",
    "o": [
      "Tagalog",
      "English",
      "Filipino",
      "Spanish and Arabic"
    ],
    "a": 2,
    "e": "Article XIV, Section 6 states that the national language of the Philippines is Filipino; Section 7 makes Filipino and, until otherwise provided by law, English the official languages.",
    "x": {
      "steps": [
        "Article XIV, Section 6: \"The national language of the Philippines is Filipino.\"",
        "Section 7: the official languages for communication and instruction are Filipino and, until otherwise provided by law, English; regional languages are auxiliary official languages in the regions.",
        "So the national language is Filipino only."
      ],
      "wrong": {
        "Tagalog": "The Constitution names Filipino, which is to be developed and enriched on the basis of existing Philippine and other languages.",
        "English": "English is an official language for communication and instruction \"until otherwise provided by law\" (Article XIV, Section 7), but it is not the national language.",
        "Spanish and Arabic": "Spanish and Arabic are only to be promoted on a voluntary and optional basis (Article XIV, Section 7)."
      },
      "tip": "National = one (Filipino); Official = two (Filipino + English)."
    },
    "src": [
      {
        "label": "1987 Constitution, Article XIV, Sections 6 and 7",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "difficult",
    "t": "Philippine Constitution",
    "q": "Because of an armed rebellion, the President places a province under martial law. Which statement is correct under the 1987 Constitution?",
    "o": [
      "The proclamation may last up to one year, and no report to Congress is needed",
      "Congress may revoke it only by a two-thirds vote of each House voting separately",
      "The President may proclaim it for any kind of lawless violence",
      "The proclamation may last no more than 60 days, and the President must report to Congress within 48 hours"
    ],
    "a": 3,
    "e": "Article VII, Section 18 allows the President, in case of invasion or rebellion when public safety requires it, to place the Philippines or any part under martial law for a period not exceeding sixty days, and requires a report to Congress within forty-eight hours.",
    "x": {
      "steps": [
        "Article VII, Section 18: martial law may be proclaimed only in case of invasion or rebellion, when public safety requires it.",
        "It may last for a period not exceeding sixty days, and the President must report in person or in writing to Congress within forty-eight hours.",
        "Congress, voting jointly by a majority of all its Members, may revoke it, and the President cannot set aside the revocation."
      ],
      "wrong": {
        "The proclamation may last up to one year, and no report to Congress is needed": "The limit is sixty days, and a report to Congress within forty-eight hours is required.",
        "Congress may revoke it only by a two-thirds vote of each House voting separately": "Congress revokes it voting jointly, by a vote of at least a majority of all its Members.",
        "The President may proclaim it for any kind of lawless violence": "Martial law may be proclaimed only in case of invasion or rebellion when public safety requires it; for lawless violence the President may only call out the armed forces."
      },
      "tip": "Martial law: \"60 days, 48 hours\" — and only for invasion or rebellion."
    },
    "src": [
      {
        "label": "1987 Constitution, Article VII, Section 18",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "easy",
    "t": "Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
    "q": "A citizen mails a letter to a municipal office asking about the requirements for a business permit. Under R.A. 6713, within what period must the office reply?",
    "o": [
      "Within 30 working days from receipt",
      "Within 15 working days from receipt, and the reply must state the action taken",
      "Within 45 working days from receipt",
      "Within 10 working days from receipt"
    ],
    "a": 1,
    "e": "Section 5(a) of R.A. 6713 requires all public officials and employees to respond to letters and other communications from the public within fifteen (15) working days from receipt, and the reply must contain the action taken.",
    "x": {
      "steps": [
        "Section 5(a), \"Act promptly on letters and requests\": respond within fifteen (15) working days from receipt.",
        "The reply must contain the action taken on the request.",
        "So the municipal office must answer the citizen's letter within 15 working days."
      ],
      "wrong": {
        "Within 30 working days from receipt": "Thirty days appears in R.A. 6713 for other duties, such as filing the SALN after assuming office (Section 8), not for replying to letters.",
        "Within 45 working days from receipt": "Forty-five working days is the period for heads of offices to submit annual performance reports (Section 5(b)).",
        "Within 10 working days from receipt": "Ten working days is when filed statements become available for copying (Section 8(C)), not the period to reply to letters."
      },
      "tip": "Letters: \"15 working days\" — the same as half a month of work."
    },
    "src": [
      {
        "label": "R.A. 6713, Section 5(a)",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
    "q": "While his building permit application is pending, an applicant gives the city engineer an expensive bottle of whisky \"as advance thanks,\" saying it is a Christmas gift. What should the engineer do under R.A. 6713?",
    "o": [
      "Accept it, because gifts given during the Christmas season are allowed",
      "Accept it, as long as he lists it in his SALN",
      "Accept it, because the applicant offered it voluntarily and he did not ask for it",
      "Refuse it, because officials may not accept any gift in connection with a transaction that may be affected by the functions of their office"
    ],
    "a": 3,
    "e": "Section 7(d) of R.A. 6713 prohibits public officials and employees from soliciting or accepting, directly or indirectly, any gift, gratuity, favor, entertainment, loan or anything of monetary value in connection with any transaction which may be affected by the functions of their office.",
    "x": {
      "steps": [
        "Section 7(d) bans soliciting or accepting gifts from any person in the course of official duties or in connection with any transaction that may be affected by the functions of the office.",
        "The building permit is pending before the engineer's office, and the whisky is expensive and given \"as advance thanks.\"",
        "Section 3(d) adds that the Christmas season is no excuse when the gift is not of nominal value or is given in anticipation of a favor. He must refuse it."
      ],
      "wrong": {
        "Accept it, because gifts given during the Christmas season are allowed": "Section 3(d) says \"receiving any gift\" includes gifts given even on the occasion of a national festivity like Christmas, if not of nominal value or if given in exchange for a favor.",
        "Accept it, as long as he lists it in his SALN": "Declaring the gift does not make it lawful; Section 7(d) prohibits the acceptance itself.",
        "Accept it, because the applicant offered it voluntarily and he did not ask for it": "Section 7(d) prohibits both soliciting and accepting gifts; accepting an unsolicited gift is still prohibited here."
      },
      "tip": "Pending transaction + gift = red flag, even at Christmas."
    },
    "src": [
      {
        "label": "R.A. 6713, Section 7(d)",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      },
      {
        "label": "R.A. 6713, Section 3(d)",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "difficult",
    "t": "Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
    "q": "Which of the following is NOT considered a \"gift\" under the definition in R.A. 6713?",
    "o": [
      "An unsolicited item of nominal or insignificant value that is not given in anticipation of, or in exchange for, a favor",
      "The \"sale\" of a car to an official at a token price that hides a gift",
      "An expensive item given by a non-relative to an official during his family celebration",
      "A free vacation package given by a contractor with a pending bid in the official's office"
    ],
    "a": 0,
    "e": "Section 3(c) of R.A. 6713 defines a gift as a thing or right disposed of gratuitously, including a simulated sale, but excludes an unsolicited gift of nominal or insignificant value not given in anticipation of, or in exchange for, a favor.",
    "x": {
      "steps": [
        "Section 3(c): a \"gift\" is a thing or a right disposed of gratuitously, or any act of liberality, and includes a simulated sale or an ostensibly onerous disposition.",
        "The same definition excludes an unsolicited gift of nominal or insignificant value not given in anticipation of, or in exchange for, a favor.",
        "Only the small, unsolicited, no-strings-attached item falls under the exclusion."
      ],
      "wrong": {
        "The \"sale\" of a car to an official at a token price that hides a gift": "Section 3(c) expressly includes a simulated sale or an ostensibly onerous disposition in the meaning of \"gift.\"",
        "An expensive item given by a non-relative to an official during his family celebration": "Section 3(d) says receiving any gift includes gifts from non-relatives even on the occasion of a family celebration, if the value is not nominal.",
        "A free vacation package given by a contractor with a pending bid in the official's office": "This is a gift given in anticipation of a favor, which is covered by Sections 3(c) and 7(d)."
      },
      "tip": "Not a \"gift\" only if all three: unsolicited, nominal value, no favor expected."
    },
    "src": [
      {
        "label": "R.A. 6713, Section 3(c) and (d)",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "easy",
    "t": "Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
    "q": "Aside from filing within 30 days after assuming office, when must a government employee file his Statement of Assets, Liabilities and Net Worth (SALN) every year under R.A. 6713?",
    "o": [
      "On or before December 31 of every year",
      "On or before April 30 of every year",
      "On or before January 31 of every year",
      "Within 15 working days after his birthday"
    ],
    "a": 1,
    "e": "Section 8(A) of R.A. 6713 requires the SALN to be filed within thirty (30) days after assumption of office, on or before April 30 of every year thereafter, and within thirty (30) days after separation from the service.",
    "x": {
      "steps": [
        "Section 8(A) gives three filing times for the SALN and the Disclosure of Business Interests and Financial Connections.",
        "They are: within 30 days after assuming office; on or before April 30 of every year thereafter; and within 30 days after leaving the service.",
        "So the yearly deadline is April 30."
      ],
      "wrong": {
        "On or before December 31 of every year": "R.A. 6713 does not set December 31; the annual deadline is April 30.",
        "On or before January 31 of every year": "R.A. 6713 does not set January 31; the annual deadline is April 30.",
        "Within 15 working days after his birthday": "The SALN deadline is not tied to birthdays; it is April 30 of every year."
      },
      "tip": "SALN: \"30 in, every April 30, 30 out.\""
    },
    "src": [
      {
        "label": "R.A. 6713, Section 8(A)",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
    "q": "Which of the following government workers is NOT required by R.A. 6713 to file a SALN?",
    "o": [
      "A permanent clerk in a city hall",
      "A barangay chairperson",
      "A casual laborer hired for a road-repair project",
      "A newly appointed public school teacher"
    ],
    "a": 2,
    "e": "Section 8(A) of R.A. 6713 requires all public officials and employees to file a SALN, except those who serve in an honorary capacity, laborers, and casual or temporary workers.",
    "x": {
      "steps": [
        "Section 8(A): all public officials and employees must file a SALN under oath.",
        "Exempted: those serving in an honorary capacity, laborers, and casual or temporary workers.",
        "A casual laborer falls in the exempt group; the others do not."
      ],
      "wrong": {
        "A permanent clerk in a city hall": "All public officials and employees file a SALN except those serving in an honorary capacity, laborers, and casual or temporary workers. A permanent clerk is covered.",
        "A barangay chairperson": "Local officials are covered; Section 8(A) even says regional and local officials file with the Deputy Ombudsman in their region.",
        "A newly appointed public school teacher": "A teacher is a public employee who is not in any of the exempt groups, so she must file within 30 days after assuming office."
      },
      "tip": "SALN exempt: \"H-L-C\" — Honorary, Laborers, Casual/temporary."
    },
    "src": [
      {
        "label": "R.A. 6713, Section 8(A)",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "difficult",
    "t": "Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
    "q": "Engr. Cruz, a board member and major stockholder of a construction company, is appointed to a government office that awards construction contracts, creating a conflict of interest. Under R.A. 6713, what must he do?",
    "o": [
      "Resign from the company within 30 days and divest his shareholdings within 60 days from assuming office",
      "Divest his shareholdings within one year from assuming office",
      "Keep his shares but simply inhibit himself from his company's bids",
      "Transfer all his shares to his wife within 60 days"
    ],
    "a": 0,
    "e": "Section 9 of R.A. 6713 requires an official with a conflict of interest to resign from his position in the private business within thirty (30) days from assumption of office and/or divest himself of his shareholdings or interest within sixty (60) days.",
    "x": {
      "steps": [
        "Section 3(i): a conflict of interest arises when an official is a board member, officer or substantial stockholder of a corporation whose interests may be affected by his official duties.",
        "Section 9: he must resign from the private business within 30 days and divest his shares within 60 days from assuming office.",
        "Section 3(j): divestment must be to someone other than his spouse and relatives."
      ],
      "wrong": {
        "Divest his shareholdings within one year from assuming office": "Section 9 gives only sixty (60) days to divest, not one year.",
        "Keep his shares but simply inhibit himself from his company's bids": "Section 9 requires resignation and divestment when a conflict of interest arises; inhibition alone does not satisfy it.",
        "Transfer all his shares to his wife within 60 days": "Under Section 3(j), divestment must be in favor of a person other than his spouse and relatives, so transfer to his wife is not divestment."
      },
      "tip": "Divestment: \"30 to resign, 60 to sell\" — and never to the family."
    },
    "src": [
      {
        "label": "R.A. 6713, Section 9",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      },
      {
        "label": "R.A. 6713, Section 3(i) and (j)",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "difficult",
    "t": "Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
    "q": "Liza resigned from a government office that licenses private security agencies. Four months later, a security agency licensed by that office offers her a job as consultant. Under R.A. 6713, what is the rule?",
    "o": [
      "She may accept it right away, because she is no longer in public service",
      "She may not accept it until one year has passed since her resignation",
      "She may accept it after six months from her resignation",
      "She may accept it if her former office head gives written approval"
    ],
    "a": 1,
    "e": "Section 7(b)(1) of R.A. 6713 bars officials from accepting employment as consultant in any private enterprise regulated, supervised or licensed by their office, and this prohibition continues for one (1) year after resignation, retirement or separation from public office.",
    "x": {
      "steps": [
        "Section 7(b)(1): during incumbency, officials may not own, control, manage or accept employment (including as consultant) in a private enterprise regulated, supervised or licensed by their office, unless expressly allowed by law.",
        "The same section says these prohibitions continue for one year after resignation, retirement or separation.",
        "Only four months have passed, so Liza must wait until one year after her resignation."
      ],
      "wrong": {
        "She may accept it right away, because she is no longer in public service": "Section 7(b) says the prohibitions continue to apply for one (1) year after resignation, retirement or separation.",
        "She may accept it after six months from her resignation": "The waiting period is one year, not six months.",
        "She may accept it if her former office head gives written approval": "Section 7(b) gives no such exception; it applies \"unless expressly allowed by law.\""
      },
      "tip": "Revolving-door rule: \"Leave, then wait one year.\""
    },
    "src": [
      {
        "label": "R.A. 6713, Section 7(b)",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "easy",
    "t": "Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
    "q": "A frontline clerk serves people wearing his political party's shirt ahead of everyone else in line. This goes against the norm of conduct that requires service to everyone \"without unfair discrimination and regardless of party affiliation or preference.\" What is this norm called in R.A. 6713?",
    "o": [
      "Simple living",
      "Nationalism and patriotism",
      "Political neutrality",
      "Commitment to democracy"
    ],
    "a": 2,
    "e": "Section 4(A)(d) of R.A. 6713, \"Political neutrality,\" requires public officials and employees to provide service to everyone without unfair discrimination and regardless of party affiliation or preference.",
    "x": {
      "steps": [
        "Section 4(A) lists eight norms of conduct.",
        "Norm (d), Political neutrality: provide service to everyone without unfair discrimination and regardless of party affiliation or preference.",
        "Giving priority to party mates violates this norm."
      ],
      "wrong": {
        "Simple living": "Simple living (Section 4(A)(h)) is about leading modest lives and avoiding extravagant display of wealth.",
        "Nationalism and patriotism": "Nationalism and patriotism (Section 4(A)(f)) is about loyalty to the Republic and promoting locally produced goods.",
        "Commitment to democracy": "Commitment to democracy (Section 4(A)(g)) is about democratic values, public accountability and the supremacy of civilian authority over the military."
      },
      "tip": "Political neutrality = \"one line for all, whatever the party.\""
    },
    "src": [
      {
        "label": "R.A. 6713, Section 4(A)(d)",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "difficult",
    "t": "Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
    "q": "Under the norm of \"justness and sincerity,\" officials must not extend undue favors to their relatives on account of their office. Which appointment of a relative does R.A. 6713 expressly treat as an exception?",
    "o": [
      "Appointment to any vacant permanent position, as long as the relative is qualified",
      "Appointment to any highly technical position",
      "Appointment to any casual position for less than six months",
      "Appointment to a position considered strictly confidential, or as a member of the official's personal staff whose term is coterminous with the official's"
    ],
    "a": 3,
    "e": "Section 4(A)(c) of R.A. 6713 bars undue favors to relatives except with respect to appointments of such relatives to positions considered strictly confidential or as members of their personal staff whose terms are coterminous with theirs.",
    "x": {
      "steps": [
        "Section 4(A)(c), Justness and sincerity: officials must not discriminate and must not dispense or extend undue favors to relatives on account of their office.",
        "The only exception: appointment of relatives to strictly confidential positions, or as members of their personal staff whose terms are coterminous with theirs.",
        "Section 3(k) defines relatives as those within the fourth civil degree of consanguinity or affinity."
      ],
      "wrong": {
        "Appointment to any vacant permanent position, as long as the relative is qualified": "Section 4(A)(c) gives no exception for permanent positions in general.",
        "Appointment to any highly technical position": "The exception in Section 4(A)(c) mentions strictly confidential positions and personal staff, not highly technical positions.",
        "Appointment to any casual position for less than six months": "No such exception appears in Section 4(A)(c)."
      },
      "tip": "Relatives exception = \"confidential or coterminous personal staff\" only."
    },
    "src": [
      {
        "label": "R.A. 6713, Section 4(A)(c)",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      },
      {
        "label": "R.A. 6713, Section 3(k)",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
    "q": "Under R.A. 6713, who are the co-chairmen of the Committee on Awards to Outstanding Public Officials and Employees?",
    "o": [
      "The President and the Senate President",
      "The Chairman of the Commission on Audit and the Ombudsman",
      "The Chairman of the Civil Service Commission and the Secretary of Budget and Management",
      "The Ombudsman and the Chairman of the Civil Service Commission"
    ],
    "a": 3,
    "e": "Section 6 of R.A. 6713 creates the Committee on Awards composed of the Ombudsman and the Chairman of the Civil Service Commission as co-chairmen, and the Chairman of the Commission on Audit and two government employees appointed by the President as members.",
    "x": {
      "steps": [
        "Section 6 establishes a system of annual incentives and rewards for public servants.",
        "Co-chairmen: the Ombudsman and the CSC Chairman. Members: the COA Chairman and two government employees appointed by the President.",
        "Rewards may include bonuses, citations, scholarships and paid vacations, and awardees are automatically promoted to the next higher position."
      ],
      "wrong": {
        "The President and the Senate President": "Neither sits on the Committee; the President only appoints two government employees as members.",
        "The Chairman of the Commission on Audit and the Ombudsman": "The COA Chairman is only a member of the Committee, not a co-chairman.",
        "The Chairman of the Civil Service Commission and the Secretary of Budget and Management": "The Budget Secretary is not part of the Committee under Section 6."
      },
      "tip": "Awards committee: \"O + C co-chair, COA + 2 members.\""
    },
    "src": [
      {
        "label": "R.A. 6713, Section 6",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "easy",
    "t": "Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
    "q": "Under R.A. 6713, official papers and documents should contain, as far as practicable, not more than how many signatories?",
    "o": [
      "Two",
      "Five",
      "Three",
      "Seven"
    ],
    "a": 2,
    "e": "Section 5(c) of R.A. 6713 requires official papers to be processed within a reasonable time and to contain, as far as practicable, not more than three (3) signatories.",
    "x": {
      "steps": [
        "Section 5(c), \"Process documents and papers expeditiously.\"",
        "Documents must be completed within a reasonable time and contain, as far as practicable, not more than three signatories.",
        "If authorized signatories are absent, the official next-in-rank or the officer-in-charge signs for them."
      ],
      "wrong": {
        "Two": "The law sets a maximum of three signatories, not two.",
        "Five": "Five exceeds the limit of three signatories in Section 5(c).",
        "Seven": "Seven exceeds the limit of three signatories in Section 5(c)."
      },
      "tip": "Fewer signatures, faster service: max 3."
    },
    "src": [
      {
        "label": "R.A. 6713, Section 5(c)",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
    "q": "Before any public announcement, an employee of a city treasurer's office learns which tax-delinquent lots will be auctioned and tells his cousin so the cousin can prepare to bid ahead of others. Which prohibited act under R.A. 6713 did he commit?",
    "o": [
      "Disclosure or misuse of confidential information",
      "Solicitation or acceptance of gifts",
      "Outside employment and other related activities",
      "Failure to file a Statement of Assets, Liabilities and Net Worth"
    ],
    "a": 0,
    "e": "Section 7(c) of R.A. 6713 prohibits officials from using or divulging confidential information officially known to them and not yet made available to the public, to further private interests or give undue advantage to anyone.",
    "x": {
      "steps": [
        "Section 7(c): officials shall not use or divulge confidential or classified information known to them by reason of their office and not made available to the public.",
        "The prohibition applies when it is done to further private interests or give undue advantage to anyone, or to prejudice the public interest.",
        "Telling his cousin before the public announcement gives the cousin an undue advantage."
      ],
      "wrong": {
        "Solicitation or acceptance of gifts": "Nothing in the facts shows he asked for or received a gift (Section 7(d)).",
        "Outside employment and other related activities": "This covers working for or managing private enterprises regulated by one's office (Section 7(b)), which is not what happened.",
        "Failure to file a Statement of Assets, Liabilities and Net Worth": "SALN filing (Section 8) has nothing to do with these facts."
      },
      "tip": "Inside info stays inside — until the public gets it too."
    },
    "src": [
      {
        "label": "R.A. 6713, Section 7(c)",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "difficult",
    "t": "Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
    "q": "A nurse in a government hospital is offered a fellowship grant by a foreign government for training abroad. Under R.A. 6713, may she accept it?",
    "o": [
      "No, because public employees may never accept anything from a foreign government",
      "Yes, because R.A. 6713 gives the consent of Congress to accepting a scholarship or fellowship grant from a foreign government",
      "Yes, but only if the grant is of nominal value",
      "Yes, but only after she resigns from government service"
    ],
    "a": 1,
    "e": "Section 7(d) of R.A. 6713 states that, as to gifts or grants from foreign governments, Congress consents to the acceptance by a public official or employee of a gift in the nature of a scholarship or fellowship grant or medical treatment.",
    "x": {
      "steps": [
        "Article IX-B, Section 8 of the Constitution bars accepting any present or emolument from a foreign government without the consent of Congress.",
        "Section 7(d) of R.A. 6713 gives that consent for: (i) gifts of nominal value as souvenirs or marks of courtesy; (ii) scholarship or fellowship grants or medical treatment; and (iii) certain travel grants abroad permitted by the head of office.",
        "A fellowship grant falls under item (ii), so she may accept it."
      ],
      "wrong": {
        "No, because public employees may never accept anything from a foreign government": "Section 7(d) expressly lists gifts from foreign governments that Congress consents to, including scholarship or fellowship grants.",
        "Yes, but only if the grant is of nominal value": "The nominal-value rule applies to souvenirs or marks of courtesy; a scholarship or fellowship grant is a separate consented category.",
        "Yes, but only after she resigns from government service": "There is no resignation requirement; the consent applies to public officials and employees."
      },
      "tip": "Foreign gifts Congress allows: \"Souvenir, Scholarship, Sickness (medical), Travel.\""
    },
    "src": [
      {
        "label": "R.A. 6713, Section 7(d)",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      },
      {
        "label": "1987 Constitution, Article IX-B, Section 8",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
    "q": "Under R.A. 6713, which agency has the primary responsibility for the administration and enforcement of the Code of Conduct and Ethical Standards?",
    "o": [
      "The Commission on Audit",
      "The Civil Service Commission",
      "The Office of the Ombudsman",
      "The Department of Justice"
    ],
    "a": 1,
    "e": "Section 12 of R.A. 6713 provides that the Civil Service Commission shall have the primary responsibility for the administration and enforcement of the Act and is authorized to promulgate its implementing rules.",
    "x": {
      "steps": [
        "Section 12: the Civil Service Commission has primary responsibility for administering and enforcing R.A. 6713.",
        "It transmits cases for prosecution to the proper authorities and may institute administrative actions.",
        "It is also authorized to promulgate the rules and regulations needed to carry out the Act."
      ],
      "wrong": {
        "The Commission on Audit": "COA's Chairman is only a member of the Committee on Awards (Section 6); it is not the primary enforcer of the Act.",
        "The Office of the Ombudsman": "The Ombudsman co-chairs the awards committee, prescribes regulations on foreign gifts and protects whistleblowers, but Section 12 gives primary responsibility to the CSC.",
        "The Department of Justice": "Section 12 does not give the DOJ primary responsibility; the CSC transmits cases for prosecution to the proper authorities."
      },
      "tip": "R.A. 6713 is the civil servants' code, so the Civil Service Commission enforces it."
    },
    "src": [
      {
        "label": "R.A. 6713, Section 12",
        "url": "https://lawphil.net/statutes/repacts/ra1989/ra_6713_1989.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "easy",
    "t": "Peace and Human Rights Issues and Concepts",
    "q": "According to Article 1 of the Universal Declaration of Human Rights, all human beings are born free and equal in dignity and rights, and they are endowed with what?",
    "o": [
      "Reason and conscience",
      "Property and citizenship",
      "Power and wealth",
      "Language and culture"
    ],
    "a": 0,
    "e": "Article 1 of the UDHR states that all human beings are born free and equal in dignity and rights, are endowed with reason and conscience, and should act towards one another in a spirit of brotherhood.",
    "x": {
      "steps": [
        "Article 1: \"All human beings are born free and equal in dignity and rights.\"",
        "It continues: \"They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.\"",
        "So the answer is reason and conscience."
      ],
      "wrong": {
        "Property and citizenship": "Article 1 does not mention these. Property (Article 17) and nationality (Article 15) are separate rights.",
        "Power and wealth": "Article 1 does not say humans are endowed with power and wealth.",
        "Language and culture": "Article 1 does not mention language and culture; cultural life is covered by Article 27."
      },
      "tip": "Article 1 = \"Free, Equal, Reason, Conscience, Brotherhood.\""
    },
    "src": [
      {
        "label": "Universal Declaration of Human Rights, Article 1",
        "url": "https://www.un.org/en/about-us/universal-declaration-of-human-rights"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Peace and Human Rights Issues and Concepts",
    "q": "The Preamble of the Universal Declaration of Human Rights speaks of the \"equal and inalienable rights of all members of the human family.\" What does it mean to say that human rights are inalienable?",
    "o": [
      "They are granted by the government and may be withdrawn by it",
      "They belong only to citizens of United Nations member states",
      "They apply only in times of peace",
      "They cannot be taken away from or given up by the person"
    ],
    "a": 3,
    "e": "The UDHR Preamble states that recognition of the inherent dignity and of the equal and inalienable rights of all members of the human family is the foundation of freedom, justice and peace in the world; \"inalienable\" means the rights cannot be taken away or surrendered.",
    "x": {
      "steps": [
        "The Preamble begins: recognition of the inherent dignity and of the equal and inalienable rights of all members of the human family is the foundation of freedom, justice and peace in the world.",
        "\"Inherent\" means people have these rights simply because they are human; \"inalienable\" means the rights cannot be taken away or given up.",
        "\"All members of the human family\" shows that these rights are universal."
      ],
      "wrong": {
        "They are granted by the government and may be withdrawn by it": "The Preamble speaks of the inherent dignity of all people; rights do not come from, and cannot be withdrawn by, the government at will.",
        "They belong only to citizens of United Nations member states": "The Preamble refers to \"all members of the human family,\" not only citizens of certain states.",
        "They apply only in times of peace": "Nothing in the Preamble limits rights to peacetime; it calls recognition of rights the foundation of freedom, justice and peace."
      },
      "tip": "Inalienable = \"cannot be sold, surrendered or snatched.\""
    },
    "src": [
      {
        "label": "Universal Declaration of Human Rights, Preamble",
        "url": "https://www.un.org/en/about-us/universal-declaration-of-human-rights"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Peace and Human Rights Issues and Concepts",
    "q": "Armed men detain a farmer for weeks with no charge and no legal basis. Which article of the Universal Declaration of Human Rights is most directly violated?",
    "o": [
      "Article 26 — the right to education",
      "Article 17 — the right to own property",
      "Article 9 — no one shall be subjected to arbitrary arrest, detention or exile",
      "Article 24 — the right to rest and leisure"
    ],
    "a": 2,
    "e": "Article 9 of the UDHR states that no one shall be subjected to arbitrary arrest, detention or exile; holding a person without charge or legal basis is arbitrary detention.",
    "x": {
      "steps": [
        "Article 9 of the UDHR: \"No one shall be subjected to arbitrary arrest, detention or exile.\"",
        "Detaining someone for weeks with no charge and no legal basis is arbitrary detention.",
        "Article 3 (right to life, liberty and security of person) is also related, but Article 9 is the specific rule on arbitrary detention."
      ],
      "wrong": {
        "Article 26 — the right to education": "Article 26 is about education, not detention.",
        "Article 17 — the right to own property": "Article 17 is about property, not a person's freedom from detention.",
        "Article 24 — the right to rest and leisure": "Article 24 is about rest, leisure and reasonable working hours."
      },
      "tip": "Article 9 = \"no arbitrary arrest, detention or exile.\""
    },
    "src": [
      {
        "label": "Universal Declaration of Human Rights, Article 9",
        "url": "https://www.un.org/en/about-us/universal-declaration-of-human-rights"
      }
    ]
  },
  {
    "c": "general",
    "d": "easy",
    "t": "Peace and Human Rights Issues and Concepts",
    "q": "Under Article 26 of the Universal Declaration of Human Rights, which level of education shall be compulsory?",
    "o": [
      "Elementary education",
      "Higher education",
      "Technical and professional education",
      "All levels of education, including college"
    ],
    "a": 0,
    "e": "Article 26 of the UDHR states that everyone has the right to education, that education shall be free at least in the elementary and fundamental stages, and that elementary education shall be compulsory.",
    "x": {
      "steps": [
        "Article 26: everyone has the right to education.",
        "Education shall be free at least in the elementary and fundamental stages, and elementary education shall be compulsory.",
        "Technical and professional education shall be generally available; higher education shall be equally accessible on the basis of merit."
      ],
      "wrong": {
        "Higher education": "Article 26 says higher education shall be equally accessible to all on the basis of merit, not compulsory.",
        "Technical and professional education": "Article 26 says technical and professional education shall be made generally available, not compulsory.",
        "All levels of education, including college": "Article 26 makes only elementary education compulsory."
      },
      "tip": "UDHR education ladder: elementary = compulsory, technical = available, higher = by merit."
    },
    "src": [
      {
        "label": "Universal Declaration of Human Rights, Article 26",
        "url": "https://www.un.org/en/about-us/universal-declaration-of-human-rights"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Peace and Human Rights Issues and Concepts",
    "q": "Under the 1987 Constitution, how is the Commission on Human Rights composed?",
    "o": [
      "A Chairman and two Commissioners, appointed for seven years without reappointment",
      "A Chairman and six Commissioners, a majority of whom must be lawyers",
      "A Chairman and four Members, all of whom must be members of the Bar",
      "A Chairman and four Members, who must be natural-born citizens, a majority of whom must be members of the Bar"
    ],
    "a": 3,
    "e": "Article XIII, Section 17 creates the Commission on Human Rights as an independent office composed of a Chairman and four Members who must be natural-born citizens, a majority of whom shall be members of the Bar.",
    "x": {
      "steps": [
        "Article XIII, Section 17 creates an independent office called the Commission on Human Rights.",
        "It has a Chairman and four Members, all natural-born citizens, and a majority of them must be members of the Bar.",
        "Its approved annual appropriations are automatically and regularly released."
      ],
      "wrong": {
        "A Chairman and two Commissioners, appointed for seven years without reappointment": "This is the composition of the Civil Service Commission (Article IX-B, Section 1).",
        "A Chairman and six Commissioners, a majority of whom must be lawyers": "A Chairman and six Commissioners is the composition of the Commission on Elections (Article IX-C, Section 1).",
        "A Chairman and four Members, all of whom must be members of the Bar": "Only a majority, not all, must be members of the Bar."
      },
      "tip": "CHR = 1 + 4 = 5; majority lawyers."
    },
    "src": [
      {
        "label": "1987 Constitution, Article XIII, Section 17",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Peace and Human Rights Issues and Concepts",
    "q": "Families report that detainees in a municipal jail are kept in overcrowded cells and beaten by guards. Which power of the Commission on Human Rights under the Constitution allows it to inspect the jail?",
    "o": [
      "Its power to try and convict the jail guards",
      "Its power to issue warrants of arrest against the guards",
      "Its visitorial powers over jails, prisons, or detention facilities",
      "Its power to impeach the municipal mayor"
    ],
    "a": 2,
    "e": "Article XIII, Section 18 gives the Commission on Human Rights the power to exercise visitorial powers over jails, prisons, or detention facilities, and to investigate all forms of human rights violations involving civil and political rights.",
    "x": {
      "steps": [
        "Article XIII, Section 18 lists the powers of the CHR.",
        "These include investigating human rights violations involving civil and political rights, on its own or on complaint, and exercising visitorial powers over jails, prisons, or detention facilities.",
        "Visiting and inspecting the jail falls under its visitorial powers."
      ],
      "wrong": {
        "Its power to try and convict the jail guards": "The CHR investigates human rights violations; it does not try or convict anyone in court.",
        "Its power to issue warrants of arrest against the guards": "Under Article III, Section 2, only a judge may issue a warrant of arrest after personally determining probable cause.",
        "Its power to impeach the municipal mayor": "Impeachment is done by Congress, and only for the officials listed in Article XI, Section 2; a mayor is not one of them."
      },
      "tip": "CHR can \"visit and investigate,\" but cannot \"arrest or convict.\""
    },
    "src": [
      {
        "label": "1987 Constitution, Article XIII, Section 18",
        "url": "https://lawphil.net/consti/cons1987.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Peace and Human Rights Issues and Concepts",
    "q": "During a declared public emergency, a police officer claims that interrogation methods causing severe pain are allowed to get information from a suspect. Under the Anti-Torture Act (R.A. 9745), is he correct?",
    "o": [
      "Yes, because torture is allowed during a declared public emergency",
      "No, because freedom from torture is an absolute right, and no public emergency can ever justify torture",
      "Yes, if the suspect is named in an \"order of battle\"",
      "Yes, if the chief of police approves it in writing"
    ],
    "a": 1,
    "e": "Section 6 of R.A. 9745 declares freedom from torture an absolute right: a state of war or threat of war, internal political instability, any other public emergency, or an \"order of battle\" can never be invoked to justify torture.",
    "x": {
      "steps": [
        "Section 3(a) defines torture as intentionally inflicting severe physical or mental pain or suffering, for example to get information or a confession, by or with the consent of a person in authority.",
        "Section 6 makes freedom from torture an absolute right that applies in all circumstances.",
        "War, threat of war, political instability, public emergency, or an \"order of battle\" can never justify torture."
      ],
      "wrong": {
        "Yes, because torture is allowed during a declared public emergency": "Section 6 says a public emergency shall not and can never be invoked to justify torture.",
        "Yes, if the suspect is named in an \"order of battle\"": "Section 6 also says an \"order of battle\" can never be invoked as a justification for torture.",
        "Yes, if the chief of police approves it in writing": "No approval by any official can make torture lawful under R.A. 9745."
      },
      "tip": "Torture ban = no exceptions, not even in emergencies."
    },
    "src": [
      {
        "label": "R.A. 9745, Sections 3(a) and 6",
        "url": "https://lawphil.net/statutes/repacts/ra2009/ra_9745_2009.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "difficult",
    "t": "Peace and Human Rights Issues and Concepts",
    "q": "A soldier charged under R.A. 9851 claims he committed a war crime only because his commanding officer ordered him to. Under the law, what is the effect of this defense?",
    "o": [
      "It always frees him, because soldiers must obey their superiors",
      "It frees him only if the order came from a civilian official",
      "It automatically reduces his penalty by half",
      "It does not relieve him of liability unless he was legally obliged to obey, did not know the order was unlawful, and the order was not manifestly unlawful"
    ],
    "a": 3,
    "e": "Section 12 of R.A. 9851 provides that committing a crime under the Act on orders of a government or superior does not relieve a person of criminal responsibility unless (a) he was under a legal obligation to obey, (b) he did not know the order was unlawful, and (c) the order was not manifestly unlawful.",
    "x": {
      "steps": [
        "Section 12 of R.A. 9851 (Philippine Act on Crimes Against International Humanitarian Law, Genocide, and Other Crimes Against Humanity) deals with orders from a superior.",
        "The defense works only if all three are present: legal obligation to obey; no knowledge that the order was unlawful; and the order was not manifestly unlawful.",
        "Orders to commit genocide or other crimes against humanity are always manifestly unlawful. Section 11 adds that these crimes do not prescribe."
      ],
      "wrong": {
        "It always frees him, because soldiers must obey their superiors": "Section 12 says superior orders do not relieve a person of criminal responsibility except when all three conditions are present.",
        "It frees him only if the order came from a civilian official": "Section 12 applies to orders of a superior \"whether military or civilian,\" and gives no special treatment to civilian orders.",
        "It automatically reduces his penalty by half": "R.A. 9851 provides no such automatic reduction for following orders."
      },
      "tip": "\"Just following orders\" is not a free pass — all three conditions must be met."
    },
    "src": [
      {
        "label": "R.A. 9851, Sections 11 and 12",
        "url": "https://lawphil.net/statutes/repacts/ra2009/ra_9851_2009.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Peace and Human Rights Issues and Concepts",
    "q": "R.A. 10368, the Human Rights Victims Reparation and Recognition Act of 2013, covers human rights violations committed during which period?",
    "o": [
      "February 25, 1986 to February 25, 1992",
      "September 21, 1962 to September 21, 1972",
      "September 21, 1972 to February 25, 1986",
      "January 1, 1970 to December 31, 1980"
    ],
    "a": 2,
    "e": "Sections 2 and 3(b) of R.A. 10368 cover human rights violations committed during the regime of former President Ferdinand E. Marcos, from September 21, 1972 to February 25, 1986.",
    "x": {
      "steps": [
        "Section 2 declares the policy to recognize the heroism and sacrifices of victims of summary execution, torture, enforced disappearance and other gross human rights violations during the Marcos regime.",
        "Section 3(b) defines a human rights violation as an act or omission committed from September 21, 1972 to February 25, 1986 by persons acting in an official capacity or agents of the State.",
        "The law provides reparation and recognition, including a Roll of Human Rights Victims and a memorial."
      ],
      "wrong": {
        "February 25, 1986 to February 25, 1992": "This is not the period stated in R.A. 10368; the covered period ends on February 25, 1986.",
        "September 21, 1962 to September 21, 1972": "This is not the period stated in R.A. 10368; the covered period begins on September 21, 1972.",
        "January 1, 1970 to December 31, 1980": "This is not the period stated in R.A. 10368."
      },
      "tip": "R.A. 10368 period: \"9-21-72 to 2-25-86.\""
    },
    "src": [
      {
        "label": "R.A. 10368, Sections 2 and 3(b)",
        "url": "https://lawphil.net/statutes/repacts/ra2013/ra_10368_2013.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Peace and Human Rights Issues and Concepts",
    "q": "A government employee who has worked continuously for eight months within the last twelve months undergoes surgery caused by a gynecological disorder. Under the Magna Carta of Women (R.A. 9710), what is she entitled to?",
    "o": [
      "A special leave of two months with full pay based on her gross monthly compensation",
      "A special leave of one month with half pay",
      "A special leave of two weeks with full pay",
      "Nothing, because she needs at least two years of continuous service"
    ],
    "a": 0,
    "e": "Section 18 of R.A. 9710 entitles a woman employee with at least six (6) months of continuous aggregate service in the last twelve (12) months to a special leave of two (2) months with full pay following surgery caused by gynecological disorders.",
    "x": {
      "steps": [
        "Section 18 of the Magna Carta of Women provides special leave benefits for women.",
        "Requirement: at least six months of continuous aggregate employment service in the last twelve months.",
        "Benefit: two months of leave with full pay based on gross monthly compensation, after surgery caused by gynecological disorders. Eight months qualifies."
      ],
      "wrong": {
        "A special leave of one month with half pay": "Section 18 grants two months with full pay, not one month with half pay.",
        "A special leave of two weeks with full pay": "Section 18 grants two months, not two weeks.",
        "Nothing, because she needs at least two years of continuous service": "Section 18 requires only at least six months of continuous aggregate service in the last twelve months; she has eight."
      },
      "tip": "Magna Carta special leave: \"6 months in, 2 months off, full pay.\""
    },
    "src": [
      {
        "label": "R.A. 9710, Section 18",
        "url": "https://lawphil.net/statutes/repacts/ra2009/ra_9710_2009.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "easy",
    "t": "Peace and Human Rights Issues and Concepts",
    "q": "Under R.A. 7610, the Special Protection of Children Against Abuse, Exploitation and Discrimination Act, who are considered \"children\"?",
    "o": [
      "Persons below 15 years of age only",
      "Persons below 18 years of age, or those over 18 who cannot fully take care of or protect themselves because of a physical or mental disability or condition",
      "Persons below 21 years of age",
      "Persons below 18 years of age, with no exceptions"
    ],
    "a": 1,
    "e": "Section 3(a) of R.A. 7610 defines children as persons below eighteen (18) years of age or those over but unable to fully take care of or protect themselves from abuse, neglect, cruelty, exploitation or discrimination because of a physical or mental disability or condition.",
    "x": {
      "steps": [
        "Section 3(a) of R.A. 7610 defines \"children.\"",
        "It covers everyone below 18 years of age.",
        "It also covers persons over 18 who cannot fully take care of or protect themselves because of a physical or mental disability or condition."
      ],
      "wrong": {
        "Persons below 15 years of age only": "Section 3(a) uses the age of 18, not 15.",
        "Persons below 21 years of age": "Section 3(a) uses the age of 18, not 21.",
        "Persons below 18 years of age, with no exceptions": "Section 3(a) also covers persons over 18 who cannot fully take care of or protect themselves because of a physical or mental disability or condition."
      },
      "tip": "R.A. 7610 child = \"under 18, or older but unable to protect oneself due to disability.\""
    },
    "src": [
      {
        "label": "R.A. 7610, Section 3(a)",
        "url": "https://lawphil.net/statutes/repacts/ra1992/ra_7610_1992.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "easy",
    "t": "Peace and Human Rights Issues and Concepts",
    "q": "A man repeatedly catcalls and wolf-whistles at women walking past a public market. Under the Safe Spaces Act (R.A. 11313), what is his act?",
    "o": [
      "Not punishable, because there was no physical contact",
      "Punishable only if the victim is a minor",
      "Not punishable, if the man did not mean to offend anyone",
      "Gender-based streets and public spaces sexual harassment"
    ],
    "a": 3,
    "e": "Section 4 of R.A. 11313 defines gender-based streets and public spaces sexual harassment as unwanted and uninvited sexual actions or remarks against any person regardless of motive, including catcalling and wolf-whistling, committed in public spaces such as public markets.",
    "x": {
      "steps": [
        "Section 4 covers any unwanted and uninvited sexual actions or remarks against any person, regardless of the motive.",
        "It expressly includes catcalling, wolf-whistling, unwanted invitations, sexist slurs and persistent comments on appearance.",
        "Public markets are among the places listed, so the man's act is covered."
      ],
      "wrong": {
        "Not punishable, because there was no physical contact": "Section 4 covers verbal acts such as catcalling and wolf-whistling; physical contact is not required.",
        "Punishable only if the victim is a minor": "Section 4 protects \"any person,\" not only minors.",
        "Not punishable, if the man did not mean to offend anyone": "Section 4 says the crime is committed \"regardless of the motive.\""
      },
      "tip": "Safe Spaces: words can harass — catcalls count, motive does not matter."
    },
    "src": [
      {
        "label": "R.A. 11313, Section 4",
        "url": "https://lawphil.net/statutes/repacts/ra2019/ra_11313_2019.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "easy",
    "t": "Environment Management and Protection",
    "q": "Under the Ecological Solid Waste Management Act of 2000 (R.A. 9003), where should segregation of solid wastes primarily be done?",
    "o": [
      "At the sanitary landfill",
      "At the municipal open dump",
      "At the source, such as households, institutions, industries, and commercial and agricultural sources",
      "Only at the barangay Materials Recovery Facility"
    ],
    "a": 2,
    "e": "Section 21 of R.A. 9003 provides that segregation of wastes shall primarily be conducted at the source, including household, institutional, industrial, commercial and agricultural sources.",
    "x": {
      "steps": [
        "Section 21, Mandatory Segregation of Solid Wastes: segregation shall primarily be conducted at the source.",
        "Sources include households, institutions, industries, commercial establishments and agricultural sources.",
        "So waste should be sorted where it is produced — for example, at home — before collection."
      ],
      "wrong": {
        "At the sanitary landfill": "Landfills receive residual wastes after sorting; segregation is primarily done at the source (Section 21).",
        "At the municipal open dump": "Open dumps are prohibited under Section 37 of R.A. 9003.",
        "Only at the barangay Materials Recovery Facility": "The MRF does final sorting of mixed waste (Section 32), but segregation is primarily done at the source."
      },
      "tip": "Sort it where you make it — \"segregation at source.\""
    },
    "src": [
      {
        "label": "R.A. 9003, Section 21",
        "url": "https://lawphil.net/statutes/repacts/ra2001/ra_9003_2001.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Environment Management and Protection",
    "q": "Under R.A. 9003, which level of government is responsible for collecting non-recyclable materials and special wastes?",
    "o": [
      "The barangay",
      "The municipality or city",
      "The Department of Environment and Natural Resources",
      "The province"
    ],
    "a": 1,
    "e": "Section 10 of R.A. 9003 provides that segregation and collection of biodegradable, compostable and reusable wastes is done at the barangay level, while the collection of non-recyclable materials and special wastes is the responsibility of the municipality or city.",
    "x": {
      "steps": [
        "Section 10: LGUs are primarily responsible for implementing R.A. 9003.",
        "Barangay level: segregation and collection of biodegradable, compostable and reusable wastes.",
        "Municipality or city: collection of non-recyclable materials and special wastes."
      ],
      "wrong": {
        "The barangay": "Section 10 assigns the barangay the segregation and collection of biodegradable, compostable and reusable wastes, not non-recyclable and special wastes.",
        "The Department of Environment and Natural Resources": "Section 10 places this collection duty on the municipality or city, not on the DENR.",
        "The province": "Section 10 places this duty on the municipality or city; the province has a Provincial Solid Waste Management Board (Section 11) but not this collection duty."
      },
      "tip": "Barangay = \"bio, compost, reuse\"; City/Municipality = \"non-recyclable and special.\""
    },
    "src": [
      {
        "label": "R.A. 9003, Section 10",
        "url": "https://lawphil.net/statutes/repacts/ra2001/ra_9003_2001.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Environment Management and Protection",
    "q": "A resident burns his household garbage in his backyard every week. Under R.A. 9003, what is the status of this act?",
    "o": [
      "It is a prohibited act — the open burning of solid waste",
      "It is allowed, because it is done on his own property",
      "It is allowed, as long as it is done at night",
      "It violates only the Clean Water Act (R.A. 9275)"
    ],
    "a": 0,
    "e": "Section 48(3) of R.A. 9003 lists the open burning of solid waste as a prohibited act; under Section 49(b) it is punishable by a fine of ₱300 to ₱1,000, imprisonment of 1 to 15 days, or both.",
    "x": {
      "steps": [
        "Section 48 lists prohibited acts under R.A. 9003; item (3) is \"the open burning of solid waste.\"",
        "Section 49(b) sets the penalty: a fine of ₱300 to ₱1,000, or imprisonment of 1 to 15 days, or both.",
        "Burning household garbage in the backyard is open burning, so it is prohibited."
      ],
      "wrong": {
        "It is allowed, because it is done on his own property": "Section 48(3) prohibits the open burning of solid waste without any exception for private property.",
        "It is allowed, as long as it is done at night": "The time of day does not matter; open burning of solid waste is prohibited.",
        "It violates only the Clean Water Act (R.A. 9275)": "Open burning of solid waste is expressly a prohibited act under Section 48(3) of R.A. 9003."
      },
      "tip": "Garbage is for segregation, not for burning."
    },
    "src": [
      {
        "label": "R.A. 9003, Sections 48(3) and 49(b)",
        "url": "https://lawphil.net/statutes/repacts/ra2001/ra_9003_2001.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "difficult",
    "t": "Environment Management and Protection",
    "q": "The Philippine Clean Air Act (R.A. 8749) bans incineration, which it defines as the burning of municipal, biomedical and hazardous waste that emits poisonous and toxic fumes. Which of the following is expressly NOT covered by the ban?",
    "o": [
      "Crematoria",
      "Burning mixed municipal garbage in a city-run incinerator",
      "Burning hazardous industrial waste in a private incinerator",
      "Burning hospital waste in a newly built commercial incinerator"
    ],
    "a": 0,
    "e": "Section 20 of R.A. 8749 prohibits incineration but provides that the prohibition does not apply to the traditional small-scale community sanitation \"siga,\" traditional, agricultural, cultural, health and food preparation, and crematoria.",
    "x": {
      "steps": [
        "Section 20 defines incineration as the burning of municipal, biomedical and hazardous waste that emits poisonous and toxic fumes, and prohibits it.",
        "Exceptions listed: the traditional small-scale method of community or neighborhood sanitation \"siga,\" traditional, agricultural, cultural, health and food preparation, and crematoria.",
        "Crematoria are expressly excepted; the other options burn municipal, hazardous or biomedical waste."
      ],
      "wrong": {
        "Burning mixed municipal garbage in a city-run incinerator": "Burning municipal waste is exactly what Section 20 defines as prohibited incineration.",
        "Burning hazardous industrial waste in a private incinerator": "Hazardous waste is part of the definition of prohibited incineration in Section 20.",
        "Burning hospital waste in a newly built commercial incinerator": "Biomedical waste is part of the definition of prohibited incineration; only existing biomedical incinerators were given a phase-out period."
      },
      "tip": "Incineration ban exceptions: \"siga, food, culture, crematoria.\""
    },
    "src": [
      {
        "label": "R.A. 8749, Section 20",
        "url": "https://lawphil.net/statutes/repacts/ra1999/ra_8749_1999.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Environment Management and Protection",
    "q": "A food-processing plant wants to release its treated wastewater into a nearby river. Under the Philippine Clean Water Act of 2004 (R.A. 9275), what legal authorization must it secure from the DENR?",
    "o": [
      "A barangay business clearance only",
      "A discharge permit",
      "None, as long as the water looks clear",
      "An Environmental Compliance Certificate only"
    ],
    "a": 1,
    "e": "Section 14 of R.A. 9275 requires owners or operators of facilities that discharge regulated effluents to secure a discharge permit from the DENR, which is the legal authorization to discharge wastewater.",
    "x": {
      "steps": [
        "Section 14: the DENR shall require facilities that discharge regulated effluents to secure a permit to discharge.",
        "The discharge permit is the legal authorization to discharge wastewater, and it specifies the quantity and quality of effluent allowed, the compliance schedule and monitoring.",
        "Section 27(c) prohibits operating such facilities without a valid permit."
      ],
      "wrong": {
        "A barangay business clearance only": "A barangay clearance is not the legal authorization to discharge wastewater; Section 14 requires a DENR discharge permit.",
        "None, as long as the water looks clear": "Facilities that discharge regulated effluents must secure a permit; appearance does not matter.",
        "An Environmental Compliance Certificate only": "An ECC is issued under P.D. 1586 for projects, but Section 14 of R.A. 9275 specifically requires a discharge permit to discharge wastewater."
      },
      "tip": "Wastewater out = discharge permit in."
    },
    "src": [
      {
        "label": "R.A. 9275, Sections 14 and 27(c)",
        "url": "https://lawphil.net/statutes/repacts/ra2004/ra_9275_2004.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Environment Management and Protection",
    "q": "Under the Climate Change Act of 2009 (R.A. 9729), who are the \"frontline agencies\" in formulating, planning and implementing climate change action plans in their areas?",
    "o": [
      "The National Disaster Risk Reduction and Management Council",
      "The Department of Education",
      "The Climate Change Commission alone",
      "The local government units"
    ],
    "a": 3,
    "e": "Section 14 of R.A. 9729 states that LGUs shall be the frontline agencies in the formulation, planning and implementation of climate change action plans in their respective areas (Local Climate Change Action Plans).",
    "x": {
      "steps": [
        "Section 14, Local Climate Change Action Plan: LGUs are the frontline agencies for climate change action plans in their areas.",
        "Barangays work with municipal and city governments; municipal and city governments treat climate change adaptation as a regular function.",
        "Provincial governments provide technical assistance, enforcement and information management."
      ],
      "wrong": {
        "The National Disaster Risk Reduction and Management Council": "The NDRRMC is the national disaster council under R.A. 10121; Section 14 of R.A. 9729 names LGUs as the frontline agencies.",
        "The Department of Education": "Under Section 15(a) of R.A. 9729, DepEd integrates climate change into school curricula; it is not the frontline agency for local action plans.",
        "The Climate Change Commission alone": "The Commission is the lead policy-making body, but Section 14 names LGUs as the frontline agencies for local action plans."
      },
      "tip": "Climate action starts at the local level — LGUs are the frontliners."
    },
    "src": [
      {
        "label": "R.A. 9729, Section 14",
        "url": "https://lawphil.net/statutes/repacts/ra2009/ra_9729_2009.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "easy",
    "t": "Environment Management and Protection",
    "q": "Under the Climate Change Act (R.A. 9729), as amended by R.A. 10174, who serves as Chairperson of the Climate Change Commission?",
    "o": [
      "The Secretary of Environment and Natural Resources",
      "The Secretary of National Defense",
      "The President of the Philippines",
      "The Secretary of Finance"
    ],
    "a": 2,
    "e": "Section 5 of R.A. 9729, as amended by R.A. 10174, provides that the Climate Change Commission is composed of the President of the Philippines as Chairperson and three Commissioners appointed by the President, one of whom is Vice Chairperson.",
    "x": {
      "steps": [
        "Section 4: the Climate Change Commission is an independent and autonomous body attached to the Office of the President and is the lead policy-making body on climate change.",
        "Section 5 (as amended by R.A. 10174): it is composed of the President as Chairperson and three Commissioners appointed by the President.",
        "Department secretaries, including DENR, DND and Finance, sit on its advisory board."
      ],
      "wrong": {
        "The Secretary of Environment and Natural Resources": "The DENR Secretary sits on the Commission's advisory board, not as Chairperson.",
        "The Secretary of National Defense": "The DND Secretary chairs the NDRRMC under R.A. 10121 and sits on the Commission's advisory board.",
        "The Secretary of Finance": "The Finance Secretary chairs the People's Survival Fund Board, not the Commission."
      },
      "tip": "Climate Change Commission: the President chairs it personally."
    },
    "src": [
      {
        "label": "R.A. 10174, Sections 3 and 4 (amending R.A. 9729, Sections 4 and 5)",
        "url": "https://lawphil.net/statutes/repacts/ra2012/ra_10174_2012.html"
      },
      {
        "label": "R.A. 9729, Sections 4 and 5",
        "url": "https://lawphil.net/statutes/repacts/ra2009/ra_9729_2009.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "difficult",
    "t": "Environment Management and Protection",
    "q": "R.A. 10174 amended the Climate Change Act by creating the People's Survival Fund (PSF). Which use of the fund is allowed by law?",
    "o": [
      "Paying the salaries and operating expenses of the Climate Change Commission",
      "Financing climate change adaptation programs and projects of local governments and communities",
      "Serving as the Quick Response Fund of LGUs for disaster relief",
      "Returning its unused balance to the general fund at the end of each year"
    ],
    "a": 1,
    "e": "R.A. 10174 created the People's Survival Fund as a special fund for financing adaptation programs and projects, used to support adaptation activities of local governments and communities, with at least ₱1 billion per year, and barred its use for the Commission's personal services and operating expenses.",
    "x": {
      "steps": [
        "New Section 18 (inserted by R.A. 10174): the PSF is a special fund in the National Treasury for financing adaptation programs and projects.",
        "New Section 19: ₱1 billion opening balance; the balance shall not be less than ₱1 billion; it shall not fund the Commission's personal services and operating expenses, and it shall not revert to the general fund.",
        "New Section 20: it supports adaptation activities of local governments and communities, such as early warning systems and risk insurance for farmers."
      ],
      "wrong": {
        "Paying the salaries and operating expenses of the Climate Change Commission": "The law expressly says the PSF shall not be used to fund personal services and other operational expenses of the Commission.",
        "Serving as the Quick Response Fund of LGUs for disaster relief": "The Quick Response Fund is 30% of the LDRRMF under Section 21 of R.A. 10121, not the PSF.",
        "Returning its unused balance to the general fund at the end of each year": "The law says the PSF balance shall not revert to the general fund."
      },
      "tip": "PSF = money for \"Adaptation,\" not for \"Administration.\""
    },
    "src": [
      {
        "label": "R.A. 10174, Section 13 (new Sections 18–20 of R.A. 9729)",
        "url": "https://lawphil.net/statutes/repacts/ra2012/ra_10174_2012.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "difficult",
    "t": "Environment Management and Protection",
    "q": "A municipality expects ₱100 million in revenue from regular sources. Under the Philippine Disaster Risk Reduction and Management Act (R.A. 10121), what is the minimum it must set aside for its Local Disaster Risk Reduction and Management Fund (LDRRMF), and how much of that fund goes to the Quick Response Fund?",
    "o": [
      "At least ₱5 million, with 30% of the amount set aside going to the Quick Response Fund",
      "At least ₱10 million, with 50% of the amount going to the Quick Response Fund",
      "At least ₱5 million, with 70% of the amount going to the Quick Response Fund",
      "At least ₱3 million, with 30% of the amount going to the Quick Response Fund"
    ],
    "a": 0,
    "e": "Section 21 of R.A. 10121 requires not less than five percent (5%) of estimated revenue from regular sources to be set aside as the LDRRMF, and 30% of the LDRRMF is allocated as the Quick Response Fund.",
    "x": {
      "steps": [
        "Section 21: not less than 5% of the estimated revenue from regular sources shall be set aside as the LDRRMF.",
        "5% of ₱100 million = ₱5 million minimum.",
        "Thirty percent (30%) of the amount appropriated for the LDRRMF is the Quick Response Fund (QRF) for relief and recovery — ₱1.5 million if exactly ₱5 million is set aside."
      ],
      "wrong": {
        "At least ₱10 million, with 50% of the amount going to the Quick Response Fund": "The law sets not less than 5% (₱5 million here) and allocates 30%, not 50%, as the Quick Response Fund.",
        "At least ₱5 million, with 70% of the amount going to the Quick Response Fund": "Only 30% of the LDRRMF is the Quick Response Fund.",
        "At least ₱3 million, with 30% of the amount going to the Quick Response Fund": "The minimum is 5% of ₱100 million, which is ₱5 million, not ₱3 million."
      },
      "tip": "LDRRMF: \"5% of revenue; 30% of that is QRF.\""
    },
    "src": [
      {
        "label": "R.A. 10121, Section 21",
        "url": "https://lawphil.net/statutes/repacts/ra2010/ra_10121_2010.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "easy",
    "t": "Environment Management and Protection",
    "q": "Under R.A. 10121, who chairs the National Disaster Risk Reduction and Management Council (NDRRMC)?",
    "o": [
      "The Secretary of the Interior and Local Government",
      "The Secretary of Social Welfare and Development",
      "The Director-General of the National Economic and Development Authority",
      "The Secretary of National Defense"
    ],
    "a": 3,
    "e": "Section 5 of R.A. 10121 provides that the NDRRMC shall be headed by the Secretary of National Defense as Chairperson, with the DILG, DSWD and DOST Secretaries and the NEDA Director-General as Vice Chairpersons.",
    "x": {
      "steps": [
        "Section 5: the former National Disaster Coordinating Council is now the NDRRMC.",
        "Chairperson: Secretary of National Defense.",
        "Vice Chairpersons: DILG (Preparedness), DSWD (Response), DOST (Prevention and Mitigation), NEDA (Rehabilitation and Recovery)."
      ],
      "wrong": {
        "The Secretary of the Interior and Local Government": "The DILG Secretary is Vice Chairperson for Disaster Preparedness.",
        "The Secretary of Social Welfare and Development": "The DSWD Secretary is Vice Chairperson for Disaster Response.",
        "The Director-General of the National Economic and Development Authority": "The NEDA Director-General is Vice Chairperson for Disaster Rehabilitation and Recovery."
      },
      "tip": "NDRRMC vice-chairs: \"Prepare–Respond–Prevent–Recover\" = DILG–DSWD–DOST–NEDA; DND leads."
    },
    "src": [
      {
        "label": "R.A. 10121, Section 5",
        "url": "https://lawphil.net/statutes/repacts/ra2010/ra_10121_2010.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "average",
    "t": "Environment Management and Protection",
    "q": "Under the Expanded National Integrated Protected Areas System Act of 2018 (R.A. 11038, amending R.A. 7586), who chairs the Protected Area Management Board (PAMB)?",
    "o": [
      "The governor of the province where the protected area is located",
      "The mayor of the municipality where the protected area is located",
      "The DENR Regional Director under whose jurisdiction the protected area is located",
      "A Senator who is a registered resident of the province"
    ],
    "a": 2,
    "e": "Section 11 of R.A. 7586, as amended by Section 9 of R.A. 11038, provides that the PAMB is chaired by the DENR Regional Director under whose jurisdiction the protected area is located.",
    "x": {
      "steps": [
        "Section 11 of R.A. 7586 (as amended by R.A. 11038): a PAMB is created for each protected area.",
        "Chairperson: the DENR Regional Director with jurisdiction over the area.",
        "Members include governors, a resident Senator, district representatives, mayors, barangay chairpersons, regional directors of certain agencies, and representatives of NGOs/POs, indigenous peoples, the academe and the private sector."
      ],
      "wrong": {
        "The governor of the province where the protected area is located": "The governor is a member of the PAMB, not its Chairperson.",
        "The mayor of the municipality where the protected area is located": "The mayor is a member of the PAMB, not its Chairperson.",
        "A Senator who is a registered resident of the province": "Such a Senator is a member of the PAMB unless he declines, but not its Chairperson."
      },
      "tip": "PAMB is led by the DENR — through its Regional Director."
    },
    "src": [
      {
        "label": "R.A. 11038, Section 9 (amending R.A. 7586, Section 11)",
        "url": "https://lawphil.net/statutes/repacts/ra2018/ra_11038_2018.html"
      },
      {
        "label": "R.A. 7586 (original text)",
        "url": "https://lawphil.net/statutes/repacts/ra1992/ra_7586_1992.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "difficult",
    "t": "Environment Management and Protection",
    "q": "Rangers inside a marine protected area find a boat carrying fishing gear that destroys coral reefs, although no one saw the crew using it. Under R.A. 7586 as amended by R.A. 11038, what is the legal effect of this finding?",
    "o": [
      "There is no violation, because no one saw the crew use the gear",
      "There is a violation only if damaged coral is found on board",
      "Mere possession of such gear within the protected area is prima facie evidence of its use",
      "There is a violation only if the boat is foreign-owned"
    ],
    "a": 2,
    "e": "Section 20(e) of R.A. 7586, as amended by R.A. 11038, prohibits using fishing gear that destroys coral reefs, seagrass beds or other marine life within protected areas, and provides that mere possession of such gear within the protected area is prima facie evidence of its use.",
    "x": {
      "steps": [
        "Section 20 of R.A. 7586 (as amended by Section 18 of R.A. 11038) lists prohibited acts in protected areas.",
        "Item (e): using fishing or harvesting gear and practices that destroy coral reefs, seagrass beds or other marine life and their habitats.",
        "It adds that mere possession of such gear within the protected area is prima facie evidence of its use — so the crew is presumed to have used it unless they prove otherwise."
      ],
      "wrong": {
        "There is no violation, because no one saw the crew use the gear": "Section 20(e) as amended treats mere possession inside the protected area as prima facie evidence of use.",
        "There is a violation only if damaged coral is found on board": "The law does not require damaged coral to be found; possession of the gear inside the area is enough as prima facie evidence.",
        "There is a violation only if the boat is foreign-owned": "Section 20 applies to everyone; ownership of the boat is irrelevant."
      },
      "tip": "In a protected area, \"carrying is like using\" destructive gear."
    },
    "src": [
      {
        "label": "R.A. 11038, Section 18 (amending R.A. 7586, Section 20(e))",
        "url": "https://lawphil.net/statutes/repacts/ra2018/ra_11038_2018.html"
      }
    ]
  },
  {
    "c": "general",
    "d": "difficult",
    "t": "Environment Management and Protection",
    "q": "Fishermen in a coastal town outside Palawan accidentally catch a dugong. Under the Wildlife Resources Conservation and Protection Act (R.A. 9147), which department has jurisdiction over the dugong?",
    "o": [
      "The Department of Agriculture (DA), because the dugong is a marine mammal",
      "The Department of Environment and Natural Resources (DENR)",
      "The Department of the Interior and Local Government (DILG)",
      "The Department of Science and Technology (DOST)"
    ],
    "a": 1,
    "e": "Section 4 of R.A. 9147 gives the DENR jurisdiction over all terrestrial plant and animal species, all turtles and tortoises and wetland species, including crocodiles, waterbirds, all amphibians and dugong; the DA has jurisdiction over all aquatic resources and all marine mammals except dugong.",
    "x": {
      "steps": [
        "Section 4: the DENR has jurisdiction over terrestrial species, turtles and tortoises, and wetland species including crocodiles, waterbirds, amphibians and the dugong.",
        "The DA has jurisdiction over declared aquatic critical habitats and all aquatic resources, including all marine mammals except the dugong.",
        "In Palawan, this jurisdiction is vested in the Palawan Council for Sustainable Development. Outside Palawan, the dugong is under the DENR."
      ],
      "wrong": {
        "The Department of Agriculture (DA), because the dugong is a marine mammal": "The DA has jurisdiction over all marine mammals except dugong; the dugong is expressly placed under the DENR.",
        "The Department of the Interior and Local Government (DILG)": "Section 4 divides wildlife jurisdiction only between the DENR and the DA (with the PCSD for Palawan).",
        "The Department of Science and Technology (DOST)": "Section 4 does not give wildlife jurisdiction to the DOST."
      },
      "tip": "Dugong is the \"exception mammal\" — it goes to DENR, not DA."
    },
    "src": [
      {
        "label": "R.A. 9147, Section 4",
        "url": "https://lawphil.net/statutes/repacts/ra2001/ra_9147_2001.html"
      }
    ]
  }
]
