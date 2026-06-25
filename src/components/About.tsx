import { motion } from 'framer-motion'
import { SectionHead } from './SectionHead'
import { ABOUT_PARAGRAPHS } from '../data/resume'
import { HERO_STATS } from '../data/stack'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { container, fadeUp, VIEWPORT } from '../lib/anim'

/** About + four numbered metrics (the Frederock stats block). */
export function About() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="about" className="section-pad">
      <div className="container-layout">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHead
            eyebrow="About"
            title={
              <>
                Two disciplines,
                <br />
                one operator.
              </>
            }
          />

          <motion.div
            variants={container(reduced)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="space-y-5"
          >
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <motion.p key={i} variants={fadeUp(reduced)} className="text-lg leading-relaxed text-muted">
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* numbered metrics */}
        <motion.dl
          variants={container(reduced, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-4xl border border-line bg-line lg:grid-cols-4"
        >
          {HERO_STATS.map((s, i) => (
            <motion.div key={s.label} variants={fadeUp(reduced, 20)} className="bg-ink p-7 md:p-8">
              <span className="font-display text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <dt className="mt-3 font-display text-4xl font-bold uppercase leading-none text-white md:text-5xl">
                {s.value}
              </dt>
              <dd className="mt-2 font-body text-sm text-muted">{s.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
