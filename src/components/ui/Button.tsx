import { cn } from '@/utils'
import { compositions } from './theme'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon'
  isLoading?: boolean
  fullWidth?: boolean
}

const sizeMap = {
  xs: 'h-8 px-3 text-sm font-medium',
  sm: 'h-10 px-4 text-sm font-medium',
  md: 'h-12 px-6 text-base font-semibold',
  lg: 'h-14 px-8 text-lg font-semibold',
  xl: 'h-16 px-10 text-xl font-bold',
  icon: 'h-12 w-12 p-0'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    fullWidth = false,
    disabled,
    children,
    ...props
  }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          compositions.button.base,
          compositions.button[variant],
          sizeMap[size],
          fullWidth && 'w-full',
          disabled && 'opacity-50 cursor-not-allowed',
          isLoading && 'cursor-wait',
          className
        )}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent opacity-75" />
        )}
        <span className={cn(
          'inline-flex items-center justify-center',
          isLoading && 'opacity-75'
        )}>
          {children}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'
