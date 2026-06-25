import type { Variants } from 'framer-motion'

// Shared scroll-reveal props. Mirrors simplefolio's ScrollReveal fade-up-on-scroll.
// Pass `reduced` from usePrefersReducedMotion to disable movement gracefully.
export function fadeUp(reduced: boolean, y = 30): Variants {
  return reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
      }
}

export const VIEWPORT = { once: true, margin: '-60px' } as const

export function container(reduced: boolean, stagger = 0.12): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : stagger } },
  }
}
