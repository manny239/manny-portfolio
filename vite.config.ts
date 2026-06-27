import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // The 3D scene (three.js) is lazy-loaded into its own chunk, so a slightly
    // higher warning limit keeps the build output clean.
    chunkSizeWarningLimit: 900,
  },
})
