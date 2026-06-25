// ─────────────────────────────────────────────────────────────────────────────
//  Project data - single source of truth for the filterable Work grid.
//
//  Categories drive the filter bar (All / AI Engineering / Data Tooling / Annotation).
//  "engineering" cards link out (live / GitHub). "tooling" cards expand for technical
//  depth (content sourced verbatim from PROJECTS.md). "annotation" cards render as
//  mock annotation canvases instead of a standard card.
// ─────────────────────────────────────────────────────────────────────────────

export type Category = 'engineering' | 'tooling' | 'annotation'

export const CATEGORY_LABELS: Record<Category, string> = {
  engineering: 'AI Engineering',
  tooling: 'Data Tooling',
  annotation: 'Annotation',
}

export interface ProjectLink {
  label: string
  href: string
  kind: 'live' | 'github'
}

export interface EngineeringProject {
  id: string
  type: 'engineering'
  title: string
  category: Category
  tag: string
  description: string
  tech: string[]
  links: ProjectLink[]
  featured?: boolean
  /** Optional screenshot path under /public (e.g. '/shots/novi.png'). Falls back to a generated cover. */
  image?: string
}

export interface ToolingProject {
  id: string
  type: 'tooling'
  title: string
  category: Category
  tag: string
  description: string
  tech: string[]
  image?: string
  // Expandable technical depth + market mapping (from PROJECTS.md)
  depth: string[]
  market: string[]
}

export type Project = EngineeringProject | ToolingProject

export const CELEBRATION_PORTAL_URL = 'https://birthday-app-alpha-seven.vercel.app'

export const ENGINEERING_PROJECTS: EngineeringProject[] = [
  {
    id: 'novi-ai',
    type: 'engineering',
    title: 'Novi AI',
    category: 'engineering',
    tag: 'Multi-Agent Platform',
    featured: true,
    image: '/shots/novi.png',
    description:
      'Production multi-agent family-intelligence platform. A router agent dispatches to domain specialists over a shared family memory graph, the product\'s core moat. Built solo across backend, web, and mobile on an Anthropic Claude and OpenAI tool-use stack, with a 24-case deterministic evaluation harness that catches regressions before deployment.',
    tech: ['Next.js 14', 'Node.js', 'TypeScript', 'Express', 'Expo', 'Claude API', 'OpenAI', 'Firestore', 'Twilio', 'Sentry'],
    links: [{ label: 'Live', href: 'https://novi-ai-alpha.vercel.app', kind: 'live' }],
  },
  {
    id: 'supervisely-assigner',
    type: 'engineering',
    title: 'Supervisely Job Assigner',
    category: 'engineering',
    tag: 'Internal Tooling',
    image: '/shots/supervisely.png',
    description:
      'A Streamlit dashboard that replaces hours of manual annotation-job assignment with point-and-click workflow automation on Supervisely. It handles dataset range-splitting with live gap and overlap detection, per-annotator workload visibility, round-robin quick-fill, and bulk un-assignment, with server-side scoping that cut load time by roughly 200x.',
    tech: ['Python', 'Streamlit', 'Supervisely REST API', 'pandas'],
    links: [{ label: 'Live', href: 'https://supervisely.streamlit.app', kind: 'live' }],
  },
  {
    id: 'celebration-portal',
    type: 'engineering',
    title: 'Celebration Portal',
    category: 'engineering',
    tag: 'Full-Stack Web App',
    image: '/shots/celebration.png',
    description:
      'An immersive platform for building personalised celebration portals: cinematic themes, multimedia chapters (photos, voice notes, and video), dynamic music search, and interactive openers such as virtual envelopes and balloon pops. It includes HEIC support, QR sharing, Paystack payments, and Supabase persistence.',
    tech: ['React 19', 'Vite', 'Tailwind', 'Framer Motion', 'Express', 'Supabase', 'Paystack'],
    links: [{ label: 'Live', href: CELEBRATION_PORTAL_URL, kind: 'live' }],
  },
  {
    id: 'ebh-cosmetics',
    type: 'engineering',
    title: 'EBH Cosmetics: Listen',
    category: 'engineering',
    tag: 'Frontend / Web Audio',
    image: '/shots/ebh.png',
    description:
      'A polished audio-player landing page for a cosmetics brand. A glass-morphism player card drives a real-time canvas waveform visualiser, with a slide-to-shop gesture that converts a listen into a storefront visit. Built in vanilla JavaScript on the Web Audio API, with touch and mouse parity and optimised font and asset preloading.',
    tech: ['Vanilla JS', 'Web Audio API', 'Canvas', 'HTML5', 'CSS3'],
    links: [{ label: 'Live', href: 'https://theebhandcosmetics.onrender.com', kind: 'live' }],
  },
  {
    id: 'logo-editor',
    type: 'engineering',
    title: 'Logo Preview Editor',
    category: 'engineering',
    tag: 'Full-Stack / Internal Tool',
    image: '/shots/logo.png',
    description:
      'A Flask and Postgres admin interface for annotating, organising, and batch-managing logo assets at scale. It features token-based admin authentication, persistent per-logo marking, batch progress tracking, and a worker leaderboard synced from Google Sheets, with retry-hardened database connections for cold Render wake-ups.',
    tech: ['Python', 'Flask', 'PostgreSQL (Neon)', 'pg8000', 'Jinja2', 'Gunicorn'],
    links: [{ label: 'Live', href: 'https://logolookup.onrender.com', kind: 'live' }],
  },
]

