import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Tracks the user's reduced-motion preference reactively.
 * Every animation in the app branches on this so motion degrades gracefully.
 *
 * Hydration-safe: the page is prerendered at build time, where there is no
 * `window`, so the first client render must also assume `false`. The real
 * preference is read in an effect after hydration. Framer-motion's own
 * `MotionConfig reducedMotion="user"` (see main.tsx) covers the hydration frame.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (!window.matchMedia) return
    const mql = window.matchMedia(QUERY)
    setReduced(mql.matches)
    const onChange = () => setReduced(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return reduced
}
