'use client'

import { useState } from 'react'
import Link from 'next/link'
import BackgroundEffects from '../components/sections/BackgroundEffects'
import Navigation from '../components/sections/Navigation'
import { ArrowRight, Clock, Sparkles } from 'lucide-react'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSubmitted(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen flex flex-col">
      <BackgroundEffects />
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-6 pt-20 pb-12">
        <div className="max-w-2xl w-full text-center">

          {!submitted ? (
            <div style={{ animation: 'fade-up 0.6s ease-out both' }}>

              {/* Qualifier badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-10">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <span>Designed for founders, operators, and small teams.</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Zuko is
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  opening soon.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl font-semibold text-slate-300 mb-4">
                We&apos;re granting early access in small batches.
              </p>

              {/* Supporting line */}
              <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Join the waitlist and we&apos;ll invite you as soon as a spot opens.
              </p>

              {/* Email form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-5"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-4 rounded-full bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:bg-slate-800 transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-7 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-white text-sm shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Get on the list <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>

              {/* Inline error */}
              {error && (
                <p className="text-sm text-rose-400 mb-3">{error}</p>
              )}

              {/* Benefit reminder */}
              <p className="text-sm text-slate-500 mb-3 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                One invitation per batch — early users get priority access to new features.
              </p>

              {/* Microcopy */}
              <p className="text-xs text-slate-600">
                No spam. No sharing your email. Just your invite when a spot opens.
              </p>
            </div>
          ) : (
            /* Success state */
            <div style={{ animation: 'fade-up 0.6s ease-out both' }}>
              <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-8">
                <svg
                  className="w-9 h-9 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                You&apos;re on the list.
              </h2>

              <p className="text-xl text-slate-300 mb-3">
                We&apos;ll be in touch as soon as access opens up.
              </p>

              <p className="text-slate-400 mb-12">
                Keep an eye on your inbox — invitations go out in batches.
              </p>

              <Link
                href="/"
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-4"
              >
                ← Back to home
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
