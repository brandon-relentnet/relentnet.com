import Image from "next/image";

export default function PageHero({ title, subtitle, description }) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/hero_bg.webp"
        alt="Hero Background"
        className="absolute inset-0 object-cover w-full h-full"
        width={1920}
        height={1080}
        quality={80}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent mix-blend-multiply"></div>
      <div className="relative py-section !bg-neutral/50 scroll-m-20">
        <div className="container mx-auto px-4 text-center">
          <div className="relative max-w-3xl mx-auto py-30">
            <div className="absolute inset-0 z-1 backdrop-blur bg-base-200/30 blur-3xl rounded-xl"></div>
            {subtitle && (
              <div className="text-sm uppercase font-bold relative z-10 tracking-widest text-primary mb-2">
                {subtitle}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl z-10 relative lg:text-6xl font-medium mb-6 text-base-content">
              {title}
            </h1>
            {description && (
              <p className="text-lg text-base-content/90 z-10 relative max-w-[80ch] mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
