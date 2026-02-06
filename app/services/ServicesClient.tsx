"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services, serviceCategories } from "@/data/services";
import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTASection } from "@/components/CTASection";

export default function ServicesClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return services;
    return services.filter((service) => service.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <Section className="pt-28">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Services</p>
            <h1 className="text-4xl font-semibold md:text-5xl">Publishing services built for premium results</h1>
            <p className="max-w-2xl text-muted">
              Choose a single service or combine multiple offerings for a full publishing partnership.
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 text-sm border-b-2 transition-colors duration-300 ${
                activeCategory === "All" ? "border-gold text-gold" : "border-transparent text-muted hover:text-gold"
              }`}
            >
              All
            </button>
            {serviceCategories.map((category, index) => (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm border-b-2 transition-colors duration-300 ${
                  activeCategory === category ? "border-gold text-gold" : "border-transparent text-muted hover:text-gold"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ServicesGrid services={filtered} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Section>

      <Section>
        <CTASection
          title="Not sure which service fits your book?"
          description="Tell us about your manuscript and we will recommend the right combination."
        />
      </Section>
    </div>
  );
}
