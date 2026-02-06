import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Buttons";

export default function NotFound() {
  return (
    <Section className="pt-28">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">404</p>
        <h1 className="text-4xl font-semibold md:text-5xl">Page not found</h1>
        <p className="text-muted">The page you are looking for does not exist or has moved.</p>
        <ButtonLink href="/">Return home</ButtonLink>
      </div>
    </Section>
  );
}
