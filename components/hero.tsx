"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { heroImage } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(7,5,4,0.45) 0%, rgba(7,5,4,0.72) 58%, rgba(7,5,4,0.96) 100%), url(${heroImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,185,138,0.2),transparent_28%)]" />
      <div className="shell relative z-10 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-3xl space-y-8"
        >
          <p className="gold-label">Luxury Fine Dining • Tacloban City</p>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-6xl leading-none text-white sm:text-7xl lg:text-[6.5rem]">
              Where Culinary Art Meets Comfort
            </h1>
            <p className="max-w-xl text-lg text-[#e6dccb] md:text-xl">
              A refined dining experience crafted for unforgettable moments.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/reservations">
              <Button size="lg">Reserve a Table</Button>
            </Link>
            <Link href="/menu">
              <Button variant="outline" size="lg">
                View Menu
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
