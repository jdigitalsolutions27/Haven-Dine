"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, Clock3, Users } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const reservationSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  date: z.string().min(1, "Please choose a date."),
  time: z.string().min(1, "Please choose a time."),
  guests: z.string().min(1, "Please select number of guests."),
  specialRequests: z.string().optional()
});

type ReservationValues = z.infer<typeof reservationSchema>;

export function ReservationForm() {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ReservationValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      guests: "",
      specialRequests: ""
    }
  });

  const onSubmit = async (values: ReservationValues) => {
    setMessage("");
    const response = await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    const payload = (await response.json()) as { message?: string };

    if (!response.ok) {
      throw new Error(payload.message || "Reservation request failed.");
    }

    setMessage(
      payload.message ||
        "Your table request has been received. Our team will confirm shortly."
    );
    reset();
  };

  return (
    <div className="soft-card p-8 md:p-10">
      <div className="mb-8 space-y-4">
        <p className="gold-label">Reserve a Table</p>
        <h2 className="text-4xl text-white md:text-5xl">Request your preferred evening.</h2>
        <p>
          Share your preferred date, time, and guest details. Our reservations team will
          confirm availability shortly.
        </p>
      </div>
      <form
        className="grid gap-5 md:grid-cols-2"
        onSubmit={handleSubmit(async (values) => {
          try {
            await onSubmit(values);
          } catch (error) {
            setMessage(
              error instanceof Error ? error.message : "Reservation request failed."
            );
          }
        })}
      >
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-[0.2em] text-[#d6b98a]">Name</label>
          <Input placeholder="Your full name" {...register("name")} />
          {errors.name ? <p className="text-sm text-rose-300">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-[0.2em] text-[#d6b98a]">Phone</label>
          <Input placeholder="+63 9xx xxx xxxx" {...register("phone")} />
          {errors.phone ? <p className="text-sm text-rose-300">{errors.phone.message}</p> : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-[0.2em] text-[#d6b98a]">Email</label>
          <Input type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email ? <p className="text-sm text-rose-300">{errors.email.message}</p> : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-[0.2em] text-[#d6b98a]">Date</label>
          <div className="relative">
            <Input type="date" {...register("date")} className="pr-12" />
            <CalendarDays className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d6b98a]" />
          </div>
          {errors.date ? <p className="text-sm text-rose-300">{errors.date.message}</p> : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-[0.2em] text-[#d6b98a]">Time</label>
          <div className="relative">
            <Input type="time" {...register("time")} className="pr-12" />
            <Clock3 className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d6b98a]" />
          </div>
          {errors.time ? <p className="text-sm text-rose-300">{errors.time.message}</p> : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-[0.2em] text-[#d6b98a]">
            Number of Guests
          </label>
          <div className="relative">
            <select
              {...register("guests")}
              className="flex h-12 w-full appearance-none rounded-2xl border border-[#64533a] bg-[#120f0d]/80 px-4 py-3 text-sm text-[#f7efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b98a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120f0d]"
            >
              <option value="">Select guests</option>
              {["2 Guests", "4 Guests", "6 Guests", "8 Guests", "10+ Guests"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <Users className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d6b98a]" />
          </div>
          {errors.guests ? <p className="text-sm text-rose-300">{errors.guests.message}</p> : null}
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm uppercase tracking-[0.2em] text-[#d6b98a]">
            Special Requests
          </label>
          <Textarea
            placeholder="Occasion, dietary notes, seating preferences, or special touches."
            {...register("specialRequests")}
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Sending Request..." : "Submit Reservation"}
          </Button>
          {message ? <p className="max-w-lg text-sm text-[#ead8b2]">{message}</p> : null}
        </div>
      </form>
    </div>
  );
}
