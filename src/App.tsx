import { lazy, Suspense } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { TrustedBy } from './components/TrustedBy'

// Below-the-fold sections are code-split and stream in as the user scrolls.
const About = lazy(() => import('./components/About').then((m) => ({ default: m.About })))
const Skills = lazy(() => import('./components/Skills').then((m) => ({ default: m.Skills })))
const Projects = lazy(() => import('./components/Projects').then((m) => ({ default: m.Projects })))
const Services = lazy(() => import('./components/Services').then((m) => ({ default: m.Services })))
const Testimonials = lazy(() => import('./components/Testimonials').then((m) => ({ default: m.Testimonials })))
const Faq = lazy(() => import('./components/Faq').then((m) => ({ default: m.Faq })))
const Contact = lazy(() => import('./components/Contact').then((m) => ({ default: m.Contact })))
const Footer = lazy(() => import('./components/Footer').then((m) => ({ default: m.Footer })))

function Fallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>

      <Nav />

      <main>
        <Hero />
        <TrustedBy />
        <Suspense fallback={<Fallback />}>
          <About />
          <Skills />
          <Projects />
          <Services />
          <Testimonials />
          <Faq />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}
