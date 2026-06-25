import { motion, type Variants } from 'framer-motion'
import { SectionHead } from './SectionHead'
import { SKILLS } from '../data/resume'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { container, fadeUp, VIEWPORT } from '../lib/anim'

/** Skill proficiency bars - annotation/QA core highest, engineering a tier below (honest spread). */
export function Skills() {
  const reduced = usePrefersReducedMotion()

  // The fill animates via the section's shared reveal (variant propagation from the
  // container), not its own whileInView - so bars already on-screen at mount never get
  // stuck at width 0. scaleX from a left origin keeps the layout stable.
  const bar: Variants = reduced
    ? { hidden: { scaleX: 1 }, show: { scaleX: 1 } }
    : {
        hidden: { scaleX: 0 },
        show: { scaleX: 1, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } },
      }

  return (
    <section id="skills" className="section-pad">
      <div className="container-layout">
        <SectionHead eyebrow="Capabilities" title={<>Skills</>} />

        <motion.div
          variants={container(reduced, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid gap-x-12 gap-y-7 md:grid-cols-2"
        >
          {SKILLS.map((s) => (
            <motion.div key={s.label} variants={fadeUp(reduced, 20)}>
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <span className="font-body text-[15px] text-white">{s.label}</span>
                <span className="font-display text-sm font-semibold text-accent">{s.level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  variants={bar}
                  style={{ width: `${s.level}%` }}
                  className="h-full origin-left rounded-full bg-gradient-to-r from-accent to-accent-2"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
