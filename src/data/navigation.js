import { ANALYTICS_EVENTS } from '../utils/analytics'

export const NAV_LINKS = [
  {
    id: 'about',
    label: 'About',
    href: '#about',
    analyticsEvent: ANALYTICS_EVENTS.about,
  },
  {
    id: 'experience',
    label: 'Experience',
    href: '#experience',
    analyticsEvent: ANALYTICS_EVENTS.experience,
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '#projects',
    analyticsEvent: ANALYTICS_EVENTS.projects,
  },
]

export const CONTACT_CTA = {
  id: 'contact',
  label: 'Contact',
  href: '#contact',
  analyticsEvent: ANALYTICS_EVENTS.contact,
}

export const SECTION_IDS = [
  'home',
  ...NAV_LINKS.map((item) => item.id),
  CONTACT_CTA.id,
]
