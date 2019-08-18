import dotenv from 'dotenv'
import { GatsbyConfig } from 'gatsby'

dotenv.config()

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    // read by gatsby-plugin-sitemap
    siteUrl: 'https://example.com/',
    title: 'Boilerplate for Gatsby + TypeScript',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('../components/layout/Layout.tsx'),
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'rebeccapurple',
        showSpinner: false,
        trickle: true,
        minimum: 0.08,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        // TODO: change this URL
        siteUrl: 'https://www.example.com',
      },
    },
    'gatsby-plugin-webpack-size',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
  ],
}

module.exports = gatsbyConfig
