import { PageHeader } from "@/components/page-header";
import { ReservationForm } from "@/components/reservation-form";
import { faqs } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Reservations",
  description:
    "Reserve a table at Haven Dine restaurant in Tacloban City for romantic dinners, celebrations, and refined dining experiences.",
  path: "/reservations"
});

export default function ReservationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reservations"
        title="Plan a memorable evening."
        description="Reserve your preferred table and let our team tailor the details for dinner, celebration, or a beautifully paced night out in Tacloban City."
      />
      <section className="py-16 md:py-24">
        <div className="shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ReservationForm />
          <div className="space-y-6">
            <div className="soft-card p-8 md:p-10">
              <p className="gold-label">Reservation Notes</p>
              <h2 className="mt-4 text-4xl text-white">What to expect</h2>
              <p className="mt-4">
                Haven Dine welcomes guests into a calm, elegant dining room with intentional
                pacing, refined service, and premium culinary detail. For special occasions,
                please note your request and our team will coordinate the experience.
              </p>
            </div>
            {faqs.map((faq) => (
              <div key={faq.question} className="soft-card p-8">
                <h3 className="text-3xl text-white">{faq.question}</h3>
                <p className="mt-4">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
