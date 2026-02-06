"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const stats = [
  {
    label: "Authors Served",
    value: 500,
    suffix: "+"
  },
  {
    label: "Average Rating",
    value: 4.9,
    suffix: "/5",
    decimals: 1
  },
  {
    label: "Bestsellers",
    value: 200,
    suffix: "+"
  },
  {
    label: "Client Satisfaction",
    value: 98,
    suffix: "%"
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

function StatItem({
  label,
  value,
  suffix,
  decimals = 0,
  delay = 0,
  start
}: {
  label: string;
  value: number;
  suffix: string;
  decimals?: number;
  delay?: number;
  start: boolean;
}) {
  const displayed = useCountUp(value, 1200 + delay, decimals, start);
  const formatted = useMemo(() => {
    if (decimals > 0) {
      return displayed.toFixed(decimals);
    }
    return Math.round(displayed).toString();
  }, [displayed, decimals]);

  return (
    <div className="space-y-1">
      <p className="text-3xl font-bold text-[#0B0B0B] tabular-nums">
        {formatted}
        {suffix}
      </p>
      <p className="text-sm text-[#6F6A63]">{label}</p>
    </div>
  );
}

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <div className="mt-12">
      <div className="relative bg-[#0B0B0B] rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A24D] via-[#E8D5A3] to-[#C9A24D]" />

        <div className="p-8 md:p-12 lg:p-16">
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#C9A24D] text-[#C9A24D]" />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#8B6914] flex items-center justify-center">
                  <span className="text-xl font-bold text-[#0B0B0B]">{current.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">{current.name}</p>
                  <p className="text-[#C9A24D]">{current.title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/10">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === index ? "bg-[#C9A24D] w-8" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full border-2 border-[#C9A24D] flex items-center justify-center text-[#C9A24D] transition-all hover:bg-[#C9A24D] hover:text-[#0B0B0B]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full border-2 border-[#C9A24D] flex items-center justify-center text-[#C9A24D] transition-all hover:bg-[#C9A24D] hover:text-[#0B0B0B]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={statsRef}
        className="mt-8 grid divide-y divide-[#C9A24D]/20 text-center sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4"
      >
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            label={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            decimals={stat.decimals}
            delay={index * 200}
            start={statsInView}
          />
        ))}
      </div>
    </div>
  );
}
