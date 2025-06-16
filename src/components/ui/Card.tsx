import { cn } from '@/utils'
import { compositions } from './theme'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  interactive?: boolean
  elevated?: boolean
  variant?: 'default' | 'feature' | 'glass' | 'floating'
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({
  className,
  title,
  description,
  interactive,
  elevated,
  variant = 'default',
  children,
  ...props
}: CardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'feature':
        return compositions.card.feature
      case 'glass':
        return compositions.surface.glass
      case 'floating':
        return compositions.surface.floating
      default:
        return ''
    }
  }

  return (
    <div
      className={cn(
        compositions.card.base,
        interactive && compositions.card.interactive,
        elevated && compositions.card.elevated,
        getVariantStyles(),
        className
      )}
      {...props}
    >
      {(title || description) && (
        <div className="p-6 pb-4">
          {title && (
            <h3 className={cn(compositions.text.title, 'mb-2')}>
              {title}
            </h3>
          )}
          {description && (
            <p className={cn(compositions.text.muted)}>
              {description}
            </p>
          )}
        </div>
      )}
      <div className={cn(title || description ? 'px-6 pb-6' : 'p-6')}>
        {children}
      </div>
    </div>
  )
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn('p-6 pb-4 border-b border-slate-200/60 dark:border-slate-700/60', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={cn(
        'p-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-800/50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
