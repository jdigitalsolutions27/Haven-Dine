import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

const privateDiningImage =
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=80";

export function PrivateDiningSection() {
  return (
    <Section
      eyebrow="Private Dining"
      title="Host birthdays, anniversaries, and executive dinners in a setting that feels discreet and extraordinary."
      description="Our private dining experiences blend bespoke menus, elegant styling, and attentive service for occasions that require polish and warmth."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#6a5535]/40">
          <Image
            src={privateDiningImage}
            alt="Private dining setup at Haven Dine"
            fill
            className="object-cover"
          />
        </div>
        <div className="soft-card flex flex-col justify-center p-8 md:p-10">
          <p className="gold-label">Tailored Gatherings</p>
          <h3 className="mt-4 text-4xl text-white">
            Designed for milestones and meaningful hosting.
          </h3>
          <p className="mt-5">
            Whether you are celebrating an anniversary, presenting to clients, or gathering
            family for a once-in-a-year birthday, our team can craft a private dining
            experience that feels deeply personal and impeccably delivered.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/private-dining">
              <Button size="lg">Plan Your Event</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Speak With Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
