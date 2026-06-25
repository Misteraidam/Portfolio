# Elijah Aidam — Portfolio (Frederock style)

A production-grade personal portfolio for **Elijah Aidam**, AI Data Operations Lead & Full-Stack AI
Engineer (Accra, Ghana), built in the **Frederock** style: a bold, dark, single-page site — near-black
canvas, condensed Oswald display type, and a punchy orange accent — flowing hero → trusted-by → about
→ work → services → FAQ → contact.

Built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**. Design tokens (colors, fonts)
were lifted from the live Frederock template at `fredericktemplate.framer.website`.

> Earlier designs are preserved as siblings: `../portfolio-simplefolio-backup` (light single-page),
> `../portfolio-vcard-backup` (vCard tabbed layout), and `../portfolio-lab-backup` (dark "lab" theme).

---

## Stack

| Concern   | Choice                          |
| --------- | ------------------------------- |
| Framework | React 18 + Vite 5               |
| Language  | TypeScript (strict)             |
| Styling   | Tailwind CSS 3                  |
| Animation | Framer Motion 11                |
| Icons     | lucide-react                    |
| Fonts     | Oswald (display) · Outfit (body)|

---

## Run locally

Requires **Node 18+**.

```bash
npm install     # install dependencies
npm run dev     # start dev server → http://localhost:5173
```

Other scripts: `npm run build` (type-check + build to `/dist`), `npm run preview`, `npm run lint`.

---

## Project structure

```
portfolio/
├─ public/
│  ├─ cv.pdf                 # CV — wired to every "Download CV" button
│  ├─ elijah.jpg             # profile photo (hero portrait)
│  └─ favicon.svg            # orange "EA" mark
├─ src/
│  ├─ components/
│  │  ├─ Nav.tsx             # sticky nav + mobile sheet + "Get in touch"
│  │  ├─ Hero.tsx            # big Oswald headline + portrait + availability badge
│  │  ├─ TrustedBy.tsx       # marquee of clients/projects
│  │  ├─ About.tsx           # bio + four numbered metrics
│  │  ├─ Projects.tsx        # card grid (engineering / tooling / annotation)
│  │  ├─ Services.tsx        # four "what I do" cards
│  │  ├─ Faq.tsx             # accordion
│  │  ├─ Contact.tsx         # CTA band + email / phone / LinkedIn
│  │  ├─ Footer.tsx          # socials + back-to-top
│  │  └─ SectionHead.tsx     # shared eyebrow + display heading
│  ├─ hooks/usePrefersReducedMotion.ts
│  ├─ lib/anim.ts            # shared fade-up / stagger variants
│  ├─ data/
│  │  ├─ projects.ts         # engineering, tooling & annotation items (source of truth)
│  │  ├─ resume.ts           # about, services, skills, education, FAQ
│  │  ├─ stack.ts            # hero stats + contact details
│  │  └─ timeline.ts         # work history (lives in the CV; not rendered here)
│  ├─ App.tsx                # single-page composition, lazy-loaded below-the-fold
│  ├─ main.tsx
│  └─ index.css              # Tailwind layers + Frederock component classes
├─ tailwind.config.js        # Frederock tokens (orange/dark, Oswald+Outfit)
├─ vercel.json
└─ index.html
```

---

## Editing content

Data-driven — edit these and the UI updates:

- **Projects** (engineering / tooling / annotation) → [`src/data/projects.ts`](src/data/projects.ts)
- **About bio, services, FAQ** → [`src/data/resume.ts`](src/data/resume.ts)
- **Hero stats + contact info** → [`src/data/stack.ts`](src/data/stack.ts)

Engineering projects link to their live URL; tooling/annotation cards show a category tag.
Replace the photo or CV by dropping a new `elijah.jpg` / `cv.pdf` into [`public/`](public/).

> Note: I did **not** fabricate the template's testimonials, freelance pricing, or blog. Send real
> testimonials and I'll add that section.

---

## Design system (Frederock tokens)

- **Canvas:** near-black `#111113`; raised cards/sections `#1f1f21` / `#1c1c1e`.
- **Accent:** orange `#ff4f22` (with `#fa6e43`), on every CTA, eyebrow dot, and hover state.
- **Type:** condensed **Oswald** (uppercase display) over **Outfit** (body).
- **Motion:** staggered hero entrance, fade-up scroll reveals (`whileInView`, once), client marquee,
  accordion, and hover lifts. **All motion respects `prefers-reduced-motion`.**

---

## Accessibility & performance

- Semantic landmarks, skip-to-content link, alt text, ARIA labels on icon links, on-brand focus rings.
- Below-the-fold sections are **code-split** (`React.lazy`); hero + trusted-by load eagerly.
- Fonts load via `preconnect` + `display=swap`; hero portrait uses `fetchPriority="high"`.

---

## Deploy to Vercel

Static Vite SPA — Vercel auto-detects the framework.

1. Push this folder to a GitHub/GitLab repo.
2. [vercel.com/new](https://vercel.com/new) → **Import** → **Deploy** (settings pinned in `vercel.json`).

Or via CLI: `npm i -g vercel && vercel --prod`.

---

© 2026 Elijah Aidam · Accra, Ghana.
