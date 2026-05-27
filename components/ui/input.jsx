"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "flex h-11 w-full rounded-xl border border-stone-200 bg-white/90 px-3 py-2 text-sm text-stone-800 placeholder:text-stone-400 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e26d5a]/30",
      className
    )}
    {...props}
  />
));

Input.displayName = "Input";

export { Input };
