import { useId, useState, type ReactNode } from 'react'
import { motion, MotionConfig } from 'motion/react'

interface AccordionProps {
  faqs: { question: string; answer: string }[]
  className?: string
}

function onlyKeyboardFocus(callback: () => void) {
  return (event: React.FocusEvent<HTMLButtonElement>) => {
    if (event.type === 'focus' && event.currentTarget.matches(':focus-visible')) {
      callback()
    }
  }
}

function ChevronDownIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
    >
      <path d="m6 9 6 6 6-6" />
    </motion.svg>
  )
}

function Item({ header, children }: { header: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  const id = useId()

  return (
    <MotionConfig transition={{ duration: 0.3 }}>
      <motion.section initial={false} animate={isOpen ? 'open' : 'closed'}>
        <h3>
          <motion.button
            id={`${id}-button`}
            aria-expanded={isOpen}
            aria-controls={id}
            onClick={() => setIsOpen((prev) => !prev)}
            onFocus={onlyKeyboardFocus(() => setHasFocus(true))}
            onBlur={() => setHasFocus(false)}
            className="cursor-pointer"
          >
            <span>{header}</span>
            <ChevronDownIcon />
            {hasFocus && <motion.div layoutId="focus-ring" className="focus-ring" />}
          </motion.button>
        </h3>
        <motion.div
          id={id}
          aria-labelledby={`${id}-button`}
          className="accordion-content"
          variants={{
            open: {
              height: 'auto',
              maskImage: 'linear-gradient(to bottom, black 100%, transparent 100%)',
            },
            closed: {
              height: 0,
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
            },
          }}
        >
          <motion.div
            variants={{
              open: { filter: 'blur(0px)', opacity: 1 },
              closed: { filter: 'blur(2px)', opacity: 0 },
            }}
          >
            {children}
          </motion.div>
        </motion.div>
        <hr />
      </motion.section>
    </MotionConfig>
  )
}

export default function Accordion({ faqs, className = '' }: AccordionProps) {
  return (
    <div className={`accordion card relative mx-auto max-w-3xl bg-base-300 text-left shadow-md ${className}`}>
      {faqs.map((faq) => (
        <Item key={faq.question} header={faq.question}>
          <p>{faq.answer}</p>
        </Item>
      ))}
    </div>
  )
}
