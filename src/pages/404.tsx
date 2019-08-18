import { SEO } from '../components/SEO'
import React from 'react'

function FourOhFourPage(): React.ReactElement {
	return (
		<>
			<SEO
				title="404: Not found"
				metaDescription="You have hit a 404: Not Found page"
			/>
			<h1>404: Not Found</h1>
		</>
	)
}

export default FourOhFourPage
