'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 [animation:nav-slide-down_0.6s_ease-out_both] ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="hover:scale-105 transition-transform duration-200">
          <Image src="/logo.png" alt="Zuko" width={0} height={0} sizes="100vw" className="h-10 w-auto" priority />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Features',  id: 'features'  },
            { label: 'AI Agents', id: 'ai-agents' },
            { label: 'Security',  id: 'security'  },
            { label: 'FAQ',       id: 'faq'       },
          ].map(({ label, id }, i) => (
            <a
              key={id}
              href={`/#${id}`}
              className="text-sm text-slate-400 hover:text-white transition-colors relative group"
              style={{
                animationName: 'fade-in-down',
                animationDuration: '0.5s',
                animationTimingFunction: 'ease-out',
                animationFillMode: 'both',
                animationDelay: `${0.1 + i * 0.1}s`,
              }}
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <Link
          href="/waitlist"
          className="px-6 py-2.5 bg-white text-slate-950 rounded-full font-semibold text-sm hover:bg-slate-200 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-200 shadow-lg shadow-white/10"
        >
          Get Early Access
        </Link>
      </div>
    </nav>
  )
}