"use client"

import { ChevronRight } from "lucide-react"
import { trackEvents } from "@/lib/analytics"

export function Navigation() {
  const scrollToWaitlist = () => {
    trackEvents.ctaClick("nav_get_early_access")
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-5 animate-fade-in-up">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={() => trackEvents.linkClick("navigation", "logo_home")}
          className="flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/static/sii-logo.png"
            alt="Siimba"
            className="h-16 sm:h-20 md:h-24 w-auto"
          />
          <span className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight">
            Siimba
          </span>
        </a>

        {/* CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/siimba"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvents.ctaClick("nav_book_demo")}
            className="glass-button text-foreground text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            Book a demo
          </a>
          <button
            onClick={scrollToWaitlist}
            className="glass-button-primary text-foreground text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-full flex items-center gap-1 group"
          >
            Join
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </nav>
  )
}
