"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Brush,
  Clapperboard,
  Feather,
  Palette,
  PenTool,
  TrendingUp,
  UserRound
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const serviceCards: ServiceCard[] = [
  {
    icon: TrendingUp,
    title: "Book Promotion",
    description:
      "Effective book promotion goes beyond writing; it is about showcasing your work to the world. We use cost-effective strategies to promote your books to readers."
  },
  {
    icon: PenTool,
    title: "Book Editing",
    description:
      "Meticulous book editing requires thorough knowledge and keen attention to detail. Our professional book editors ensure your manuscript is polished."
  },
  {
    icon: UserRound,
    title: "Author Branding",
    description:
      "Build your author brand, maximize your outreach, captivate your audience with your words, and ensure your unique voice resonates with them."
  },
  {
    icon: BookOpen,
    title: "Book Publishing",
    description:
      "With our integrated book publishing services, we bring out your masterpiece to the forefront and help your readers get easy access through libraries and stores."
  },
  {
    icon: Palette,
    title: "Book Cover",
    description:
      "With our professional book cover design services, give your book an enticing look and attract the right audience with stunning visuals."
  },
  {
    icon: Brush,
    title: "Book Illustration",
    description:
      "We offer the best-in-class book illustration services to bring your story and characters to life through eye-catching and gripping visuals."
  },
  {
    icon: Clapperboard,
    title: "Book Trailer",
    description:
      "With our exclusive video book trailer services, breathe life into your narrative and characters, and make your literary masterpiece more engaging."
  },
  {
    icon: Feather,
    title: "Ghostwriting",
    description:
      "Let our professional ghost-writers wield their magic of impeccable storytelling to craft a compelling narrative that captivates your audience."
  }
];

export function ServicesTabs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {serviceCards.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-metallicGold/15 bg-white p-6 shadow-[0_14px_30px_rgba(11,11,11,0.08)] transition-all duration-300 hover:border-metallicGold/40 hover:shadow-[0_24px_50px_rgba(11,11,11,0.16)]"
          >
            <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-metallicGold/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-80" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-metallicGold/30 bg-[#FAF9F7] shadow-sm">
                  <Icon className="h-6 w-6 text-metallicGold" />
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#C9A24D]/70 to-transparent" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-richBlack">{service.title}</h3>
                <p className="text-sm text-[#5B564F] leading-relaxed">{service.description}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
