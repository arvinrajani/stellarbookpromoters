"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function FloatingBook() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // Auto page flip animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const pages = [
    { title: "Your Story", subtitle: "Begins Here", color: "from-[#C9A24D] to-[#8B6914]" },
    { title: "Expert", subtitle: "Editing", color: "from-[#2E2E2E] to-[#0B0B0B]" },
    { title: "Global", subtitle: "Marketing", color: "from-[#C9A24D] to-[#E8D5A3]" },
    { title: "Best", subtitle: "Seller", color: "from-[#0B0B0B] to-[#C9A24D]" },
  ];

  return (
    <div 
      className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect behind book */}
      <motion.div
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.8 : 0.5,
        }}
        className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#C9A24D]/20 blur-3xl"
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#C9A24D]/60"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
        />
      ))}

      {/* Book Container - uses simple 2D transforms for iOS compatibility */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.05 }}
        className="relative w-48 h-64 md:w-64 md:h-80 cursor-pointer"
      >
        {/* Book spine */}
        <div
          className="absolute left-0 top-0 w-4 md:w-5 h-full bg-gradient-to-r from-[#8B6914] via-[#C9A24D] to-[#8B6914] rounded-l-md shadow-2xl"
        />

        {/* Back cover */}
        <div 
          className="absolute top-0 left-4 md:left-5 right-0 bottom-0 bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] rounded-r-md shadow-2xl"
        />

        {/* Pages stack effect */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1 left-5 md:left-6 right-1 bottom-1 bg-[#FAF9F7] rounded-r-sm"
            style={{ 
              right: `${4 + i * 2}px`,
              boxShadow: "inset 2px 0 4px rgba(0,0,0,0.1)"
            }}
          />
        ))}

        {/* Page content */}
        <motion.div
          className="absolute top-0 left-4 md:left-5 right-0 bottom-0 bg-[#FAF9F7] rounded-r-md p-4 md:p-6 flex flex-col items-center justify-center overflow-hidden"
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className={`w-16 h-1 md:w-20 md:h-1.5 mx-auto mb-4 rounded-full bg-gradient-to-r ${pages[currentPage].color}`} />
            <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0B]">{pages[currentPage].title}</h3>
            <p className="text-sm md:text-base text-[#C9A24D] font-medium">{pages[currentPage].subtitle}</p>
            <div className={`w-8 h-0.5 md:w-12 md:h-1 mx-auto mt-4 rounded-full bg-gradient-to-r ${pages[currentPage].color}`} />
          </motion.div>
          
          {/* Decorative lines */}
          <div className="absolute bottom-6 left-4 right-4 space-y-2">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i} 
                className="h-1 bg-[#E5E5E5] rounded"
                style={{ width: `${75 + i * 5}%` }}
              />
            ))}
          </div>
        </motion.div>

        {/* Front cover */}
        <motion.div
          className="absolute top-0 left-4 md:left-5 right-0 bottom-0 bg-gradient-to-br from-[#C9A24D] via-[#E8D5A3] to-[#C9A24D] rounded-r-md shadow-[0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden"
          animate={{
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Cover design */}
          <div className="absolute top-0 left-0 right-0 bottom-0 p-4 md:p-6 flex flex-col items-center justify-center text-[#0B0B0B]">
            {/* Decorative top border */}
            <div className="absolute top-3 left-3 right-3 h-px bg-gradient-to-r from-transparent via-[#0B0B0B]/30 to-transparent" />
            
            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="text-[#0B0B0B] text-sm md:text-base"
                >
                  ★
                </motion.span>
              ))}
            </div>
            
            <div className="w-12 h-0.5 md:w-16 md:h-1 bg-[#0B0B0B]/20 rounded-full mb-2" />
            
            <h2 className="text-lg md:text-xl font-bold text-center leading-tight">
              YOUR
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold text-center leading-tight">
              BESTSELLER
            </h2>
            
            <div className="w-8 h-0.5 md:w-12 md:h-1 bg-[#0B0B0B]/20 rounded-full mt-2 mb-3" />
            
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-70">
              Starts Here
            </p>
            
            {/* Author line */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="w-full h-px bg-[#0B0B0B]/20 mb-2" />
              <p className="text-[8px] md:text-[10px] tracking-[0.15em] uppercase opacity-60">
                Stellar Book Promoters
              </p>
            </div>
          </div>
          
          {/* Shine effect */}
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Caption below book */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-4 md:bottom-8 text-center"
      >
        <p className="text-sm md:text-base font-medium text-[#C9A24D]">
          Tap to peek inside
        </p>
        <p className="text-xs text-[#6F6A63] mt-1">
          Interactive Book Preview
        </p>
      </motion.div>
    </div>
  );
}
