"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Loader2 } from "lucide-react"
import { trackEvents } from "@/lib/analytics"
import { LiquidGlass } from "@/components/ui/liquid-glass"

interface WaitlistFormData {
  email: string
  category: string
  interview: boolean
  timestamp: string
}

const categories = [
  { value: "personal", label: "Personal" },
  { value: "work", label: "Work" },
  { value: "creator", label: "Creator" },
  { value: "student", label: "Student" },
  { value: "other", label: "Other" },
]

export function WaitlistForm() {
  const [email, setEmail] = React.useState("")
  const [category, setCategory] = React.useState("personal")
  const [interview, setInterview] = React.useState(false)
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
        category,
        interview,
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

      trackEvents.waitlistJoined(category)

      setIsSuccess(true)
      setEmail("")
      setCategory("personal")
      setInterview(false)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <LiquidGlass variant="green" intensity="md" className="p-10 text-center border border-sage/30">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sage/30 backdrop-blur-md">
          <Check className="h-8 w-8 text-sage" />
        </div>
        <h3 className="mb-4 text-3xl md:text-4xl font-bold text-charcoal">
          You&apos;re on the list!
        </h3>
        <p className="mb-6 text-xl md:text-2xl text-charcoal/70">
          We&apos;ll email you when the demo is ready. No spam.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          size="lg"
          className="text-lg"
        >
          Add another email
        </Button>
      </LiquidGlass>
    )
  }

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/siimba"

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="email" className="mb-3 block text-xl md:text-2xl font-semibold text-charcoal">
          Email address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          className="w-full text-lg md:text-xl"
          aria-describedby={error ? "email-error" : undefined}
        />
        {error && (
          <p id="email-error" className="mt-2 text-base md:text-lg text-pink font-medium">
            {error}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="mb-3 block text-xl md:text-2xl font-semibold text-charcoal">
          I&apos;m using Siimba for:
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={isSubmitting}
          className="flex h-14 w-full rounded-2xl border border-charcoal/20 glass-card px-4 py-3 text-lg md:text-xl text-charcoal spring-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="interview"
          checked={interview}
          onChange={(e) => setInterview(e.target.checked)}
          disabled={isSubmitting}
          className="mt-1 h-5 w-5 rounded border-sage/30 text-sage focus:ring-2 focus:ring-sage spring-transition"
        />
        <label htmlFor="interview" className="text-lg md:text-xl text-charcoal/80">
          I&apos;m open to a 15-min user interview
        </label>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full h-14 text-xl md:text-2xl shadow-lg hover:shadow-xl"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Joining...
          </>
        ) : (
          "Join waitlist"
        )}
      </Button>

      <p className="text-center text-base md:text-lg text-charcoal/60">
        No spam. We email when the demo is ready.
      </p>

      <div className="text-center">
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg md:text-xl font-semibold text-sage hover:text-sage/80 spring-transition"
        >
          Or book a call to learn more →
        </a>
      </div>
    </form>
  )
}
