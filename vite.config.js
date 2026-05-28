import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const UMAMI_WEBSITE_ID = '74c1b732-303f-47be-b3bc-438be12b1cf7'

// [Reason] Inject Umami in built HTML so link events fire before React boots; skip in dev
function umamiAnalyticsPlugin() {
  return {
    name: 'umami-analytics',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (ctx.server) return html
        const snippet = `    <script defer src="https://cloud.umami.is/script.js" data-website-id="${UMAMI_WEBSITE_ID}"></script>`
        return html.replace('</head>', `${snippet}\n  </head>`)
      },
    },
  }
}

// [Reason] Repo is "Portfolio" (capital P); paths must match GitHub Pages URL exactly
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/Portfolio/',
  plugins: [react(), tailwindcss(), umamiAnalyticsPlugin()],
}))
