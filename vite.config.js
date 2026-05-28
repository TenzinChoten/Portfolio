import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function umamiAnalyticsPlugin(websiteId) {
  return {
    name: 'umami-analytics',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (ctx.server || !websiteId) return html
        const snippet = `    <script defer src="https://cloud.umami.is/script.js" data-website-id="${websiteId}"></script>`
        return html.replace('</head>', `${snippet}\n  </head>`)
      },
    },
  }
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const umamiWebsiteId = env.VITE_UMAMI_WEBSITE_ID

  return {
    base: command === 'serve' ? '/' : '/Portfolio/',
    plugins: [react(), tailwindcss(), umamiAnalyticsPlugin(umamiWebsiteId)],
  }
})
