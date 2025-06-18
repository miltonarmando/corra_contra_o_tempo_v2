import React, { useEffect } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

type Theme = 'light' | 'dark' | 'system'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Sempre forçado para light - sem estado desnecessário
  const theme: Theme = 'light'
  const actualTheme: 'light' | 'dark' = 'light'

  // Função dummy para manter compatibilidade com componentes que usam setTheme
  const setTheme = () => {
    // Não faz nada - tema sempre light
  }

  useEffect(() => {
    const root = window.document.documentElement
    
    // Força tema light
    root.classList.remove('light', 'dark')
    root.classList.add('light')
    
    // Update meta theme-color - sempre white
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#ffffff')
    }
    
    // Sempre salva como light no localStorage
    localStorage.setItem('theme', 'light')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
