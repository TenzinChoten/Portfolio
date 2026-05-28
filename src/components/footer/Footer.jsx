import { BRAND } from '../../data/brand'
import { cn } from '../../utils/cn'

const SECTION_INSET = 'px-6 sm:px-10 lg:px-14 xl:px-16'

export default function Footer() {
  const year = new Date().getFullYear()
  const fullName = `${BRAND.firstName} ${BRAND.lastName}`

  return (
    <footer
      className={cn('border-t border-border bg-page py-8', SECTION_INSET)}
      aria-label="Site footer"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-sans text-[0.85rem] text-ink-muted">
          © {year} {fullName}. Built with ❤️
        </p>
        <a
          href="#home"
          className={cn(
            'font-sans text-[0.85rem] font-medium text-ink-muted',
            'transition-colors duration-200 hover:text-ink',
            'focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-page focus-visible:outline-none',
          )}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
