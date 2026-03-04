import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { contactDetails, navigationLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0e0b09] pb-28 pt-16 md:pb-12">
      <div className="shell grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-5">
          <BrandMark />
          <h2 className="max-w-md text-4xl text-white md:text-5xl">
            Luxury fine dining in Tacloban City, designed for unforgettable evenings.
          </h2>
          <p className="max-w-xl">
            Elegant tasting menus, private dining occasions, curated events, and service
            built around precision and comfort.
          </p>
        </div>

        <div className="space-y-4">
          <p className="gold-label">Explore</p>
          <div className="grid gap-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm text-[#f5ead8] transition hover:text-[#d6b98a]"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="gold-label">Visit</p>
          <div className="grid gap-4 text-sm text-[#e5dac6]">
            <a className="flex gap-3" href={contactDetails.mapHref} target="_blank" rel="noreferrer">
              <MapPin className="mt-1 h-4 w-4 text-[#d6b98a]" />
              <span>{contactDetails.address}</span>
            </a>
            <a className="flex items-center gap-3" href={contactDetails.phoneHref}>
              <Phone className="h-4 w-4 text-[#d6b98a]" />
              <span>{contactDetails.phone}</span>
            </a>
            <a className="flex items-center gap-3" href={`mailto:${contactDetails.email}`}>
              <Mail className="h-4 w-4 text-[#d6b98a]" />
              <span>{contactDetails.email}</span>
            </a>
            <div className="flex gap-3">
              <Clock3 className="mt-1 h-4 w-4 text-[#d6b98a]" />
              <div className="space-y-1">
                {contactDetails.openingHours.map((hours) => (
                  <p key={hours} className="text-sm text-[#e5dac6]">
                    {hours}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
