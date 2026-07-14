import { Sparkles } from 'lucide-react'

export default function Dashboard() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="scroll-reveal from-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Finally, a system that <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">fits how you work</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Every module is a drag-and-drop widget — arrange your workspace around how you think, whether that&apos;s tasks, emails, or deals. Pick a theme, keep personal and business side by side.</p>
        </div>

        <div className="scroll-reveal from-up relative" style={{ animationDelay: '0.15s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
          <div className="relative bg-slate-900/80 rounded-3xl border border-white/10 p-8 backdrop-blur-xl overflow-hidden">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-white">Today&apos;s Agenda</h4>
                    <span className="text-xs text-slate-500">AI Generated</span>
                  </div>
                  <div className="space-y-3">
                    {[{ time: "9:00 AM", task: "Follow up with Acme Corp", type: "CRM" }, { time: "11:30 AM", task: "Review Q4 invoices", type: "Finance" }, { time: "2:00 PM", task: "Project kickoff with Sarah", type: "Meeting" }].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-slate-900/50">
                        <span className="text-sm text-slate-500 w-20">{item.time}</span>
                        <span className="text-slate-200 flex-1">{item.task}</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300">{item.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/5">
                  <h4 className="font-semibold text-white mb-4">Quick Stats</h4>
                  <div className="space-y-4">
                    {[{ label: "Deals", value: "$24,500", width: "3/4" }, { label: "Invoices", value: "$8,200", width: "1/2", color: "from-green-500 to-emerald-500" }].map((stat, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1"><span className="text-slate-400">{stat.label}</span><span className="text-white">{stat.value}</span></div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden"><div className={`h-full w-${stat.width} bg-gradient-to-r ${stat.color || 'from-indigo-500 to-purple-500'}`} /></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20">
                  <div className="flex items-center gap-2 mb-2"><Sparkles className="w-5 h-5 text-indigo-400" /><span className="font-semibold text-white">Draft ready</span></div>
                  <p className="text-sm text-slate-300">3 emails need responses today. Replies are drafted and waiting for your review.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}