export const TOOLING_PROJECTS: ToolingProject[] = [
  {
    id: 'lensor-merge',
    type: 'tooling',
    title: 'Multi-Project Productivity Merge Tool',
    category: 'tooling',
    tag: 'Data Ops Automation',
    image: '/shots/merge.png',
    description:
      'Pulls annotation productivity data from ~12 separate project Google Sheets and merges them into one master, behind a custom "AYA OPS" menu so non-technical teammates run it without touching code.',
    tech: ['Google Apps Script', 'Sheets API', 'HTML Sidebar UI'],
    depth: [
      'Role-aware deduplication (v2.2): the dedup key includes task/role, so a person who worked the same project on the same date as both annotator and reviewer keeps both rows - fixing a real data-integrity bug where the higher-TPT row silently overwrote the other.',
      'Daily Summary generator: groups by person + normalised date, rolling up assets handled, accuracy, speed, platform time, and quality scores (collaboration, growth mindset, attitude).',
      'Date-serial handling: normalises Google Sheets epoch-1899 serials vs. real Date objects vs. strings so grouping never breaks.',
      'Automatable: time-based triggers run the merge + summary every morning at 6am.',
    ],
    market: ['Data Operations / Annotation Ops Manager', 'Data Analyst / Analytics Engineer', 'Internal Tools / Automation Engineer'],
  },
  {
    id: 'munchen-lidar',
    type: 'tooling',
    title: 'LiDAR Reviewer Suite',
    category: 'tooling',
    tag: 'QA Automation',
    image: '/shots/reviewer.png',
    description:
      'A QA-automation suite for a 3D LiDAR cuboid annotation project. It connects directly to the annotation platform\'s API and turns raw scene, frame, and object data into reviewer-ready spreadsheets. Shipped in both Apps Script and a standalone Python CLI.',
    tech: ['Google Apps Script', 'Python', 'BasicAI / Xtreme1 REST API', 'openpyxl'],
    depth: [
      'Auto-date stamping: when a labeler enters an end time, the real date auto-fills via trigger.',
      'Cuboid auto-fill: pulls actual cuboid-per-frame counts from the platform so reviewers don\'t count by hand.',
      'KPI auto-suggestions with human-in-the-loop guardrails: auto-checks objectively verifiable dimensions (class validity, attribute completeness, visibility) - but only writes into blank cells (never clobbers a reviewer\'s edit) and tints auto-filled cells green. Subjective dimensions (tightness, orientation) are left for humans.',
      'Self-verifying error list: regenerates a colour-coded, filterable list of every flagged object, grouped by labeler. Re-running is the verification - fixed objects drop off.',
      'Tracking / ID consistency audit: detects class flips, duplicate or broken tracks, and reused track names from metadata - explicit about its limits (cross-frame spatial matching stays manual).',
      'Volume & Invoice: rolls up cuboids, frames, unique objects, billable value, class distribution, and both objective and human-reviewed accuracy.',
    ],
    market: ['AI Data Quality / QA Lead', 'ML Data Engineer', 'Annotation Tooling Engineer (V7, Labelbox, Scale, Supervisely)', 'Solutions Engineer'],
  },
  {
    id: 'v7-dashboard',
    type: 'tooling',
    title: 'V7 Performance Dashboard & Sync',
    category: 'tooling',
    tag: 'BI / Visualisation',
    image: '/shots/dashboard.png',
    description:
      'A reusable productivity-tracking and visualisation tool for V7 projects. It turns raw annotator stats into a live dashboard and keeps the team\'s master sheet in sync with the platform, and is designed to work across any V7 project.',
    tech: ['Google Apps Script', 'V7 Darwin export', 'Google Charts'],
    depth: [
      'Visual dashboard: per-labeler TPT vs. target, accuracy, speed, combined performance score, platform vs. TD hours, and time-variance %. Date-range filtering, conditional formatting flagging >10% variance, and auto-generated charts.',
      'Flexible column mapping: matches V7 export columns by multiple possible header names, so it doesn\'t break when V7 changes its export format - this is what makes it reusable across projects.',
      'Bug fix - independent metric counters: accuracy and speed previously shared a counter, skewing results toward 50%; split into independent counters for correct averaging.',
      'Weekend-shift adjustment: work logged Sat/Sun is attributed back to the correct working day.',
      'Missing-row logging + email-to-name resolution: unmatched rows go to a "Missing" tab; labelerXX@workwithaya.com accounts resolve to real names.',
    ],
    market: ['Data Analyst / BI Developer', 'Analytics Engineer', 'Operations / People Analytics'],
  },
  {
    id: 'property-counts',
    type: 'tooling',
    title: 'Property Counts Billing Tool',
    category: 'tooling',
    tag: 'Data Engineering',
    image: '/shots/billing.png',
    description:
      'Counts billable annotation properties per annotator from raw V7 export data so work can be billed accurately. Built for a logo-annotation job where every bounding box carries a brand-name property that billing depends on.',
    tech: ['Python', 'pandas', 'V7 Darwin JSON', 'CSV reconciliation'],
    depth: [
      'Processes ~1,586 individual V7 Darwin JSON exports (each = annotations on one image: boxes, property values, annotator/reviewer attached to each).',
      'Extracts and tallies property counts per annotator, resolved by email.',
      'Cross-checks against a coverage report (10,174 unique images) and a quality CSV (timing, status, reviewers per file) so counts reconcile before billing.',
      'CSV-cleaning utility strips blank/junk rows from large exports (pandas + a streaming manual method for very large files) so counts aren\'t corrupted.',
    ],
    market: ['Data Engineer', 'Operations / Finance Tooling', 'Python Developer'],
  },
]

