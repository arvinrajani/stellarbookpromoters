import Image from "next/image";
import { QuoteForm } from "@/components/QuoteForm";

export function LeadCaptureSection({
  title = "Get a tailored publishing quote",
  description = "Tell us about your manuscript and we will craft a custom roadmap and pricing range.",
  minimal = false
}: {
  title?: string;
  description?: string;
  minimal?: boolean;
}) {
  if (minimal) {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#0B0B0B]">{title}</h3>
          <p className="text-[#4A4A4A]">{description}</p>
        </div>
        <QuoteForm embedded />
      </div>
    );
  }

  return (
    <div className="card grid gap-8 p-8 lg:grid-cols-[1fr_1.2fr]">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">Get Started</p>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-muted">{description}</p>
        <Image
          src="/images/about-studio.svg"
          alt="Publishing studio"
          width={520}
          height={320}
          className="w-full rounded-xl border border-borderGold/30 object-cover"
        />
      </div>
      <QuoteForm embedded />
    </div>
  );
}
