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
