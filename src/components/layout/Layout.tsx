import '@/assets/fonts/loader.css'
import '@/css/main.css'
import React from 'react'
import { HtmlHead } from './HtmlHead'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <HtmlHead />

      <header>Header</header>
      <nav>Desktop Nav</nav>
      <nav>Mobile Nav</nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
