import { motion } from 'framer-motion'
import { SectionHead } from './SectionHead'
import { TIMELINE } from '../data/timeline'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { container, fadeUp, VIEWPORT } from '../lib/anim'

/** Work history, rendered verbatim from data/timeline.ts in the order it is listed there. */
export function Experience() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="experience" className="section-pad">
      <div className="container-layout">
        <SectionHead eyebrow="Experience" title={<>Where I&apos;ve worked</>} />

        <motion.ol
          variants={container(reduced, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid gap-5"
        >
          {TIMELINE.map((job) => (
            <motion.li
              key={job.id}
              variants={fadeUp(reduced)}
              className="card p-7 transition-colors duration-300 hover:border-accent/50 md:p-9"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-8">
                <div>
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-white">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-body text-[13px] uppercase tracking-wider">
                    <span className="text-accent">{job.org}</span>
                    <span className="text-muted"> · {job.location}</span>
                  </p>
                </div>
                <p className="shrink-0 font-display text-sm font-semibold uppercase tracking-wide text-muted md:pt-1.5">
                  {job.period}
                </p>
              </div>

              <ul className="mt-5">
                {job.points.map((point, i) => (
                  <li key={i} className="mt-3 flex gap-2.5 leading-relaxed text-muted first:mt-0">
                    <span className="mt-2.5 h-1 w-3 shrink-0 bg-accent/60" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
