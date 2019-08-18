import React from 'react'
import Helmet from 'react-helmet'

type Props = {
	title?: string
	metaDescription: string
}

const separator = '·'

export function SEO({
	title = '',
	metaDescription,
}: Props): React.ReactElement {
	return (
		<Helmet>
			<title>
				{title && `${title} ${separator} `}
				Example Site - tagline
			</title>
			{/* General tags */}
			<meta
				property="og:description"
				name="description"
				content={metaDescription}
			/>
			{/* <meta name="image" content={image} /> */}

			{/* Schema.org tags */}
			{/* <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script> */}

			{/* OpenGraph tags */}
			{/* <meta property="og:url" content={postSEO ? postURL : blogURL} /> */}
			{/* {postSEO ? <meta property="og:type" content="article" /> : null} */}
			<meta property="og:title" content={title} />
			{/* <meta property="og:image" content={image} /> */}

			{/* Twitter Card tags */}
			{/* <meta name="twitter:card" content="summary_large_image" /> */}
			{/* <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} /> */}
			{/* <meta name="twitter:title" content={title} /> */}
			{/* <meta name="twitter:description" content={description} /> */}
			{/* <meta name="twitter:image" content={image} /> */}
		</Helmet>
	)
}
