"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormValues } from "@/lib/validators";
import { services } from "@/data/services";
import { Button } from "@/components/Buttons";
import { fbTrackLead } from "@/components/FacebookPixel";

const genres = [
  "Fiction",
  "Nonfiction",
  "Business",
  "Fantasy",
  "Romance",
  "Thriller",
  "Self-Help",
  "Other"
];

const budgets = ["$199-$499", "$499-$999", "$999-$1,999", "$2,000+", "Not sure yet"];

const timelines = ["ASAP", "1-2 months", "3-4 months", "5+ months"];

export function QuoteForm({ embedded }: { embedded?: boolean }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      type: "quote",
      name: "",
      email: "",
      phone_number: "",
      genre: "",
      service_interest: "",
      budget_range: "",
      timeline: "",
      message: ""
    }
  });

  const onSubmit = async (values: QuoteFormValues) => {
    setIsSubmitting(true);
    setStatus("idle");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      fbTrackLead(); // Track Facebook lead conversion
      reset();
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full rounded-lg border-2 border-[#E5E5E5] bg-[#FAF9F7] px-4 py-3 text-sm text-[#0B0B0B] placeholder-[#9CA3AF] focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 transition-all";
  const labelClasses = "text-sm font-medium text-[#2E2E2E]";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`grid gap-5 ${embedded ? "" : "max-w-2xl"}`}
    >
      <input type="hidden" value="quote" {...register("type")} />
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelClasses}>Name <span className="text-red-500">*</span></label>
          <input
            {...register("name")}
            className={inputClasses}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className={labelClasses}>Email <span className="text-red-500">*</span></label>
          <input
            {...register("email")}
            type="email"
            className={inputClasses}
            placeholder="you@email.com"
          />
          {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelClasses}>Phone number <span className="text-red-500">*</span></label>
          <input
            {...register("phone_number")}
            type="tel"
            className={inputClasses}
            placeholder="e.g. +1 289 809 7930"
          />
          {errors.phone_number && (
            <p className="text-xs text-red-500 font-medium">{errors.phone_number.message}</p>
          )}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <div className="space-y-2">
          <label className={labelClasses}>Genre</label>
          <select
            {...register("genre")}
            className={inputClasses}
          >
            <option value="">Select genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          {errors.genre && <p className="text-xs text-red-500 font-medium">{errors.genre.message}</p>}
        </div>
        <div className="space-y-2">
          <label className={labelClasses}>Service interest</label>
          <select
            {...register("service_interest")}
            className={inputClasses}
          >
            <option value="">Select service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.service_interest && (
            <p className="text-xs text-red-500 font-medium">{errors.service_interest.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className={labelClasses}>Budget range</label>
          <select
            {...register("budget_range")}
            className={inputClasses}
          >
            <option value="">Select budget</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
          {errors.budget_range && (
            <p className="text-xs text-red-500 font-medium">{errors.budget_range.message}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <label className={labelClasses}>Timeline</label>
        <select
          {...register("timeline")}
          className={inputClasses}
        >
          <option value="">Select timeline</option>
          {timelines.map((timeline) => (
            <option key={timeline} value={timeline}>
              {timeline}
            </option>
          ))}
        </select>
        {errors.timeline && <p className="text-xs text-red-500 font-medium">{errors.timeline.message}</p>}
      </div>
      <div className="space-y-2">
        <label className={labelClasses}>Project details</label>
        <textarea
          {...register("message")}
          rows={4}
          className={inputClasses}
          placeholder="Share your goals, word count, and any deadlines."
        />
        {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-4 mt-2">
        <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
          {isSubmitting ? "Submitting..." : "Get My Free Quote →"}
        </Button>
        {status === "success" && (
          <p className="text-sm text-green-600 font-medium">✓ Thanks! We will be in touch within 24 hours.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500 font-medium">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  );
}
