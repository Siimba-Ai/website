import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Siimba",
  description: "Siimba's privacy policy and data handling practices.",
}

export default function PrivacyPage() {
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
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Privacy Policy</h1>
                <p className="text-foreground/60 text-sm sm:text-base">Last updated: January 2026</p>
              </div>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Introduction</h2>
                <p className="text-foreground/80 leading-relaxed">
                  At Siimba, we take your privacy seriously. This policy describes
                  how we collect, use, and protect your personal information.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Information We Collect</h2>
                <p className="text-foreground/80 leading-relaxed">We collect information you provide directly to us, including:</p>
                <ul className="space-y-2 text-foreground/80 leading-relaxed list-none">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Email address and contact information</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Calendar events and scheduling data</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Email content and metadata (when you grant access)</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Task and project information</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Usage data and preferences</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">How We Use Your Information</h2>
                <p className="text-foreground/80 leading-relaxed">We use the information we collect to:</p>
                <ul className="space-y-2 text-foreground/80 leading-relaxed list-none">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Provide and improve the Siimba service</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Generate decision cards and suggestions</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Learn your preferences and patterns</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Communicate with you about the service</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Ensure security and prevent fraud</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Data Security</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We implement industry-standard security measures to protect your
                  data:
                </p>
                <ul className="space-y-2 text-foreground/80 leading-relaxed list-none">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Encryption in transit (TLS/SSL)</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Encryption at rest</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Regular security audits</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Access controls and authentication</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Secure data centers</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Your Rights</h2>
                <p className="text-foreground/80 leading-relaxed">You have the right to:</p>
                <ul className="space-y-2 text-foreground/80 leading-relaxed list-none">
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Access your personal data</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Correct inaccurate data</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Request deletion of your data</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Revoke access to connected accounts</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Export your data</li>
                  <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Opt out of marketing communications</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Third-Party Services</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Siimba integrates with third-party services (calendar, email,
                  task managers). We only access data you explicitly grant
                  permission for. We do not sell your data to third parties.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Data Retention</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We retain your data as long as your account is active or as
                  needed to provide services. You can request deletion at any time.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Children&apos;s Privacy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Siimba is not intended for users under 13 years of age. We do not
                  knowingly collect information from children.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Changes to This Policy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may update this policy from time to time. We&apos;ll notify you of
                  significant changes via email or through the service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Contact Us</h2>
                <p className="text-foreground/80 leading-relaxed">
                  If you have questions about this policy, please contact us at{" "}
                  <a href="mailto:privacy@siimba.ai" className="text-primary hover:underline">privacy@siimba.ai</a>.
                </p>
              </section>
            </article>
          </div>
        </main>
      </div>
    </div>
  )
}
