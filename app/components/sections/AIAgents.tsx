'use client'

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageSquare,
  Users,
  DollarSign,
  Briefcase,
  Globe,
  ClipboardList,
  Mic,
  Shield,
  type LucideIcon,
} from 'lucide-react'

// Auto-advance the desks like a product tour; a click hands control to the
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

type Desk = {
  id: string
  icon: LucideIcon
  name: string
  line: string
  tile: string
  iconColor: string
  kicker: string
  title: string
  body: string
  caveat: string
  action: string
}

const desks: Desk[] = [
  {
    id: 'inbox',
    icon: MessageSquare,
    name: 'Inbox',
    line: 'Five channels, one triage, replies drafted',
    tile: 'bg-blue-tint',
    iconColor: 'text-brand-blue',
    kicker: 'Prepared to send',
    title: 'Reply to Dana — Invoice #1042',
    body: 'One inbox across Gmail, Outlook, IMAP, Slack, and WhatsApp. Every message lands triaged — priority scored, summarized, promises pulled out as commitments with due dates. The reply is drafted; sending stays yours.',
    caveat: 'Every send lands in the “Sent by Zuko” log — failures included, with the reason.',
    action: 'Approve reply',
  },
  {
    id: 'crm',
    icon: Users,
    name: 'CRM',
    line: 'Pipeline, proposals, and the next move',
    tile: 'bg-petrol-tint',
    iconColor: 'text-petrol',
    kicker: 'Suggested next action',
    title: 'Acme proposal — viewed 2×, no reply',
    body: 'Pipelines with stage probabilities and WIP limits. Zuko reads stages by meaning — open, proposal, won — so renaming them never breaks an automation. The follow-up is drafted; the client accepts the proposal in their portal, under their own login.',
    caveat: 'Deals and contacts can be created for you. External mail still waits on you.',
    action: 'Review follow-up',
  },
  {
    id: 'finance',
    icon: DollarSign,
    name: 'Finance',
    line: 'Receivables, reminders, get paid online',
    tile: 'bg-teal-tint',
    iconColor: 'text-teal-deep',
    kicker: 'Collections queue',
    title: 'Reminder for Invoice #1042 — 12 days overdue',
    body: '“Overdue” is computed live, never a stale flag. Reminder schedules default to Needs approval, and the queue holds every send until you clear it. Clients hit Pay now in the portal — Stripe, straight into your account, always the balance due.',
    caveat: 'Zuko never takes payment or sends a reminder on its own.',
    action: 'Approve reminder',
  },
  {
    id: 'projects',
    icon: Briefcase,
    name: 'Projects',
    line: 'Brief in, structured plan out',
    tile: 'bg-red-tint',
    iconColor: 'text-red-deep',
    kicker: 'Draft plan',
    title: 'Q3 site redesign — 8 tasks, 2 milestones',
    body: 'Prepare builds the whole plan from the client brief — owners, dates, budget, a flagged risk — and writes zero records. Commit is the only writer, behind an explicit confirm. When a milestone completes, Zuko asks: ready to invoice it?',
    caveat: 'Scope drift is watched. Change orders are drafted — sending one is a human act.',
    action: 'Commit draft',
  },
  {
    id: 'scheduling',
    icon: Globe,
    name: 'Scheduling',
    line: 'They pick in their timezone. You accept.',
    tile: 'bg-ink',
    iconColor: 'text-cream-text',
    kicker: 'Waiting for you',
    title: 'Design Review · Priya picked Tue 15:00 IST',
    body: 'That’s 05:30 for you — timezone math that survives DST and half-hour offsets. The slot honors your hours, buffers, notice, and daily caps. Group polls rank windows by who’s actually available across locations, with a fairness check on odd hours.',
    caveat: 'Accept puts it on the agenda. Decline frees the slot.',
    action: 'Accept',
  },
  {
    id: 'intake',
    icon: ClipboardList,
    name: 'Intake',
    line: 'Forms that declare what they become',
    tile: 'bg-inset',
    iconColor: 'text-ink',
    kicker: 'Each submission becomes…',
    title: 'Project intake — Studio North',
    body: 'A form declares its outcome up front: a submission can become a project, a lead, a booking — fourteen object types. Routing reads as a sentence and rides on the record. Logic runs live in the editor, so you see exactly what a respondent sees.',
    caveat: 'Portal-only by design — no anonymous public links. Follow-through waits for you.',
    action: 'Review brief',
  },
  {
    id: 'notes',
    icon: Mic,
    name: 'Notes',
    line: 'Speak it — Zuko writes it down',
    tile: 'bg-teal-tint',
    iconColor: 'text-teal-deep',
    kicker: 'Transcribed just now',
    title: 'Voice note — after the Studio North call',
    body: 'Dictate while it’s fresh. The voice note becomes clean text and files itself on the client — a standalone note app’s whole job, done inside the workspace, next to the thread, the deal, and the plan it belongs to.',
    caveat: 'Transcripts are yours to edit. Nothing leaves the workspace unless you send it.',
    action: 'Open note',
  },
]

