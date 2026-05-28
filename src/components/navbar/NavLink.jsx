import { useCallback } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'
import { umamiEventProps } from '../../utils/analytics'
import { scrollToSection } from '../../utils/scrollToSection'

export default function NavLink({
  href,
  label,
  isActive,
  onClick,
  analyticsEvent,
  className,
  layout = 'desktop',
}) {
  const isDesktop = layout === 'desktop'

  const handleClick = useCallback(
    (event) => {
      const hash = href?.startsWith('#') ? href.slice(1) : null
      if (hash) {
        event.preventDefault()
        scrollToSection(hash)
      }
      onClick?.(event)
    },
    [href, onClick],
  )

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      {...umamiEventProps(analyticsEvent)}
      className={cn(
        'outline-none transition-colors duration-300',
        'focus-visible:ring-2 focus-visible:ring-neutral-900/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        isDesktop
          ? 'text-[0.85rem] font-medium tracking-[0.02em] text-ink-muted hover:text-ink'
          : 'block w-full rounded-lg px-3 py-3 text-base font-medium text-ink-muted hover:bg-accent-light hover:text-ink',
        isActive &&
          (isDesktop ? 'text-ink' : 'bg-accent-light font-medium text-ink'),
        className,
      )}
      whileHover={isDesktop ? { y: -1 } : undefined}
      transition={{ duration: 0.2 }}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </motion.a>
  )
}
