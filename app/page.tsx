import Link from "next/link";

import { ChefSection } from "@/components/chef-section";
import { EventsSection } from "@/components/events-section";
import { ExperienceSection } from "@/components/experience-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { Hero } from "@/components/hero";
import { InstagramFeed } from "@/components/instagram-feed";
import { LuxuryDivider } from "@/components/luxury-divider";
import { PrivateDiningSection } from "@/components/private-dining-section";
import { Section } from "@/components/section";
import { SignatureDishes } from "@/components/signature-dishes";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Haven Dine | Luxury Fine Dining Restaurant",
  description:
    "Experience luxury fine dining at Haven Dine restaurant in Tacloban City with signature dishes, elegant interiors, and seamless reservations.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignatureDishes />
      <LuxuryDivider />
      <ExperienceSection />
      <LuxuryDivider />
      <ChefSection />
      <LuxuryDivider />
      <Testimonials />
      <LuxuryDivider />
      <PrivateDiningSection />
      <LuxuryDivider />
      <Section
        eyebrow="Gallery Preview"
        title="The room, the plating, and the moments in between."
        description="Haven Dine is built to feel immersive. Warm light, tailored surfaces, composed plates, and a pace that lets every evening unfold beautifully."
      >
        <GalleryGrid preview />
        <div>
          <Link href="/gallery">
            <Button variant="outline" size="lg">
              Explore Full Gallery
            </Button>
          </Link>
        </div>
      </Section>
      <LuxuryDivider />
      <InstagramFeed />
      <LuxuryDivider />
      <EventsSection />
      <section className="pb-24 pt-4 md:pb-28">
        <div className="shell">
          <div className="soft-card overflow-hidden p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-5">
                <p className="gold-label">Reservations</p>
                <h2 className="section-title">
                  Reserve your table for a refined evening at Haven Dine.
                </h2>
                <p className="max-w-2xl text-lg">
                  Join us for intimate dinners, special celebrations, tasting menus, and
                  polished hospitality in the heart of Tacloban City.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <Link href="/reservations">
                  <Button size="lg">Reserve a Table</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact the Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
