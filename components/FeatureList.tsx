import { CheckCircle2 } from "lucide-react";
import type { ServiceFeature } from "@/data/services";

export function FeatureList({ features }: { features: ServiceFeature[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {features.map((feature) => (
        <div key={feature.title} className="card p-6">
          <div className="mb-4 flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-gold" />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
          </div>
          <p className="text-sm text-muted">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
