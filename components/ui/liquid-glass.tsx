import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LiquidGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowIntensity?: "none" | "xs" | "sm" | "md" | "lg" | "xl"
  shadowIntensity?: "none" | "xs" | "sm" | "md" | "lg" | "xl"
  blurIntensity?: "none" | "xs" | "sm" | "md" | "lg" | "xl"
  borderRadius?: string
  draggable?: boolean
  expandable?: boolean
  children: React.ReactNode
}

const glowStyles = {
  none: "",
  xs: "shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]",
  sm: "shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.2)]",
  md: "shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]",
  lg: "shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:shadow-[0_0_80px_rgba(255,255,255,0.3)]",
  xl: "shadow-[0_0_80px_rgba(255,255,255,0.3)] hover:shadow-[0_0_100px_rgba(255,255,255,0.35)]",
}

const shadowStyles = {
  none: "",
  xs: "shadow-glass",
  sm: "shadow-glass",
  md: "shadow-glass",
  lg: "shadow-glass-elevated",
  xl: "shadow-glass-elevated",
}

const blurStyles = {
  none: "",
  xs: "[backdrop-filter:blur(20px)_saturate(140%)_brightness(1.05)] [-webkit-backdrop-filter:blur(20px)_saturate(140%)_brightness(1.05)]",
  sm: "[backdrop-filter:blur(40px)_saturate(160%)_brightness(1.1)] [-webkit-backdrop-filter:blur(40px)_saturate(160%)_brightness(1.1)]",
  md: "[backdrop-filter:blur(60px)_saturate(180%)_brightness(1.15)] [-webkit-backdrop-filter:blur(60px)_saturate(180%)_brightness(1.15)]",
  lg: "[backdrop-filter:blur(80px)_saturate(200%)_brightness(1.2)] [-webkit-backdrop-filter:blur(80px)_saturate(200%)_brightness(1.2)]",
  xl: "[backdrop-filter:blur(100px)_sate(220%)_brightness(1.25)] [-webkit-backdrop-filter:blur(100px)_saturate(220%)_brightness(1.25)]",
}

export const LiquidGlassCard = React.forwardRef<HTMLDivElement, LiquidGlassCardProps>(
  ({
    className,
    children,
    glowIntensity = "none",
    shadowIntensity = "xs",
    blurIntensity = "xs",
    borderRadius = "24px",
    draggable = false,
    expandable = false,
    style,
    ...props
  }, ref) => {
    const [isExpanded, setIsExpanded] = React.useState(false)

    const Component = draggable || expandable ? motion.div : 'div'
    const motionProps = draggable
      ? {
          drag: true,
          dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
          dragElastic: 0.1,
          whileTap: { scale: 0.98 },
        }
      : expandable
      ? {
          animate: isExpanded ? { scale: 1.05 } : { scale: 1 },
          transition: { type: "spring", stiffness: 300, damping: 30 },
        }
      : {}

    return (
      <Component
        ref={ref}
        className={cn(
          // Base styles
          "relative overflow-hidden border",
          "border-white/30 bg-white/70",
          "transition-all duration-300 ease-out",
          // Apply intensity-based styles
          glowStyles[glowIntensity],
          shadowStyles[shadowIntensity],
          blurStyles[blurIntensity],
          draggable && "cursor-grab active:cursor-grabbing",
          className
        )}
        style={{
          borderRadius,
          ...style
        }}
        {...motionProps}
        {...props}
      >
        {/* Edge layer - inner highlights */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent pointer-events-none"
          style={{ borderRadius }}
        />

        {/* Subtle inner glow */}
        <div
          className="absolute inset-0 shadow-[inset_0_1px_8px_rgba(255,255,255,0.2),inset_0_-1px_4px_rgba(0,0,0,0.05)] pointer-events-none"
          style={{ borderRadius }}
        />

        {/* Content */}
        <div className="relative z-30">
          {children}
        </div>
      </Component>
    )
  }
)

LiquidGlassCard.displayName = "LiquidGlassCard"

// Variants with preset configurations
export const LiquidGlassCardSubtle = React.forwardRef<HTMLDivElement, Omit<LiquidGlassCardProps, 'glowIntensity' | 'shadowIntensity' | 'blurIntensity'>>(
  (props, ref) => (
    <LiquidGlassCard
      ref={ref}
      glowIntensity="sm"
      shadowIntensity="sm"
      blurIntensity="sm"
      {...props}
    />
  )
)
LiquidGlassCardSubtle.displayName = "LiquidGlassCardSubtle"

export const LiquidGlassCardElevated = React.forwardRef<HTMLDivElement, Omit<LiquidGlassCardProps, 'glowIntensity' | 'shadowIntensity' | 'blurIntensity'>>(
  (props, ref) => (
    <LiquidGlassCard
      ref={ref}
      glowIntensity="lg"
      shadowIntensity="lg"
      blurIntensity="lg"
      borderRadius="32px"
      {...props}
    />
  )
)
LiquidGlassCardElevated.displayName = "LiquidGlassCardElevated"
