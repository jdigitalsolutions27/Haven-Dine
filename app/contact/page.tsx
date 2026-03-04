import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import { InquiryForm } from "@/components/inquiry-form";
import { MapBlock } from "@/components/map-block";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { contactDetails } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Haven Dine restaurant in Tacloban City for reservations, private dining inquiries, opening hours, and directions.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Plan your visit with ease."
        description="Reach Haven Dine for reservations, special requests, private dining inquiries, and directions to our luxury restaurant in Tacloban City."
      />
      <section className="py-16 md:py-24">
        <div className="shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="soft-card p-8 md:p-10">
              <p className="gold-label">Visit Us</p>
              <div className="mt-6 grid gap-5 text-[#e6dccb]">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-[#d6b98a]" />
                  <div>
                    <h2 className="text-2xl text-white">Address</h2>
                    <p>{contactDetails.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 text-[#d6b98a]" />
                  <div>
                    <h2 className="text-2xl text-white">Phone</h2>
                    <p>{contactDetails.phone}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 text-[#d6b98a]" />
                  <div>
                    <h2 className="text-2xl text-white">Email</h2>
                    <p>{contactDetails.email}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock3 className="mt-1 h-5 w-5 text-[#d6b98a]" />
                  <div>
                    <h2 className="text-2xl text-white">Opening Hours</h2>
                    {contactDetails.openingHours.map((hours) => (
                      <p key={hours}>{hours}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={contactDetails.phoneHref}>
                  <Button size="lg">Call Now</Button>
                </a>
                <a href={contactDetails.mapHref} target="_blank" rel="noreferrer">
                  <Button variant="outline" size="lg">
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
            <MapBlock />
          </div>
          <InquiryForm />
        </div>
      </section>
      <section className="pb-24">
        <div className="shell soft-card p-8 md:p-10">
          <p className="gold-label">Reservations</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl text-white md:text-5xl">
                Prefer to secure your table directly?
              </h2>
              <p className="mt-4">
                For dinner reservations, tasting menu availability, and celebration requests,
                visit our reservation page for a faster response.
              </p>
            </div>
            <Link href="/reservations">
              <Button variant="outline" size="lg">
                Reserve a Table
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
