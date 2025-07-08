import ScrollButton from "../ScrollButton";

export default function HeroSection() {
  return (
    <div className="hero !bg-primary radial-gradient min-h-[calc(100vh-5rem)]">
      <div className="hero-content text-center ">
        <div className="max-w-md">
          <h1 className="empower-text text-5xl md:text-6xl font-medium relative italic inline-block overflow-hidden rounded-xl text-primary p-2">
            Empower
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-medium mb-6">
            your online vision.
          </h1>
          <ScrollButton targetId="services">
            Explore
          </ScrollButton>
        </div>
      </div>
    </div>
  );
}
