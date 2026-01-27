"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { trackEvents } from "@/lib/analytics"

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCTAClick = () => {
    trackEvents.ctaClick("nav")
    const element = document.querySelector("#waitlist")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full spring-transition",
        isScrolled
          ? "glass-card shadow-lg border-b border-white/50"
          : "bg-transparent"
      )}
    >
      <div className="w-full px-6 lg:px-8 xl:px-20">
        <div className="flex h-24 md:h-28 lg:h-32 items-center justify-between max-w-[2800px] mx-auto">
          {/* Logo */}
          <a
            href="#"
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-sage hover:text-sage/80 spring-transition"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            Siimba
          </a>

          {/* CTA Button */}
          <Button onClick={handleCTAClick} size="lg" className="text-xl md:text-2xl px-8 py-6 shadow-lg">
            Get early access
          </Button>
        </div>
      </div>
    </nav>
  )
}
