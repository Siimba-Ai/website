"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DemoCard } from "@/components/demo-card"
import { WaitlistForm } from "@/components/waitlist-form"
import { HowItWorks } from "@/components/how-it-works"
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

  const scrollToWaitlist = () => {
    trackEvents.ctaClick("hero_get_early_access")
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat blur-lg scale-105"
        style={{ backgroundImage: "url(/hero-bg.jpg)" }}
      />
      {/* Blue tint overlay */}
      <div className="fixed inset-0 bg-primary/10" />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-16 pt-24 sm:py-20">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left side - Text content */}
              <div className="text-center md:text-left">
                {/* Main headline */}
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight animate-fade-in-up">
                  You wake up. You swipe yes 4 times.{" "}
                  <span className="text-primary italic" style={{ fontFamily: "'Bodoni Moda', serif" }}>Your day is handled.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-xl mx-auto md:mx-0 mb-6 sm:mb-8 leading-relaxed animate-fade-in-up-delayed">
                  Siimba prepares a small stack of decisions every morning. You approve,
                  not juggle. Reduce decision fatigue and start your day staged.
                </p>

                {/* CTA Button */}
                <div className="flex justify-center md:justify-start animate-fade-in-up-delayed-2">
                  <button
                    onClick={scrollToWaitlist}
                    className="glass-button-primary text-foreground font-semibold flex items-center justify-center gap-2 group text-sm sm:text-base"
                  >
                    Get early access
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Right side - Demo card */}
              <div className="flex justify-center md:justify-end animate-scale-in" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
                <DemoCard />
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="relative py-10 sm:py-16 px-4">
          <WaitlistForm />
        </section>

        {/* How It Works Section */}
        <HowItWorks />


        <Footer />
      </div>
    </div>
  )
}
