import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PROJECTS } from '../../data/projects'
import { heroItem } from '../../animations/hero'
import { cn } from '../../utils/cn'

// [Reason] Match other sections for consistent left alignment and width
const SECTION_INSET = 'px-6 sm:px-10 lg:px-14 xl:px-16'

function ProjectTag({ label }) {
  return (
    <span className="rounded-full border border-border bg-[#f5f4f2] px-2.5 py-[0.2rem] font-sans text-[0.68rem] font-medium text-ink sm:px-3 sm:text-[0.72rem]">
      {label}
    </span>
  )
}

function ProjectCard({ title, description, tags, href }) {
  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-2xl border border-border bg-white',
        'transition-[border-color,transform] duration-200',
        // [Reason] Lift on hover without clipping card edges inside the projects grid
        'hover:-translate-y-1 hover:border-accent',
      )}
    >
      {/* [Reason] Compact padding so four cards fit in one viewport like the reference layout */}
      <div className="flex h-full flex-col p-5 sm:p-6">
        <h3 className="mb-1.5 font-display text-[1.05rem] font-semibold text-ink sm:text-[1.1rem]">
          {title}
        </h3>
        <p className="mb-3 flex-1 font-sans text-[0.8rem] leading-[1.55] text-ink-muted sm:text-[0.82rem] sm:leading-[1.6]">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <ProjectTag key={tag} label={tag} />
          ))}
        </div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 group inline-flex items-center gap-1.5 font-sans text-[0.82rem] font-semibold text-ink transition-[gap] duration-200 hover:gap-2.5"
          >
            View Project
            <ArrowRight className="size-3.5" strokeWidth={2.5} aria-hidden />
          </a>
        ) : null}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className={cn(
        'border-t border-border bg-page',
        // [Reason] On md+ fill one viewport and center the grid like the reference screenshot
        'md:snap-section md:flex md:min-h-[calc(100svh-4.5rem)] md:flex-col',
      )}
      aria-labelledby="projects-title"
    >
      {/* [Reason] Center header + 2×2 grid in one viewport when Projects nav is clicked */}
      <div
        className={cn(
          'py-12 sm:py-14 md:flex md:flex-1 md:flex-col md:justify-center md:py-8 lg:py-10',
          SECTION_INSET,
        )}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <motion.header
            className="mb-6 sm:mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={heroItem}
          >
            <p className="mb-2 font-sans text-[0.75rem] font-semibold tracking-[0.1em] text-ink-muted uppercase">
              {PROJECTS.label}
            </p>
            <h2
              id="projects-title"
              className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-ink"
            >
              {PROJECTS.title}
            </h2>
            <p className="mt-2 max-w-[600px] font-sans text-[0.95rem] leading-[1.7] text-ink-muted">
              {PROJECTS.headline}
            </p>
          </motion.header>

          <div className="grid grid-cols-1 items-stretch gap-4 overflow-visible md:grid-cols-2 md:gap-5">
            {PROJECTS.items.map((item, index) => (
              <motion.div
                key={item.id}
                className="h-full min-h-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={heroItem}
                transition={{ delay: index * 0.05 }}
              >
                <ProjectCard
                  title={item.title}
                  description={item.description}
                  tags={item.tags}
                  href={item.href}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
