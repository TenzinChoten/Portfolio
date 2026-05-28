import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// [Reason] GitHub Pages serves from /portfolio/; local dev uses / so localhost:5173/ works
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/portfolio/',
  plugins: [react(), tailwindcss()],
}))
