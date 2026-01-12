import { useId, useState } from 'react'
import type { ReactNode } from 'react'

interface AccordionProps {
  faqs: Array<{ question: string; answer: string }>
  className?: string
}

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function Item({ header, children }: { header: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const id = useId()

  return (
    <section>
      <h3>
        <button
          id={`${id}-button`}
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer w-full flex items-center justify-between py-4"
        >
          <span className="font-medium text-lg">{header}</span>
          <ChevronDownIcon isOpen={isOpen} />
        </button>
      </h3>
      <div
        id={id}
        aria-labelledby={`${id}-button`}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-base-content/80">{children}</div>
      </div>
      <hr className="border-base-content/10" />
    </section>
  )
}

export default function Accordion({ faqs, className = '' }: AccordionProps) {
  return (
    <div
      className={`accordion card relative mx-auto max-w-3xl bg-base-300 px-8 py-4 text-left shadow-md ${className}`}
    >
      {faqs.map((faq) => (
        <Item key={faq.question} header={faq.question}>
          <p>{faq.answer}</p>
        </Item>
      ))}
    </div>
  )
}
