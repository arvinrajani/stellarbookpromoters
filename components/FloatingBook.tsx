"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export function FloatingBook() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  
  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), { stiffness: 150, damping: 20 });

  // Auto page flip animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const pages = [
    { title: "Your Story", subtitle: "Begins Here", color: "from-[#C9A24D] to-[#8B6914]" },
    { title: "Expert", subtitle: "Editing", color: "from-[#2E2E2E] to-[#0B0B0B]" },
    { title: "Global", subtitle: "Marketing", color: "from-[#C9A24D] to-[#E8D5A3]" },
    { title: "Best", subtitle: "Seller", color: "from-[#0B0B0B] to-[#C9A24D]" },
  ];

  return (
    <div 
      className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect behind book */}
      <motion.div
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.8 : 0.5,
        }}
        className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-radial from-[#C9A24D]/40 via-[#C9A24D]/10 to-transparent blur-3xl"
      />
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#C9A24D]/60"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
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
            left: `${20 + i * 8}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
        />
      ))}

      {/* 3D Book Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
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
        <motion.div
          className="absolute left-0 top-0 w-6 md:w-8 h-full bg-gradient-to-r from-[#8B6914] via-[#C9A24D] to-[#8B6914] rounded-l-md shadow-2xl"
          style={{ transform: "rotateY(-90deg) translateZ(12px)" }}
        >
          <div className="h-full flex items-center justify-center">
            <span className="text-[8px] md:text-[10px] font-bold text-white writing-vertical tracking-widest uppercase">
              Your Book
            </span>
          </div>
        </motion.div>

        {/* Back cover */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] rounded-r-md shadow-2xl"
          style={{ transform: "translateZ(-4px)" }}
        />

        {/* Pages stack effect */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-1 bg-[#FAF9F7] rounded-r-sm"
            style={{ 
              transform: `translateZ(${-2 + i * 0.5}px)`,
              boxShadow: "inset 2px 0 4px rgba(0,0,0,0.1)"
            }}
          />
        ))}

        {/* Animated page flip */}
        <motion.div
          className="absolute inset-0 origin-left"
          animate={{
            rotateY: currentPage % 2 === 1 ? -160 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Page front */}
          <div 
            className="absolute inset-0 bg-[#FAF9F7] rounded-r-md p-4 md:p-6 flex flex-col items-center justify-center backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
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
                  style={{ width: `${70 + Math.random() * 20}%` }}
                />
              ))}
            </div>
          </div>

          {/* Page back */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] to-[#EFE3CF] rounded-r-md"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          />
        </motion.div>

        {/* Front cover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#C9A24D] via-[#E8D5A3] to-[#C9A24D] rounded-r-md shadow-[0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden"
          animate={{
            rotateY: isHovered ? -25 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ 
            transformOrigin: "left center",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Cover design */}
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col items-center justify-center text-[#0B0B0B]">
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
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
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
          Hover to peek inside
        </p>
        <p className="text-xs text-[#6F6A63] mt-1">
          Interactive 3D Book Preview
        </p>
      </motion.div>
    </div>
  );
}
