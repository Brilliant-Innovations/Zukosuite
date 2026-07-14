import { Shield, Lock, Layers, Mail } from 'lucide-react'

const items = [
  { icon: Shield, text: "Nothing sent without you" },
  { icon: Lock, text: "Secure workspace isolation" },
  { icon: Layers, text: "One connected client workflow" },
  { icon: Mail, text: "Works with Gmail, Outlook & IMAP" },
]

export default function TrustStrip() {
  return (
    <section className="relative py-12 border-y border-white/5 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {items.map((item, i) => (
            <div
              key={i}
              className="scroll-reveal from-up group flex items-center gap-3 text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <item.icon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 group-hover:[animation:icon-pulse_1s_ease-in-out_infinite] transition-colors duration-300" />
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
