import { useState } from 'react'
import { 
  Sparkle, Palette, Code, Heart, 
  CaretDown, Check, Info, 
  User, Gear, Layout, Rows, List
} from '@phosphor-icons/react'
import { compositions } from '@/components/ui/theme'

import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { Accordion } from '@/components/ui/Accordion'
import { Alert } from '@/components/ui/Alert'
import { Avatar } from '@/components/ui/Avatar'
import { Progress } from '@/components/ui/Progress'

import { 
  PageWrapper, 
  PageHeader, 
  SectionNavigation, 
  ContentSection 
} from '@/components/common'

export function Showcase() {
  const [activeDemo, setActiveDemo] = useState('buttons')

  const demoSections = [
    { id: 'buttons', label: 'Buttons', icon: Code },
    { id: 'cards', label: 'Cards', icon: Palette },
    { id: 'forms', label: 'Forms', icon: Heart },
    { id: 'badges', label: 'Badges', icon: Sparkle },
    { id: 'accordion', label: 'Accordion', icon: CaretDown },
    { id: 'alert', label: 'Alert', icon: Info },
    { id: 'avatar', label: 'Avatar', icon: User },
    { id: 'breadcrumb', label: 'Breadcrumb', icon: Layout },
    { id: 'checkbox', label: 'Checkbox', icon: Check },
    { id: 'modal', label: 'Modal', icon: Gear },
    { id: 'progress', label: 'Progress', icon: List },
    { id: 'radio', label: 'Radio', icon: Sparkle },
    { id: 'select', label: 'Select', icon: CaretDown },
    { id: 'separator', label: 'Separator', icon: Layout },
    { id: 'switch', label: 'Switch', icon: Gear },
    { id: 'table', label: 'Table', icon: Rows },
    { id: 'tabs', label: 'Tabs', icon: List },
    { id: 'tooltip', label: 'Tooltip', icon: Info }
  ]

  const renderButtonsDemo = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Button Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4">Button Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>
    </div>
  )

  const renderBadgesDemo = () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium mb-4">Badge Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>
    </div>
  )

  const renderFormsDemo = () => (
    <div className="space-y-6 max-w-md">
      <div>
        <label className="block text-sm font-medium mb-2">Username</label>
        <Input placeholder="Enter your username" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <Input type="email" placeholder="Enter your email" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Password</label>
        <Input type="password" placeholder="Enter your password" />
      </div>
    </div>
  )

  const renderDemoContent = () => {
    switch (activeDemo) {
      case 'buttons':
        return renderButtonsDemo()
      case 'badges':
        return renderBadgesDemo()
      case 'forms':
        return renderFormsDemo()
      case 'accordion':
        return (
          <div className="max-w-md">            <Accordion
              items={[
                {
                  title: "What is included?",
                  content: "Access to 50+ React components, complete documentation, and TypeScript support."
                },
                {
                  title: "How to get started?",
                  content: "Install the package via npm and import the components you need."
                },
                {
                  title: "Is it customizable?",
                  content: "Yes! All components support custom styling and theming."
                }
              ]}
            />
          </div>
        )
      case 'alert':
        return (
          <div className="space-y-4">
            <Alert variant="info">
              <Info className="w-4 h-4" />
              This is an info alert
            </Alert>
            <Alert variant="success">
              <Check className="w-4 h-4" />
              This is a success alert
            </Alert>
            <Alert variant="warning">
              <Info className="w-4 h-4" />
              This is a warning alert
            </Alert>
            <Alert variant="destructive">
              <Info className="w-4 h-4" />
              This is a destructive alert
            </Alert>
          </div>
        )
      case 'avatar':
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-4">Avatar Sizes</h3>
              <div className="flex items-center gap-4">
                <Avatar size="sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="Small avatar" />
                <Avatar size="md" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Medium avatar" />
                <Avatar size="lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=56&h=56&fit=crop&crop=face" alt="Large avatar" />
                <Avatar size="xl" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" alt="Extra large avatar" />
              </div>
            </div>
          </div>
        )
      case 'progress':
        return (
          <div className="space-y-4">
            <Progress value={25} />
            <Progress value={50} />
            <Progress value={75} />
            <Progress value={100} />
          </div>
        )
      default:
        return renderButtonsDemo()
    }
  }

  return (
    <PageWrapper>
      <div className={compositions.layout.section}>
        <div className={compositions.layout.container}>
          <PageHeader 
            icon={Sparkle}
            title="Component Showcase"
            description="Explore our complete collection of UI components with live examples and interactive demonstrations."
            badges={[
              { text: "Live Examples", variant: "success" },
              { text: "Interactive", variant: "default" },
              { text: "Copy Code", variant: "secondary" }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <SectionNavigation 
              sections={demoSections}
              activeSection={activeDemo}
              onSectionChange={setActiveDemo}
              title="Showcase"
            />

            <ContentSection 
              title={demoSections.find(s => s.id === activeDemo)?.label || 'Components'}
              description="Interactive examples and live demonstrations"
            >
              {renderDemoContent()}
            </ContentSection>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
