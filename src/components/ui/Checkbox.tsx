import { cn } from '@/utils'
import { useTheme } from '@/hooks/useTheme'
import { tokens } from './theme'
import { Check, Minus } from '@phosphor-icons/react'
import { forwardRef, useEffect, useRef } from 'react'

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  description?: string
  indeterminate?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: {
    container: 'w-4 h-4',
    icon: 'w-3 h-3',
    text: 'text-xs'
  },
  md: {
    container: 'w-5 h-5',
    icon: 'w-4 h-4',
    text: 'text-sm'
  },
  lg: {
    container: 'w-6 h-6',
    icon: 'w-5 h-5',
    text: 'text-base'
  }
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, disabled, indeterminate, size = 'md', ...props }, ref) => {
    const { actualTheme: theme } = useTheme()
    const innerRef = useRef<HTMLInputElement>(null)
    const resolvedRef = ref || innerRef
    
    // Handle indeterminate state
    useEffect(() => {
      if (typeof resolvedRef === 'object' && resolvedRef?.current) {
        resolvedRef.current.indeterminate = !!indeterminate
      }
    }, [resolvedRef, indeterminate])

    return (
      <label className={cn(
        'flex items-start gap-2 cursor-pointer select-none',
        disabled && 'opacity-60 cursor-not-allowed',
        className
      )}>
        <span className={cn(
          'inline-flex items-center justify-center rounded border-2 transition-all duration-200',
          sizeMap[size].container,
          tokens[theme].background.primary,
          tokens[theme].border.default,
          props.checked || indeterminate 
            ? cn(tokens[theme].background.brand, 'border-transparent') 
            : 'hover:border-indigo-300 dark:hover:border-indigo-600',
          'focus-within:ring-2 focus-within:ring-indigo-500/20 dark:focus-within:ring-indigo-400/20',
          disabled && tokens[theme].background.muted
        )}>
          <input
            ref={resolvedRef}
            type="checkbox"
            className="sr-only"
            disabled={disabled}
            aria-checked={indeterminate ? 'mixed' : props.checked}
            {...props}
          />
          {props.checked && !indeterminate && (
            <Check weight="bold" className={cn(sizeMap[size].icon, 'text-white')} />
          )}
          {indeterminate && (
            <Minus weight="bold" className={cn(sizeMap[size].icon, 'text-white')} />
          )}
        </span>
        {(label || description) && (
          <div className="flex flex-col pt-0.5">
            {label && (
              <span className={cn(
                sizeMap[size].text,
                'font-medium',
                tokens[theme].text.primary
              )}>
                {label}
              </span>
            )}
            {description && (
              <span className={cn(
                'text-xs',
                tokens[theme].text.muted
              )}>
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'