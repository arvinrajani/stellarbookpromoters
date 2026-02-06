"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Megaphone, PenLine, Search, ShoppingBag, Tv } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/Buttons";
import { useModal } from "@/components/ModalProvider";

type ServiceTab = {
  id: string;
  icon: LucideIcon;
  title: string;
  headline: string;
  description: string;
};

const serviceTabs: ServiceTab[] = [
  {
    id: "social-media",
    icon: Megaphone,
    title: "Social Media Marketing",
    headline: "Social Media Marketing",
    description:
      "Social media platforms like Facebook, Instagram, and LinkedIn provide authors with a great opportunity to engage with readers worldwide. Employing targeted marketing strategies, we offer you a vibrant canvas to convey your message that resonates with your intended audience."
  },
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization",
    headline: "Search Engine Optimization",
    description:
      "Get your book discovered by readers actively searching for content like yours. Our SEO strategies optimize your Amazon listings, author website, and online presence to rank higher in search results."
  },
  {
    id: "amazon",
    icon: ShoppingBag,
    title: "Amazon Marketing",
    headline: "Amazon Marketing",
    description:
      "Maximize your visibility on the world's largest bookstore. Our Amazon marketing experts manage sponsored ads, optimize your product listings, and implement proven strategies to boost your book's rankings and sales on the platform."
  },
  {
    id: "content",
    icon: PenLine,
    title: "Content Marketing",
    headline: "Content Marketing",
    description:
      "Build authority and attract readers through compelling content. We create blog posts, articles, newsletters, and promotional materials that showcase your expertise and connect with your target audience."
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Marketing",
    headline: "Email Marketing",
    description:
      "Build and nurture your reader list with strategic email campaigns. We design compelling newsletters, launch sequences, and promotional emails that keep your audience engaged and drive book sales with every send."
  },
  {
    id: "tv",
    icon: Tv,
    title: "TV Interview",
    headline: "TV Interview",
    description:
      "Get featured on television and reach millions of potential readers. We connect authors with TV interview opportunities, prepare you for on-camera success, and help you leverage media appearances to boost your book's visibility and credibility."
  }
];

const serviceHighlights: Record<string, string[]> = {
  "social-media": ["Campaign Strategy", "Community Growth", "Launch Momentum"],
  seo: ["Keyword Research", "Listing Optimization", "Discoverability"],
  amazon: ["Sponsored Ads", "Category Positioning", "Conversion Tuning"],
  content: ["Editorial Calendar", "Authority Building", "Reader Loyalty"],
  email: ["Welcome Series", "Launch Blasts", "Retention"],
  tv: ["Media Prep", "Interview Coaching", "Publicity Lift"]
};

export function MarketingTabs() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].id);
  const { openQuote, openChat } = useModal();

  const activeService = serviceTabs.find((tab) => tab.id === activeTab) || serviceTabs[0];
  const ActiveIcon = activeService.icon;
  const highlights = serviceHighlights[activeService.id] ?? [];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 lg:w-[240px] flex-shrink-0">
        {serviceTabs.map((tab) => {
          const isActive = tab.id === activeTab;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={isActive}
              className={`group relative flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 min-w-[190px] lg:min-w-0 ${
                isActive
                  ? "bg-richBlack text-white border-richBlack shadow-[0_16px_30px_rgba(11,11,11,0.28)]"
                  : "bg-white/80 text-[#4A4A4A] border-transparent hover:border-[#C9A24D]/40 hover:bg-white"
              }`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
                  isActive
                    ? "border-metallicGold/60 bg-metallicGold text-richBlack"
                    : "border-metallicGold/20 bg-[#FAF9F7] text-metallicGold"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold leading-tight">{tab.title}</span>
              {isActive ? (
                <motion.span
                  layoutId="marketing-tab"
                  className="absolute inset-0 rounded-xl ring-1 ring-metallicGold/30"
                  transition={{ duration: 0.25 }}
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-3xl border border-metallicGold/20 bg-white/90 p-6 md:p-8 shadow-[0_20px_50px_rgba(11,11,11,0.12)]"
          >
            <div className="absolute -top-20 -right-16 h-48 w-48 rounded-full bg-metallicGold/12 blur-3xl orb orb-slow" />
            <div className="absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-[#EFE3CF] blur-3xl orb orb-slower" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-metallicGold/30 bg-[#FAF9F7] px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#8B6914]">
                  Service Focus
                </div>
                <h3 className="text-2xl font-semibold text-richBlack md:text-3xl">
                  {activeService.headline}
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed">{activeService.description}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button onClick={openQuote}>Get Started</Button>
                  <Button variant="secondary" onClick={openChat}>
                    Let's Chat
                  </Button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden rounded-2xl border border-metallicGold/25 bg-[#0B0B0B] p-6 shadow-[0_20px_40px_rgba(11,11,11,0.3)]"
                >
                  <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-metallicGold/20 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                  <div className="relative z-10 space-y-5 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-metallicGold text-richBlack">
                        <ActiveIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Campaign Snapshot</p>
                        <p className="text-lg font-semibold">{activeService.title}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 text-xs text-white/70">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                        Multi-channel sequencing
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                        Audience-first positioning
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                        Weekly performance tuning
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                        Launch-ready assets
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
