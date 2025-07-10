"use client";

import { PlayIcon } from "@heroicons/react/24/solid";

export default function ScrollButton({
  targetId,
  children,
  className,
  showIcon = true,
  up = false,
}) {
  const handleScrollTo = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={className || "gradient-button group"}
      onClick={handleScrollTo}
    >
      {children}
      {showIcon && (
        <PlayIcon
          className={`-mt-0.5 ml-2 inline-block size-3 text-base-content transition-transform duration-200 ${up ? "group-hover:-rotate-[90deg]" : "group-hover:rotate-[90deg]"}`}
        />
      )}
    </button>
  );
}
