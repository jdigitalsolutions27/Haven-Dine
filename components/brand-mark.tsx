import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className, compact = false }: BrandMarkProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center", className)}>
      <Image
        src="/haven-dine-logo.svg"
        alt="Haven Dine logo"
        width={compact ? 176 : 240}
        height={compact ? 50 : 68}
        priority
        className={cn(
          "h-auto w-auto",
          compact ? "max-w-[176px]" : "max-w-[240px]"
        )}
      />
    </Link>
  );
}
