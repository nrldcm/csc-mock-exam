# CSC Mock Exam and Reviewer

React + Vite progressive web app (PWA) for the Philippine Civil Service Commission Career Service Examination,
Professional and Subprofessional levels. Installable on phones and tablets, works offline, and keeps all data on the device.

Developed by Norell Mantilla — https://linkedin.com/in/nrldcm

> Independent study aid. Not affiliated with or endorsed by the Civil Service Commission. Practice items are original, not actual exam questions.

## Features

- **Realistic mock exam**: 170 items / 3 h 10 min (Professional), 165 items / 2 h 40 min (Subprofessional), OMR-style answer sheet, flags, auto-submit
- **Practice modes**: practice with answers, unlimited practice, weakest-subject drill, per-subject practice, daily trivia
- **Study notes**: lessons for every part of the coverage (verbal, Filipino, numerical, analytical, clerical, Constitution, RA 6713, peace and human rights, environment)
- **Reviewer**: ~400 written items with explanations + unlimited generated items (math, logic and clerical answers are computed)
- **Sessions saved on the device** (localStorage, persistent-storage request), with **backup to a file and restore**
- Streaks, points, ranks, achievements, exam-date countdown
- Mobile and tablet layouts, dark mode, safe areas, bottom navigation, Android back button, keyboard shortcuts (A–D, F, arrows), screen wake lock during exams
- Splash loader and skeleton screens while views load

## Run

```bash
npm install
npm run dev        # open the "Network" URL on a phone on the same Wi-Fi
npm run build      # generates icons, builds to dist/
npm run preview    # serve the production build
```

Installing as an app (and offline mode) needs **HTTPS**. Host `dist/` on any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages),
open it on the phone, then **Install app / Add to Home screen**.

## Android APK (optional)

The build uses relative paths, so it can be wrapped with Capacitor. Requires Android Studio and a JDK.

```bash
npm i @capacitor/core @capacitor/cli @capacitor/android
npx cap init "CSC Mock Exam" ph.csc.mockexam --web-dir dist
npm run build && npx cap add android && npx cap copy && npx cap open android
```

Alternatively, enter the hosted HTTPS URL at pwabuilder.com to generate an Android package.

## Project layout

```
src/data/bank.js, bank2.js   written items (append new items at the END: ids are positions)
src/data/generators.js       unlimited item generators
src/data/notes.js            study notes
src/lib/                     config, exam engine, storage, progress/backup
src/components/              screens and shared UI
```
