# CSC Mock Exam and Reviewer

React + Vite progressive web app (PWA) for the Philippine Civil Service Commission Career Service Examination,
Professional and Subprofessional levels. Installable on phones and tablets, works offline, and keeps all data on the device.

Developed by Norell Mantilla — https://linkedin.com/in/nrldcm

> Independent study aid. Not affiliated with or endorsed by the Civil Service Commission. Practice items are original, not actual exam questions.

## Features

- **Realistic mock exam** following CSC Examination Advisory No. 10, s. 2026: 150 test items / 3 h 10 min (Professional), 145 / 2 h 40 min (Subprofessional) — the official 170/165 totals include 20 unscored EDQ items. OMR-style answer sheet, flags, auto-submit
- **Every item labeled with its official CSC topic**; General Information items link to the law or Constitution text they are based on (Lawphil, UN)
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

## CI/CD (GitHub Actions)

`.github/workflows/build-apk.yml` (keep this file name: its run number is the Android versionCode):

1. **Regression tests**: `npm test` (logic: items, explanations, sources, generators, exam builder, backup) and `npx playwright test` (the built app clicked through at phone and tablet sizes).
2. Only if the tests pass: **signed Android APK** published as a GitHub Release `v1.0.<run>`, and the **web app** deployed to GitHub Pages.

Pull requests run the tests only.

### One-time setup

1. **Release signing:** Settings → Secrets and variables → Actions → New repository secret
   `ANDROID_KEYSTORE_PASSWORD` = a long random password (save it in your password manager).
   The first build creates the signing key, encrypts it with this password (AES-256) and commits
   `signing/release.keystore.enc`. Later builds reuse it, so new releases install as updates and keep user data.
   Without the secret the workflow builds a debug APK.
2. **Pages:** Settings → Pages → Build and deployment → Source: **GitHub Actions**.

Do not delete `signing/release.keystore.enc` or change the password: a new key means users must uninstall to update.

## Android APK on your own machine (optional)

Requires a JDK 21 and the Android SDK.

```bash
npm install && npm run build
npx cap add android
node tools/native-assets.cjs && npx @capacitor/assets generate --android
npx cap sync android && npx cap open android
```

## Project layout

```
src/data/bank.js, bank2.js   written items (append new items at the END: ids are positions)
src/data/generators.js       unlimited item generators
src/data/notes.js            study notes
src/lib/                     config, exam engine, storage, progress/backup
src/components/              screens and shared UI
```
