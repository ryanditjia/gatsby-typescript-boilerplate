require('dotenv').config()

module.exports = {
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
        component: require.resolve('./src/components/Layout.tsx'),
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
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
