"use client";

import { useEffect } from "react";

export function MetaPixelPageView() {
  useEffect(() => {
    // Only track PageView once when component mounts
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, []); // Empty deps = runs once on mount

  return null;
}
