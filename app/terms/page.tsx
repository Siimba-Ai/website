import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service | Siimba",
  description: "Siimba's terms of service and usage guidelines.",
}

export default function TermsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat blur-lg scale-105"
        style={{ backgroundImage: "url(/hero-bg.jpg)" }}
      />
      {/* Blue tint overlay */}
      <div className="fixed inset-0 bg-primary/10" />

      {/* Content */}
      <div className="relative z-10">
        <main className="min-h-screen py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mb-8 text-sm sm:text-base">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <article className="glass-card-strong p-6 sm:p-8 md:p-12 space-y-8">
              <div className="space-y-4">
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Terms of Service</h1>
                <p className="text-foreground/60 text-sm sm:text-base">Last updated: January 2026</p>
              </div>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Acceptance of Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  By accessing or using Siimba, you agree to be bound by these
                  Terms of Service. If you do not agree, do not use the service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Description of Service</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Siimba is an AI-powered assistant that helps you manage daily
                  decisions by preparing decision cards based on your calendar,
                  email, tasks, and other connected services. All actions require
                  your explicit approval.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">User Responsibilities</h2>
                <p className="text-foreground/80 leading-relaxed">You agree to:</p>
                <ul className="space-y-2 text-foreground/80 leading-relaxed list-none">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Provide accurate information</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Keep your account credentials secure</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Review all suggestions before approving</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Use the service lawfully and ethically</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                    Not attempt to reverse-engineer or compromise the service
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">AI Assistant Disclaimer</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Siimba is an AI assistant. While we strive for accuracy, the
                  service may make mistakes. You are responsible for reviewing and
                  approving all actions. Always use your judgment before sending
                  messages, scheduling events, or taking other actions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Account and Access</h2>
                <p className="text-foreground/80 leading-relaxed">
                  You are responsible for maintaining the security of your account.
                  You must notify us immediately of any unauthorized access. You
                  may not share your account with others.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Connected Services</h2>
                <p className="text-foreground/80 leading-relaxed">
                  You grant Siimba permission to access connected services (calendar,
                  email, etc.) on your behalf. You can revoke these permissions at
                  any time. We are not responsible for the availability or
                  functionality of third-party services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Limitation of Liability</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Siimba is provided &quot;as is&quot; without warranties of any kind. We are
                  not liable for any damages arising from your use of the service,
                  including but not limited to: missed appointments, incorrect
                  messages, data loss, or service interruptions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Termination</h2>
                <p className="text-foreground/80 leading-relaxed">
                  You may terminate your account at any time. We reserve the right
                  to suspend or terminate accounts that violate these terms or
                  engage in harmful behavior.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Changes to Service</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may modify or discontinue the service at any time. We&apos;ll
                  provide notice of significant changes when possible.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Intellectual Property</h2>
                <p className="text-foreground/80 leading-relaxed">
                  All content, features, and functionality of Siimba are owned by
                  us and are protected by copyright and other intellectual property
                  laws.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Privacy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Your use of Siimba is also governed by our{" "}
                  <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Governing Law</h2>
                <p className="text-foreground/80 leading-relaxed">
                  These terms are governed by the laws of the jurisdiction in which
                  Siimba operates. Any disputes shall be resolved through
                  arbitration or in the courts of that jurisdiction.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Contact</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Questions about these terms? Contact us at{" "}
                  <a href="mailto:legal@siimba.ai" className="text-primary hover:underline">legal@siimba.ai</a>.
                </p>
              </section>
            </article>
          </div>
        </main>
      </div>
    </div>
  )
}
