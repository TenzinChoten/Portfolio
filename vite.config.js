import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// [Reason] Base path switches for GitHub Pages project-site deploys vs local dev
const base =
  process.env.GITHUB_PAGES === 'true'
    ? `/${process.env.GITHUB_REPOSITORY_NAME || 'Portfolio'}/`
    : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
