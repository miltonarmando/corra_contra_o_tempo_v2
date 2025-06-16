import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { tokens } from '@/components/ui/theme'
import { cn } from '@/utils'
import { IconProps } from '@phosphor-icons/react'
import { itemVariants } from './animations'

interface SectionNavigationProps {
  sections: Array<{
    id: string
    label: string
    icon: React.ComponentType<IconProps>
  }>
  activeSection: string
  onSectionChange: (sectionId: string) => void
  title?: string
}

export function SectionNavigation({ 
  sections, 
  activeSection, 
  onSectionChange, 
  title = "Components" 
}: SectionNavigationProps) {
  const { actualTheme: theme } = useTheme()

  return (
    <motion.div variants={itemVariants} className="lg:col-span-1">
      <div className="sticky top-24">
        <div className="p-4 border rounded-lg bg-card">
          <h3 className={cn("text-lg font-semibold mb-4", tokens[theme].text.primary)}>
            {title}
          </h3>
          <nav className="space-y-1">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => onSectionChange(section.id)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",
                    activeSection === section.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{section.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>
    </motion.div>
  )
}
