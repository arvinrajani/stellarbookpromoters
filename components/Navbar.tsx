"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/Buttons";
import { useModal } from "@/components/ModalProvider";

export default function Navbar() {
  const { openQuote } = useModal();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-metallicGold/15 nav-glass backdrop-blur relative"
    >
      <div className="container flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4">
        <Link href="/#top" className="flex items-center gap-4 rounded-full transition-opacity hover:opacity-90">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/images/stellar-logo.png"
              alt="Stellar Book Promoters logo"
              width={64}
              height={64}
              className="h-14 w-14 md:h-16 md:w-16 rounded-full object-contain ring-2 ring-[#C9A24D]/40 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              priority
            />
          </motion.div>
          <motion.span
            className="text-xl md:text-2xl font-semibold text-white tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Stellar Book Promoters
          </motion.span>
        </Link>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <motion.a
            href="tel:+12898097930"
            className="call-pill text-sm font-bold text-white transition-colors hover:text-white sm:text-base"
            aria-label="Call us at +1 289 809 7930"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="ring-emoji" aria-hidden="true">
              <PhoneCall className="h-4 w-4 text-white" />
            </span>
            <span>+1 289 809 7930</span>
          </motion.a>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="navCta" onClick={openQuote}>
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
