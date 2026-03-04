import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { signatureDishes } from "@/data/signatureDishes";

export function SignatureDishes() {
  return (
    <Section
      eyebrow="Signature Dishes"
      title="A menu composed with precision, warmth, and modern elegance."
      description="From indulgent seafood to impeccably balanced mains, every plate at Haven Dine is created to feel elevated yet deeply inviting."
    >
      <div className="grid gap-6 lg:grid-cols-4">
        {signatureDishes.map((dish) => (
          <article
            key={dish.name}
            className="group overflow-hidden rounded-[2rem] border border-[#6a5535]/40 bg-[#15100d]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090705] via-transparent to-transparent" />
            </div>
            <div className="space-y-4 p-6">
              <p className="gold-label">Signature</p>
              <div>
                <h3 className="text-3xl text-white">{dish.name}</h3>
                <p className="mt-3">{dish.description}</p>
              </div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#e6cf9d]">
                {dish.price}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div>
        <Link href="/menu">
          <Button variant="outline" size="lg">
            Explore Full Menu
          </Button>
        </Link>
      </div>
    </Section>
  );
}
