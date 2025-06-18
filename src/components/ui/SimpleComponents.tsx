// Temporary simple implementations for showcase
import React from 'react'
import { cn } from '@/utils'

// Simple Checkbox implementation
export function Checkbox({ id, defaultChecked, disabled, ...props }: any) {
  return (
    <input
      type="checkbox"
      id={id}
      defaultChecked={defaultChecked}
      disabled={disabled}
      className={cn(
        "h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      {...props}
    />
  )
}

interface RadioItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  id?: string;
  disabled?: boolean;
}

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  defaultValue?: string;
}

// Simple Radio implementation
export const Radio = {
  Group: ({ children, defaultValue, ...props }: RadioGroupProps) => (
    <div className="space-y-3" {...props}>
      {children}
    </div>
  ),
  Item: ({ value, id, disabled, ...props }: RadioItemProps) => (
    <input
      type="radio"
      value={value}
      id={id}
      disabled={disabled}
      className={cn(
        "h-4 w-4 border-slate-300 text-indigo-600 focus:ring-indigo-500",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      {...props}
    />
  )
}

// Simple Select implementation
export function Select({ placeholder, options, multiple, ...props }: any) {
  return (
    <select
      multiple={multiple}
      className={cn(
        "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",
        "focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
        "bg-gradient-to-br from-slate-50 to-blue-50"
      )}
      {...props}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options?.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

// Simple Separator implementation
export function Separator({ orientation = 'horizontal', className, ...props }: any) {
  return (
    <div
      className={cn(
        "bg-slate-200 dark:bg-slate-700",
        orientation === 'horizontal' ? "h-px w-full" : "w-px h-full",
        className
      )}
      {...props}
    />
  )
}

// Simple Switch implementation
export function Switch({ id, defaultChecked, disabled, ...props }: any) {
  return (
    <input
      type="checkbox"
      id={id}
      defaultChecked={defaultChecked}
      disabled={disabled}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full",
        "bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
        "checked:bg-indigo-600",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      {...props}
    />
  )
}

// Simple Table implementation
const TableComponents = {
  Root: ({ children, ...props }: any) => (
    <div className="w-full overflow-auto">
      <table className="w-full caption-bottom text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  Header: ({ children, ...props }: any) => (
    <thead className="[&_tr]:border-b" {...props}>
      {children}
    </thead>
  ),
  Body: ({ children, ...props }: any) => (
    <tbody className="[&_tr:last-child]:border-0" {...props}>
      {children}
    </tbody>
  ),
  Row: ({ children, className, ...props }: any) => (
    <tr className={cn("border-b transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50", className)} {...props}>
      {children}
    </tr>
  ),
  Head: ({ children, className, ...props }: any) => (
    <th
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400 [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    >
      {children}
    </th>
  ),
  Cell: ({ children, className, ...props }: any) => (
    <td
      className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
      {...props}
    >
      {children}
    </td>
  )
}

// Create the Table component with compound pattern
export const Table = Object.assign(
  TableComponents.Root,
  TableComponents
)

// Simple Tabs implementation with state management
export const Tabs = {
  Root: ({ children, defaultValue, ...props }: any) => {
    const [activeTab, setActiveTab] = React.useState(defaultValue)
    
    return (
      <div {...props}>
        {React.Children.map(children, child =>
          React.isValidElement(child)
            ? React.cloneElement(child as any, { activeTab, setActiveTab })
            : child
        )}
      </div>
    )
  },
  List: ({ children, activeTab, setActiveTab, ...props }: any) => (
    <div className="flex space-x-1 rounded-lg bg-slate-100 dark:bg-slate-800 p-1" {...props}>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child as any, { activeTab, setActiveTab })
          : child
      )}
    </div>
  ),
  Trigger: ({ children, value, activeTab, setActiveTab, ...props }: any) => (
    <button
      className={cn(
        "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
        activeTab === value
          ? "bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm text-indigo-600"
          : "hover:bg-gradient-to-br hover:from-slate-50 hover:to-blue-50 text-slate-600"
      )}
      onClick={() => setActiveTab?.(value)}
      {...props}
    >
      {children}
    </button>
  ),
  Content: ({ children, value, activeTab, className, ...props }: any) => (
    activeTab === value ? (
      <div className={cn("mt-4", className)} {...props}>
        {children}
      </div>
    ) : null
  )
}

// Simple Tooltip implementation
export function Tooltip({ children, content, side = 'top', ...props }: any) {
  return (
    <div className="relative inline-block group" {...props}>
      {children}
      <div className={cn(
        "absolute z-50 px-2 py-1 text-xs text-white bg-slate-900 rounded",
        "opacity-0 group-hover:opacity-100 transition-opacity",
        "pointer-events-none whitespace-nowrap",
        side === 'top' && "bottom-full left-1/2 transform -translate-x-1/2 mb-1",
        side === 'bottom' && "top-full left-1/2 transform -translate-x-1/2 mt-1"
      )}>
        {content}
      </div>
    </div>
  )
}

// Simple Modal implementation with state management
export const Modal = {
  Root: ({ children, ...props }: any) => {
    const [isOpen, setIsOpen] = React.useState(false)
    
    return (
      <div {...props}>
        {React.Children.map(children, child =>
          React.isValidElement(child)
            ? React.cloneElement(child as any, { isOpen, setIsOpen })
            : child
        )}
      </div>
    )
  },
  Trigger: ({ children, asChild, isOpen, setIsOpen, ...props }: any) => (
    <button onClick={() => setIsOpen?.(true)} {...props}>
      {children}
    </button>
  ),
  Content: ({ children, isOpen, setIsOpen, ...props }: any) => (
    isOpen ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setIsOpen?.(false)}>
        <div 
          className="bg-gradient-to-br from-blue-50 to-indigo-50 backdrop-blur-lg rounded-lg p-6 max-w-md w-full mx-4 shadow-xl" 
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {React.Children.map(children, child =>
            React.isValidElement(child)
              ? React.cloneElement(child as any, { setIsOpen })
              : child
          )}
        </div>
      </div>
    ) : null
  ),
  Header: ({ children, ...props }: any) => (
    <div className="mb-4" {...props}>
      {children}
    </div>
  ),
  Title: ({ children, ...props }: any) => (
    <h2 className="text-lg font-semibold" {...props}>
      {children}
    </h2>
  ),
  Description: ({ children, ...props }: any) => (
    <p className="text-sm text-slate-600 dark:text-slate-400" {...props}>
      {children}
    </p>
  ),
  Footer: ({ children, setIsOpen, ...props }: any) => (
    <div className="flex justify-end space-x-2 mt-4" {...props}>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child as any, { setIsOpen })
          : child
      )}
    </div>
  ),
  Close: ({ children, asChild, setIsOpen, ...props }: any) => (
    <button onClick={() => setIsOpen?.(false)} {...props}>
      {children}
    </button>
  )
}
