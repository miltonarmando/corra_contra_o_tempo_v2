import { cn } from '@/utils'
import { compositions } from './theme'
import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean | string
  success?: boolean
  helperText?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  variant?: 'default' | 'filled' | 'outline'
  inputSize?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-4 text-lg'
}

const variantMap = {
  default: 'border border-slate-300 bg-gradient-to-br from-slate-50 to-blue-50',
  filled: 'border-0 bg-slate-100 dark:bg-slate-700',
  outline: 'border-2 border-slate-300 dark:border-slate-600 bg-transparent'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    label,
    error,
    success,
    helperText,
    startIcon,
    endIcon,
    variant = 'default',
    inputSize = 'md',
    disabled,
    ...props
  }, ref) => {
    const hasError = Boolean(error)
    const errorMessage = typeof error === 'string' ? error : helperText

    return (
      <div className="w-full space-y-2">
        {label && (
          <label className={cn(
            'block text-sm font-medium',
            hasError 
              ? 'text-red-600 dark:text-red-400'
              : success
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-slate-700 dark:text-slate-300',
            disabled && 'opacity-50'
          )}>
            {label}
          </label>
        )}
        
        <div className="relative">
          <div className={cn(
            'relative flex items-center',
            hasError && compositions.input.error,
            success && compositions.input.success
          )}>
            {startIcon && (
              <div className="absolute left-3 z-10 flex items-center pointer-events-none">
                <span className={cn(
                  'text-slate-500 dark:text-slate-400',
                  hasError && 'text-red-500 dark:text-red-400',
                  success && 'text-emerald-500 dark:text-emerald-400'
                )}>
                  {startIcon}
                </span>
              </div>
            )}
            
            <input
              ref={ref}
              className={cn(
                compositions.input.base,
                sizeMap[inputSize],
                variantMap[variant],
                startIcon && 'pl-10',
                endIcon && 'pr-10',
                hasError && compositions.input.error,
                success && compositions.input.success,
                disabled && 'opacity-50 cursor-not-allowed',
                className
              )}
              disabled={disabled}
              aria-invalid={hasError}
              aria-describedby={
                (errorMessage || helperText) ? `${props.id || 'input'}-description` : undefined
              }
              {...props}
            />
            
            {endIcon && (
              <div className="absolute right-3 z-10 flex items-center pointer-events-none">
                <span className={cn(
                  'text-slate-500 dark:text-slate-400',
                  hasError && 'text-red-500 dark:text-red-400',
                  success && 'text-emerald-500 dark:text-emerald-400'
                )}>
                  {endIcon}
                </span>
              </div>
            )}
          </div>
        </div>
        
        {(errorMessage || helperText) && (
          <p
            id={`${props.id || 'input'}-description`}
            className={cn(
              'text-xs',
              hasError
                ? 'text-red-600 dark:text-red-400'
                : success
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-slate-500 dark:text-slate-400'
            )}
          >
            {errorMessage || helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
