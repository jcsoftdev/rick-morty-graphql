import { useState, useRef, useEffect, useCallback } from 'react'

function useInfiniteScroll() {
  const [hasMore, setHasMore] = useState(false)
  const loadMoreRef = useRef(null)

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const [target] = entries
    const intersectionRectY = Math.abs(target.intersectionRect.y) * 2
    const boundingClientRectY = Math.abs(target.boundingClientRect.y)
    if (intersectionRectY === 0 && boundingClientRectY === 0) return
    if (target.isIntersecting) {
      setHasMore(true)
    } else {
      setHasMore(false)
    }
  }

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '10%',
      threshold: [
        0.7, 0.72, 0.74, 0.76, 0.78, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92,
        0.94, 0.96, 0.98, 1
      ]
    }

    const observer = new IntersectionObserver(handleObserver, option)
    if (loadMoreRef.current) observer.observe(loadMoreRef.current)

    return () => observer.disconnect()
  }, [handleObserver])

  return { loadMoreRef, hasMore }
}

export default useInfiniteScroll
