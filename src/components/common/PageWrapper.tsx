import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { tokens } from '@/components/ui/theme'
import { cn } from '@/utils'

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  const { actualTheme: theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "min-h-screen w-full",
        tokens[theme].background.secondary,
        className
      )}
    >
      {children}
    </motion.div>
  )
}
