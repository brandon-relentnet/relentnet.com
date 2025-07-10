import Link from "next/link";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function CustomButton({
  children,
  className = "",
  showIcon = true,
  href = "#",
  gradient = true,
}) {
  return (
    <Link
      className={`group ${gradient ? "gradient-button" : "ghost-button"} ${className}`}
      href={href}
    >
      {children}
      {showIcon && (
        <PlayIcon
          className={`-mt-0.5 ml-2 inline-block size-3 text-base-content transition-transform duration-200 group-hover:-rotate-[360deg]`}
        />
      )}
    </Link>
  );
}
