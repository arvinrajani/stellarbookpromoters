import { z } from "zod";

export const quoteSchema = z.object({
  type: z.literal("quote"),
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone_number: z.string().min(7, "Enter a valid phone number"),
  genre: z.string().min(1, "Select a genre"),
  service_interest: z.string().min(1, "Select a service"),
  budget_range: z.string().min(1, "Select a budget"),
  timeline: z.string().min(1, "Select a timeline"),
  message: z.string().min(20, "Tell us a bit more about your project")
});

export const contactSchema = z.object({
  type: z.literal("contact"),
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Add a short message")
});

export const leadSchema = z.discriminatedUnion("type", [quoteSchema, contactSchema]);

export type QuoteFormValues = z.infer<typeof quoteSchema>;
export type ContactFormValues = z.infer<typeof contactSchema>;
