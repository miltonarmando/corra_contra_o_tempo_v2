import { CaretRight } from '@phosphor-icons/react'
import { cn } from '@/utils'
import { tokens } from './theme'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <CaretRight className="h-4 w-4 text-slate-400 mx-2" />
            )}
            {item.href ? (
              <a
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-indigo-600",
                  index === items.length - 1
                    ? tokens.light.text.primary
                    : tokens.light.text.muted
                )}
              >
                {item.label}
              </a>
            ) : (
              <span
                className={cn(
                  "text-sm font-medium",
                  index === items.length - 1
                    ? tokens.light.text.primary
                    : tokens.light.text.muted
                )}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}