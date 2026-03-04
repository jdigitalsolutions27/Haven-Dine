import Link from "next/link";
import { MapPin, Phone, UtensilsCrossed } from "lucide-react";

import { contactDetails } from "@/lib/constants";

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
      <div className="glass-panel grid grid-cols-3 rounded-full px-2 py-2">
        <a
          href={contactDetails.phoneHref}
          className="flex flex-col items-center gap-1 rounded-full py-2 text-[11px] uppercase tracking-[0.18em] text-[#f2e6d2]"
        >
          <Phone className="h-4 w-4 text-[#d6b98a]" />
          Call
        </a>
        <Link
          href="/reservations"
          className="flex flex-col items-center gap-1 rounded-full bg-[#d6b98a] py-2 text-[11px] uppercase tracking-[0.18em] text-[#1a120d]"
        >
          <UtensilsCrossed className="h-4 w-4" />
          Reserve
        </Link>
        <a
          href={contactDetails.mapHref}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 rounded-full py-2 text-[11px] uppercase tracking-[0.18em] text-[#f2e6d2]"
        >
          <MapPin className="h-4 w-4 text-[#d6b98a]" />
          Directions
        </a>
      </div>
    </div>
  );
}
