import React from 'react'
import '../../assets/fonts/loader.css'
import '../../css/main.css'
import { HtmlHead } from './HtmlHead'

type Props = {
	children: React.ReactNode
}

function Layout({ children }: Props): React.ReactElement {
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