// Per-desk micro-visual: small, dense, obviously illustrative — a different
// shape for every desk so the ticket never reads as one recycled screen.
function Micro({ id }: { id: string }) {
  const chip = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold'
  if (id === 'inbox') {
    return (
      <div className="flex flex-wrap gap-1.5" aria-hidden="true">
        <span className={`${chip} bg-red-tint text-red-deep`}>Needs a reply · 3</span>
        <span className={`${chip} bg-blue-tint text-blue-deep`}>Meetings · 1</span>
        <span className={`${chip} bg-petrol-tint text-petrol`}>Invoices &amp; receipts · 2</span>
        <span className={`${chip} bg-inset text-body`}>No action · 12</span>
      </div>
    )
  }
  if (id === 'crm') {
    return (
      <div className="flex items-center gap-2" aria-hidden="true">
        {[
          { label: 'Open', on: false },
          { label: 'Proposal', on: true },
          { label: 'Won', on: false },
        ].map((s, i) => (
          <span key={s.label} className="flex items-center gap-2">
            {i > 0 && <span className="w-4 h-0 border-t-2 border-dashed border-[#c2ba9f]" />}
            <span className={`${chip} ${s.on ? 'bg-ink text-cream-text' : 'bg-inset text-body'}`}>{s.label}</span>
          </span>
        ))}
        <span className="text-[11px] text-muted ml-1">stages read by meaning</span>
      </div>
    )
  }
  if (id === 'finance') {
    return (
      <div className="flex flex-wrap items-center gap-2" aria-hidden="true">
        <span className="flex items-center gap-1">
          {['−7', '−1', 'due', '+3', '+7'].map((t) => (
            <span key={t} className={`px-2 py-1 rounded-md text-[11px] font-bold ${t === '+3' ? 'bg-ink text-cream-text' : t === 'due' ? 'bg-red-tint text-red-deep' : 'bg-inset text-body'}`}>{t}</span>
          ))}
        </span>
        <span className="text-[11px] text-muted">days around due date</span>
        <span className={`${chip} bg-teal-tint text-teal-deep`}>Needs approval</span>
      </div>
    )
  }
  if (id === 'projects') {
    return (
      <div className="flex flex-wrap items-center gap-2" aria-hidden="true">
        <span className={`${chip} bg-inset text-body`}>Prepare</span>
        <span className="w-4 h-0 border-t-2 border-dashed border-[#c2ba9f]" />
        <span className={`${chip} bg-inset text-body`}>Review</span>
        <span className="w-4 h-0 border-t-2 border-dashed border-[#c2ba9f]" />
        <span className={`${chip} bg-ink text-cream-text`}>Commit</span>
        <span className="text-[11px] text-muted">— the only step that writes</span>
      </div>
    )
  }
  if (id === 'scheduling') {
    return (
      <div className="flex flex-wrap items-center gap-1.5" aria-hidden="true">
        <span className={`${chip} bg-ink text-cream-text`}>Priya · 15:00 Asia/Kolkata</span>
        <span className={`${chip} bg-inset text-body`}>You · 05:30 America/Toronto</span>
        <span className={`${chip} bg-teal-tint text-teal-deep`}>Waiting for you</span>
      </div>
    )
  }
  if (id === 'intake') {
    return (
      <div className="flex flex-wrap items-center gap-1.5" aria-hidden="true">
        <span className={`${chip} bg-paper-2 border border-hairline-2 text-body`}>When budget &gt; $10k → assign senior consultant</span>
        <span className={`${chip} bg-teal-tint text-teal-deep`}>Becomes: Project</span>
      </div>
    )
  }
  return (
    <div className="flex flex-wrap items-center gap-1.5" aria-hidden="true">
      <span className={`${chip} bg-ink text-cream-text`}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round"><path d="M4 12v1M8 9v7M12 6v12M16 9v7M20 12v1" /></svg>
        0:42 voice
      </span>
      <span className={`${chip} bg-teal-tint text-teal-deep`}>Transcript ready</span>
      <span className={`${chip} bg-inset text-body`}>Filed to: Studio North</span>
    </div>
  )
}

const receipts = [
  'Client portal — proposals accepted, invoices paid online',
  '“Sent by Zuko” log — every send recorded, failures included',
  'Action ledger with real Undo',
  'Agent mode runs only what you pre-approve',
  'CSV import for 17 entity types — undo included',
  'AI memory you can inspect, pin, or forget',
]

