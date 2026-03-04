import Image from "next/image";

import { InquiryForm } from "@/components/inquiry-form";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/seo";

const privateDiningImages = [
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?auto=format&fit=crop&w=1400&q=80"
];

export const metadata = createMetadata({
  title: "Private Dining",
  description:
    "Discover private dining at Haven Dine in Tacloban City for birthdays, anniversaries, and corporate dinners with bespoke menus and luxury service.",
  path: "/private-dining"
});

export default function PrivateDiningPage() {
  return (
    <>
      <PageHeader
        eyebrow="Private Dining"
        title="For celebrations that deserve polish and intimacy."
        description="Host birthdays, anniversaries, and corporate dinners at Haven Dine with tailored menus, elegant styling, and attentive service."
      />
      <section className="py-16 md:py-24">
        <div className="shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="soft-card p-8 md:p-10">
              <p className="gold-label">What We Offer</p>
              <h2 className="mt-4 text-4xl text-white md:text-5xl">
                Tailored private dining for meaningful occasions.
              </h2>
              <p className="mt-4">
                Choose Haven Dine for elegant birthdays, intimate anniversaries, discreet
                corporate dinners, proposal nights, and elevated social gatherings. Our team
                can coordinate custom menus, florals, premium pairings, and service flow.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {["Birthdays", "Corporate Dinners", "Anniversaries"].map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm uppercase tracking-[0.22em] text-[#e6cf9d]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {privateDiningImages.map((image) => (
                <div
                  key={image}
                  className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-[#6a5535]/40"
                >
                  <Image src={image} alt="Private dining at Haven Dine" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
