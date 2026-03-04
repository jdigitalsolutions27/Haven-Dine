"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  eventType: z.string().min(2, "Please specify an event type."),
  message: z.string().min(10, "Please share a few details about your event.")
});

type InquiryValues = z.infer<typeof inquirySchema>;

export function InquiryForm() {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: ""
    }
  });

  const onSubmit = async (values: InquiryValues) => {
    setMessage("");

    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    const payload = (await response.json()) as { message?: string };

    if (!response.ok) {
      throw new Error(payload.message || "Inquiry submission failed.");
    }

    setMessage(
      payload.message ||
        "Your inquiry has been received. Our team will be in touch shortly."
    );
    reset();
  };

  return (
    <div className="soft-card p-8 md:p-10">
      <div className="mb-8 space-y-4">
        <p className="gold-label">Event Inquiry</p>
        <h2 className="text-4xl text-white md:text-5xl">Share your occasion.</h2>
        <p>
          Tell us about your celebration or hosting needs and our team will tailor a premium
          private dining proposal.
        </p>
      </div>
      <form
        className="grid gap-5 md:grid-cols-2"
        onSubmit={handleSubmit(async (values) => {
          try {
            await onSubmit(values);
          } catch (error) {
            setMessage(
              error instanceof Error ? error.message : "Inquiry submission failed."
            );
          }
        })}
      >
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-[0.2em] text-[#d6b98a]">Name</label>
          <Input placeholder="Your name" {...register("name")} />
          {errors.name ? <p className="text-sm text-rose-300">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-[0.2em] text-[#d6b98a]">Email</label>
          <Input type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email ? <p className="text-sm text-rose-300">{errors.email.message}</p> : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-[0.2em] text-[#d6b98a]">Phone</label>
          <Input placeholder="+63 9xx xxx xxxx" {...register("phone")} />
          {errors.phone ? <p className="text-sm text-rose-300">{errors.phone.message}</p> : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-[0.2em] text-[#d6b98a]">
            Event Type
          </label>
          <Input placeholder="Birthday, corporate dinner, anniversary..." {...register("eventType")} />
          {errors.eventType ? (
            <p className="text-sm text-rose-300">{errors.eventType.message}</p>
          ) : null}
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm uppercase tracking-[0.2em] text-[#d6b98a]">Message</label>
          <Textarea
            placeholder="Guest count, preferred date, style of event, or anything else you'd like our team to know."
            {...register("message")}
          />
          {errors.message ? <p className="text-sm text-rose-300">{errors.message.message}</p> : null}
        </div>
        <div className="md:col-span-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
          </Button>
          {message ? <p className="max-w-lg text-sm text-[#ead8b2]">{message}</p> : null}
        </div>
      </form>
    </div>
  );
}
