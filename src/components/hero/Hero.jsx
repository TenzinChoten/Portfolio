import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { HERO } from '../../data/hero'
import { heroContainer, heroItem } from '../../animations/hero'
import { cn } from '../../utils/cn'
import { trackEvent } from '../../utils/analytics'

// [Reason] Match navbar horizontal inset so hero copy aligns with the brand on the left
const HERO_INSET = 'px-6 sm:px-10 lg:px-14 xl:px-16'

function HeroBadge({ label }) {
  return (
    <motion.div
      variants={heroItem}
      className="mb-6 inline-flex items-center gap-2 font-sans text-[0.8rem] font-medium tracking-[0.06em] text-ink-muted uppercase"
    >
      <span
        className="size-2 shrink-0 rounded-full bg-accent"
        aria-hidden
      />
      <span>{label}</span>
    </motion.div>
  )
}

function HeroHeadline({ headline }) {
  return (
    <motion.h1
      id="hero-heading"
      variants={heroItem}
      className="mb-6 font-display text-[clamp(2.8rem,6vw,5rem)] leading-[1.1] font-bold tracking-[-0.03em] text-ink"
    >
      <span className="block">{headline.line1}</span>
      <span className="block">
        {headline.line2Prefix}
        <span className="bg-gradient-to-br from-accent to-[#c4a0ff] bg-clip-text text-transparent">
          {headline.highlight}
        </span>
      </span>
      <span className="block">
        & {headline.line3}
      </span>
    </motion.h1>
  )
}

function HeroCta({ cta }) {
  const isPrimary = cta.variant === 'primary'

  return (
    <motion.a
      href={cta.href}
      onClick={() => trackEvent(cta.analyticsEvent)}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-sans text-[0.9rem] font-medium outline-none transition-[transform,box-shadow,border-color,background-color] duration-200',
        'focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-page',
        isPrimary
          ? 'bg-ink px-[1.8rem] py-[0.85rem] text-page hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)]'
          : 'border-[1.5px] border-border bg-transparent px-[1.8rem] py-[0.85rem] text-ink hover:border-accent hover:bg-accent-light',
      )}
      whileTap={{ scale: 0.98 }}
    >
      {cta.label}
      {cta.showArrow ? (
        <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
      ) : null}
    </motion.a>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className={cn(
        'snap-section relative flex items-center bg-page pb-12 sm:pb-16',
        HERO_INSET,
      )}
      aria-labelledby="hero-heading"
    >
      {/* [Reason] Same max width as reference site keeps content left-aligned inside a centered column */}
      <motion.div
        className="mx-auto w-full max-w-[1200px] text-left"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <HeroBadge label={HERO.status} />
        <HeroHeadline headline={HERO.headline} />

        <motion.p
          variants={heroItem}
          className="mb-10 max-w-[580px] font-sans text-[1.15rem] leading-[1.8] font-normal text-ink-muted"
        >
          {HERO.description}
        </motion.p>

        <motion.div
          variants={heroItem}
          className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center"
        >
          {HERO.ctas.map((cta) => (
            <HeroCta key={cta.id} cta={cta} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
