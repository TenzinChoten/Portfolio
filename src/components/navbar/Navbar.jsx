import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { CONTACT_CTA, NAV_LINKS } from '../../data/navigation'
import { navbarEntrance } from '../../animations/navbar'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { cn } from '../../utils/cn'
import Container from '../layout/Container'
import NavBrand from './NavBrand'
import NavLink from './NavLink'
import NavContactButton from './NavContactButton'
import HamburgerButton from './HamburgerButton'
import MobileMenu, { MENU_ID } from './MobileMenu'

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const isScrolled = useScrollPosition(8)
  const activeSection = useActiveSection()

  useLockBodyScroll(isMobileOpen)

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false)
  }, [])

  const toggleMobile = useCallback(() => {
    setIsMobileOpen((open) => !open)
  }, [])

  const handleNavClick = useCallback(() => {
    closeMobile()
  }, [closeMobile])

  return (
    <>
      <motion.header
        className={cn(
          'fixed inset-x-0 top-0 z-50 bg-page/85 backdrop-blur-2xl transition-[box-shadow,background-color,border-color] duration-400 ease-out',
          isScrolled && 'border-b border-border bg-page/95 shadow-none',
        )}
        variants={navbarEntrance}
        initial="hidden"
        animate="visible"
      >
        <Container
          as="div"
          className="flex h-[4.5rem] w-full max-w-none items-center px-6 sm:px-10 lg:px-14 xl:px-16"
        >
          {/* [Reason] Brand flush left; all nav items grouped flush right */}
          <NavBrand className="shrink-0" />

          <nav
            className="ml-auto hidden lg:block"
            aria-label="Primary navigation"
          >
            <ul className="flex items-center justify-end gap-8 xl:gap-10">
              {NAV_LINKS.map((item) => (
                <li key={item.id} className="shrink-0">
                  <NavLink
                    href={item.href}
                    label={item.label}
                    isActive={activeSection === item.id}
                    layout="desktop"
                  />
                </li>
              ))}
              <li className="shrink-0">
                <NavContactButton
                  href={CONTACT_CTA.href}
                  label={CONTACT_CTA.label}
                />
              </li>
            </ul>
          </nav>

          <div className="ml-auto shrink-0 lg:hidden">
            <HamburgerButton
              isOpen={isMobileOpen}
              onToggle={toggleMobile}
              controlsId={MENU_ID}
            />
          </div>
        </Container>
      </motion.header>

      <MobileMenu
        isOpen={isMobileOpen}
        activeSection={activeSection}
        onNavigate={handleNavClick}
      />

      {/* [Reason] Reserve space for fixed navbar */}
      <div className="h-[4.5rem]" aria-hidden />
    </>
  )
}
