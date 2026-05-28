import { motion } from 'framer-motion'
import { ABOUT } from '../../data/about'
import { heroItem } from '../../animations/hero'
import { cn } from '../../utils/cn'

const SECTION_INSET = 'px-6 sm:px-10 lg:px-14 xl:px-16'

function SkillTag({ label }) {
  return (
    <span
      className={cn(
        'rounded-full border border-border bg-[#f5f4f2] px-4 py-[0.45rem] font-sans text-[0.8rem] font-medium text-ink',
        'transition-[background-color,border-color,color] duration-200',
        'hover:border-accent hover:bg-accent hover:text-white',
      )}
    >
      {label}
    </span>
  )
}

function HighlightCard({ icon, title, description }) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-border bg-white p-6',
        'transition-[border-color,transform] duration-200',
        'hover:-translate-y-0.5 hover:border-accent',
      )}
    >
      <div className="mb-3 text-2xl" aria-hidden>
        {icon}
      </div>
      <h3 className="mb-1.5 font-sans text-[0.95rem] font-semibold text-ink">
        {title}
      </h3>
      <p className="font-sans text-[0.85rem] leading-[1.6] text-ink-muted">
        {description}
      </p>
    </article>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className={cn('snap-section border-t border-border bg-page py-16 sm:py-20 lg:py-24', SECTION_INSET)}
      aria-labelledby="about-title"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <motion.header
          className="mb-10 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={heroItem}
        >
          <p className="mb-2 font-sans text-[0.75rem] font-semibold tracking-[0.1em] text-ink-muted uppercase">
            {ABOUT.label}
          </p>
          <h2
            id="about-title"
            className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-ink"
          >
            {ABOUT.title}
          </h2>
          <p className="mt-2 max-w-[600px] font-sans text-[0.95rem] leading-[1.7] text-ink-muted">
            {ABOUT.headline}
          </p>
        </motion.header>

        <div className="flex flex-col gap-10 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={heroItem}
          >
            {ABOUT.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mb-5 font-sans text-base leading-[1.7] text-ink-muted last:mb-0"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8 flex flex-wrap gap-2.5">
              {ABOUT.skills.map((skill) => (
                <SkillTag key={skill} label={skill} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={heroItem}
          >
            {ABOUT.highlights.map((item) => (
              <HighlightCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
