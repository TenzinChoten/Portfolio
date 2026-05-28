// [Reason] One Umami event name per action so navbar, hero, and contact clicks share the same dashboard metric
export const ANALYTICS_EVENTS = {
  about: 'About',
  experience: 'Experience',
  projects: 'Projects',
  contact: 'Contact',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  email: 'Email',
}

const pending = []

function flushPending() {
  if (typeof window.umami?.track !== 'function') return
  while (pending.length > 0) {
    const { name, data } = pending.shift()
    window.umami.track(name, data)
  }
}

// [Reason] Umami loads async; flush queued clicks once the script is ready
export function onUmamiReady() {
  flushPending()
}

export function trackEvent(eventName, data) {
  if (!import.meta.env.PROD || !eventName) return
  if (typeof window.umami?.track === 'function') {
    window.umami.track(eventName, data)
    return
  }
  pending.push({ name: eventName, data })
}
