import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Fonts are bundled so the app looks the same offline
import '@fontsource/public-sans/latin-400.css'
import '@fontsource/public-sans/latin-600.css'
import '@fontsource/public-sans/latin-700.css'
import '@fontsource/public-sans/latin-800.css'
import '@fontsource/public-sans/latin-ext-400.css'
import '@fontsource/public-sans/latin-ext-700.css'
import '@fontsource/source-serif-4/latin-400.css'
import '@fontsource/source-serif-4/latin-700.css'
import './styles.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)

const isNative = !!window.Capacitor?.isNativePlatform?.()
if (isNative) {
  // Android app: keep content below the status bar and color it to match the header
  import('@capacitor/status-bar').then(({ StatusBar, Style }) => {
    StatusBar.setOverlaysWebView({ overlay: false }).catch(() => {})
    StatusBar.setBackgroundColor({ color: '#1F3A68' }).catch(() => {})
    StatusBar.setStyle({ style: Style.Dark }).catch(() => {})
  }).catch(() => {})
} else {
  // Website: offline support and "Install app"
  import('virtual:pwa-register').then(({ registerSW }) => registerSW({ immediate: true })).catch(() => {})
}

// Fade out the splash loader from index.html once the app has painted
requestAnimationFrame(() => {
  const s = document.getElementById('splash')
  if (s) { s.classList.add('out'); setTimeout(() => s.remove(), 350) }
})
