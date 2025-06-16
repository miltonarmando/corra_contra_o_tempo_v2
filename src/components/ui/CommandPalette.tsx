import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Command } from 'cmdk'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { cn } from '@/utils'
import { tokens } from './theme'

interface CommandItem {
  label: string
  value: string
  icon?: JSX.Element | null
}

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  items: CommandItem[]
  onSelect: (value: string) => void
}

export function CommandPalette({ open, onOpenChange, items, onSelect }: CommandPaletteProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={cn(
          "fixed inset-0",
          tokens.light.background.overlay,
          tokens.dark.background.overlay
        )} />
        <DialogPrimitive.Content className={cn(
          "fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg",
          "p-4 rounded-lg shadow-2xl",
          tokens.light.background.floating,
          tokens.dark.background.floating
        )}>
          <Command className="w-full" label="Command Menu">
            <div className={cn(
              "flex items-center border-b px-3",
              "mb-4 pb-4",
              tokens.light.border.default,
              tokens.dark.border.default
            )}>
              <MagnifyingGlass className={cn(
                "mr-2 h-4 w-4",
                tokens.light.icon.tertiary,
                tokens.dark.icon.tertiary
              )} />
              <Command.Input 
                className={cn(
                  "flex-1 bg-transparent outline-none placeholder:text-gray-400",
                  tokens.light.text.primary,
                  tokens.dark.text.primary
                )}
                placeholder="Type a command or search..." 
              />
            </div>
            <Command.List className="max-h-[300px] overflow-y-auto">
              {items.map((item) => (
                <Command.Item
                  key={item.value}
                  value={item.value}
                  onSelect={onSelect}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md cursor-pointer",
                    "aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800",
                    tokens.light.background.hover,
                    tokens.dark.background.hover
                  )}
                >
                  {item.icon && (
                    <span className={cn(
                      "mr-2",
                      tokens.light.icon.primary,
                      tokens.dark.icon.primary
                    )}>
                      {item.icon}
                    </span>
                  )}
                  <span className={cn(
                    tokens.light.text.primary,
                    tokens.dark.text.primary
                  )}>
                    {item.label}
                  </span>
                </Command.Item>
              ))}
            </Command.List>
          </Command>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}