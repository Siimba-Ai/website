"use client"

import { useState } from "react"
import { Moon, MessageSquare, Layers } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Moon,
    title: "Nightly synthesis",
    description:
      "While you sleep, Siimba reviews your calendar, emails, tasks, and patterns. It preps your day based on priorities and context.",
    bgColor: "#7BA6D1",
    textColor: "white",
    descColor: "rgba(255,255,255,0.85)",
    iconBg: "rgba(255,255,255,0.15)",
  },
  {
    icon: Layers,
    title: "Morning stack",
    description:
      "Wake up to 4 to 10 decision cards. Prioritized, prepped, and ready. No dashboards. No endless scrolling.",
    bgColor: "#EDE9E3",
    textColor: "var(--text-dark)",
    descColor: "var(--text-secondary)",
    iconBg: "rgba(0,0,0,0.05)",
  },
  {
    icon: MessageSquare,
    title: "You Approve",
    description:
      "Chat, find among contexts, or simply approve. Siimba executes or drafts. You maintain agency without the juggling.",
    bgColor: "#C3F53C",
    textColor: "var(--text-dark)",
    descColor: "var(--text-secondary)",
    iconBg: "rgba(0,0,0,0.05)",
  },
]

export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 px-4" style={{ backgroundColor: "var(--bg-cream)" }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "var(--text-dark)" }}
          >
            Your day, handled
          </h2>
          <p
            className="text-lg sm:text-xl max-w-[800px] mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Free up your time with decision synthesis, prioritized morning stacks, and simple approve/chat workflows.
          </p>
        </div>

        {/* Three cards - Interactive sizing based on active state */}
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          {features.map((feature, index) => {
            const isActive = activeIndex === index
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                animate={{
                  scale: isActive ? 1.15 : 1,
                  zIndex: isActive ? 10 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  opacity: { duration: 0.6, delay: index * 0.1 },
                  y: { duration: 0.6, delay: index * 0.1 },
                }}
                onClick={() => setActiveIndex(index)}
                className="w-full md:w-[280px] h-[420px] rounded-[28px] flex flex-col overflow-hidden cursor-pointer relative"
                style={{
                  backgroundColor: feature.bgColor,
                  boxShadow: isActive ? "0 20px 40px rgba(0,0,0,0.12)" : "0 4px 12px rgba(0,0,0,0.06)",
                }}
                whileHover={{ scale: isActive ? 1.15 : 1.04 }}
              >
                {/* Icon area */}
                <div className="flex-1 flex items-center justify-center p-6">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: feature.iconBg }}
                  >
                    <Icon
                      className="w-10 h-10"
                      style={{ color: feature.textColor }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pt-0 flex flex-col">
                  <h3
                    className="font-display text-lg font-bold mb-2"
                    style={{ color: feature.textColor }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: feature.descColor }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-2.5 mt-[58px]">
          {features.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="w-2.5 h-2.5 rounded-full"
              animate={{
                backgroundColor: activeIndex === index ? "#1A1A1A" : "#D4D0CA",
                scale: activeIndex === index ? 1.2 : 1,
              }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              aria-label={`View ${features[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
