import { Lock, Users, Shield, CheckCircle } from 'lucide-react'

export default function Security() {
  return (
    <section id="security" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal from-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6">
              <Lock className="w-4 h-4" />
              <span>Security by design</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your data stays yours.<span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Always.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8">Every workspace is isolated with row-level security, enforced at the database itself. Your data is never used to train AI models.</p>
            <div className="space-y-4">
              {[{ icon: Lock, text: "Private workspaces with strict isolation" }, { icon: Users, text: "Role-based access control" }, { icon: Shield, text: "Encrypted credentials & integrations" }, { icon: CheckCircle, text: "Audit trail for AI-drafted and user-approved actions" }].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center"><item.icon className="w-5 h-5 text-green-400" /></div>
                  <span className="text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-reveal from-right relative" style={{ animationDelay: '0.15s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-slate-900/80 rounded-3xl p-8 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center"><Shield className="w-6 h-6 text-green-400" /></div>
                  <div>
                    <div className="font-semibold text-white">Security Status</div>
                    <div className="text-sm text-green-400">All systems secure</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">Active</div>
              </div>
              <div className="space-y-4">
                {[{ label: "Workspace isolation", status: "Row-level security" }, { label: "Credential encryption", status: "AES-256-GCM" }, { label: "Encryption keys", status: "Rotation supported" }, { label: "Encryption in transit", status: "TLS" }].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-white font-medium">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}