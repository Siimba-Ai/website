"use client"

import { Sparkles, X, Check } from "lucide-react"
import { useRef, useState } from "react"
import { trackEvents } from "@/lib/analytics"

const demoCards = [
  {
    category: "calendar",
    title: "Standup at 10am",
    subtitle: "Your daily standup is in 2 hours",
    prepared: "Prep checklist ready: reviewed yesterday's commits, outlined blockers, drafted 3 talking points.",
  },
  {
    category: "email",
    title: "Reply to Sarah",
    subtitle: "About the Q2 roadmap proposal",
    prepared: "Draft ready: confirmed timeline, addressed budget concerns, suggested Friday sync.",
  },
  {
    category: "task",
    title: "Review PR #247",
    subtitle: "Auth refactor from Alex",
    prepared: "Summary ready: 12 files changed, tests passing, 2 minor suggestions drafted.",
  },
  {
    category: "focus",
    title: "Deep work block",
    subtitle: "2 hours blocked for project Alpha",
    prepared: "Environment staged: Slack paused, playlist queued, notes from yesterday loaded.",
  },
]

export function DemoCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [editedText, setEditedText] = useState("")
  const hasTrackedDemoStart = useRef(false)
  const hasTrackedEditForCard = useRef<Record<number, boolean>>({})

  const trackDemoStartIfNeeded = () => {
    if (!hasTrackedDemoStart.current) {
      hasTrackedDemoStart.current = true
      trackEvents.demoStarted()
    }
  }

  const handleAction = (action: "approve" | "edit") => {
    trackDemoStartIfNeeded()
    const card = demoCards[currentIndex]
    trackEvents.demoCardAction(action === "edit" ? "reject" : action, card.category, currentIndex + 1)
    if (currentIndex === demoCards.length - 1) {
      trackEvents.demoCompleted()
    }

    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % demoCards.length)
      setEditedText("")
      setIsAnimating(false)
    }, 300)
  }

  const card = demoCards[currentIndex]
  const displayText = editedText || card.prepared

  return (
    <div className="w-full max-w-[360px] sm:max-w-md">
      <div
        className={`glass-card-strong p-5 sm:p-6 transition-all duration-300 ${
          isAnimating ? "opacity-0 scale-95 translate-x-4" : "opacity-100 scale-100 translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <span className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium text-primary bg-primary/10 rounded-full">
            {card.category}
          </span>
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary/50" />
        </div>

        {/* Title */}
        <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1">
          {card.title}
        </h3>
        <p className="text-foreground/60 text-xs sm:text-sm mb-6 sm:mb-8">{card.subtitle}</p>

        {/* Prepared section */}
        <div className="mb-5 sm:mb-6">
          <span className="text-[10px] sm:text-xs font-semibold text-foreground/40 tracking-wider uppercase">
            Prepared
          </span>
          <div className="mt-2 p-3 sm:p-4 rounded-xl bg-foreground/5 border border-foreground/10">
            <textarea
              value={displayText}
              onChange={(e) => {
                trackDemoStartIfNeeded()
                if (!hasTrackedEditForCard.current[currentIndex]) {
                  hasTrackedEditForCard.current[currentIndex] = true
                  trackEvents.demoEdited(card.category)
                }
                setEditedText(e.target.value)
              }}
              className="w-full text-foreground/80 text-xs sm:text-sm leading-relaxed bg-transparent border-none outline-none resize-none"
              rows={3}
              placeholder={card.prepared}
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={() => handleAction("edit")}
            className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl border border-foreground/20 text-foreground/70 font-medium hover:bg-foreground/5 transition-colors text-sm"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Reject
          </button>
          <button
            onClick={() => handleAction("approve")}
            className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-sm"
          >
            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Approve
          </button>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
        {demoCards.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              trackDemoStartIfNeeded()
              trackEvents.demoCardJump(i + 1)
              setCurrentIndex(i)
            }}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "bg-primary w-3 sm:w-4"
                : "bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
