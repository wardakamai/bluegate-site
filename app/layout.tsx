import type { Metadata } from 'next'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import { TopBar } from '@/components/layout/TopBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFab } from '@/components/layout/WhatsAppFab'
import { organizationSchema } from '@/lib/schema'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT', 'WONK'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Blue Gate Shipping and Trade B.V.',
    template: '%s | Blue Gate',
  },
  description:
    'Bulk liquid petroleum storage, terminal operations, and shipping. Rotterdam primary terminal. Jet A1, Diesel EN590, Fuel Oil D6, Crude Oil.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bluegou.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Blue Gate Shipping and Trade B.V.',
    title: 'Blue Gate Shipping and Trade B.V.',
    description:
      'Bulk liquid petroleum storage, terminal operations, and shipping from Rotterdam since 1964.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Gate Shipping and Trade B.V.',
    description:
      'Bulk liquid petroleum storage, terminal operations, and shipping from Rotterdam since 1964.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <TopBar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
      </body>

      {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
        <Script
          defer
          data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
          strategy="lazyOnload"
        />
      )}
    </html>
  )
}
