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
    fix:  'Zuko summarizes, prioritizes, and drafts the next step.',
  },
]

export default function PainPoints() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="scroll-reveal from-up text-center mb-20">
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-[-0.03em] text-ink mb-6 leading-[1.1]">
            The admin work that{' '}
            <span className="marker-red">steals your billable hours</span>
          </h2>
          <p className="text-xl text-body max-w-2xl mx-auto">
            The hours that don&apos;t earn anything — Zuko turns them into drafts waiting for your approval.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pairs.map((pair, i) => (
            <div
              key={i}
              className="scroll-reveal from-up rounded-[18px] overflow-hidden border border-card-border bg-paper hover:-translate-y-1.5 transition-all duration-300"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {/* Pain */}
              <div className="flex items-start gap-3 px-6 pt-6 pb-4 border-b border-hairline-2">
                <AlertCircle className="w-5 h-5 text-red-deep flex-shrink-0 mt-0.5" />
                <p className="text-ink font-semibold leading-snug">{pair.pain}</p>
              </div>

              {/* Resolution */}
              <div className="flex items-start gap-3 px-6 py-4 bg-teal-tint">
                <ArrowRight className="w-5 h-5 text-teal-deep flex-shrink-0 mt-0.5" />
                <p className="text-body leading-snug">{pair.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
