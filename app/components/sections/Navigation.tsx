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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 [animation:nav-slide-down_0.3s_ease-out_both] ${scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-hairline' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="hover:scale-105 transition-transform duration-200">
          <Image src="/zuko.png" alt="Zuko" width={1257} height={359} className="h-10 w-auto" priority />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Features',  id: 'features'  },
            { label: 'Operator', id: 'ai-agents' },
            { label: 'Security',  id: 'security'  },
            { label: 'FAQ',       id: 'faq'       },
          ].map(({ label, id }, i) => (
            <a
              key={id}
              href={`/#${id}`}
              className="text-sm font-medium text-body hover:text-ink transition-colors relative group"
              style={{
                animationName: 'fade-in-down',
                animationDuration: '0.25s',
                animationTimingFunction: 'ease-out',
                animationFillMode: 'both',
                animationDelay: `${0.05 + i * 0.05}s`,
              }}
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <Link
          href="/waitlist"
          className="px-6 py-2.5 bg-ink text-cream-text rounded-full font-semibold text-sm hover:-translate-y-0.5 active:scale-95 hover:shadow-[0_6px_18px_rgba(56,48,24,0.22)] transition-all duration-200 shadow-[0_2px_8px_rgba(56,48,24,0.12)]"
        >
          Get Early Access
        </Link>
      </div>
    </nav>
  )
}
