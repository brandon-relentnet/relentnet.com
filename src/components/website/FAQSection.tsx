import Accordion from '@/components/Accordion'
import SectionHeader from '@/components/sections/SectionHeader'

interface FAQSectionProps {
  faqs: Array<{ question: string; answer: string }>
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <SectionHeader
      title="Frequently Asked Questions"
      subtitle="Your Questions Answered"
      maskRight={false}
    >
      <Accordion faqs={faqs} />
    </SectionHeader>
  )
}
