"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Clock, Shield, Star, TrendingUp } from "lucide-react";
import { homeCopy } from "@/data/site";

const icons = [Award, Star, Clock, BadgeCheck, Shield, TrendingUp];

export function TrustBadges() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
    >
      {homeCopy.trustBadges.map((badge, index) => {
        const Icon = icons[index % icons.length];
        return (
          <motion.div
            key={badge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3 + index * 0.1,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{
              scale: 1.02,
              y: -4
            }}
            className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#C9A24D]/20 shadow-sm hover:shadow-md hover:border-[#C9A24D]/40 transition-all duration-300 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C9A24D] to-[#8B6914] flex items-center justify-center flex-shrink-0">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-medium text-[#0B0B0B] leading-tight">
              {badge}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
