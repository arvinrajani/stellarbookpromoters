import { cn } from "@/lib/utils";

export type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("section", className)}>
      {children}
    </section>
  );
}
