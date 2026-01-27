import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Terms of Service | Siimba",
  description: "Siimba's terms of service and usage guidelines.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Button>
        </Link>

        <article className="prose prose-lg mx-auto max-w-3xl">
          <h1>Terms of Service</h1>
          <p className="text-gray-600">Last updated: January 2026</p>

          <section>
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using Siimba, you agree to be bound by these
              Terms of Service. If you do not agree, do not use the service.
            </p>
          </section>

          <section>
            <h2>Description of Service</h2>
            <p>
              Siimba is an AI-powered assistant that helps you manage daily
              decisions by preparing decision cards based on your calendar,
              email, tasks, and other connected services. All actions require
              your explicit approval.
            </p>
          </section>

          <section>
            <h2>User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate information</li>
              <li>Keep your account credentials secure</li>
              <li>Review all suggestions before approving</li>
              <li>Use the service lawfully and ethically</li>
              <li>
                Not attempt to reverse-engineer or compromise the service
              </li>
            </ul>
          </section>

          <section>
            <h2>AI Assistant Disclaimer</h2>
            <p>
              Siimba is an AI assistant. While we strive for accuracy, the
              service may make mistakes. You are responsible for reviewing and
              approving all actions. Always use your judgment before sending
              messages, scheduling events, or taking other actions.
            </p>
          </section>

          <section>
            <h2>Account and Access</h2>
            <p>
              You are responsible for maintaining the security of your account.
              You must notify us immediately of any unauthorized access. You
              may not share your account with others.
            </p>
          </section>

          <section>
            <h2>Connected Services</h2>
            <p>
              You grant Siimba permission to access connected services (calendar,
              email, etc.) on your behalf. You can revoke these permissions at
              any time. We are not responsible for the availability or
              functionality of third-party services.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              Siimba is provided &quot;as is&quot; without warranties of any kind. We are
              not liable for any damages arising from your use of the service,
              including but not limited to: missed appointments, incorrect
              messages, data loss, or service interruptions.
            </p>
          </section>

          <section>
            <h2>Termination</h2>
            <p>
              You may terminate your account at any time. We reserve the right
              to suspend or terminate accounts that violate these terms or
              engage in harmful behavior.
            </p>
          </section>

          <section>
            <h2>Changes to Service</h2>
            <p>
              We may modify or discontinue the service at any time. We&apos;ll
              provide notice of significant changes when possible.
            </p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              All content, features, and functionality of Siimba are owned by
              us and are protected by copyright and other intellectual property
              laws.
            </p>
          </section>

          <section>
            <h2>Privacy</h2>
            <p>
              Your use of Siimba is also governed by our{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the jurisdiction in which
              Siimba operates. Any disputes shall be resolved through
              arbitration or in the courts of that jurisdiction.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about these terms? Contact us at{" "}
              <a href="mailto:legal@siimba.ai">legal@siimba.ai</a>.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
