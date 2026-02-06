"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Zap, CheckCircle2, Brain, Shield, Eye, Lock, Power, Sparkles, Target, Layers, Users, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DecisionStack, DecisionCard } from "@/components/decision-stack"
import { WaitlistForm } from "@/components/waitlist-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { trackEvents } from "@/lib/analytics"
import { LiquidGlass } from "@/components/ui/liquid-glass"
import { cn } from "@/lib/utils"

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

const demoCards: DecisionCard[] = [
  {
    id: "demo-1",
    type: "calendar",
    title: "Standup at 10am",
    summary: "Daily standup in 2 hours",
    detail: "Prep checklist ready: reviewed yesterday's commits, outlined blockers, drafted 3 talking points.",
    approveLabel: "Approve",
    snoozeLabel: "Edit",
  },
  {
    id: "demo-2",
    type: "email",
    title: "3 emails need replies",
    summary: "High priority messages waiting",
    detail: "Drafts ready. Sarah needs a meeting time, Tom needs a yes/no, legal needs a signature.",
    approveLabel: "Approve",
    snoozeLabel: "Review",
  },
  {
    id: "demo-3",
    type: "errand",
    title: "Groceries for the week",
    summary: "Running low on essentials",
    detail: "List ready from your meal plan: milk, eggs, bread, chicken, vegetables.",
    approveLabel: "Approve",
    snoozeLabel: "Edit",
  },
  {
    id: "demo-4",
    type: "social",
    title: "Check in with Mom",
    summary: "Been 5 days",
    detail: "Draft: 'Hey Mom! Hope you're well. Want to catch up this weekend? How's the garden?'",
    approveLabel: "Send",
    snoozeLabel: "Rewrite",
  },
]

