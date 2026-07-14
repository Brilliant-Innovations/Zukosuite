import { X, CheckCircle, Command } from 'lucide-react'

const problems = [
  { tool: "Inbox", knows: "emails", missing: "invoices & deals" },
  { tool: "CRM", knows: "deals", missing: "calendar & emails" },
  { tool: "Calendar", knows: "meetings", missing: "project context" },
]

export default function CoreIdea() {
  return (
    <section id="features" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="scroll-reveal from-up text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Every tool knows </span>
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">one thing.</span>
            <br />
            <span className="text-white">Zuko sees </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">the whole picture.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {problems.map((item, i) => (
            <div
              key={i}
              className="scroll-reveal from-up relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:-translate-y-2.5 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-slate-700 mb-4">0{i + 1}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.tool}</h3>
              <p className="text-slate-400 mb-4">Knows: <span className="text-slate-300">{item.knows}</span></p>
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <X className="w-4 h-4" />
                <span>Missing: {item.missing}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-reveal from-scale relative p-12 rounded-3xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Right now, YOU are the integration</h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Copying data between apps. Reconnecting context by hand. Holding the whole picture in your head. Let Zuko do that for you! What it does:
              </p>
              <div className="space-y-4">
                {["Tracks your full client-work context", "Remembers your clients, preferences, and history — you never re-explain", "Surfaces and drafts the next step across modules", "Keeps you in control — everything waits for your approval"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />
              <div className="relative bg-slate-950 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Command className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm text-slate-400">Ask Zuko anything</span>
                </div>
                <div className="space-y-3">
                  {["Follow up on overdue invoices →", "What needs my attention today? →", "Schedule a call with Sarah →"].map((cmd, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-900 border border-white/5 text-sm text-slate-300 font-mono cursor-pointer hover:border-indigo-500/30 hover:translate-x-1.5 transition-all duration-200">{cmd}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}