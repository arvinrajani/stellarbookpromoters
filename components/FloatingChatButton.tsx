"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingChatButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 2
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#C9A24D] to-[#8B6914] text-white shadow-[0_8px_30px_rgba(201,162,77,0.4)] hover:shadow-[0_12px_40px_rgba(201,162,77,0.6)] transition-shadow ring-2 ring-white/20"
      aria-label="Open chat options"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.div>
      
      {/* Pulse ring effect */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#C9A24D]"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </motion.button>
  );
}
