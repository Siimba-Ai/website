"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion"
import { Check, X, RotateCcw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { trackEvents } from "@/lib/analytics"
import { LiquidGlass } from "@/components/ui/liquid-glass"

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

  const getVariant = (type: DecisionCard["type"]) => {
    switch (type) {
      case "email":
      case "social":
        return "pink"
      case "calendar":
      case "errand":
        return "green"
      default:
        return "default"
    }
  }

  if (isComplete) {
    return (
      <div className={cn("relative w-full", className)}>
        <LiquidGlass variant="green" intensity="lg" className="p-10 md:p-12 text-center border-2 border-sage/40 shadow-2xl">
          {showConfetti && <Confetti />}

          {/* Decorative gradient blob */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-sage/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[20px] glass-card-green border-2 border-sage/40">
              <Check className="h-10 w-10 text-sage" />
            </div>
            <h3 className="mb-3 text-3xl md:text-4xl font-bold text-charcoal">
              Done. Your day is staged.
            </h3>
            <p className="mb-6 text-lg md:text-xl text-charcoal/60 font-medium">
              {approvalCount} approved, {snoozeCount} snoozed
            </p>
            <Button onClick={handleReset} variant="outline" className="gap-2">
              <RotateCcw className="h-5 w-5" />
              Reset demo
            </Button>
          </div>
        </LiquidGlass>
      </div>
    )
  }

  return (
    <div className={cn("relative w-full", className)}>
      <LiquidGlass variant="elevated" intensity="lg" className="bg-white/10" >
        <div className="p-10 md:p-12 relative">
          <div className="relative h-[500px] md:h-[540px] lg:h-[580px]">
            {/* Stack preview (cards behind) */}
            {cards.slice(currentIndex + 1, currentIndex + 3).map((card, idx) => (
              <div
                key={card.id}
                className="absolute inset-0"
                style={{
                  transform: `translateY(${(idx + 1) * 10}px) scale(${1 - (idx + 1) * 0.04})`,
                  zIndex: cards.length - currentIndex - idx - 1,
                  opacity: 1 - (idx + 1) * 0.25,
                }}
              >
                <LiquidGlass
                  variant="default"
                  intensity="sm"
                  className="h-full rounded-[28px]"
                />
              </div>
            ))}

            {/* Active card */}
            {currentIndex < cards.length && (
              <SwipeableCard
                card={cards[currentIndex]}
                onApprove={handleApprove}
                onSnooze={handleSnooze}
                getVariant={getVariant}
              />
            )}
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              onClick={handleSnooze}
              variant="outline"
              size="lg"
              className="gap-2 flex-1 sm:flex-none rounded-[20px] relative overflow-hidden group"
              aria-label="Snooze this decision"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <X className="h-5 w-5 relative z-10" />
              <span className="relative z-10">{cards[currentIndex]?.snoozeLabel || "Snooze"}</span>
            </Button>
            <Button
              onClick={handleApprove}
              size="lg"
              className="gap-2 flex-1 sm:flex-none rounded-[20px] relative overflow-hidden group shadow-lg shadow-sage/30"
              aria-label="Approve this decision"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Check className="h-5 w-5 relative z-10" />
              <span className="relative z-10">{cards[currentIndex]?.approveLabel || "Approve"}</span>
            </Button>
          </div>

          {/* Progress indicator */}
          <div className="mt-6 flex justify-center gap-3">
            {cards.map((_, idx) => (
              <div
                key={idx}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 spring-transition",
                  idx < currentIndex
                    ? "w-2 bg-sage shadow-lg shadow-sage/40"
                    : idx === currentIndex
                      ? "w-8 glass-card-green border border-sage/40"
                      : "w-2 glass-card border border-white/40"
                )}
              />
            ))}
          </div>
        </div>
      </LiquidGlass>
    </div>
  )
}

interface SwipeableCardProps {
  card: DecisionCard
  onApprove: () => void
  onSnooze: () => void
  getVariant: (type: DecisionCard["type"]) => any
}

function SwipeableCard({
  card,
  onApprove,
  onSnooze,
  getVariant,
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

  const variant = getVariant(card.type)
  const badgeColor = variant === "pink" ? "bg-pink/40 text-charcoal border border-pink/50" :
    variant === "green" ? "bg-sage/40 text-charcoal border border-sage/50" :
      "bg-white/40 text-charcoal border border-white/50"

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
      <LiquidGlass
        variant={variant}
        intensity="md"
        className="h-full p-8 md:p-9 rounded-[28px]"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between mb-5">
            <Badge className={cn(badgeColor, "text-xs font-medium backdrop-blur-xl shadow-lg")}>{card.type}</Badge>
            <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-sage/60 flex-shrink-0" />
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-charcoal leading-tight mb-4">{card.title}</h3>
          <p className="text-base md:text-lg text-charcoal/70 leading-relaxed mb-5">{card.summary}</p>

          <div className="mt-auto">
            <p className="text-xs uppercase tracking-widest text-charcoal/40 font-semibold mb-3 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-sage/30 rounded-full" />
              Prepared
            </p>
            <LiquidGlass
              variant="default"
              intensity="sm"
              className="p-5 md:p-6 bg-gradient-to-br from-sage/20 to-sage/5 border-sage/30 rounded-[20px]"
            >
              <p className="text-sm md:text-base text-charcoal/80 leading-relaxed">{card.detail}</p>
            </LiquidGlass>
          </div>
        </div>

        {/* Swipe indicators with liquid glass */}
        <motion.div
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 rounded-[28px] p-3 sm:p-5 opacity-0"
          style={{
            opacity: useTransform(x, [-150, -50], [1, 0]),
            background: "linear-gradient(135deg, rgba(232, 180, 184, 0.9) 0%, rgba(232, 180, 184, 0.7) 100%)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "2px solid rgba(232, 180, 184, 0.6)",
            boxShadow: "0 8px 32px rgba(232, 180, 184, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.3), 0 0 40px rgba(232, 180, 184, 0.3)",
          }}
        >
          <X className="h-6 w-6 sm:h-8 sm:w-8 text-white drop-shadow-lg" />
        </motion.div>
        <motion.div
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 rounded-[28px] p-3 sm:p-5 opacity-0"
          style={{
            opacity: useTransform(x, [50, 150], [0, 1]),
            background: "linear-gradient(135deg, rgba(168, 197, 180, 0.9) 0%, rgba(168, 197, 180, 0.7) 100%)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "2px solid rgba(168, 197, 180, 0.6)",
            boxShadow: "0 8px 32px rgba(168, 197, 180, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.3), 0 0 40px rgba(168, 197, 180, 0.3)",
          }}
        >
          <Check className="h-6 w-6 sm:h-8 sm:w-8 text-white drop-shadow-lg" />
        </motion.div>
      </LiquidGlass>
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
