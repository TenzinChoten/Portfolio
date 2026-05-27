export const navbarEntrance = {
  hidden: { y: -12, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

export const mobileMenuItem = {
  closed: { opacity: 0, x: -12 },
  open: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.04 + index * 0.04,
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}
