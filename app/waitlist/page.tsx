import type { Metadata } from 'next'
import WaitlistForm from './WaitlistForm'

export const metadata: Metadata = {
  title: 'Get Early Access',
  description:
    'Join the Zuko early-access list. Free during early access, no card required — you approve everything before it goes out.',
  alternates: { canonical: '/waitlist' },
}

export default function WaitlistPage() {
  return <WaitlistForm />
}
