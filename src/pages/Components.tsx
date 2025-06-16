import { useState } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { compositions, tokens } from '@/components/ui/theme'
import { cn } from '@/utils'
import { 
  Palette, Code, Heart, CaretDown, Check, Info, 
  User, Gear, Layout, Rows, List, Sparkle 
} from '@phosphor-icons/react'

import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { Accordion } from '@/components/ui/Accordion'
import { Alert } from '@/components/ui/Alert'
import { Avatar } from '@/components/ui/Avatar'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Progress } from '@/components/ui/Progress'
import { 
  Checkbox, 
  Radio, 
  Select, 
  Separator, 
  Switch, 
  Table, 
  Tabs, 
  Tooltip
} from '@/components/ui/SimpleComponents'

import { 
  PageWrapper, 
  PageHeader, 
  SectionNavigation, 
  ContentSection 
} from '@/components/common'

export function Components() {
  const { actualTheme: theme } = useTheme()
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
    <div className="space-y-6">
      <div>
        <h3 className={cn("text-lg font-medium mb-4", tokens[theme].text.primary)}>
          Button Variants
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
      <div>
        <h3 className={cn("text-lg font-medium mb-4", tokens[theme].text.primary)}>
          Button Sizes
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>
    </div>
  )

  const renderCardsDemo = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <h3 className={cn("text-lg font-semibold", tokens[theme].text.primary)}>
            Basic Card
          </h3>
        </CardHeader>
        <CardContent>
          <p className={cn("text-sm", tokens[theme].text.secondary)}>
            This is a basic card component with header and content areas.
          </p>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <h3 className={cn("text-lg font-semibold", tokens[theme].text.primary)}>
            Interactive Card
          </h3>
        </CardHeader>
        <CardContent>
          <p className={cn("text-sm", tokens[theme].text.secondary)}>
            This card has hover effects and interactive styling.
          </p>
        </CardContent>
      </Card>
    </div>
  )

  const renderFormsDemo = () => (
    <div className="space-y-6 max-w-md">
      <div>
        <label className={cn("block text-sm font-medium mb-2", tokens[theme].text.primary)}>
          Username
        </label>
        <Input placeholder="Enter your username" />
      </div>
      <div>
        <label className={cn("block text-sm font-medium mb-2", tokens[theme].text.primary)}>
          Email
        </label>
        <Input type="email" placeholder="Enter your email" />
      </div>
      <div>
        <label className={cn("block text-sm font-medium mb-2", tokens[theme].text.primary)}>
          Password
        </label>
        <Input type="password" placeholder="Enter your password" />
      </div>
    </div>
  )

  const renderBadgesDemo = () => (
    <div className="space-y-4">
      <div>
        <h3 className={cn("text-lg font-medium mb-4", tokens[theme].text.primary)}>
          Badge Variants
        </h3>
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

  const renderAccordionDemo = () => (
    <div className="max-w-md">
      <Accordion 
        items={[
          {
            title: "What is this component library?",
            content: "This is a modern React component library built with TypeScript and Tailwind CSS."
          },
          {
            title: "How do I use these components?",
            content: "Simply import the components you need and use them in your React application."
          },
          {
            title: "Are these components accessible?",
            content: "Yes, all components are built with accessibility in mind and follow ARIA guidelines."
          }
        ]}
      />
    </div>
  )
  const renderAlertDemo = () => (
    <div className="space-y-4">
      <Alert variant="info">
        <Info className="w-4 h-4" />
        This is an informational alert.
      </Alert>
      <Alert variant="success">
        <Check className="w-4 h-4" />
        Operation completed successfully!
      </Alert>
      <Alert variant="warning">
        <Info className="w-4 h-4" />
        Please review your input.
      </Alert>
      <Alert variant="destructive">
        <Info className="w-4 h-4" />
        An error occurred.
      </Alert>
    </div>
  )

  const renderAvatarDemo = () => (
    <div className="space-y-4">
      <div>
        <h3 className={cn("text-lg font-medium mb-4", tokens[theme].text.primary)}>
          Avatar Sizes
        </h3>
        <div className="flex items-center gap-4">
          <Avatar size="sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="Small avatar" />
          <Avatar size="md" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Medium avatar" />
          <Avatar size="lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=56&h=56&fit=crop&crop=face" alt="Large avatar" />
          <Avatar size="xl" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" alt="Extra large avatar" />
        </div>
      </div>
    </div>
  )

  const renderProgressDemo = () => (
    <div className="space-y-4">
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </div>
  )

  const renderComponentDemo = () => {
    switch (activeDemo) {
      case 'buttons': return renderButtonsDemo()
      case 'cards': return renderCardsDemo()
      case 'forms': return renderFormsDemo()
      case 'badges': return renderBadgesDemo()
      case 'accordion': return renderAccordionDemo()
      case 'alert': return renderAlertDemo()
      case 'avatar': return renderAvatarDemo()
      case 'progress': return renderProgressDemo()
      case 'breadcrumb': 
        return (
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Components', href: '/components' },
              { label: 'Breadcrumb' }
            ]}
          />
        )
      case 'checkbox':
        return (
          <div className="space-y-4">
            <Checkbox label="Option 1" />
            <Checkbox label="Option 2" checked />
            <Checkbox label="Option 3 (disabled)" disabled />
          </div>        )
      case 'radio':
        return (
          <Radio.Group>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Radio.Item name="example" value="1" id="option1" />
                <label htmlFor="option1" className={cn("text-sm", tokens[theme].text.primary)}>Option 1</label>
              </div>
              <div className="flex items-center space-x-2">
                <Radio.Item name="example" value="2" id="option2" defaultChecked />
                <label htmlFor="option2" className={cn("text-sm", tokens[theme].text.primary)}>Option 2</label>
              </div>
              <div className="flex items-center space-x-2">
                <Radio.Item name="example" value="3" id="option3" />
                <label htmlFor="option3" className={cn("text-sm", tokens[theme].text.primary)}>Option 3</label>
              </div>
            </div>
          </Radio.Group>
        )
      case 'select':
        return (
          <Select 
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
              { value: '3', label: 'Option 3' }
            ]}
            placeholder="Select an option"
          />
        )
      case 'separator':
        return (
          <div className="space-y-4">
            <p>Content above separator</p>
            <Separator />
            <p>Content below separator</p>
          </div>
        )
      case 'switch':
        return (
          <div className="space-y-4">
            <Switch label="Enable notifications" />
            <Switch label="Dark mode" defaultChecked />
            <Switch label="Disabled option" disabled />
          </div>
        )
      case 'table':
        return (
          <Table 
            headers={['Name', 'Email', 'Role']}
            rows={[
              ['John Doe', 'john@example.com', 'Admin'],
              ['Jane Smith', 'jane@example.com', 'User'],
              ['Bob Johnson', 'bob@example.com', 'Editor']            ]}
          />
        )
      case 'tabs':
        return (
          <Tabs.Root defaultValue="tab1">
            <Tabs.List>
              <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">Content for tab 1</Tabs.Content>
            <Tabs.Content value="tab2">Content for tab 2</Tabs.Content>
            <Tabs.Content value="tab3">Content for tab 3</Tabs.Content>
          </Tabs.Root>
        )
      case 'tooltip':
        return (
          <div className="text-center">
            <Tooltip content="This is a helpful tooltip">
              <Button>Hover me for tooltip</Button>
            </Tooltip>
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
            icon={Palette}
            title="Component Library"
            description="Explore our comprehensive collection of React components with live examples and interactive demos."
            badges={[
              { text: "50+ Components", variant: "default" },
              { text: "TypeScript", variant: "success" },
              { text: "Accessible", variant: "secondary" }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <SectionNavigation 
              sections={demoSections}
              activeSection={activeDemo}
              onSectionChange={setActiveDemo}
              title="Components"
            />

            <ContentSection 
              title={demoSections.find(s => s.id === activeDemo)?.label || 'Components'}
              description="Interactive demo and examples"
            >
              {renderComponentDemo()}
            </ContentSection>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
