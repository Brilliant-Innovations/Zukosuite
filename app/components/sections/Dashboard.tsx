import { Sparkles, Users, Mail, TrendingUp, DollarSign, FileText, Calendar, Briefcase, FolderKanban, AlertTriangle, Clock, CircleDot, Activity, ChevronRight, ArrowRight, GripVertical, Check } from 'lucide-react'

const flowRows = [
  { time: '9:00 AM',  title: 'Follow up with Acme Corp',   sub: 'Check in on proposal and next steps',   tile: 'bg-petrol-tint', iconColor: 'text-petrol',    icon: Users,      tools: [{ t: 'bg-teal-tint', c: 'text-teal-deep', i: Mail }, { t: 'bg-blue-tint', c: 'text-blue-deep', i: TrendingUp }], delay: '0s' },
  { time: '11:30 AM', title: 'Review Q4 invoices',         sub: 'Validate amounts and flag anomalies',   tile: 'bg-teal-tint',   iconColor: 'text-teal-deep', icon: DollarSign, tools: [{ t: 'bg-petrol-tint', c: 'text-petrol', i: DollarSign }, { t: 'bg-inset', c: 'text-body', i: FileText }],    delay: '0.35s' },
  { time: '2:00 PM',  title: 'Project kickoff with Sarah', sub: 'Align on goals, timeline and owners',   tile: 'bg-red-tint',    iconColor: 'text-red-deep',  icon: Calendar,   tools: [{ t: 'bg-red-tint', c: 'text-red-deep', i: Calendar }, { t: 'bg-blue-tint', c: 'text-blue-deep', i: Briefcase }], delay: '0.7s' },
]

const projectChips = [
  { dot: 'bg-teal',       label: 'Acme Corp · Website relaunch' },
  { dot: 'bg-brand-blue', label: 'Studio North · Brand system' },
  { dot: 'bg-brand-red',  label: 'Harbor Legal · Intake portal' },
  { dot: 'bg-petrol',     label: 'Meridian · Q4 campaign' },
  { dot: null,            label: '+ 3 more' },
]

const projectStats = [
  { icon: CircleDot,     label: 'Active',        value: '7 projects' },
  { icon: Clock,         label: 'Due this week', value: '3 milestones' },
  { icon: AlertTriangle, label: 'At risk',       value: '1 · Harbor Legal' },
  { icon: Briefcase,     label: 'Open tasks',    value: '42 · 6 blocked' },
]

const queueRows = [
  { tile: 'bg-teal-tint',   iconColor: 'text-teal-deep', icon: Mail,       title: 'Follow-up email to Acme Corp', sub: 'Proposal follow-up and next steps', time: '9:00 AM' },
  { tile: 'bg-petrol-tint', iconColor: 'text-petrol',    icon: DollarSign, title: 'Invoice reminder — INV-0047',  sub: 'Studio North · due in 5 days',      time: '10:30 AM' },
  { tile: 'bg-red-tint',    iconColor: 'text-red-deep',  icon: Calendar,   title: 'Project kickoff agenda',       sub: 'Share agenda and pre-read',         time: '11:45 AM' },
  { tile: 'bg-blue-tint',   iconColor: 'text-blue-deep', icon: Briefcase,  title: 'Weekly status update',         sub: 'Tasks, owners, and blockers',       time: '3:20 PM' },
]

