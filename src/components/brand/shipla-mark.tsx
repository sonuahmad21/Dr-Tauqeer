import { cn } from "@/lib/utils";

type ShiplaMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-24 w-24",
};

/**
 * SHIPLA mark — golden/green S with care + growth symbolism.
 */
export function ShiplaMark({ className, size = "md" }: ShiplaMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-grid place-items-center overflow-hidden rounded-full shadow-gold",
        sizes[size],
        className,
      )}
    >
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <defs>
          <linearGradient id="shiplaGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f0d78c" />
            <stop offset="45%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8a6a14" />
          </linearGradient>
          <linearGradient id="shiplaGreen" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#003322" />
            <stop offset="100%" stopColor="#0d5c45" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="58" fill="url(#shiplaGreen)" />
        <path
          d="M78 34c-8-8-28-10-36 0-6 8-2 16 8 20l18 6c12 4 16 12 8 20-8 8-26 8-36-2"
          fill="none"
          stroke="url(#shiplaGold)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M54 28h12M60 22v12"
          stroke="#f0d78c"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M44 78c6 8 16 12 28 8 4-1 8-4 10-7"
          fill="none"
          stroke="#f0d78c"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="48" cy="74" r="3.5" fill="#f0d78c" />
        <circle cx="56" cy="82" r="2.5" fill="#f0d78c" />
        <path
          d="M76 56c8-2 14 4 12 10-4 2-8 2-12-2 2-4 2-6 0-8z"
          fill="#34d399"
        />
      </svg>
    </span>
  );
}
