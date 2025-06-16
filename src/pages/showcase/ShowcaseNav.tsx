import { motion } from 'framer-motion'
import { cn } from '@/utils'
import { tokens } from '@/components/ui/theme'
import { SECTIONS_CONFIG } from './sections/constants'

interface ShowcaseNavProps {
  theme: 'light' | 'dark'
  onThemeChange: (theme: 'light' | 'dark') => void
  activeSection: string
  onSectionChange: (section: string) => void
}

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  enter: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
}

export function ShowcaseNav({ 
  activeSection,
  onSectionChange,
  theme 
}: ShowcaseNavProps) {
  return (
    <nav className="space-y-2">
      {SECTIONS_CONFIG.map((section) => {
        const Icon = section.icon
        return (
          <motion.button
            key={section.id}
            variants={itemVariants}
            onClick={() => onSectionChange(section.id)}
            className={cn(
              "w-full px-4 py-2 rounded-lg flex items-center gap-3 transition-all",
              "hover:bg-gray-50 dark:hover:bg-gray-800",
              activeSection === section.id
                ? cn(
                    tokens[theme].text.active,
                    tokens[theme].background.active,
                  )
                : cn(
                    tokens[theme].text.inactive,
                    "hover:bg-gray-50/80 dark:hover:bg-gray-800/80"
                  )
            )}
          >
            <Icon 
              weight={activeSection === section.id ? "fill" : "regular"} 
              className="w-5 h-5"
            />
            <span className="flex-1 text-left">{section.label}</span>
          </motion.button>
        )
      })}
    </nav>
  )
}