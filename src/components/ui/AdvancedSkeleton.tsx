import { motion } from 'framer-motion'
import { cn } from '@/utils'

interface SkeletonProps {
  className?: string
  variant?: 'default' | 'circular' | 'text' | 'card'
  animation?: 'pulse' | 'wave' | 'shimmer'
  children?: React.ReactNode
}

const skeletonVariants = {
  pulse: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  wave: {
    x: ['-100%', '100%'],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  shimmer: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  }
}

export function Skeleton({ 
  className, 
  variant = 'default',
  animation = 'shimmer',
  children 
}: SkeletonProps) {
  const baseClasses = "bg-muted"
  
  const variantClasses = {
    default: "h-4 w-full rounded",
    circular: "rounded-full",
    text: "h-4 rounded",
    card: "h-48 w-full rounded-lg"
  }

  if (animation === 'shimmer') {
    return (
      <div 
        className={cn(
          baseClasses,
          variantClasses[variant],
          "relative overflow-hidden",
          "bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%]",
          "animate-[shimmer_2s_infinite_linear]",
          className
        )}
        style={{
          backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
        }}
      >
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={cn(baseClasses, variantClasses[variant], className)}
      animate={skeletonVariants[animation]}
    >
      {children}
    </motion.div>
  )
}

// Compound components for common patterns
export function SkeletonCard() {
  return (
    <div className="space-y-4 p-6">
      <Skeleton variant="circular" className="h-12 w-12" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <Skeleton variant="card" className="h-32" />
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i}
          className={cn(
            "h-4",
            i === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  )
}
