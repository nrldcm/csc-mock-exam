import { defineConfig, minimal2023Preset as base } from '@vite-pwa/assets-generator/config'

// Generates the PNG app icons from public/icon.svg (run: npm run icons)
export default defineConfig({
  headLinkOptions: { preset: '2023' },
  preset: {
    ...base,
    maskable: { ...base.maskable, resizeOptions: { background: '#1F3A68' } },
    apple: { ...base.apple, resizeOptions: { background: '#1F3A68' } }
  },
  images: ['public/icon.svg']
})
