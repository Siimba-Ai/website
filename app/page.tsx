"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DemoCard } from "@/components/demo-card"
import { WaitlistForm } from "@/components/waitlist-form"
import { HowItWorks } from "@/components/how-it-works"
import { HeroExactReplica } from "@/components/hero-exact-replica"
import { ScrollingBanner } from "@/components/scrolling-banner"
import { trackEvents } from "@/lib/analytics"


export default function Home() {
  React.useEffect(() => {
    trackEvents.pageView("home")
  }, [])

  React.useEffect(() => {
    const trackedSections = new Set<string>()
    const sectionIds = ["hero", "waitlist", "how-it-works"]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = (entry.target as HTMLElement).id
            if (sectionId && !trackedSections.has(sectionId)) {
              trackedSections.add(sectionId)
              trackEvents.sectionViewed(sectionId)
            }
          }
        })
      },
      { threshold: 0.35 }
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    const thresholds = [25, 50, 75, 90]
    const trackedThresholds = new Set<number>()

    const handleScroll = () => {
      const doc = document.documentElement
      const scrollableHeight = doc.scrollHeight - doc.clientHeight
      if (scrollableHeight <= 0) return

      const scrollPercent = Math.round((window.scrollY / scrollableHeight) * 100)

      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold)
          trackEvents.scrollDepth(threshold)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "var(--bg-cream)" }}>
      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section - TravelPerk Exact Replica */}
        <HeroExactReplica />

        {/* Scrolling Banner - Right where hand ends */}
        <div className="mt-0">
          <ScrollingBanner />
        </div>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Waitlist Section */}
        <section id="waitlist" className="relative py-10 sm:py-16 px-4">
          <WaitlistForm />
        </section>


        <Footer />
      </div>
    </div>
  )
}
