import { AlertCircle, ArrowRight } from 'lucide-react'

const pairs = [
  {
    pain: 'Chase overdue invoices by hand',
    fix:  'Zuko monitors receivables and drafts follow-up emails for your review.',
  },
  {
    pain: 'Lose deal context while switching between tools',
    fix:  'CRM, finance, calendar, and projects share one business context.',
  },
  {
    pain: 'Miss a follow-up and risk the relationship',
    fix:  'Automations watch deadlines and receivables around the clock and surface what needs attention before it slips.',
  },
  {
    pain: 'Rebuild project plans from scratch every time',
    fix:  'Describe the work and Zuko drafts tasks, timelines, and risks.',
  },
  {
    pain: 'Keep checking who has paid and who has not',
    fix:  'Invoices, clients, projects, and payment status stay connected in one view.',
  },
  {
    pain: 'Spend Monday just catching up on email',
    fix:  'Zuko summarises, prioritises, and drafts the next step.',
  },
]

export default function PainPoints() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="scroll-reveal from-up text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The admin work that{' '}
            <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
              steals your billable hours
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            The hours that don&apos;t earn anything — Zuko turns them into drafts waiting for your approval.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pairs.map((pair, i) => (
            <div
              key={i}
              className="scroll-reveal from-up rounded-2xl overflow-hidden border border-white/5 bg-slate-900/50 backdrop-blur-sm hover:-translate-y-1.5 transition-all duration-300"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Pain */}
              <div className="flex items-start gap-3 px-6 pt-6 pb-4 border-b border-white/5">
                <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 font-medium leading-snug">{pair.pain}</p>
              </div>

              {/* Resolution */}
              <div className="flex items-start gap-3 px-6 py-4 bg-indigo-500/5">
                <ArrowRight className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-snug">{pair.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
