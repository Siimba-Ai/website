"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ImageCardProps {
  src: string
  alt: string
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  width?: string
  className?: string
  rotate?: number
  delay?: number
  zIndex?: number
}

export function ImageCard({
  src,
  alt,
  position,
  width = "240px",
  className,
  rotate = 0,
  delay = 0.2,
  zIndex = 20,
}: ImageCardProps) {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 25,
      }}
      whileHover={{
        translateY: -2,
        scale: 1.01,
        transition: { duration: 0.3 },
      }}
      className={cn("absolute hidden lg:block rounded-2xl animate-float-delayed", className)}
      style={{
        top: position.top,
        bottom: position.bottom,
        left: position.left,
        right: position.right,
        width,
        transform: `rotate(${rotate}deg)`,
        zIndex,
        filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.06))",
      }}
    />
  )
}
