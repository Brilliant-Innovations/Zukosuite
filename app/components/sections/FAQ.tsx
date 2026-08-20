import { Plus } from 'lucide-react'

export const faqs = [
  {
    q: 'Will Zuko ever send something without me?',
    a: 'No. Zuko can prepare the next step — a reply, follow-up, invoice, project update, meeting, or task — but you stay in control. You review, edit, and approve actions before anything leaves your workspace.',
  },
  {
    q: 'What exactly does Zuko do?',
    a: 'Zuko is one operator across your inbox, CRM, projects, finance, calendar, client intake, and scheduling. It understands what is happening, identifies what needs attention, and prepares the next action — a reply, a follow-up, a draft invoice, a project plan, a held meeting time, or a brief that landed as a real object — so you spend less time finding, remembering, and coordinating work.',
  },
  {
    q: 'How is Zuko different from adding AI to my existing software?',
    a: 'Most business software was built first and had AI added later. Zuko is being built around AI from the ground up. Your business context is not an extra feature sitting on top of the software — it is what allows Zuko to understand relationships, projects, commitments, conversations, and what should happen next.',
  },
  {
    q: 'Does Zuko replace my existing tools?',
    a: 'That is the idea. Zuko is one workspace with its own inbox, CRM, projects, tasks, finance, calendar, and client portal built in — not a layer bolted onto other apps. You connect your email and calendar accounts, and everything else lives inside Zuko, so the context is shared instead of scattered across separate tools.',
  },
  {
    q: 'Which email and calendar providers does Zuko work with?',
    a: 'We are starting with the major business email and calendar ecosystems — Google Workspace/Gmail, Microsoft 365/Outlook, and any standard IMAP inbox. Additional providers will be added as early access expands.',
  },
  {
    q: 'Can clients fill in briefs and pick meeting times?',
    a: 'Intake forms live in the client portal and land as a real object — a lead, a project brief, a sign-off, an expense. Routing records the next step (assign, book a call, create a task) for your review; it does not email or create records on its own. Scheduling lets someone pick a slot in their timezone. The time is held until you accept, then it lands on the agenda. Group polls rank overlap across hubs before you propose times.',
  },
  {
    q: 'Does Zuko make decisions for me?',
    a: 'Zuko can analyze context, surface priorities, recommend actions, and prepare work. Important decisions remain yours. The goal is not to remove you from your business — it is to remove the unnecessary work between knowing what needs to happen and getting it done.',
  },
  {
    q: 'What happens if Zuko gets something wrong?',
    a: 'You can review and change what Zuko prepares before it is acted on. Zuko is designed around visible context, editable drafts, and human approval rather than silently taking consequential actions in the background.',
  },
  {
    q: 'Is my data used to train AI?',
    a: "No. Your data is never used to train AI models. It is used only to provide Zuko's functionality for your workspace — it never becomes shared knowledge for other customers, and it is never used to expose your private business information to others. The full data-handling policy is documented in our Privacy Policy.",
  },
  {
    q: 'How much setup will Zuko require?',
    a: 'The aim is to make setup significantly lighter than traditional business software. You connect your email and calendar accounts, add or import your clients and projects, and Zuko begins building an understanding of how your work fits together.',
  },
  {
    q: 'Do I have to teach Zuko everything about my business manually?',
    a: 'No. Zuko is designed to learn from the context already present across your connected workspace — conversations, contacts, projects, tasks, meetings, documents, and activity. You can then correct, refine, or add context when needed.',
  },
  {
    q: 'Who is Zuko for?',
    a: 'Zuko is being built for people who run a lot of their business through their own head: founders, consultants, agencies, freelancers, small teams, and owner-operated businesses managing clients, projects, communication, follow-ups, and administration across too many disconnected tools.',
  },
  {
    q: 'What happens after I join the early-access list?',
    a: 'We will invite people in gradually as early access expands. When your account is ready, you will receive onboarding information, supported email and calendar providers, and everything you need to start using Zuko.',
  },
  {
    q: 'What will Zuko cost?',
    a: 'Early access is free and does not require a credit card. Paid pricing will be introduced later, and you will be able to review the pricing before deciding whether to continue.',
  },
  {
    q: 'Will I be locked in?',
    a: 'No. Zuko should make your business easier to operate, not harder to leave. You remain in control of your business data.',
  },
  {
    q: 'Why does Zuko need access to multiple parts of my business?',
    a: 'Because the next action rarely lives in one app. A client email may affect a project deadline, an invoice, a meeting, and a follow-up at the same time. Connecting that context is what allows Zuko to understand what is happening instead of treating every tool as an isolated system.',
  },
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-6">
        <div className="scroll-reveal from-up text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-[-0.03em] text-ink mb-6 leading-[1.1]">
            Questions, <span className="marker">answered</span>
          </h2>
          <p className="text-xl text-body">Everything you might want to know before joining.</p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="scroll-reveal from-up group rounded-[18px] bg-paper border border-card-border open:bg-white open:border-ink open:shadow-[0_8px_24px_rgba(56,48,24,0.06)] transition-colors duration-300"
              style={{ animationDelay: `${Math.min(i, 8) * 0.03}s` }}
            >
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-semibold text-ink group-open:font-bold">{faq.q}</span>
                <Plus className="w-5 h-5 text-teal-deep flex-shrink-0 group-open:rotate-45 transition-transform duration-300" />
              </summary>
              <p className="px-6 pb-6 text-body leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
