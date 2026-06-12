import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AnimationObserver from './components/AnimationObserver'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zuko - AI That Runs Your Business',
  description: 'Zuko replaces your CRM, inbox, invoicing, projects, and calendar — connected through AI that executes the busywork.',
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