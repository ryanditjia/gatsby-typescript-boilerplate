import globalStyles from '@/config/global-styles'
import theme from '@/config/theme'
import { ThemeProvider } from '@/store/theme'
import { Global } from '@emotion/core'
import React from 'react'
import { Head } from './Head'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head />

      <Global styles={globalStyles} />

      <ThemeProvider value={theme}>
        <header>Header</header>
        <nav>Desktop Nav</nav>
        <nav>Mobile Nav</nav>
        <main>{children}</main>
        <footer>Footer</footer>
      </ThemeProvider>
    </>
  )
}

export default Layout
