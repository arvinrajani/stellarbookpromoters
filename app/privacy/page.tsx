import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Stellar Book Promoters.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <div>
      <Section className="pt-28">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold md:text-5xl">Privacy Policy</h1>
          <p className="text-muted">
            We respect your privacy. This policy explains how Stellar Book Promoters collects, uses, and
            protects your information.
          </p>
          <div className="space-y-3 text-sm text-muted">
            <p>We collect information you submit through our forms, including name, email, and project details.</p>
            <p>We use your information to respond to inquiries, prepare proposals, and improve our services.</p>
            <p>We do not sell personal data. We only share details with trusted partners required for service delivery.</p>
            <p>You may request access or deletion of your information by contacting info@stellarbookpromoter.com.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
