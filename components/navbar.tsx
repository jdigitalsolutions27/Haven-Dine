"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell pt-5">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 md:px-6">
          <BrandMark compact />

          <nav className="hidden items-center gap-6 lg:flex">
            {navigationLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm tracking-[0.2em] text-[#d6c4a1] transition hover:text-white",
                    active && "text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/reservations" className="hidden md:block">
            <Button size="sm">Reserve</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
