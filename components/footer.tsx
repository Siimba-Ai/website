import { Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-2 text-xl font-bold text-white">Siimba</h3>
            <p className="text-sm text-gray-300">
              You wake up. You swipe yes 4 times. Your day is handled.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/privacy"
                className="text-sm text-gray-300 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-300 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/siimba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/siimba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Siimba. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
