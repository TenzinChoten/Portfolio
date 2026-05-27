// [Reason] Scroll hash targets with navbar offset so section content is not clipped under the header
export function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (!section) {
    return
  }

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  const navOffset =
    Number.parseFloat(
      getComputedStyle(document.documentElement).scrollPaddingTop,
    ) || 72

  const top =
    window.scrollY + section.getBoundingClientRect().top - navOffset

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  })
}
