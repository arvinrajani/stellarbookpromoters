"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export type FAQItem = {
  q: string;
  a: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={item.q}
            layout
            className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${
              isOpen
                ? "border-[#C9A24D] bg-white shadow-[0_8px_30px_-10px_rgba(201,162,77,0.3)]"
                : "border-[#E7DCC7] bg-white/50 hover:border-[#C9A24D]/40 hover:bg-white hover:shadow-[0_4px_20px_-8px_rgba(11,11,11,0.15)]"
            }`}
            initial={false}
          >
            <div
              className={`absolute inset-x-0 top-0 h-1 ${
                isOpen
                  ? "bg-gradient-to-r from-[#C9A24D] via-[#E9C77B] to-[#C9A24D]"
                  : "bg-transparent"
              }`}
            />
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="flex items-start gap-3 md:gap-4 flex-1">
                <span
                  className={`mt-1 flex h-7 w-7 md:h-8 md:w-8 flex-shrink-0 items-center justify-center rounded-full text-[10px] md:text-[11px] font-semibold tracking-wider ${
                    isOpen
                      ? "bg-[#C9A24D] text-white"
                      : "bg-[#EFE3CF] text-[#7A6C54]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-base md:text-lg font-semibold leading-snug ${
                    isOpen ? "text-[#0B0B0B]" : "text-[#2E2E2E]"
                  }`}
                >
                  {item.q}
                </span>
              </span>
              <div
                className={`flex h-9 w-9 md:h-10 md:w-10 flex-shrink-0 items-center justify-center rounded-full transition-all ${
                  isOpen
                    ? "bg-[#C9A24D] text-white"
                    : "bg-[#EFE3CF] text-[#7A6C54] group-hover:bg-[#E4D4BB]"
                }`}
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-2 md:px-6 md:pb-6">
                    <p className="text-sm md:text-[15px] leading-relaxed text-[#4A4A4A] pl-10 md:pl-12 pr-4">
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
