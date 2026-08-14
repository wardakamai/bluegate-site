import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { TopBar } from '@/components/layout/TopBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { AnimationProvider } from '@/components/layout/AnimationProvider';
import { PageTransition } from '@/components/layout/PageTransition';
import { TopBarPopup } from '@/components/layout/TopBarPopup';
import { organizationSchema } from '@/lib/schema';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT', 'WONK'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Blue Gate Tank Farm | Blue Gate Shipping and Trade B.V.',
    template: '%s | Blue Gate Tank Farm',
  },
  description:
    'Blue Gate Tank Farm provides specialist petroleum logistics, terminal services and commercial support for energy-sector clients from Rotterdam.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bluegou.com'),
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Blue Gate Tank Farm',
    title: 'Blue Gate Tank Farm | Petroleum Logistics Services',
    description:
      'Blue Gate Tank Farm provides specialist petroleum logistics, terminal services and commercial support for energy-sector clients from Rotterdam.',
    images: [
      {
        url: '/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Blue Gate Tank Farm — Petroleum Logistics Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Gate Tank Farm | Petroleum Logistics Services',
    description:
      'Blue Gate Tank Farm provides specialist petroleum logistics, terminal services and commercial support for energy-sector clients from Rotterdam.',
    images: ['/og/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '6733e5f94c4405b8',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="bg-page text-ink flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <AnimationProvider>
          <TopBarPopup />
          <TopBar />
          <Header />
          <main id="main-content" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <WhatsAppFab />
        </AnimationProvider>
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
  );
}
