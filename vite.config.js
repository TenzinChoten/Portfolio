import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// [Reason] Repo is "Portfolio" (capital P); paths must match GitHub Pages URL exactly
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/Portfolio/',
  plugins: [react(), tailwindcss()],
}))
