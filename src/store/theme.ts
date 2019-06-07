import theme from '@/config/theme'
import { createContext, useContext } from 'react'

const ThemeContext = createContext(theme)

export const ThemeProvider = ThemeContext.Provider

export function useTheme() {
  return useContext(ThemeContext)
}
