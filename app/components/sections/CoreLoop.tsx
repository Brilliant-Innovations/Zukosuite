'use client'

import { motion } from 'framer-motion'
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp, Mail, FileText, Briefcase, CircleDollarSign, PenLine, RotateCcw } from 'lucide-react'

// The six lifecycle threads Zuko tracks in the Unified Inbox — same names
// as the product, accent hues from the brand palette (Re-engagement shares
// blue with Inquiry: the loop closes back where it started).
const steps = [
  { icon: Mail,             label: 'Inquiry',       dot: 'bg-brand-blue', tile: 'bg-blue-tint',   iconColor: 'text-brand-blue', desc: 'A new lead asks about work. Zuko captures the context and drafts your reply.' },
  { icon: FileText,         label: 'Proposal',      dot: 'bg-red-deep',   tile: 'bg-red-tint',    iconColor: 'text-red-deep',   desc: 'The scope takes shape. Zuko prepares the quote and follows up while it’s pending.' },
  { icon: Briefcase,        label: 'Active work',   dot: 'bg-teal',       tile: 'bg-teal-tint',   iconColor: 'text-teal-deep',  desc: 'Delivery runs on drafted tasks, owners, and timelines — all linked to the client.' },
  { icon: CircleDollarSign, label: 'Payment',       dot: 'bg-petrol',     tile: 'bg-petrol-tint', iconColor: 'text-petrol',     desc: 'The invoice goes out with your approval. Overdue? The chaser is drafted, not sent.' },
  { icon: PenLine,          label: 'Revisions',     dot: 'bg-ink',        tile: 'bg-inset',       iconColor: 'text-ink',        desc: 'Feedback rounds and post-delivery tweaks stay attached to the same client story.' },
  { icon: RotateCcw,        label: 'Re-engagement', dot: 'bg-brand-blue', tile: 'bg-blue-tint',   iconColor: 'text-brand-blue', desc: 'Months later, the thread picks up with full context — nothing re-explained.' },
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
      transition={{ duration: 0.25, delay }}
    >
      <div className={`w-14 h-14 rounded-2xl ${step.tile} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
        <step.icon className={`w-7 h-7 ${step.iconColor}`} />
      </div>
      {/* Thread badge — mirrors the lifecycle badges in the Unified Inbox */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper border border-card-border text-xs font-bold text-ink mb-2">
        <span className={`w-1.5 h-1.5 rounded-full ${step.dot}`} />
        {step.label}
      </span>
      <p className="text-sm text-body leading-relaxed max-w-[200px]">{step.desc}</p>
    </motion.div>
  )
}

function Arrow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className={`hidden lg:flex items-center flex-shrink-0 w-16 mt-[28px] self-start ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="h-0 flex-1 border-t-2 border-dashed border-[#c2ba9f]" />
      {reverse
        ? <ChevronLeft className="w-5 h-5 text-[#c2ba9f] -mr-1.5 flex-shrink-0" />
        : <ChevronRight className="w-5 h-5 text-[#c2ba9f] -ml-1.5 flex-shrink-0" />}
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
          transition={{ duration: 0.3 }}
        >
          <div className="text-xs font-bold tracking-[0.18em] text-red-deep uppercase mb-6">The core loop</div>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-[-0.03em] text-ink mb-6 leading-[1.05]">
            <span>One conversation.</span>
            <br />
            <span className="marker">The whole client journey.</span>
          </h2>
          <p className="text-xl text-body max-w-2xl mx-auto">
            Zuko tracks each stage as a living thread in your inbox — from first inquiry to the next project — with the next step drafted for your approval.
          </p>
        </motion.div>

        {/* Loop circuit — top row left→right, bottom row right→left, closing back to the start */}
        <div className="relative hidden lg:block">

          {/* Top row: Inquiry → Proposal → Active work */}
          <div className="flex items-start justify-center gap-2 mb-10">
            {topRow.map((step, i) => (
              <div key={step.label} className="flex items-start gap-2">
                <StepCard step={step} delay={i * 0.06} />
                {i < topRow.length - 1 && <Arrow />}
              </div>
            ))}

            {/* Right arc: down from Active work to Payment */}
            <div className="flex flex-col items-center self-stretch justify-center ml-4">
              <div className="w-6 h-24 border-r-2 border-t-2 rounded-tr-3xl border-[#c2ba9f]/70" />
              <ChevronDown className="w-5 h-5 text-[#c2ba9f] -mt-1.5 mr-[-13px] self-end" />
            </div>
          </div>

          {/* Bottom row: Payment → Revisions → Re-engagement (flowing right→left) */}
          <div className="flex items-start justify-center gap-2">
            {/* Left arc: back up from Re-engagement to Inquiry */}
            <div className="flex flex-col items-center self-stretch justify-center mr-4">
              <ChevronUp className="w-5 h-5 text-[#c2ba9f] -mb-1.5 ml-[-13px] self-start" />
              <div className="w-6 h-24 border-l-2 border-b-2 rounded-bl-3xl border-[#c2ba9f]/70" />
            </div>

            {bottomRow.map((step, i) => (
              <div key={step.label} className="flex items-start gap-2">
                <StepCard step={step} delay={(i + topRow.length) * 0.06} />
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
                className="flex items-start gap-4 p-4 rounded-xl bg-paper border border-card-border"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.035 }}
              >
                <div className={`w-10 h-10 rounded-xl ${step.tile} flex items-center justify-center flex-shrink-0`}>
                  <step.icon className={`w-5 h-5 ${step.iconColor}`} />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-paper border border-card-border text-xs font-bold text-ink mb-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${step.dot}`} />
                    {step.label}
                  </span>
                  <p className="text-sm text-body">{step.desc}</p>
                </div>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <ChevronDown className="w-4 h-4 text-[#c2ba9f]" />
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
          transition={{ duration: 0.25, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-paper border border-card-border text-body text-sm max-w-3xl">
            Threads run in parallel — one client can have an active project, a pending proposal, and an unpaid invoice at once. Zuko keeps each one moving.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
