"use client";

import type { ComponentType } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Sparkles, TrendingUp } from "lucide-react";

const stats = [
  {
    label: "Successful Launches",
    value: 520,
    suffix: "+",
    icon: TrendingUp
  },
  {
    label: "Avg. Rating",
    value: 4.9,
    suffix: "/5",
    icon: Sparkles,
    decimals: 1
  },
  {
    label: "Repeat Clients",
    value: 68,
    suffix: "%",
    icon: BarChart3
  }
];

function useCountUp(value: number, duration = 1200, decimals = 0, start = false) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) {
      setDisplay(0);
      return;
    }

    let raf = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = value * eased;
      setDisplay(Number(next.toFixed(decimals)));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, decimals, start]);

  return display;
}

export function ResultsBand() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-metallicGold/20 bg-white/90 p-8 md:p-10 shadow-[0_18px_50px_rgba(11,11,11,0.12)]">
      <div className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-metallicGold/10 blur-3xl orb" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-[#EFE3CF] blur-3xl orb orb-slow" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C9A24D]">Results</p>
          <h3 className="text-2xl md:text-3xl font-semibold text-richBlack">
            Proof that premium strategy delivers
          </h3>
          <p className="text-[#4A4A4A] leading-relaxed">
            We pair editorial craft with growth systems that keep launches strong long after release.
          </p>
        </div>

        <div className="grid divide-y divide-[#C9A24D]/15 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          {stats.map((stat, index) => (
            <ResultCard key={stat.label} index={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ResultCard({
  label,
  value,
  suffix,
  icon: Icon,
  decimals = 0,
  index
}: {
  label: string;
  value: number;
  suffix: string;
  icon: ComponentType<{ className?: string }>;
  decimals?: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const displayed = useCountUp(value, 1200 + index * 200, decimals, inView);
  const formatted = useMemo(() => {
    if (decimals > 0) {
      return displayed.toFixed(decimals);
    }
    return Math.round(displayed).toString();
  }, [displayed, decimals]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.4 }}
      className="flex flex-col items-center gap-2 px-4 py-4 text-center"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A24D]/30 bg-[#FAF9F7] text-richBlack">
        <Icon className="h-4 w-4 text-[#C9A24D]" />
      </span>
      <p className="text-2xl font-semibold text-richBlack tabular-nums leading-none">
        {formatted}
        {suffix}
      </p>
      <p className="text-xs uppercase tracking-[0.25em] text-[#6F6A63]">{label}</p>
    </motion.div>
  );
}
