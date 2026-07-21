import { cn } from "@/lib/utils";

type ShiplaMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const sizes = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-24 w-24",
  xl: "h-32 w-32",
};

/**
 * SHIPLA mark — green/gold S with medical cross, growth leaves, and care silhouettes.
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
            <stop offset="55%" stopColor="#0a4a36" />
            <stop offset="100%" stopColor="#0d5c45" />
          </linearGradient>
        </defs>

        <circle cx="60" cy="60" r="58" fill="url(#shiplaGreen)" />
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="url(#shiplaGold)"
          strokeWidth="1.5"
          opacity="0.55"
        />

        {/* Golden S */}
        <path
          d="M78 32c-8-8-28-10-36 0-6 8-2 16 8 20l18 6c12 4 16 12 8 20-8 8-26 8-36-2"
          fill="none"
          stroke="url(#shiplaGold)"
          strokeWidth="9"
          strokeLinecap="round"
        />

        {/* Medical cross */}
        <path
          d="M54 24h12M60 18v12"
          stroke="#f0d78c"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Growth leaves */}
        <path
          d="M78 50c10-3 16 5 13 12-5 2-10 1-13-3 2-4 1-7 0-9z"
          fill="#34d399"
        />
        <path
          d="M82 58c6 1 10 7 6 12-4 1-8 0-10-3 1-4 2-7 4-9z"
          fill="#6ee7b7"
          opacity="0.85"
        />

        {/* Mother + child care silhouettes */}
        <ellipse cx="46" cy="78" rx="5.5" ry="6.5" fill="#f0d78c" opacity="0.95" />
        <path
          d="M39 94c1-8 5-12 14-12s12 4 13 12"
          fill="none"
          stroke="#f0d78c"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle cx="58" cy="86" r="3.2" fill="#f0d78c" />
        <path
          d="M54 94c1-4 2-6 6-6s5 2 6 6"
          fill="none"
          stroke="#f0d78c"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
