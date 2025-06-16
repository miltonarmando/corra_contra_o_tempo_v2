import { useTheme } from '@/hooks/useTheme'
import { compositions, tokens } from '@/components/ui/theme'
import { cn } from '@/utils'
import { Sparkle, ArrowRight, Palette, Book, Code } from '@phosphor-icons/react'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  PageWrapper, 
  FeatureCard 
} from '@/components/common'

export function Home() {
  const { actualTheme: theme } = useTheme()

  const features = [
    {
      title: "50+ Components",
      description: "A comprehensive library of modern, accessible React components built with TypeScript.",
      icon: Palette,
      color: "text-blue-500",
      link: "/components"
    },
    {
      title: "Documentation",
      description: "Complete guides, API references, and best practices for every component.",
      icon: Book,
      color: "text-green-500",
      link: "/documentation"
    },
    {
      title: "Interactive Playground",
      description: "Experiment with components in real-time and generate code snippets.",
      icon: Code,
      color: "text-purple-500",
      link: "/playground"
    }
  ]

  return (
    <PageWrapper className={cn("relative overflow-hidden", tokens[theme].gradient.surface)}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-orange-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 20, 0],
            rotate: [0, 3, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-xl"
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={compositions.layout.section}
      >
        <div className={compositions.layout.container}>
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className={cn(
                "w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-8",
                tokens[theme].background.brand,
                "shadow-2xl"
              )}>
                <Sparkle className="w-12 h-12 text-white" weight="duotone" />
              </div>              <h1 className={cn(
                compositions.text.display,
                tokens[theme].text.primary,
                "mb-6 text-5xl md:text-6xl lg:text-7xl"
              )}>
                Modern UI Components
              </h1>

              <p className={cn(
                compositions.text.bodyLarge,
                tokens[theme].text.muted,
                "mb-12 max-w-2xl mx-auto text-lg"
              )}>
                Build beautiful, accessible applications with our comprehensive React component library. 
                Designed for developers who value quality, performance, and exceptional user experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/components">
                  <Button size="lg" className="shadow-lg">
                    Explore Components
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/documentation">
                  <Button variant="outline" size="lg">
                    Read Documentation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className={compositions.layout.section}>
        <div className={compositions.layout.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className={cn(
              compositions.text.display,
              tokens[theme].text.primary,
              "mb-4"
            )}>
              Everything You Need
            </h2>
            <p className={cn(
              compositions.text.bodyLarge,
              tokens[theme].text.muted,
              "max-w-2xl mx-auto"
            )}>
              From simple buttons to complex data tables, our component library has you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconColor={feature.color}
                delay={0.6 + index * 0.1}
              >
                <Link to={feature.link}>
                  <Button variant="ghost" size="sm" className="mt-4 w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={cn(compositions.layout.section, tokens[theme].background.secondary)}>
        <div className={compositions.layout.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className={cn("text-3xl font-bold mb-2", tokens[theme].text.primary)}>50+</div>
              <div className={cn("text-sm", tokens[theme].text.muted)}>Components</div>
            </div>
            <div>
              <div className={cn("text-3xl font-bold mb-2", tokens[theme].text.primary)}>100%</div>
              <div className={cn("text-sm", tokens[theme].text.muted)}>TypeScript</div>
            </div>
            <div>
              <div className={cn("text-3xl font-bold mb-2", tokens[theme].text.primary)}>A11Y</div>
              <div className={cn("text-sm", tokens[theme].text.muted)}>Accessible</div>
            </div>
            <div>
              <div className={cn("text-3xl font-bold mb-2", tokens[theme].text.primary)}>24/7</div>
              <div className={cn("text-sm", tokens[theme].text.muted)}>Support</div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
