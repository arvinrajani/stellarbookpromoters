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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 px-4 py-6 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "w-full max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-2xl border-2 border-[#C9A24D]/50 bg-offWhite",
          "shadow-[0_20px_60px_rgba(11,11,11,0.3)]",
          "animate-in zoom-in-95 duration-300",
          "transform-gpu"
        )}
      >
        {/* Enhanced Header */}
        <div className="relative border-b-2 border-[#C9A24D]/30 bg-gradient-to-br from-[#0B0B0B] via-[#1A1A1A] to-[#2E2E2E] px-6 py-6 text-white">
          {/* Animated gradient line */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent animate-shimmer" />
          
          {/* Sparkle icon */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#C9A24D]/25 px-3 py-1.5 border border-[#C9A24D]/40">
            <Sparkles className="h-3.5 w-3.5 text-[#E8D5A3]" />
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E8D5A3]">Get Started</p>
          </div>
          
          <h2 className="text-2xl font-bold leading-tight md:text-3xl bg-gradient-to-r from-white to-[#E8D5A3] bg-clip-text text-transparent">
            Transform Your Book Into a Bestseller
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            Share your details and get a personalized strategy. We typically respond within 24 hours.
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
        <div className="bg-gradient-to-b from-offWhite to-[#FAF9F7] px-6 py-6">
          <QuoteForm formName="get_started" />
        </div>
      </div>
    </div>
  );
}
