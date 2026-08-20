import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="scroll-reveal from-up">
          <h2 className="font-display font-black text-5xl md:text-7xl tracking-[-0.035em] text-ink mb-8 leading-[1.04]">
            Stop managing software.<span className="block marker w-fit mx-auto">Start running your business.</span>
          </h2>
          <p className="text-xl text-body mb-12 max-w-2xl mx-auto">
            Let Zuko handle the organizing, the chasing, and the busywork — so you can focus on what actually matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/waitlist"
              className="px-10 py-5 bg-ink rounded-full font-semibold text-cream-text text-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 active:scale-95 hover:shadow-[0_10px_30px_rgba(56,48,24,0.28)] transition-all duration-200 shadow-[0_6px_18px_rgba(56,48,24,0.18)]"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="px-10 py-5 rounded-full font-semibold text-ink border-[1.5px] border-ink hover:bg-ink/5 text-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              Book a Demo
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-muted">
            {["Free during early access", "No credit card required", "Invite-only beta"].map((item, i) => (
              <span key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-deep" />{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
