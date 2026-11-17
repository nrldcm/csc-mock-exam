/* In-app updates for the Android app (sideloaded from GitHub Releases).
   Each CI build publishes tag v1.0.<N> with versionCode N, signed with the same key,
   so a newer APK installs over the old one and keeps all data. */
import { ls } from './storage.js'

const REPO = 'nrldcm/csc-mock-exam'
export const RELEASES_URL = `https://github.com/${REPO}/releases/latest`
export const APK_URL = `https://github.com/${REPO}/releases/latest/download/CSC-Mock-Exam.apk`
const CACHE = 'csc-update-cache', DISMISS = 'csc-update-dismissed'
const EVERY = 10 * 60e3 // check on every launch; skip only if checked in the last 10 minutes (API limit is 60 requests/hour per device)

export const isNative = () => !!window.Capacitor?.isNativePlatform?.()

export async function appVersion() {
  if (!isNative()) return null
  try {
    const { App } = await import('@capacitor/app')
    const i = await App.getInfo()
    return { name: i.version, build: Number(i.build) || 0 }
  } catch { return null }
}

/* Returns { available, latest, build, current, url, notes } or null (web, offline, or error) */
export async function checkForUpdate({ force = false } = {}) {
  if (!isNative()) return null
  const current = await appVersion(); if (!current) return null
  let rel = ls.get(CACHE, null)
  if (force || !rel || Date.now() - rel.at > EVERY) {
    try {
      const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers: { Accept: 'application/vnd.github+json' }, cache: 'no-store' })
      if (!res.ok) throw new Error(`GitHub ${res.status}`)
      const j = await res.json()
      const asset = (j.assets || []).find(a => a.name?.endsWith('.apk'))
      const m = /(\d+)\s*$/.exec(j.tag_name || '')
      rel = { at: Date.now(), tag: j.tag_name, build: m ? Number(m[1]) : 0, url: asset?.browser_download_url || APK_URL, notes: j.body || '' }
      ls.set(CACHE, rel)
    } catch (e) {
      if (force) throw e
      if (!rel) return null
    }
  }
  return { available: rel.build > current.build, latest: rel.tag, build: rel.build, current, url: rel.url, notes: rel.notes }
}

/* Don't ask again about the same version on the same day after "Later" */
export const wasDismissed = info => ls.get(DISMISS, {})[info.latest] === new Date().toDateString()
export const dismiss = info => ls.set(DISMISS, { [info.latest]: new Date().toDateString() })

/* Opens the APK download. When it finishes, Android shows "Install update", and data is kept. */
export async function startUpdate(info) {
  const url = info?.url || APK_URL
  try { const { Browser } = await import('@capacitor/browser'); await Browser.open({ url }) }
  catch { window.open(url, '_blank') }
}
