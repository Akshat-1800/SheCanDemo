import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = {
  default:
    "inline-flex items-center rounded-full bg-[#fff1e7] px-3 py-1 text-xs font-semibold text-[#c65341]",
  outline:
    "inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-600",
};

function Badge({ className, variant = "default", ...props }) {
  return (
    <span
      className={cn(badgeVariants[variant] || badgeVariants.default, className)}
      {...props}
    />
  );
}

export { Badge };