// Annotation task types - rendered as mock annotation canvases.
export interface AnnotationTask {
  id: string
  category: Category
  title: string
  tag: string
  client: string
  description: string
  /** Composited thumbnail (real licensed image + annotation overlay) under /public. */
  image?: string
  // boxes are rendered as % positions on a 16:10 mock canvas (fallback when no image)
  boxes: { x: number; y: number; w: number; h: number; label: string; accent?: 'signal' | 'amber' }[]
  variant: 'image' | 'medical' | 'lidar'
}

export const ANNOTATION_TASKS: AnnotationTask[] = [
  {
    id: 'vehicle-detection',
    category: 'annotation',
    title: 'Vehicle Detection',
    tag: '2D Bounding Boxes',
    client: 'Automotive · Mobility',
    image: '/shots/vehicle.png',
    description:
      'Precise bounding-box and class annotation of trucks, trailers, and mixed traffic for computer-vision and autonomous-systems training, held to client spec across large batches.',
    variant: 'image',
    boxes: [
      { x: 10, y: 46, w: 34, h: 32, label: 'truck', accent: 'signal' },
      { x: 52, y: 54, w: 22, h: 22, label: 'car', accent: 'signal' },
      { x: 76, y: 50, w: 18, h: 26, label: 'trailer', accent: 'amber' },
    ],
  },
  {
    id: 'medical-imaging',
    category: 'annotation',
    title: 'Medical Imaging',
    tag: 'Segmentation + ROI',
    client: 'Healthcare Imaging',
    image: '/shots/medical.png',
    description:
      'High-stakes healthcare annotation: region-of-interest segmentation and review held at 95%+ accuracy through daily QA alignment on clinical imaging pipelines.',
    variant: 'medical',
    boxes: [
      { x: 30, y: 22, w: 40, h: 46, label: 'vessel', accent: 'signal' },
      { x: 44, y: 40, w: 14, h: 16, label: 'ROI', accent: 'amber' },
    ],
  },
  {
    id: 'lidar-cuboids',
    category: 'annotation',
    title: 'LiDAR Cuboids',
    tag: '3D Cuboids',
    client: 'Autonomous Mobility',
    image: '/shots/lidar.png',
    description:
      '3D cuboid annotation and QA over point-cloud scenes: class, attribute, and visibility checks across frames, with track-ID consistency audited frame to frame.',
    variant: 'lidar',
    boxes: [
      { x: 18, y: 40, w: 28, h: 30, label: 'cuboid · car', accent: 'signal' },
      { x: 56, y: 34, w: 30, h: 34, label: 'cuboid · van', accent: 'amber' },
    ],
  },
]
