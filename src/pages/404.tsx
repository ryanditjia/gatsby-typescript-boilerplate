import React from 'react'
import Layout from '../components/Layout'
import { SEO } from '../components/SEO'

const FourOhFourPage: React.FC = () => (
  <Layout>
    <SEO
      title="404: Not found"
      metaDescription="You have hit a 404: Not Found page"
    />
    <h1>404: Not Found</h1>
  </Layout>
)

export default FourOhFourPage
