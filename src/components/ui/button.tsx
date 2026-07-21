import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost" | "gold" | "danger";
    size?: "sm" | "md" | "lg";
  }
>;

const variants = {
  primary:
    "bg-gradient-to-r from-emerald to-forest-mist text-void shadow-glow hover:brightness-110",
  ghost:
    "bg-white/5 text-ivory border border-white/10 hover:bg-white/10 hover:border-white/20",
  gold: "bg-gradient-to-r from-gold to-gold-soft text-void shadow-gold hover:brightness-105",
  danger: "bg-red-500/15 text-red-200 border border-red-400/30 hover:bg-red-500/25",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base min-h-[3.25rem]",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-300 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
