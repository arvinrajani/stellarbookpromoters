"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A24D] via-[#E8D5A3] to-[#C9A24D] origin-left z-[100] shadow-[0_0_10px_rgba(201,162,77,0.5)]"
      style={{ scaleX }}
    />
  );
}
