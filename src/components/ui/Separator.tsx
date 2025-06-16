import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn } from '@/utils'
import { tokens } from './theme'

interface SeparatorProps {
  className?: string
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
}

export function Separator({ 
  className, 
  orientation = 'horizontal', 
  decorative = true,
  ...props 
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 transition-colors duration-200',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        tokens.light.border.default,
        tokens.dark.border.default,
        className
      )}
      {...props}
    />
  )
}