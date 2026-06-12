import { Briefcase, Target, Users } from 'lucide-react'

const audiences = [
  { icon: Briefcase, title: "Freelancers", desc: "Managing multiple clients without losing track", color: "from-blue-500 to-cyan-500" },
  { icon: Target, title: "Consultants", desc: "Juggling projects, invoices, and communication", color: "from-purple-500 to-pink-500" },
  { icon: Users, title: "Small Teams", desc: "Need everything in one place, without complexity", color: "from-orange-500 to-red-500" },
]

export default function WhoItsFor() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="scroll-reveal from-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for people who <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">actually run</span> their business
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {audiences.map((audience, i) => (
            <div
              key={i}
              className="scroll-reveal from-up group p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-indigo-500/30 hover:-translate-y-2.5 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${audience.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <audience.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>
              <p className="text-slate-400">{audience.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="scroll-reveal p-8 rounded-2xl bg-slate-800/50 border border-white/10 text-center"
          style={{ animationDelay: '0.3s' }}
        >
          <p className="text-slate-300 font-semibold mb-4 uppercase tracking-widest text-xs">Not for</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Large enterprises with heavy bureaucracy", "Teams that prefer disconnected tools"].map((item, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-slate-700/80 border border-white/10 text-slate-300 text-sm">✕ {item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
