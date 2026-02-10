"use client"

import { ChevronRight } from "lucide-react"
import { trackEvents } from "@/lib/analytics"

export function Navigation() {
  const calendlyUrl = "https://calendly.com/vrinda-siimba/30min"

  const scrollToWaitlist = () => {
    trackEvents.ctaClick("nav_get_early_access")
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-2 sm:py-3 animate-fade-in-up"
      style={{ backgroundColor: "var(--bg-cream)", borderBottom: "1px solid var(--border-subtle)" }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-2 sm:gap-4 h-14 sm:h-16">
        {/* Logo */}
        <a
          href="/"
          onClick={() => trackEvents.linkClick("navigation", "logo_home")}
          className="flex h-full items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/static/long-logo-tight.png"
            alt="Siimba"
            className="block h-10 sm:h-10 md:h-11 w-auto max-w-[220px] sm:max-w-[260px] object-contain"
          />
        </a>

        {/* CTAs - TravelPerk style */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvents.ctaClick("nav_book_demo")}
            className="inline-flex items-center justify-center text-center leading-none min-h-[44px] px-3 sm:px-6 py-2 sm:py-2.5 rounded-full border-2 text-[11px] sm:text-sm font-medium whitespace-nowrap hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-cream)]"
            style={{
              borderColor: "var(--text-dark)",
              color: "var(--text-dark)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--text-dark)"
              e.currentTarget.style.color = "white"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "var(--text-dark)"
            }}
          >
            <span className="sm:hidden">Book demo</span>
            <span className="hidden sm:inline">Book a demo</span>
          </a>
          <button
            onClick={scrollToWaitlist}
            className="min-h-[44px] px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-semibold flex items-center justify-center gap-1 whitespace-nowrap group transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-cream)]"
            style={{
              backgroundColor: "var(--accent-turquoise)",
              color: "white",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-turquoise-hover)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-turquoise)"
            }}
          >
            Join
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </nav>
  )
}
