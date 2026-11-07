// Career timeline - dates verbatim from the CV.
// Display order (rendered as-is by components/Experience.tsx): current roles first, with the
// two Aya Data roles kept together so the promotion is visible, then ended roles by most
// recent end date.
export interface TimelineEntry {
  id: string
  org: string
  role: string
  period: string
  location: string
  current?: boolean
  points: string[]
}

export const TIMELINE: TimelineEntry[] = [
  {
    id: 'aya-lead',
    org: 'Aya Data',
    role: 'Data Annotation Team Lead',
    period: 'Jan 2026 - Present',
    location: 'Accra',
    current: true,
    points: [
      'Lead teams of up to 20 annotators powering LLM and computer-vision training pipelines; consistently exceed the 90% utilisation standard.',
      'Maintained 95%+ accuracy across high-stakes healthcare-imaging and renewable-energy projects through daily QA alignment.',
      'Achieved a 25% increase in annotation efficiency and 20% reduction in rework via daily stand-ups and real-time blocker removal.',
    ],
  },
  {
    id: 'aya-qa',
    org: 'Aya Data',
    role: 'Senior QA Lead & Data Annotator',
    period: 'Apr 2022 - Dec 2025',
    location: 'Accra · Promoted to Team Lead',
    points: [
      'Led QA for AI training data across healthcare, renewable energy, mobility, and media - achieving 98% accuracy and reducing pipeline errors by 20%.',
      'Trained 100+ annotators over the role.',
      'Delivered 2D/3D LiDAR, image, video, and text annotations across healthcare, renewable-energy, mobility, and media clients; created training manuals standardising V7, Labelbox, CVAT, and Dataloop.',
    ],
  },
  {
    id: 'novi',
    org: 'Novi AI',
    role: 'Founder & Sole Engineer',
    period: 'Jul 2025 - Present',
    location: 'Accra · Self-Employed',
    current: true,
    points: [
      'Designed a production multi-agent system (Claude + OpenAI) with a router agent dispatching to domain specialists over a shared knowledge graph.',
      'Architected a Node.js/TypeScript/Express backend, Next.js 14 web app, and Expo mobile app with 85% feature parity across platforms.',
      'Built a 24-case deterministic eval framework to catch regressions before deploy, plus a persistent family memory graph as the core moat.',
    ],
  },
  {
    id: 'carehut',
    org: 'CareHut',
    role: 'Operations & Client Outreach (freelance)',
    period: '2026 - Present',
    location: 'Remote',
    current: true,
    points: [
      'Migrate client documents and data into the platform and run cold-email outreach to new clients for a UK care-management software company.',
    ],
  },
  {
    id: 'cmt',
    org: 'CMT Scanner',
    role: 'Data Annotator - Vehicle Labelling',
    period: 'Oct 2025 - Aug 2026',
    location: 'Remote',
    points: [
      'Labelled vehicles (trucks, trailers, and other classes) in image and video data for computer-vision and autonomous-systems training.',
      'Applied precise bounding-box and class annotations to client specifications, maintaining high accuracy across large batches.',
    ],
  },
  {
    id: 'micro1',
    org: 'micro1',
    role: 'Video Annotation Specialist, RLHF / AI-output evaluation (freelance)',
    period: 'May 2026 - Jun 2026',
    location: 'Remote',
    points: [
      'Evaluated and corrected AI-generated outputs as human feedback for post-training data on robotics models.',
    ],
  },
]
