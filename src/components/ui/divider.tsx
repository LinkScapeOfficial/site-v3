"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface DividerProps extends React.ComponentProps<"div"> {
  variant?: "default" | "diagonal" | "fill"
  height?: string
}

function Divider({
  className,
  variant = "default",
  height = "h-16",
  children,
  ...props
}: DividerProps) {
  return (
    <div className={cn("relative w-full", height, className)} {...props}>
      {variant === "diagonal" && (
        <div className="text-border absolute inset-[0px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,transparent_1px_50%)] bg-[size:10px_10px]" />
      )}
      {variant === "fill" && (
        <div className="absolute bg-current inset-0" />
      )}
      {children}
    </div>
  )
}

export { Divider } 