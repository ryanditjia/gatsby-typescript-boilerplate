import React from 'react'
import Helmet from 'react-helmet'

export const HtmlHead: React.FC = () => {
  return (
    <Helmet>
      <html lang="en-US" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link
        rel="apple-touch-icon-precomposed"
        href={``} // insert 152×152 png here
      />
    </Helmet>
  )
}
