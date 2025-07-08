"use client";

import { PlayIcon } from "@heroicons/react/24/solid";

export default function ScrollButton({ targetId, children, className, showIcon = true }) {
  const handleScrollTo = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={className || "group hover:scale-105 active:scale-95 transition-all duration-200 inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 text-lg rounded-xl tracking-widest font-semibold cursor-pointer"}
      onClick={handleScrollTo}
    >
      {children}
      {showIcon && (
        <PlayIcon className="size-3 ml-2 -mt-0.5 inline-block group-hover:rotate-[90deg] transition-transform duration-200 text-white" />
      )}
    </button>
  );
}