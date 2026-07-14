import { Mail, TrendingUp, DollarSign, Briefcase, CheckCircle } from 'lucide-react'

const features = [
  { icon: Mail,       title: "Inbox & Messaging",   headline: "See what matters. Reply with a draft already ready.",       desc: "Zuko reads your inbox, surfaces priority messages, and prepares replies for your review.",                         points: ["Works with Gmail, Outlook, and any IMAP inbox", "Replies drafted for your approval", "Emails captured as tasks or deals"] },
  { icon: TrendingUp, title: "CRM & Pipeline",       headline: "Never lose a deal because you forgot to follow up.",       desc: "Zuko tracks deal status and suggests the right next action — across the full client relationship.",               points: ["Full client context in one view", "Follow-up suggestions, ready to review", "Pipeline visibility without complexity"] },
  { icon: DollarSign, title: "Finance & Invoicing",  headline: "Know what you’re owed. Collection emails ready to send.", desc: "Zuko tracks receivables, flags what’s overdue, and prepares payment follow-ups for your review.",                 points: ["Real-time receivables view", "Collection emails drafted for approval", "Professional PDF invoices your clients can view online"] },
  { icon: Briefcase,  title: "Project Management",   headline: "From brief to structured plan — ready for your review.",  desc: "Describe the work and Zuko drafts the plan — tasks, owners, timelines, risks — for your approval.",               points: ["Tasks, timelines, and risks drafted", "Scales from simple to complex", "Connected to clients and finance"] },
]

export default function Features() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-32">
          {features.map((feature, i) => (
            <div key={i} className={`scroll-reveal from-up grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-6">
                  <feature.icon className="w-4 h-4" />
                  <span>{feature.title}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{feature.headline}</h3>
                <p className="text-lg text-slate-400 mb-8">{feature.desc}</p>
                <ul className="space-y-4">
                  {feature.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center"><CheckCircle className="w-4 h-4 text-indigo-400" /></div>
                      <span className="text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`relative hover:scale-[1.02] transition-transform duration-300 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
                <div className="relative bg-slate-900/80 rounded-3xl p-8 border border-white/10 backdrop-blur-xl">
                  <div className="space-y-4">
                    {[...Array(4)].map((_, k) => (
                      <div key={k} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center"><feature.icon className="w-5 h-5 text-indigo-400" /></div>
                        <div className="flex-1"><div className="h-2 bg-slate-700 rounded-full w-3/4 mb-2" /><div className="h-2 bg-slate-700 rounded-full w-1/2" /></div>
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center"><CheckCircle className="w-4 h-4 text-green-400" /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
