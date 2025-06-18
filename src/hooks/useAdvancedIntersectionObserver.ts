import { useEffect, useState, useRef } from 'react'

interface UseIntersectionObserverProps {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = false
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  const frozen = entry?.isIntersecting && freezeOnceVisible

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const node = elementRef?.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !node) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    observer.observe(node)

    return () => observer.disconnect()
  }, [elementRef, threshold, root, rootMargin, frozen])

  return { elementRef, entry, isVisible }
}

// Specialized hook for triggering animations when elements enter viewport
export function useAnimateOnInView(options?: UseIntersectionObserverProps) {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
    ...options
  })

  return { ref: elementRef, inView: isVisible }
}

// Hook for progressive loading of content
export function useLazyLoad(options?: UseIntersectionObserverProps) {
  const { elementRef, entry, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '200px',
    freezeOnceVisible: true,
    ...options
  })

  return { 
    ref: elementRef, 
    shouldLoad: isVisible,
    intersectionRatio: entry?.intersectionRatio ?? 0
  }
}
