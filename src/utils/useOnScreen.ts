import { useEffect, useState } from 'react'

interface Obj {
  ref: React.RefObject<HTMLElement>
  rootMargin?: string
  initialState?: boolean
}

function useOnScreen({
  ref,
  rootMargin = '0px',
  initialState = false,
}: Obj): boolean {
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
      observer.unobserve(observedNode)
    }
  }, [ref, rootMargin])

  return isIntersecting
}

export { useOnScreen }
