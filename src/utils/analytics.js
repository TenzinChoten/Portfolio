export const ANALYTICS_EVENTS = {
  about: 'About',
  experience: 'Experience',
  projects: 'Projects',
  contact: 'Contact',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  email: 'Email',
}

export function umamiEventProps(eventName) {
  if (!eventName) return {}
  return { 'data-umami-event': eventName }
}
