"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Mail, Calendar, X, ArrowRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ChatModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-br from-[#0B0B0B] to-[#2E2E2E] px-8 py-8">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A24D] via-[#E8D5A3] to-[#C9A24D]" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-[#C9A24D] flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-[#0B0B0B]" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-[#C9A24D] font-semibold">Let's Connect</p>
                <h2 className="text-2xl font-bold text-white">Get Started Today</h2>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">Choose the best way to reach us. We typically respond within 24 hours.</p>
          </div>

          {/* Contact Options */}
          <div className="p-8 space-y-4">
            {/* Email Option */}
            <Link
              href="mailto:info@stellarbookpromoter.com"
              className="group flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-[#FAF9F7] to-white border-2 border-[#C9A24D]/20 hover:border-[#C9A24D] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#C9A24D] to-[#8B6914] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#0B0B0B] text-lg mb-1">Send us an Email</h3>
                <p className="text-sm text-[#6F6A63]">info@stellarbookpromoter.com</p>
                <p className="text-xs text-[#C9A24D] mt-1">We respond within 24 hours</p>
              </div>
              <ArrowRight className="h-5 w-5 text-[#C9A24D] group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Schedule Call Option */}
            <Link
              href="/contact"
              onClick={onClose}
              className="group flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-[#FAF9F7] to-white border-2 border-[#C9A24D]/20 hover:border-[#C9A24D] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#C9A24D] to-[#8B6914] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#0B0B0B] text-lg mb-1">Request a Free Quote</h3>
                <p className="text-sm text-[#6F6A63]">Fill out our contact form</p>
                <p className="text-xs text-[#C9A24D] mt-1">Get a custom publishing plan</p>
              </div>
              <ArrowRight className="h-5 w-5 text-[#C9A24D] group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Trust Note */}
            <div className="mt-6 p-4 bg-[#EFE3CF]/30 rounded-lg border border-[#C9A24D]/20">
              <p className="text-sm text-[#2E2E2E] text-center">
                <span className="font-semibold text-[#C9A24D]">✓ </span>
                Trusted by 500+ authors worldwide. Your information is always kept confidential.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
