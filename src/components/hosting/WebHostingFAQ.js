import SectionHeader from "@/components/sections/SectionHeader";
import Accordion from "@/components/Accordian";

export default function WebHostingFAQ({ faqs }) {
  return (
    <SectionHeader
      title={
        <>
          Business Owner <span className="italic">Questions</span>
        </>
      }
      subtitle="Managed Hosting Questions"
      desc="Common questions from business owners about our managed hosting service."
      maskRight={false}
    >
      <Accordion faqs={faqs} />
      
      {/* Business guarantee */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-4 rounded-full">
          <span className="text-2xl">🤝</span>
          <span className="font-semibold">
            30-day money-back guarantee. No questions asked.
          </span>
        </div>
      </div>
    </SectionHeader>
  );
}