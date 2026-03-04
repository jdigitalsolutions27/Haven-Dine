import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-[1.5rem] border border-[#64533a] bg-[#120f0d]/80 px-4 py-3 text-sm text-[#f7efe2] placeholder:text-[#b19a76] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b98a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120f0d]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
