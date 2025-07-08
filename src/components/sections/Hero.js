"use client";

import { PlayIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <button
            className="group hover:scale-105 active:scale-95 transition-all duration-200 inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 text-lg rounded-xl tracking-widest font-semibold cursor-pointer"
            onClick={() => handleScrollTo("services")}
          >
            Explore
            <PlayIcon className="size-3 ml-2 -mt-0.5 inline-block group-hover:rotate-[90deg] transition-transform duration-200 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
