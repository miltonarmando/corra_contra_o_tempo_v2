import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, 
  Sun, 
  Moon, 
  Monitor,
  List,
  X,
  House,
  RocketLaunch,
  Certificate,
  EnvelopeSimple,
  Article,
  Briefcase,
  Cpu
} from '@phosphor-icons/react'
import { useTheme } from '@/hooks/useTheme'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Magnetic } from '../components/ui/AdvancedMotion'
import { ScrollProgress } from '../components/ui/AdvancedScrollProgress'
import { cn } from '../utils'

interface LayoutProps {
  children: React.ReactNode
}

const navigation = [
  { name: 'Home', href: '/', icon: House },
  { name: 'About', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: RocketLaunch },
  { name: 'Skills', href: '/skills', icon: Cpu },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Certifications', href: '/certifications', icon: Certificate },
  { name: 'Blog', href: '/blog', icon: Article },
  { name: 'Contact', href: '/contact', icon: EnvelopeSimple },
]

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Magnetic strength={0.1}>
                <Link to="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MA</span>
                  </div>
                  <span className="font-bold text-lg sm:text-xl md:text-2xl hidden sm:block">Milton Armando</span>
                </Link>
              </Magnetic>
            </motion.div>            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navigation.map((item, index) => {
                const Icon = item.icon
                const isActive = location.pathname === item.href
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Magnetic strength={0.05}>                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors font-touch-friendly",
                          "hover:bg-accent hover:text-accent-foreground",
                          isActive 
                            ? "bg-accent text-accent-foreground" 
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {item.name}
                      </Link>
                    </Magnetic>
                  </motion.div>
                )
              })}
            </nav>

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden xl:block"
              >                <Badge variant="success" className="text-xs sm:text-sm font-touch-friendly">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  <span className="hidden sm:inline">Available for Projects</span>
                  <span className="sm:hidden">Available</span>
                </Badge>
              </motion.div>

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Magnetic strength={0.1}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light')}
                    className="w-9 h-9"
                  >
                    {theme === 'light' && <Sun className="h-4 w-4" />}
                    {theme === 'dark' && <Moon className="h-4 w-4" />}
                    {theme === 'system' && <Monitor className="h-4 w-4" />}
                  </Button>
                </Magnetic>
              </motion.div>              {/* Mobile/Tablet Menu Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="xl:hidden"
              >
                <Magnetic strength={0.1}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-9 h-9"
                  >
                    {mobileMenuOpen ? <X className="h-4 w-4" /> : <List className="h-4 w-4" />}
                  </Button>
                </Magnetic>
              </motion.div>
            </div>
          </div>
        </div>        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden border-t bg-background/95 backdrop-blur"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="space-y-2">
                  {navigation.map((item, index) => {
                    const Icon = item.icon
                    const isActive = location.pathname === item.href
                    
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          to={item.href}                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center px-3 py-2 rounded-lg text-base sm:text-lg font-medium transition-colors font-touch-friendly",
                            "hover:bg-accent hover:text-accent-foreground touch-manipulation",
                            isActive 
                              ? "bg-accent text-accent-foreground" 
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                          <span className="font-touch-friendly">{item.name}</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background/50 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">MA</span>
              </div>              <span className="text-sm sm:text-base text-muted-foreground font-touch-friendly leading-mobile-friendly">
                © 2025 Milton Armando. Crafted with passion.
              </span>
            </div>
            
            <div className="flex items-center space-x-4">              <Badge variant="outline" className="text-xs sm:text-sm font-touch-friendly">
                Expert-Level Portfolio
              </Badge>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
