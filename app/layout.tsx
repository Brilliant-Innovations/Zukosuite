import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AnimationObserver from './components/AnimationObserver'

const inter = Inter({ subsets: ['latin'] })

const description =
  'Zuko connects your inbox, CRM, projects, finance, and calendar into one client-work layer. It drafts the next step — you approve before anything goes out.'

export const metadata: Metadata = {
  metadataBase: new URL('https://zuko.ai'),
  title: 'Zuko — Your next move, already drafted',
  description,
  openGraph: {
    title: 'Zuko — Your next move, already drafted',
    description,
    url: '/',
    siteName: 'Zuko',
    images: ['/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Zuko — Your next move, already drafted',
    description,
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        <AnimationObserver />
        {children}
      </body>
    </html>
  )
}