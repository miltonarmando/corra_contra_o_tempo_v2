import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { compositions, tokens } from './theme'
import { cn } from '@/utils'
import { DropdownItem } from './types'

interface DropdownProps {
  trigger: React.ReactNode
  items: DropdownItem[]
  className?: string
  align?: 'start' | 'end'
  side?: 'top' | 'bottom'
}

export function Dropdown({ 
  trigger, 
  items, 
  className,
  align = 'end',
  side = 'bottom'
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(!isOpen)
          }
        }}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={cn(
          "cursor-pointer outline-none",
          tokens.light.ring.focusVisible,
          tokens.dark.ring.focusVisible
        )}
      >
        {trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: side === 'bottom' ? -10 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: side === 'bottom' ? -10 : 10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              compositions.dropdown.container,
              "absolute mt-2 min-w-[10rem] max-h-[20rem] overflow-y-auto",
              side === 'top' && "bottom-full mb-2",
              align === 'end' ? "right-0" : "left-0",
              className
            )}
            role="menu"
          >
            <div className="py-2 px-1">
              {items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    item.onClick?.()
                    setIsOpen(false)
                  }}
                  role="menuitem"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      item.onClick?.()
                      setIsOpen(false)
                    }
                  }}
                  className={cn(
                    compositions.dropdown.item(item.isDanger),
                    item.className
                  )}
                >
                  {item.icon && (
                    <span className={compositions.dropdown.icon(item.isDanger)}>
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
