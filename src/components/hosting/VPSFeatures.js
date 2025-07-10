import SectionHeader from "@/components/sections/SectionHeader";

const iconMap = {
  ServerIcon: "🖥️",
  CommandLineIcon: "⌨️",
  CubeIcon: "📦",
  ShieldCheckIcon: "🛡️",
  ClockIcon: "⏰",
  CogIcon: "⚙️"
};

export default function VPSFeatures({ features }) {
  return (
    <SectionHeader
      title={
        <>
          Enterprise-Grade <span className="italic">Infrastructure</span>
        </>
      }
      subtitle="VPS Capabilities"
      desc="Powerful virtual private servers with guaranteed resources, full control, and enterprise-grade infrastructure for demanding applications."
      maskRight={true}
      id="vps-features"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div key={i} className="card bg-base-300 shadow-md p-6 text-center">
            <div className="size-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
              {iconMap[feature.icon]}
            </div>
            <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
            <p className="text-base-content/80">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Technical specs callout */}
      <div className="mt-16 bg-gradient-to-r from-base-300 to-base-200 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-medium mb-4">
          Built for <span className="italic">Performance</span>
        </h3>
        <div className="grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="text-2xl font-bold text-primary mb-2">NVMe</div>
            <div className="text-base-content/70">SSD Storage</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">DDR4</div>
            <div className="text-base-content/70">ECC RAM</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">10Gb</div>
            <div className="text-base-content/70">Network</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <div className="text-base-content/70">Monitoring</div>
          </div>
        </div>
      </div>
    </SectionHeader>
  );
}