"use client";

import { useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { cn } from "@/lib/utils";

export function LeadFormModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 px-4 py-6 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "w-full max-w-3xl overflow-hidden rounded-3xl border-2 border-[#C9A24D]/50 bg-offWhite",
          "shadow-[0_40px_100px_rgba(11,11,11,0.45)]",
          "animate-in zoom-in-95 slide-in-from-bottom-4 duration-500",
          "transform-gpu"
        )}
      >
        {/* Enhanced Header */}
        <div className="relative border-b-2 border-[#C9A24D]/30 bg-gradient-to-br from-[#0B0B0B] via-[#1A1A1A] to-[#2E2E2E] px-8 py-8 text-white">
          {/* Animated gradient line */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent animate-shimmer" />
          
          {/* Sparkle icon */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C9A24D]/20 px-4 py-2 backdrop-blur-sm border border-[#C9A24D]/40">
            <Sparkles className="h-4 w-4 text-[#E8D5A3] animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E8D5A3]">Get Started Today</p>
          </div>
          
          <h2 className="text-3xl font-bold leading-tight md:text-4xl bg-gradient-to-r from-white to-[#E8D5A3] bg-clip-text text-transparent">
            Transform Your Book Into a Bestseller
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 max-w-2xl">
            Share your project details and receive a personalized publishing strategy tailored to your goals. Our experts typically respond within 24 hours.
          </p>
          
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-6 top-6 rounded-full border-2 border-white/20 bg-white/10 p-2.5 text-white transition-all hover:bg-white/20 hover:border-white/40 hover:rotate-90 duration-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Form Content */}
        <div className="bg-gradient-to-b from-offWhite to-[#FAF9F7] px-8 py-8">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
