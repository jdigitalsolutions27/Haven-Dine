import Image from "next/image";

import { Section } from "@/components/section";
import { events } from "@/data/events";

type EventsSectionProps = {
  standalone?: boolean;
};

export function EventsSection({ standalone = false }: EventsSectionProps) {
  return (
    <Section
      eyebrow="Events"
      title="Curated evenings that bring an added sense of occasion to the dining room."
      description="From sommelier-led wine experiences to chef-led tasting nights, our event calendar is created for guests who enjoy dining as an experience."
      className={standalone ? "pt-12" : undefined}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {events.map((event) => (
          <article
            key={event.title}
            className="overflow-hidden rounded-[2rem] border border-[#6a5535]/40 bg-[#15100d]"
          >
            <div className="relative aspect-[4/3]">
              <Image src={event.image} alt={event.title} fill className="object-cover" />
            </div>
            <div className="space-y-4 p-6">
              <p className="gold-label">{event.date}</p>
              <h3 className="text-3xl text-white">{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
