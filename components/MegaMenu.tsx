"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { megaMenu } from "@/data/nav";

export function MegaMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
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
    <div className="absolute left-0 right-0 top-full z-50 border-t border-borderGold/40 bg-surface shadow-soft">
      <div className="container grid gap-8 py-8 md:grid-cols-2 xl:grid-cols-3">
        {megaMenu.map((category, columnIndex) => (
          <div key={category.title} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">{category.title}</p>
            <div className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <Link
                  key={item.label}
                  href={item.href}
                  ref={columnIndex === 0 && itemIndex === 0 ? firstLinkRef : undefined}
                  className="block rounded-xl border border-borderGold/20 px-4 py-3 transition-colors hover:border-gold hover:text-gold"
                >
                  <div className="text-sm font-semibold">{item.label}</div>
                  <div className="text-xs text-muted">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
