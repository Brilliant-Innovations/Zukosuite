import Link from 'next/link'
import { Zap } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  alternates: { canonical: '/cookies' },
  description: 'How Zuko uses cookies.',
}

export default function Cookies() {
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

        <h1 className="text-4xl font-bold mb-3">Cookie Policy</h1>
        <p className="text-muted mb-12">Last updated: June 2026</p>

        <div className="prose max-w-none space-y-10 text-body leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">The short version</h2>
            <p>
              Zuko uses only the cookies necessary for the product to function. We do not use
              advertising cookies, third-party tracking cookies, or analytics cookies that identify
              you personally.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device by your browser. They allow a
              website or application to remember information across pages or sessions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">Cookies we use</h2>
            <p>We use only essential cookies required for the service to operate:</p>

            <div className="mt-6 rounded-xl border border-hairline overflow-hidden">
              <div className="grid grid-cols-3 gap-4 px-5 py-3 bg-paper text-xs font-semibold text-muted uppercase tracking-widest">
                <span>Cookie</span>
                <span>Purpose</span>
                <span>Duration</span>
              </div>
              {[
                { name: 'Session token', purpose: 'Keeps you signed in across pages.', duration: 'Session or up to 30 days' },
                { name: 'CSRF token', purpose: 'Prevents cross-site request forgery attacks.', duration: 'Session' },
                { name: 'Workspace preference', purpose: 'Remembers your last active workspace.', duration: 'Up to 30 days' },
              ].map((row) => (
                <div key={row.name} className="grid grid-cols-3 gap-4 px-5 py-4 border-t border-hairline text-sm">
                  <span className="text-ink font-medium">{row.name}</span>
                  <span className="text-muted">{row.purpose}</span>
                  <span className="text-muted">{row.duration}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">What we do not use</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>We do not use advertising or retargeting cookies.</li>
              <li>We do not use third-party analytics cookies (such as Google Analytics) that track you across websites.</li>
              <li>We do not share cookie data with advertising networks.</li>
              <li>We do not use cookies to build a profile of you for any purpose beyond operating the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">Managing cookies</h2>
            <p>
              Because we only use essential cookies, disabling them will prevent the product from
              functioning correctly. You can manage or clear cookies through your browser settings.
              Note that clearing session cookies will sign you out.
            </p>
            <p className="mt-3">
              Most browsers allow you to view and delete cookies via their settings menus. For
              guidance on a specific browser, search for &ldquo;manage cookies&rdquo; alongside your browser name.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">Changes to this policy</h2>
            <p>
              If we add new cookies, we will update this policy and notify users with active accounts.
              We will not add non-essential cookies without giving you the ability to opt out.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">Contact</h2>
            <p>
              For questions about cookies or data handling, email{' '}
              <a href="mailto:privacy@zukosuite.com" className="text-teal-deep hover:text-ink transition-colors">
                privacy@zukosuite.com
              </a>.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-hairline flex gap-6 text-sm text-muted">
          <Link href="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-ink transition-colors">Terms of Use</Link>
        </div>
      </div>
    </div>
  )
}
