import { Star } from "lucide-react";

export function ReviewStars() {
  return (
    <div className="flex items-center gap-1 text-[#d6b98a]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}
