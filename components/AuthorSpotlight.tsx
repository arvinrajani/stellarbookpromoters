"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const authors = [
  {
    name: "Ava Reynolds",
    title: "Award-winning Memoirist",
    book: "Echoes of Home",
    quote:
      "They translated my story into a launch plan that felt effortless and elevated. The result was my strongest release yet.",
    accent: "from-[#C9A24D] to-[#8B6914]"
  },
  {
    name: "Michael Chen",
    title: "Business Author",
    book: "The Growth Ledger",
    quote:
      "The team built a premium marketing runway and delivered week by week. I finally saw momentum that lasted.",
    accent: "from-[#1F1F1F] to-[#C9A24D]"
  },
  {
    name: "Sophia Martinez",
    title: "Romance Novelist",
    book: "Gilded Letters",
    quote:
      "Their branding and launch assets felt like a top publisher. Readers noticed immediately.",
    accent: "from-[#C9A24D] to-[#E8D5A3]"
  }
];

export function AuthorSpotlight() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % authors.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const current = authors[index];
  const initials = useMemo(() => {
    return current.name
      .split(" ")
      .map((part) => part[0])
      .slice(0, 2)
      .join("");
  }, [current.name]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-metallicGold/20 bg-[#FAF9F7] p-8 md:p-10 shadow-[0_20px_50px_rgba(11,11,11,0.12)]">
      <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-[#C9A24D]/10 blur-3xl orb" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-[#EFE3CF] blur-3xl orb orb-slow" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C9A24D]">Author Spotlight</p>
          <h3 className="text-2xl md:text-3xl font-semibold text-richBlack">Stories behind the launches</h3>
          <p className="text-[#4A4A4A] leading-relaxed">
            A closer look at the authors who partnered with us to build distinctive, high-performing releases.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-[#C9A24D]/20 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${current.accent} text-richBlack shadow-md`}
                >
                  <span className="text-lg font-semibold">{initials}</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-richBlack">{current.name}</p>
                  <p className="text-sm text-[#6F6A63]">{current.title}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C9A24D] mt-1">{current.book}</p>
                </div>
              </div>
              <div className="mt-5 flex items-start gap-3 text-[#4A4A4A]">
                <Quote className="h-5 w-5 text-[#C9A24D]" />
                <p className="leading-relaxed">{current.quote}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex gap-2">
              {authors.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-[#C9A24D]" : "w-2.5 bg-[#C9A24D]/30"
                  }`}
                  aria-label={`Go to author ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIndex((prev) => (prev - 1 + authors.length) % authors.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A24D]/40 text-[#C9A24D] transition-colors hover:bg-[#C9A24D] hover:text-richBlack"
                aria-label="Previous author"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setIndex((prev) => (prev + 1) % authors.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A24D]/40 text-[#C9A24D] transition-colors hover:bg-[#C9A24D] hover:text-richBlack"
                aria-label="Next author"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
