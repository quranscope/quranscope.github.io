import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    // Plugin to create .nojekyll file for GitHub Pages
    {
      name: 'create-nojekyll',
      closeBundle() {
        if (command === 'build') {
          writeFileSync(resolve(__dirname, 'dist', '.nojekyll'), '')
        }
      }
    }
  ],
  // Use root path for organization GitHub Pages (quranscope.github.io)
  base: '/',
}))
