import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '@/utils'
import { useTheme } from '@/hooks/useTheme'
import { tokens } from './theme'

interface ProgressProps {
  value?: number
  max?: number
  className?: string
  variant?: 'default' | 'success' | 'warning' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  showValue?: boolean
}

const sizeMap = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3'
}

export function Progress({ 
  value = 0, 
  max = 100, 
  className, 
  variant = 'default',
  size = 'md',
  showValue = false
}: ProgressProps) {
  const { actualTheme: theme } = useTheme()
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const variantStyles = {
    default: 'bg-gradient-to-r from-indigo-600 to-purple-600',
    success: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    warning: 'bg-gradient-to-r from-amber-500 to-orange-600',
    destructive: 'bg-gradient-to-r from-red-500 to-red-600'
  }

  return (
    <div className="w-full space-y-2">
      <ProgressPrimitive.Root
        className={cn(
          'relative w-full overflow-hidden rounded-full',
          sizeMap[size],
          tokens[theme].background.muted,
          className
        )}
        value={value}
        max={max}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            'h-full w-full flex-1 transition-all duration-500 ease-out',
            variantStyles[variant]
          )}
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </ProgressPrimitive.Root>
      
      {showValue && (
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>{Math.round(percentage)}%</span>
          <span>{value} / {max}</span>
        </div>
      )}
    </div>
  )
}