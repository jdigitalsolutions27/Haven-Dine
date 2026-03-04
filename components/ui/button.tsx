import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b378] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#d6b98a] px-6 py-3 text-[#140f0c] shadow-[0_12px_30px_rgba(214,185,138,0.2)] hover:bg-[#e6c897]",
        outline:
          "border border-[#7b6540] bg-transparent px-6 py-3 text-[#f5ead8] hover:border-[#d6b98a] hover:bg-[#251d18]",
        ghost:
          "px-5 py-3 text-[#f5ead8] hover:bg-white/5",
        subtle:
          "bg-white/5 px-6 py-3 text-[#f5ead8] hover:bg-white/10"
      },
      size: {
        default: "h-12",
        lg: "h-14 px-8 text-base",
        sm: "h-10 px-4 text-xs uppercase tracking-[0.22em]"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
