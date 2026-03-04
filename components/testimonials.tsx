"use client";

import { motion } from "framer-motion";

import { ReviewStars } from "@/components/review-stars";
import { Section } from "@/components/section";
import { reviews } from "@/data/reviews";

export function Testimonials() {
  return (
    <Section
      eyebrow="Testimonials"
      title="Guests remember the feeling as much as the food."
      description="Exceptional dining lives in the details: service cadence, atmosphere, conversation, and how the meal lingers after the final course."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {reviews.map((review, index) => (
          <motion.article
            key={review.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="soft-card p-8"
          >
            <ReviewStars />
            <p className="mt-6 font-display text-3xl leading-snug text-white">
              “{review.quote}”
            </p>
            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#f1dfbc]">
                {review.name}
              </p>
              <p className="text-sm text-[#bfa986]">{review.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
