import { SEO } from '@/components/SEO'
import { HomepageQuery } from '@/types/graphql'
import { graphql } from 'gatsby'
import React from 'react'

export const query = graphql`
  query Homepage {
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
