"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle, Clock } from "lucide-react"
import { ImageCard } from "@/components/image-card"
import { StatBadge } from "@/components/stat-badge"

export function HeroExactReplica() {
  return (
    <section className="hero-bg pt-28 pb-0 px-4" style={{ minHeight: "calc(100vh - 80px)" }}>
      <div className="max-w-[1400px] mx-auto h-full flex flex-col justify-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold text-center mb-8 max-w-[900px] mx-auto tracking-tight"
          style={{ color: "var(--text-dark)", zIndex: 30 }}
        >
          Decision fatigue made{" "}
          <span className="italic">simpler and smarter</span>
        </motion.h1>

        {/* Phone + Floating Cards Container */}
        <div className="relative w-full max-w-[1400px] mx-auto px-4" style={{ minHeight: "500px", marginTop: "-40px" }}>
          <div className="relative flex items-center justify-center" style={{ minHeight: "500px" }}>
            {/* Central Phone */}
            <motion.img
              src="/static/holding-phone.png"
              alt="Siimba app interface on mobile device"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[250px] sm:max-w-[310px] md:max-w-[370px] lg:max-w-[405px]"
              style={{ zIndex: 5 }}
            />

            {/* Card 1: What emails - Top Left */}
            <ImageCard
              src="/static/what-emails.png"
              alt="What emails need my attention today?"
              position={{ top: "-13%", left: "18%" }}
              width="280px"
              delay={0.3}
              zIndex={30}
            />

            {/* Card 2: What calendar - Top Right (very close to phone) */}
            <ImageCard
              src="/static/what-calendar.png"
              alt="What's on my calendar this week?"
              position={{ top: "42%", right: "20%" }}
              width="260px"
              delay={0.4}
              zIndex={30}
            />

            {/* Card 3: Reject card - Bottom Left (tilted) */}
            <ImageCard
              src="/static/reject.png"
              alt="Reject email card"
              position={{ bottom: "10%", left: "14%" }}
              width="260px"
              rotate={-3}
              delay={0.5}
            />

            {/* Card 4: Approve email - Bottom Right (tilted) */}
            <ImageCard
              src="/static/approve.png"
              alt="Email approval card"
              position={{ top: "6%", right: "16%" }}
              width="260px"
              rotate={2}
              delay={0.6}
            />

            {/* Badge 5: Approved count - Bottom Left */}
            <StatBadge
              icon={CheckCircle}
              text="4 approved today"
              position={{ bottom: "6%", left: "30%" }}
              iconColor="#10B981"
              delay={0.7}
            />

            {/* Badge 6: Time saved - Bottom Right */}
            <StatBadge
              icon={Clock}
              text="2.5 hrs saved"
              position={{ bottom: "60%", right: "30%" }}
              iconColor="#3B82F6"
              delay={0.8}
            />
          </div>

          {/* Mobile fallback - Grid layout below phone */}
          <div className="lg:hidden mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
            <img
              src="/static/what-emails.png"
              alt="What emails need my attention?"
              className="rounded-2xl shadow-lg w-full"
            />
            <img
              src="/static/what-calendar.png"
              alt="What's on my calendar?"
              className="rounded-2xl shadow-lg w-full"
            />
            <img
              src="/static/approve.png"
              alt="Email approval"
              className="rounded-2xl shadow-lg col-span-2 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
