import { motion } from 'framer-motion'
import { useState } from 'react'
import { Tabs } from '@/components/ui/Tabs'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { ScrollArea } from '@/components/ui/ScrollArea'
import { Separator } from '@/components/ui/Separator'
import { cn } from '@/utils'
import { tokens } from '@/components/ui/theme'
import { SectionProps } from './types'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
}

export function NavigationSection({ theme }: SectionProps) {
  const [activeTab, setActiveTab] = useState('account')

  return (
    <div className="space-y-8">
      <motion.div variants={itemVariants}>        <h2 className={cn("text-2xl font-bold mb-4", tokens[theme].text.primary)}>
          Tabs
        </h2>
        <Tabs
          tabs={[
            { id: 'account', label: 'Account' },
            { id: 'security', label: 'Security' },
            { id: 'notifications', label: 'Notifications' },
            { id: 'settings', label: 'Settings' }
          ]}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className={cn("text-2xl font-bold mb-4", tokens.light.text.primary, tokens.dark.text.primary)}>
          Breadcrumb
        </h2>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Components', href: '/components' },
            { label: 'Navigation', href: '/components/navigation' },
            { label: 'Breadcrumb' }
          ]}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className={cn("text-2xl font-bold mb-4", tokens.light.text.primary, tokens.dark.text.primary)}>
          Scroll Area
        </h2>
        <ScrollArea className="h-[200px] w-full rounded-md border">
          <div className="p-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "py-2",
                  tokens.light.text.secondary,
                  tokens.dark.text.secondary
                )}
              >
                Scrollable content item {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className={cn("text-2xl font-bold mb-4", tokens.light.text.primary, tokens.dark.text.primary)}>
          Separator
        </h2>
        <div className="space-y-4">
          <Separator />
          <div className="flex h-5 items-center space-x-4">
            <span>Item 1</span>
            <Separator orientation="vertical" />
            <span>Item 2</span>
            <Separator orientation="vertical" />
            <span>Item 3</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}