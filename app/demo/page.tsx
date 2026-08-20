import type { Metadata } from 'next'
import DemoForm from './DemoForm'

export const metadata: Metadata = {
  title: 'Request a Demo',
  description:
    'See Zuko in action. Tell us about your business and we will walk you through how Zuko drafts the next step across your inbox, CRM, projects, finance, and calendar.',
  alternates: { canonical: '/demo' },
}

export default function DemoPage() {
  return <DemoForm />
}
