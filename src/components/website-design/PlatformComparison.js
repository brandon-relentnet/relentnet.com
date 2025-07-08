import SectionHeader from "@/components/sections/SectionHeader";

export default function PlatformComparison({ comparison }) {
  return (
    <SectionHeader
      title="Which Platform is Right for You?"
      subtitle="Still Deciding?"
      maskRight={false}
    >
      <div className="mx-auto mb-8 grid max-w-4xl gap-8 md:grid-cols-2">
        <div className="card bg-base-300 p-8 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl">
          <div className="mb-4 text-center">
            <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-semibold text-primary">
              Best choice for most businesses
            </span>
          </div>
          <h3 className="mb-2 text-center text-2xl font-bold">
            {comparison.wordpress.title}
          </h3>
          <p className="mb-6 text-center font-semibold text-accent">
            {comparison.wordpress.subtitle}
          </p>
          <ul className="space-y-3">
            {comparison.wordpress.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="font-bold text-primary">✓</span>
                <span className="text-base-content/80">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card bg-base-300 p-8 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl">
          <div className="mb-4 text-center">
            <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent">
              When every second counts
            </span>
          </div>
          <h3 className="mb-2 text-center text-2xl font-bold">
            {comparison.nextjs.title}
          </h3>
          <p className="mb-6 text-center font-semibold text-accent">
            {comparison.nextjs.subtitle}
          </p>
          <ul className="space-y-3">
            {comparison.nextjs.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="font-bold text-primary">✓</span>
                <span className="text-base-content/80">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-12 text-center">
        <p className="text-base-content/60">
          <span className="font-semibold">Still confused?</span> Don&apos;t
          worry! We&apos;ll pick the perfect one for you.
          <br />
          Most of our clients love WordPress - it just works.
        </p>
      </div>
    </SectionHeader>
  );
}