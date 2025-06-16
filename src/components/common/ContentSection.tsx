import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { tokens } from '@/components/ui/theme'
import { cn } from '@/utils'
import { Card } from '@/components/ui/Card'
import { itemVariants } from './animations'

interface ContentSectionProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function ContentSection({ title, description, children, className }: ContentSectionProps) {
  const { actualTheme: theme } = useTheme()

  return (
    <motion.div variants={itemVariants} className={cn("lg:col-span-3", className)}>
      <Card className="p-8">
        <div className="mb-6">
          <h2 className={cn("text-2xl font-bold mb-2", tokens[theme].text.primary)}>
            {title}
          </h2>
          {description && (
            <p className={cn("text-sm", tokens[theme].text.muted)}>
              {description}
            </p>
          )}
        </div>
        <div className="min-h-[400px]">
          {children}
        </div>
      </Card>
    </motion.div>
  )
}
