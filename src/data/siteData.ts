import {
  ChartBarIcon,
  CodeBracketIcon,
  EyeIcon,
  HeartIcon,
  PaintBrushIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid'
import type { ComponentType, SVGProps } from 'react'

export type IconType = ComponentType<SVGProps<SVGSVGElement>>

export type Service = {
  name: string
  icon: IconType
  link?: string
  description: string
}

export type TeamMember = {
  name: string
  role: string
  blurb: string
  image: string
}

export type Difference = {
  title: string
  subtitle: string
  description: string
  icon: IconType
}

export type TrustIndicator = {
  number: number
  label: string
}

export const servicesProvided: Array<Service> = [
  {
    name: 'Bespoke Digital Architecture',
    icon: CodeBracketIcon,
    link: '/websites',
    description:
      'Hand-crafted digital experiences designed to serve as the cornerstone of your professional legacy. No templates, just pure functional art.',
  },
  {
    name: 'Concierge Management',
    icon: SparklesIcon,
    link: '/services/concierge',
    description:
      'We handle everything from updates to security. You simply enjoy the benefits of a flawless online presence without lifting a finger.',
  },
  {
    name: 'Visual Identity & Branding',
    icon: PaintBrushIcon,
    link: '/services/graphic-design',
    description:
      'A cohesive visual language that speaks to your authority. We curate your brand’s aesthetic to ensure it resonates with your ideal clientele.',
  },
]

export const teamMembers: Array<TeamMember> = [
  {
    name: 'Brandon Harris',
    role: 'Co-founder & Lead Architect',
    blurb:
      'The artistic force behind your digital presence. Brandon merges technical precision with creative vision to craft websites that are as functional as they are beautiful.',
    image: '/images/brandon-harris-pfp.webp',
  },
  {
    name: 'Daniel Velez',
    role: 'Co-founder & Client Success',
    blurb:
      'Your dedicated partner in digital growth. Daniel ensures your vision is perfectly translated into reality, managing every detail of the partnership.',
    image: '/images/daniel-velez-pfp.webp',
  },
  {
    name: 'Linsey Delaune',
    role: 'Visual Artist',
    blurb:
      'Bringing your brand to life with an artistic touch. Linsey ensures every visual element is perfectly aligned with your unique story.',
    image: '/images/lindsey-delaune-pfp.webp',
  },
  {
    name: 'Tristan Woods',
    role: 'Partnerships Director',
    blurb:
      'Building lasting relationships founded on trust. Tristan is your guide to understanding how a bespoke digital presence can elevate your standing.',
    image: '/images/tristan-woods-pfp.webp',
  },
]

export const theDifferences: Array<Difference> = [
  {
    title: 'Uncompromising Quality',
    subtitle: 'Excellence is our baseline.',
    description:
      'We do not rush. We do not cut corners. Every pixel is placed with intention to ensure your digital presence is flawless.',
    icon: ChartBarIcon,
  },
  {
    title: 'Radical Transparency',
    subtitle: 'A partnership built on trust.',
    description:
      'Clear communication and honest guidance. We view ourselves as custodians of your digital reputation.',
    icon: EyeIcon,
  },
  {
    title: 'Enduring Stewardship',
    subtitle: 'We remain by your side.',
    description:
      'Our relationship doesn’t end at launch. We provide ongoing care to ensure your site evolves as gracefully as your business does.',
    icon: HeartIcon,
  },
]

export const faqs = [
  {
    question: 'How does the process work?',
    answer:
      'It starts with a conversation. We discuss your vision, and from there, we handle everything. You will be presented with a design for approval, and then we build. Simple, elegant, and stress-free.',
  },
  {
    question: "Do I need to be 'tech-savvy'?",
    answer:
      'Not at all. That is our role. We bridge the gap between your vision and the technology needed to achieve it. You focus on your business; we ensure the technology serves you.',
  },
  {
    question: 'What makes a custom site different?',
    answer:
      'A template is a rented suit; a custom site is bespoke tailoring. It fits you perfectly, reflects your unique character, and commands respect in a way off-the-shelf solutions simply cannot.',
  },
  {
    question: 'How do you handle updates?',
    answer:
      'With our Concierge Management, you simply email or call us. We make the changes for you. There are no dashboards for you to learn or logins to lose.',
  },
  {
    question: 'What is the investment?',
    answer:
      'Every project is unique. We provide a custom proposal after our initial consultation, ensuring you only invest in exactly what is needed to achieve your goals.',
  },
  {
    question: 'Can I see previous works?',
    answer:
      'We would be delighted to walk you through our portfolio during our consultation, highlighting specific examples relevant to your industry and aesthetic.',
  },
]

export const trustIndicators: Array<TrustIndicator> = [
  { number: 40, label: 'Bespoke Projects' },
  { number: 98, label: 'Client Retention' },
  { number: 5, label: 'Star Service' },
  { number: 4, label: 'Years of Excellence' },
]
