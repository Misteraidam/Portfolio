import { MotionConfig } from 'framer-motion'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { TrustedBy } from './components/TrustedBy'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

// All sections are imported statically (not React.lazy) so the build-time
// prerender (scripts/prerender.mjs) can put every section's text in index.html.
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
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
        <About />
        <Experience />
        <Projects />
        <Services />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  )
}
