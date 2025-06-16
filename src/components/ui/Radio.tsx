import { cn } from '@/utils'
import { tokens } from './theme'
import { forwardRef, createContext, useContext, useId } from 'react'

// Radio Group Context
type RadioGroupContextType = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined);

// Size variants
const sizeMap = {
  sm: {
    container: 'w-4 h-4',
    dot: 'w-2 h-2',
    text: 'text-xs',
    spacing: 'gap-2'
  },
  md: {
    container: 'w-5 h-5',
    dot: 'w-3 h-3',
    text: 'text-sm',
    spacing: 'gap-3'
  },
  lg: {
    container: 'w-6 h-6',
    dot: 'w-3.5 h-3.5',
    text: 'text-base',
    spacing: 'gap-3'
  }
};

// Radio Group Component
interface RadioGroupProps {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  disabled?: boolean;
  name?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ value, onChange, children, disabled, name: nameProp, className, size = 'md', ...props }, ref) => {
    const generatedId = useId();
    const name = nameProp || generatedId;
    
    return (
      <RadioGroupContext.Provider value={{ name, value, onChange, disabled, size }}>
        <div ref={ref} className={cn("space-y-2", className)} role="radiogroup" {...props}>
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

// Radio Item Component
interface RadioItemProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  value: string;
  label?: string;
  description?: string;
  className?: string;
}

export const RadioItem = forwardRef<HTMLInputElement, RadioItemProps>(
  ({ value, label, description, className, ...props }, ref) => {
    const group = useContext(RadioGroupContext);
    
    if (!group) {
      throw new Error('RadioItem must be used within a RadioGroup');
    }
    
    const { name, onChange, disabled: groupDisabled, size = 'md' } = group;
    const isDisabled = props.disabled || groupDisabled;
    const isChecked = group.value === value;
    
    return (
      <label
        className={cn(
          'flex items-start cursor-pointer select-none rounded p-2 transition-colors',
          sizeMap[size].spacing,
          isChecked
            ? cn(tokens.light.background.selected, 'dark:bg-indigo-950/50')
            : cn(tokens.light.background.primary, 'dark:bg-transparent'),
          isDisabled && 'opacity-60 cursor-not-allowed',
          className
        )}
      >
        <span className={cn(
          'inline-flex items-center justify-center rounded-full border shrink-0 transition-colors',
          sizeMap[size].container,
          isChecked
            ? cn('border-indigo-600 bg-indigo-600 dark:border-indigo-500 dark:bg-indigo-500')
            : cn(tokens.light.border.default, 'bg-white dark:bg-slate-800 dark:border-slate-600'),
          isDisabled && tokens.light.background.muted
        )}>
          <input
            ref={ref}
            type="radio"
            name={name}
            value={value}
            className="appearance-none w-full h-full cursor-pointer"
            checked={isChecked}
            onChange={() => onChange(value)}
            disabled={isDisabled}
            aria-checked={isChecked}
            {...props}
          />
          {isChecked && (
            <span className={cn(
              "block rounded-full bg-white dark:bg-white",
              sizeMap[size].dot
            )} />
          )}
        </span>
        {(label || description) && (
          <span className="flex flex-col pt-0.5">
            {label && (
              <span className={cn(
                sizeMap[size].text,
                'font-medium',
                isChecked
                  ? cn(tokens.light.text.active, 'dark:text-indigo-300')
                  : cn(tokens.light.text.primary, 'dark:text-slate-200')
              )}>
                {label}
              </span>
            )}
            {description && (
              <span className={cn(
                'text-xs',
                tokens.light.text.muted,
                'dark:text-slate-400'
              )}>
                {description}
              </span>
            )}
          </span>
        )}
      </label>
    );
  }
);

RadioItem.displayName = 'RadioItem';

// Legacy API for backward compatibility
interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

interface LegacyRadioProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Radio = forwardRef<HTMLDivElement, LegacyRadioProps>(
  ({ options, value, onChange, disabled, size = 'md', className }, ref) => {
    return (
      <RadioGroup
        ref={ref}
        value={value}
        onChange={onChange}
        disabled={disabled}
        size={size}
        className={className}
      >
        {options.map((opt) => (
          <RadioItem
            key={opt.value}
            value={opt.value}
            label={opt.label}
            description={opt.description}
          />
        ))}
      </RadioGroup>
    );
  }
);

Radio.displayName = 'Radio';