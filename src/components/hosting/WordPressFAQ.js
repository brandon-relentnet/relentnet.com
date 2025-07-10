import SectionHeader from "@/components/sections/SectionHeader";
import Accordion from "@/components/Accordian";

export default function WordPressFAQ({ faqs }) {
  return (
    <SectionHeader
      title={
        <>
          Frequently Asked <span className="italic">Questions</span>
        </>
      }
      subtitle="WordPress Hosting Questions"
      desc="Everything you need to know about WordPress hosting with RelentNet."
      maskRight={false}
    >
      <Accordion faqs={faqs} />
    </SectionHeader>
  );
}