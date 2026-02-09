"use client"

import * as React from "react"

export function ScrollingBanner() {
  const bannerText = "Hundreds already on the waitlist • Join now"

  return (
    <section
      className="relative py-4 overflow-hidden"
      style={{
        backgroundColor: "var(--bg-banner)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="flex items-center whitespace-nowrap animate-scroll-banner">
        {/* Duplicate content for seamless infinite scroll */}
        <div className="flex items-center gap-8 px-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={`banner-1-${i}`}
              className="text-sm font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              {bannerText}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-8 px-4" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={`banner-2-${i}`}
              className="text-sm font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              {bannerText}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