export default function Home() {
  React.useEffect(() => {
    trackEvents.pageView("home")
  }, [])

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-20 md:pt-32 md:pb-32 min-h-[90vh] flex items-center justify-center overflow-hidden">

        {/* Abstract Background Elements - Subtle & Glassy */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink/20 rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sage/20 rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        </div>

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: Glass Slab with Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:col-span-12 xl:col-span-12 text-center"
            >
              <LiquidGlass variant="ultra" intensity="lg" className="inline-block p-8 md:p-16 backdrop-blur-[60px] border-white/30 shadow-[0_20px_80px_rgba(0,0,0,0.05)]">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal leading-[1.1] tracking-tight mb-8">
                  You wake up.<br />
                  You swipe yes.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-pink">
                    Your day is handled.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto font-medium mb-10">
                  Siimba prepares a small stack of decisions every morning. Approve, don't juggle.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="text-xl px-10 py-8 rounded-full bg-charcoal text-white hover:bg-charcoal/90 shadow-xl hover:scale-105 transition-all duration-300"
                    onClick={() => {
                      trackEvents.ctaClick("hero-primary")
                      document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Get early access
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-xl px-10 py-8 rounded-full border-2 border-charcoal/10 bg-white/50 backdrop-blur-md hover:bg-white/80 transition-all duration-300"
                    onClick={() => {
                      trackEvents.ctaClick("hero-secondary")
                      document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    How it works
                  </Button>
                </div>
              </LiquidGlass>
            </motion.div>

            {/* Centered below or floating: Demo Stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
              className="lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 mt-8"
            >
              <DecisionStack
                cards={heroCards}
                onComplete={(approvals, snoozes) => {
                  trackEvents.demoCompleted()
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="w-full py-20">
        <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 max-w-[2400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left side: Text */}
              <div className="text-left space-y-6">
                <div className="inline-block">
                  <Badge className="text-base px-4 py-2 backdrop-blur-xl border-pink/40 bg-pink/20">
                    Limited Spots
                  </Badge>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-charcoal leading-tight">
                  Get early access
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl text-charcoal/60 font-medium max-w-lg">
                  Join the waitlist. We'll email you when the demo is ready.
                </p>
              </div>

              {/* Right side: Form */}
              <div>
                <LiquidGlass variant="default" intensity="md" className="backdrop-blur-xl">
                  <div className="pt-8 pb-8 px-6">
                    <WaitlistForm />
                  </div>
                </LiquidGlass>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="w-full py-20">
        <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20"><div className="max-w-[2800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="text-center mb-20 space-y-6"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-charcoal leading-tight">
              How it works
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-charcoal/60 max-w-3xl mx-auto font-medium">
              Siimba follows a simple review and approve model. You stay in control while reducing cognitive load.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                number: "01",
                icon: <Zap className="h-10 w-10" />,
                title: "Nightly Synthesis",
                description: "While you sleep, Siimba reviews your calendar, emails, tasks, and patterns. It preps your day based on priorities and context.",
                accent: "pink",
              },
              {
                number: "02",
                icon: <Layers className="h-10 w-10" />,
                title: "Morning Stack",
                description: "Wake up to 4 to 10 decision cards. Prioritized, prepped, and ready. No dashboards. No endless scrolling.",
                accent: "sage",
              },
              {
                number: "03",
                icon: <CheckCircle2 className="h-10 w-10" />,
                title: "You Approve",
                description: "Swipe to approve, edit, or snooze. Siimba executes or drafts. You maintain agency without the juggling.",
                accent: "pink",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 30, delay: idx * 0.1 }}
                className="group h-full"
              >
                <LiquidGlass
                  variant={step.accent as any}
                  intensity="md"
                  className="relative overflow-hidden h-full spring-transition hover:scale-[1.02]"
                >
                  {/* Accent gradient overlay */}
                  <div className={cn(
                    "absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-30 spring-transition",
                    step.accent === "pink" ? "bg-pink" : "bg-sage"
                  )} />

                  <div className="relative p-6 pt-8 pb-8">
                    {/* Number indicator */}
                    <div className="absolute top-2 right-4 text-6xl md:text-7xl font-bold text-charcoal/5 select-none font-sans">
                      {step.number}
                    </div>

                    {/* Icon with glass background */}
                    <div className={cn(
                      "mb-6 flex h-20 w-20 items-center justify-center rounded-[20px] spring-transition group-hover:scale-110 border border-white/20",
                      step.accent === "pink" ? "glass-card-pink" : "glass-card-green",
                      step.accent === "pink" ? "text-pink" : "text-sage"
                    )}>
                      {step.icon}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-3 relative z-10 text-charcoal">
                      {step.title}
                    </h3>

                    <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </div>
                </LiquidGlass>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <LiquidGlass variant="green" intensity="md" className="mx-auto max-w-3xl border-2 border-sage/30 relative overflow-hidden">
              {/* Decorative blob */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-sage/20 rounded-full blur-3xl" />

              <div className="pt-8 pb-8 px-8 relative">
                <p className="text-xl md:text-2xl text-charcoal leading-relaxed">
                  <strong className="font-bold text-charcoal">Proactive but bounded.</strong> Siimba suggests and drafts, but never acts without your approval. It reduces decision fatigue, not critical thinking.
                </p>
              </div>
            </LiquidGlass>
          </motion.div>
        </div></div>
      </section>


      <>
        {/* ====== ARCHIVED SECTIONS (hidden for this version) ====== */}
        {/* Demo Section */}
        <section id="demo" className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20"><div className="max-w-[2800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-4">
                Your day in 30 seconds
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto">
                Experience a typical morning with Siimba. Swipe through decisions and watch your day get staged.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mx-auto"
            >
              <DecisionStack
                cards={demoCards}
                onComplete={() => {
                  trackEvents.demoCompleted()
                }}
              />
            </motion.div>
          </div></div>
        </section>

        {/* Why Siimba Section */}
        <section id="why-siimba" className="w-full py-20 bg-white">
          <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20"><div className="max-w-[2800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-4">
                Why Siimba
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto">
                Built for people who think different. Designed for busy brains.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Target className="h-6 w-6" />,
                  title: "Decision Cards, not dashboards",
                  description: "Swipe through focused decisions instead of context switching across endless tabs and tools.",
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "Proactive, not naggy",
                  description: "Siimba prepares what you need when you need it. No constant notifications. No pestering.",
                },
                {
                  icon: <Brain className="h-6 w-6" />,
                  title: "Memory that gets better",
                  description: "Learns your preferences, patterns, and priorities. The more you use it, the smarter it gets.",
                },
                {
                  icon: <Layers className="h-6 w-6" />,
                  title: "Works across your tools",
                  description: "Connects to your calendar, email, tasks, and notes. One interface for everything.",
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Bounded autonomy",
                  description: "Never acts without approval. You're always in control. It suggests, you decide.",
                },
                {
                  icon: <Sparkles className="h-6 w-6" />,
                  title: "Designed for busy brains",
                  description: "Built with ADHD and neurodivergent users in mind. Reduce overwhelm and decision paralysis.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="h-full"
                >
                  <LiquidGlass variant="default" intensity="sm" className="h-full hover:scale-[1.02] spring-transition p-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/20 text-charcoal">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-charcoal">{feature.title}</h3>

                    <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed">{feature.description}</p>
                  </LiquidGlass>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <LiquidGlass variant="pink" intensity="sm" className="mx-auto max-w-3xl border-pink/30">
                <div className="p-8 flex items-start gap-4">
                  <Users className="h-6 w-6 text-pink mt-1 flex-shrink-0" />
                  <p className="text-lg md:text-xl text-charcoal text-left leading-relaxed">
                    <strong>Built for creators and neurodivergent users.</strong> Our early community includes people managing complex, non-linear workflows. If you've ever felt overwhelmed by productivity tools, this is for you.
                  </p>
                </div>
              </LiquidGlass>
            </motion.div>
          </div></div>
        </section>

        {/* Security Section */}
        <section id="security" className="w-full py-20 bg-gray-50">
          <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20"><div className="max-w-[2800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-4">
                Security & Control
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto">
                You&apos;re always in the driver&apos;s seat. Here&apos;s how we keep it that way.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: <CheckCircle2 className="h-6 w-6" />,
                  title: "Human in the loop approvals",
                  description: "Every action requires your explicit approval. Siimba drafts and suggests; you decide and execute.",
                },
                {
                  icon: <Eye className="h-6 w-6" />,
                  title: "Just in time permissions",
                  description: "Siimba only asks for access when needed. You grant permissions per action, not upfront.",
                },
                {
                  icon: <Power className="h-6 w-6" />,
                  title: "Kill switch",
                  description: "One button to pause all activity. Disconnect any tool instantly. Full control, always.",
                },
                {
                  icon: <Lock className="h-6 w-6" />,
                  title: "You control connected accounts",
                  description: "Manage what Siimba can see and do. Revoke access anytime from your dashboard.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <LiquidGlass variant="default" intensity="sm" className="h-full p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100/50 text-green-700">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-charcoal">{item.title}</h3>

                    <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed">{item.description}</p>
                  </LiquidGlass>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <LiquidGlass variant="default" intensity="sm" className="mx-auto max-w-3xl border-amber-200/50 bg-amber-50/30">
                <div className="p-8">
                  <p className="text-xl md:text-2xl text-charcoal">
                    <strong>Transparency first.</strong> Siimba is an AI assistant. Always review before sending or scheduling. We reduce friction, not replace your judgment.
                  </p>
                </div>
              </LiquidGlass>
            </motion.div>
          </div></div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 bg-white">
          <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20"><div className="max-w-[2000px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Accordion type="single">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-xl md:text-2xl" onClick={() => trackEvents.faqOpened(faq.question)}>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg md:text-xl">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div></div>
        </section>
        {/* ====== END ARCHIVED SECTIONS ====== */}
      </>


      <Footer />
    </main>
  )
}



const faqs = [
  {
    question: "Is Siimba autonomous?",
    answer: "No. Siimba is proactive, not autonomous. It prepares decisions and drafts actions, but always waits for your approval. You control every step.",
  },
  {
    question: "What apps does it integrate with?",
    answer: "Siimba connects to your calendar (Google, Outlook), email (Gmail, Outlook), task managers (Todoist, Asana, Notion), and more. We add integrations based on user feedback.",
  },
  {
    question: "Does it replace my calendar or task manager?",
    answer: "No. Siimba sits on top of your existing tools. It orchestrates them instead of replacing them. Think of it as a layer that reduces context switching and decision fatigue.",
  },
  {
    question: "How is my data handled?",
    answer: "Your data is encrypted in transit and at rest. Siimba only accesses what you explicitly grant permission for. You can revoke access anytime. We never sell your data.",
  },
  {
    question: "Can I use it if I'm not productivity obsessed?",
    answer: "Absolutely. Siimba is for people who want to spend less time managing their day and more time living it. If you've ever felt overwhelmed by your to-do list, this is for you.",
  },
  {
    question: "What's in the MVP vs the future roadmap?",
    answer: "MVP focuses on decision cards for calendar, email, and tasks. Future features include voice input, mobile app, deeper integrations, and collaborative decision flows for teams.",
  },
  {
    question: "What's the pricing?",
    answer: "We're finalizing pricing. Early access users get grandfathered rates. Expect a freemium model with premium features for power users.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Not yet, but it's on the roadmap. The web app is mobile responsive for now. Native iOS and Android apps are planned for later this year.",
  },
  {
    question: "What if Siimba makes a mistake?",
    answer: "That's why you approve everything. If something looks off, edit or snooze it. Your feedback helps it learn.",
  },
  {
    question: "How do I get started?",
    answer: "Join the waitlist below. We onboard users in small batches to ensure quality. You'll get an email when it's your turn.",
  },
]
