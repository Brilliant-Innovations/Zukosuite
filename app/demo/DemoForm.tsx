'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, CheckCircle } from 'lucide-react'
import BackgroundEffects from '../components/sections/BackgroundEffects'
import Navigation from '../components/sections/Navigation'

const industries = [
  'Design / Creative',
  'Marketing / Advertising',
  'Consulting / Advisory',
  'Software / Technology',
  'Legal / Compliance',
  'Finance / Accounting',
  'HR / Recruiting',
  'Content / Media',
  'Architecture / Engineering',
  'Healthcare',
  'Real Estate',
  'Education',
  'Other',
]

const companySizes = [
  'Just me',
  '2–5 people',
  '6–15 people',
  '16–50 people',
  '50+ people',
]

const workTypes = [
  'Freelancer',
  'Independent consultant',
  'Small agency',
  'Small team (in-house)',
  'Other',
]

interface FormData {
  fullName: string
  email: string
  company: string
  industry: string
  size: string
  workType: string
  country: string
  website: string
  linkedin: string
  message: string
}

const empty: FormData = {
  fullName: '', email: '', company: '', industry: '', size: '',
  workType: '', country: '', website: '', linkedin: '', message: '',
}

const selectClass =
  'w-full px-4 py-3 rounded-xl bg-paper border-[1.5px] border-card-border text-ink focus:outline-none focus:border-teal transition-all text-sm appearance-none cursor-pointer'

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-paper border-[1.5px] border-card-border text-ink placeholder:text-muted focus:outline-none focus:border-teal focus:bg-white transition-all text-sm'

export default function DemoForm() {
  const [form, setForm] = useState<FormData>(empty)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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

      <div className="flex-1 flex items-start justify-center px-6 pt-28 pb-20">
        <div className="w-full max-w-2xl">
          {!submitted ? (
            <div style={{ animation: 'fade-up 0.25s ease-out both' }}>
                {/* Header */}
                <div className="mb-10">
                  <div className="inline-flex items-center gap-2.5 text-red-deep mb-6">
                    <Zap className="w-3.5 h-3.5 fill-current flex-shrink-0" />
                    <span className="text-xs font-bold tracking-[0.18em] uppercase">Private beta — limited spots</span>
                  </div>
                  <h1 className="font-display font-black text-4xl md:text-5xl tracking-[-0.03em] text-ink mb-4 leading-tight">
                    Book a demo
                  </h1>
                  <p className="text-lg text-body leading-relaxed">
                    We&apos;ll walk you through how Zuko fits your workflow and answer any questions about the beta.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Full name <span className="text-red-deep">*</span></label>
                      <input type="text" required value={form.fullName} onChange={set('fullName')} placeholder="Alex Johnson" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Work email <span className="text-red-deep">*</span></label>
                      <input type="email" required value={form.email} onChange={set('email')} placeholder="alex@company.com" className={inputClass} />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Company / practice name <span className="text-red-deep">*</span></label>
                    <input type="text" required value={form.company} onChange={set('company')} placeholder="Acme Consulting" className={inputClass} />
                  </div>

                  {/* Industry + Size */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Industry <span className="text-red-deep">*</span></label>
                      <select required value={form.industry} onChange={set('industry')} className={selectClass}>
                        <option value="" disabled>Select industry</option>
                        {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Team size <span className="text-red-deep">*</span></label>
                      <select required value={form.size} onChange={set('size')} className={selectClass}>
                        <option value="" disabled>Select size</option>
                        {companySizes.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Type of work + Country */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Type of work <span className="text-red-deep">*</span></label>
                      <select required value={form.workType} onChange={set('workType')} className={selectClass}>
                        <option value="" disabled>Select type</option>
                        {workTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Country <span className="text-red-deep">*</span></label>
                      <input type="text" required value={form.country} onChange={set('country')} placeholder="Canada" className={inputClass} />
                    </div>
                  </div>

                  {/* Website + LinkedIn */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Website</label>
                      <input type="url" value={form.website} onChange={set('website')} placeholder="https://yoursite.com" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">LinkedIn</label>
                      <input type="url" value={form.linkedin} onChange={set('linkedin')} placeholder="https://linkedin.com/in/you" className={inputClass} />
                    </div>
                  </div>

                  {/* What brings you here */}
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">What are you hoping to solve? <span className="text-muted">(optional)</span></label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Tell us about your current workflow, the tools you're juggling, or what's getting in the way..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Error */}
                  {error && <p className="text-sm text-red-deep">{error}</p>}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-ink rounded-full font-semibold text-cream-text flex items-center justify-center gap-2 hover:-translate-y-0.5 active:scale-[0.98] hover:shadow-[0_10px_30px_rgba(56,48,24,0.25)] transition-all duration-200 shadow-[0_6px_18px_rgba(56,48,24,0.15)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-cream-text/30 border-t-cream-text rounded-full animate-spin" />
                    ) : (
                      <>Request demo <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>

                  <p className="text-xs text-center text-muted">
                    We&apos;ll be in touch within one business day. No sales pressure — just a walkthrough.
                  </p>
                </form>
            </div>
          ) : (
            <div style={{ animation: 'fade-up 0.25s ease-out both' }} className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-teal-tint border border-teal/30 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-9 h-9 text-teal-deep" />
                </div>
                <h2 className="font-display font-black text-4xl md:text-5xl tracking-[-0.03em] text-ink mb-6 leading-tight">
                  Request received.
                </h2>
                <p className="text-xl text-ink mb-3">
                  We&apos;ll review your details and be in touch within one business day.
                </p>
                <p className="text-body mb-12">
                  Keep an eye on <span className="text-ink font-semibold">{form.email}</span>.
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
