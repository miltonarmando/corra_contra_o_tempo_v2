import { createContext } from 'react'

type Theme = 'light' | 'dark' | 'system'

export interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  actualTheme: 'light'
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
