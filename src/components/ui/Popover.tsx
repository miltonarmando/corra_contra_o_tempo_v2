import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { X } from '@phosphor-icons/react'
import { cn } from '@/utils'
import { tokens } from './theme'

const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverClose = PopoverPrimitive.Close

const popoverComposition = {
  content: cn(
    "z-50 w-72 rounded-md p-4",
    "animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
    "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    tokens.light.background.elevated,
    tokens.light.border.default,
    tokens.light.shadow.md,
    tokens.dark.background.elevated,
    tokens.dark.border.default,
    tokens.dark.shadow.md
  ),
  closeButton: cn(
    'absolute right-3 top-3 rounded-md p-1 transition-opacity',
    'opacity-70 hover:opacity-100',
    tokens.light.text.tertiary,
    tokens.light.background.hover,
    tokens.light.ring.focusVisible,
    tokens.dark.text.tertiary,
    tokens.dark.background.hover,
    tokens.dark.ring.focusVisible,
    'disabled:pointer-events-none'
  )
}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(popoverComposition.content, className)}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

interface PopoverProps {
  trigger: React.ReactNode
  children: React.ReactNode
  showClose?: boolean
  className?: string
}

export function Popover({ trigger, children, showClose = true, className }: PopoverProps) {
  return (
    <PopoverPrimitive.Root>
      <PopoverTrigger asChild>
        {trigger}
      </PopoverTrigger>
      <PopoverContent className={className}>
        <div className="relative">
          {showClose && (
            <PopoverClose className={popoverComposition.closeButton}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </PopoverClose>
          )}
          {children}
        </div>
      </PopoverContent>
    </PopoverPrimitive.Root>
  )
}
