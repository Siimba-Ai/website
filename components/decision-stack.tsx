"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion"
import { Check, X, RotateCcw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { trackEvents } from "@/lib/analytics"

export interface DecisionCard {
  id: string
  type: "calendar" | "email" | "errand" | "social" | "task"
  title: string
  summary: string
  detail: string
  approveLabel?: string
  snoozeLabel?: string
}

interface DecisionStackProps {
  cards: DecisionCard[]
  onComplete?: (approvals: number, snoozes: number) => void
  className?: string
}

export function DecisionStack({ cards, onComplete, className }: DecisionStackProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [approvalCount, setApprovalCount] = React.useState(0)
  const [snoozeCount, setSnoozeCount] = React.useState(0)
  const [isComplete, setIsComplete] = React.useState(false)
  const [showConfetti, setShowConfetti] = React.useState(false)

  const handleApprove = () => {
    if (currentIndex < cards.length) {
      setApprovalCount((prev) => prev + 1)
      trackEvents.cardSwiped("approve")
      advanceCard()
    }
  }

  const handleSnooze = () => {
    if (currentIndex < cards.length) {
      setSnoozeCount((prev) => prev + 1)
      trackEvents.cardSwiped("snooze")
      advanceCard()
    }
  }

  const advanceCard = () => {
    const nextIndex = currentIndex + 1
    if (nextIndex >= cards.length) {
      setIsComplete(true)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
      onComplete?.(approvalCount + 1, snoozeCount)
    } else {
      setCurrentIndex(nextIndex)
    }
  }

  const handleReset = () => {
    setCurrentIndex(0)
    setApprovalCount(0)
    setSnoozeCount(0)
    setIsComplete(false)
    setShowConfetti(false)
  }

  const getTypeColor = (type: DecisionCard["type"]) => {
    switch (type) {
      case "calendar":
        return "bg-sage/30 text-charcoal border border-sage/40"
      case "email":
        return "bg-pink/30 text-charcoal border border-pink/40"
      case "errand":
        return "bg-sage/40 text-charcoal border border-sage/50"
      case "social":
        return "bg-pink/40 text-charcoal border border-pink/50"
      case "task":
        return "bg-beige/60 text-charcoal border border-beige"
      default:
        return "bg-white/40 text-charcoal border border-white/50"
    }
  }

  if (isComplete) {
    return (
      <div className={cn("relative w-full", className)}>
        <Card className="relative overflow-hidden glass-card-green p-8 md:p-10 text-center">
          {showConfetti && <Confetti />}
          <div className="relative z-10">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage/20">
              <Check className="h-8 w-8 text-sage" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-charcoal">
              Done. Your day is staged.
            </h3>
            <p className="mb-4 text-base text-charcoal/70">
              {approvalCount} approved, {snoozeCount} snoozed
            </p>
            <Button onClick={handleReset} variant="outline" className="gap-2 spring-transition">
              <RotateCcw className="h-4 w-4" />
              Reset demo
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div className="rounded-[32px] glass-elevated p-8 md:p-10 shadow-2xl">
        <div className="relative h-[500px] md:h-[540px] lg:h-[580px]">
        {/* Stack preview (cards behind) */}
        {cards.slice(currentIndex + 1, currentIndex + 3).map((card, idx) => (
          <div
            key={card.id}
            className="absolute inset-0"
            style={{
              transform: `translateY(${(idx + 1) * 8}px) scale(${1 - (idx + 1) * 0.05})`,
              zIndex: cards.length - currentIndex - idx - 1,
              opacity: 1 - (idx + 1) * 0.3,
            }}
          >
            <Card className="h-full glass-card" />
          </div>
        ))}

        {/* Active card */}
        {currentIndex < cards.length && (
          <SwipeableCard
            card={cards[currentIndex]}
            onApprove={handleApprove}
            onSnooze={handleSnooze}
            getTypeColor={getTypeColor}
          />
        )}
        </div>

        {/* Action buttons */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <Button
          onClick={handleSnooze}
          variant="outline"
          size="lg"
          className="gap-2 flex-1 sm:flex-none spring-transition hover:scale-105"
          aria-label="Snooze this decision"
        >
          <X className="h-5 w-5" />
          {cards[currentIndex]?.snoozeLabel || "Snooze"}
        </Button>
        <Button
          onClick={handleApprove}
          size="lg"
          className="gap-2 flex-1 sm:flex-none spring-transition hover:scale-105"
          aria-label="Approve this decision"
        >
          <Check className="h-5 w-5" />
          {cards[currentIndex]?.approveLabel || "Approve"}
        </Button>
      </div>

        {/* Progress indicator */}
        <div className="mt-4 flex justify-center gap-2">
          {cards.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                idx < currentIndex
                  ? "bg-primary"
                  : idx === currentIndex
                  ? "bg-primary/50"
                  : "bg-gray-200"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface SwipeableCardProps {
  card: DecisionCard
  onApprove: () => void
  onSnooze: () => void
  getTypeColor: (type: DecisionCard["type"]) => string
}

function SwipeableCard({
  card,
  onApprove,
  onSnooze,
  getTypeColor,
}: SwipeableCardProps) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-25, 25])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0])

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100
    if (Math.abs(info.offset.x) > threshold) {
      info.offset.x > 0 ? onApprove() : onSnooze()
    }
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x, rotate, opacity, zIndex: 100 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      dragElastic={0.7}
      whileTap={{ cursor: "grabbing" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Card className="h-full glass-card p-7 md:p-8 shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between mb-4">
            <Badge className={cn(getTypeColor(card.type), "text-xs font-medium backdrop-blur-md")}>{card.type}</Badge>
            <Sparkles className="h-5 w-5 text-sage/40 flex-shrink-0" />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-charcoal leading-tight mb-3">{card.title}</h3>
          <p className="text-sm md:text-base text-charcoal/70 leading-relaxed mb-4">{card.summary}</p>

          <div className="mt-auto">
            <p className="text-xs uppercase tracking-wider text-charcoal/40 font-medium mb-2">Prepared</p>
            <div className="rounded-2xl glass-card-green p-4 md:p-5 border border-sage/20">
              <p className="text-sm md:text-base text-charcoal/80 leading-relaxed">{card.detail}</p>
            </div>
          </div>
        </div>

        {/* Swipe indicators */}
        <motion.div
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 rounded-full bg-red-500 p-2 sm:p-4 opacity-0"
          style={{
            opacity: useTransform(x, [-150, -50], [1, 0]),
          }}
        >
          <X className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </motion.div>
        <motion.div
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 rounded-full bg-green-500 p-2 sm:p-4 opacity-0"
          style={{
            opacity: useTransform(x, [50, 150], [0, 1]),
          }}
        >
          <Check className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </motion.div>
      </Card>
    </motion.div>
  )
}

function Confetti() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full"
          style={{
            backgroundColor: [
              "#3b82f6",
              "#8b5cf6",
              "#ec4899",
              "#10b981",
              "#f59e0b",
            ][i % 5],
            left: `${Math.random() * 100}%`,
            top: -20,
          }}
          animate={{
            y: [0, 500],
            x: [0, (Math.random() - 0.5) * 200],
            rotate: [0, Math.random() * 360],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 1,
            delay: Math.random() * 0.5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
