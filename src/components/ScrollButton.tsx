import { type ReactNode } from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'

interface ScrollButtonProps {
  targetId: string
  children: ReactNode
  className?: string
  showIcon?: boolean
  up?: boolean
}

export default function ScrollButton({
  targetId,
  children,
  className,
  showIcon = true,
  up = false,
}: ScrollButtonProps) {
  const handleScrollTo = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <button
      type="button"
      className={className || 'gradient-button group'}
      onClick={handleScrollTo}
    >
      {children}
      {showIcon && (
        <PlayIcon
          className={`ml-2 inline-block size-3 text-base-content transition-transform duration-200 ${up ? 'group-hover:-rotate-90' : 'group-hover:rotate-90'}`}
        />
      )}
    </button>
  )
}
