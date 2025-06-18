import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/utils'

interface MagneticProps {
  children: React.ReactNode
  className?: string
  strength?: number
  disabled?: boolean
}

export function Magnetic({ 
  children, 
  className, 
  strength = 0.3,
  disabled = false 
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150, mass: 0.2 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  useEffect(() => {
    if (!ref.current || disabled) return

    const element = ref.current
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      
      x.set(deltaX * strength)
      y.set(deltaY * strength)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [x, y, strength, disabled])

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxProps {
  children: React.ReactNode
  offset?: number
  className?: string
}

export function Parallax({ children, offset = 50, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const y = useMotionValue(0)
  const yRange = [-offset, offset]
  const rotate = useTransform(y, yRange, [-2, 2])
  const scale = useTransform(y, yRange, [0.95, 1.05])

  useEffect(() => {
    const updateY = () => {
      if (!ref.current) return
      
      const scrolled = window.scrollY
      const rate = scrolled * -0.5
      y.set(rate)
    }

    window.addEventListener('scroll', updateY)
    return () => window.removeEventListener('scroll', updateY)
  }, [y])

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate, scale }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

interface FloatingProps {
  children: React.ReactNode
  duration?: number
  delay?: number
  intensity?: number
  className?: string
}

export function Floating({ 
  children, 
  duration = 3,
  delay = 0,
  intensity = 10,
  className 
}: FloatingProps) {
  return (
    <motion.div
      className={cn(className)}
      animate={{
        y: [-intensity, intensity, -intensity],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

interface PulseProps {
  children: React.ReactNode
  scale?: [number, number]
  duration?: number
  className?: string
}

export function Pulse({ 
  children, 
  scale = [1, 1.05],
  duration = 2,
  className 
}: PulseProps) {
  return (
    <motion.div
      className={cn(className)}
      animate={{
        scale: scale,
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}
