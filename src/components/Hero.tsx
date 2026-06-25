import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight, Download, Linkedin, Mail } from 'lucide-react'
import { CONTACT } from '../data/stack'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function Hero() {
  const reduced = usePrefersReducedMotion()

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.12, delayChildren: reduced ? 0 : 0.15 } },
  }
  const item: Variants = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 110, damping: 18 } },
      }

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      {/* orange ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,79,34,0.22), transparent 65%)' }}
      />

      <div className="container-layout relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left - copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow">
            Based in {CONTACT.location}
          </motion.span>

          <motion.h1 variants={item} className="display mt-6 text-[44px] leading-[0.92] sm:text-6xl md:text-7xl">
            Hello, I'm
            <br />
            <span className="text-accent">Elijah Aidam</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I build the high-accuracy annotation pipelines that train AI, and the production software
            that ships on top of them. I lead annotation teams at 95-98% accuracy and I founded{' '}
            <span className="text-white">Novi&nbsp;AI</span>.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-accent">
              Get in touch <ArrowUpRight size={17} />
            </a>
            <a href="/cv.pdf" download className="btn-ghost">
              <Download size={16} /> Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <span className="font-body text-sm text-muted">Find me</span>
            <span className="h-px w-8 bg-line" />
            <a
              href={CONTACT.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={17} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right - portrait */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.35 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-4xl border border-line bg-surface">
            <img
              src="/elijah.jpg"
              alt="Elijah Aidam - AI Data Operations Lead and Full-Stack AI Engineer"
              width={850}
              height={1280}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full object-cover object-[center_18%]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(17,17,19,0) 55%, rgba(17,17,19,0.65) 100%)' }}
            />
            {/* availability badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-line bg-ink/70 px-4 py-3 backdrop-blur-md">
              <span className="flex items-center gap-2 font-body text-sm text-white">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                Available for roles
              </span>
              <span className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
                Accra · GH
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
