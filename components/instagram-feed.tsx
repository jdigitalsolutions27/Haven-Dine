import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { instagramImages } from "@/lib/constants";

export function InstagramFeed() {
  return (
    <Section
      eyebrow="Instagram"
      title="A glimpse into the mood, texture, and atmosphere of Haven Dine."
      description="Shareable moments are never forced here. They emerge naturally from the setting, the plating, and the way every table feels thoughtfully dressed."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {instagramImages.map((image) => (
          <div
            key={`${image.src}-${image.category}`}
            className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-[#6a5535]/40"
          >
            <Image src={image.src} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
      <div>
        <Link href="/gallery">
          <Button variant="outline" size="lg">
            View Gallery
          </Button>
        </Link>
      </div>
    </Section>
  );
}
