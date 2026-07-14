'use client'

import { motion } from 'framer-motion'
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp, Mail, FileText, Briefcase, CircleDollarSign, PenLine, RotateCcw } from 'lucide-react'

// The six lifecycle threads Zuko tracks in the Unified Inbox — same names,
// same badge colors as the product.
const steps = [
  { icon: Mail,             label: 'Inquiry',       dot: 'bg-sky-400',     color: 'from-sky-500 to-cyan-500',        desc: 'A new lead asks about work. Zuko captures the context and drafts your reply.' },
  { icon: FileText,         label: 'Proposal',      dot: 'bg-amber-400',   color: 'from-amber-500 to-orange-500',    desc: 'The scope takes shape. Zuko prepares the quote and follows up while it’s pending.' },
  { icon: Briefcase,        label: 'Active work',   dot: 'bg-emerald-400', color: 'from-emerald-500 to-green-500',   desc: 'Delivery runs on drafted tasks, owners, and timelines — all linked to the client.' },
  { icon: CircleDollarSign, label: 'Payment',       dot: 'bg-slate-400',   color: 'from-slate-500 to-slate-600',     desc: 'The invoice goes out with your approval. Overdue? The chaser is drafted, not sent.' },
  { icon: PenLine,          label: 'Revisions',     dot: 'bg-fuchsia-400', color: 'from-purple-500 to-fuchsia-500',  desc: 'Feedback rounds and post-delivery tweaks stay attached to the same client story.' },
  { icon: RotateCcw,        label: 'Re-engagement', dot: 'bg-indigo-400',  color: 'from-indigo-500 to-violet-500',   desc: 'Months later, the thread picks up with full context — nothing re-explained.' },
]

// Top row: steps 0–2 (left→right), bottom row: steps 5–3 (right→left), forming a loop
const topRow    = steps.slice(0, 3)
const bottomRow = steps.slice(3).reverse()   // [5, 4, 3] rendered left→right = flows right→left

function StepCard({ step, delay }: { step: typeof steps[0]; delay: number }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300`}>
        <step.icon className="w-7 h-7 text-white" />
      </div>
      {/* Thread badge — mirrors the lifecycle badges in the Unified Inbox */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-xs font-semibold text-slate-200 mb-2">
        <span className={`w-1.5 h-1.5 rounded-full ${step.dot}`} />
        {step.label}
      </span>
      <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">{step.desc}</p>
    </motion.div>
  )
}

function Arrow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className={`hidden lg:flex items-center flex-shrink-0 w-16 mt-[28px] self-start ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className={`h-0.5 flex-1 rounded-full bg-gradient-to-r ${reverse ? 'from-purple-400/70 to-indigo-400/20' : 'from-indigo-400/20 to-purple-400/70'}`} />
      {reverse
        ? <ChevronLeft className="w-5 h-5 text-purple-400 -mr-1.5 flex-shrink-0" />
        : <ChevronRight className="w-5 h-5 text-purple-400 -ml-1.5 flex-shrink-0" />}
    </div>
  )
}

export default function CoreLoop() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">One conversation.</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">The whole client journey.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Zuko tracks each stage as a living thread in your inbox — from first inquiry to the next project — with the next step drafted for your approval.
          </p>
        </motion.div>

        {/* Loop circuit — top row left→right, bottom row right→left, closing back to the start */}
        <div className="relative hidden lg:block">

          {/* Top row: Inquiry → Proposal → Active work */}
          <div className="flex items-start justify-center gap-2 mb-10">
            {topRow.map((step, i) => (
              <div key={step.label} className="flex items-start gap-2">
                <StepCard step={step} delay={i * 0.12} />
                {i < topRow.length - 1 && <Arrow />}
              </div>
            ))}

            {/* Right arc: down from Active work to Payment */}
            <div className="flex flex-col items-center self-stretch justify-center ml-4">
              <div className="w-6 h-24 border-r-2 border-t-2 rounded-tr-3xl border-indigo-400/40" />
              <ChevronDown className="w-5 h-5 text-purple-400 -mt-1.5 mr-[-13px] self-end" />
            </div>
          </div>

          {/* Bottom row: Payment → Revisions → Re-engagement (flowing right→left) */}
          <div className="flex items-start justify-center gap-2">
            {/* Left arc: back up from Re-engagement to Inquiry */}
            <div className="flex flex-col items-center self-stretch justify-center mr-4">
              <ChevronUp className="w-5 h-5 text-purple-400 -mb-1.5 ml-[-13px] self-start" />
              <div className="w-6 h-24 border-l-2 border-b-2 rounded-bl-3xl border-indigo-400/40" />
            </div>

            {bottomRow.map((step, i) => (
              <div key={step.label} className="flex items-start gap-2">
                <StepCard step={step} delay={(i + topRow.length) * 0.12} />
                {i < bottomRow.length - 1 && <Arrow reverse />}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical flow with connectors */}
        <div className="lg:hidden">
          {steps.map((step, i) => (
            <div key={step.label}>
              <motion.div
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-white/10 text-xs font-semibold text-slate-200 mb-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${step.dot}`} />
                    {step.label}
                  </span>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <ChevronDown className="w-4 h-4 text-indigo-400/60" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom anchor */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/50 border border-white/10 text-slate-400 text-sm max-w-3xl">
            Threads run in parallel — one client can have an active project, a pending proposal, and an unpaid invoice at once. Zuko keeps each one moving.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
