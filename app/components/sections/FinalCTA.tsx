import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 to-slate-950" />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="scroll-reveal from-up">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Stop managing software.<span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Start running your business.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Let Zuko handle the organizing, the chasing, and the busywork — so you can focus on what actually matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/waitlist"
              className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-white text-lg shadow-2xl shadow-indigo-500/25 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 hover:shadow-[0_0_60px_rgba(99,102,241,0.4)] transition-all duration-200"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="px-10 py-5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 text-lg flex items-center justify-center gap-2 backdrop-blur-sm hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Book a Demo
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-500">
            {["Free during early access", "No credit card required", "Invite-only beta"].map((item, i) => (
              <span key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" />{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
