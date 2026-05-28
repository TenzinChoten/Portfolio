import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// [Reason] Repo is "Portfolio" so GitHub Pages URL is /Portfolio/ (case-sensitive); dev uses /
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/Portfolio/',
  plugins: [react(), tailwindcss()],
}))
