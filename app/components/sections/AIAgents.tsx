'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Users, DollarSign, Briefcase, Calendar, Shield, CheckCircle } from 'lucide-react'

const agents = [
  { icon: MessageSquare, name: "Messaging Agent", desc: "Reads inbox, surfaces priority, drafts replies", color: "from-blue-500 to-cyan-500",    detail: "Reads your inbox, surfaces what matters, and drafts replies for your review." },
  { icon: Users,         name: "CRM Agent",       desc: "Tracks deals, suggests next actions",       color: "from-purple-500 to-pink-500",  detail: "Tracks deal status across your pipeline and suggests the right next action." },
  { icon: DollarSign,   name: "Finance Agent",    desc: "Monitors receivables, prepares reminders",  color: "from-green-500 to-emerald-500", detail: "Monitors receivables, flags overdue invoices, and prepares collection emails for your review." },
  { icon: Briefcase,    name: "Projects Agent",   desc: "Drafts plans from a brief description",    color: "from-orange-500 to-red-500",   detail: "Drafts a structured project plan from a brief description, including tasks, owners, and timelines." },
  { icon: Calendar,     name: "Calendar Agent",   desc: "Prepares scheduling replies and invites",  color: "from-indigo-500 to-violet-500", detail: "Prepares scheduling replies, suggests meeting times, and drafts calendar invites for your approval." },
]

export default function AIAgents() {
  const [expandedAgent, setExpandedAgent] = useState(0)

  return (
    <section id="ai-agents" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">A team of </span>
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">AI agents</span>
            <br />
            <span className="text-white">working together</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Context-aware assistants that prepare the next step — you stay in control.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4">
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${expandedAgent === i ? 'md:col-span-2 bg-slate-800/80 border-indigo-500/30' : 'bg-slate-900/50 border-white/5 hover:border-white/10'} border backdrop-blur-sm`}
              onClick={() => setExpandedAgent(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-4 shadow-lg`}>
                <agent.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{agent.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{agent.desc}</p>
              <AnimatePresence>
                {expandedAgent === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="pt-4 border-t border-white/10">
                    <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">What it helps with</div>
                    <p className="text-sm text-slate-300">{agent.detail}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/50 border border-white/10">
            <Shield className="w-5 h-5 text-indigo-400" />
            <span className="text-slate-300"><span className="text-white font-semibold">Zuko drafts.</span> You approve.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}