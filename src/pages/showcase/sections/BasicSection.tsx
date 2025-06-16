import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { cn } from '@/utils'
import { tokens } from '@/components/ui/theme'
import { Heart, Plus, ArrowRight, Gear } from '@phosphor-icons/react'
import { SectionProps } from './types'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

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

export function BasicSection({ theme }: SectionProps) {
  return (
    <div className="space-y-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className={cn("text-2xl font-bold", tokens[theme].text.primary)}>
            Buttons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button 
              className="group transition-all duration-300 hover:scale-105"
              variant="primary"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create New
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all" />
            </Button>
            <Button variant="secondary">
              <Gear className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline">
              <Heart className="w-4 h-4 mr-2" />
              Like
            </Button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className={cn("text-2xl font-bold", tokens[theme].text.primary)}>
            Badges
          </h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="primary" className="transform hover:scale-110 transition-transform">New</Badge>
            <Badge variant="secondary" className="transform hover:scale-110 transition-transform">Popular</Badge>
            <Badge variant="default" className="transform hover:scale-110 transition-transform">Coming Soon</Badge>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className={cn("text-2xl font-bold", tokens[theme].text.primary)}>
            Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className={cn("text-lg font-semibold mb-2", tokens[theme].text.primary)}>
                Featured
              </h3>
              <p className={cn("text-sm", tokens[theme].text.secondary)}>
                This is a featured card with hover effects and proper spacing.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className={cn("text-lg font-semibold mb-2", tokens[theme].text.primary)}>
                Premium
              </h3>
              <p className={cn("text-sm", tokens[theme].text.secondary)}>
                A premium card showcasing modern design principles.
              </p>
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}