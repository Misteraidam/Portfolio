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

/**
 * Accordion panel that stays in the DOM (so its text is in the prerendered HTML).
 * Closed: zero height, transparent, and `visibility: hidden` once the collapse
 * finishes, which removes it from the accessibility tree and tab order.
 * Use with `initial={false}` so the server and first client render agree.
 */
export const COLLAPSE: Variants = {
  open: { height: 'auto', opacity: 1, visibility: 'visible' },
  closed: { height: 0, opacity: 0, transitionEnd: { visibility: 'hidden' } },
}

export const VIEWPORT ={ once: true, margin: '-60px' } as const

export function container(reduced: boolean, stagger = 0.12): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : stagger } },
  }
}
