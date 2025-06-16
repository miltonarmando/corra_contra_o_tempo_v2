import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLayoutEffect } from 'react'
import { cn } from '@/utils'
import { tokens } from '@/components/ui/theme'
import { ShowcaseNav } from './ShowcaseNav'
import { ShowcaseSection } from './ShowcaseSection'
import { SHOWCASE_SECTIONS } from './sections/constants'
import { useMounted } from '@/hooks/useMounted'

export function ShowcasePage() {
  const [activeSection, setActiveSection] = useState<string>(SHOWCASE_SECTIONS.BASIC)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const mounted = useMounted()

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  if (!mounted) return null

  return (
    <div className={cn(
      "min-h-screen antialiased",
      tokens[theme].background.secondary
    )}>
      {/* Layout */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-8 py-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <ShowcaseNav 
                theme={theme} 
                onThemeChange={setTheme}
                activeSection={activeSection}
                onSectionChange={setActiveSection} 
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-8 lg:mt-0 lg:col-span-4">
            <AnimatePresence mode="wait" initial={false}>
              <ShowcaseSection
                key={activeSection}
                section={activeSection}
                theme={theme}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}