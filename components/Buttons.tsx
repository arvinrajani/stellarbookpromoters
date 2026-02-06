"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variantStyles: Record<string, string> = {
  primary:
    "bg-metallicGold text-richBlack shadow-[0_8px_24px_rgba(11,11,11,0.2)] hover:bg-richBlack hover:text-metallicGold hover:shadow-[0_12px_32px_rgba(11,11,11,0.3)]",
  navCta:
    "relative overflow-hidden bg-[linear-gradient(135deg,#F1D690_0%,#C9A24D_50%,#B7842B_100%)] text-richBlack shadow-[0_10px_30px_rgba(201,162,77,0.35)] ring-1 ring-white/20 hover:brightness-105 hover:shadow-[0_14px_36px_rgba(201,162,77,0.45)]",
  secondary: "border-2 border-metallicGold text-metallicGold bg-transparent hover:bg-metallicGold hover:text-richBlack",
  ghost: "text-text/80 hover:text-metallicGold hover:bg-beige/30"
};

const sizeStyles: Record<string, string> = {
  sm: "text-xs px-4 py-2",
  md: "text-sm",
  lg: "text-base px-6 py-3"
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "navCta" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="inline-block"
    >
      <button
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    </motion.div>
  );
}

export type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "navCta" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children
}: ButtonLinkProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="inline-block"
    >
      <Link href={href} className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}>
        {children}
      </Link>
    </motion.div>
  );
}
