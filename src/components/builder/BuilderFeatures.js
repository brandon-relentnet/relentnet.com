import SectionHeader from "@/components/sections/SectionHeader";
import AnimatedCards from "@/components/AnimatedCards";

export default function BuilderFeatures() {
  return (
    <SectionHeader
      title={
        <>
          Everything You Need to Build <span className="italic">Amazing</span>{" "}
          Websites
        </>
      }
      subtitle="DIY Website Builder"
      desc="Get access to professional tools, templates, and training to build stunning websites yourself using Divi and Elementor."
    >
      <div className="my-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatedCards servicesData={"builderpage"} />
      </div>
    </SectionHeader>
  );
}
