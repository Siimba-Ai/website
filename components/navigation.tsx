"use client"

import { ChevronRight } from "lucide-react"

export function Navigation() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-5 animate-fade-in-up">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="font-display text-xl sm:text-2xl font-bold text-foreground hover:scale-105 transition-transform duration-300"
        >
          Siimba
        </a>

        {/* CTA */}
        <button
          onClick={scrollToWaitlist}
          className="text-foreground text-xs sm:text-sm font-medium flex items-center gap-1 group hover:opacity-80 transition-opacity duration-300"
        >
          <span className="hidden xs:inline">Get early access</span>
          <span className="xs:hidden">Join</span>
          <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </nav>
  )
}
