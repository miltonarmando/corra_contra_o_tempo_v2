import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/utils'
import { tokens } from './theme'

interface TabsProps {
  tabs: { id: string; label: string }[]
  activeTab: string
  onChange: (value: string) => void
  className?: string
}

export function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
  return (
    <TabsPrimitive.Root value={activeTab} onValueChange={onChange}>
      <TabsPrimitive.List 
        className={cn(
          "flex h-10 items-center gap-4 border-b",
          tokens.light.border.default,
          tokens.dark.border.default,
          className
        )}
      >
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.id}
            value={tab.id}
            className={cn(
              "inline-flex items-center justify-center px-4 py-2",
              "text-sm font-medium transition-all",
              "border-b-2 -mb-px",
              activeTab === tab.id
                ? [                    tokens.light.border.active,
                    tokens.light.text.brand,
                    tokens.dark.border.active,
                    tokens.dark.text.brand,
                  ]
                : [
                    "border-transparent",
                    tokens.light.text.secondary,
                    tokens.light.background.hover,
                    tokens.dark.text.secondary,
                    tokens.dark.background.hover,
                  ]
            )}
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
    </TabsPrimitive.Root>
  )
}
