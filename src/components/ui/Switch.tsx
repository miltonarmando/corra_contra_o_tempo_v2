import { cn } from '@/utils'
import { useTheme } from '@/hooks/useTheme'
import { tokens } from './theme'
import { forwardRef } from 'react'

interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label?: string
  description?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: {
    container: 'h-5 w-9',
    thumb: 'h-4 w-4',
    translate: 'translate-x-4',
  },
  md: {
    container: 'h-6 w-11',
    thumb: 'h-5 w-5',
    translate: 'translate-x-5',
  },
  lg: {
    container: 'h-7 w-14',
    thumb: 'h-6 w-6',
    translate: 'translate-x-7',
  },
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, onCheckedChange, disabled, className, label, description, size = 'md', ...props }, ref) => {
    const { actualTheme: theme } = useTheme()
    
    return (
      <div className="flex items-center gap-3">
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-disabled={disabled}
          aria-label={label}
          tabIndex={0}
          disabled={disabled}
          onClick={() => !disabled && onCheckedChange(!checked)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              if (!disabled) {
                onCheckedChange(!checked)
              }
            }
          }}
          className={cn(
            'relative inline-flex items-center rounded-full transition-all duration-200 ease-in-out',
            'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
            'focus:ring-offset-background',
            sizeMap[size].container,
            checked
              ? tokens[theme].background.brand
              : tokens[theme].background.muted,
            disabled && 'opacity-60 cursor-not-allowed',
            !disabled && 'cursor-pointer',
            className
          )}
          {...props}
        >
          <span
            className={cn(
              'inline-block transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out',
              'ring-0',
              sizeMap[size].thumb,
              checked ? sizeMap[size].translate : 'translate-x-1'
            )}
          />
        </button>
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <span className={cn(
                'text-sm font-medium',
                tokens[theme].text.primary,
                disabled && 'opacity-60'
              )}>
                {label}
              </span>
            )}
            {description && (
              <span className={cn(
                'text-xs',
                tokens[theme].text.muted,
                disabled && 'opacity-60'
              )}>
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    )
  }
)

Switch.displayName = 'Switch'