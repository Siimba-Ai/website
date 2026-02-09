"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface StatBadgeProps {
  icon: LucideIcon
  text: string
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
    transform?: string
  }
  iconColor?: string
  delay?: number
}

export function StatBadge({
  icon: Icon,
  text,
  position,
  iconColor = "#10B981",
  delay = 0.4,
}: StatBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 25,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="absolute hidden lg:block bg-white rounded-full px-4 py-2 shadow-lg animate-float-delayed-2"
      style={{
        top: position.top,
        bottom: position.bottom,
        left: position.left,
        right: position.right,
        transform: position.transform,
        zIndex: 20,
      }}
    >
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4" style={{ color: iconColor }} />
        <span className="text-sm font-medium" style={{ color: "var(--text-dark)" }}>
          {text}
        </span>
      </div>
    </motion.div>
  )
}
