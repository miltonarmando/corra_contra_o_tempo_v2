import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import { cn } from '@/utils'
import { tokens } from './theme'

interface HoverCardProps {
  children: React.ReactNode
  content: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  className?: string
}

export function HoverCard({ children, content, side = 'top', align = 'center', className }: HoverCardProps) {
  return (
    <HoverCardPrimitive.Root>
      <HoverCardPrimitive.Trigger asChild>
        {children}
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content
          side={side}
          align={align}
          className={cn(
            'z-50 w-64 rounded-md p-4',
            'animate-in fade-in-0 zoom-in-95',
            'shadow-md outline-none',
            tokens.light.background.floating,
            tokens.dark.background.floating,
            tokens.light.border.default,
            tokens.dark.border.default,
            className
          )}
        >
          {content}
          <HoverCardPrimitive.Arrow className={cn(
            tokens.light.background.floating,
            tokens.dark.background.floating,
            tokens.light.border.default,
            tokens.dark.border.default,
          )} />
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  )
}