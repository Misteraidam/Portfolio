import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SectionHead } from './SectionHead'
import { FAQS } from '../data/resume'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { container, fadeUp, VIEWPORT } from '../lib/anim'

export function Faq() {
  const reduced = usePrefersReducedMotion()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad">
      <div className="container-layout">
        <SectionHead eyebrow="FAQ" title={<>No complicated jargon here</>} />

        <motion.div
          variants={container(reduced, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-12 grid gap-3"
        >
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <motion.div key={f.q} variants={fadeUp(reduced, 18)} className="card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
                >
                  <span className="font-display text-lg font-semibold uppercase tracking-tight text-white md:text-xl">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: reduced ? 0 : 0.25 }}
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${
                      isOpen ? 'border-accent bg-accent text-ink' : 'border-line text-muted'
                    }`}
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduced ? 0 : 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted md:px-8 md:pb-7">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
