import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import ServicesClient from "@/app/services/ServicesClient";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description: "Premium editorial, publishing, and marketing services for standout authors.",
  path: "/services"
});

export default function ServicesPage() {
  return <ServicesClient />;
}
