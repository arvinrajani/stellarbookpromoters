import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { createMetadata } from "@/lib/seo";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = createMetadata({
  title: "Our Team",
  description: "Meet the expert editors, marketers, and designers behind Stellar Book Promoters.",
  path: "/authors"
});

export default function AuthorsPage() {
  return (
    <div>
      <Section className="pt-28">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Our Team</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Expert Specialists Behind Your Success</h1>
          <p className="max-w-2xl text-muted">
            Our team combines decades of editorial expertise, design excellence, and proven marketing strategy. Every project is supported by senior publishing professionals.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="card flex h-full flex-col gap-4 p-6">
              <Image
                src="/images/author-placeholder.svg"
                alt={member.name}
                width={360}
                height={240}
                className="h-48 w-full rounded-xl object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gold">{member.role}</p>
              </div>
              <p className="text-sm text-muted">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <CTASection
          title="Want to collaborate with our specialists?"
          description="Tell us about your project and we will match you with the right experts."
        />
      </Section>
    </div>
  );
}
