import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { CaretDown } from '@phosphor-icons/react'
import { cn } from '@/utils'
import { compositions, tokens } from './theme'

// Compound component pattern
const AccordionRoot = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    variant?: 'default' | 'bordered' | 'elevated'
  }
>(({ className, variant = 'default', ...props }, ref) => {
  const variantStyles = {
    default: "space-y-2",
    bordered: "space-y-0 border rounded-lg divide-y",
    elevated: "space-y-2"
  }
  
  return (
    <AccordionPrimitive.Root
      ref={ref}
      className={cn(
        variantStyles[variant],
        variant === 'bordered' && cn(tokens.light.border.default, 'dark:border-slate-700'),
        className
      )}
      {...props}
    />
  )
})
AccordionRoot.displayName = 'Accordion'

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    variant?: 'default' | 'bordered' | 'elevated'
    disabled?: boolean
  }
>(({ className, variant = 'default', disabled, ...props }, ref) => {
  const variantStyles = {
    default: cn(compositions.surface.base, "overflow-hidden"),
    bordered: "overflow-hidden first:rounded-t-lg last:rounded-b-lg",
    elevated: cn(compositions.surface.base, compositions.surface.elevated, "overflow-hidden")
  }
  
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(
        variantStyles[variant],
        disabled && "opacity-60 pointer-events-none",
        className
      )}
      disabled={disabled}
      {...props}
    />
  )
})
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    size?: 'sm' | 'md' | 'lg'
    icon?: React.ReactNode
  }
>(({ className, children, size = 'md', icon, ...props }, ref) => {
  const sizeStyles = {
    sm: "py-2 px-4 text-xs",
    md: "py-3 px-5 text-sm",
    lg: "py-4 px-6 text-base"
  }
  
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between font-medium transition-all",
          sizeStyles[size],
          "hover:bg-slate-50 dark:hover:bg-slate-800/50",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/20 dark:focus-visible:ring-indigo-400/20",
          "group",
          className
        )}
        {...props}
      >
        <span className={cn(tokens.light.text.primary, "dark:text-slate-200")}>
          {children}
        </span>
        {icon || (
          <CaretDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-slate-500 dark:text-slate-400 group-data-[state=open]:rotate-180" />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    size?: 'sm' | 'md' | 'lg'
  }
>(({ className, children, size = 'md', ...props }, ref) => {
  const sizeStyles = {
    sm: "px-4 pb-2 pt-0 text-xs",
    md: "px-5 pb-3 pt-0 text-sm",
    lg: "px-6 pb-4 pt-0 text-base"
  }
  
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className={cn(
        sizeStyles[size],
        tokens.light.text.muted,
        "dark:text-slate-400"
      )}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
})
AccordionContent.displayName = 'AccordionContent'

// Legacy API for backward compatibility
interface AccordionItem {
  id?: string
  title: string
  content: React.ReactNode
  disabled?: boolean
}

interface AccordionProps {
  items: AccordionItem[]
  defaultValue?: string
  className?: string
  type?: 'single' | 'multiple'
  variant?: 'default' | 'bordered' | 'elevated'
  size?: 'sm' | 'md' | 'lg'
  collapsible?: boolean
}

export function Accordion({
  items,
  defaultValue,
  className,
  type = 'single',
  variant = 'default',
  size = 'md',
  collapsible = true
}: AccordionProps) {
  return (
    <AccordionRoot
      type={type as "single"}
      defaultValue={defaultValue}
      collapsible={collapsible}
      className={className}
      variant={variant}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          variant={variant}
          disabled={item.disabled}
        >
          <AccordionTrigger size={size}>
            {item.title}
          </AccordionTrigger>
          <AccordionContent size={size}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  )
}

// Export compound components
export { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent }
