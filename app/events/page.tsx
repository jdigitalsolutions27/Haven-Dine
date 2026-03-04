import { EventsSection } from "@/components/events-section";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Events",
  description:
    "Explore Haven Dine events in Tacloban City including wine tasting nights, chef's table dinners, and live music fine dining evenings.",
  path: "/events"
});

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Special evenings worth dressing for."
        description="Explore curated wine tasting nights, chef special evenings, and live music dinners at Haven Dine restaurant in Tacloban City."
      />
      <EventsSection standalone />
    </>
  );
}
