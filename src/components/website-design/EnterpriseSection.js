import SectionHeader from "@/components/sections/SectionHeader";
import CustomButton from "@/components/CustomButton";

export default function EnterpriseSection() {
  return (
    <SectionHeader
      title="Got a Big Project?"
      desc="Building something huge? Multiple languages? Thousands of products? We love a challenge. Let's chat about your custom project."
      subtitle="Enterprise Solutions"
    >
      <CustomButton href="/contact">Tell Us Your Ideas</CustomButton>
    </SectionHeader>
  );
}