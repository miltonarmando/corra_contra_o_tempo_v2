import * as React from 'react'
import { cn } from '@/utils'
import { compositions, tokens } from './theme'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'destructive'
}

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        compositions.surface.base,
        "p-4",
        variant === 'info' && "border-blue-200 bg-blue-50 dark:border-blue-800/30 dark:bg-blue-950/30",
        variant === 'success' && "border-emerald-200 bg-emerald-50 dark:border-emerald-800/30 dark:bg-emerald-950/30",
        variant === 'warning' && "border-amber-200 bg-amber-50 dark:border-amber-800/30 dark:bg-amber-950/30",
        variant === 'destructive' && "border-red-200 bg-red-50 dark:border-red-800/30 dark:bg-red-950/30",
        className
      )}
      {...props}
    />
  )
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn(
        "mb-1 font-medium leading-none tracking-tight",
        tokens.light.text.primary,
        className
      )}
      {...props}
    />
  )
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "text-sm leading-relaxed",
        tokens.light.text.muted,
        className
      )}
      {...props}
    />
  )
)
AlertDescription.displayName = "AlertDescription"

// Create compound component
const CompoundAlert = Alert as typeof Alert & {
  Title: typeof AlertTitle
  Description: typeof AlertDescription
}

CompoundAlert.Title = AlertTitle
CompoundAlert.Description = AlertDescription

export { CompoundAlert as Alert }
