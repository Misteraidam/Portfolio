// Two-column capability map - Annotation/Data vs. Engineering.
export interface StackGroup {
  heading: string
  items: { label: string; note?: string }[]
}

export const ANNOTATION_STACK: StackGroup[] = [
  {
    heading: 'Annotation Platforms',
    items: [
      { label: 'V7 Darwin' },
      { label: 'Labelbox' },
      { label: 'CVAT' },
      { label: 'Dataloop' },
      { label: 'Supervisely' },
      { label: 'BasicAI / Xtreme1' },
    ],
  },
  {
    heading: 'Data & QA',
    items: [
      { label: 'Data Annotation', note: '2D/3D, image, video, text' },
      { label: 'LiDAR Cuboids' },
      { label: 'QA Processes', note: '95-98% accuracy' },
      { label: 'Human-in-the-loop Review' },
      { label: 'SOP Development' },
      { label: 'LLM Training Data' },
    ],
  },
]

export const ENGINEERING_STACK: StackGroup[] = [
  {
    heading: 'Languages & Frameworks',
    items: [
      { label: 'Python' },
      { label: 'TypeScript' },
      { label: 'Node.js' },
      { label: 'React' },
      { label: 'Next.js 14' },
      { label: 'Expo / React Native' },
      { label: 'Express' },
      { label: 'Streamlit' },
    ],
  },
  {
    heading: 'AI & Infrastructure',
    items: [
      { label: 'Anthropic Claude API' },
      { label: 'OpenAI API' },
      { label: 'Agent Orchestration' },
      { label: 'Firebase / Firestore' },
      { label: 'Vercel · Render' },
      { label: 'Twilio · Cloudinary' },
      { label: 'Sentry · PostHog' },
      { label: 'REST APIs' },
    ],
  },
]

export const HERO_STATS = [
  { value: '4+', label: 'Years in data ops' },
  { value: '200+', label: 'Annotators led' },
  { value: '95-98%', label: 'Dataset accuracy' },
  { value: 'Novi AI', label: 'Founder & engineer' },
]

export const CONTACT = {
  email: 'elijahaidam.ea@gmail.com',
  phone: '+233 50 385 2046',
  phoneHref: 'tel:+233503852046',
  linkedin: 'linkedin.com/in/misteraidam',
  linkedinHref: 'https://linkedin.com/in/misteraidam',
  location: 'Accra, Ghana',
}
