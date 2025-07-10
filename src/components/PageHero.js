import Image from "next/image";
import ParallaxBackground from "@/components/ParallaxBackground";
import AnimatedHeroContent from "@/components/AnimatedHeroContent";

export default function PageHero({
  title,
  subtitle,
  description,
  button = null,
}) {
  return (
    <section className="relative overflow-hidden">
      <ParallaxBackground />
      <Image
        src="/images/hero_bg.webp"
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        width={1920}
        height={1080}
        quality={80}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent mix-blend-multiply"></div>
      <div className="relative flex min-h-[calc(50vh-5rem)] scroll-m-20 items-center justify-center !bg-neutral/50 py-section">
        <div className="container mx-auto px-4 text-center">
          <div className="relative mx-auto max-w-6xl p-20">
            {/* Background Blur */}
            <div className="absolute inset-0 z-1 rounded-xl bg-neutral/40 blur-3xl backdrop-blur"></div>

            {/* Hero Content */}
            <div className="relative z-10">
              <AnimatedHeroContent
                title={title}
                subtitle={subtitle}
                description={description}
                button={button}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
