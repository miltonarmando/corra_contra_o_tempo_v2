import { useEffect, useState, useCallback, useRef } from 'react'
import { useInView } from 'framer-motion'

interface AnimationVariants {
  initial?: Record<string, unknown>
  animate?: Record<string, unknown>
  visible?: Record<string, unknown>
  transition?: {
    duration?: number
    ease?: string
    [key: string]: unknown
  }
  [key: string]: unknown
}

interface SmartScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  skipAnimationOnFastScroll?: boolean
  velocityThreshold?: number
}

export function useSmartScrollAnimation({
  threshold = 0.1,
  triggerOnce = true,
  skipAnimationOnFastScroll = true,
  velocityThreshold = 500
}: SmartScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { 
    amount: threshold, 
    once: triggerOnce
  })
  
  const [isAnimating, setIsAnimating] = useState(false)
  const [shouldSkipAnimation, setShouldSkipAnimation] = useState(false)
  const [scrollVelocity, setScrollVelocity] = useState(0)
  
  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(Date.now())

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    const currentTime = Date.now()
    const deltaY = Math.abs(currentScrollY - lastScrollY.current)
    const deltaTime = currentTime - lastScrollTime.current
    
    if (deltaTime > 0) {
      const velocity = deltaY / deltaTime * 1000 // pixels per second
      setScrollVelocity(velocity)
      
      if (skipAnimationOnFastScroll && velocity > velocityThreshold) {
        setShouldSkipAnimation(true)
      } else {
        setShouldSkipAnimation(false)
      }
    }
    
    lastScrollY.current = currentScrollY
    lastScrollTime.current = currentTime
  }, [skipAnimationOnFastScroll, velocityThreshold])

  useEffect(() => {
    let rafId: number
    
    const throttledScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      rafId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [handleScroll])

  useEffect(() => {
    if (isInView && !shouldSkipAnimation) {
      setIsAnimating(true)
      // Reset animation state after animation completes
      const timer = setTimeout(() => setIsAnimating(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [isInView, shouldSkipAnimation])

  const getOptimizedVariants = useCallback((baseVariants: AnimationVariants) => {
    if (shouldSkipAnimation) {
      return {
        initial: baseVariants.visible || baseVariants.animate,
        animate: baseVariants.visible || baseVariants.animate,
        transition: { duration: 0 }
      }
    }

    const speedMultiplier = Math.min(scrollVelocity / velocityThreshold, 1)
    const adjustedDuration = baseVariants.transition?.duration ? 
      baseVariants.transition.duration * (1 - speedMultiplier * 0.5) : 0.5

    return {
      ...baseVariants,
      transition: {
        ...baseVariants.transition,
        duration: Math.max(adjustedDuration, 0.1),
        ease: scrollVelocity > velocityThreshold * 0.5 ? 'easeOut' : 'easeInOut'
      }
    }
  }, [shouldSkipAnimation, scrollVelocity, velocityThreshold])

  return {
    ref,
    isInView,
    isAnimating,
    shouldSkipAnimation,
    scrollVelocity,
    getOptimizedVariants
  }
}

// Hook para lazy loading inteligente baseado no scroll
export function useIntelligentLazyLoad(loadOffset = 200) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldLoad) {
          setShouldLoad(true)
        }
      },
      {
        rootMargin: `${loadOffset}px`,
        threshold: 0
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [loadOffset, shouldLoad])

  const markAsLoaded = useCallback(() => {
    setIsLoaded(true)
  }, [])

  return {
    ref,
    shouldLoad,
    isLoaded,
    markAsLoaded
  }
}

// Hook para performance monitoring do scroll
export function useScrollPerformance() {
  const [metrics, setMetrics] = useState({
    fps: 0,
    averageFrameTime: 0,
    scrollJank: 0,
    isSmooth: true
  })

  const frameTimesRef = useRef<number[]>([])
  const lastFrameTimeRef = useRef(0)

  useEffect(() => {
    let animationId: number
    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout

    const measurePerformance = () => {
      const now = performance.now()
      
      if (lastFrameTimeRef.current > 0) {
        const frameTime = now - lastFrameTimeRef.current
        frameTimesRef.current.push(frameTime)
        
        // Keep only last 60 frames
        if (frameTimesRef.current.length > 60) {
          frameTimesRef.current.shift()
        }
        
        // Calculate metrics
        const avgFrameTime = frameTimesRef.current.reduce((a, b) => a + b, 0) / frameTimesRef.current.length
        const fps = 1000 / avgFrameTime
        const jankFrames = frameTimesRef.current.filter(time => time > 16.67).length
        const jankPercentage = (jankFrames / frameTimesRef.current.length) * 100
        
        setMetrics({
          fps: Math.round(fps),
          averageFrameTime: Math.round(avgFrameTime * 100) / 100,
          scrollJank: Math.round(jankPercentage),
          isSmooth: jankPercentage < 10 && fps > 45
        })
      }
      
      lastFrameTimeRef.current = now
      
      if (isScrolling) {
        animationId = requestAnimationFrame(measurePerformance)
      }
    }

    const handleScrollStart = () => {
      isScrolling = true
      clearTimeout(scrollTimeout)
      measurePerformance()
    }

    const handleScrollEnd = () => {
      scrollTimeout = setTimeout(() => {
        isScrolling = false
        if (animationId) {
          cancelAnimationFrame(animationId)
        }
      }, 150)
    }

    window.addEventListener('scroll', handleScrollStart, { passive: true })
    window.addEventListener('scroll', handleScrollEnd, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScrollStart)
      window.removeEventListener('scroll', handleScrollEnd)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [])

  return metrics
}

// Hook especializado para animações fluidas durante scroll
export function useFluidScrollAnimations() {
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollingTooFast, setScrollingTooFast] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const velocityRef = useRef(0)

  useEffect(() => {
    let lastScrollY = 0
    let lastTimestamp = Date.now()

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const currentTimestamp = Date.now()
      
      // Calcular velocidade
      const deltaY = Math.abs(currentScrollY - lastScrollY)
      const deltaTime = currentTimestamp - lastTimestamp
      const velocity = deltaY / deltaTime
      
      velocityRef.current = velocity
      
      // Determinar se está scrolling muito rápido
      setScrollingTooFast(velocity > 2) // threshold ajustável
      setIsScrolling(true)
      
      // Debounce para detectar fim do scroll
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
        setScrollingTooFast(false)
      }, 150)
      
      lastScrollY = currentScrollY
      lastTimestamp = currentTimestamp
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])
  const getAnimationVariants = useCallback((baseVariants: {
    transition?: { duration?: number; ease?: string; [key: string]: unknown }
    [key: string]: unknown
  }) => {
    if (scrollingTooFast) {
      // Skip heavy animations during fast scroll
      return {
        ...baseVariants,
        transition: { duration: 0.1, ease: 'linear' }
      }
    }

    if (isScrolling) {
      // Reduce animation duration during scroll
      return {
        ...baseVariants,
        transition: {
          ...(baseVariants.transition || {}),
          duration: (baseVariants.transition?.duration || 0.5) * 0.6,
          ease: 'easeOut'
        }
      }
    }

    return baseVariants
  }, [isScrolling, scrollingTooFast])

  return {
    isScrolling,
    scrollingTooFast,
    getAnimationVariants,
    velocity: velocityRef.current
  }
}

// Hook para preventing layout thrash durante scroll
export function useScrollLayoutOptimization() {
  const [isLayoutOptimized, setIsLayoutOptimized] = useState(false)
  const observerRef = useRef<ResizeObserver | null>(null)

  useEffect(() => {
    // Observer para detectar mudanças de layout durante scroll
    observerRef.current = new ResizeObserver((entries) => {
      let hasLayoutShift = false
      
      entries.forEach((entry) => {
        if (entry.contentBoxSize) {
          hasLayoutShift = true
        }
      })
      
      if (hasLayoutShift) {
        setIsLayoutOptimized(false)
        // Reoptimizar após mudanças
        setTimeout(() => setIsLayoutOptimized(true), 100)
      }
    })

    // Observar elementos que podem causar layout shift
    const elements = document.querySelectorAll('[data-scroll-optimized]')
    elements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return {
    isLayoutOptimized,
    observer: observerRef.current
  }
}
