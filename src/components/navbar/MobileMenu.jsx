import { AnimatePresence, motion } from 'framer-motion'
import { CONTACT_CTA, NAV_LINKS } from '../../data/navigation'
import { mobileMenuItem, mobileMenuVariants } from '../../animations/navbar'
import NavLink from './NavLink'
import NavContactButton from './NavContactButton'

const MENU_ID = 'mobile-nav-menu'

export default function MobileMenu({
  isOpen,
  activeSection,
  onNavigate,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onNavigate}
            aria-hidden
          />
          <motion.nav
            id={MENU_ID}
            className="fixed inset-x-0 top-[4.5rem] z-40 border-b border-neutral-200/80 bg-white px-6 py-6 shadow-lg lg:hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((item, index) => (
                <motion.li
                  key={item.id}
                  custom={index}
                  variants={mobileMenuItem}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <NavLink
                    href={item.href}
                    label={item.label}
                    isActive={activeSection === item.id}
                    onClick={onNavigate}
                    layout="mobile"
                  />
                </motion.li>
              ))}
              <motion.li
                custom={NAV_LINKS.length}
                variants={mobileMenuItem}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <NavContactButton
                  href={CONTACT_CTA.href}
                  label={CONTACT_CTA.label}
                  layout="mobile"
                  onClick={onNavigate}
                />
              </motion.li>
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}

export { MENU_ID }
