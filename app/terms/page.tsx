import Link from 'next/link'
import { Zap } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  alternates: { canonical: '/terms' },
  description: 'Terms governing use of the Zuko platform.',
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Back nav */}
        <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-ink transition-colors text-sm mb-12">
          <Zap className="w-4 h-4 text-teal-deep" />
          <span className="font-semibold text-ink">Zuko</span>
          <span className="text-faint mx-1">·</span>
          Back to home
        </Link>

        <h1 className="text-4xl font-bold mb-3">Terms of Use</h1>
        <p className="text-muted mb-12">Last updated: June 2026</p>

        <div className="prose max-w-none space-y-10 text-body leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">About Zuko</h2>
            <p>
              Zuko is an AI-assisted operating layer for freelancers, consultants, and small teams, in which AI-prepared actions require user approval before execution.
              It provides your inbox, CRM, projects, finance, and calendar as one shared client-work
              context, and prepares next steps for your review and approval.
            </p>
            <p className="mt-3">
              By accessing or using Zuko, you agree to these Terms of Use. If you do not agree,
              please do not use the product.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">Early access and beta</h2>
            <p>
              Zuko is currently in early access. The product is under active development. Features
              may change, be added, or be removed. We will communicate material changes to users
              with an active account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">Your account</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You must not share your account or allow unauthorised access.</li>
              <li>You must provide accurate information when creating your account.</li>
              <li>One person or entity per account unless explicitly agreed otherwise.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">Acceptable use</h2>
            <p>You agree not to use Zuko to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Violate any applicable law or regulation.</li>
              <li>Send unsolicited communications (spam).</li>
              <li>Attempt to gain unauthorised access to any part of the platform or other users&apos; workspaces.</li>
              <li>Use the platform to store or transmit malicious code.</li>
              <li>Reverse-engineer, decompile, or disassemble any part of the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">Your data and content</h2>
            <p>
              You own the data and content you put into Zuko. By using the service, you grant us
              the limited right to store, process, and display that content for the sole purpose of
              providing the service to you. We do not claim ownership of your data.
            </p>
            <p className="mt-3">
              We do not sell your data or share it with third parties for commercial purposes.
              See our <Link href="/privacy" className="text-teal-deep hover:text-ink transition-colors">Privacy Policy</Link> for full details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">AI-assisted actions</h2>
            <p>
              Zuko prepares drafts, surfaces suggestions, and recommends next steps. All AI-assisted
              actions require your explicit review and approval before anything is sent, changed, or
              executed. You remain responsible for all actions taken in your name through the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">Service availability</h2>
            <p>
              We aim to keep Zuko available and reliable, but we do not guarantee uninterrupted
              access. We may carry out maintenance, updates, or emergency changes that temporarily
              affect availability. We will provide notice of planned downtime where practicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">Termination</h2>
            <p>
              You may close your account at any time. We may suspend or terminate accounts that
              violate these terms. On termination, you may request an export of your data. We will
              retain data for 30 days after termination before permanent deletion, except where
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">Limitation of liability</h2>
            <p>
              Zuko is provided &ldquo;as is&rdquo; during the early access period. To the extent permitted
              by applicable law, we are not liable for indirect, incidental, or consequential
              damages arising from your use of the service. Our total liability to you will not
              exceed the amount you have paid to Zuko in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">Changes to these terms</h2>
            <p>
              We may update these terms from time to time. We will notify you of material changes
              by email or via the product. Continued use of Zuko after notice of changes constitutes
              acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">Contact</h2>
            <p>
              For questions about these terms, email{' '}
              <a href="mailto:legal@zukosuite.com" className="text-teal-deep hover:text-ink transition-colors">
                legal@zukosuite.com
              </a>.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-hairline flex gap-6 text-sm text-muted">
          <Link href="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link>
          <Link href="/cookies" className="hover:text-ink transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </div>
  )
}
