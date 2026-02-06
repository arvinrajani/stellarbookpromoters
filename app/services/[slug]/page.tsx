import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { FeatureList } from "@/components/FeatureList";
import { Timeline } from "@/components/Timeline";
import { CTASection } from "@/components/CTASection";
import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { ServiceHero } from "@/components/ServiceHero";
import { services, getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const TestimonialsCarousel = dynamic(
  () => import("@/components/TestimonialsCarousel").then((mod) => mod.TestimonialsCarousel),
  { loading: () => <div className="card p-8">Loading testimonials...</div> }
);

const FAQAccordion = dynamic(
  () => import("@/components/FAQAccordion").then((mod) => mod.FAQAccordion),
  { loading: () => <div className="card p-8">Loading FAQs...</div> }
);

const serviceSteps = [
  {
    title: "Discovery",
    description: "We review your goals, timeline, and assets to confirm the right scope."
  },
  {
    title: "Craft",
    description: "Specialists execute each deliverable with clear milestones and updates."
  },
  {
    title: "Review",
    description: "We refine drafts with your feedback and finalize every detail."
  },
  {
    title: "Launch",
    description: "Final files and guidance ensure a smooth, confident rollout."
  }
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return createMetadata({
      title: "Service",
      description: "Premium publishing service by Stellar Book Promoters.",
      path: `/services/${params.slug}`
    });
  }
  return createMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    notFound();
  }

  return (
    <div>
      <Section className="pt-28">
        <ServiceHero title={service.heroHeadline} subtext={service.heroSubtext} category={service.category} />
      </Section>

      <Section>
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">What you get</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Signature outcomes for {service.title}</h2>
          </div>
          <FeatureList features={service.features} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Deliverables</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Everything included</h2>
            <p className="text-muted">
              Clear, tangible outputs so you know exactly what you receive at every stage.
            </p>
            <ul className="space-y-3 text-sm text-muted">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">How it works</p>
            <h3 className="mt-3 text-2xl font-semibold">A guided timeline</h3>
            <p className="mt-2 text-sm text-muted">
              We keep momentum with clear checkpoints and senior specialist oversight.
            </p>
            <div className="mt-6">
              <Timeline steps={serviceSteps} compact />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Testimonials</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Sample results from similar projects</h2>
            <p className="text-muted">
              These sample testimonials highlight the clarity, polish, and confidence authors experience.
            </p>
            <CTASection
              title="Ready to add this service to your launch plan?"
              description="Share your goals and we will recommend the next best step."
            />
          </div>
          <TestimonialsCarousel />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">FAQs</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Questions about {service.title}</h2>
            <p className="text-muted">
              We are happy to customize any scope. These answers cover the essentials.
            </p>
          </div>
          <FAQAccordion items={service.faqs} />
        </div>
      </Section>

      <Section>
        <LeadCaptureSection
          title={`Ready for a custom ${service.title} quote?`}
          description="Tell us about your manuscript and timeline and we will prepare the right scope."
        />
      </Section>
    </div>
  );
}
