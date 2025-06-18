import { cn } from '@/utils'
import { compositions } from './theme'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline' | 'error'
  size?: 'sm' | 'md' | 'lg'
  dot?: boolean
}

const sizeMap = {
  sm: 'text-xs sm:text-sm px-2 py-0.5 h-5 font-touch-friendly',
  md: 'text-xs sm:text-sm px-2.5 py-1 h-6 font-touch-friendly',
  lg: 'text-sm sm:text-base px-3 py-1 h-7 font-touch-friendly'
}

const dotSizeMap = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-2.5 h-2.5'
}

export function Badge({
  className,
  variant = 'primary',
  size = 'md',
  dot = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        compositions.badge.base,
        compositions.badge[variant],
        sizeMap[size],
        dot && 'pl-1.5',
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'rounded-full bg-current mr-1.5 opacity-75',
            dotSizeMap[size]
          )}
        />
      )}
      {children}
    </span>
  )
}
