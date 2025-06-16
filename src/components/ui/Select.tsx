import { cn } from '@/utils'
import { tokens } from './theme'
import { CaretDown, Warning } from '@phosphor-icons/react'
import { forwardRef } from 'react'

interface Option {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string
  options: Option[]
  error?: boolean | string
  helperText?: string
  size?: 'sm' | 'md' | 'lg'
  placeholder?: string
  required?: boolean
  fullWidth?: boolean
}

const sizeMap = {
  sm: {
    container: 'py-1.5 px-2 text-xs',
    icon: 'w-3.5 h-3.5',
    label: 'text-xs mb-1'
  },
  md: {
    container: 'py-2 px-3 text-sm',
    icon: 'w-4 h-4',
    label: 'text-sm mb-1.5'
  },
  lg: {
    container: 'py-2.5 px-4 text-base',
    icon: 'w-5 h-5',
    label: 'text-base mb-2'
  }
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({
    className,
    label,
    options,
    error,
    helperText,
    disabled,
    size = 'md',
    placeholder = 'Select an option',
    required,
    fullWidth = true,
    ...props
  }, ref) => {
    const errorMessage = typeof error === 'string' ? error : helperText;
    const hasError = error ? true : false;
    
    return (
      <div className={cn("relative", fullWidth ? "w-full" : "w-auto")}>
        {label && (
          <label
            className={cn(
              sizeMap[size].label,
              'font-medium block',
              tokens.light.text.primary,
              'dark:text-slate-200',
              disabled && 'opacity-60',
              required && 'after:content-["*"] after:ml-0.5 after:text-red-500'
            )}
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <div className={cn(
          'relative rounded-lg border transition-all duration-200',
          tokens.light.background.primary,
          'dark:bg-slate-800',
          hasError
            ? cn(tokens.light.border.destructive, 'dark:border-red-700')
            : cn(tokens.light.border.default, 'dark:border-slate-600'),
          hasError
            ? cn('focus-within:ring-2 focus-within:ring-red-500/20', 'dark:focus-within:ring-red-500/20')
            : cn(tokens.light.ring.focus, tokens.dark.ring.focus),
          disabled && 'opacity-60 cursor-not-allowed bg-slate-50 dark:bg-slate-900',
          className
        )}>
          <select
            ref={ref}
            className={cn(
              'w-full appearance-none bg-transparent border-none outline-none pr-10',
              sizeMap[size].container,
              tokens.light.text.primary,
              'dark:text-slate-200',
              'placeholder:text-slate-500 dark:placeholder:text-slate-400',
              disabled && 'cursor-not-allowed text-slate-500 dark:text-slate-500'
            )}
            disabled={disabled}
            aria-invalid={hasError}
            required={required}
            aria-required={required}
            {...props}
          >
            {placeholder && (
              <option value="" disabled={required} hidden={required}>
                {placeholder}
              </option>
            )}
            {options.map(opt => (
              <option
                key={opt.value}
                value={opt.value}
                disabled={opt.disabled}
              >
                {opt.label}
              </option>
            ))}
          </select>
          <CaretDown
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none",
              sizeMap[size].icon,
              tokens.light.icon.tertiary,
              'dark:text-slate-400'
            )}
            weight="bold"
          />
        </div>
        {errorMessage && (
          <div className={cn("flex items-center gap-1 mt-1.5", sizeMap[size].label === 'text-xs' ? 'text-xs' : 'text-sm')}>
            {hasError && <Warning className="w-3.5 h-3.5 text-red-500" weight="fill" />}
            <p className={cn(
              hasError
                ? cn(tokens.light.text.destructive, 'dark:text-red-400')
                : cn(tokens.light.text.muted, 'dark:text-slate-400')
            )}>
              {errorMessage}
            </p>
          </div>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

