import { motion } from 'framer-motion'
import { Quote, Linkedin } from 'lucide-react'
import { SectionHead } from './SectionHead'
import { TESTIMONIALS } from '../data/resume'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { container, fadeUp, VIEWPORT } from '../lib/anim'

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

export function Testimonials() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="testimonials" className="section-pad">
      <div className="container-layout">
        <SectionHead eyebrow="Recognition" title={<>What people say</>} />

        <motion.div
          variants={container(reduced, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid gap-5 md:grid-cols-2"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp(reduced)}
              className="card relative flex flex-col p-7 transition-colors duration-300 hover:border-accent/50 md:p-9"
            >
              <Quote className="text-accent" size={28} aria-hidden="true" />
              <blockquote className="mt-4 flex-1 font-body text-xl leading-snug text-white md:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/15 font-display font-bold text-accent">
                  {initials(t.name)}
                </span>
                <span className="min-w-0">
                  {t.link ? (
                    <a
                      href={t.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-accent"
                    >
                      {t.name}
                      <Linkedin size={14} className="text-accent" />
                    </a>
                  ) : (
                    <span className="block font-semibold text-white">{t.name}</span>
                  )}
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
