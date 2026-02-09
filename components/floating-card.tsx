"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FloatingCardProps {
  type: "decision" | "badge"
  title: string
  subtitle?: string
  icon: LucideIcon
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  floatDelay: number
  entranceDelay: number
  className?: string
}

export function FloatingCard({
  type,
  title,
  subtitle,
  icon: Icon,
  position,
  floatDelay,
  entranceDelay,
  className,
}: FloatingCardProps) {
  const floatClass = `animate-float-delayed-${Math.min(6, Math.max(1, Math.ceil(floatDelay / 0.5)))}`

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: entranceDelay,
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "glass-card absolute hidden lg:block",
        floatClass,
        type === "decision" ? "px-4 py-3 min-w-[180px] max-w-[220px]" : "px-3 py-2 min-w-[140px] max-w-[180px]",
        className
      )}
      style={{
        top: position.top,
        bottom: position.bottom,
        left: position.left,
        right: position.right,
        zIndex: 20,
      }}
      aria-hidden="true"
    >
      <div className="flex items-start gap-2.5">
        <div
          className={cn(
            "rounded-full flex items-center justify-center shrink-0",
            type === "decision"
              ? "w-8 h-8 bg-primary/10"
              : "w-6 h-6 bg-success/10"
          )}
        >
          <Icon
            className={cn(
              type === "decision" ? "w-4 h-4 text-primary" : "w-3.5 h-3.5 text-success"
            )}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p
            className={cn(
              "font-medium text-foreground leading-tight",
              type === "decision" ? "text-sm" : "text-xs"
            )}
          >
            {title}
          </p>
          {subtitle && (
            <p
              className={cn(
                "text-foreground/60 leading-tight mt-0.5",
                type === "decision" ? "text-xs" : "text-[10px]"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
