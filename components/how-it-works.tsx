"use client"

import { Moon, Layers, Check, Shield } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: Moon,
    title: "Nightly Synthesis",
    description:
      "While you sleep, Siimba reviews your calendar, emails, tasks, and patterns. It preps your day based on priorities and context.",
  },
  {
    icon: Layers,
    title: "Morning Stack",
    description:
      "Wake up to 4 to 10 decision cards. Prioritized, prepped, and ready. No dashboards. No endless scrolling.",
  },
  {
    icon: Check,
    title: "You Approve",
    description:
      "Swipe to approve, edit, or snooze. Siimba executes or drafts. You maintain agency without the juggling.",
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            How it works
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto text-sm sm:text-base">
            Siimba follows a simple review and approve model. You stay in
            control while reducing cognitive load.
          </p>
        </motion.div>

        {/* Mobile Timeline - stacked cards */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Card */}
              <div className="glass-card p-5 w-full text-center">
                <span className="inline-block text-xs font-semibold text-primary/80 uppercase tracking-wider mb-1">
                  Step {index + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Timeline - alternating layout */}
        <div className="hidden md:block relative">
          {/* Vertical line - centered */}
          <div className="absolute left-1/2 -translate-x-px top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0

              return (
                <div
                  key={step.title}
                  className="relative flex items-center min-h-[200px]"
                >
                  {/* Left side */}
                  <div className="w-1/2 flex items-center justify-end pr-8">
                    {isEven && (
                      <>
                        <motion.div
                          className="glass-card p-6 text-right hover:scale-[1.02] transition-all duration-300 flex-1 max-w-md"
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "0px" }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <span className="inline-block text-xs font-semibold text-primary/80 uppercase tracking-wider mb-2">
                            Step {index + 1}
                          </span>
                          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-foreground/70 leading-relaxed text-sm">
                            {step.description}
                          </p>
                        </motion.div>
                        <motion.div
                          className="ml-6 flex-shrink-0"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "0px" }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                        >
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                            <step.icon className="w-7 h-7 text-primary" />
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>

                  {/* Right side */}
                  <div className="w-1/2 flex items-center pl-8">
                    {!isEven && (
                      <>
                        <motion.div
                          className="mr-6 flex-shrink-0"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "0px" }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                        >
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                            <step.icon className="w-7 h-7 text-primary" />
                          </div>
                        </motion.div>
                        <motion.div
                          className="glass-card p-6 hover:scale-[1.02] transition-all duration-300 flex-1 max-w-md"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "0px" }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <span className="inline-block text-xs font-semibold text-primary/80 uppercase tracking-wider mb-2">
                            Step {index + 1}
                          </span>
                          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-foreground/70 leading-relaxed text-sm">
                            {step.description}
                          </p>
                        </motion.div>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Trust banner */}
        <motion.div
          className="mt-12 sm:mt-20 glass-card p-5 sm:p-6 flex items-start sm:items-center gap-4 max-w-2xl mx-auto hover:scale-[1.01] transition-transform duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-success/15 flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
          </div>
          <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm">
            <span className="font-semibold text-foreground">
              Proactive but bounded.
            </span>{" "}
            Siimba suggests and drafts, but never acts without your approval. It
            reduces decision fatigue, not critical thinking.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
