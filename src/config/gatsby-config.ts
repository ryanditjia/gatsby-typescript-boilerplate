import dotenv from 'dotenv'
import { GatsbyConfig } from 'gatsby'

dotenv.config()

export const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://example.com/',
    title: 'Boilerplate for Gatsby + TypeScript',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('../components/Layout.tsx'),
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/', // this is relative to gatsby-config.js
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#999',
        showSpinner: false,
        trickle: true,
        minimum: 0.08,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
  ],
}
