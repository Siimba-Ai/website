import { Mail, FileText, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 px-4 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              Siimba
            </h3>
            <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
              You wake up. You swipe yes 4 times. Your day is handled.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground/80 mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <div className="space-y-3">
              <a
                href="/privacy"
                className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-all duration-300 text-xs sm:text-sm group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass-icon-button flex items-center justify-center">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" strokeWidth={2.5} />
                </div>
                <span>Privacy Policy</span>
              </a>
              <a
                href="/terms"
                className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-all duration-300 text-xs sm:text-sm group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass-icon-button flex items-center justify-center">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" strokeWidth={2.5} />
                </div>
                <span>Terms of Service</span>
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground/80 mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
            <a
              href="mailto:vrinda@siimba.ai"
              className="flex w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass-icon-button items-center justify-center"
              aria-label="Email vrinda@siimba.ai"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-foreground/10">
          <p className="text-foreground/50 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} Siimba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
