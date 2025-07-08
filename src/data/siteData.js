import {
  ChartBarIcon as NavChartBarIcon,
  MegaphoneIcon,
  CodeBracketIcon,
  ChartBarIcon,
  PaintBrushIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
  EyeIcon,
  HeartIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

// Services provided data
export const servicesProvided = [
  {
    name: "Website & App Development",
    icon: CodeBracketIcon,
    link: "/services/website-development",
    description:
      "Custom-built websites and applications designed for performance, scalability, and seamless user experience.",
  },
  {
    name: "SEO & Digital Marketing",
    icon: ChartBarIcon,
    link: "/services/seo",
    description:
      "Boost your visibility, drive traffic, and turn clicks into loyal customers with proven SEO and marketing strategies.",
  },
  {
    name: "Graphic Design & Branding",
    icon: PaintBrushIcon,
    link: "/services/graphic-design",
    description:
      "Stand out with professional branding, eye-catching visuals, and a design identity that speaks to your audience.",
  },
  {
    name: "Social Media Growth",
    icon: MegaphoneIcon,
    link: "/services/social-media",
    description:
      "Engage, grow, and connect with your audience through targeted strategies that amplify your brand's voice.",
  },
  {
    name: "Hosting & Self-Hosting Solutions",
    icon: ServerStackIcon,
    link: "/services/hosting",
    description:
      "Reliable, secure hosting options—whether you need managed hosting or prefer full control with self-hosting.",
  },
  {
    name: "Support & Maintenance",
    icon: WrenchScrewdriverIcon,
    link: "/services/support-packages",
    description:
      "Peace of mind with expert support, ongoing maintenance, and proactive solutions to keep your business running smoothly.",
  },
];

// Team members data
export const teamMembers = [
  {
    name: "Brandon Harris",
    role: "Co-founder & Software Engineer",
    blurb:
      "Our artistic web designer, bringing technical wizardry and creativity to the table. He loves crafting functional and user-friendly websites with a passion for solving problems and perfection.",
    image: "/images/brandon-harris-pfp.webp",
  },
  {
    name: "Daniel Velez",
    role: "Co-founder & Sales",
    blurb:
      "The sales expert, dedicated to empowering businesses with innovative web solutions. With a passion for technology and a knack for building relationships, he's committed to driving success through digital excellence.",
    image: "/images/daniel-velez-pfp.webp",
  },
  {
    name: "Linsey Delaune",
    role: "Graphic Designer",
    blurb:
      "Our graphic designer, adding an artistic touch to your logos or banners. Her designs are visually appealing, ensuring a unique charm that resonates with your audience.",
    image: "/images/lindsey-delaune-pfp.webp",
  },
  {
    name: "Tristan Woods",
    role: "Sales & Partnerships",
    blurb:
      "Driven sales professional with a passion for building genuine connections and delivering value through every conversation. With a strong presence and a people-first mindset, he turns clients into long-term partners.",
    image: "/images/tristan-woods-pfp.webp",
  },
];

// The differences data
export const theDifferences = [
  {
    title: "Results-Driven Excellence",
    subtitle: "We don’t just build—we deliver measurable success.",
    description:
      "Every project we take on is backed by strategy, innovation, and data-driven decision-making. Your growth is our mission.",
    icon: NavChartBarIcon,
  },
  {
    title: "Radical Transparency",
    subtitle: "No hidden fees, no surprises—just honest collaboration.",
    description:
      "We believe in open communication, clear pricing, and keeping you informed every step of the way. Trust is at the core of everything we do.",
    icon: EyeIcon,
  },
  {
    title: "Long-Term Partnership",
    subtitle: "Beyond launch, beyond the sale—we’re here for the long run.",
    description:
      "We don’t disappear after delivering your project. We ensure your digital presence thrives with continuous support and strategic guidance.",
    icon: HeartIcon,
  },
];

export const faqs = [
  {
    question: "How fast can I get my website?",
    answer:
      "Really fast! Empower sites go live in 2 weeks. Most websites are ready in 3-4 weeks. The quicker you send us your photos and text, the faster we can build.",
  },
  {
    question: "Can I update it myself? I'm not tech-savvy.",
    answer:
      "Yes! We make it super easy. Think of it like updating Facebook - if you can post there, you can update your website. We'll show you exactly how, and we're always a call away if you get stuck.",
  },
  {
    question: "Why not just use Wix or Squarespace?",
    answer:
      "Those are like buying clothes off the rack - they work, but everyone looks the same. We create a website that's uniquely yours, plus we handle all the tricky stuff like making sure Google finds you and customers actually call.",
  },
  {
    question: "What about hosting? Is that included?",
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
];

export const plans = [
  {
    name: "Empower",
    tagline: "Perfect Start",
    builderPrice: 1299,
    customPrice: 2499,
    description: "Everything you need to look professional online",
    features: [
      "6 stunning pages that look great everywhere",
      "Show up when people search for you on Google",
      "Get customer inquiries straight to your inbox",
      "We'll fix any issues free for 30 days",
      "Your site goes live in just 2 weeks",
    ],
    bestFor: "New businesses ready to grow",
  },
  {
    name: "Amplify",
    tagline: "Most Popular",
    builderPrice: 2799,
    customPrice: 4999,
    description: "Turn browsers into buyers with powerful features",
    features: [
      "10 pages + blog to share your expertise",
      "Sell products directly from your site",
      "Build an email list on autopilot",
      "Connect your social media seamlessly",
      "2 months of support + personal training",
      "Ready to launch in 3 weeks",
    ],
    bestFor: "Businesses ready to scale up",
    popular: true,
  },
  {
    name: "Transform",
    tagline: "Maximum Impact",
    builderPrice: 4799,
    customPrice: 8999,
    description: "The complete package for serious growth",
    features: [
      "15+ pages with every feature you could want",
      "Sell unlimited products with pro tools",
      "Let customers book and pay instantly",
      "Chat with visitors in real-time",
      "3 months support + monthly growth reports",
      "VIP delivery in 4 weeks",
    ],
    bestFor: "Established businesses going big",
  },
];

// Trust indicators
export const trustIndicators = [
  { number: 41, label: "Happy Businesses" },
  { number: 98, label: "Love Their Sites" },
  { number: 4.9, label: "Star Reviews" },
  { number: 3, label: "Years Growing" },
];

export const platformComparison = {
  wordpress: {
    title: "WordPress",
    subtitle: "Your Smart Choice",
    benefits: [
      "Costs less to run each month",
      "Edit your site as easy as typing an email",
      "Add new features with one click",
      "Great for selling products & blogging",
      "Powers millions of successful sites",
    ],
  },
  nextjs: {
    title: "Next.js",
    subtitle: "Premium Performance",
    benefits: [
      "Lightning fast - your visitors won't wait",
      "Handles Black Friday traffic with ease",
      "Google loves these sites (better rankings!)",
      "Cutting-edge features that wow customers",
      "Built to last for years to come",
    ],
  },
};

// Online Store Data
export const storeFeatures = [
  {
    icon: "ShoppingCartIcon",
    title: "Advanced Shopping Cart",
    description: "Smart cart with saved items, wishlists, and lightning-fast checkout process."
  },
  {
    icon: "CreditCardIcon",
    title: "Secure Payments",
    description: "Accept all major payment methods with bank-level security and fraud protection."
  },
  {
    icon: "TruckIcon",
    title: "Shipping Made Easy",
    description: "Real-time shipping rates, order tracking, and automated carrier integration."
  },
  {
    icon: "ChartBarIcon",
    title: "Sales Analytics",
    description: "Track performance, monitor inventory, and understand customer behavior."
  },
  {
    icon: "DevicePhoneMobileIcon",
    title: "Mobile-First Design",
    description: "Beautiful, responsive design that works perfectly on every device."
  },
  {
    icon: "ShieldCheckIcon",
    title: "Enterprise Security",
    description: "SSL certificates, secure hosting, and regular backups included."
  }
];

export const storePlans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses just getting started online",
    features: [
      "Up to 100 products",
      "Basic themes & customization",
      "Standard email support",
      "2% transaction fee"
    ]
  },
  {
    name: "Professional",
    price: "$79",
    description: "Everything you need to grow your online business",
    features: [
      "Unlimited products",
      "Premium themes & full customization",
      "Priority phone & email support",
      "1% transaction fee",
      "Advanced analytics dashboard"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for high-volume businesses",
    features: [
      "Custom features & integrations",
      "Dedicated account manager",
      "White-label options",
      "No transaction fees",
      "24/7 priority support"
    ]
  }
];

export const storeTestimonials = [
  {
    name: "Sarah Johnson",
    business: "Boutique Fashion Store",
    quote: "Sales increased 300% in just 3 months. The platform is incredibly easy to use and my customers love the smooth checkout process."
  },
  {
    name: "Mike Chen",
    business: "Electronics Retailer",
    quote: "The inventory management features saved us countless hours. We can now focus on growing our business instead of managing technical details."
  },
  {
    name: "Emily Rodriguez",
    business: "Handmade Crafts",
    quote: "I went from zero online presence to $50K in monthly sales. The support team helped me every step of the way."
  }
];

export const storeFaqs = [
  {
    question: "How quickly can I set up my online store?",
    answer: "Most stores are live within 24-48 hours! We'll handle the technical setup while you focus on adding your products and customizing your store's look."
  },
  {
    question: "Do I need technical skills to manage my store?",
    answer: "Not at all! Our platform is designed for business owners, not developers. Adding products, processing orders, and managing inventory is as simple as using social media."
  },
  {
    question: "What payment methods can I accept?",
    answer: "We support all major credit cards, PayPal, Apple Pay, Google Pay, and many regional payment options. Your customers can pay however they prefer."
  },
  {
    question: "How much do transaction fees cost?",
    answer: "Our Starter plan has a 2% transaction fee, Professional has 1%, and Enterprise customers pay no transaction fees. All plans include secure payment processing."
  },
  {
    question: "Can I customize the design of my store?",
    answer: "Absolutely! Choose from dozens of professional themes, or we can create a completely custom design that matches your brand perfectly."
  },
  {
    question: "What if I need help with my store?",
    answer: "Our support team is here to help! Starter customers get email support, Professional customers get priority phone support, and Enterprise customers have a dedicated account manager."
  }
];
