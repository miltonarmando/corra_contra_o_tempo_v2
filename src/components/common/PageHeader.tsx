import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { tokens } from '@/components/ui/theme'
import { cn } from '@/utils'
import { Badge } from '@/components/ui/Badge'
import { IconProps } from '@phosphor-icons/react'

interface PageHeaderProps {
  icon: React.ComponentType<IconProps>
  title: string
  description: string
  badges?: Array<{
    text: string
    variant?: 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'outline'
  }>
}

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
}

export function PageHeader({ icon: Icon, title, description, badges = [] }: PageHeaderProps) {
  const { actualTheme: theme } = useTheme()

  return (
    <motion.div variants={itemVariants} className="text-center mb-12">
      <div className={cn(
        "w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6",
        tokens[theme].background.brand
      )}>
        <Icon className="w-10 h-10 text-white" weight="duotone" />
      </div>      <h1 className={cn(
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-touch-friendly",
        tokens[theme].text.primary,
        "mb-4"
      )}>
        {title}
      </h1>
      <p className={cn(
        "text-base sm:text-lg md:text-xl leading-mobile-friendly font-touch-friendly",
        tokens[theme].text.muted,
        "max-w-2xl mx-auto px-4"
      )}>
        {description}
      </p>
      {badges.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {badges.map((badge, index) => (
            <Badge key={index} variant={badge.variant || 'default'}>
              {badge.text}
            </Badge>
          ))}
        </div>
      )}
    </motion.div>
  )
}
