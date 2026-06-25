import { ArrowUp } from 'lucide-react'
import { CONTACT } from '../data/stack'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-layout py-9">
       <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-display text-sm font-bold text-ink">
            EA
          </span>
          <span className="font-body text-sm text-muted">© 2026 Elijah Aidam · Accra, Ghana</span>
        </div>

        <div className="flex items-center gap-6 font-body text-sm text-muted">
          <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">
            Email
          </a>
          <a
            href={CONTACT.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a href="/cv.pdf" download className="transition-colors hover:text-white">
            CV
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-white transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUp size={16} />
          </a>
        </div>
       </div>

        <p className="mt-6 text-center font-body text-[11px] leading-relaxed text-muted/70">
          Annotation thumbnails use openly-licensed imagery (Wikimedia Commons, CC0). LiDAR point cloud by{' '}
          <a
            href="https://commons.wikimedia.org/wiki/File:Ouster_OS1-64_lidar_point_cloud_of_intersection_of_Folsom_and_Dore_St,_San_Francisco.png"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-accent"
          >
            Daniel L. Lu
          </a>{' '}
          (CC BY 4.0).
        </p>
      </div>
    </footer>
  )
}
