import SectionHeader from "@/components/sections/SectionHeader";
import Accordion from "@/components/Accordian";

export default function StoreFAQ({ faqs }) {
  return (
    <SectionHeader
      title="Common Questions About Online Stores"
      subtitle="Getting Started"
      maskRight={false}
    >
      <Accordion faqs={faqs} />
    </SectionHeader>
  );
}