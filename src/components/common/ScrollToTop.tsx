import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface ScrollToTopProps {
  smooth?: boolean
  delay?: number
}

export function ScrollToTop({ smooth = true, delay = 100 }: ScrollToTopProps = {}) {
  const { pathname } = useLocation()

  useEffect(() => {
    // Small delay to ensure the DOM has rendered and animations have started
    const scrollTimer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? 'smooth' : 'instant'
      })
    }, delay)

    // Cleanup timer on unmount or route change
    return () => clearTimeout(scrollTimer)
  }, [pathname, smooth, delay])

  return null
}
