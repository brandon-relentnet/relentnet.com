import HomeParallaxBackground from "@/components/HomeParallaxBackground";

export default function HeroSection() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] overflow-hidden !bg-primary">
      <HomeParallaxBackground
        src="/images/software-35.webp"
        className="absolute inset-0 z-1"
        opacity=""
      />
    </div>
  );
}
