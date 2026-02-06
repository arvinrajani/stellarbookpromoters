import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "Meet Stellar Book Promoters, a luxury publishing and marketing agency for modern authors.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div>
      <Section className="pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">About Stellar</p>
            <h1 className="text-4xl font-semibold md:text-5xl">A premium agency built for ambitious authors</h1>
            <p className="text-muted">
              Stellar Book Promoters combines editorial intelligence, high-end design, and marketing strategy
              to help authors publish with authority. We focus on clarity, craftsmanship, and momentum.
            </p>
            <p className="text-muted">
              Our team is built around senior specialists who understand the nuances of publishing. Every
              engagement is tailored to your goals, timeline, and audience.
            </p>
          </div>
          <div className="card overflow-hidden">
            <Image src="/images/about-studio.svg" alt="Stellar team" width={520} height={420} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Luxury Craft",
              description: "We treat every manuscript like a premium product with refined editorial care."
            },
            {
              title: "Strategic Visibility",
              description: "Marketing plans are built on reader behavior and lasting discoverability."
            },
            {
              title: "Author-First",
              description: "Clear communication, transparent timelines, and no guesswork."
            }
          ].map((value) => (
            <div key={value.title} className="card p-6">
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <CTASection
          title="Ready to build a premium publishing experience?"
          description="Let us craft a bespoke plan for your manuscript and launch goals."
        />
      </Section>
    </div>
  );
}
