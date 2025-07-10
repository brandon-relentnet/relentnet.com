import SectionHeader from "@/components/sections/SectionHeader";
import Accordion from "@/components/Accordian";

export default function BuilderFAQ({ faqs }) {
  return (
    <SectionHeader
      title="Common Questions About Builder Memberships"
      subtitle="Getting Started"
      maskRight={false}
    >
      <Accordion faqs={faqs} />
    </SectionHeader>
  );
}