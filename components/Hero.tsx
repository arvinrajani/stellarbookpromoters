"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Buttons";
import { FloatingBook } from "@/components/FloatingBook";
import { Typewriter } from "@/components/Typewriter";
import { useModal } from "@/components/ModalProvider";
import { homeCopy } from "@/data/site";

export function Hero() {
  const { openQuote, openChat } = useModal();

  const dynamicWords = ["Bestsellers", "Legends", "Icons", "Success Stories"];

  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-16">
      <div className="absolute top-0 left-0 right-0 bottom-0 hero-veil pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gold-radial opacity-70 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 bottom-0 ambient-grid pointer-events-none" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="chip"
          >
            Luxury Publishing + Marketing Agency
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-semibold text-text sm:text-5xl lg:text-6xl leading-tight"
          >
            Elite Publishing That Turns Authors Into{" "}
            <span className="text-[#C9A24D]">
              <Typewriter 
                words={dynamicWords} 
                typingSpeed={120}
                deletingSpeed={80}
                delayBetweenWords={2500}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted md:text-xl"
          >
            {homeCopy.hero.subtext}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <Button onClick={openQuote}>{homeCopy.hero.primaryCta}</Button>
            <Button variant="secondary" onClick={openChat}>
              {homeCopy.hero.secondaryCta}
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 text-sm text-muted"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="chip cursor-pointer transition-transform"
            >
              Editorial mastery
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="chip cursor-pointer transition-transform"
            >
              KDP-ready production
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="chip cursor-pointer transition-transform"
            >
              Launch strategy
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* 3D Floating Book - Signature Animation */}
          <FloatingBook />
        </motion.div>
      </div>
    </section>
  );
}
