import { motion } from 'framer-motion'
import { BRAND } from '../../data/brand'
import { cn } from '../../utils/cn'

export default function NavBrand({ className }) {
  return (
    <motion.a
      href={BRAND.homeHref}
      className={cn(
        'inline shrink-0 rounded-lg font-display text-[1.35rem] leading-none tracking-[-0.02em] outline-none',
        'focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:ring-offset-2 focus-visible:ring-offset-page',
        className,
      )}
      aria-label={`${BRAND.firstName} ${BRAND.lastName} — home`}
      whileHover={{ opacity: 0.85 }}
      transition={{ duration: 0.2 }}
    >
      <span className="font-bold text-ink">{BRAND.firstName}</span>
      {/* [Reason] Two spaces between names so Tenzin and Choten read clearly apart */}
      {'  '}
      <span className="font-normal text-ink-muted">{BRAND.lastName}</span>
    </motion.a>
  )
}
