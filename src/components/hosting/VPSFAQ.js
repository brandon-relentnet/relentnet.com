import SectionHeader from "@/components/sections/SectionHeader";
import Accordion from "@/components/Accordian";

export default function VPSFAQ({ faqs }) {
  return (
    <SectionHeader
      title={
        <>
          Technical <span className="italic">Documentation</span>
        </>
      }
      subtitle="VPS Questions"
      desc="Common questions from developers and system administrators about our VPS infrastructure."
      maskRight={false}
    >
      <Accordion faqs={faqs} />
      
      {/* Technical specifications */}
      <div className="mt-16 bg-base-100 rounded-2xl p-8">
        <h3 className="text-xl font-medium mb-6 text-center">
          Infrastructure <span className="italic">Specifications</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-3 text-primary">Hardware</h4>
            <ul className="space-y-2 text-base-content/80">
              <li>• Intel Xeon processors</li>
              <li>• DDR4 ECC RAM</li>
              <li>• NVMe SSD storage</li>
              <li>• 10Gb network interfaces</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-primary">Operating Systems</h4>
            <ul className="space-y-2 text-base-content/80">
              <li>• Ubuntu (18.04, 20.04, 22.04)</li>
              <li>• CentOS (7, 8, Stream)</li>
              <li>• Debian (10, 11)</li>
              <li>• Windows Server 2019/2022</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-primary">Management</h4>
            <ul className="space-y-2 text-base-content/80">
              <li>• API access</li>
              <li>• Web console</li>
              <li>• SSH key management</li>
              <li>• Custom ISO uploads</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionHeader>
  );
}