export default function AIAgents() {
  const [active, setActive] = useState(0)
  const holdTour = useAutoCycle(desks.length, 5200, useCallback((fn: (a: number) => number) => setActive(fn), []))
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const pick = (i: number, { focus } = { focus: false }) => {
    holdTour()
    setActive(i)
    if (focus) tabRefs.current[i]?.focus()
  }

  const onTabKey = (e: KeyboardEvent, i: number) => {
    const last = desks.length - 1
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      pick(i === last ? 0 : i + 1, { focus: true })
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      pick(i === 0 ? last : i - 1, { focus: true })
    } else if (e.key === 'Home') {
      e.preventDefault()
      pick(0, { focus: true })
    } else if (e.key === 'End') {
      e.preventDefault()
      pick(last, { focus: true })
    }
  }

  const desk = desks[active]
  const Icon = desk.icon

  return (
    <section id="ai-agents" className="py-32 relative overflow-hidden" aria-labelledby="operator-heading">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="text-xs font-bold tracking-[0.18em] text-red-deep uppercase mb-6">The operator</div>
          <h2 id="operator-heading" className="font-display font-black text-4xl md:text-6xl tracking-[-0.03em] text-ink mb-6 leading-[1.05]">
            <span>One Zuko.</span>
            <br />
            <span className="marker">Every desk.</span>
          </h2>
          <p className="text-xl text-body max-w-2xl mx-auto">
            Not a roster of specialist bots. One operator with seven crafts — marketing, sales, finance, projects, client relations, support, personal productivity — and the whole workspace in view. It prepares the next step. You approve.
          </p>
        </motion.div>

        <motion.div
          className="mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.08 }}
        >
          <span className="font-bold text-ink">Studio North</span>
          <span className="text-faint" aria-hidden="true">·</span>
          <span className="text-body">Q3 site redesign</span>
          <span className="text-faint" aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-paper border border-card-border text-xs font-bold text-ink">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            Same client thread
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 items-start">
          <div
            role="tablist"
            aria-label="Desks Zuko operates"
            className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 snap-x snap-mandatory"
          >
            {desks.map((d, i) => {
              const selected = active === i
              return (
                <button
                  key={d.id}
                  ref={(el) => { tabRefs.current[i] = el }}
                  type="button"
                  role="tab"
                  id={`desk-tab-${d.id}`}
                  aria-selected={selected}
                  aria-controls="desk-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => pick(i)}
                  onKeyDown={(e) => onTabKey(e, i)}
                  className={`snap-start shrink-0 lg:shrink lg:w-full text-left flex items-center gap-3.5 px-4 py-3 rounded-[16px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                    selected
                      ? 'bg-white border border-ink shadow-[0_8px_24px_rgba(56,48,24,0.08)]'
                      : 'bg-paper border border-card-border hover:border-[#d5cdb8]'
                  }`}
                >
                  <span className={`w-9 h-9 rounded-[10px] ${d.tile} flex items-center justify-center flex-shrink-0`}>
                    <d.icon className={`w-4.5 h-4.5 ${d.iconColor}`} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-bold text-ink leading-tight">{d.name}</span>
                    <span className="hidden sm:block text-xs text-body leading-snug mt-0.5">{d.line}</span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* The ticket: deliberately small and framed as an illustration —
              a marketing gem, not a screenshot of the app. */}
          <div className="lg:col-span-8 min-w-0 flex lg:justify-start justify-center">
            <div className="relative w-full max-w-[600px] rounded-[26px] border-[1.5px] border-dashed border-[#d5cdb8] p-3 sm:p-4">
              <span className="absolute -top-2.5 left-6 px-2.5 bg-cream text-[10px] font-bold tracking-[0.14em] text-muted uppercase">
                From the product · illustrative data
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={desk.id}
                  role="tabpanel"
                  id="desk-panel"
                  aria-labelledby={`desk-tab-${desk.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="relative bg-white border border-card-border rounded-[18px] p-5 sm:p-6 shadow-[0_14px_36px_rgba(56,48,24,0.08)] min-h-[320px] flex flex-col gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-[11px] ${desk.tile} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${desk.iconColor}`} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10.5px] font-bold text-teal-deep uppercase tracking-[0.14em] mb-0.5">{desk.kicker}</div>
                      <h3 className="text-lg sm:text-xl font-bold text-ink leading-snug">{desk.title}</h3>
                    </div>
                  </div>

                  <Micro id={desk.id} />

                  <p className="text-sm text-body leading-relaxed">{desk.body}</p>

                  <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-3 pt-4 border-t border-dashed border-hairline">
                    <p className="flex-1 text-[13px] text-muted leading-snug">{desk.caveat}</p>
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-ink text-cream-text text-[13px] font-bold whitespace-nowrap self-start sm:self-auto" aria-hidden="true">
                      {desk.action}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-12 flex flex-col items-center gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.18, ease: 'easeOut' }}
        >
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
            <span className="w-full text-center text-[10.5px] font-bold tracking-[0.16em] text-muted uppercase mb-1">Also on the desk</span>
            {receipts.map((r) => (
              <span key={r} className="px-3.5 py-1.5 rounded-full bg-paper border border-card-border text-[12.5px] text-body">
                {r}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-paper border border-card-border">
            <Shield className="w-5 h-5 text-teal-deep" />
            <span className="text-body">
              <span className="text-ink font-bold">Zuko drafts.</span> Holds stay holds. You approve.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
