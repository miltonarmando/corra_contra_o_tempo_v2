export interface TabsProps {
  tabs: Array<{
    value: string
    label: string
    content: React.ReactNode
  }>
  className?: string
  tabClassName?: (props: { isActive: boolean }) => string
}

export interface AccordionProps {
  items: Array<{
    title: string
    content: string
  }>
  className?: string
  itemClassName?: (props: { isOpen: boolean }) => string
  titleClassName?: string
  contentClassName?: string
  chevronClassName?: (props: { isOpen: boolean }) => string
}

export interface DropdownItem {
  label: string
  icon?: React.ReactNode
  isDanger?: boolean
  onClick?: () => void
  className?: string
}
