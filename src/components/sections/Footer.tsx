import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { Link } from '@tanstack/react-router'

const policyLinks = [
  { label: 'Cloud-Based Contract', href: '/policies/cloud-based-contracts' },
  { label: 'Web & App Development Contract', href: '/policies/web-and-app-contracts' },
  { label: 'Privacy Policy', href: '/policies/privacy-policy' },
  { label: 'Refund Policy', href: '/policies/refund-policy' },
  { label: 'Terms of Service', href: '/policies/terms-of-service' },
]

export default function Footer() {
  return (
    <footer className="bg-base-300">
      <div className="container grid gap-8 py-section text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
        <div className="mx-auto max-w-[150px] md:mx-0">
          <img
            src="/images/relentnet-logo.png"
            alt="RelentNet Logo"
            className="mx-auto"
            loading="lazy"
          />
        </div>
        <div>
          <div className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            Quick Links
          </div>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-primary transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/websites" className="hover:text-primary transition duration-200">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary transition duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            Contact
          </div>
          <ul className="space-y-2 text-base-content/80">
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <MapPinIcon className="size-5 text-primary" />
              Nashville, TN
            </li>
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <PhoneIcon className="size-5 text-primary" />
              +1 (918) 550-9049
            </li>
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <EnvelopeIcon className="size-5 text-primary" />
              support@relentnet.com
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            Policies
          </div>
          <ul className="space-y-2 text-base-content/80">
            {policyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-primary transition duration-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-base-200">
        <div className="container flex flex-col items-center justify-between gap-4 py-block text-center text-sm text-base-content/80 md:flex-row md:text-left">
          <p>&copy; 2025 RelentNet. All rights reserved.</p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'Facebook'].map((network) => (
              <a key={network} href="#" className="hover:text-primary transition duration-200">
                {network}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
