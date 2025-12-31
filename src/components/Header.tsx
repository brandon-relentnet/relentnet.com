import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Home, Info, LayoutDashboard, Menu, Phone, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/websites', label: 'Websites', icon: LayoutDashboard },
  { to: '/about', label: 'About', icon: Info },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="top-0 z-40 sticky bg-base-100/80 backdrop-blur border-base-300 border-b h-20">
        <div className="flex justify-between items-center mx-auto px-4 h-full container">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold text-lg"
            >
              {/* FIX APPLIED:
                  1. style={{ height: '40px' }}: Forces the height via inline styles (highest priority).
                  2. !h-10: Uses Tailwind's 'important' modifier correctly.
                  3. max-h-10: Adds a maximum height constraint.
              */}
              <img
                src="/images/relentnet-logo.png"
                alt="RelentNet logo"
                style={{ height: '40px', width: 'auto' }}
                className="w-auto h-10! max-h-10 object-contain"
                loading="lazy"
              />
              <span className="hidden sm:inline text-base-content">
                RelentNet
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-xl font-medium hover:text-primary text-sm text-base-content/70 transition"
                activeProps={{
                  className:
                    'rounded-xl px-4 py-2 text-sm font-semibold text-primary bg-primary/10',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-linear-to-r from-primary to-accent shadow-lg px-5 py-2 rounded-2xl font-semibold text-sm text-base-100 hover:scale-105 active:scale-95 transition"
          >
            <Phone size={16} /> Let&apos;s Talk
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 border border-base-300/60 hover:border-primary rounded-xl hover:text-primary text-base-content transition"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="z-40 fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-80 transform bg-base-100/95 text-base-content shadow-2xl backdrop-blur transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-base-300 border-b">
          <p className="font-semibold text-lg">Navigate</p>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="hover:bg-base-200 p-2 border border-base-300/60 rounded-xl transition"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 hover:bg-primary/5 mb-2 px-3 py-3 border border-transparent hover:border-primary/40 rounded-2xl font-medium text-base text-base-content/80 transition"
                activeProps={{
                  className:
                    'mb-2 flex items-center gap-3 rounded-2xl border border-primary/40 bg-primary/10 px-3 py-3 text-base font-semibold text-primary',
                }}
              >
                <Icon size={18} />
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-base-300 border-t">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex justify-center bg-primary py-3 rounded-2xl w-full font-semibold text-primary-content gradient-button"
          >
            Book a Call
          </Link>
        </div>
      </aside>
    </>
  )
}
