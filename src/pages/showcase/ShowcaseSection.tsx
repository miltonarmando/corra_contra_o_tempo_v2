import { motion } from 'framer-motion'
import { cn } from '@/utils'
import { tokens } from '@/components/ui/theme'
import * as sections from './sections'
import { SECTIONS_CONFIG } from './sections/constants'

interface ShowcaseSectionProps {
  section: string
  theme: 'light' | 'dark'
}

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
      mass: 0.5,
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 }
  }
}

export function ShowcaseSection({ section, theme }: ShowcaseSectionProps) {
  const SectionComponent = sections[section as keyof typeof sections]
  const sectionConfig = SECTIONS_CONFIG.find(s => s.id === section)

  if (!SectionComponent || !sectionConfig) return null

  const Icon = sectionConfig.icon

  return (
    <motion.div
      layout
      variants={containerVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      className={cn(
        'w-full rounded-xl overflow-hidden',
        tokens[theme].background.primary,
        tokens[theme].border.default
      )}
    >
      <div className="p-8">
        <motion.div 
          variants={containerVariants}
          className="flex items-center gap-3 mb-8"
        >
          <Icon className="w-8 h-8" weight="duotone" />
          <div>
            <h1 className={cn("text-2xl font-bold", tokens[theme].text.primary)}>
              {sectionConfig.label}
            </h1>
            <p className={cn("text-sm", tokens[theme].text.secondary)}>
              {sectionConfig.description}
            </p>
          </div>
        </motion.div>
        
        <SectionComponent theme={theme} />
      </div>
    </motion.div>
  )
}