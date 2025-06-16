import { motion } from 'framer-motion'
import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { CommandPalette } from '@/components/ui/CommandPalette'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { cn } from '@/utils'
import { tokens } from '@/components/ui/theme'
import { MagnifyingGlass, Gear, User, Bell, Question } from '@phosphor-icons/react'
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

export function OverlaySection({ theme }: SectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)

  return (
    <div className="space-y-8">
      <motion.div variants={itemVariants}>        <h2 className={cn("text-2xl font-bold mb-4", tokens[theme].text.primary)}>
          Modal
        </h2>
        <Button onClick={() => setIsModalOpen(true)}>
          Open Modal
        </Button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Example Modal"
        >
          <div className="space-y-4">
            <p className={cn(tokens.light.text.secondary, tokens.dark.text.secondary)}>
              This is an example modal with theme support and animations.
            </p>
            <Input
              label="Modal Input"
              placeholder="Type something..."
            />
            <div className="flex justify-end gap-3">
              <Button
                variant="ghost"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className={cn("text-2xl font-bold mb-4", tokens.light.text.primary, tokens.dark.text.primary)}>
          Command Palette
        </h2>
        <div className="space-y-4">
          <p className={cn(tokens.light.text.secondary, tokens.dark.text.secondary)}>
            Press the button below or use <kbd className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">⌘K</kbd> to open
          </p>
          <Button onClick={() => setCommandOpen(true)}>
            <MagnifyingGlass className="mr-2 h-4 w-4" />
            Search...
          </Button>
          <CommandPalette
            open={commandOpen}
            onOpenChange={setCommandOpen}
            items={[
              { label: 'Search documentation', value: 'search', icon: <MagnifyingGlass /> },
              { label: 'Settings', value: 'settings', icon: <Gear /> },
              { label: 'Profile', value: 'profile', icon: <User /> },
              { label: 'Notifications', value: 'notifications', icon: <Bell /> },
              { label: 'Help', value: 'help', icon: <Question /> }
            ]}
            onSelect={(value) => {
              console.log('Selected:', value)
              setCommandOpen(false)
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}