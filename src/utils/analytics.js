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

// [Reason] Umami waits for the beacon before mailto/external navigation; onClick-only tracking often drops those events
export function umamiEventProps(eventName) {
  if (!eventName) return {}
  return { 'data-umami-event': eventName }
}
