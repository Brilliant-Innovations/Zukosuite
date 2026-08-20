import type { Metadata } from 'next'
import { Archivo, Instrument_Sans } from 'next/font/google'
import './globals.css'
import AnimationObserver from './components/AnimationObserver'

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', display: 'swap' })
const instrument = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument', display: 'swap' })

const fontVars = archivo.variable + ' ' + instrument.variable

const description =
  'Zuko is your inbox, CRM, projects, finance, and calendar — one client-work layer. It drafts the next step; you approve before anything goes out.'

const siteUrl = 'https://zukosuite.com'
const siteTitle = 'Zuko — Your next move, already drafted'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s — Zuko',
  },
  description,
  applicationName: 'Zuko',
  keywords: [
    'client work platform', 'AI operator', 'inbox CRM projects finance calendar',
    'small business automation', 'agency operations', 'consultant workflow',
    'AI drafted follow-ups', 'Zuko', 'Zukosuite',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: siteTitle,
    description,
    url: '/',
    siteName: 'Zuko',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: siteTitle }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description,
    images: ['/og.png'],
  },
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zuko',
  alternateName: 'Zukosuite',
  url: siteUrl,
  logo: `${siteUrl}/zuko.png`,
}

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Zuko',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: siteUrl,
  description,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free during early access' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" data-scroll-behavior="smooth" className={fontVars}>
      <body className="font-sans bg-cream text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationLd, softwareLd]) }}
        />
        <AnimationObserver />
        {children}
      </body>
    </html>
  )
}
