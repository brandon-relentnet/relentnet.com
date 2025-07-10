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
  CursorArrowRaysIcon,
  CubeTransparentIcon,
  SparklesIcon,
  WrenchIcon,
  DocumentDuplicateIcon,
  AcademicCapIcon,
  ServerIcon,
  RocketLaunchIcon,
  ClockIcon,
  CloudIcon,
  CogIcon,
  CubeIcon,
  UserGroupIcon,
  PhoneIcon,
  CommandLineIcon,
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
  {
    question: "What if I need to sell products online?",
    answer:
      "We have a dedicated e-commerce solution! Check out our Online Store packages which include everything you need: product management, secure payments, shipping integration, and more. It's built specifically for selling online.",
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
      "Up to 5 pages custom designed",
      "Mobile-responsive design",
      "Contact forms & lead capture",
      "Google Business integration",
      "30 days of support",
    ],
    bestFor: "Startups & local businesses",
  },
  {
    name: "Amplify",
    tagline: "Most Popular",
    builderPrice: 2799,
    customPrice: 4999,
    description: "Engage visitors and convert them into customers",
    features: [
      "Up to 10 pages + blog",
      "Advanced animations & interactions",
      "Newsletter & email capture",
      "Social media integration",
      "60 days support + training",
    ],
    bestFor: "Growing businesses & brands",
    popular: true,
  },
  {
    name: "Transform",
    tagline: "Maximum Impact",
    builderPrice: 4799,
    customPrice: 8999,
    description: "Complete digital presence for industry leaders",
    features: [
      "Unlimited pages & content",
      "Custom functionality & integrations",
      "Member portals & gated content",
      "Analytics & conversion tracking",
      "90 days priority support",
    ],
    bestFor: "Enterprises & established brands",
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
    subtitle: "Content Freedom",
    benefits: [
      "Update your content anytime, anywhere",
      "Add blog posts, products, and pages yourself",
      "Thousands of plugins for new features",
      "Perfect for growing & changing businesses",
      "Lower monthly hosting costs",
    ],
  },
  nextjs: {
    title: "Next.js",
    subtitle: "Custom Excellence",
    benefits: [
      "Lightning-fast load times that impress",
      "Custom-coded to match your exact vision",
      "Superior Google rankings & SEO performance",
      "Scales effortlessly as you grow",
      "Modern, secure, and future-proof",
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
    name: "Launch",
    tagline: "Start Selling",
    builderPrice: 2499,
    customPrice: 3999,
    description: "Get your products online fast with everything you need",
    features: [
      "Professional 8-page store that works on all devices",
      "Up to 50 products with inventory management",
      "Secure payment processing (PayPal, Stripe, etc.)",
      "Basic shipping integration with major carriers",
      "SSL certificate and security features included",
      "30 days of free updates and support",
      "3-week turnaround time"
    ],
    bestFor: "Small retailers, artisans, service providers with products"
  },
  {
    name: "Scale",
    tagline: "Most Popular",
    builderPrice: 4299,
    customPrice: 6999,
    description: "Advanced features to grow your online sales",
    features: [
      "Custom 12-page store with advanced functionality",
      "Unlimited products with advanced inventory system",
      "Multi-payment gateway support + abandoned cart recovery",
      "Advanced shipping rules and tax calculations",
      "Customer accounts, wishlists, and reviews",
      "Email marketing integration and analytics dashboard",
      "60 days of support + SEO optimization included",
      "4-week turnaround time"
    ],
    bestFor: "Growing retailers, established brands, multi-product businesses",
    popular: true
  },
  {
    name: "Dominate",
    tagline: "Enterprise Ready",
    builderPrice: 7999,
    customPrice: 12999,
    description: "Everything you need to compete with the big players",
    features: [
      "Premium 15+ page store with custom features",
      "Unlimited products with advanced catalog management",
      "Multi-currency, multi-language support",
      "Advanced integrations (CRM, ERP, warehousing)",
      "Custom reporting and business intelligence tools",
      "Priority support + dedicated account manager",
      "90 days of support + monthly performance reviews",
      "5-week VIP delivery"
    ],
    bestFor: "Large retailers, multi-location businesses, serious e-commerce"
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

// Website Builder Data
export const builderFeatures = [
  {
    icon: "CursorArrowRaysIcon",
    title: "Drag & Drop Builder",
    description: "Build beautiful websites with Divi and Elementor. No coding required - just drag, drop, and customize."
  },
  {
    icon: "CubeTransparentIcon",
    title: "Premium Templates",
    description: "Access our exclusive library of professional templates designed for maximum conversion."
  },
  {
    icon: "SparklesIcon",
    title: "Custom Elements",
    description: "Get access to our premium element packs and pre-built sections to speed up your workflow."
  },
  {
    icon: "WrenchIcon",
    title: "Pro Tools & Plugins",
    description: "Unlock premium WordPress plugins and advanced customization tools included in your membership."
  },
  {
    icon: "DocumentDuplicateIcon",
    title: "Template Library",
    description: "Growing collection of industry-specific templates updated monthly with new designs."
  },
  {
    icon: "AcademicCapIcon",
    title: "Video Tutorials",
    description: "Step-by-step video guides and tutorials to help you master DIY website building."
  }
];

export const builderPlans = [
  {
    name: "Starter",
    tagline: "DIY Basics",
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: "Perfect for beginners who want to build their first website",
    features: [
      "Access to Divi and Elementor pro licenses",
      "20+ starter templates in various niches",
      "Basic element packs and pre-built sections",
      "Video tutorial library access",
      "Email support",
      "1 website license"
    ],
    bestFor: "Solopreneurs, small businesses, bloggers"
  },
  {
    name: "Professional",
    tagline: "Most Popular",
    monthlyPrice: 59,
    yearlyPrice: 590,
    description: "Everything you need to build multiple professional websites",
    features: [
      "Everything in Starter plan",
      "100+ premium templates across all industries",
      "Advanced element packs and conversion-focused sections",
      "Priority email support + monthly Q&A sessions",
      "Access to premium WordPress plugins",
      "Up to 5 website licenses",
      "Custom branding removal tools"
    ],
    bestFor: "Agencies, freelancers, growing businesses",
    popular: true
  },
  {
    name: "Agency",
    tagline: "Unlimited Power",
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: "Complete toolkit for agencies and power users",
    features: [
      "Everything in Professional plan",
      "Unlimited templates and elements",
      "White-label licensing and reseller rights",
      "Priority phone support + dedicated account manager",
      "Custom template requests (2 per month)",
      "Unlimited website licenses",
      "Advanced training and certification program"
    ],
    bestFor: "Agencies, web design firms, enterprise users"
  }
];

export const builderTemplates = [
  {
    name: "Business Pro",
    category: "Corporate",
    image: "/images/template-business.jpg",
    description: "Professional template perfect for service-based businesses and consultants."
  },
  {
    name: "E-commerce Elite",
    category: "Online Store",
    image: "/images/template-ecommerce.jpg",
    description: "Conversion-optimized template designed for online retailers and product sellers."
  },
  {
    name: "Creative Portfolio",
    category: "Portfolio",
    image: "/images/template-portfolio.jpg",
    description: "Stunning portfolio template for artists, designers, and creative professionals."
  },
  {
    name: "Restaurant Deluxe",
    category: "Restaurant",
    image: "/images/template-restaurant.jpg",
    description: "Mouth-watering template perfect for restaurants and food businesses."
  },
  {
    name: "Fitness Focus",
    category: "Health & Fitness",
    image: "/images/template-fitness.jpg",
    description: "Energetic template designed for gyms, trainers, and wellness businesses."
  },
  {
    name: "Tech Startup",
    category: "Technology",
    image: "/images/template-tech.jpg",
    description: "Modern template perfect for tech companies and SaaS businesses."
  }
];

export const builderFaqs = [
  {
    question: "Do I need coding skills to use the builder?",
    answer: "Not at all! Our membership gives you access to Divi and Elementor, the most user-friendly drag-and-drop builders. Plus, we provide video tutorials to guide you through everything."
  },
  {
    question: "Can I use these templates for client projects?",
    answer: "Yes! Professional and Agency plans include commercial licenses. You can use our templates for unlimited client projects and even white-label them as your own."
  },
  {
    question: "How often do you add new templates?",
    answer: "We add 5-10 new templates every month across different industries. Members get instant access to all new releases as part of their subscription."
  },
  {
    question: "What's included in the video tutorials?",
    answer: "Our tutorial library covers everything from basic Divi/Elementor usage to advanced techniques like custom animations, responsive design, and conversion optimization."
  },
  {
    question: "Can I cancel my membership anytime?",
    answer: "Absolutely! You can cancel your membership at any time. You'll continue to have access until the end of your current billing period."
  },
  {
    question: "Do you provide support if I get stuck?",
    answer: "Yes! All plans include email support. Professional and Agency members get priority support and access to live Q&A sessions with our experts."
  }
];

// WordPress Hosting Data
export const wordpressFeatures = [
  {
    icon: "RocketLaunchIcon",
    title: "Lightning Fast Performance",
    description: "WordPress-optimized servers with advanced caching deliver sub-2-second load times."
  },
  {
    icon: "ShieldCheckIcon", 
    title: "Advanced WordPress Security",
    description: "Malware scanning, firewall protection, and automatic security updates keep your site safe."
  },
  {
    icon: "WrenchIcon",
    title: "One-Click WordPress Tools",
    description: "Easy installation, automatic updates, and staging environments for seamless development."
  },
  {
    icon: "ClockIcon",
    title: "Automated Daily Backups",
    description: "Your content is automatically backed up daily with easy one-click restoration."
  },
  {
    icon: "ChartBarIcon",
    title: "Performance Analytics",
    description: "Real-time monitoring with detailed reports on speed, uptime, and optimization opportunities."
  },
  {
    icon: "ServerIcon",
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade infrastructure with redundant systems and guaranteed uptime."
  }
];

export const wordpressPlans = [
  {
    name: "Personal",
    tagline: "Perfect Start",
    monthlyPrice: 8,
    yearlyPrice: 80,
    description: "Ideal for personal blogs and small WordPress sites",
    features: [
      "1 WordPress website",
      "10 GB SSD storage",
      "Unmetered bandwidth",
      "Free SSL certificate",
      "Daily automated backups",
      "WordPress security suite",
      "Email support"
    ],
    bestFor: "Bloggers, personal websites, small portfolios"
  },
  {
    name: "Professional", 
    tagline: "Most Popular",
    monthlyPrice: 15,
    yearlyPrice: 150,
    description: "Perfect for business websites and growing blogs",
    features: [
      "5 WordPress websites",
      "50 GB SSD storage", 
      "Unmetered bandwidth",
      "Free SSL certificate",
      "Daily automated backups",
      "WordPress security suite",
      "Performance optimization",
      "Priority support",
      "Staging environment"
    ],
    bestFor: "Small businesses, professional blogs, agencies",
    popular: true
  },
  {
    name: "Business",
    tagline: "Maximum Power",
    monthlyPrice: 25,
    yearlyPrice: 250,
    description: "For high-traffic sites and demanding applications",
    features: [
      "Unlimited WordPress websites",
      "100 GB SSD storage",
      "Unmetered bandwidth", 
      "Free SSL certificate",
      "Daily automated backups",
      "WordPress security suite",
      "Performance optimization",
      "Priority support",
      "Staging environment",
      "Developer tools",
      "Advanced caching"
    ],
    bestFor: "Large businesses, high-traffic sites, e-commerce"
  }
];

export const wordpressTestimonials = [
  {
    name: "Marcus Chen",
    business: "Tech Blog",
    quote: "My WordPress site went from 6-second load times to under 2 seconds. The performance difference is incredible and my readers love it."
  },
  {
    name: "Sarah Williams", 
    business: "Digital Agency",
    quote: "We host 50+ client sites here. The staging environments and one-click tools make our development workflow seamless."
  },
  {
    name: "David Rodriguez",
    business: "E-commerce Store",
    quote: "Since switching, we've had zero downtime issues. The automatic backups saved us when we had a plugin conflict."
  }
];

export const wordpressFaqs = [
  {
    question: "Is this regular web hosting or WordPress-specific?",
    answer: "This is specialized WordPress hosting. Our servers are optimized specifically for WordPress with custom caching, security, and performance features you won't find on regular hosting."
  },
  {
    question: "Can I migrate my existing WordPress site?",
    answer: "Absolutely! We provide free migration for all plans. Our team will handle the technical details and ensure zero downtime during the transfer."
  },
  {
    question: "What makes this faster than other WordPress hosts?",
    answer: "We use WordPress-specific caching, optimized server configurations, SSD storage, and a content delivery network (CDN) to deliver lightning-fast performance."
  },
  {
    question: "Do you handle WordPress updates and maintenance?",
    answer: "Yes! We automatically update WordPress core, themes, and plugins (with rollback protection). You can focus on content while we handle the technical maintenance."
  },
  {
    question: "What if my site gets hacked or infected?",
    answer: "Our security suite includes malware scanning, automatic removal, and restoration from clean backups. Plus, we provide free cleanup if anything gets through."
  },
  {
    question: "Can I install custom themes and plugins?",
    answer: "Of course! You have full control over your WordPress installation. Install any themes, plugins, or customizations you need."
  }
];

// Web Hosting Data (Managed Hosting)
export const webHostingFeatures = [
  {
    icon: "UserGroupIcon",
    title: "Dedicated Account Manager",
    description: "Your personal hosting expert handles everything so you can focus on growing your business."
  },
  {
    icon: "PhoneIcon",
    title: "Premium Support Hours",
    description: "Get direct phone support with our experts when you need help most."
  },
  {
    icon: "CloudIcon",
    title: "Fully Managed Platform",
    description: "We handle servers, updates, security, and optimization - you run your business."
  },
  {
    icon: "ShieldCheckIcon",
    title: "Enterprise Security Suite", 
    description: "Advanced firewall, SSL certificates, and 24/7 security monitoring included."
  },
  {
    icon: "RocketLaunchIcon",
    title: "Performance Optimization",
    description: "Our team continuously optimizes your site for maximum speed and reliability."
  },
  {
    icon: "WrenchIcon",
    title: "White-Glove Setup",
    description: "We set up everything for you - hosting, email, domains, and any integrations you need."
  }
];

export const webHostingPlans = [
  {
    name: "Starter",
    tagline: "Managed Basics",
    monthlyPrice: 100,
    supportHours: 0,
    description: "Perfect for small businesses wanting hands-off hosting",
    features: [
      "Fully managed hosting platform",
      "Up to 3 websites",
      "50 GB premium SSD storage",
      "Unlimited bandwidth",
      "Free SSL certificates",
      "Daily backups with 30-day retention",
      "Basic security monitoring",
      "Email support",
      "Domain management"
    ],
    bestFor: "Small businesses, startups, personal brands"
  },
  {
    name: "Professional",
    tagline: "Most Popular", 
    monthlyPrice: 200,
    supportHours: 2,
    description: "Complete managed solution with dedicated support",
    features: [
      "Everything in Starter plan",
      "Up to 10 websites",
      "100 GB premium SSD storage",
      "2 hours monthly phone support",
      "Performance optimization",
      "Advanced security suite",
      "Staging environments",
      "Priority email support",
      "Content delivery network (CDN)",
      "Monthly performance reports"
    ],
    bestFor: "Growing businesses, professional services, agencies",
    popular: true
  },
  {
    name: "Enterprise",
    tagline: "Full Service",
    monthlyPrice: 300,
    supportHours: 4,
    description: "White-glove service with unlimited everything",
    features: [
      "Everything in Professional plan",
      "Unlimited websites", 
      "200 GB premium SSD storage",
      "4 hours monthly phone support",
      "Dedicated account manager",
      "Custom integrations",
      "White-label options",
      "24/7 priority support",
      "Advanced analytics dashboard",
      "Quarterly strategy consultations",
      "Custom backup schedules"
    ],
    bestFor: "Large businesses, enterprises, mission-critical sites"
  }
];

export const webHostingTestimonials = [
  {
    name: "Jennifer Adams",
    business: "Law Firm",
    quote: "Having someone else handle all the technical stuff is priceless. We can focus on our clients while RelentNet keeps our website running perfectly."
  },
  {
    name: "Michael Torres",
    business: "Manufacturing Company", 
    quote: "The monthly phone support is a game-changer. Whenever we need changes or have questions, we just call and they take care of everything."
  },
  {
    name: "Lisa Park",
    business: "Marketing Agency",
    quote: "We manage 20+ client websites on their platform. The white-glove service and dedicated account manager make our lives so much easier."
  }
];

export const webHostingFaqs = [
  {
    question: "What does 'fully managed' actually mean?",
    answer: "We handle everything: server maintenance, security updates, performance optimization, backups, and monitoring. You just focus on your business while we keep your website running perfectly."
  },
  {
    question: "How does the monthly phone support work?",
    answer: "Professional plan gets 2 hours, Enterprise gets 4 hours of direct phone time with our experts each month. Use it for consultations, technical help, or website changes - whatever you need."
  },
  {
    question: "Can you help with website changes and updates?",
    answer: "Absolutely! That's what your support hours are for. Content updates, design changes, new features - our team can handle it all within your monthly allocation."
  },
  {
    question: "What if I need more than my monthly support hours?",
    answer: "No problem! Additional support time is available at $75/hour for Professional plans and $60/hour for Enterprise plans. Or you can upgrade to the next tier."
  },
  {
    question: "Do you work with existing websites or only new builds?",
    answer: "We work with both! We can migrate your existing website to our platform, or we can build you a brand new one. Migration and setup are included in all plans."
  },
  {
    question: "What happens if my website goes down?",
    answer: "Our 24/7 monitoring system alerts us immediately, and we start fixing issues before you even notice. Plus, all plans include a 99.9% uptime guarantee."
  }
];

// VPS Hosting Data
export const vpsFeatures = [
  {
    icon: "ServerIcon",
    title: "Dedicated Resources",
    description: "Guaranteed CPU cores, RAM, and storage that nobody else can touch."
  },
  {
    icon: "CommandLineIcon",
    title: "Full Root Access",
    description: "Complete control with root/administrator access to configure everything exactly how you want."
  },
  {
    icon: "CubeIcon",
    title: "Instant Scaling",
    description: "Upgrade CPU, RAM, or storage in seconds without downtime or data migration."
  },
  {
    icon: "ShieldCheckIcon",
    title: "Enterprise Security",
    description: "DDoS protection, firewall management, and optional security hardening services."
  },
  {
    icon: "ClockIcon",
    title: "99.9% Uptime SLA",
    description: "Redundant infrastructure with automatic failover and monitoring."
  },
  {
    icon: "CogIcon",
    title: "Flexible Management",
    description: "Choose self-managed for full control or managed services for peace of mind."
  }
];

export const vpsPlans = [
  {
    name: "Starter VPS",
    tagline: "Getting Started",
    monthlyPrice: 15,
    cpu: "1 vCPU",
    ram: "2 GB",
    storage: "50 GB SSD",
    bandwidth: "2 TB",
    description: "Perfect for small applications and development environments",
    features: [
      "1 dedicated vCPU core",
      "2 GB guaranteed RAM",
      "50 GB NVMe SSD storage",
      "2 TB monthly bandwidth",
      "Full root access",
      "Choice of Linux distributions",
      "DDoS protection included",
      "99.9% uptime SLA"
    ],
    bestFor: "Developers, small apps, testing environments"
  },
  {
    name: "Professional VPS",
    tagline: "Most Popular",
    monthlyPrice: 35,
    cpu: "2 vCPU",
    ram: "4 GB", 
    storage: "100 GB SSD",
    bandwidth: "4 TB",
    description: "Ideal for production websites and growing applications",
    features: [
      "2 dedicated vCPU cores",
      "4 GB guaranteed RAM",
      "100 GB NVMe SSD storage", 
      "4 TB monthly bandwidth",
      "Full root access",
      "Choice of Linux distributions",
      "DDoS protection included",
      "99.9% uptime SLA",
      "Priority technical support",
      "Free server management (optional)"
    ],
    bestFor: "Production websites, small businesses, APIs",
    popular: true
  },
  {
    name: "Business VPS",
    tagline: "High Performance",
    monthlyPrice: 70,
    cpu: "4 vCPU",
    ram: "8 GB",
    storage: "200 GB SSD", 
    bandwidth: "8 TB",
    description: "High-performance solution for demanding applications",
    features: [
      "4 dedicated vCPU cores",
      "8 GB guaranteed RAM", 
      "200 GB NVMe SSD storage",
      "8 TB monthly bandwidth",
      "Full root access",
      "Choice of Linux distributions",
      "DDoS protection included",
      "99.9% uptime SLA",
      "Priority technical support",
      "Free server management (optional)",
      "Advanced monitoring dashboard",
      "Custom firewall rules"
    ],
    bestFor: "High-traffic sites, e-commerce, databases"
  },
  {
    name: "Enterprise VPS",
    tagline: "Maximum Power",
    monthlyPrice: 140,
    cpu: "8 vCPU",
    ram: "16 GB",
    storage: "400 GB SSD",
    bandwidth: "16 TB", 
    description: "Enterprise-grade performance for mission-critical applications",
    features: [
      "8 dedicated vCPU cores",
      "16 GB guaranteed RAM",
      "400 GB NVMe SSD storage",
      "16 TB monthly bandwidth",
      "Full root access",
      "Choice of Linux distributions", 
      "DDoS protection included",
      "99.9% uptime SLA",
      "Dedicated technical support",
      "Managed services included",
      "Advanced monitoring dashboard",
      "Custom firewall rules",
      "Dedicated IP addresses",
      "Priority hardware allocation"
    ],
    bestFor: "Enterprise applications, high-availability systems, large databases"
  }
];

export const vpsTestimonials = [
  {
    name: "Alex Thompson",
    business: "SaaS Startup",
    quote: "The ability to scale resources instantly saved our app during a traffic spike. We went from 2GB to 8GB RAM in under 30 seconds."
  },
  {
    name: "Rachel Kim",
    business: "Development Agency",
    quote: "Having full root access means we can configure the server exactly how we need it for each client project. The performance is outstanding."
  },
  {
    name: "James Wilson",
    business: "E-commerce Platform",
    quote: "We've been running our high-traffic store on their VPS for 2 years. Zero downtime, amazing support, and the scaling flexibility is perfect."
  }
];

export const vpsFaqs = [
  {
    question: "What's the difference between VPS and shared hosting?",
    answer: "VPS gives you dedicated resources (CPU, RAM, storage) that are guaranteed and isolated. Shared hosting means you're competing with other sites for the same resources, which can slow you down."
  },
  {
    question: "Do I need technical knowledge to manage a VPS?",
    answer: "For self-managed VPS, yes - you'll need to handle server administration. But we offer managed VPS options where our team handles all the technical aspects for you."
  },
  {
    question: "Can I upgrade my VPS resources later?",
    answer: "Absolutely! You can upgrade CPU, RAM, or storage instantly without downtime. Downgrades require a support ticket but are also possible."
  },
  {
    question: "What operating systems can I install?",
    answer: "We support all major Linux distributions (Ubuntu, CentOS, Debian, etc.) and Windows Server. You can also upload custom ISO images if needed."
  },
  {
    question: "How is VPS different from dedicated servers?",
    answer: "VPS runs on shared physical hardware but gives you dedicated virtual resources. Dedicated servers give you an entire physical machine. VPS is more cost-effective for most use cases."
  },
  {
    question: "What kind of support do you provide?",
    answer: "All VPS plans include technical support for the hosting infrastructure. Managed VPS plans include support for the operating system and applications too."
  }
];
