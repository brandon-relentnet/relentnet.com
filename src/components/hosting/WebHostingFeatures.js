import SectionHeader from "@/components/sections/SectionHeader";

const iconMap = {
  UserGroupIcon: "👥",
  PhoneIcon: "📞",
  CloudIcon: "☁️",
  ShieldCheckIcon: "🛡️",
  RocketLaunchIcon: "🚀",
  WrenchIcon: "🔧"
};

export default function WebHostingFeatures({ features }) {
  return (
    <SectionHeader
      title={
        <>
          Let Us Handle <span className="italic">Everything</span>
        </>
      }
      subtitle="Fully Managed Hosting"
      desc="Focus on growing your business while we take care of all the technical details. Our managed hosting platform handles everything so you don't have to."
      maskLeft={true}
      id="web-hosting-features"
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
    </SectionHeader>
  );
}