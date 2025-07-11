import ScrollButton from "../ScrollButton";
import AnimatedCards from "../AnimatedCards";

const ServicesSection = () => {
  return (
    <section id="services" className="relative scroll-m-20 py-section">
      <span className="bg-mask-right" />
      <div className="relative container mx-auto px-4 py-block">
        <div className="mx-auto mb-12 text-center md:w-2/3">
          <div className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
            Services
          </div>
          <h2 className="mb-6 text-4xl font-medium md:text-5xl">
            Your success, our <span className="italic">commitment</span>.
          </h2>
          <p className="text-subtle mx-auto max-w-[80ch] text-base-content/80">
            We bring ideas to life with stunning websites, powerful apps, and
            strategic online growth. Whether you need a new digital home,
            marketing that converts, or reliable hosting and support, we&apos;re
            here to make it happen.
          </p>
        </div>
        <div className="relative my-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatedCards servicesData={"homepage"} />
        </div>
        <div className="flex justify-center">
          <ScrollButton targetId="forte">Why</ScrollButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
