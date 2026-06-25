import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { SectionHead } from './SectionHead'
import {
  ENGINEERING_PROJECTS,
  TOOLING_PROJECTS,
  ANNOTATION_TASKS,
  CATEGORY_LABELS,
  type Category,
} from '../data/projects'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { container, fadeUp, VIEWPORT } from '../lib/anim'

interface Card {
  id: string
  category: Category
  title: string
  tag: string
  description: string
  tech?: string[]
  href?: string
  client?: string
  image?: string
  depth?: string[]
  boxes?: { x: number; y: number; w: number; h: number; accent?: 'signal' | 'amber' }[]
}

const CARDS: Card[] = [
  ...ENGINEERING_PROJECTS.map((p) => ({
    id: p.id,
    category: p.category,
    title: p.title,
    tag: p.tag,
    description: p.description,
    tech: p.tech,
    href: p.links[0]?.href,
    image: p.image,
  })),
  ...TOOLING_PROJECTS.map((p) => ({
    id: p.id,
    category: p.category,
    title: p.title,
    tag: p.tag,
    description: p.description,
    tech: p.tech,
    image: p.image,
    depth: p.depth,
  })),
  ...ANNOTATION_TASKS.map((t) => ({
    id: t.id,
    category: t.category,
    title: t.title,
    tag: t.tag,
    description: t.description,
    client: t.client,
    image: t.image,
    boxes: t.boxes.map((b) => ({ x: b.x, y: b.y, w: b.w, h: b.h, accent: b.accent })),
  })),
]

function monogram(title: string) {
  return title
    .replace(/[^A-Za-z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

/** Card cover: a real screenshot when provided, else a generated category cover. */
function Cover({ card }: { card: Card }) {
  if (card.image) {
    return (
      <div className="relative h-40 overflow-hidden bg-[#0d0d0f]">
        <img
          src={card.image}
          alt={`${card.title} screenshot`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
    )
  }

  if (card.category === 'annotation' && card.boxes) {
    return (
      <div className="relative h-40 overflow-hidden bg-[#0d0d0f]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
        {card.boxes.map((b, i) => {
          const color = b.accent === 'amber' ? '#fa6e43' : '#ff4f22'
          return (
            <div
              key={i}
              className="absolute rounded-[2px]"
              style={{
                left: `${b.x}%`,
                top: `${b.y}%`,
                width: `${b.w}%`,
                height: `${b.h}%`,
                border: `2px solid ${color}`,
              }}
            />
          )
        })}
        <span className="absolute right-3 top-3 font-display text-xs font-semibold uppercase tracking-wider text-white/40">
          annotation
        </span>
      </div>
    )
  }

  const tinted = card.category === 'engineering'
  return (
    <div
      className="relative flex h-40 items-center justify-center overflow-hidden"
      style={{
        background: tinted
          ? 'radial-gradient(120% 120% at 80% 0%, rgba(255,79,34,0.28), transparent 55%), #1c1c1e'
          : '#1c1c1e',
      }}
    >
      {!tinted && (
        <div aria-hidden="true" className="absolute left-6 top-6 space-y-2 opacity-60">
          {[36, 22, 30, 16].map((w, i) => (
            <span key={i} className="block h-1.5 rounded-full bg-accent/40" style={{ width: w * 3 }} />
          ))}
        </div>
      )}
      <span className="font-display text-6xl font-bold uppercase text-white/90">{monogram(card.title)}</span>
    </div>
  )
}

function ProjectCard({ card, reduced }: { card: Card; reduced: boolean }) {
  const [open, setOpen] = useState(false)
  const isLink = !!card.href
  const Tag = isLink ? motion.a : motion.div
  const linkProps = isLink ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Tag
      variants={fadeUp(reduced)}
      {...linkProps}
      className={`card group flex flex-col overflow-hidden transition-colors duration-300 hover:border-accent/50 ${
        isLink ? 'cursor-pointer' : ''
      }`}
    >
      <Cover card={card} />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="pill border-accent/30 text-accent">{card.tag}</span>
          <span className="font-body text-[12px] uppercase tracking-wider text-muted">
            {CATEGORY_LABELS[card.category]}
          </span>
        </div>

        <h3 className="flex items-start justify-between gap-2 font-display text-xl font-semibold uppercase tracking-tight text-white">
          {card.title}
          {isLink && (
            <ArrowUpRight
              size={20}
              className="mt-0.5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          )}
        </h3>

        {card.client && (
          <p className="mt-1 font-body text-[13px] uppercase tracking-wider text-accent">{card.client}</p>
        )}

        <p className="mt-3 text-sm leading-relaxed text-muted">{card.description}</p>

        {card.tech && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {card.tech.slice(0, 4).map((t) => (
              <li key={t} className="pill">
                {t}
              </li>
            ))}
            {card.tech.length > 4 && <li className="pill">+{card.tech.length - 4}</li>}
          </ul>
        )}

        {/* Automation depth - how the tool works, no client code (NDA-safe). */}
        {card.depth && card.depth.length > 0 && (
          <div className="mt-auto pt-5">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex items-center gap-1.5 border-t border-line pt-4 font-body text-sm font-medium text-accent"
            >
              <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown size={15} />
              </motion.span>
              {open ? 'Hide details' : 'How it works'}
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  {card.depth.map((d, i) => (
                    <li key={i} className="mt-3 flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1 w-3 shrink-0 bg-accent/60" />
                      <span>{d}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </Tag>
  )
}

export function Projects() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="work" className="section-pad">
      <div className="container-layout">
        <SectionHead
          eyebrow="Selected work"
          title={
            <>
              Projects &amp; tooling
              <br />
              I&apos;ve shipped
            </>
          }
        />

        <motion.div
          variants={container(reduced, 0.07)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CARDS.map((card) => (
            <ProjectCard key={card.id} card={card} reduced={reduced} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
