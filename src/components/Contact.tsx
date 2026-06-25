import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Phone, Linkedin, MapPin } from 'lucide-react'
import { CONTACT } from '../data/stack'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, VIEWPORT } from '../lib/anim'

export function Contact() {
  const reduced = usePrefersReducedMotion()

  const details = [
    { icon: <Mail size={18} />, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: <Phone size={18} />, label: 'Phone', value: CONTACT.phone, href: CONTACT.phoneHref },
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      value: CONTACT.linkedin,
      href: CONTACT.linkedinHref,
      external: true,
    },
  ]

  return (
    <section id="contact" className="section-pad">
      <div className="container-layout">
        <motion.div
          variants={fadeUp(reduced)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="relative overflow-hidden rounded-4xl border border-line bg-surface p-8 md:p-14"
        >
          {/* orange glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(255,79,34,0.25), transparent 65%)' }}
          />

          <div className="relative">
            <span className="eyebrow">Contact</span>
            <h2 className="display mt-5 max-w-3xl text-4xl sm:text-5xl md:text-6xl">
              Let's build something <span className="text-accent">accurate</span> together.
            </h2>
            <p className="mt-5 flex items-center gap-2 text-muted">
              <MapPin size={16} className="text-accent" /> {CONTACT.location} · Open to AI data ops &amp;
              engineering roles
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${CONTACT.email}`} className="btn-accent">
                Email me <ArrowUpRight size={17} />
              </a>
              <a href="/cv.pdf" download className="btn-ghost">
                Download CV
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {details.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  {...(d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-ink/40 p-4 transition-colors hover:border-accent/50"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                    {d.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-body text-[12px] uppercase tracking-wider text-muted">
                      {d.label}
                    </span>
                    <span className="block truncate text-sm text-white">{d.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
