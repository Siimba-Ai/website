"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion"
import { Check, X, RotateCcw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { trackEvents } from "@/lib/analytics"
import { LiquidGlassCard, LiquidGlassCardElevated } from "@/components/ui/liquid-glass"

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
        <LiquidGlassCardElevated className="relative overflow-hidden p-10 md:p-12 text-center border-2 border-sage/40 shadow-[0_8px_64px_rgba(168,197,180,0.2)]">
          {showConfetti && <Confetti />}

          {/* Magical glow orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-sage/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <LiquidGlassCard
              glowIntensity="md"
              shadowIntensity="lg"
              blurIntensity="md"
              borderRadius="24px"
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center border-2 border-sage/40"
            >
              <Check className="h-10 w-10 text-sage" />
            </LiquidGlassCard>
            <h3 className="mb-3 text-3xl md:text-4xl font-bold text-charcoal">
              Done. Your day is staged.
            </h3>
            <p className="mb-6 text-lg md:text-xl text-charcoal/60 font-medium">
              {approvalCount} approved, {snoozeCount} snoozed
            </p>
            <LiquidGlassCard
              glowIntensity="sm"
              shadowIntensity="md"
              blurIntensity="md"
              borderRadius="16px"
              className="inline-flex cursor-pointer hover:shadow-[0_0_40px_rgba(168,197,180,0.2)] transition-all duration-300"
              onClick={handleReset}
            >
              <div className="px-6 py-3 flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-charcoal/70" />
                <span className="font-medium text-charcoal/80">Reset demo</span>
              </div>
            </LiquidGlassCard>
          </div>
        </LiquidGlassCardElevated>
      </div>
    )
  }

  return (
    <div className={cn("relative w-full", className)}>
      {/* Magical floating glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-sage/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <LiquidGlassCardElevated className="p-10 md:p-12 relative shadow-[0_8px_80px_rgba(168,197,180,0.12),0_0_120px_rgba(255,255,255,0.08)]">
        {/* Inner floating orbs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-sage/5 rounded-full blur-2xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

        <div className="relative h-[500px] md:h-[540px] lg:h-[580px]">
        {/* Stack preview (cards behind) - clean scaling without rotation */}
        {cards.slice(currentIndex + 1, currentIndex + 3).map((card, idx) => (
          <div
            key={card.id}
            className="absolute inset-0 transition-all duration-500 ease-out"
            style={{
              transform: `translateY(${(idx + 1) * 10}px) scale(${1 - (idx + 1) * 0.04})`,
              zIndex: cards.length - currentIndex - idx - 1,
              opacity: 1 - (idx + 1) * 0.25,
            }}
          >
            <LiquidGlassCard
              glowIntensity="sm"
              shadowIntensity="md"
              blurIntensity="sm"
              borderRadius="28px"
              className="h-full"
            />
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

        {/* Glassy action buttons */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <LiquidGlassCard
          glowIntensity="sm"
          shadowIntensity="md"
          blurIntensity="md"
          borderRadius="20px"
          className="flex-1 sm:flex-none cursor-pointer group hover:shadow-[0_0_40px_rgba(232,180,184,0.15)] transition-all duration-300"
          onClick={handleSnooze}
        >
          <div className="px-6 py-3 flex items-center justify-center gap-2">
            <X className="h-5 w-5 text-charcoal/70 group-hover:text-pink transition-colors duration-300" />
            <span className="font-medium text-charcoal/80 group-hover:text-charcoal transition-colors duration-300">
              {cards[currentIndex]?.snoozeLabel || "Snooze"}
            </span>
          </div>
        </LiquidGlassCard>

        <LiquidGlassCard
          glowIntensity="md"
          shadowIntensity="lg"
          blurIntensity="md"
          borderRadius="20px"
          className="flex-1 sm:flex-none cursor-pointer group hover:shadow-[0_0_60px_rgba(168,197,180,0.25),0_0_100px_rgba(168,197,180,0.12)] transition-all duration-300 bg-gradient-to-br from-sage/15 to-sage/5"
          onClick={handleApprove}
        >
          <div className="px-6 py-3 flex items-center justify-center gap-2">
            <Check className="h-5 w-5 text-sage group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold text-charcoal group-hover:text-charcoal/90 transition-colors duration-300">
              {cards[currentIndex]?.approveLabel || "Approve"}
            </span>
          </div>
        </LiquidGlassCard>
      </div>

        {/* Progress indicator with glassy effects */}
        <div className="mt-6 flex justify-center gap-3">
          {cards.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "h-2 rounded-full transition-all duration-500 ease-out",
                idx < currentIndex
                  ? "w-2 bg-sage shadow-lg shadow-sage/40"
                  : idx === currentIndex
                  ? "w-8 glass-card-green border border-sage/40"
                  : "w-2 glass-card border border-white/40"
              )}
            />
          ))}
        </div>
      </LiquidGlassCardElevated>
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
  // Removed rotate for clean, non-wiggly movement
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
      style={{ x, opacity, zIndex: 100 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      dragElastic={0.5}
      whileTap={{ cursor: "grabbing" }}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
    >
      <LiquidGlassCard
        glowIntensity="lg"
        shadowIntensity="lg"
        blurIntensity="md"
        borderRadius="28px"
        className="h-full p-8 md:p-9"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between mb-5">
            <Badge className={cn(getTypeColor(card.type), "text-xs font-medium backdrop-blur-xl shadow-lg")}>{card.type}</Badge>
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
            <LiquidGlassCard
              glowIntensity="sm"
              shadowIntensity="sm"
              blurIntensity="sm"
              borderRadius="20px"
              className="p-5 md:p-6 bg-gradient-to-br from-sage/20 to-sage/5 border-sage/30"
            >
              <p className="text-sm md:text-base text-charcoal/80 leading-relaxed">{card.detail}</p>
            </LiquidGlassCard>
          </div>
        </div>

        {/* Glassy swipe indicators */}
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
      </LiquidGlassCard>
    </motion.div>
  )
}

function Confetti() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full"
          style={{
            backgroundColor: [
              "#A8C5B4", // sage
              "#E8B4B8", // pink
              "#A8C5B4", // sage
              "#E8B4B8", // pink
              "#F7F7F7", // beige
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
