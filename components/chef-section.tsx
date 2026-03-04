import Image from "next/image";

import { Section } from "@/components/section";

const chefImage =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80";

export function ChefSection() {
  return (
    <Section
      eyebrow="Chef Highlight"
      title="Crafted by Chef Adriana Vale with passion for culinary excellence."
      description="Her philosophy is simple: precise technique, emotionally resonant flavor, and service that makes every guest feel beautifully cared for."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#6a5535]/40">
          <Image src={chefImage} alt="Chef Adriana Vale plating a signature course" fill className="object-cover" />
        </div>
        <div className="soft-card p-8 md:p-10">
          <p className="gold-label">Chef Story</p>
          <h3 className="mt-4 text-4xl text-white">A calm, exacting culinary voice.</h3>
          <p className="mt-5">
            Chef Adriana trained across contemporary European kitchens before returning to
            the Philippines to shape a dining room defined by grace, texture, and warm
            hospitality. Her menus balance global discipline with seasonal local produce.
          </p>
          <p className="mt-4">
            Each course is designed to unfold gradually, inviting guests into a slower and
            more intimate rhythm of dining. The result is a meal that feels composed,
            cinematic, and unmistakably personal.
          </p>
        </div>
      </div>
    </Section>
  );
}
