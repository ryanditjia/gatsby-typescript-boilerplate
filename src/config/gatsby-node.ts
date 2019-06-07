import { GatsbyNode } from 'gatsby'
import { resolve } from 'path'
import { fakeGraphQLTag as graphql } from '../utils/helpers' // importing with @/ causes error

export const gatsbyNode: GatsbyNode = {
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
  onCreateWebpackConfig: ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          '@': resolve(__dirname, '..'), // path to src
        },
      },
    })
  },
}
