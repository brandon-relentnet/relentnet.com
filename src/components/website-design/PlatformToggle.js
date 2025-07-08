"use client";

import { motion } from "motion/react";

export default function PlatformToggle({ isCustom, setIsCustom }) {
  return (
    <div className="mb-6 flex justify-center">
      <div className="card !inline-flex flex-row bg-base-300 p-2 shadow-md">
        <Button isSelected={!isCustom} onClick={() => setIsCustom(false)}>
          WordPress
        </Button>
        <Button isSelected={isCustom} onClick={() => setIsCustom(true)}>
          Next.js
        </Button>
      </div>
    </div>
  );
}

function Button({ children, isSelected, onClick }) {
  return (
    <button onClick={onClick} className="relative flex">
      <motion.span
        initial={false}
        animate={{
          color: isSelected
            ? "var(--color-primary-content)"
            : "var(--color-base-content)",
          opacity: isSelected ? 1 : 0.7,
        }}
        className="relative z-[2] cursor-pointer px-6 py-3 text-lg leading-none font-medium will-change-[opacity]"
      >
        {children}
      </motion.span>
      {isSelected && (
        <motion.div
          layoutId="selected"
          className="absolute inset-0 bg-primary will-change-transform"
          style={{ borderRadius: 25, zIndex: 1 }}
        />
      )}
    </button>
  );
}