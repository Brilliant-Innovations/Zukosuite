'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
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
  'w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white focus:outline-none focus:border-indigo-500/60 transition-all text-sm appearance-none cursor-pointer'

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:bg-slate-800 transition-all text-sm'

export default function DemoPage() {
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
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
              >
                {/* Header */}
                <div className="mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-6">
                    <Zap className="w-4 h-4 flex-shrink-0" />
                    <span>Private beta — limited spots</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    Book a demo
                  </h1>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    We&apos;ll walk you through how Zuko fits your workflow and answer any questions about the beta.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Full name <span className="text-rose-400">*</span></label>
                      <input type="text" required value={form.fullName} onChange={set('fullName')} placeholder="Alex Johnson" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Work email <span className="text-rose-400">*</span></label>
                      <input type="email" required value={form.email} onChange={set('email')} placeholder="alex@company.com" className={inputClass} />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Company / practice name <span className="text-rose-400">*</span></label>
                    <input type="text" required value={form.company} onChange={set('company')} placeholder="Acme Consulting" className={inputClass} />
                  </div>

                  {/* Industry + Size */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Industry <span className="text-rose-400">*</span></label>
                      <select required value={form.industry} onChange={set('industry')} className={selectClass}>
                        <option value="" disabled>Select industry</option>
                        {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Team size <span className="text-rose-400">*</span></label>
                      <select required value={form.size} onChange={set('size')} className={selectClass}>
                        <option value="" disabled>Select size</option>
                        {companySizes.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Type of work + Country */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Type of work <span className="text-rose-400">*</span></label>
                      <select required value={form.workType} onChange={set('workType')} className={selectClass}>
                        <option value="" disabled>Select type</option>
                        {workTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Country <span className="text-rose-400">*</span></label>
                      <input type="text" required value={form.country} onChange={set('country')} placeholder="Canada" className={inputClass} />
                    </div>
                  </div>

                  {/* Website + LinkedIn */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Website</label>
                      <input type="url" value={form.website} onChange={set('website')} placeholder="https://yoursite.com" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">LinkedIn</label>
                      <input type="url" value={form.linkedin} onChange={set('linkedin')} placeholder="https://linkedin.com/in/you" className={inputClass} />
                    </div>
                  </div>

                  {/* What brings you here */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">What are you hoping to solve? <span className="text-slate-600">(optional)</span></label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Tell us about your current workflow, the tools you're juggling, or what's getting in the way..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Error */}
                  {error && <p className="text-sm text-rose-400">{error}</p>}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-white shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Request demo <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>

                  <p className="text-xs text-center text-slate-600">
                    We&apos;ll be in touch within one business day. No sales pressure — just a walkthrough.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-9 h-9 text-green-400" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Request received.
                </h2>
                <p className="text-xl text-slate-300 mb-3">
                  We&apos;ll review your details and be in touch within one business day.
                </p>
                <p className="text-slate-400 mb-12">
                  Keep an eye on <span className="text-white">{form.email}</span>.
                </p>
                <Link
                  href="/"
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-4"
                >
                  ← Back to home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}
