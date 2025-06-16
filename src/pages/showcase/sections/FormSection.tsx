import { motion } from 'framer-motion'
import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Switch } from '@/components/ui/Switch'
import { Checkbox } from '@/components/ui/Checkbox'
import { Radio } from '@/components/ui/Radio'
import { Tooltip } from '@/components/ui/Tooltip'
import { cn } from '@/utils'
import { tokens, compositions } from '@/components/ui/theme'
import { 
  MagnifyingGlass, 
  Warning, 
  Info,
  Check
} from '@phosphor-icons/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
}

import { SectionProps } from './types'

interface RadioOption {
  value: string
  label: string
}

export function FormSection({ theme }: SectionProps) {
  const [isEnabled, setIsEnabled] = useState(false)
  const [selectedRadio, setSelectedRadio] = useState('')
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [hasError, setHasError] = useState(false)
  const [password, setPassword] = useState('')

  // Radio options
  const radioOptions: RadioOption[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]

  // Password validation on change
  const handlePasswordChange = (value: string) => {
    setPassword(value)
    setHasError(value.length > 0 && value.length < 8)
  }

  return (    <div className={cn(
      "relative space-y-12 pb-8",
      compositions.section.elevated,
      "before:absolute before:inset-0 before:bg-gradient-to-b before:from-sky-50/50 before:to-transparent before:pointer-events-none dark:before:from-sky-950/20"
    )}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Input Fields */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="relative flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <h2 className={cn(
                compositions.text.heading,
                "bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent",
                "dark:from-white dark:to-gray-200"
              )}>
                Input Fields
              </h2>
              <Tooltip content="Examples of various input field types and states">
                <Info 
                  className={cn(
                    "w-6 h-6 cursor-help transition-colors",
                    tokens[theme].icon.tertiary,
                    "hover:" + tokens[theme].icon.primary
                  )}
                  weight="duotone"
                  aria-label="Input field information"
                />
              </Tooltip>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div className="relative group">
                <Input 
                  label="Username"
                  placeholder="Enter your username"
                  className={compositions.field.base}
                  aria-label="Username input"
                />
              </div>
              
              <div className="relative group">
                <Input 
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  placeholder="Enter your password"
                  error={hasError}
                  className={cn(
                    compositions.field.base,
                    hasError && compositions.field.error
                  )}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? "password-error" : undefined}
                />
                <div className="absolute right-3 top-9 flex items-center">
                  {hasError ? (
                    <Tooltip content="Password must be at least 8 characters">
                      <Warning 
                        className={cn(
                          "w-5 h-5",
                          tokens[theme].icon.destructive,
                          "animate-pulse"
                        )}
                        weight="duotone"
                        aria-label="Password error"
                      />
                    </Tooltip>
                  ) : password.length >= 8 && (
                    <Check 
                      className={cn(
                        "w-5 h-5",
                        tokens[theme].icon.success
                      )}
                      weight="duotone"
                      aria-label="Password valid"
                    />
                  )}
                </div>
                {hasError && (
                  <p id="password-error" className={cn(
                    "mt-1.5 text-sm font-medium",
                    tokens[theme].text.destructive,
                    "animate-appear"
                  )}>
                    Password must be at least 8 characters
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative group">
                <Input 
                  label="Search"
                  placeholder="Search anything..."
                  className={cn(
                    compositions.field.base,
                    "pl-10"
                  )}
                  aria-label="Search input"
                />
                <MagnifyingGlass 
                  className={cn(
                    "absolute left-3 top-9 w-5 h-5 transition-colors",
                    tokens[theme].icon.secondary,
                    "group-hover:" + tokens[theme].icon.primary
                  )}
                />
              </div>

              <div className="relative">
                <Input 
                  label="Disabled Input"
                  readOnly
                  placeholder="This input is disabled"
                  className={compositions.field.disabled}
                  aria-label="This input is disabled"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Select & Dropdowns */}
        <motion.div variants={itemVariants} className="space-y-6 pt-4">
          <div className="flex items-center space-x-2 mb-6">
            <h2 className={compositions.text.heading}>
              Select & Dropdowns
            </h2>
            <Tooltip content="Different types of dropdown selectors">
              <Info 
                className={cn(
                  "w-5 h-5 cursor-help transition-colors",
                  tokens[theme].icon.secondary,
                  "hover:" + tokens[theme].icon.primary
                )}
                weight="duotone"
                aria-label="Select information"
              />
            </Tooltip>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <Select
                label="Basic Select"
                placeholder="Choose an option"
                options={[
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                  { value: '3', label: 'Option 3' }
                ]}
                className={compositions.field.base}
              />
            </div>

            <div className="relative">
              <Select
                label="Disabled Select"
                placeholder="Select is disabled"
                options={[]}
                className={compositions.field.disabled}
                aria-label="Disabled select dropdown"
              />
            </div>
          </div>
        </motion.div>

        {/* Toggles & Switches */}
        <motion.div variants={itemVariants} className="space-y-6 pt-4">
          <h2 className={compositions.text.heading}>
            Toggles & Switches
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <Tooltip content={isEnabled ? 'Click to disable' : 'Click to enable'}>
                <div className={cn(
                  "flex items-center justify-between group p-2 -m-2 rounded-lg transition-colors",
                  tokens[theme].background.hover
                )}>
                  <label className={compositions.text.body}>
                    Enable Feature
                  </label>
                  <Switch
                    checked={isEnabled}
                    onCheckedChange={setIsEnabled}
                    className="transition-all duration-200 hover:scale-105 active:scale-95"
                  />
                </div>
              </Tooltip>              <div className={cn(
                "flex items-center justify-between p-2 -m-2",
                compositions.field.disabled
              )}>
                <label className={compositions.text.disabled}>
                  Disabled Toggle
                </label>
                <Switch
                  checked={false}
                  onCheckedChange={() => {}}
                  className="pointer-events-none"
                  aria-disabled="true"
                />
              </div>
            </div>

            <div className="space-y-6">
              <fieldset className="space-y-3">
                <legend className={compositions.text.subheading}>
                  Radio Options
                </legend>
                <Radio 
                  options={radioOptions}
                  value={selectedRadio}
                  onChange={setSelectedRadio}
                  className="space-y-2.5"
                />
              </fieldset>

              <fieldset className="space-y-3">
                <legend className={compositions.text.subheading}>
                  Checkbox Group
                </legend>
                <div className="space-y-2.5">
                  {['Check 1', 'Check 2'].map((label, index) => (
                    <div 
                      key={index + 1}
                      className={cn(
                        "group flex items-center space-x-2 p-2 -m-2 rounded-lg transition-colors",
                        tokens[theme].background.hover
                      )}
                    >                      <Checkbox
                        label={label}
                        checked={checkedItems.includes(String(index + 1))}
                        onChange={(e) => {
                          const checked = e.target.checked
                          setCheckedItems(items => {
                            const id = String(index + 1)
                            if (checked) return [...items, id]
                            return items.filter(item => item !== id)
                          })
                        }}
                        className="transition-all duration-200 hover:scale-105 active:scale-95"
                      />
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}