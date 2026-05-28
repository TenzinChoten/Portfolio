import { ANALYTICS_EVENTS } from '../utils/analytics'

export const CONTACT = {
  label: 'Get in touch',
  title: 'Contact',
  headline:
    'Have a role, project, or collaboration in mind? I’d love to hear from you.',
  connectHeading: 'Let’s connect and create something awesome.',
  connectBody:
    'Whether you’re hiring for a full stack role, looking for a collaborator on a web or mobile build, or just want to chat about backend systems, APIs, and shipping real products — I’d love to hear from you.',
  email: 'tenzinchoten5@gmail.com',
  emailAnalyticsEvent: ANALYTICS_EVENTS.email,
  socialLinks: [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'tenzin-choten',
      href: 'https://www.linkedin.com/in/tenzin-choten/',
      analyticsEvent: ANALYTICS_EVENTS.linkedin,
    },
    {
      id: 'github',
      name: 'GitHub',
      handle: '@TenzinChoten',
      href: 'https://github.com/TenzinChoten',
      analyticsEvent: ANALYTICS_EVENTS.github,
    },
  ],
}
