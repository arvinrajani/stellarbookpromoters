import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: "Luxury publishing and marketing agency for authors who want standout launches.",
  path: "/"
});

export default function Page() {
  return <HomePage />;
}