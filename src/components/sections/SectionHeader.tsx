import type { ReactNode } from 'react'

interface SectionHeaderProps {
  title: ReactNode
  subtitle?: string
  children?: ReactNode
  desc?: ReactNode
  id?: string
  maskRight?: boolean
}

export default function SectionHeader({
  title,
  subtitle,
  children,
  desc,
  id,
  maskRight = true,
}: SectionHeaderProps) {
  return (
    <section
      id={id}
      className={`${maskRight ? '' : 'bg-base-200'} relative scroll-mt-32 py-section`}
    >
      <span className={maskRight ? 'bg-mask-right' : 'bg-mask-left'} />
      <div className="container relative flex flex-col items-center justify-center py-block text-center">
        <div className="mb-8 text-center">
          {subtitle && <div className="section-subtitle">{subtitle}</div>}
          <h2 className="section-title">{title}</h2>
          {desc && <p className="section-desc">{desc}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
