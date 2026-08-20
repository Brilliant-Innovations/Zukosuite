import { Briefcase, Target, Users, X } from 'lucide-react'

const audiences = [
  { icon: Briefcase, title: "Freelancers", desc: "Managing multiple clients without losing track", tile: 'bg-teal-tint', iconColor: 'text-teal-deep' },
  { icon: Target, title: "Consultants", desc: "Juggling projects, invoices, and communication", tile: 'bg-blue-tint', iconColor: 'text-brand-blue' },
  { icon: Users, title: "Small Teams", desc: "Need everything in one place, without complexity", tile: 'bg-red-tint', iconColor: 'text-red-deep' },
]

export default function WhoItsFor() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="scroll-reveal from-up text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-[-0.03em] text-ink mb-6 leading-[1.1]">
            Built for people who <span className="marker">actually run</span> their business
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {audiences.map((audience, i) => (
            <div
              key={i}
              className="scroll-reveal from-up group p-8 rounded-[20px] bg-paper border border-card-border hover:border-[#d5cdb8] hover:-translate-y-2.5 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className={`w-14 h-14 rounded-[15px] ${audience.tile} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <audience.icon className={`w-7 h-7 ${audience.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{audience.title}</h3>
              <p className="text-body">{audience.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="scroll-reveal p-8 rounded-[20px] bg-inset border border-hairline text-center"
          style={{ animationDelay: '0.15s' }}
        >
          <p className="text-muted font-bold mb-4 uppercase tracking-[0.2em] text-[11px]">Not for</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Large enterprises with heavy bureaucracy", "Teams that prefer disconnected tools"].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paper border border-card-border text-body text-sm">
                <X className="w-3 h-3 text-red-deep" strokeWidth={2.6} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
