import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import { useScrollOptimization } from '../../hooks/useScrollOptimization'

interface SmoothScrollContainerProps {
  children: React.ReactNode
  className?: string
  enableScrollSnap?: boolean
  velocity?: number
}

export function SmoothScrollContainer({ 
  children, 
  className = '',
  enableScrollSnap = false,
  velocity = 0.1
}: SmoothScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const { isScrolling, shouldPauseAnimations } = useScrollOptimization({
    enableScrollSnap,
    threshold: 2,
    debounceMs: 50
  })

  // Smooth scroll com spring physics
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 200,
    damping: 50,
    mass: velocity
  })

  // Velocidade do scroll para efeitos avançados
  const scrollVelocity = useVelocity(scrollY)
  const velocityFactor = useTransform(scrollVelocity, [-1000, 0, 1000], [0.5, 1, 0.5])

  useEffect(() => {
    // Atualizar CSS custom properties para outros componentes usarem
    const updateScrollProperties = () => {
      if (containerRef.current) {
        const progress = scrollY.get() / (document.documentElement.scrollHeight - window.innerHeight)
        
        containerRef.current.style.setProperty('--scroll-progress', `${progress}`)
        containerRef.current.style.setProperty('--scroll-velocity', `${Math.abs(scrollVelocity.get() / 1000)}`)
        containerRef.current.style.setProperty('--is-scrolling', isScrolling ? '1' : '0')
      }
    }

    const unsubscribeScrollY = scrollY.on('change', updateScrollProperties)
    const unsubscribeVelocity = scrollVelocity.on('change', updateScrollProperties)

    return () => {
      unsubscribeScrollY()
      unsubscribeVelocity()
    }
  }, [scrollY, scrollVelocity, isScrolling])

  return (
    <motion.div
      ref={containerRef}
      className={`smooth-scroll-container ${className}`}
      style={{
        '--scroll-y': smoothScrollY,
        '--velocity-factor': velocityFactor
      } as React.CSSProperties}
      data-scroll-container
      data-pause-animations={shouldPauseAnimations}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  offset?: number
  'data-scroll-snap'?: boolean
}

export function ParallaxSection({ 
  children, 
  className = '',
  speed = 0.5,
  offset = 0,
  'data-scroll-snap': scrollSnap = false
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const { isScrolling } = useScrollOptimization()

  const y = useTransform(
    scrollY,
    [offset - 200, offset + 200],
    [-100 * speed, 100 * speed]
  )

  const opacity = useTransform(
    scrollY,
    [offset - 300, offset, offset + 300],
    [0, 1, 0]
  )

  return (
    <motion.div
      ref={ref}
      className={`parallax-section ${className}`}
      style={{
        y: isScrolling ? y : 0,
        opacity,
        transition: isScrolling ? 'none' : 'transform 0.3s ease-out'
      }}
      data-scroll-snap={scrollSnap}
    >
      {children}
    </motion.div>
  )
}

interface ScrollIndicatorProps {
  className?: string
  variant?: 'line' | 'circle' | 'minimal'
  position?: 'top' | 'bottom' | 'left' | 'right'
}

export function ScrollIndicator({ 
  className = '',
  variant = 'line',
  position = 'top'
}: ScrollIndicatorProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const positionClasses = {
    top: 'fixed top-0 left-0 right-0 h-1 z-50',
    bottom: 'fixed bottom-0 left-0 right-0 h-1 z-50',
    left: 'fixed top-0 left-0 bottom-0 w-1 z-50',
    right: 'fixed top-0 right-0 bottom-0 w-1 z-50'
  }

  if (variant === 'circle') {
    return (
      <motion.div
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-full border-2 border-primary/20 z-50 ${className}`}
        style={{
          background: `conic-gradient(from 0deg, transparent ${scrollYProgress.get() * 360}deg, currentColor 0deg)`
        }}
      >
        <motion.div
          className="absolute inset-2 rounded-full bg-background flex items-center justify-center text-xs font-mono"
          style={{ opacity: scrollYProgress }}
        >
          {Math.round(scrollYProgress.get() * 100)}%
        </motion.div>
      </motion.div>
    )
  }

  if (variant === 'minimal') {
    return (
      <motion.div
        className={`fixed bottom-8 right-8 w-2 h-16 bg-primary/20 rounded-full z-50 ${className}`}
      >
        <motion.div
          className="w-full bg-primary rounded-full origin-bottom"
          style={{ 
            scaleY: scrollYProgress,
            height: '100%'
          }}
        />
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`${positionClasses[position]} bg-gradient-to-r from-primary via-primary/80 to-primary origin-left ${className}`}
      style={{ 
        scaleX: position === 'left' || position === 'right' ? 1 : scaleX,
        scaleY: position === 'left' || position === 'right' ? scrollYProgress : 1
      }}
    />
  )
}

interface ScrollTriggerProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  once?: boolean
  margin?: string
  onEnter?: () => void
  onLeave?: () => void
}

export function ScrollTrigger({
  children,
  className = '',
  threshold = 0.1,
  once = true,
  margin = '0px',
  onEnter,
  onLeave
}: ScrollTriggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)
  const { shouldPauseAnimations } = useScrollOptimization()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible
        const nowVisible = entry.isIntersecting

        setIsVisible(nowVisible)

        if (!wasVisible && nowVisible && onEnter) {
          onEnter()
        } else if (wasVisible && !nowVisible && onLeave && !once) {
          onLeave()
        }
      },
      {
        threshold,
        rootMargin: margin
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, margin, onEnter, onLeave, once, isVisible])

  return (
    <motion.div
      ref={ref}
      className={`scroll-trigger ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 30
      }}
      transition={{
        duration: shouldPauseAnimations ? 0.1 : 0.6,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
}
