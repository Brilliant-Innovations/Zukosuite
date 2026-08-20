'use client'

import { useState } from 'react'
import Link from 'next/link'
import BackgroundEffects from '../components/sections/BackgroundEffects'
import Navigation from '../components/sections/Navigation'
import { ArrowRight, Clock, Sparkles } from 'lucide-react'

export default function WaitlistForm() {
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
            <div style={{ animation: 'fade-up 0.3s ease-out both' }}>

              {/* Qualifier badge */}
              <div className="inline-flex items-center gap-2.5 text-red-deep mb-10">
                <Sparkles className="w-3.5 h-3.5 fill-current flex-shrink-0" />
                <span className="text-xs font-bold tracking-[0.18em] uppercase">Designed for founders, operators, and small teams.</span>
              </div>

              {/* Headline */}
              <h1 className="font-display font-black text-5xl md:text-7xl leading-[1.04] tracking-[-0.035em] text-ink mb-6">
                <span>Zuko is</span>
                <br />
                <span className="marker">opening soon.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl font-semibold text-ink mb-4">
                We&apos;re granting early access in small batches.
              </p>

              {/* Supporting line */}
              <p className="text-lg text-body mb-10 max-w-xl mx-auto leading-relaxed">
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
                  className="flex-1 px-5 py-4 rounded-full bg-paper border-[1.5px] border-card-border text-ink placeholder:text-muted focus:outline-none focus:border-teal focus:bg-white transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-7 py-4 bg-ink rounded-full font-semibold text-cream-text text-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 active:scale-95 hover:shadow-[0_8px_24px_rgba(56,48,24,0.25)] transition-all duration-200 shadow-[0_4px_14px_rgba(56,48,24,0.15)] disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-cream-text/30 border-t-cream-text rounded-full animate-spin" />
                  ) : (
                    <>Get on the list <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>

              {/* Inline error */}
              {error && (
                <p className="text-sm text-red-deep mb-3">{error}</p>
              )}

              {/* Benefit reminder */}
              <p className="text-sm text-body mb-3 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-teal-deep flex-shrink-0" />
                One invitation per batch — early users get priority access to new features.
              </p>

              {/* Microcopy */}
              <p className="text-xs text-muted">
                No spam. No sharing your email. Just your invite when a spot opens.
              </p>
            </div>
          ) : (
            /* Success state */
            <div style={{ animation: 'fade-up 0.3s ease-out both' }}>
              <div className="w-20 h-20 rounded-full bg-teal-tint border border-teal/30 flex items-center justify-center mx-auto mb-8">
                <svg
                  className="w-9 h-9 text-teal-deep"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="font-display font-black text-4xl md:text-6xl tracking-[-0.03em] text-ink mb-6 leading-tight">
                You&apos;re on the list.
              </h2>

              <p className="text-xl text-ink mb-3">
                We&apos;ll be in touch as soon as access opens up.
              </p>

              <p className="text-body mb-12">
                Keep an eye on your inbox — invitations go out in batches.
              </p>

              <Link
                href="/"
                className="text-sm text-muted hover:text-ink transition-colors underline underline-offset-4"
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
