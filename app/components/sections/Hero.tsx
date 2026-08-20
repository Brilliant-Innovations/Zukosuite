'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Lock, Mail, Calendar, Target, CheckCircle, Shield, Sparkles } from 'lucide-react'


// Auto-advance the demo like a product tour; a click hands control to the
// user and the tour resumes after a pause. Respects prefers-reduced-motion.
function useAutoCycle(count: number, ms: number, setActive: (fn: (a: number) => number) => void) {
  const pausedUntil = useRef(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      if (Date.now() < pausedUntil.current) return
      setActive((a) => (a + 1) % count)
    }, ms)
    return () => clearInterval(id)
  }, [count, ms, setActive])
  return () => { pausedUntil.current = Date.now() + 15000 }
}

const demos = [
  { icon: Mail, text: "Follow up on overdue invoices", result: "3 drafts ready • $4,200 total", counter: "1 of 3" },
  { icon: Calendar, text: "Schedule a call with Sarah", result: "Tue 2PM available • Draft ready", counter: "2 of 3" },
  { icon: Target, text: "What needs my attention today?", result: "2 urgent • 5 follow-ups • 1 meeting", counter: "3 of 3" },
]

function DemoPanel({ active }: { active: number }) {
  if (active === 0) {
    return (
      <div className="bg-paper-2 rounded-[10px] px-3.5 py-3 space-y-1.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold text-ink">To: Dana Kim · Acme Corp</span>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-tint text-red-deep whitespace-nowrap">14d overdue</span>
        </div>
        <div className="text-xs font-semibold text-body">Re: Invoice #1042 — $1,800</div>
        <div className="text-xs leading-relaxed text-muted">Hi Dana — a quick nudge on invoice #1042. Could you confirm payment this week?</div>
      </div>
    )
  }
  if (active === 1) {
    return (
      <div className="space-y-2.5">
        <div className="flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 bg-ink text-cream-text rounded-full text-[11px] font-semibold whitespace-nowrap">Tue 2:00 PM</span>
          <span className="px-2.5 py-1 bg-paper-2 text-body rounded-full text-[11px] font-semibold whitespace-nowrap">Wed 11:00</span>
          <span className="px-2.5 py-1 bg-paper-2 text-body rounded-full text-[11px] font-semibold whitespace-nowrap">Thu 9:30</span>
        </div>
        <div className="bg-paper-2 rounded-[10px] px-3.5 py-3 text-xs leading-relaxed text-muted">
          <span className="font-bold text-ink">Invite drafted</span> — Intro call: Sarah × you, 30 min. Agenda and video link included.
        </div>
      </div>
    )
  }
  return (
    <div className="space-y-1.5">
      {[
        { dot: 'bg-brand-red', text: 'INV-0042 — 14 days overdue · chaser ready' },
        { dot: 'bg-brand-red', text: 'Acme proposal — viewed twice, no reply yet' },
        { dot: 'bg-brand-blue', text: 'Kickoff with Sarah — today, 2:00 PM' },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2 px-3 py-2 bg-paper-2 rounded-lg">
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.dot}`} />
          <span className="text-xs text-ink">{item.text}</span>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  const [activeDemo, setActiveDemo] = useState(0)
  const holdTour = useAutoCycle(demos.length, 5000, useCallback((fn: (a: number) => number) => setActiveDemo(fn), []))
  const pickDemo = (i: number) => { holdTour(); setActiveDemo(i) }

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div className="space-y-8" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <motion.div className="inline-flex items-center gap-2.5 text-red-deep" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs font-bold tracking-[0.18em] uppercase">Your next move, already drafted — now in early access</span>
          </motion.div>

          <h1 className="font-display font-black text-5xl md:text-7xl leading-[1.04] tracking-[-0.035em] text-ink">
            <span>Zuko keeps you</span>
            <br />
            <span className="marker">one step ahead.</span>
          </h1>

          <p className="text-xl text-body max-w-xl leading-relaxed">
            Zuko is your inbox, CRM, projects, finance, and calendar — one client-work layer that keeps the next step visible, drafted, and ready for your approval.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/waitlist"
              className="px-8 py-4 bg-ink rounded-full font-semibold text-cream-text flex items-center gap-2 hover:-translate-y-0.5 active:scale-95 hover:shadow-[0_8px_24px_rgba(56,48,24,0.25)] transition-all duration-200 shadow-[0_4px_14px_rgba(56,48,24,0.15)]"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/demo"
              className="px-8 py-4 rounded-full font-semibold text-ink border-[1.5px] border-ink hover:bg-ink/5 flex items-center gap-2 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              <Play className="w-5 h-5 fill-current" />
              See It In Action
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4">
            {['Free during early access', 'No card required', 'You approve everything'].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-body">
                <CheckCircle className="w-4 h-4 text-teal-deep flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div className="relative" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          <div className="relative bg-paper rounded-3xl border border-card-border p-6 shadow-[0_24px_60px_rgba(56,48,24,0.10),0_2px_6px_rgba(56,48,24,0.05)]">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#ddd5c1]" />
              <div className="w-3 h-3 rounded-full bg-[#ddd5c1]" />
              <div className="w-3 h-3 rounded-full bg-[#ddd5c1]" />
              <div className="ml-4 px-3 py-1 rounded-full bg-inset text-xs text-muted flex items-center gap-2">
                <Lock className="w-3 h-3" />
                zuko.ai/app
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 space-y-3">
                  {demos.map((demo, i) => (
                    <motion.button
                      key={i}
                      onClick={() => pickDemo(i)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 cursor-pointer ${activeDemo === i ? 'bg-white border-[1.5px] border-ink shadow-[0_4px_12px_rgba(56,48,24,0.07)]' : 'bg-inset border border-transparent hover:border-card-border'}`}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center gap-3">
                        <demo.icon className={`w-5 h-5 flex-shrink-0 ${activeDemo === i ? 'text-teal-deep' : 'text-muted'}`} />
                        <span className={`text-sm ${activeDemo === i ? 'text-ink font-semibold' : 'text-body'}`}>{demo.text}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div key={activeDemo} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex-1 bg-white rounded-xl p-4 border border-card-border">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                        <span className="text-[11px] font-bold tracking-[0.14em] text-teal-deep uppercase">AI Response Ready</span>
                      </div>
                      <span className="text-[11px] font-semibold text-muted whitespace-nowrap">{demos[activeDemo].counter}</span>
                    </div>
                    <p className="text-ink text-sm font-semibold mb-3">{demos[activeDemo].result}</p>
                    <DemoPanel active={activeDemo} />
                    <div className="mt-3 flex items-center gap-2.5">
                      <motion.button tabIndex={-1} aria-hidden="true" className="flex-1 py-2 bg-ink rounded-[10px] text-sm font-semibold text-cream-text cursor-pointer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        Review & Approve
                      </motion.button>
                      <span className="text-sm font-semibold text-muted px-1.5">Edit</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="pt-4 border-t border-hairline-2">
                <div className="flex items-center justify-between text-xs text-muted">
                  <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-teal-deep" /> Approval required before send</span>
                  <span>Last sync: 2s ago</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
