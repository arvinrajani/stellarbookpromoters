"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { megaMenu } from "@/data/nav";

const primaryLinks = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Authors", href: "/#authors" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" }
];

export function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] bg-ink/70">
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-gradient-to-b from-ink/90 to-surface px-6 py-6 shadow-soft">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full border border-borderGold p-2 text-muted"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-6 space-y-4">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-xl border border-borderGold/30 px-4 py-3 text-left"
            onClick={() => setServicesOpen((prev) => !prev)}
            aria-expanded={servicesOpen}
          >
            <span>Services</span>
            <ChevronDown className={`h-4 w-4 ${servicesOpen ? "rotate-180 text-gold" : "text-muted"}`} />
          </button>
          {servicesOpen && (
            <div className="space-y-4">
              <Link
                href="/#services"
                className="block rounded-lg border border-gold/40 px-4 py-2 text-sm text-gold"
                onClick={onClose}
              >
                Services overview
              </Link>
              {megaMenu.map((category) => (
                <div key={category.title} className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{category.title}</p>
                  <div className="space-y-2">
                    {category.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block rounded-lg border border-borderGold/20 px-4 py-2 text-sm text-muted"
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl border border-borderGold/20 px-4 py-3"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
