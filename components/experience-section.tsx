import Image from "next/image";
import { Sparkles, Wine } from "lucide-react";

import { Section } from "@/components/section";

const ambienceImages = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
];

export function ExperienceSection() {
  return (
    <Section
      eyebrow="Dining Experience"
      title="An atmosphere designed to feel intimate, cinematic, and quietly unforgettable."
      description="From the glow of candlelight to the measured pace of service, every detail at Haven Dine is tuned to elevate the evening."
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="soft-card p-8">
            <Sparkles className="h-8 w-8 text-[#d6b98a]" />
            <h3 className="mt-5 text-3xl text-white">Refined hospitality</h3>
            <p className="mt-4">
              Our team orchestrates the evening with polished precision, ensuring every
              recommendation, pour, and course arrives with ease and intention.
            </p>
          </div>
          <div className="soft-card p-8">
            <Wine className="h-8 w-8 text-[#d6b98a]" />
            <h3 className="mt-5 text-3xl text-white">Curated pairings</h3>
            <p className="mt-4">
              Thoughtful wine and cocktail pairings bring added depth to the menu while
              preserving the calm, elegant rhythm of dinner service.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {ambienceImages.map((image, index) => (
            <div
              key={image}
              className={`relative min-h-[320px] overflow-hidden rounded-[2rem] border border-[#6a5535]/40 ${
                index === 1 ? "md:mt-16" : ""
              }`}
            >
              <Image
                src={image}
                alt="Haven Dine interior ambiance"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
