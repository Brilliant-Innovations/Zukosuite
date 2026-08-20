import { Lock, Users, Shield, CheckCircle } from 'lucide-react'

export default function Security() {
  return (
    <section id="security" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal from-left">
            <div className="inline-flex items-center gap-2 text-teal-deep mb-6">
              <Lock className="w-3.5 h-3.5" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase">Security by design</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-[-0.03em] text-ink mb-6 leading-[1.08]">
              Your data stays yours.<span className="block marker w-fit">Always.</span>
            </h2>
            <p className="text-lg text-body mb-8">Every workspace is isolated with row-level security, enforced at the database itself. Your data is never used to train AI models.</p>
            <div className="space-y-4">
              {[{ icon: Lock, text: "Private workspaces with strict isolation" }, { icon: Users, text: "Role-based access control" }, { icon: Shield, text: "Encrypted credentials & mail/calendar connections" }, { icon: CheckCircle, text: "Audit trail for AI-drafted and user-approved actions" }].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[11px] bg-teal-tint flex items-center justify-center flex-shrink-0"><item.icon className="w-5 h-5 text-teal-deep" /></div>
                  <span className="text-ink">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-reveal from-right relative" style={{ animationDelay: '0.08s' }}>
            <div className="relative bg-paper rounded-3xl p-8 border border-card-border shadow-[0_18px_44px_rgba(56,48,24,0.08)]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-[13px] bg-teal-tint flex items-center justify-center"><Shield className="w-6 h-6 text-teal-deep" /></div>
                  <div>
                    <div className="font-bold text-ink">Security Status</div>
                    <div className="text-sm font-semibold text-teal-deep">All systems secure</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-teal-tint text-teal-deep text-xs font-bold">Active</div>
              </div>
              <div className="space-y-2.5">
                {[{ label: "Workspace isolation", status: "Row-level security" }, { label: "Credential encryption", status: "AES-256-GCM" }, { label: "Encryption keys", status: "Rotation supported" }, { label: "Encryption in transit", status: "TLS" }].map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-4.5 py-4 rounded-xl bg-inset">
                    <span className="text-muted text-sm">{item.label}</span>
                    <span className="flex items-center gap-2 text-ink text-sm font-bold"><CheckCircle className="w-3.5 h-3.5 text-teal-deep" />{item.status}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4 pt-3.5 border-t border-hairline-2">
                <span className="anim-soft-pulse w-2 h-2 rounded-full bg-teal" />
                <span className="text-xs text-muted">Audit trail · 14:32 — invoice chaser approved by you</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
