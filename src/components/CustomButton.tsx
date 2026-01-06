import { Link } from '@tanstack/react-router'
import { PlayIcon } from '@heroicons/react/24/solid'
import type { ReactNode } from 'react'

interface CustomButtonProps {
  children: ReactNode
  className?: string
  showIcon?: boolean
  href?: string
  gradient?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export default function CustomButton({
  children,
  className = '',
  showIcon = true,
  href,
  gradient = true,
  disabled = false,
  type = 'button',
  onClick,
}: CustomButtonProps) {
  const baseClass = `${gradient ? 'gradient-button' : 'ghost-button'} group ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  if (!href) {
    return (
      <button
        type={type}
        className={baseClass}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
        {showIcon && (
          <PlayIcon className="ml-2 inline-block size-3 text-base-content transition-transform duration-200 group-hover:-rotate-180" />
        )}
      </button>
    )
  }

  if (href.startsWith('http')) {
    return (
      <a href={href} className={baseClass} target="_blank" rel="noreferrer">
        {children}
        {showIcon && (
          <PlayIcon className="ml-2 inline-block size-3 text-base-content transition-transform duration-200 group-hover:-rotate-180" />
        )}
      </a>
    )
  }

  return (
    <Link
      to={href}
      className={baseClass}
      activeProps={{ className: baseClass }}
    >
      {children}
      {showIcon && (
        <PlayIcon className="ml-2 inline-block size-3 text-base-content transition-transform duration-200 group-hover:-rotate-180" />
      )}
    </Link>
  )
}