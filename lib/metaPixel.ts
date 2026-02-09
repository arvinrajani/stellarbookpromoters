"use client";

type FbqParams = Record<string, unknown>;

export const fbqTrack = (event: string, params?: FbqParams) => {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }
  window.fbq("track", event, params);
};

export const fbqTrackCustom = (event: string, params?: FbqParams) => {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }
  window.fbq("trackCustom", event, params);
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}
