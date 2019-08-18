import { GatsbyNode } from 'gatsby'
import { fakeGraphQLTag as graphql } from '../utils/helpers'

const gatsbyNode: GatsbyNode = {
	createPages: async ({ graphql: graphqlQuery, actions }) => {
		const { createPage } = actions

		const query = await graphqlQuery(graphql`
			query CreatePagesQuery {
				site {
					siteMetadata {
						siteUrl
					}
				}
			}
		`)

		console.log(query)
		console.log(createPage)
	},
}

module.exports = gatsbyNode
