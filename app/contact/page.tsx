import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Start your publishing project with Stellar Book Promoters.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div>
      <Section className="pt-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Contact</p>
            <h1 className="text-4xl font-semibold md:text-5xl">Start your publishing journey</h1>
            <p className="text-muted">
              Tell us about your manuscript, goals, and timeline. We respond within 24 business hours.
            </p>
            <div className="card space-y-3 p-6 text-sm text-muted">
              <div>
                <span className="text-gold">Email:</span> info@stellarbookpromoter.com
              </div>
              <div>
                <span className="text-gold">Office:</span> Remote-first studio serving authors worldwide
              </div>
              <div>
                <span className="text-gold">Response time:</span> 1 business day
              </div>
            </div>
          </div>
          <div className="card p-6">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section id="book-call">
        <div className="card p-8">
          <h2 className="text-3xl font-semibold">Book a strategy call</h2>
          <p className="mt-2 text-muted">
            Prefer a live conversation? Use the contact form above and mention your preferred call times.
          </p>
        </div>
      </Section>
    </div>
  );
}
