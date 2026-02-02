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
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 border-b border-border/10"
          : "bg-transparent"
      )}
    >
      <div className="w-full px-6 lg:px-8 xl:px-20">
        <div className="flex h-20 md:h-24 items-center justify-between max-w-[2800px] mx-auto">
          {/* Logo */}
          <a
            href="#"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground transition-opacity hover:opacity-70"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            Siimba
          </a>

          {/* CTA Button */}
          <Button onClick={handleCTAClick} size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-[0_0_20px_rgba(104,135,108,0.3),0_0_40px_rgba(104,135,108,0.15)] hover:shadow-[0_0_30px_rgba(104,135,108,0.4),0_0_60px_rgba(104,135,108,0.2)] border-2">
            Get early access
          </Button>
        </div>
      </div>
    </nav>
  )
}
