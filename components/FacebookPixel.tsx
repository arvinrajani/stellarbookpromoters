"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Facebook Pixel Route Tracker
 * Automatically tracks page views when navigating between pages
 */
export function FacebookPixelRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page views on route change
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}

// Helper functions to track custom events
export const fbPageView = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "PageView");
  }
};

export const fbEvent = (name: string, options: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", name, options);
  }
};

// Predefined conversion events
export const fbTrackLead = (value?: number) => {
  fbEvent("Lead", value ? { value, currency: "USD" } : {});
};

export const fbTrackContact = () => {
  fbEvent("Contact");
};

export const fbTrackSubmitApplication = () => {
  fbEvent("SubmitApplication");
};

export const fbTrackInitiateCheckout = (value?: number) => {
  fbEvent("InitiateCheckout", value ? { value, currency: "USD" } : {});
};

// TypeScript declarations
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}
