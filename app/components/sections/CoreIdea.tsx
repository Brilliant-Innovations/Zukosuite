import { CheckCircle, Sparkles, ArrowRight, ArrowUp, Check, MessageSquare, Users, DollarSign, Briefcase, Globe, ClipboardList, Mic, Monitor } from 'lucide-react'

// Eight desks, one workspace — each card is a tool you'd otherwise run
// separately, with its real feature set. All of them share one client record.
const modules = [
  { icon: MessageSquare, name: 'Unified Inbox', tile: 'bg-blue-tint',   iconColor: 'text-brand-blue', feats: ['Gmail, Outlook, IMAP, Slack & WhatsApp', 'AI triage, priority & summaries', 'Commitments extracted with due dates', 'Lifecycle threads per client'] },
  { icon: Users,         name: 'CRM',           tile: 'bg-petrol-tint', iconColor: 'text-petrol',     feats: ['Pipelines with probabilities & WIP limits', 'Marketing, sales & support boards', 'Proposals accepted in the client portal', 'CSV import with duplicate preview'] },
  { icon: DollarSign,    name: 'Finance',       tile: 'bg-teal-tint',   iconColor: 'text-teal-deep',  feats: ['Invoices, credit notes & retainers', 'Approval-gated reminder schedules', 'Stripe payments into your own account', 'Cash forecast, budgets & P&L'] },
  { icon: Briefcase,     name: 'Projects',      tile: 'bg-red-tint',    iconColor: 'text-red-deep',   feats: ['WBS, Gantt & Kanban views', 'Budget & profitability per project', 'Risks, issues & change orders', 'Prepare → review → commit drafts'] },
  { icon: Globe,         name: 'Scheduling',    tile: 'bg-ink',         iconColor: 'text-cream-text', feats: ['Booking links & group polls', 'Hours, buffers, notice & daily caps', 'DST-safe math across every timezone', 'Holds that wait for your accept'] },
  { icon: ClipboardList, name: 'Intake',        tile: 'bg-inset',       iconColor: 'text-ink',        feats: ['23 field types with live logic', 'Routing rules that read as sentences', 'Submissions declare what they become', 'Portal-only — no anonymous links'] },
  { icon: Mic,           name: 'Notes',         tile: 'bg-teal-tint',   iconColor: 'text-teal-deep',  feats: ['Voice-to-text transcription built in', 'Capture by voice or keyboard', 'Notes attach to clients & projects', 'Part of the same workspace memory'] },
  { icon: Monitor,       name: 'Client Portal', tile: 'bg-blue-tint',   iconColor: 'text-brand-blue', feats: ['Invoices with Pay now (Stripe)', 'Proposals accepted under client login', 'Running statement, never truncated', 'Collaborator tasks & deliverables'] },
]

export default function CoreIdea() {
  return (
    <section id="features" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="scroll-reveal from-up text-center mb-20">
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-[-0.03em] text-ink leading-[1.08]">
            <span>Every tool knows one thing.</span>
            <br />
            <span>Zuko sees </span>
            <span className="marker">the whole picture.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {modules.map((m, i) => (
            <div
              key={m.name}
              className="scroll-reveal from-up relative p-5 rounded-[20px] bg-paper border border-card-border hover:-translate-y-1.5 hover:border-[#d5cdb8] transition-all duration-300"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="absolute top-5 right-6 font-display font-black text-3xl text-[#dcd4be] select-none" aria-hidden="true">0{i + 1}</div>
              <div className={`w-11 h-11 rounded-xl ${m.tile} flex items-center justify-center mb-4`}>
                <m.icon className={`w-5 h-5 ${m.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-ink mb-3">{m.name}</h3>
              <ul className="space-y-2">
                {m.feats.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13.5px] text-body leading-snug">
                    <Check className="w-3.5 h-3.5 text-teal-deep flex-shrink-0 mt-0.5" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* The one dark anchor panel on the page */}
        <div className="scroll-reveal from-scale relative p-6 sm:p-12 rounded-[28px] bg-panel overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display font-extrabold text-3xl tracking-[-0.02em] text-cream-text mb-6">Right now, YOU are the integration</h3>
              <p className="text-lg text-panel-muted mb-8 leading-relaxed">
                Copying data between apps. Reconnecting context by hand. Holding the whole picture in your head. Let Zuko do that for you! What it does:
              </p>
              <div className="space-y-4">
                {["Tracks your full client-work context", "Remembers your clients, preferences, and history — you never re-explain", "Surfaces and drafts the next step across modules", "Keeps you in control — everything waits for your approval"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                    <span className="text-panel-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ask Zuko anything — live command box */}
            <div className="relative bg-panel-2 rounded-[18px] p-6 border border-panel-border" aria-hidden="true">
              <div className="flex items-center gap-2.5 mb-4">
                <Sparkles className="w-4 h-4 text-teal fill-current" />
                <span className="text-xs font-bold tracking-[0.16em] text-panel-muted uppercase">Ask Zuko anything</span>
              </div>

              {/* Input bar with typing loop */}
              <div className="flex items-center gap-3 px-3.5 py-3 rounded-xl bg-panel border border-panel-border-2">
                <div className="flex-1 flex items-center overflow-hidden">
                  <span className="anim-type-q text-sm text-cream-text">Follow up on overdue invoices</span>
                  <span className="anim-caret w-0.5 h-4 bg-teal ml-1 flex-shrink-0" />
                </div>
                <span className="w-[30px] h-[30px] rounded-full bg-teal flex items-center justify-center flex-shrink-0">
                  <ArrowUp className="w-4 h-4 text-panel" strokeWidth={2.4} />
                </span>
              </div>

              {/* Zuko's answer */}
              <div className="anim-rise-in mt-3 px-4 py-3.5 rounded-xl bg-panel border border-panel-border space-y-2.5" style={{ animationDuration: '18s' }}>
                <div className="flex items-center gap-2">
                  <span className="w-[7px] h-[7px] rounded-full bg-teal" />
                  <span className="text-[10.5px] font-bold tracking-[0.14em] text-teal uppercase">Zuko</span>
                </div>
                <p className="text-[13.5px] leading-relaxed text-panel-text">3 overdue invoices found — chasers drafted for Acme Corp, Studio North, and Corver &amp; Co.</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-panel-border text-panel-text">3 drafts</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-panel-border text-panel-text">$4,200</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal text-panel">Review &amp; approve</span>
                </div>
              </div>

              {/* Try asking */}
              <div className="mt-4 flex items-center gap-2.5">
                <span className="h-px flex-1 bg-panel-border" />
                <span className="text-[10px] font-bold tracking-[0.16em] text-panel-muted uppercase">Try asking</span>
                <span className="h-px flex-1 bg-panel-border" />
              </div>
              <div className="mt-3 space-y-2">
                {["What needs my attention today?", "Schedule a call with Sarah"].map((cmd, i) => (
                  <div key={i} className="flex items-center justify-between px-3.5 py-2.5 rounded-[10px] bg-panel border border-panel-border text-[13px] text-panel-text cursor-pointer hover:border-panel-border-2 hover:translate-x-1 transition-all duration-200">
                    <span>{cmd}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
