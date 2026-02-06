"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Loader2 } from "lucide-react"
import { trackEvents } from "@/lib/analytics"

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

      // Send to our API endpoint (which handles both email and Google Sheets)
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong")
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
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded border-2 border-foreground/20 bg-card/50 p-10 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-foreground/20">
          <Check className="h-8 w-8 text-foreground" />
        </div>
        <h3 className="mb-4 text-2xl md:text-3xl font-bold text-foreground">
          You&apos;re on the list!
        </h3>
        <p className="mb-6 text-lg md:text-xl text-muted-foreground">
          We&apos;ll email you when the demo is ready. No spam.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          size="lg"
          className="text-base"
        >
          Add another email
        </Button>
      </div>
    )
  }

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/siimba"

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="mb-3 block text-base md:text-lg font-medium text-foreground">
          Email address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          className="w-full h-12 text-base md:text-lg px-4"
          aria-describedby={error ? "email-error" : undefined}
        />
        {error && (
          <p id="email-error" className="mt-2 text-sm md:text-base text-destructive">
            {error}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="mb-3 block text-base md:text-lg font-medium text-foreground">
          I&apos;m using Siimba for:
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={isSubmitting}
          className="flex h-12 w-full rounded border border-input bg-background px-4 py-2 text-base md:text-lg text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
          className="mt-1 h-5 w-5 rounded border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
        <label htmlFor="interview" className="text-sm md:text-base text-muted-foreground">
          I&apos;m open to a 15-min user interview
        </label>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full h-12 text-base md:text-lg"
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

      <p className="text-center text-sm md:text-base text-muted-foreground">
        No spam. We email when the demo is ready.
      </p>

      <div className="text-center">
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base font-medium text-foreground hover:text-foreground/80 transition-colors underline-offset-4 hover:underline"
        >
          Or book a call to learn more →
        </a>
      </div>
    </form>
  )
}
