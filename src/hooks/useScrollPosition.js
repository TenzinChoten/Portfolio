import { useEffect, useState } from 'react'

const SCROLL_THRESHOLD = 24

// [Reason] Drive navbar glass background when user scrolls past the hero
export function useScrollPosition(threshold = SCROLL_THRESHOLD) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > threshold)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return isScrolled
}
