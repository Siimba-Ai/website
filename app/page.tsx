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
    <main className="min-h-screen bg-background w-full overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full pt-32 sm:pt-36 md:pt-44 lg:pt-52 pb-20 sm:pb-24 md:pb-32 lg:pb-40">
        {/* Subtle minimal graphic background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4ade8018_1px,transparent_1px),linear-gradient(to_bottom,#4ade8018_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
        </div>
        
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[2400px] mx-auto">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-left"
            >
              <Badge>Early Access</Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.05] tracking-tight max-w-[20ch]">
                You wake up. You swipe yes 4 times. Your day is handled.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-[58ch]">
                Siimba prepares a small stack of decisions every morning. You approve, not juggle. Reduce decision fatigue and start your day staged.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="text-base md:text-lg px-8 py-6"
                  onClick={() => {
                    trackEvents.ctaClick("hero-primary")
                    document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Get early access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base md:text-lg px-8 py-6"
                  onClick={() => {
                    trackEvents.ctaClick("hero-secondary")
                    document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Watch the demo
                </Button>
              </div>
            </motion.div>

            {/* Right: Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full"
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
      <section id="waitlist" className="w-full py-24 md:py-32 section-divider">
        <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 max-w-[2400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left side: Text */}
              <div className="text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
                  Get early access
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed">
                  Join the waitlist. We&apos;ll email you when the demo is ready.
                </p>
              </div>
              
              {/* Right side: Form */}
              <div>
                <Card>
                  <CardContent className="pt-8 pb-8">
                    <WaitlistForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="w-full py-24 md:py-32 section-divider">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20"><div className="max-w-[2400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              How it works
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Siimba follows a simple review and approve model. You stay in control while reducing cognitive load.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
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
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded border border-border/40 text-foreground">
                      {step.icon}
                    </div>
                    <CardTitle className="text-xl md:text-2xl text-foreground">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Card className="mx-auto max-w-3xl border-border/30 bg-card/50">
              <CardContent className="pt-6 pb-6">
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  <strong>Proactive but bounded.</strong> Siimba suggests and drafts, but never acts without your approval. It reduces decision fatigue, not critical thinking.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div></div>
      </section>

      {false && (
        <>
      {/* ====== ARCHIVED SECTIONS (hidden for this version) ====== */}
      {/* Demo Section */}
      <section id="demo" className="w-full py-24 md:py-32 section-divider">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20"><div className="max-w-[2400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              Your day in 30 seconds
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
      <section id="why-siimba" className="w-full py-24 md:py-32 section-divider">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20"><div className="max-w-[2400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              Why Siimba
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded border border-border/40 text-foreground">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl md:text-2xl text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Card className="mx-auto max-w-3xl border-border/30 bg-card/50">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground/90 text-left leading-relaxed">
                    <strong>Built for creators and neurodivergent users.</strong> Our early community includes people managing complex, non-linear workflows. If you&apos;ve ever felt overwhelmed by productivity tools, this is for you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div></div>
      </section>

      {/* Security Section */}
      <section id="security" className="w-full py-24 md:py-32 section-divider">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20"><div className="max-w-[2400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              Security & Control
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                <Card>
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded border border-border/40 text-foreground">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl md:text-2xl text-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Card className="mx-auto max-w-3xl border-border/30 bg-card/50">
              <CardContent className="pt-6 pb-6">
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  <strong>Transparency first.</strong> Siimba is an AI assistant. Always review before sending or scheduling. We reduce friction, not replace your judgment.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div></div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-24 md:py-32 section-divider">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20"><div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
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
                <AccordionItem key={idx} value={`item-${idx}`} className="border-border/20">
                  <AccordionTrigger className="text-base md:text-lg text-foreground hover:text-foreground/80" onClick={() => trackEvents.faqOpened(faq.question)}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div></div>
      </section>
      {/* ====== END ARCHIVED SECTIONS ====== */}
        </>
      )}

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
