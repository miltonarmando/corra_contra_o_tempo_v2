import { useState } from 'react'
import { compositions } from '@/components/ui/theme'
import { Code, Gear, Play, Table, ToggleLeft, Check, ChartBar, Palette, Sun, Moon, Monitor } from '@phosphor-icons/react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { Checkbox } from '@/components/ui/Checkbox'
import { Switch } from '@/components/ui/Switch'
import { Progress } from '@/components/ui/Progress'
import { Table as TableComponent } from '@/components/ui/Table'
import { Card } from '@/components/ui/Card'
import { Alert } from '@/components/ui/Alert'
import { useTheme } from '@/hooks/useTheme'
import { Link } from 'react-router-dom'
import { 
  Select 
} from '@/components/ui/SimpleComponents'
import { 
  PageWrapper, 
  PageHeader, 
  SectionNavigation, 
  ContentSection 
} from '@/components/common'

export function Playground() {
  const { theme, setTheme, actualTheme } = useTheme()
  const [activeDemo, setActiveDemo] = useState('button')
  
  // Button state
  const [buttonVariant, setButtonVariant] = useState<'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'>('primary')
  const [buttonSize, setButtonSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md')
  const [buttonText, setButtonText] = useState('Click me')
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  // Checkbox state
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [checkboxLabel, setCheckboxLabel] = useState('Accept terms and conditions')
  const [checkboxSize, setCheckboxSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [checkboxDisabled, setCheckboxDisabled] = useState(false)
  const [checkboxIndeterminate, setCheckboxIndeterminate] = useState(false)

  // Switch state
  const [switchChecked, setSwitchChecked] = useState(false)
  const [switchLabel, setSwitchLabel] = useState('Enable notifications')
  const [switchSize, setSwitchSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [switchDisabled, setSwitchDisabled] = useState(false)

  // Progress state
  const [progressValue, setProgressValue] = useState(65)
  const [progressVariant, setProgressVariant] = useState<'default' | 'success' | 'warning' | 'destructive'>('default')

  // Table state
  const [tableData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Editor', status: 'Inactive' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'User', status: 'Active' },
  ])

  const demos = [
    { id: 'button', label: 'Button', icon: Code },
    { id: 'checkbox', label: 'Checkbox', icon: Check },
    { id: 'switch', label: 'Switch', icon: ToggleLeft },
    { id: 'progress', label: 'Progress', icon: ChartBar },
    { id: 'table', label: 'Table', icon: Table },
    { id: 'theme', label: 'Theme', icon: Gear }
  ]

  const buttonVariants = [
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'outline', label: 'Outline' },
    { value: 'ghost', label: 'Ghost' },
    { value: 'destructive', label: 'Destructive' }
  ]

  const sizes = [
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' }
  ]

  const buttonSizes = [
    ...sizes,
    { value: 'xl', label: 'Extra Large' }
  ]

  const progressVariants = [
    { value: 'default', label: 'Default' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'destructive', label: 'Destructive' }
  ]

  const tableColumns = [
    { header: 'Name', accessor: 'name' as const, sortable: true },
    { header: 'Email', accessor: 'email' as const, sortable: true },
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

  const renderButtonPlayground = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Controls */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Customize Button</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Button Text</label>
            <Input 
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              placeholder="Enter button text"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Variant</label>
            <Select 
              value={buttonVariant}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setButtonVariant(e.target.value as typeof buttonVariant)}
              options={buttonVariants}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Size</label>
            <Select 
              value={buttonSize}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setButtonSize(e.target.value as typeof buttonSize)}
              options={buttonSizes}
            />
          </div>

          <div>
            <Switch 
              checked={isButtonDisabled}
              onCheckedChange={setIsButtonDisabled}
              label="Disabled"
            />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Preview</h3>
        <div className="min-h-[200px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <Button 
            variant={buttonVariant}
            size={buttonSize}
            disabled={isButtonDisabled}
          >
            {buttonText}
          </Button>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Code</h4>
          <pre className="text-xs text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
{`<Button 
  variant="${buttonVariant}"
  size="${buttonSize}"${isButtonDisabled ? '\n  disabled' : ''}
>
  ${buttonText}
</Button>`}
          </pre>
        </div>
      </div>
    </div>
  )

  const renderCheckboxPlayground = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Controls */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Customize Checkbox</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Label</label>
            <Input 
              value={checkboxLabel}
              onChange={(e) => setCheckboxLabel(e.target.value)}
              placeholder="Enter checkbox label"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Size</label>
            <Select 
              value={checkboxSize}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCheckboxSize(e.target.value as typeof checkboxSize)}
              options={sizes}
            />
          </div>

          <div className="space-y-2">
            <Switch 
              checked={checkboxDisabled}
              onCheckedChange={setCheckboxDisabled}
              label="Disabled"
            />
            <Switch 
              checked={checkboxIndeterminate}
              onCheckedChange={setCheckboxIndeterminate}
              label="Indeterminate"
            />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Preview</h3>
        <div className="min-h-[200px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <Checkbox
            checked={checkboxChecked}
            onChange={(e) => setCheckboxChecked(e.target.checked)}
            label={checkboxLabel}
            size={checkboxSize}
            disabled={checkboxDisabled}
            indeterminate={checkboxIndeterminate}
          />
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Code</h4>
          <pre className="text-xs text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
{`<Checkbox
  checked={${checkboxChecked}}
  onChange={(e) => setChecked(e.target.checked)}
  label="${checkboxLabel}"
  size="${checkboxSize}"${checkboxDisabled ? '\n  disabled' : ''}${checkboxIndeterminate ? '\n  indeterminate' : ''}
/>`}
          </pre>
        </div>
      </div>
    </div>
  )

  const renderSwitchPlayground = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Controls */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Customize Switch</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Label</label>
            <Input 
              value={switchLabel}
              onChange={(e) => setSwitchLabel(e.target.value)}
              placeholder="Enter switch label"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Size</label>
            <Select 
              value={switchSize}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSwitchSize(e.target.value as typeof switchSize)}
              options={sizes}
            />
          </div>

          <div>
            <Switch 
              checked={switchDisabled}
              onCheckedChange={setSwitchDisabled}
              label="Disabled"
            />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Preview</h3>
        <div className="min-h-[200px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <Switch
            checked={switchChecked}
            onCheckedChange={setSwitchChecked}
            label={switchLabel}
            size={switchSize}
            disabled={switchDisabled}
          />
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Code</h4>
          <pre className="text-xs text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
{`<Switch
  checked={${switchChecked}}
  onCheckedChange={setChecked}
  label="${switchLabel}"
  size="${switchSize}"${switchDisabled ? '\n  disabled' : ''}
/>`}
          </pre>
        </div>
      </div>
    </div>
  )

  const renderProgressPlayground = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Controls */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Customize Progress</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Value ({progressValue}%)</label>
            <input 
              type="range"
              min="0"
              max="100"
              value={progressValue}
              onChange={(e) => setProgressValue(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Variant</label>
            <Select 
              value={progressVariant}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setProgressVariant(e.target.value as typeof progressVariant)}
              options={progressVariants}
            />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Preview</h3>
        <div className="min-h-[200px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-8">
          <div className="w-full max-w-md space-y-4">
            <Progress
              value={progressValue}
              variant={progressVariant}
              className="w-full"
            />
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              {progressValue}% complete
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Code</h4>
          <pre className="text-xs text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
{`<Progress
  value={${progressValue}}
  variant="${progressVariant}"
  className="w-full"
/>`}
          </pre>
        </div>
      </div>
    </div>
  )

  const renderTablePlayground = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Table Example</h3>
      
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-6">
        <TableComponent
          columns={tableColumns}
          data={tableData}
          selectable
          caption="User management table with sorting and selection"
        />
      </div>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <h4 className="text-sm font-medium mb-2">Code</h4>
        <pre className="text-xs text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
{`const columns = [
  { header: 'Name', accessor: 'name', sortable: true },
  { header: 'Email', accessor: 'email', sortable: true },
  { header: 'Role', accessor: 'role', sortable: true },
  { 
    header: 'Status', 
    accessor: 'status', 
    sortable: true,
    cell: (row) => (
      <Badge variant={row.status === 'Active' ? 'success' : 'secondary'}>
        {row.status}
      </Badge>
    )
  }
]

<Table
  columns={columns}
  data={data}
  selectable
  caption="User management table"
/>`}
        </pre>
      </div>
    </div>
  )
  const renderThemePlayground = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-6">Theme Switcher</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-3">Current Theme</label>
            <div className="flex gap-3">
              <button
                onClick={() => setTheme('light')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  theme === 'light' 
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-900/20 dark:border-indigo-500 dark:text-indigo-300' 
                    : 'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600'
                }`}
              >
                <Sun className="w-4 h-4" />
                Light
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  theme === 'dark' 
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-900/20 dark:border-indigo-500 dark:text-indigo-300' 
                    : 'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600'
                }`}
              >
                <Moon className="w-4 h-4" />
                Dark
              </button>
              <button
                onClick={() => setTheme('system')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  theme === 'system' 
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-900/20 dark:border-indigo-500 dark:text-indigo-300' 
                    : 'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600'
                }`}
              >
                <Monitor className="w-4 h-4" />
                System
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Active theme: {actualTheme} | Selected: {theme}
            </p>
          </div>

          <div>
            <h4 className="text-md font-medium mb-4">Component Showcase in Current Theme</h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card with various components */}
              <Card className="p-6 space-y-4">
                <h5 className="font-semibold">Interactive Components</h5>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Primary</Button>
                    <Button variant="secondary" size="sm">Secondary</Button>
                    <Button variant="outline" size="sm">Outline</Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                  </div>
                  
                  <Input placeholder="Sample input field" />
                  
                  <div className="flex items-center gap-4">
                    <Checkbox 
                      checked={true} 
                      onChange={() => {}} 
                      label="Checkbox" 
                    />
                    <Switch 
                      checked={true} 
                      onCheckedChange={() => {}} 
                      label="Switch" 
                    />
                  </div>
                  
                  <Progress value={75} variant="default" />
                </div>
              </Card>

              {/* Alerts showcase */}
              <div className="space-y-3">
                <Alert variant="info">
                  <Palette className="w-4 h-4" />
                  This is how alerts look in the current theme
                </Alert>
                
                <Alert variant="success">
                  <Check className="w-4 h-4" />
                  Success alert styling
                </Alert>
                
                <Alert variant="warning">
                  <Gear className="w-4 h-4" />
                  Warning alert example
                </Alert>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-md font-medium mb-4">Theme System Code</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <pre className="text-xs text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
{`// Theme Hook Usage
import { useTheme } from '@/hooks/useTheme'

