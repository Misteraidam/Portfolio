import { motion } from 'framer-motion'
import { ScanLine, Code2, Wrench, Users, type LucideIcon } from 'lucide-react'
import { SectionHead } from './SectionHead'
import { SERVICES, type Service } from '../data/resume'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { container, fadeUp, VIEWPORT } from '../lib/anim'

const ICONS: Record<Service['icon'], LucideIcon> = {
  scan: ScanLine,
  code: Code2,
  tooling: Wrench,
  team: Users,
}

export function Services() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="services" className="section-pad">
      <div className="container-layout">
        <SectionHead eyebrow="Services" title={<>What I do</>} />

        <motion.div
          variants={container(reduced, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon]
            return (
              <motion.article
                key={s.title}
                variants={fadeUp(reduced)}
                className="card group p-7 transition-colors duration-300 hover:border-accent/50 md:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/12 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-ink">
                    <Icon size={22} />
                  </span>
                  <span className="font-display text-lg font-semibold text-white/15">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
