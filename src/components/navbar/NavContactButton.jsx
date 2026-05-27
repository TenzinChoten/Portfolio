import { useCallback } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'
import { scrollToSection } from '../../utils/scrollToSection'

export default function NavContactButton({
  href,
  label,
  className,
  onClick,
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
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-ink font-sans text-[0.85rem] font-medium text-page outline-none transition-[transform,box-shadow] duration-200',
        'hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]',
        'focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-page',
        isDesktop
          ? 'px-[1.3rem] py-[0.55rem]'
          : 'w-full px-6 py-3.5 text-base',
        className,
      )}
      whileHover={isDesktop ? { scale: 1.03 } : undefined}
      whileTap={isDesktop ? { scale: 0.98 } : undefined}
    >
      {label}
    </motion.a>
  )
}
