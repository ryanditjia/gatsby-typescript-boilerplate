import React from 'react'
import { SEO } from '../components/SEO'
import { graphql } from 'gatsby'
import { HomepageQuery } from '../types/__generated__/HomepageQuery'

export const query = graphql`
  query HomepageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

interface Props {
  data: HomepageQuery
}

const Homepage: React.FC<Props> = ({ data }) => (
  <>
    <SEO title="Home" metaDescription="Home is where it begins" />

    <h1>{data.site.siteMetadata.title}</h1>
  </>
)

export default Homepage
