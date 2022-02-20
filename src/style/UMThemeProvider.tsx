import { createTheme, ThemeProvider } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'
import { ReactNode } from 'react'
import DesignTokens from './UMDesignTokens'
import UMThemedComponents from './UMThemedComponents'

type UMThemeProviderAlias = {
  children: ReactNode
}

export default function UMThemeProvider({ children }: UMThemeProviderAlias) {
  // user defiend color palette (theme) object construction
  const designTokens = DesignTokens()

  // create a predefined theme object; components set as {}
  const appTheme = createTheme(designTokens)

  // merge predefined mui components into appTheme
  const theme = createTheme(deepmerge(appTheme, UMThemedComponents(appTheme)))

  // note: ThemeProvider provides theme prop down the React tree via context
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
