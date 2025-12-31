import {
  AcademicCapIcon,
  ChartBarIcon,
  CodeBracketIcon,
  CubeTransparentIcon,
  CursorArrowRaysIcon,
  DocumentDuplicateIcon,
  EyeIcon,
  HeartIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  ServerStackIcon,
  SparklesIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
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

export type Plan = {
  name: string
  tagline: string
  builderPrice?: number
  customPrice?: number
  monthlyPrice?: number
  yearlyPrice?: number
  description: string
  features: Array<string>
  bestFor: string
  popular?: boolean
}

export type TrustIndicator = {
  number: number
  label: string
}

export type PlatformComparison = {
  wordpress: {
    title: string
    subtitle: string
    benefits: Array<string>
  }
  nextjs: {
    title: string
    subtitle: string
    benefits: Array<string>
  }
}

export const servicesProvided: Array<Service> = [
  {
    name: 'Custom Websites',
    icon: CodeBracketIcon,
    link: '/websites',
    description:
      'Custom-built websites and applications designed for performance, scalability, and seamless user experience.',
  },
  {
    name: 'SEO & Digital Marketing',
    icon: ChartBarIcon,
    link: '/websites',
    description:
      'Boost your visibility, drive traffic, and turn clicks into loyal customers with proven SEO and marketing strategies.',
  },
  {
    name: 'Graphic Design & Branding',
    icon: PaintBrushIcon,
    link: '/services/graphic-design',
    description:
      'Stand out with professional branding, eye-catching visuals, and a design identity that speaks to your audience.',
  },
  {
    name: 'Social Media Growth',
    icon: MegaphoneIcon,
    link: '/services/social-media',
    description:
      "Engage, grow, and connect with your audience through targeted strategies that amplify your brand's voice.",
  },
  {
    name: 'Hosting & Self-Hosting Solutions',
    icon: ServerStackIcon,
    link: '/hosting/wordpress',
    description:
      'Reliable, secure hosting options—whether you need managed hosting or prefer full control with self-hosting.',
  },
  {
    name: 'Support & Maintenance',
    icon: WrenchScrewdriverIcon,
    link: '/services/support-packages',
    description:
      'Peace of mind with expert support, ongoing maintenance, and proactive solutions to keep your business running smoothly.',
  },
]

export const teamMembers: Array<TeamMember> = [
  {
    name: 'Brandon Harris',
    role: 'Co-founder & Software Engineer',
    blurb:
      'Our artistic web designer, bringing technical wizardry and creativity to the table. He loves crafting functional and user-friendly websites with a passion for solving problems and perfection.',
    image: '/images/brandon-harris-pfp.webp',
  },
  {
    name: 'Daniel Velez',
    role: 'Co-founder & Sales',
    blurb:
      "The sales expert, dedicated to empowering businesses with innovative web solutions. With a passion for technology and a knack for building relationships, he's committed to driving success through digital excellence.",
    image: '/images/daniel-velez-pfp.webp',
  },
  {
    name: 'Linsey Delaune',
    role: 'Graphic Designer',
    blurb:
      'Our graphic designer, adding an artistic touch to your logos or banners. Her designs are visually appealing, ensuring a unique charm that resonates with your audience.',
    image: '/images/lindsey-delaune-pfp.webp',
  },
  {
    name: 'Tristan Woods',
    role: 'Sales & Partnerships',
    blurb:
      'Driven sales professional with a passion for building genuine connections and delivering value through every conversation. With a strong presence and a people-first mindset, he turns clients into long-term partners.',
    image: '/images/tristan-woods-pfp.webp',
  },
]

export const theDifferences: Array<Difference> = [
  {
    title: 'Results-Driven Excellence',
    subtitle: 'We don’t just build—we deliver measurable success.',
    description:
      'Every project we take on is backed by strategy, innovation, and data-driven decision-making. Your growth is our mission.',
    icon: ChartBarIcon,
  },
  {
    title: 'Radical Transparency',
    subtitle: 'No hidden fees, no surprises—just honest collaboration.',
    description:
      'We believe in open communication, clear pricing, and keeping you informed every step of the way. Trust is at the core of everything we do.',
    icon: EyeIcon,
  },
  {
    title: 'Long-Term Partnership',
    subtitle: 'Beyond launch, beyond the sale—we’re here for the long run.',
    description:
      'We don’t disappear after delivering your project. We ensure your digital presence thrives with continuous support and strategic guidance.',
    icon: HeartIcon,
  },
]

export const faqs = [
  {
    question: 'How fast can I get my website?',
    answer:
      'Really fast! Empower sites go live in 2 weeks. Most websites are ready in 3-4 weeks. The quicker you send us your photos and text, the faster we can build.',
  },
  {
    question: "Can I update it myself? I'm not tech-savvy.",
    answer:
      "Yes! We make it super easy. Think of it like updating Facebook - if you can post there, you can update your website. We'll show you exactly how, and we're always a call away if you get stuck.",
  },
  {
    question: 'Why not just use Wix or Squarespace?',
    answer:
      "Those are like buying clothes off the rack - they work, but everyone looks the same. We create a website that's uniquely yours, plus we handle all the tricky stuff like making sure Google finds you and customers actually call.",
  },
  {
    question: 'What about hosting? Is that included?',
    answer:
      "Hosting is like rent for your website - it's a separate small monthly fee ($10-50 depending on your needs). We'll set it all up and pick the perfect host for you. No tech knowledge needed!",
  },
  {
    question: "What if I don't like how it looks?",
    answer:
      "We'll keep tweaking until you love it - that's our promise. You get multiple rounds of changes with every package. In 3 years, we've never had someone unhappy with their final site.",
  },
  {
    question: "Can I see what you've built before?",
    answer:
      "Absolutely! Just reach out and we'll show you sites we've built for businesses like yours. We've created 40+ websites for everyone from plumbers to boutiques.",
  },
]

export const plans: Array<Plan> = [
  {
    name: 'Empower',
    tagline: 'Perfect Start',
    builderPrice: 1299,
    customPrice: 2499,
    description: 'Everything you need to look professional online',
    features: [
      'Up to 5 pages custom designed',
      'Mobile-responsive design',
      'Contact forms & lead capture',
      'Google Business integration',
      '30 days of support',
    ],
    bestFor: 'Startups & local businesses',
  },
  {
    name: 'Amplify',
    tagline: 'Most Popular',
    builderPrice: 2799,
    customPrice: 4999,
    description: 'Engage visitors and convert them into customers',
    features: [
      'Up to 10 pages + blog',
      'Advanced animations & interactions',
      'Newsletter & email capture',
      'Social media integration',
      '60 days support + training',
    ],
    bestFor: 'Growing businesses & brands',
    popular: true,
  },
  {
    name: 'Transform',
    tagline: 'Maximum Impact',
    builderPrice: 4799,
    customPrice: 8999,
    description: 'Complete digital presence for industry leaders',
    features: [
      'Unlimited pages & content',
      'Custom functionality & integrations',
      'Member portals & gated content',
      'Analytics & conversion tracking',
      '90 days priority support',
    ],
    bestFor: 'Enterprises & established brands',
  },
]

export const trustIndicators: Array<TrustIndicator> = [
  { number: 41, label: 'Happy Businesses' },
  { number: 98, label: 'Love Their Sites' },
  { number: 4.9, label: 'Star Reviews' },
  { number: 3, label: 'Years Growing' },
]

export const platformComparison: PlatformComparison = {
  wordpress: {
    title: 'WordPress',
    subtitle: 'Content Freedom',
    benefits: [
      'Update your content anytime, anywhere',
      'Add blog posts, products, and pages yourself',
      'Thousands of plugins for new features',
      'Perfect for growing & changing businesses',
      'Lower monthly hosting costs',
    ],
  },
  nextjs: {
    title: 'Next.js',
    subtitle: 'Custom Excellence',
    benefits: [
      'Lightning-fast load times that impress',
      'Custom-coded to match your exact vision',
      'Superior Google rankings & SEO performance',
      'Scales effortlessly as you grow',
      'Modern, secure, and future-proof',
    ],
  },
}

export const builderFeatures = [
  {
    link: '#',
    icon: CursorArrowRaysIcon,
    name: 'Drag & Drop Builder',
    description:
      'Build beautiful websites with Divi and Elementor. No coding required - just drag, drop, and customize.',
  },
  {
    link: '#',
    icon: CubeTransparentIcon,
    name: 'Premium Templates',
    description:
      'Access our exclusive library of professional templates designed for maximum conversion.',
  },
  {
    link: '#',
    icon: SparklesIcon,
    name: 'Custom Elements',
    description:
      'Get access to our premium element packs and pre-built sections to speed up your workflow.',
  },
  {
    link: '#',
    icon: WrenchIcon,
    name: 'Pro Tools & Plugins',
    description:
      'Unlock premium WordPress plugins and advanced customization tools included in your membership.',
  },
  {
    link: '#',
    icon: DocumentDuplicateIcon,
    name: 'Template Library',
    description:
      'Growing collection of industry-specific templates updated monthly with new designs.',
  },
  {
    link: '#',
    icon: AcademicCapIcon,
    name: 'Video Tutorials',
    description:
      'Step-by-step video guides and tutorials to help you master DIY website building.',
  },
]
