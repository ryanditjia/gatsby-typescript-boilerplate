import { graphql } from 'gatsby'
import React from 'react'
import { SEO } from '../components/SEO'
import { HomepageQuery } from '../types/graphql'

export const query = graphql`
	query HomepageQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`

type Props = {
	data: HomepageQuery
}

function Homepage({ data }: Props): React.ReactElement {
	return (
		<>
			<SEO title="Home" metaDescription="Home is where it begins" />

			<h1>{data!.site!.siteMetadata!.title}</h1>
		</>
	)
}

export default Homepage
