import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, VIEWPORT } from '../lib/anim'

interface SectionHeadProps {
  eyebrow: string
  title: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}

/** Eyebrow + big Oswald display heading, revealed on scroll. */
export function SectionHead({ eyebrow, title, align = 'left', className = '' }: SectionHeadProps) {
  const reduced = usePrefersReducedMotion()
  return (
    <motion.div
      variants={fadeUp(reduced)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'} ${className}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="display mt-5 text-4xl sm:text-5xl md:text-6xl">{title}</h2>
    </motion.div>
  )
}
