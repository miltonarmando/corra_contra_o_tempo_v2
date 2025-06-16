import { ReactNode } from 'react'
import { cn } from '@/utils'
import { tokens } from '@/components/ui/theme'
import { useTheme } from '@/hooks/useTheme'

interface BaseLayoutProps {
  children: ReactNode
  className?: string
}

export function BaseLayout({ children, className }: BaseLayoutProps) {
  const { theme } = useTheme()

  return (
    <div className={cn(
      'min-h-screen',
      theme === 'dark' ? tokens.dark.background.primary : tokens.light.background.primary,
      className
    )}>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
