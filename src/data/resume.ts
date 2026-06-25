// Content for the About + Resume pages.

export const ABOUT_PARAGRAPHS: string[] = [
  'I am Elijah Aidam, an AI Data Operations Lead and Full-Stack AI Engineer based in Accra, Ghana, with 4+ years of experience building the high-accuracy annotation pipelines that train computer vision and LLM systems, and shipping production software on top of them.',
  'I lead annotation teams at 95-98% accuracy, translate complex client guides into standard operating procedures (SOPs), and engineer the internal tooling (QA automation, performance dashboards, and billing reconciliation) that keeps operations fast and accurate. As the founder and sole engineer of Novi AI, I designed and shipped a production multi-agent platform across web, mobile, and backend on Claude and OpenAI.',
]


export interface Service {
  icon: 'scan' | 'code' | 'tooling' | 'team'
  title: string
  text: string
}

export const SERVICES: Service[] = [
  {
    icon: 'scan',
    title: 'Data Annotation & QA',
    text: 'High-accuracy 2D/3D, image, video, and text annotation, with QA review held at 95-98% across healthcare, mobility, and energy datasets.',
  },
  {
    icon: 'code',
    title: 'Full-Stack AI Engineering',
    text: 'Production multi-agent systems and full-stack applications shipped end to end across web, mobile, and backend on Claude and OpenAI.',
  },
  {
    icon: 'tooling',
    title: 'Annotation Tooling',
    text: 'Internal tools and QA automation engineered on top of V7, Supervisely, BasicAI, and Google Sheets to keep operations fast and accurate.',
  },
  {
    icon: 'team',
    title: 'Team Leadership',
    text: 'Leading and training annotation teams, writing SOPs, and building performance dashboards that lift efficiency and reduce rework.',
  },
]

// Industries Elijah has delivered annotation for. Client names are withheld under NDA;
// these domain descriptors convey the work without naming the clients.
export const CLIENTS: string[] = [
  'Healthcare Imaging',
  'Renewable Energy',
  'Mobility & Ride-hailing',
  'Media & Streaming',
  'Autonomous Vehicles',
  'Short-form Video AI',
]

export interface ResumeEntry {
  title: string
  meta: string // org / period
  text: string
}

export const EDUCATION: ResumeEntry[] = [
  {
    title: 'University for Development Studies - Tamale',
    meta: 'BSc. Biochemistry · Jan 2015 - Nov 2019',
    text: 'Bachelor of Science in Biochemistry - a scientific foundation in rigorous, evidence-driven analysis that carries into high-stakes data quality work.',
  },
  {
    title: 'Certifications',
    meta: 'IBM / Coursera & others',
    text: 'Python for Data Science, AI & Development (IBM/Coursera) · Introduction to Artificial Intelligence · AI Beginners Guide · Attention to Detail & Quality Assurance.',
  },
]

export interface Skill {
  label: string
  level: number // percent
}

// Realistic self-ratings grounded in the CV: annotation/QA is the deep core
// (4+ years, QA lead, 95-98% accuracy); engineering is strong but newer (self-taught,
// shipped Novi solo) so it sits a tier below - which reads as honest, not weaker.
export const SKILLS: Skill[] = [
  { label: 'Data Annotation & QA', level: 96 },
  { label: 'Computer Vision Labelling (2D/3D/LiDAR)', level: 92 },
  { label: 'Team Leadership & Annotation Ops', level: 90 },
  { label: 'Annotation Tooling & QA Automation', level: 88 },
  { label: 'Python (data processing & automation)', level: 82 },
  { label: 'AI & Agent Orchestration (Claude/OpenAI)', level: 80 },
  { label: 'TypeScript · React · Next.js', level: 78 },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
  link?: string // LinkedIn profile / company page
}

// Real endorsements Elijah has received, attributed with names + LinkedIn.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'One of the best team leads I have worked with.',
    name: 'Michael Asamoah Marfo',
    role: 'Solutions Team Architect',
    link: 'https://www.linkedin.com/in/michael-asamoa-marfo-6a220b176/',
  },
  {
    quote: 'Recognised by Aya Data leadership for leading the team that won a key medical-imaging project.',
    name: 'Aya Data',
    role: 'Leadership recognition',
    link: 'https://www.linkedin.com/company/aya-data/',
  },
]

export interface Faq {
  q: string
  a: string
}

// Tailored to a job search - honest answers, no fabricated freelance pricing.
export const FAQS: Faq[] = [
  {
    q: 'What kind of roles are you looking for?',
    a: 'AI data operations and quality leadership (annotation operations, QA lead, or data-quality manager), and full-stack or AI engineering. I am especially drawn to annotation-tooling and solutions-engineering roles, where both backgrounds compound.',
  },
  {
    q: 'Do you work remotely, and how do time zones work?',
    a: 'I am based in Accra, Ghana (GMT / UTC+0) and work fully remotely. My day overlaps a complete working day with the UK and Europe and runs well into US-Eastern afternoons, so I collaborate easily with distributed teams. I am open to remote roles and will consider relocation for the right opportunity.',
  },
  {
    q: 'What makes your background unusual?',
    a: 'I sit on both sides of AI data. I have led annotation teams at 95-98% accuracy, and I engineer the tooling on top of platforms such as V7, Supervisely, and BasicAI, while shipping production software end to end. I do not just use annotation platforms; I build on them.',
  },
  {
    q: 'Can you share code and examples of your work?',
    a: 'My live products are public and linked in Projects - Novi AI, the Supervisely Job Assigner, and more - so you can click straight through. The internal automation I built for annotation teams runs on client data under NDA, so I share that as sanitised walk-throughs, redacted screenshots, or a private repo on request, and I am glad to demo the logic on a call.',
  },
  {
    q: 'How do we start a conversation?',
    a: 'Email me or connect on LinkedIn; both are in the contact section. Tell me a little about the team and the problem, and I will come back with how I can help.',
  },
]
