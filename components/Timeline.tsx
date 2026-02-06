import { cn } from "@/lib/utils";

export type TimelineStep = {
  title: string;
  description: string;
};

export function Timeline({
  steps,
  compact
}: {
  steps: TimelineStep[];
  compact?: boolean;
}) {
  return (
    <div className={cn("space-y-6", compact ? "max-w-3xl" : "")}>
      {steps.map((step, index) => (
        <div key={step.title} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-sm text-gold">
              {index + 1}
            </div>
            {index !== steps.length - 1 && (
              <div className="mt-2 h-full w-px bg-borderGold" />
            )}
          </div>
          <div className="pb-6">
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-muted">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
