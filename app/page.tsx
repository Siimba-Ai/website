"use client"

import * as React from "react"
import { LiquidGlassCard } from "@/components/ui/liquid-glass"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Layers, CheckCircle2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DecisionStack, DecisionCard } from "@/components/decision-stack"
import { WaitlistForm } from "@/components/waitlist-form"

const heroCards: DecisionCard[] = [
  {
    id: "1",
    type: "calendar",
    title: "Standup at 10am",
    summary: "Your daily standup is in 2 hours",
    detail: "Prep checklist ready: reviewed yesterday's commits, outlined blockers, drafted 3 talking points.",
    approveLabel: "Approve",
    snoozeLabel: "Edit",
  },
  {
    id: "2",
    type: "email",
    title: "3 emails need replies",
    summary: "High priority messages from Sarah, Tom, and legal",
    detail: "Drafts ready. Sarah needs a meeting time, Tom needs a yes/no, legal needs a signature.",
    approveLabel: "Approve",
    snoozeLabel: "Review",
  },
  {
    id: "3",
    type: "errand",
    title: "Groceries for the week",
    summary: "Running low on essentials",
    detail: "List built from your meal plan and last week's order: milk, eggs, bread, chicken, vegetables.",
    approveLabel: "Approve",
    snoozeLabel: "Edit list",
  },
  {
    id: "4",
    type: "social",
    title: "Check in with Mom",
    summary: "Been 5 days since you last spoke",
    detail: "Draft: 'Hey Mom! Hope you're doing well. Want to catch up this weekend? How's the garden coming along?'",
    approveLabel: "Send",
    snoozeLabel: "Rewrite",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden text-foreground">
      <Navigation />
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full px-4 md:px-8 lg:px-12 pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                  You wake up. You swipe yes 4 times. Your day is handled.
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mt-4">
                  Siimba prepares a small stack of decisions every morning. You approve, not juggle. Reduce decision fatigue and start your day staged.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button
                    size="lg"
                    className="text-xl md:text-2xl"
                    onClick={() => {
                      document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Get early access
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center">
                <DecisionStack
                  cards={heroCards}
                  onComplete={() => {}}
                  className="w-full max-w-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full px-4 md:px-8 lg:px-12 py-20 md:py-32 relative z-0">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4">
                How it works
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto">
                Siimba follows a simple review and approve model. You stay in control while reducing cognitive load.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Nightly Synthesis",
                  description: "While you sleep, Siimba reviews your calendar, emails, tasks, and patterns. It preps your day based on priorities and context.",
                },
                {
                  icon: <Layers className="h-8 w-8" />,
                  title: "Morning Stack",
                  description: "Wake up to 4 to 10 decision cards. Prioritized, prepped, and ready. No dashboards. No endless scrolling.",
                },
                {
                  icon: <CheckCircle2 className="h-8 w-8" />,
                  title: "You Approve",
                  description: "Swipe to approve, edit, or snooze. Siimba executes or drafts. You maintain agency without the juggling.",
                },
              ].map((step, idx) => (
                <LiquidGlassCard key={idx} className="p-8" width="100%" draggable={false}>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-primary">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{step.title}</h3>
                  <p className="text-xl md:text-2xl text-gray-300 mt-2">{step.description}</p>
                </LiquidGlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="w-full px-4 md:px-8 lg:px-12 py-20 md:py-32 relative z-0">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-left">
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mb-6">
                  Get early access
                </h2>
                <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300">
                  Join the waitlist. We'll email you when the demo is ready.
                </p>
              </div>
              
              <div className="relative z-10">
                <LiquidGlassCard className="p-8" draggable={false}>
                  <WaitlistForm />
                </LiquidGlassCard>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
