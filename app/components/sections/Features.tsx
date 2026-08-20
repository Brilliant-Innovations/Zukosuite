import { Mail, TrendingUp, DollarSign, Briefcase, Sparkles, ArrowRight, AlertCircle, Shield, Check } from 'lucide-react'

const features = [
  { icon: Mail,       title: "Inbox & Messaging",   chip: 'bg-teal-tint text-teal-deep',   headline: "See what matters. Reply with a draft already ready.",       desc: "Zuko reads your inbox, surfaces priority messages, and prepares replies for your review.",                 points: ["Works with Gmail, Outlook, and any IMAP inbox", "Replies drafted for your approval", "Emails captured as tasks or deals"] },
  { icon: TrendingUp, title: "CRM & Pipeline",       chip: 'bg-blue-tint text-blue-deep',   headline: "Never lose a deal because you forgot to follow up.",       desc: "Zuko tracks deal status and suggests the right next action — across the full client relationship.",       points: ["Full client context in one view", "Follow-up suggestions, ready to review", "Pipeline visibility without complexity"] },
  { icon: DollarSign, title: "Finance & Invoicing",  chip: 'bg-petrol-tint text-petrol',    headline: "Know what you’re owed. Collection emails ready to send.", desc: "Zuko tracks receivables, flags what’s overdue, and prepares payment follow-ups for your review.",         points: ["Real-time receivables view", "Collection emails drafted for approval", "Professional PDF invoices your clients can view online"] },
  { icon: Briefcase,  title: "Project Management",   chip: 'bg-red-tint text-red-deep',     headline: "From brief to structured plan — ready for your review.",  desc: "Describe the work and Zuko drafts the plan — tasks, owners, timelines, risks — for your approval.",       points: ["Tasks, timelines, and risks drafted", "Scales from simple to complex", "Connected to clients and finance"] },
]

const mockCard = "relative bg-paper border border-card-border rounded-3xl p-4 sm:p-6 shadow-[0_18px_44px_rgba(56,48,24,0.08)]"

function SuggestionStrip({ text, duration }: { text: string; duration: string }) {
  return (
    <div className="anim-rise-in flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-teal-tint" style={{ animationDuration: duration }}>
      <Sparkles className="w-3.5 h-3.5 text-teal-deep fill-current flex-shrink-0" />
      <span className="flex-1 text-xs font-semibold text-ink">{text}</span>
      <ArrowRight className="w-3.5 h-3.5 text-teal-deep flex-shrink-0" />
    </div>
  )
}

function InboxMock() {
  return (
    <div className={`${mockCard} space-y-2.5`} aria-hidden="true">
      <div className="flex items-center justify-between px-1 pb-1">
        <span className="text-[15px] font-bold text-ink">Inbox</span>
        <span className="text-[10.5px] font-bold tracking-[0.14em] text-muted uppercase">3 need attention</span>
      </div>
      <div className="anim-inb-new px-4 py-3.5 rounded-[14px] bg-white border-[1.5px] border-ink shadow-[0_4px_12px_rgba(56,48,24,0.06)] space-y-2.5">
        <div className="flex items-center gap-3">
          <span className="w-[34px] h-[34px] rounded-full bg-teal-tint text-teal-deep flex items-center justify-center text-xs font-bold flex-shrink-0">DK</span>
          <span className="flex-1 min-w-0">
            <span className="block text-[13.5px] font-bold text-ink">Dana Kim — Re: Invoice #1042</span>
            <span className="block text-xs text-muted">Can you resend the payment link?</span>
          </span>
          <span className="text-[11.5px] text-muted flex-shrink-0">9:12</span>
        </div>
        <div className="anim-inb-strip flex items-center gap-2.5 px-3 py-2 rounded-[10px] bg-teal-tint">
          <Sparkles className="w-3 h-3 text-teal-deep fill-current flex-shrink-0" />
          <span className="flex-1 text-xs font-semibold text-ink">Reply drafted — link attached, tone matched to Dana</span>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-ink text-cream-text whitespace-nowrap">Approve</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-3.5 rounded-[14px] bg-white border border-hairline-2">
        <span className="w-[34px] h-[34px] rounded-full bg-blue-tint text-blue-deep flex items-center justify-center text-xs font-bold flex-shrink-0">SL</span>
        <span className="flex-1 min-w-0">
          <span className="block text-[13.5px] font-semibold text-ink">Sarah Lindt — Call this week?</span>
          <span className="block text-xs text-muted">Tuesday or Wednesday afternoon works…</span>
        </span>
        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-tint text-blue-deep whitespace-nowrap flex-shrink-0">Task created</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-3.5 rounded-[14px] bg-white border border-hairline-2">
        <span className="w-[34px] h-[34px] rounded-full bg-petrol-tint text-petrol flex items-center justify-center text-xs font-bold flex-shrink-0">SN</span>
        <span className="flex-1 min-w-0">
          <span className="block text-[13.5px] font-semibold text-ink">Studio North — Scope for the Q3 site</span>
          <span className="block text-xs text-muted">We’d love a quote for the redesign…</span>
        </span>
        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-petrol-tint text-petrol whitespace-nowrap flex-shrink-0">Captured as deal</span>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-1 px-1 pt-3 border-t border-hairline-2">
        <span className="text-xs text-muted">Gmail · Outlook · IMAP</span>
        <span className="flex items-center gap-1.5 text-[11.5px] text-muted"><Shield className="w-3 h-3 text-teal-deep" />Nothing sends itself</span>
      </div>
    </div>
  )
}

