import { Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-2 text-xl font-bold text-primary">Siimba</h3>
            <p className="text-sm text-gray-600">
              You wake up. You swipe yes 4 times. Your day is handled.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/siimba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/siimba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Siimba. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
