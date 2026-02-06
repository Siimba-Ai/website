"use client"

import * as React from "react"
import { Mail, ArrowRight, Calendar, Sparkles } from "lucide-react"
import { trackEvents } from "@/lib/analytics"

interface WaitlistFormData {
  email: string
  useCase: string
  interview: boolean
  timestamp: string
}

export function WaitlistForm() {
  const [email, setEmail] = React.useState("")
  const [useCase, setUseCase] = React.useState("personal")
  const [openToInterview, setOpenToInterview] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [error, setError] = React.useState("")

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validation
    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      const formData: WaitlistFormData = {
        email,
        useCase,
        interview: openToInterview,
        timestamp: new Date().toISOString(),
      }

      // Get Google Sheets Web App URL from environment variable
      const sheetURL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL

      if (sheetURL) {
        // Send to Google Sheets
        const response = await fetch(sheetURL, {
          method: "POST",
          mode: "no-cors", // Required for Google Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        // Note: no-cors mode doesn't allow reading the response
        // We assume success if no error is thrown
      }

      // Also store in localStorage as backup
      const existingData = localStorage.getItem("siimba-waitlist") || "[]"
      const waitlist = JSON.parse(existingData)

      // Check if email already exists
      const emailExists = waitlist.some(
        (entry: WaitlistFormData) => entry.email === email
      )

      if (!emailExists) {
        waitlist.push(formData)
        localStorage.setItem("siimba-waitlist", JSON.stringify(waitlist))
      }

      trackEvents.waitlistJoined(useCase)

      setIsSuccess(true)
      setEmail("")
      setUseCase("personal")
      setOpenToInterview(false)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const calendlyUrl = "https://calendly.com/vrinda-siimba/30min"

  return (
    <div className="max-w-md mx-auto">
      <div className="glass-card-strong p-6 sm:p-8 hover:scale-[1.01] transition-transform duration-500">
        {/* Shimmer effect */}
        <div className="absolute inset-0 rounded-[var(--radius)] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 animate-shimmer opacity-30" />
        </div>

        <div className="relative">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse-soft" />
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground text-center">
              Get early access
            </h2>
          </div>
          <p className="text-foreground/70 text-center mb-6 sm:mb-8 text-sm sm:text-base">
            Join the waitlist. We&apos;ll email you when the demo is ready.
          </p>

          {isSuccess ? (
            <div className="text-center py-6 sm:py-8 animate-scale-in">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-success" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">
                You&apos;re on the list!
              </h3>
              <p className="text-foreground/70 text-sm sm:text-base">
                We&apos;ll reach out when Siimba is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Email Input */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <label className="block text-foreground/80 text-sm font-medium mb-2">
                  Email address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-foreground/40 group-focus-within:text-primary transition-colors duration-300" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="glass-input pl-10 sm:pl-12 text-sm sm:text-base"
                    required
                  />
                </div>
                {error && (
                  <p className="mt-2 text-sm text-destructive">{error}</p>
                )}
              </div>

              {/* Use Case Selection */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <label className="block text-foreground/80 text-sm font-medium mb-3">
                  I&apos;m using Siimba for:
                </label>
                <div className="flex gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setUseCase("personal")}
                    className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                      useCase === "personal"
                        ? "glass-button-primary text-foreground scale-[1.02]"
                        : "glass-button text-foreground/70 hover:scale-[1.02]"
                    }`}
                  >
                    Personal
                  </button>
                  <button
                    type="button"
                    onClick={() => setUseCase("work")}
                    className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                      useCase === "work"
                        ? "glass-button-primary text-foreground scale-[1.02]"
                        : "glass-button text-foreground/70 hover:scale-[1.02]"
                    }`}
                  >
                    Work
                  </button>
                </div>
              </div>

              {/* Interview Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={openToInterview}
                    onChange={(e) => setOpenToInterview(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-md border-2 transition-all duration-300 ${
                      openToInterview
                        ? "bg-primary/30 border-primary scale-110"
                        : "bg-foreground/5 border-foreground/30 group-hover:border-foreground/50 group-hover:scale-105"
                    }`}
                  >
                    {openToInterview && (
                      <svg
                        className="w-5 h-5 text-primary animate-scale-in"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-foreground/70 text-sm leading-snug group-hover:text-foreground/90 transition-colors duration-300">
                  I&apos;m open to a 15-min user interview
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full glass-button-primary text-foreground font-semibold py-3 sm:py-4 flex items-center justify-center gap-2 group animate-fade-in-up text-sm sm:text-base"
                style={{ animationDelay: "0.4s" }}
              >
                {isSubmitting ? "Joining..." : "Join waitlist"}
                {!isSubmitting && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
              </button>

              <p className="text-foreground/50 text-xs text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                No spam. We email when the demo is ready.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Book a call link */}
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 mt-5 sm:mt-6 text-foreground/70 hover:text-foreground transition-all duration-300 group"
      >
        <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-xs sm:text-sm">Or book a call to learn more</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  )
}
