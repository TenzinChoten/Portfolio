import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { CONTACT } from '../../data/contact'
import { heroItem } from '../../animations/hero'
import Footer from '../footer'
import { cn } from '../../utils/cn'
import { umamiEventProps } from '../../utils/analytics'

const SECTION_INSET = 'px-6 sm:px-10 lg:px-14 xl:px-16'

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 4.126 0 2.063 2.063 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

const SOCIAL_ICONS = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
}

function SocialLinkCard({ name, handle, href, iconId, analyticsEvent }) {
  const Icon = SOCIAL_ICONS[iconId]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...umamiEventProps(analyticsEvent)}
      className={cn(
        'group flex items-center gap-4 rounded-2xl border border-border bg-white p-5',
        'transition-[border-color,transform,box-shadow] duration-200',
        'hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]',
        'focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-page focus-visible:outline-none',
      )}
    >
      <span
        className={cn(
          'flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#f5f4f2] text-ink',
          'transition-[background-color,color] duration-200 group-hover:bg-accent group-hover:text-white',
        )}
        aria-hidden
      >
        {Icon ? <Icon className="size-5" /> : null}
      </span>
      <span className="min-w-0">
        <span className="block font-sans text-[0.9rem] font-semibold text-ink">
          {name}
        </span>
        <span className="block truncate font-sans text-[0.8rem] text-ink-muted">
          {handle}
        </span>
      </span>
    </a>
  )
}

export default function Contact() {
  const mailtoHref = `mailto:${CONTACT.email}`

  return (
    <section
      id="contact"
      className={cn(
        'snap-section flex min-h-[calc(100svh-4.5rem)] flex-col border-t border-border bg-page',
      )}
      aria-labelledby="contact-title"
    >
      <div
        className={cn(
          'flex flex-1 flex-col justify-center py-16 sm:py-20 lg:py-24',
          SECTION_INSET,
        )}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={heroItem}
            >
              <p className="mb-2 font-sans text-[0.75rem] font-semibold tracking-[0.1em] text-ink-muted uppercase">
              {CONTACT.label}
            </p>
            <h2
              id="contact-title"
              className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] text-ink"
            >
              {CONTACT.title}
            </h2>
            <p className="mt-3 max-w-[520px] font-sans text-[0.95rem] leading-[1.7] text-ink-muted">
              {CONTACT.headline}
            </p>

            <h3 className="mt-10 font-display text-[clamp(1.35rem,2.5vw,1.75rem)] leading-[1.25] font-semibold tracking-[-0.02em] text-ink">
              {CONTACT.connectHeading}
            </h3>
            <p className="mt-4 max-w-[520px] font-sans text-[0.95rem] leading-[1.75] text-ink-muted">
              {CONTACT.connectBody}
            </p>

            <a
              href={mailtoHref}
              {...umamiEventProps(CONTACT.emailAnalyticsEvent)}
              className={cn(
                'mt-8 inline-flex items-center gap-2 font-sans text-[0.95rem] font-medium text-ink underline decoration-ink/30 underline-offset-4',
                'transition-[color,decoration-color] duration-200 hover:text-accent hover:decoration-accent',
                'focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-page focus-visible:outline-none',
              )}
            >
              <Mail className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
              {CONTACT.email}
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={heroItem}
          >
            <p className="mb-5 font-sans text-[0.85rem] font-semibold text-ink">
              Find me online
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CONTACT.socialLinks.map((link) => (
                <SocialLinkCard
                  key={link.id}
                  iconId={link.id}
                  name={link.name}
                  handle={link.handle}
                  href={link.href}
                  analyticsEvent={link.analyticsEvent}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      </div>
      <Footer />
    </section>
  )
}
