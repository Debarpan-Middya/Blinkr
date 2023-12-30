import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner';
import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: 'Blinkr - Livestreaming App for Instant Sharing',
  description: 'Experience Blinkr - The fastest and most engaging platform for live content sharing and streaming. Join now for real-time interactions and captivating broadcasts.',
  keywords: ['livestreaming', 'live content', 'streaming app', 'Blinkr', 'video sharing', 'real-time streaming', 'interactive broadcasts', 'live streaming platform'],
  author: 'Debarpan Middya',
  image: '/logo.svg',
  url: 'http://localhost:3000',
  type: 'website',
  site_name: 'Blinkr - Live Streaming App',
  robots: 'index, follow',
  og_title: 'Blinkr - Livestreaming App for Instant Sharing',
  og_description: 'Experience Blinkr - The fastest and most engaging platform for live content sharing and streaming. Join now for real-time interactions and captivating broadcasts.',
  og_image: '/logo.svg',
  og_url: 'http://localhost:3000',
  twitter_title: 'Blinkr - Livestreaming App for Instant Sharing',
  twitter_description: 'Experience Blinkr - The fastest and most engaging platform for live content sharing and streaming. Join now for real-time interactions and captivating broadcasts.',
  twitter_image: '/logo.svg',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark,  variables: { colorPrimary: '#ea580c' } }}>
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="zippy-theme"
          >
            <Toaster theme="light" position="bottom-right" closeButton richColors />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
