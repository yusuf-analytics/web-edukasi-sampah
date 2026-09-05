interface SectionTransitionProps {
  fillColor: string; // e.g. "text-slate-50", "text-zinc-950", "text-white", "text-black"
  variant?: "bowl" | "dome";
  className?: string;
}

export default function SectionTransition({
  fillColor,
  variant = "bowl",
  className = "",
}: SectionTransitionProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none -mt-px ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`w-full h-6 sm:h-10 lg:h-14 block ${fillColor}`}
      >
        {variant === "bowl" ? (
          <path
            d="M0,0 C480,64 960,64 1440,0 L1440,64 L0,64 Z"
            fill="currentColor"
          />
        ) : (
          <path
            d="M0,64 C480,0 960,0 1440,64 L1440,64 L0,64 Z"
            fill="currentColor"
          />
        )}
      </svg>
    </div>
  );
}
