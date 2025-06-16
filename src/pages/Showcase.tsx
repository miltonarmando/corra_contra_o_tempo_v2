import { useState } from 'react'
import { 
  Sparkle, Code, Heart, 
  CaretDown, Check, Info, 
  User, Gear, Layout, Rows, List, ToggleLeft, ChartBar
} from '@phosphor-icons/react'
import { compositions } from '@/components/ui/theme'

import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { Accordion } from '@/components/ui/Accordion'
import { Alert } from '@/components/ui/Alert'
import { Avatar } from '@/components/ui/Avatar'
import { Progress } from '@/components/ui/Progress'
import { Checkbox } from '@/components/ui/Checkbox'
import { Switch } from '@/components/ui/Switch'
import { Table } from '@/components/ui/Table'

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
    { id: 'forms', label: 'Forms', icon: Heart },
    { id: 'badges', label: 'Badges', icon: Sparkle },
    { id: 'checkbox', label: 'Checkbox', icon: Check },
    { id: 'switch', label: 'Switch', icon: ToggleLeft },
    { id: 'progress', label: 'Progress', icon: ChartBar },
    { id: 'table', label: 'Table', icon: Rows },
    { id: 'accordion', label: 'Accordion', icon: CaretDown },
    { id: 'alert', label: 'Alert', icon: Info },
    { id: 'avatar', label: 'Avatar', icon: User },
    { id: 'breadcrumb', label: 'Breadcrumb', icon: Layout },
    { id: 'modal', label: 'Modal', icon: Gear },
    { id: 'radio', label: 'Radio', icon: Sparkle },
    { id: 'select', label: 'Select', icon: CaretDown },
    { id: 'separator', label: 'Separator', icon: Layout },
    { id: 'tabs', label: 'Tabs', icon: List },
    { id: 'tooltip', label: 'Tooltip', icon: Info }
  ]

  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [switchChecked, setSwitchChecked] = useState(false)

  const tableData = [
    { id: 1, name: 'Alice Johnson', role: 'Admin', status: 'Active', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', role: 'Editor', status: 'Active', email: 'bob@example.com' },
    { id: 3, name: 'Carol Wilson', role: 'User', status: 'Inactive', email: 'carol@example.com' },
  ]

  const tableColumns = [
    { header: 'Name', accessor: 'name' as const, sortable: true },
    { header: 'Role', accessor: 'role' as const, sortable: true },
    { 
      header: 'Status', 
      accessor: 'status' as const, 
      sortable: true,
      cell: (row: typeof tableData[0]) => (
        <Badge variant={row.status === 'Active' ? 'success' : 'secondary'}>
          {row.status}
        </Badge>
      )
    }
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

  const renderCheckboxDemo = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Checkbox Examples</h3>
        <div className="space-y-4">
          <Checkbox
            checked={checkboxChecked}
            onChange={(e) => setCheckboxChecked(e.target.checked)}
            label="I agree to the terms and conditions"
          />
          <Checkbox
            checked={true}
            onChange={() => {}}
            label="Pre-checked checkbox"
            description="This checkbox is checked by default"
          />
          <Checkbox
            checked={false}
            onChange={() => {}}
            indeterminate={true}
            label="Indeterminate state"
            description="Shows mixed selection state"
          />
          <Checkbox
            checked={false}
            onChange={() => {}}
            disabled={true}
            label="Disabled checkbox"
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4">Checkbox Sizes</h3>
        <div className="space-y-3">
          <Checkbox size="sm" label="Small checkbox" />
          <Checkbox size="md" label="Medium checkbox" />
          <Checkbox size="lg" label="Large checkbox" />
        </div>
      </div>
    </div>
  )

  const renderSwitchDemo = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Switch Examples</h3>
        <div className="space-y-4">
          <Switch
            checked={switchChecked}
            onCheckedChange={setSwitchChecked}
            label="Enable notifications"
            description="Receive email notifications about updates"
          />
          <Switch
            checked={true}
            onCheckedChange={() => {}}
            label="Dark mode enabled"
          />
          <Switch
            checked={false}
            onCheckedChange={() => {}}
            disabled={true}
            label="Disabled switch"
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4">Switch Sizes</h3>
        <div className="space-y-3">
          <Switch size="sm" checked={false} onCheckedChange={() => {}} label="Small switch" />
          <Switch size="md" checked={false} onCheckedChange={() => {}} label="Medium switch" />
          <Switch size="lg" checked={false} onCheckedChange={() => {}} label="Large switch" />
        </div>
      </div>
    </div>
  )

  const renderProgressDemo = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Progress Variants</h3>
        <div className="space-y-4">
          <div>
            <div className="text-sm font-medium mb-2">Default Progress (75%)</div>
            <Progress value={75} variant="default" />
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Success Progress (100%)</div>
            <Progress value={100} variant="success" />
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Warning Progress (45%)</div>
            <Progress value={45} variant="warning" />
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Error Progress (25%)</div>
            <Progress value={25} variant="destructive" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4">Progress Sizes</h3>
        <div className="space-y-4">
          <div>
            <div className="text-sm font-medium mb-2">Small Progress</div>
            <Progress value={60} size="sm" />
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Medium Progress</div>
            <Progress value={60} size="md" />
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Large Progress</div>
            <Progress value={60} size="lg" />
          </div>
        </div>
      </div>
    </div>
  )

  const renderTableDemo = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium mb-4">Data Table</h3>
      <Table
        columns={tableColumns}
        data={tableData}
        selectable
        caption="Example user management table"
      />
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
      case 'checkbox':
        return renderCheckboxDemo()
      case 'switch':
        return renderSwitchDemo()
      case 'progress':
        return renderProgressDemo()
      case 'table':
        return renderTableDemo()
      case 'accordion':
        return (
          <div className="max-w-md">
            <Accordion
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
