import React, { createContext, useContext, useState } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'

interface AnimationContextType {
  reducedMotion: boolean
  setReducedMotion: (reduced: boolean) => void
  pageTransition: boolean
  setPageTransition: (enabled: boolean) => void
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined)

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    return false
  })

  const [pageTransition, setPageTransition] = useState(true)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => setReducedMotion(mediaQuery.matches)
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <AnimationContext.Provider 
      value={{ 
        reducedMotion, 
        setReducedMotion, 
        pageTransition, 
        setPageTransition 
      }}
    >
      <MotionConfig reducedMotion={reducedMotion ? 'always' : 'never'}>
        {children}
      </MotionConfig>
    </AnimationContext.Provider>
  )
}

export function useAnimation() {
  const context = useContext(AnimationContext)
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider')
  }
  return context
}

// Common animation variants
export const animations = {
  page: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },
  
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  },

  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  slideInUp: {
    initial: { y: '100%' },
    animate: { 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      y: '100%',
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  float: {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  },

  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  },

  rotate: {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  },

  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  },

  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: 'easeOut'
    }
  }
}

// Animation wrapper components
export const AnimatedDiv = motion.div
export const AnimatedSection = motion.section
export const AnimatedArticle = motion.article
export const AnimatedHeader = motion.header
export const AnimatedFooter = motion.footer
export const AnimatedNav = motion.nav
export const AnimatedMain = motion.main
export const AnimatedAside = motion.aside

// Page transition wrapper
export function PageTransition({ children }: { children: React.ReactNode }) {
  const { pageTransition } = useAnimation()
  
  if (!pageTransition) {
    return <>{children}</>
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={animations.page}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
