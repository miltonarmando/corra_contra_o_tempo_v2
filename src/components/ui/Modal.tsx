import { cn } from '@/utils'
import { motion } from 'framer-motion'
import { X } from '@phosphor-icons/react'
import { tokens } from './theme'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const modalSizes = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg'
}

const modalComposition = {
  overlay: cn(
    'fixed inset-0 z-50 flex items-center justify-center p-4',
    'backdrop-blur-sm',
    tokens.light.background.overlay,
    tokens.dark.background.overlay
  ),
  container: cn(
    'relative w-full rounded-lg',
    tokens.light.background.elevated,
    tokens.light.border.default,
    tokens.light.shadow.md,
    tokens.dark.background.elevated,
    tokens.dark.border.default,
    tokens.dark.shadow.md
  ),
  header: cn(
    'flex items-center justify-between p-4',
    'border-b',
    tokens.light.border.default,
    tokens.dark.border.default
  ),
  title: cn(
    'text-lg font-semibold',
    tokens.light.text.primary,
    tokens.dark.text.primary
  ),
  closeButton: cn(
    'rounded-md p-1 transition-colors',
    tokens.light.text.tertiary,
    tokens.light.background.hover,
    tokens.light.ring.focusVisible,
    tokens.dark.text.tertiary,
    tokens.dark.background.hover,
    tokens.dark.ring.focusVisible,
  ),
  content: 'p-4'
}

export function Modal({ isOpen, onClose, title, children, className, size = 'md' }: ModalProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={modalComposition.overlay}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className={cn(modalComposition.container, modalSizes[size], className)}
      >
        <div className={modalComposition.header}>
          <h2 className={modalComposition.title}>{title}</h2>
          <button
            onClick={onClose}
            className={modalComposition.closeButton}
            type="button"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        <div className={modalComposition.content}>{children}</div>
      </motion.div>
    </motion.div>
  )
}
