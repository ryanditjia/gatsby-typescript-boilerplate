import { useEffect, useState } from 'react'

export function useOnScreen({
	ref,
	rootMargin = '0px',
	initialState = false,
}: {
	ref: React.RefObject<HTMLElement>
	rootMargin?: string
	initialState?: boolean
}): boolean {
	const [isIntersecting, setIntersecting] = useState(initialState)

	useEffect(() => {
		const observedNode = ref.current

		const observer = new IntersectionObserver(
			([entry]) => {
				setIntersecting(entry.isIntersecting)
			},
			{
				rootMargin,
			},
		)

		if (observedNode) {
			observer.observe(observedNode)
		}

		return () => {
			if (observedNode) {
				observer.unobserve(observedNode)
			}
		}
	}, [ref, rootMargin])

	return isIntersecting
}
