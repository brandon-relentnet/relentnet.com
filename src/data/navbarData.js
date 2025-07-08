import {
  MagnifyingGlassIcon,
  ArrowPathIcon,
  GlobeAltIcon,
  PencilIcon,
  WrenchIcon,
  DocumentIcon,
  ChartBarIcon as NavChartBarIcon,
  MegaphoneIcon,
  ShoppingCartIcon,
  ServerIcon,
  CloudIcon,
  CubeIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  ArrowRightStartOnRectangleIcon,
  UserPlusIcon,
  UserCircleIcon,
  DocumentCurrencyDollarIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  KeyIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";

// Navigation items data
export const navItemsData = [
  {
    label: "Domains",
    dropdown: true,
    open: false,
    sections: [
      {
        sectionLabel: "Find a Domain",
        links: [
          {
            label: "Search for Domain Names",
            url: "https://clients.relentnet.com/cart.php?a=add&domain=register",
            icon: MagnifyingGlassIcon,
          },
          {
            label: "Transfer Domain Names",
            url: "https://clients.relentnet.com/cart.php?a=add&domain=transfer",
            icon: ArrowPathIcon,
          },
          {
            label: "gTLD Domain Extensions",
            url: "https://clients.relentnet.com/cart.php?a=add&domain=register",
            icon: GlobeAltIcon,
          },
        ],
      },
    ],
  },
  {
    label: "Websites",
    dropdown: true,
    open: false,
    sections: [
      {
        sectionLabel: "Build & Design",
        links: [
          {
            label: "Website Design Services",
            url: "/websites/design-services",
            icon: PencilIcon,
          },
          {
            label: "Website Builder",
            url: "/websites/builder",
            icon: WrenchIcon,
          },
          {
            label: "Website Templates",
            url: "/websites/templates",
            icon: DocumentIcon,
          },
        ],
      },
      {
        sectionLabel: "Services",
        links: [
          {
            label: "SEO Services",
            url: "/websites/seo-services",
            icon: NavChartBarIcon,
          },
          {
            label: "Digital Marketing Services",
            url: "/websites/digital-marketing",
            icon: MegaphoneIcon,
          },
        ],
      },
      {
        sectionLabel: "E-commerce",
        links: [
          {
            label: "Online Store",
            url: "/websites/online-store",
            icon: ShoppingCartIcon,
          },
        ],
      },
    ],
  },
  {
    label: "Email",
    dropdown: false,
    url: "/email",
  },
  {
    label: "Hosting and Security",
    dropdown: true,
    open: false,
    sections: [
      {
        sectionLabel: "Hosting",
        links: [
          {
            label: "WordPress Hosting",
            url: "/hosting/wordpress",
            icon: ServerIcon,
          },
          {
            label: "Web Hosting",
            url: "/hosting/web-hosting",
            icon: CloudIcon,
          },
          { label: "VPS Hosting", url: "/hosting/vps", icon: CubeIcon },
        ],
      },
      {
        sectionLabel: "Security",
        links: [
          {
            label: "SSL Certificates",
            url: "https://clients.relentnet.com/index.php?rp=/store/ssl-certificates",
            icon: LockClosedIcon,
          },
          {
            label: "Website Security",
            url: "/security/website-security",
            icon: ShieldCheckIcon,
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    dropdown: false,
    url: "/contact",
  },
];

export const accountItemsData = [
  {
    label: "Account",
    dropdown: true,
    open: false,
    sections: [
      {
        sectionLabel: "Members",
        links: [
          {
            label: "Login",
            url: "https://clients.relentnet.com/index.php?rp=/login",
            icon: ArrowRightStartOnRectangleIcon,
          },
          {
            label: "Create Account",
            url: "https://clients.relentnet.com/register.php",
            icon: UserPlusIcon,
          },
          {
            label: "Account Details",
            url: "https://clients.relentnet.com/clientarea.php?action=details",
            icon: UserCircleIcon,
          },
        ],
      },
      {
        sectionLabel: "Billing",
        links: [
          {
            label: "Invoices",
            url: "https://clients.relentnet.com/clientarea.php?action=invoices",
            icon: DocumentCurrencyDollarIcon,
          },
          {
            label: "Quotes",
            url: "https://clients.relentnet.com/clientarea.php?action=quotes",
            icon: ClipboardDocumentListIcon,
          },
          {
            label: "Payment Methods",
            url: "https://clients.relentnet.com/index.php?rp=/account/paymentmethods",
            icon: CreditCardIcon,
          },
        ],
      },
      {
        sectionLabel: "Support",
        links: [
          {
            label: "Lost Password",
            url: "https://clients.relentnet.com/index.php?rp=/password/reset",
            icon: KeyIcon,
          },
          {
            label: "Support Tickets",
            url: "https://clients.relentnet.com/supporttickets.php",
            icon: QuestionMarkCircleIcon,
          },
        ],
      },
    ],
  },
];
