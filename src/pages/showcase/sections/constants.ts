import { IconProps, Cube, TextT, Bell, NavigationArrow, Table, SquaresFour } from '@phosphor-icons/react'
import { ElementType } from 'react'

export interface ShowcaseSectionConfig {
  id: string
  label: string
  description: string
  icon: ElementType<IconProps>
}

export const SHOWCASE_SECTIONS = {
  BASIC: 'BasicSection',
  FORM: 'FormSection',
  FEEDBACK: 'FeedbackSection',
  NAVIGATION: 'NavigationSection',
  DATA: 'DataSection',
  OVERLAY: 'OverlaySection'
} as const

export const SECTIONS_CONFIG: ShowcaseSectionConfig[] = [
  {
    id: SHOWCASE_SECTIONS.BASIC,
    label: 'Basic Components',
    description: 'Essential UI building blocks like buttons, badges, and cards',
    icon: Cube
  },
  {
    id: SHOWCASE_SECTIONS.FORM,
    label: 'Form Controls',
    description: 'Interactive form elements for user input',
    icon: TextT
  },
  {
    id: SHOWCASE_SECTIONS.FEEDBACK,
    label: 'Feedback',
    description: 'Components for user feedback and notifications',
    icon: Bell
  },
  {
    id: SHOWCASE_SECTIONS.NAVIGATION,
    label: 'Navigation',
    description: 'Components for site navigation and structure',
    icon: NavigationArrow
  },
  {
    id: SHOWCASE_SECTIONS.DATA,
    label: 'Data Display',
    description: 'Components for displaying structured data',
    icon: Table
  },
  {
    id: SHOWCASE_SECTIONS.OVERLAY,
    label: 'Overlays',
    description: 'Modal dialogs and overlay components',
    icon: SquaresFour
  }
]
