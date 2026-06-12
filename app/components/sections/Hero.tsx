'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Lock, Mail, Calendar, Target, CheckCircle } from 'lucide-react'

const demos = [
  { icon: Mail, text: "Follow up on overdue invoices", result: "3 drafts ready • $4,200 total" },
  { icon: Calendar, text: "Schedule a call with Sarah", result: "Tue 2PM available • Draft ready" },
  { icon: Target, text: "What needs my attention today?", result: "2 urgent • 5 follow-ups • 1 meeting" },
]

export default function Hero() {
  const [activeDemo, setActiveDemo] = useState(0)

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div className="space-y-8" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span className="animate-pulse">✦</span>
            <span>Draft-first AI for client work — now in early access</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">The next step,</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">always drafted.</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
            Zuko connects your inbox, CRM, projects, finance, and calendar into one client-work layer — and keeps the next step visible, drafted, and ready for your approval.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/waitlist"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-white shadow-xl shadow-indigo-500/25 flex items-center gap-2 hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-200"
            >
              Start Free — No Card Required
              <ArrowRight className="w-5 h-5" />
            </Link>

            <motion.button className="px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 flex items-center gap-2 backdrop-blur-sm" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Play className="w-5 h-5" />
              See It In Action
            </motion.button>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4">
            {['Early access', 'No card required', 'Drafts before action'].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div className="relative" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <Lock className="w-3 h-3" />
                zuko.ai/app
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1 space-y-3">
                  {demos.map((demo, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setActiveDemo(i)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${activeDemo === i ? 'bg-indigo-500/20 border-indigo-500/50 shadow-lg shadow-indigo-500/10' : 'bg-slate-800/50 border-white/5 hover:border-white/10'}`}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center gap-3">
                        <demo.icon className={`w-5 h-5 ${activeDemo === i ? 'text-indigo-400' : 'text-slate-500'}`} />
                        <span className={activeDemo === i ? 'text-white' : 'text-slate-400'}>{demo.text}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div key={activeDemo} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex-1 bg-slate-800/80 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-green-400 font-medium">AI Response Ready</span>
                    </div>
                    <p className="text-white font-medium mb-4">{demos[activeDemo].result}</p>
                    <div className="space-y-2">
                      <div className="h-2 bg-slate-700 rounded-full w-full" />
                      <div className="h-2 bg-slate-700 rounded-full w-4/5" />
                      <div className="h-2 bg-slate-700 rounded-full w-3/5" />
                    </div>
                    <motion.button className="mt-4 w-full py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white cursor-pointer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      Review & Approve
                    </motion.button>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>🛡️ Draft-first approvals enabled</span>
                  <span>Last sync: 2s ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}