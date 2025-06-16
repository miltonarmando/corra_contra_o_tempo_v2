import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '@/utils'
import { tokens } from './theme'

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  className?: string
}

export function Tooltip({ 
  content, 
  children, 
  side = 'top', 
  align = 'center',
  className 
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            className={cn(
              "z-50 overflow-hidden rounded-md px-3 py-1.5",
              "animate-in fade-in-0 zoom-in-95",
              tokens.light.background.floating,
              tokens.light.text.primary,
              tokens.dark.background.floating,
              tokens.dark.text.primary,
              className
            )}
          >
            {content}
            <TooltipPrimitive.Arrow className={cn(
              tokens.light.background.floating,
              tokens.dark.background.floating
            )} />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
