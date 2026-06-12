'use client'

import { motion } from 'framer-motion'
import { UserPlus, CalendarDays, FolderOpen, CheckSquare, FileText, Send, CircleDollarSign } from 'lucide-react'

const steps = [
  { icon: UserPlus,         label: 'First Contact', desc: 'A new lead mentions a project. Zuko captures the context.',              color: 'from-indigo-500 to-violet-500' },
  { icon: CalendarDays,     label: 'Meeting',       desc: 'Zuko suggests times and prepares the calendar invite.',                  color: 'from-violet-500 to-purple-500' },
  { icon: FolderOpen,       label: 'Project',       desc: 'Scope is agreed, so Zuko drafts the project plan.',                     color: 'from-purple-500 to-pink-500'   },
  { icon: CheckSquare,      label: 'Tasks',         desc: 'Work starts with tasks, owners, dependencies, and risks.',              color: 'from-pink-500 to-rose-500'     },
  { icon: FileText,         label: 'Invoice',       desc: 'The project closes and Zuko prepares the invoice.',                     color: 'from-rose-500 to-orange-500'   },
  { icon: Send,             label: 'Send',          desc: 'You review and approve before anything goes out.',                      color: 'from-orange-500 to-amber-500'  },
  { icon: CircleDollarSign, label: 'Paid',          desc: 'Payment status, receivables, and follow-ups stay connected.',           color: 'from-amber-500 to-green-500'   },
]

// Top row: steps 0–3 (left→right), bottom row: steps 6–4 (right→left), forming a loop
const topRow    = steps.slice(0, 4)
const bottomRow = steps.slice(4).reverse()   // [6, 5, 4] rendered right→left

function StepCard({ step, index, delay }: { step: typeof steps[0]; index: number; delay: number }) {
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
      <div className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-1">{step.label}</div>
      <p className="text-xs text-slate-500 leading-relaxed max-w-[130px]">{step.desc}</p>
    </motion.div>
  )
}

function Connector({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className={`hidden lg:flex items-center ${reverse ? 'flex-row-reverse' : ''} flex-shrink-0 mt-[-28px]`}>
      <div className="w-8 border-t border-dashed border-indigo-500/30" />
      <div className={`w-2 h-2 rounded-full bg-indigo-500/40 ${reverse ? '-ml-1' : '-mr-1'}`} />
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
            From first contact to paid invoice — Zuko keeps the work moving, with each step drafted for your approval.
          </p>
        </motion.div>

        {/* Loop circuit — top row left→right, bottom row right→left */}
        <div className="relative">

          {/* Top row: steps 1–4 */}
          <div className="flex items-start justify-between gap-2 mb-6">
            {topRow.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2 flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                  <StepCard step={step} index={i} delay={i * 0.1} />
                </div>
                {i < topRow.length - 1 && <Connector />}
              </div>
            ))}

            {/* Right-side arc connector */}
            <div className="hidden lg:flex flex-col items-center self-stretch justify-center ml-2">
              <div className="w-4 border-t border-dashed border-indigo-500/30" />
              <div className="w-4 h-16 border-r border-b rounded-br-2xl border-dashed border-indigo-500/30 mt-[-1px]" />
            </div>
          </div>

          {/* Bottom row: steps 7–5 (right→left direction) */}
          <div className="flex items-start justify-between gap-2">
            {/* Left-side arc connector */}
            <div className="hidden lg:flex flex-col items-center self-stretch justify-center mr-2">
              <div className="w-4 h-16 border-l border-t rounded-tl-2xl border-dashed border-indigo-500/30 mb-[-1px]" />
              <div className="w-4 border-b border-dashed border-indigo-500/30" />
            </div>

            {bottomRow.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2 flex-1 min-w-0">
                {i > 0 && <Connector reverse />}
                <div className="flex-1 min-w-0">
                  <StepCard step={step} index={i + topRow.length} delay={(i + topRow.length) * 0.1} />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: simple vertical stack */}
          <div className="lg:hidden mt-8 space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
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
                  <div className="font-semibold text-white mb-1">{step.label}</div>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom anchor */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/50 border border-white/10 text-slate-400 text-sm">
            Enter the loop at any point — inbox, invoice, project, or follow-up.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
