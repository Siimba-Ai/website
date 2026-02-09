"use client"

import { ChevronRight } from "lucide-react"
import { trackEvents } from "@/lib/analytics"

export function Navigation() {
  const scrollToWaitlist = () => {
    trackEvents.ctaClick("nav_get_early_access")
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 animate-fade-in-up"
      style={{ backgroundColor: "var(--bg-cream)", borderBottom: "1px solid var(--border-subtle)" }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="/"
          onClick={() => trackEvents.linkClick("navigation", "logo_home")}
          className="flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/static/long-logo.png"
            alt="Siimba"
            className="h-40 sm:h-42 w-auto"
          />
        </a>

        {/* CTAs - TravelPerk style */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/siimba"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvents.ctaClick("nav_book_demo")}
            className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border-2 text-xs sm:text-sm font-medium hover:text-white transition-all duration-300"
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
            Book a demo
          </a>
          <button
            onClick={scrollToWaitlist}
            className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 group transition-colors duration-300"
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
