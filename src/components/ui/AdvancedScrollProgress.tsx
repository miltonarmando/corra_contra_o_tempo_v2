import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { cn } from '@/utils'

interface ScrollProgressProps {
  className?: string
  color?: string
  height?: number
}

export function ScrollProgress({ 
  className, 
  color = "bg-primary",
  height = 3
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transform-origin-left",
        color,
        className
      )}
      style={{ 
        scaleX,
        height: `${height}px`
      }}
    />
  )
}

interface CircularScrollProps {
  size?: number
  strokeWidth?: number
  className?: string
  showPercentage?: boolean
}

export function CircularScrollProgress({ 
  size = 60,
  strokeWidth = 4,
  className,
  showPercentage = false
}: CircularScrollProps) {
  const { scrollYProgress } = useScroll()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  
  return (
    <div className={cn("fixed bottom-8 right-8 z-50", className)}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative"
      >
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-muted-foreground/20"
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            className="text-primary"
            style={{
              pathLength: scrollYProgress
            }}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
          />
        </svg>
        
        {showPercentage && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-xs font-medium"
            style={{
              opacity: scrollYProgress
            }}
          >
            <motion.span>
              {Math.round(scrollYProgress.get() * 100)}%
            </motion.span>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export function ScrollToTop() {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 300)
    })
  }, [scrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      className={cn(
        "fixed bottom-8 left-8 z-50 p-3 rounded-full bg-primary text-primary-foreground",
        "shadow-lg hover:shadow-xl transition-shadow"
      )}
      onClick={scrollToTop}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </motion.button>
  )
}
