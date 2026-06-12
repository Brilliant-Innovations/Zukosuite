import Link from 'next/link'
import { Zap } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Zuko',
  description: 'How Zuko handles your data.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Back nav */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-12">
          <Zap className="w-4 h-4 text-indigo-400" />
          <span className="font-semibold text-white">Zuko</span>
          <span className="text-slate-600 mx-1">·</span>
          Back to home
        </Link>

        <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-slate-400 mb-12">Last updated: June 2026</p>

        <div className="prose prose-invert max-w-none space-y-10 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">The short version</h2>
            <p>
              Zuko collects only what is necessary to operate the product. We do not sell your data.
              We do not share your data with third parties for marketing purposes. We do not build
              advertising profiles. What you put into Zuko stays in Zuko.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">What we collect</h2>
            <p>We collect the minimum information required to run the service:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Your email address, used to create and identify your account.</li>
              <li>Workspace data you enter — contacts, projects, invoices, calendar events, and messages — stored so the product can function.</li>
              <li>Usage data necessary to operate and improve the service, such as error logs and session information. This data does not identify you individually unless required for debugging.</li>
              <li>If you join the waitlist, your email address and any optional information you provide.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">What we do not collect</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>We do not collect data for advertising or audience targeting.</li>
              <li>We do not use third-party tracking pixels.</li>
              <li>We do not sell, rent, or share your personal data with third parties for commercial purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">AI and your data</h2>
            <p>
              Zuko uses AI to draft suggestions, surface priorities, and prepare next steps within your workspace.
              Your workspace data is used to power these features. We do not use your data to train
              AI models for other customers or third parties. AI-assisted actions are drafted for your
              review and require your explicit approval before anything is sent or changed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">How we store and protect your data</h2>
            <p>
              Your data is stored in a private workspace with strict isolation — it is not accessible
              to other Zuko users. We use encryption in transit (TLS 1.3) and encryption at rest
              (AES-256). Access to production systems is restricted and logged.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">How long we keep your data</h2>
            <p>
              We retain your data for as long as your account is active. If you request deletion,
              we will remove your personal data from our systems within 30 days, except where
              retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Your rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data.</li>
              <li>Export your data in a portable format.</li>
            </ul>
            <p className="mt-4">To exercise any of these rights, contact us at the address below.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              For privacy questions or data requests, email{' '}
              <a href="mailto:privacy@zuko.ai" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                privacy@zuko.ai
              </a>.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex gap-6 text-sm text-slate-500">
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </div>
  )
}
