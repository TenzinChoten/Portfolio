export const NAV_LINKS = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
]

export const CONTACT_CTA = {
  id: 'contact',
  label: 'Contact',
  href: '#contact',
}

// [Reason] Section ids for scroll-spy when sections are added
export const SECTION_IDS = [
  'home',
  ...NAV_LINKS.map((item) => item.id),
  CONTACT_CTA.id,
]
