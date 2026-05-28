import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// [Reason] Load Umami only in production so Vite dev is not blocked by the external script
if (import.meta.env.PROD) {
  const umami = document.createElement('script')
  umami.defer = true
  umami.src = 'https://cloud.umami.is/script.js'
  umami.dataset.websiteId = '74c1b732-303f-47be-b3bc-438be12b1cf7'
  document.head.appendChild(umami)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
