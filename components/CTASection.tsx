"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/Buttons";
import { useModal } from "@/components/ModalProvider";

export function CTASection({
  title,
  description,
  primaryLabel = "Get Started",
  secondaryLabel = "Let's Chat"
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  const { openQuote, openChat } = useModal();

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B0B0B] via-[#1a1a1a] to-[#2E2E2E] border border-[#C9A24D]/20 shadow-2xl">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#C9A24D]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#C9A24D]/5 blur-3xl" />
      </div>
      
      <div className="relative z-10 grid items-center gap-8 p-8 md:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D] font-semibold">Ready to launch</p>
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white leading-tight">{title}</h2>
          <p className="text-[#FAF9F7]/70 text-lg leading-relaxed max-w-xl">{description}</p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button onClick={openQuote}>{primaryLabel}</Button>
            <Button variant="secondary" onClick={openChat}>
              {secondaryLabel}
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#C9A24D]/30 via-[#C9A24D]/10 to-transparent blur-2xl" />
            
            {/* Image container with gold border */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden border-2 border-[#C9A24D]/40 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              <Image
                src="/images/hero-header.png"
                alt="Professional author - Stellar Book Promoters"
                width={400}
                height={450}
                className="h-auto w-full object-cover"
              />
              
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
              
              {/* Caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-sm font-semibold text-white">Your Publishing Journey Starts Here</p>
                <p className="text-xs text-[#C9A24D]/80 mt-1">Professional editing, design, and marketing services</p>
              </div>
            </motion.div>
            
            {/* Decorative floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-[#C9A24D]/20 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-[#C9A24D]/15 blur-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
