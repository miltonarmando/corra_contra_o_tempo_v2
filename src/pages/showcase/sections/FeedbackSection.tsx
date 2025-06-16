import { motion } from 'framer-motion'
import { useState } from 'react'
import { Alert } from '@/components/ui/Alert'
import { Progress } from '@/components/ui/Progress'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils'
import { tokens } from '@/components/ui/theme'
import { CaretUp, CaretDown } from '@phosphor-icons/react'
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

export function FeedbackSection({ theme }: SectionProps) {
  const [progress, setProgress] = useState(60)

  const handleIncrement = () => setProgress(prev => Math.min(prev + 10, 100))
  const handleDecrement = () => setProgress(prev => Math.max(prev - 10, 0))

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
            Alerts
          </h2>
          <div className="grid gap-4">
            <Alert
              variant="info"
              title="Information"              className="transform hover:scale-[1.02] transition-transform"
            >
              This is an informational message with important details.
            </Alert>
            <Alert
              variant="warning"
              title="Warning"              className="transform hover:scale-[1.02] transition-transform"
            >
              Please review this warning message carefully.
            </Alert>
            <Alert
              variant="success"
              title="Success"              className="transform hover:scale-[1.02] transition-transform"
            >
              The operation was completed successfully!
            </Alert>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className={cn("text-2xl font-bold", tokens[theme].text.primary)}>
            Progress
          </h2>
          <div className="space-y-4">
            <Progress 
              value={progress} 
              className="h-2 transition-all duration-300"
            />
            <div className="flex items-center justify-between gap-4">
              <Button
                onClick={handleDecrement}
                variant="secondary"
                className="flex-1 group"
                disabled={progress <= 0}
              >
                <CaretDown className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 transition-transform" />
                Decrease
              </Button>
              <span className={cn("text-lg font-medium", tokens[theme].text.primary)}>
                {progress}%
              </span>
              <Button
                onClick={handleIncrement}
                variant="secondary"
                className="flex-1 group"
                disabled={progress >= 100}
              >
                <CaretUp className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                Increase
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}