const kanban = [
  { col: 'LEAD',        total: '$4,000',  name: 'Corver & Co',  sub: 'New · from referral',      amount: '$4,000',  note: null,                          noteColor: '', pop: true },
  { col: 'PROPOSAL',    total: '$12,000', name: 'Acme Corp',    sub: 'Sent 6d ago · viewed 2×',  amount: '$12,000', note: 'No reply yet',                noteColor: 'bg-brand-red text-red-deep', pop: false },
  { col: 'NEGOTIATION', total: '$8,500',  name: 'Studio North', sub: 'Call Tue · 2:00 PM',       amount: '$8,500',  note: 'Prep notes drafted',          noteColor: 'bg-teal text-teal-deep', pop: false },
]

function PipelineMock() {
  return (
    <div className={`${mockCard} space-y-2.5`} aria-hidden="true">
      <div className="flex items-center justify-between px-1 pb-1">
        <span className="text-[15px] font-bold text-ink">Pipeline</span>
        <span className="text-[10.5px] font-bold tracking-[0.14em] text-muted uppercase">Open · $24,500</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {kanban.map((c) => (
          <div key={c.col} className="bg-inset rounded-[14px] p-2 space-y-2">
            <div className="flex items-center justify-between gap-2 px-1 pt-0.5">
              <span className="text-[10px] font-bold tracking-[0.12em] text-muted">{c.col}</span>
              <span className="text-[10px] font-bold text-muted">{c.total}</span>
            </div>
            <div className={`bg-white border border-hairline-2 rounded-[10px] px-3 py-2.5 space-y-0.5 ${c.pop ? 'anim-pop-in' : ''}`}>
              <span className="block text-xs font-bold text-ink">{c.name}</span>
              <span className="block text-[11px] text-muted">{c.sub}</span>
              <span className="block text-xs font-bold text-ink">{c.amount}</span>
            </div>
            {c.col === 'LEAD' && (
              <div className="border-[1.5px] border-dashed border-[#d5cdb8] rounded-[10px] py-2 text-center text-[10px] font-semibold text-faint">New leads land here</div>
            )}
            {c.note && (
              <div className="flex items-center gap-1.5 px-1">
                <span className={`w-1.5 h-1.5 rounded-full ${c.noteColor.split(' ')[0]}`} />
                <span className={`text-[10px] font-semibold ${c.noteColor.split(' ')[1]}`}>{c.note}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <SuggestionStrip text="Zuko suggests: nudge Acme — the follow-up is drafted" duration="12s" />
    </div>
  )
}

const invoices = [
  { id: 'INV-0042 · Acme Corp',    sub: 'Sent Apr 2 · Net 14',            chip: 'Overdue 14d',   chipColor: 'bg-red-tint text-red-deep',    amount: '$3,400', bold: true },
  { id: 'INV-0047 · Studio North', sub: 'Sent Apr 12 · Net 30',           chip: 'Due in 5 days', chipColor: 'bg-blue-tint text-blue-deep',  amount: '$2,600', bold: false },
  { id: 'INV-0051 · Corver & Co',  sub: 'Sent today · PDF viewable online', chip: 'Sent',        chipColor: 'bg-teal-tint text-teal-deep',  amount: '$2,200', bold: false },
]

function ReceivablesMock() {
  return (
    <div className={`${mockCard} space-y-2.5`} aria-hidden="true">
      <div className="flex items-center justify-between px-1 pb-1">
        <span className="text-[15px] font-bold text-ink">Receivables</span>
        <span className="text-[10.5px] font-bold tracking-[0.14em] text-muted uppercase">Outstanding · $8,200</span>
      </div>
      <div className="h-2.5 rounded-full bg-skeleton overflow-hidden flex mx-0.5">
        <div className="anim-grow-seg w-[41.5%] bg-brand-red" />
        <div className="anim-grow-seg w-[31.7%] bg-brand-blue" style={{ animationDelay: '0.3s' }} />
        <div className="anim-grow-seg w-[26.8%] bg-teal" style={{ animationDelay: '0.6s' }} />
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 px-0.5 pb-0.5">
        {[['bg-brand-red', 'Overdue', '$3,400'], ['bg-brand-blue', 'Due soon', '$2,600'], ['bg-teal', 'Sent', '$2,200']].map(([dot, label, val]) => (
          <span key={label} className="flex items-center gap-1.5 text-[11.5px] text-body">
            <span className={`w-[7px] h-[7px] rounded-full ${dot}`} />
            {label} · <span className="font-bold text-ink">{val}</span>
          </span>
        ))}
      </div>
      <div className="bg-white border border-hairline-2 rounded-[14px] px-4 py-0.5">
        {invoices.map((inv, i) => (
          <div key={inv.id} className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 py-3 ${i < invoices.length - 1 ? 'border-b border-inset' : ''}`}>
            <span className="flex-1 min-w-0">
              <span className={`block text-[13px] text-ink ${inv.bold ? 'font-bold' : 'font-semibold'}`}>{inv.id}</span>
              <span className="block text-xs text-muted">{inv.sub}</span>
            </span>
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${inv.chipColor}`}>{inv.chip}</span>
            <span className="text-[13px] font-bold text-ink w-[52px] text-right flex-shrink-0">{inv.amount}</span>
          </div>
        ))}
      </div>
      <SuggestionStrip text="Chaser for INV-0042 drafted — waiting for your approval" duration="13s" />
    </div>
  )
}

const gantt = [
  { label: 'Sitemap',        left: '0%',  width: '36%', bar: 'bg-teal',       who: 'SL',  whoColor: 'bg-blue-tint text-blue-deep', delay: '0s' },
  { label: 'Design system',  left: '30%', width: '36%', bar: 'bg-brand-blue', who: 'DK',  whoColor: 'bg-teal-tint text-teal-deep', delay: '0.3s' },
  { label: 'Build & launch', left: '60%', width: '38%', bar: 'bg-ink',        who: 'You', whoColor: 'bg-ink text-cream-text',      delay: '0.6s' },
]

function ProjectPlanMock() {
  return (
    <div className={`${mockCard} space-y-2.5`} aria-hidden="true">
      <div className="flex items-center justify-between px-1 pb-1">
        <span className="text-[15px] font-bold text-ink">Website relaunch</span>
        <span className="text-[10.5px] font-bold tracking-[0.14em] text-muted uppercase">Drafted from your brief</span>
      </div>
      <div className="px-4 py-3 rounded-xl bg-inset text-xs leading-relaxed text-body italic">“Redesign the Studio North site, launch mid-May, keep it under $10k.”</div>
      <div className="relative bg-white border border-hairline-2 rounded-[14px] pt-5 pb-4 px-4 mt-1.5 space-y-3">
        <div className="absolute left-[52%] top-2 bottom-2 w-0 border-l-[1.5px] border-dashed border-[#c2ba9f]" />
        <div className="absolute left-[52%] -top-2 -translate-x-1/2 text-[9px] font-bold tracking-[0.12em] text-muted bg-paper border border-card-border rounded-full px-2 py-0.5">TODAY</div>
        {gantt.map((g) => (
          <div key={g.label} className="flex items-center gap-2.5">
            <span className="w-20 sm:w-[92px] text-xs font-semibold text-body flex-shrink-0">{g.label}</span>
            <div className="flex-1 h-[18px] rounded-full bg-inset relative overflow-hidden">
              <div className={`anim-grow-seg absolute top-0 bottom-0 rounded-full ${g.bar}`} style={{ left: g.left, width: g.width, animationDelay: g.delay, animationDuration: '14s' }} />
            </div>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[9.5px] font-bold flex-shrink-0 ${g.whoColor}`}>{g.who}</span>
          </div>
        ))}
        <div className="flex justify-between pl-[88px] sm:pl-[102px] text-[10px] font-semibold text-faint">
          <span>Apr 21</span>
          <span>May 15</span>
        </div>
      </div>
      <div className="anim-rise-in flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-red-tint" style={{ animationDuration: '14s' }}>
        <AlertCircle className="w-3.5 h-3.5 text-red-deep flex-shrink-0" />
        <span className="flex-1 text-xs font-semibold text-ink">Risk: content delivery may slip — a buffer week is planned in</span>
      </div>
    </div>
  )
}

const mocks = [InboxMock, PipelineMock, ReceivablesMock, ProjectPlanMock]

export default function Features() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-32">
          {features.map((feature, i) => {
            const Mock = mocks[i]
            return (
              <div key={i} className={`scroll-reveal from-up grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 ${feature.chip}`}>
                    <feature.icon className="w-4 h-4" />
                    <span>{feature.title}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.02em] text-ink mb-6 leading-[1.12]">{feature.headline}</h3>
                  <p className="text-lg text-body mb-8">{feature.desc}</p>
                  <ul className="space-y-4">
                    {feature.points.map((point, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-teal-tint flex items-center justify-center flex-shrink-0"><Check className="w-3.5 h-3.5 text-teal-deep" strokeWidth={3} /></div>
                        <span className="text-ink">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`relative hover:scale-[1.02] transition-transform duration-300 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Mock />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
