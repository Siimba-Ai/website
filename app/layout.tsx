import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', weight: ['400', '600', '700'] })

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  )
}
