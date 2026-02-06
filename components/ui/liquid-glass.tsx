"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "pink" | "green" | "elevated" | "mesh" | "ultra"
  intensity?: "sm" | "md" | "lg"
  animate?: boolean
}

const LiquidGlass = React.forwardRef<HTMLDivElement, LiquidGlassProps>(
  ({ className, variant = "default", intensity = "md", animate = false, children, ...props }, ref) => {

    const variantClass = React.useMemo(() => {
      switch (variant) {
        case "pink": return "glass-card-pink"
        case "green": return "glass-card-green"
        case "elevated": return "glass-elevated"
        case "mesh": return "gradient-mesh"
        case "ultra": return "glass-ultra"
        default: return "glass-card"
      }
    }, [variant])

    return (
      <div
        ref={ref}
        className={cn(
          variantClass,
          animate && "spring-transition hover:scale-[1.02]",
          "rounded-3xl relative overflow-hidden", // Default large radius
          className
        )}
        {...props}
      >
        {/* Optional: Add shimmer or specific effects based on intensity/variant if needed */}
        {children}
      </div>
    )
  }
)
LiquidGlass.displayName = "LiquidGlass"

export { LiquidGlass }