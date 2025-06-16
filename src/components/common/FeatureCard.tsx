import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { tokens } from '@/components/ui/theme'
import { cn } from '@/utils'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { IconProps } from '@phosphor-icons/react'
import { itemVariants } from './animations'

interface FeatureCardProps {
  icon: React.ComponentType<IconProps>
  title: string
  description: string
  iconColor?: string
  children?: React.ReactNode
  delay?: number
  className?: string
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  iconColor = "text-blue-500",
  children,
  delay = 0,
  className 
}: FeatureCardProps) {
  const { actualTheme: theme } = useTheme()

  return (
    <motion.div
      variants={itemVariants}
      initial="initial"
      animate="enter"
      transition={{ delay }}
      className={className}
    >
      <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <Icon className={cn("w-8 h-8 mb-4", iconColor)} />
          <h3 className={cn("text-lg font-semibold mb-2", tokens[theme].text.primary)}>
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className={cn("text-sm mb-4", tokens[theme].text.secondary)}>
            {description}
          </p>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  )
}
