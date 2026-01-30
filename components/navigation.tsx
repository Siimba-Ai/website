"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { trackEvents } from "@/lib/analytics"
import { LiquidGlassCard } from "@/components/ui/liquid-glass"

export function Navigation() {
  const handleCTAClick = () => {
    trackEvents.ctaClick("nav")
    const element = document.querySelector("#waitlist")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <LiquidGlassCard
        className="w-full"
        borderRadius="24px"
        shadowIntensity="md"
        glowIntensity="md"
        blurIntensity="xl"
        draggable={false}
      >
        <div className="relative z-30 w-full px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="flex h-20 md:h-24 lg:h-28 items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <a
              href="#"
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              Siimba
            </a>

            {/* CTA Button */}
            <Button 
              onClick={handleCTAClick} 
              size="lg" 
              className="text-base md:text-lg lg:text-xl px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 relative z-30"
            >
              Get early access
            </Button>
          </div>
        </div>
      </LiquidGlassCard>
    </nav>
  )
}
