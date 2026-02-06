"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#C9A24D]/10">
      <div className="container py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-6"
        >
          <motion.div whileHover={{ rotate: 360, scale: 1.05 }} transition={{ duration: 0.6 }}>
            <Image
              src="/images/stellar-logo.png"
              alt="Stellar Book Promoters logo"
              width={88}
              height={88}
              className="h-16 w-16 md:h-20 md:w-20 rounded-full object-contain ring-2 ring-[#C9A24D]/35 shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
            />
          </motion.div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C9A24D]">Luxury Publishing + Marketing</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">Stellar Book Promoters</h2>
            <motion.a
              href="mailto:info@stellarbookpromoter.com"
              className="inline-block text-sm text-[#C9A24D] hover:text-[#E9C77B] transition-colors font-medium"
              whileHover={{ scale: 1.05, x: 4 }}
              transition={{ duration: 0.2 }}
            >
              info@stellarbookpromoter.com
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="border-t border-[#C9A24D]/10 bg-black/30">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <span className="text-xs text-[#FAF9F7]/40">© 2026 Stellar Book Promoters. All rights reserved.</span>
          <span className="text-xs text-[#FAF9F7]/40">Premium Book Marketing & Publishing Services</span>
        </div>
      </div>
    </footer>
  );
}
