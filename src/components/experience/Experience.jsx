import { motion } from 'framer-motion'
import { EXPERIENCE } from '../../data/experience'
import { heroItem } from '../../animations/hero'
import { cn } from '../../utils/cn'

const SECTION_INSET = 'px-6 sm:px-10 lg:px-14 xl:px-16'

function ExpTag({ label }) {
  return (
    <span className="rounded-full bg-[#f5f4f2] px-3 py-[0.3rem] font-sans text-[0.72rem] font-medium text-ink">
      {label}
    </span>
  )
}

function ExperienceCard({ company, meta, role, paragraphs, tags }) {
  return (
    <article
      className={cn(
        'grid grid-cols-1 gap-4 rounded-2xl border border-border bg-white p-6 sm:p-8',
        'transition-[border-color,transform] duration-200',
        'hover:-translate-y-0.5 hover:border-accent',
        'md:grid-cols-[200px_1fr] md:gap-10',
      )}
    >
      <div className="pt-1 font-sans text-[0.8rem] text-ink-muted">
        <span className="mb-1 block font-display text-[1.05rem] font-semibold text-ink">
          {company}
        </span>
        {meta ? <span>{meta}</span> : null}
      </div>

      <div>
        <h3 className="mb-2 font-sans text-base font-semibold text-ink">{role}</h3>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="mb-4 font-sans text-[0.9rem] leading-[1.7] text-ink-muted last:mb-0"
          >
            {paragraph}
          </p>
        ))}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <ExpTag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className={cn('snap-section border-t border-border bg-page py-16 sm:py-20 lg:py-24', SECTION_INSET)}
      aria-labelledby="experience-title"
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
            {EXPERIENCE.label}
          </p>
          <h2
            id="experience-title"
            className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-ink"
          >
            {EXPERIENCE.title}
          </h2>
          <p className="mt-2 max-w-[600px] font-sans text-[0.95rem] leading-[1.7] text-ink-muted">
            {EXPERIENCE.headline}
          </p>
        </motion.header>

        <div className="flex flex-col gap-6">
          {EXPERIENCE.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={heroItem}
              transition={{ delay: index * 0.05 }}
            >
              <ExperienceCard
                company={item.company}
                meta={item.meta}
                role={item.role}
                paragraphs={item.paragraphs}
                tags={item.tags}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
