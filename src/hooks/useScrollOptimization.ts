import { useEffect, useState, useCallback, useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

interface AnimationConfig {
  transition?: {
    duration?: number
    ease?: string
    [key: string]: unknown
  }
  [key: string]: unknown
}

interface ScrollOptimizationOptions {
  threshold?: number
  debounceMs?: number
  enableScrollSnap?: boolean
}

export function useScrollOptimization({
  threshold = 5,
  debounceMs = 16,
  enableScrollSnap = false
}: ScrollOptimizationOptions = {}) {
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)
  const [shouldPauseAnimations, setShouldPauseAnimations] = useState(false)
  
  const lastScrollY = useRef(0)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)
  const animationFrame = useRef<number | null>(null)
  
  const scrollY = useMotionValue(0)
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 400,
    damping: 40,
    mass: 0.1
  })

  const handleScroll = useCallback(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current)
    }

    animationFrame.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY
      const deltaY = currentScrollY - lastScrollY.current

      // Detectar direção do scroll
      if (Math.abs(deltaY) > threshold) {
        setScrollDirection(deltaY > 0 ? 'down' : 'up')
        setIsScrolling(true)
        
        // Pausar animações desnecessárias durante scroll rápido
        if (Math.abs(deltaY) > threshold * 3) {
          setShouldPauseAnimations(true)
        }
      }

      scrollY.set(currentScrollY)
      lastScrollY.current = currentScrollY

      // Debounce para detectar fim do scroll
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false)
        setShouldPauseAnimations(false)
        setScrollDirection(null)
      }, debounceMs)
    })
  }, [scrollY, threshold, debounceMs])

  useEffect(() => {
    let rafId: number

    const optimizedScrollHandler = () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      rafId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [handleScroll])
  // Scroll Snap functionality
  useEffect(() => {
    if (!enableScrollSnap) return

    let snapTimeout: NodeJS.Timeout

    const handleScrollEnd = () => {
      if (snapTimeout) clearTimeout(snapTimeout)
      
      snapTimeout = setTimeout(() => {
        const scrollSections = document.querySelectorAll('[data-scroll-snap]')
        const viewportHeight = window.innerHeight
        const scrollTop = window.scrollY

        let closestSection: Element | null = null
        let closestDistance = Infinity

        scrollSections.forEach((section: Element) => {
          const rect = section.getBoundingClientRect()
          const sectionTop = scrollTop + rect.top
          const distance = Math.abs(sectionTop - scrollTop)

          if (distance < closestDistance && distance < viewportHeight / 2) {
            closestDistance = distance
            closestSection = section
          }
        })

        if (closestSection) {
          const rect = (closestSection as HTMLElement).getBoundingClientRect()
          const targetScroll = scrollTop + rect.top

          window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
          })
        }
      }, 150)
    }

    if (!isScrolling) {
      handleScrollEnd()
    }

    return () => {
      if (snapTimeout) clearTimeout(snapTimeout)
    }
  }, [isScrolling, enableScrollSnap])

  return {
    isScrolling,
    scrollDirection,
    shouldPauseAnimations,
    scrollY: smoothScrollY,
    rawScrollY: scrollY
  }
}

// Hook para otimizar animações baseado no scroll
export function useScrollAnimationOptimization() {
  const { isScrolling, shouldPauseAnimations, scrollDirection } = useScrollOptimization({
    threshold: 3,
    debounceMs: 100
  })

  const getAnimationConfig = useCallback((baseConfig: AnimationConfig) => {
    if (shouldPauseAnimations) {
      return {
        ...baseConfig,
        transition: {
          ...baseConfig.transition,
          duration: 0.1, // Animações muito rápidas durante scroll
          ease: 'linear'
        }
      }
    }

    if (isScrolling) {
      return {
        ...baseConfig,
        transition: {
          ...baseConfig.transition,
          duration: (baseConfig.transition?.duration || 0.5) * 0.5, // Reduz duração
          ease: 'easeOut'
        }
      }
    }

    return baseConfig
  }, [isScrolling, shouldPauseAnimations])

  return {
    isScrolling,
    scrollDirection,
    shouldPauseAnimations,
    getAnimationConfig
  }
}

// Hook para virtual scrolling (para listas longas)
export function useVirtualScrolling(itemHeight: number, containerHeight: number, totalItems: number) {
  const [scrollTop, setScrollTop] = useState(0)
  const isVirtualizing = totalItems > 50

  const visibleStartIndex = Math.floor(scrollTop / itemHeight)
  const visibleEndIndex = Math.min(
    visibleStartIndex + Math.ceil(containerHeight / itemHeight) + 1,
    totalItems - 1
  )

  const offsetY = visibleStartIndex * itemHeight
  const totalHeight = totalItems * itemHeight

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }, [])

  return {
    visibleStartIndex,
    visibleEndIndex,
    offsetY,
    totalHeight,
    handleScroll,
    isVirtualizing
  }
}