function MyComponent() {
  const { theme, setTheme, actualTheme } = useTheme()
  
  return (
    <div>
      <p>Current theme: {actualTheme}</p>
      <button onClick={() => setTheme('${theme === 'light' ? 'dark' : 'light'}')}>
        Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  )
}

// Theme tokens are automatically applied to all components
// based on the current theme (${actualTheme})`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderDemoContent = () => {
    switch (activeDemo) {
      case 'button':
        return renderButtonPlayground()
      case 'checkbox':
        return renderCheckboxPlayground()
      case 'switch':
        return renderSwitchPlayground()
      case 'progress':
        return renderProgressPlayground()
      case 'table':
        return renderTablePlayground()
      case 'theme':
        return renderThemePlayground()
      default:
        return renderButtonPlayground()
    }
  }

  return (
    <PageWrapper>
      <div className={compositions.layout.section}>
        <div className={compositions.layout.container}>
          <PageHeader 
            icon={Play}
            title="Interactive Playground"
            description="Experiment with our components in real-time. Customize properties, see live previews, and generate code snippets."
            badges={[
              { text: "Live Preview", variant: "success" },
              { text: "Code Generation", variant: "default" },
              { text: "Interactive", variant: "secondary" }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <SectionNavigation 
              sections={demos}
              activeSection={activeDemo}
              onSectionChange={setActiveDemo}
              title="Playgrounds"
            />

            <ContentSection 
              title={demos.find(s => s.id === activeDemo)?.label || 'Playground'}
              description="Customize and experiment with component properties."
              className="lg:col-span-3"
            >
              {renderDemoContent()}
            </ContentSection>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/components">
                <Button>
                  View All Components
                </Button>
              </Link>
              <Link to="/documentation">
                <Button variant="outline">
                  Read Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
