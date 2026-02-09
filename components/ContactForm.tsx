"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/validators";
import { Button } from "@/components/Buttons";
import { fbTrackContact } from "@/components/FacebookPixel";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      type: "contact",
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (values: ContactFormValues) => {
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
      fbTrackContact(); // Track Facebook conversion
      reset();
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <input type="hidden" value="contact" {...register("type")} />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm text-muted">Name</label>
          <input
            {...register("name")}
            className="w-full rounded-xl border border-borderGold/40 bg-bg px-4 py-3 text-sm text-text"
            placeholder="Your name"
          />
          {errors.name && <p className="text-xs text-gold">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm text-muted">Email</label>
          <input
            {...register("email")}
            type="email"
            className="w-full rounded-xl border border-borderGold/40 bg-bg px-4 py-3 text-sm text-text"
            placeholder="you@email.com"
          />
          {errors.email && <p className="text-xs text-gold">{errors.email.message}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm text-muted">Message</label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full rounded-xl border border-borderGold/40 bg-bg px-4 py-3 text-sm text-text"
          placeholder="Tell us about your project or question."
        />
        {errors.message && <p className="text-xs text-gold">{errors.message.message}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
        {status === "success" && (
          <p className="text-sm text-gold">✓ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  );
}
