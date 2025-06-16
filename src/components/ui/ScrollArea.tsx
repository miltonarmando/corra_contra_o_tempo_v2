import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { cn } from '@/utils'
import { tokens } from './theme'

interface ScrollAreaProps {
  className?: string
  children: React.ReactNode
  orientation?: 'vertical' | 'horizontal'
}

export function ScrollArea({ className, children, orientation = 'vertical' }: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root className={cn('relative overflow-hidden', className)}>
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        className={cn(
          'flex touch-none select-none transition-colors duration-200',
          orientation === 'vertical' ? 'h-full w-2.5 border-l' : 'h-2.5 border-t',
          tokens.light.border.default,
          tokens.dark.border.default
        )}
        orientation={orientation}
      >
        <ScrollAreaPrimitive.Thumb className={cn(
          'relative flex-1 rounded-full',
          tokens.light.background.muted,
          tokens.dark.background.muted
        )} />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  )
}