import { CLIENTS } from '../data/resume'

/** "Trusted by" marquee - client/project names scrolling on a quiet band. */
export function TrustedBy() {
  // duplicate the list so the -50% marquee loops seamlessly
  const row = [...CLIENTS, ...CLIENTS]
  return (
    <section aria-label="Projects delivered for" className="border-y border-line bg-surface2 py-8">
      <div className="container-layout">
        <p className="mb-6 text-center font-body text-[13px] uppercase tracking-[0.22em] text-muted">
          Annotation &amp; QA delivered across high-stakes AI projects
        </p>
      </div>
      <div className="group relative overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-14 group-hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-2xl font-semibold uppercase tracking-wide text-white/35 transition-colors hover:text-white md:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
