import SectionHeader from "@/components/sections/SectionHeader";

const iconMap = {
  RocketLaunchIcon: "🚀",
  ShieldCheckIcon: "🛡️", 
  WrenchIcon: "🔧",
  ClockIcon: "⏰",
  ChartBarIcon: "📊",
  ServerIcon: "🖥️"
};

export default function WordPressFeatures({ features }) {
  return (
    <SectionHeader
      title={
        <>
          WordPress Hosting <span className="italic">Done Right</span>
        </>
      }
      subtitle="Optimized Performance"
      desc="Our WordPress hosting platform is specifically designed and optimized for WordPress websites, providing superior performance, security, and ease of use."
      maskRight={true}
      id="wordpress-features"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div key={i} className="card bg-base-300 shadow-md hover:shadow-accent/30 card-border border-base-300 hover:border-accent/30 transition duration-250 p-6">
            <div className="text-4xl mb-4">{iconMap[feature.icon]}</div>
            <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
            <p className="text-base-content/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </SectionHeader>
  );
}