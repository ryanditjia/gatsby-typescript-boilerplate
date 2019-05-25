import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
