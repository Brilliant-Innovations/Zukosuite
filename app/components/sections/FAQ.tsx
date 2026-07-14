import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Will Zuko ever send something without me?',
    a: 'No. Zuko never sends, schedules, or invoices on its own. It prepares the next step — a reply, an invoice, a project plan, a follow-up — and waits for your approval. You review, edit if you want, and approve. Nothing leaves your workspace without you.',
  },
  {
    q: 'Which email and calendar providers does it work with?',
    a: 'Zuko connects to Gmail and Google Calendar, Microsoft Outlook, and any standard IMAP inbox. CRM, projects, tasks, finance, and invoicing are built in — no separate tools to wire together.',
  },
  {
    q: 'What happens after I join the waitlist?',
    a: 'We grant early access in small batches. When a spot opens, you get an invitation by email — no spam in the meantime, and we never share your address.',
  },
  {
    q: 'What will it cost?',
    a: 'Early access is free, with no card required. Pricing will be announced before general availability, and people on the waitlist hear about it first.',
  },
  {
    q: 'Is my data used to train AI?',
    a: 'No. Your data is never used to train AI models. Every workspace is isolated with row-level security enforced at the database, and connected account credentials are encrypted with AES-256-GCM.',
  },
  {
    q: 'Who is Zuko for?',
    a: 'Freelancers, consultants, and small teams who run client work end to end — from first contact to paid invoice. It is not built for large enterprises or teams that prefer keeping their tools separate.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="scroll-reveal from-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Questions, <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">answered</span>
          </h2>
          <p className="text-xl text-slate-400">Everything you might want to know before joining.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="scroll-reveal from-up group rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm open:border-indigo-500/30 transition-colors duration-300"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-semibold text-white">{faq.q}</span>
                <Plus className="w-5 h-5 text-indigo-400 flex-shrink-0 group-open:rotate-45 transition-transform duration-300" />
              </summary>
              <p className="px-6 pb-6 text-slate-400 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
