import HeroSection from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import ForteSection from "@/components/sections/Forte";
import TeamSection from "@/components/sections/Team";
import ManageSection from "@/components/sections/Manage";
import DifferenceSection from "@/components/sections/Difference";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ForteSection />
      <TeamSection />
      <DifferenceSection />
      <ManageSection />
      <ContactSection />
    </div>
  );
}
