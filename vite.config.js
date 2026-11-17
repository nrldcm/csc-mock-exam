import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// base './' keeps every path relative, so the build works on any host,
// in a sub-folder, or inside a Capacitor (Android/iOS) wrapper.
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Registered in main.jsx, and skipped inside the Android app (files are already bundled there)
      injectRegister: false,
      includeAssets: ['favicon.ico', 'apple-touch-icon-180x180.png', 'icon.svg'],
      manifest: {
        name: 'CSC Mock Exam',
        short_name: 'CSC Exam',
        description: 'Civil Service Professional and Subprofessional mock exam and reviewer. Works offline.',
        lang: 'en',
        theme_color: '#1F3A68',
        background_color: '#F3F5F8',
        display: 'standalone',
        orientation: 'any',
        start_url: './',
        scope: './',
        icons: [
          { src: 'pwa-64x64.png', sizes: '64x64', type: 'image/png' },
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'maskable-icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff,woff2}']
      }
    })
  ]
})
