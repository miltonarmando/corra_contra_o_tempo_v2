import { compositions } from '@/components/ui/theme'
import { Book, ArrowRight, FileText, Code, Lightbulb, Palette, Download } from '@phosphor-icons/react'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { 
  PageWrapper, 
  PageHeader, 
  FeatureCard 
} from '@/components/common'

export function Documentation() {
  const documentationSections = [
    {
      title: "Getting Started",
      description: "Installation, setup, and basic usage of the component library",
      icon: Lightbulb,
      color: "text-green-500",
      items: [
        "Installation Guide",
        "Quick Start Tutorial", 
        "Project Setup",
        "First Component"
      ]
    },
    {
      title: "Components",
      description: "Detailed documentation for each component with examples",
      icon: Palette,
      color: "text-blue-500",
      items: [
        "Button Component",
        "Card Components",
        "Form Elements",
        "Navigation Components"
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation with props, methods, and types",
      icon: Code,
      color: "text-purple-500", 
      items: [
        "Component Props",
        "TypeScript Types",
        "Event Handlers",
        "Styling APIs"
      ]
    },
    {
      title: "Design System",
      description: "Design principles, tokens, and theming guidelines",
      icon: Book,
      color: "text-orange-500",
      items: [
        "Color Palette",
        "Typography Scale",
        "Spacing System",
        "Theme Customization"
      ]
    }
  ]

  return (
    <PageWrapper>
      <div className={compositions.layout.section}>
        <div className={compositions.layout.container}>
          <PageHeader 
            icon={Book}
            title="Documentation"
            description="Comprehensive guides, API references, and best practices for using our React component library."
            badges={[
              { text: "v2.0.0", variant: "default" },
              { text: "TypeScript", variant: "success" },
              { text: "React 18", variant: "secondary" }
            ]}
          />

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <FeatureCard
              icon={Download}
              title="Quick Start"
              description="Get up and running with our component library in minutes."
              iconColor="text-green-500"
            >
              <div className="space-y-2 text-xs font-mono bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mb-4">
                <div>npm install @modern-ui/components</div>
                <div>yarn add @modern-ui/components</div>
              </div>
              <Link to="/components">
                <Button variant="outline" size="sm" className="w-full">
                  View Components
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </FeatureCard>

            <FeatureCard
              icon={Code}
              title="Examples"
              description="Interactive examples and live code demonstrations."
              iconColor="text-blue-500"
              delay={0.1}
            >
              <Link to="/playground">
                <Button variant="outline" size="sm" className="w-full">
                  Try Playground
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </FeatureCard>

            <FeatureCard
              icon={FileText}
              title="GitHub"
              description="Source code, issues, and contribution guidelines."
              iconColor="text-purple-500"
              delay={0.2}
            >
              <Button variant="outline" size="sm" className="w-full">
                View Repository
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </FeatureCard>
          </div>

          {/* Documentation Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {documentationSections.map((section, index) => (
              <FeatureCard
                key={section.title}
                icon={section.icon}
                title={section.title}
                description={section.description}
                iconColor={section.color}
                delay={0.6 + index * 0.1}
              >
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" size="sm" className="mt-4 w-full">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
