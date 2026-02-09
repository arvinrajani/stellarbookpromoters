"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingChatButton({ onClick }: { onClick: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#C9A24D] to-[#8B6914] text-white shadow-lg ring-2 ring-white/20"
      style={{
        willChange: 'transform',
        WebkitTapHighlightColor: 'transparent'
      }}
      aria-label="Open chat options"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.button>
  );
}