export default function Dashboard() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="scroll-reveal from-up text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-[-0.03em] text-ink mb-6 leading-[1.1]">
            Finally, a system that <span className="marker">fits how you work</span>
          </h2>
          <p className="text-xl text-body max-w-2xl mx-auto">Every module is a drag-and-drop widget — arrange your workspace around how you think, whether that&apos;s tasks, emails, or deals. Pick a theme, keep personal and business side by side.</p>
        </div>

        <div className="scroll-reveal from-up relative max-w-5xl mx-auto" style={{ animationDelay: '0.08s' }}>
          <div className="relative rounded-[30px] border-[1.5px] border-dashed border-[#d5cdb8] p-2.5 sm:p-3">
          <span className="absolute -top-2.5 left-6 px-2.5 bg-cream text-[10px] font-bold tracking-[0.14em] text-muted uppercase">From the product · illustrative data</span>
          <div className="relative bg-paper rounded-[22px] border border-card-border p-3 sm:p-5 shadow-[0_18px_44px_rgba(56,48,24,0.09)] overflow-hidden" aria-hidden="true">
            <div className="grid md:grid-cols-3 gap-4">

              {/* Today's Flow + Projects */}
              <div className="md:col-span-2 min-w-0 space-y-4">
                <div className="p-3.5 sm:p-4 rounded-[16px] bg-white border border-hairline-2">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <GripVertical className="w-4 h-4 text-[#c2ba9f] flex-shrink-0" />
                    <div className="w-9 h-9 rounded-[10px] bg-teal-tint flex items-center justify-center flex-shrink-0"><Sparkles className="w-4 h-4 text-teal-deep fill-current" /></div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[15px] font-bold text-ink">Today&apos;s Flow</h4>
                      <p className="text-xs text-muted">AI-orchestrated next steps across tools and teams.</p>
                    </div>
                    <span className="hidden sm:inline-block text-[10.5px] font-bold tracking-[0.12em] px-3 py-1.5 rounded-full bg-teal-tint text-teal-deep whitespace-nowrap uppercase">AI Orchestrated</span>
                  </div>

                  {flowRows.map((row, i) => (
                    <div key={i} className="flex gap-3.5">
                      <div className="flex flex-col items-center self-stretch pt-3.5">
                        <span className="anim-pop-in w-[22px] h-[22px] rounded-full bg-teal flex items-center justify-center flex-shrink-0" style={{ animationDelay: row.delay, animationDuration: '16s' }}>
                          <Check className="w-3 h-3 text-panel" strokeWidth={3} />
                        </span>
                        {i < flowRows.length - 1 && <span className="flex-1 w-0 border-l-[1.5px] border-dashed border-teal/45 mt-1" />}
                      </div>
                      <div className="flex-1 min-w-0 flex items-center gap-2.5 sm:gap-3.5 px-3 py-2 rounded-xl bg-paper-2 mb-2">
                        <span className="px-2.5 py-1 rounded-full bg-white border border-hairline-2 text-[11px] font-bold text-body whitespace-nowrap flex-shrink-0">{row.time}</span>
                        <span className={`w-8 h-8 rounded-[9px] ${row.tile} flex items-center justify-center flex-shrink-0`}><row.icon className={`w-4 h-4 ${row.iconColor}`} /></span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-[13.5px] font-bold text-ink">{row.title}</span>
                          <span className="block text-xs text-muted">{row.sub}</span>
                        </span>
                        <span className="hidden sm:flex gap-1.5 flex-shrink-0">
                          {row.tools.map((tool, k) => (
                            <span key={k} className={`w-[22px] h-[22px] rounded-md ${tool.t} flex items-center justify-center`}><tool.i className={`w-3 h-3 ${tool.c}`} /></span>
                          ))}
                        </span>
                        <ChevronRight className="hidden sm:block w-4 h-4 text-[#c2ba9f] flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 sm:p-4 rounded-[16px] bg-white border border-hairline-2">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <GripVertical className="w-4 h-4 text-[#c2ba9f] flex-shrink-0" />
                    <div className="w-9 h-9 rounded-[10px] bg-blue-tint flex items-center justify-center flex-shrink-0"><FolderKanban className="w-4 h-4 text-blue-deep" /></div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[15px] font-bold text-ink">Projects</h4>
                      <p className="text-xs text-muted">Active projects and nearest deadlines, linked to clients, tasks, and invoices.</p>
                    </div>
                    <span className="hidden md:flex items-center gap-0.5 text-xs font-bold text-teal-deep whitespace-nowrap flex-shrink-0">Open Projects<ChevronRight className="w-3.5 h-3.5" /></span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projectChips.map((chip) => (
                      <span key={chip.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] bg-paper-2 border border-hairline-2 text-xs font-semibold text-ink">
                        {chip.dot && <span className={`w-2 h-2 rounded-full ${chip.dot}`} />}
                        {chip.label}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 pt-3 border-t border-hairline-2">
                    {projectStats.map((stat, i) => (
                      <div key={stat.label} className={`flex items-center gap-2.5 px-3.5 py-1 ${i > 0 ? 'lg:border-l lg:border-hairline-2' : ''}`}>
                        <stat.icon className="w-4 h-4 text-teal-deep flex-shrink-0" />
                        <span className="min-w-0">
                          <span className="block text-xs font-bold text-ink truncate">{stat.label}</span>
                          <span className="block text-[11.5px] text-muted">{stat.value}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Business Pulse + Draft Queue */}
              <div className="min-w-0 space-y-4">
                <div className="p-3.5 sm:p-4 rounded-[16px] bg-white border border-hairline-2">
                  <div className="flex items-center gap-2.5 mb-4">
                    <GripVertical className="w-4 h-4 text-[#c2ba9f] flex-shrink-0" />
                    <Activity className="w-[18px] h-[18px] text-teal-deep" />
                    <h4 className="text-[15px] font-bold text-ink">Business Pulse</h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      { tile: 'bg-teal-tint', iconColor: 'text-teal-deep', icon: TrendingUp, label: 'Deals',    value: '$24,500', bar: 'bg-teal',       width: 'w-3/4', delta: '+17% vs last 7 days', delay: '0s' },
                      { tile: 'bg-blue-tint', iconColor: 'text-blue-deep', icon: FileText,   label: 'Invoices', value: '$8,200',  bar: 'bg-brand-blue', width: 'w-1/2', delta: '+12% vs last 7 days', delay: '0.3s' },
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center gap-3">
                        <span className={`w-[34px] h-[34px] rounded-[10px] ${stat.tile} flex items-center justify-center flex-shrink-0`}><stat.icon className={`w-4 h-4 ${stat.iconColor}`} /></span>
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex justify-between items-baseline"><span className="text-[13.5px] font-bold text-ink">{stat.label}</span><span className="text-[15px] font-bold text-ink">{stat.value}</span></div>
                          <div className="h-[7px] rounded-full bg-skeleton overflow-hidden"><div className={`anim-grow-seg h-full rounded-full ${stat.bar} ${stat.width}`} style={{ animationDelay: stat.delay, animationDuration: '16s' }} /></div>
                          <div className="flex justify-end items-center gap-1"><TrendingUp className="w-2.5 h-2.5 text-teal-deep" /><span className="text-[11px] font-bold text-teal-deep whitespace-nowrap">{stat.delta}</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-[16px] bg-white border border-hairline-2">
                  <div className="flex items-center gap-2.5 mb-2">
                    <GripVertical className="w-4 h-4 text-[#c2ba9f] flex-shrink-0" />
                    <h4 className="text-[15px] font-bold text-ink">Draft Queue</h4>
                    <span className="w-5 h-5 rounded-full bg-teal-tint text-teal-deep flex items-center justify-center text-[11px] font-bold">4</span>
                    <span className="flex-1 text-right text-[11px] text-muted truncate">Awaiting your review</span>
                  </div>
                  <div>
                    {queueRows.map((row) => (
                      <div key={row.title} className="flex items-center gap-2.5 py-2">
                        <span className={`w-7 h-7 rounded-md ${row.tile} flex items-center justify-center flex-shrink-0`}><row.icon className={`w-3.5 h-3.5 ${row.iconColor}`} /></span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-xs font-bold text-ink truncate">{row.title}</span>
                          <span className="block text-[11px] text-muted truncate">{row.sub}</span>
                        </span>
                        <span className="text-[10.5px] text-muted whitespace-nowrap flex-shrink-0">{row.time}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-inset text-body flex-shrink-0">Draft</span>
                      </div>
                    ))}
                  </div>
                  <div className="anim-rise-in mt-2.5 flex items-center justify-center gap-2 py-2.5 bg-ink text-cream-text rounded-xl text-[13px] font-semibold" style={{ animationDuration: '16s' }}>
                    Review &amp; Approve (4)<ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
