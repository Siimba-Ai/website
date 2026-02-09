import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', weight: ['400', '600', '700'] })
const GA_MEASUREMENT_ID = 'G-BET3WGN6Y8'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Siimba | You wake up. You swipe yes 4 times. Your day is handled.',
  description: 'Siimba prepares a small stack of decisions every morning so you can approve, not juggle. Reduce decision fatigue and start your day staged.',
  keywords: ['AI assistant', 'productivity', 'decision management', 'ADHD', 'task management', 'daily planning'],
  authors: [{ name: 'Siimba' }],
  icons: {
    icon: '/static/sii-logo.png',
    shortcut: '/static/sii-logo.png',
    apple: '/static/sii-logo.png',
  },
  openGraph: {
    title: 'Siimba | You wake up. You swipe yes 4 times. Your day is handled.',
    description: 'Siimba prepares a small stack of decisions every morning so you can approve, not juggle.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Siimba',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siimba | You wake up. You swipe yes 4 times. Your day is handled.',
    description: 'Siimba prepares a small stack of decisions every morning so you can approve, not juggle.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased overflow-x-hidden w-full">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            window.siimbaTrack = function(event, properties) {
              gtag('event', event, properties || {});
            };
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
