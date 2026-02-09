"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Calendar, CheckCircle, RefreshCw, CheckCheck, Clock, ChevronRight } from "lucide-react"
import { FloatingCard } from "@/components/floating-card"
import { trackEvents } from "@/lib/analytics"

export function HeroSection() {
  const scrollToWaitlist = () => {
    trackEvents.ctaClick("hero_get_early_access")
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  const floatingCards = [
    {
      type: "decision" as const,
      title: "Reply drafted",
      subtitle: "3 emails pending",
      icon: Mail,
      position: { top: "10%", left: "5%" },
      floatDelay: 0,
      entranceDelay: 0.2,
    },
    {
      type: "decision" as const,
      title: "Meeting prep ready",
      subtitle: "Standup at 10am",
      icon: Calendar,
      position: { top: "15%", right: "8%" },
      floatDelay: 0.5,
      entranceDelay: 0.3,
    },
    {
      type: "decision" as const,
      title: "PR ready to merge",
      subtitle: "Code review complete",
      icon: CheckCircle,
      position: { top: "45%", left: "2%" },
      floatDelay: 1,
      entranceDelay: 0.4,
    },
    {
      type: "badge" as const,
      title: "Synced",
      icon: RefreshCw,
      position: { top: "40%", right: "5%" },
      floatDelay: 1.5,
      entranceDelay: 0.5,
    },
    {
      type: "badge" as const,
      title: "24 completed today",
      icon: CheckCheck,
      position: { bottom: "20%", left: "8%" },
      floatDelay: 2,
      entranceDelay: 0.6,
    },
    {
      type: "badge" as const,
      title: "2.5 hrs saved",
      icon: Clock,
      position: { bottom: "25%", right: "10%" },
      floatDelay: 2.5,
      entranceDelay: 0.7,
    },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-16 pt-24 sm:py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-center mb-8 sm:mb-12 leading-tight max-w-5xl mx-auto"
        >
          Decision fatigue made{" "}
          <span className="text-primary italic" style={{ fontFamily: "'Bodoni Moda', serif" }}>
            simpler and smarter
          </span>
        </motion.h1>

        {/* Phone image with floating cards */}
        <div className="relative mx-auto max-w-4xl">
          {/* Floating cards container - desktop only */}
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
            {/* Phone image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative z-10 animate-float-delayed-1"
            >
              <img
                src="/static/holding-phone.png"
                alt="Siimba app interface on mobile device"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto"
              />
            </motion.div>

            {/* Floating cards - absolute positioned on desktop */}
            {floatingCards.map((card, index) => (
              <FloatingCard
                key={`floating-${index}`}
                {...card}
              />
            ))}
          </div>

          {/* Mobile grid fallback - cards below phone */}
          <div className="lg:hidden grid grid-cols-2 gap-3 mt-8 max-w-md mx-auto">
            {floatingCards.slice(0, 4).map((card, index) => (
              <div
                key={`mobile-${index}`}
                className="glass-card px-3 py-2.5"
              >
                <div className="flex items-start gap-2">
                  <div
                    className={`rounded-full flex items-center justify-center shrink-0 ${
                      card.type === "decision" ? "w-7 h-7 bg-primary/10" : "w-6 h-6 bg-success/10"
                    }`}
                  >
                    <card.icon
                      className={`${
                        card.type === "decision" ? "w-3.5 h-3.5 text-primary" : "w-3 h-3 text-success"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground leading-tight">
                      {card.title}
                    </p>
                    {card.subtitle && (
                      <p className="text-[10px] text-foreground/60 leading-tight mt-0.5">
                        {card.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-8 sm:mt-12"
        >
          <button
            onClick={scrollToWaitlist}
            className="glass-button-primary text-foreground font-semibold flex items-center justify-center gap-2 group text-sm sm:text-base"
          >
            Get early access
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto mt-6"
        >
          Siimba prepares a small stack of decisions every morning. You approve, not juggle. Reduce decision fatigue and start your day staged.
        </motion.p>
      </div>
    </section>
  )
}
