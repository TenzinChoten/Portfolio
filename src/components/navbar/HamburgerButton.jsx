import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const lineTransition = { duration: 0.3, ease: [0.22, 1, 0.36, 1] }

export default function HamburgerButton({
  isOpen,
  onToggle,
  className,
  controlsId,
}) {
  return (
    <button
      type="button"
      className={cn(
        'relative z-50 flex size-10 items-center justify-center rounded-full text-neutral-900 outline-none transition-colors',
        'hover:bg-neutral-200/60',
        'focus-visible:ring-2 focus-visible:ring-neutral-900/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        className,
      )}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
    >
      <span className="sr-only">
        {isOpen ? 'Close menu' : 'Open menu'}
      </span>
      <span className="relative flex size-5 flex-col items-center justify-center">
        <motion.span
          className="absolute h-[1.5px] w-5 rounded-full bg-neutral-900"
          animate={
            isOpen
              ? { rotate: 45, y: 0, width: 20 }
              : { rotate: 0, y: -6, width: 20 }
          }
          transition={lineTransition}
        />
        <motion.span
          className="absolute h-[1.5px] rounded-full bg-neutral-900"
          animate={
            isOpen
              ? { opacity: 0, scaleX: 0, width: 0 }
              : { opacity: 1, scaleX: 1, width: 14 }
          }
          transition={lineTransition}
        />
        <motion.span
          className="absolute h-[1.5px] w-5 rounded-full bg-neutral-900"
          animate={
            isOpen
              ? { rotate: -45, y: 0, width: 20 }
              : { rotate: 0, y: 6, width: 20 }
          }
          transition={lineTransition}
        />
      </span>
    </button>
  )
}
