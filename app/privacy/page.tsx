import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Privacy Policy | Siimba",
  description: "Siimba's privacy policy and data handling practices.",
}

export default function PrivacyPage() {
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
          <h1>Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 2026</p>

          <section>
            <h2>Introduction</h2>
            <p>
              At Siimba, we take your privacy seriously. This policy describes
              how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li>Email address and contact information</li>
              <li>Calendar events and scheduling data</li>
              <li>Email content and metadata (when you grant access)</li>
              <li>Task and project information</li>
              <li>Usage data and preferences</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve the Siimba service</li>
              <li>Generate decision cards and suggestions</li>
              <li>Learn your preferences and patterns</li>
              <li>Communicate with you about the service</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              data:
            </p>
            <ul>
              <li>Encryption in transit (TLS/SSL)</li>
              <li>Encryption at rest</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
              <li>Secure data centers</li>
            </ul>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Revoke access to connected accounts</li>
              <li>Export your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>
              Siimba integrates with third-party services (calendar, email,
              task managers). We only access data you explicitly grant
              permission for. We do not sell your data to third parties.
            </p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>
              We retain your data as long as your account is active or as
              needed to provide services. You can request deletion at any time.
            </p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              Siimba is not intended for users under 13 years of age. We do not
              knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. We'll notify you of
              significant changes via email or through the service.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this policy, please contact us at{" "}
              <a href="mailto:privacy@siimba.ai">privacy@siimba.ai</a>.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
