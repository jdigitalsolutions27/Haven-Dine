import { MapPinned } from "lucide-react";

import { contactDetails } from "@/lib/constants";

export function MapBlock() {
  return (
    <div className="soft-card overflow-hidden">
      <div className="flex min-h-[340px] flex-col justify-between bg-[linear-gradient(160deg,rgba(214,185,138,0.12),rgba(18,15,13,0.95)),url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center p-8 md:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c49f63] bg-black/25 backdrop-blur">
          <MapPinned className="h-7 w-7 text-[#d6b98a]" />
        </div>
        <div className="max-w-md space-y-4">
          <p className="gold-label">Map Placeholder</p>
          <h3 className="text-4xl text-white">Visit Haven Dine in Tacloban City.</h3>
          <p>
            Nestled along {contactDetails.address}, our dining room is positioned for sunset
            arrivals, intimate dinners, and elevated evenings in the city.
          </p>
        </div>
      </div>
    </div>
  );
}
