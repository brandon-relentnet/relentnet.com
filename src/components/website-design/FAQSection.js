import SectionHeader from "@/components/sections/SectionHeader";
import Accordion from "@/components/Accordian";

export default function FAQSection({ faqs }) {
  return (
    <SectionHeader
      title="Frequently Asked Questions"
      subtitle="Your Questions Answered"
      maskRight={false}
    >
      <Accordion faqs={faqs} />
    </SectionHeader>
  );
}