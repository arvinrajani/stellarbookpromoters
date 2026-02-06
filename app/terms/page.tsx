import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: "Terms of service for Stellar Book Promoters.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <div>
      <Section className="pt-28">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold md:text-5xl">Terms of Service</h1>
          <p className="text-muted">
            By engaging Stellar Book Promoters, you agree to the following basic terms and conditions.
          </p>
          <div className="space-y-3 text-sm text-muted">
            <p>Project timelines and pricing are confirmed in a written proposal before work begins.</p>
            <p>Authors retain full rights to their manuscripts and final deliverables.</p>
            <p>Payments are due based on the schedule outlined in your agreement.</p>
            <p>Revisions are scoped to the deliverables listed in the statement of work.</p>
            <p>For questions about these terms, contact info@stellarbookpromoter.com.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
