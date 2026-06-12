'use client'

import dynamic from 'next/dynamic'

const GradientBackground = dynamic(() => import('./GradientBackground'), { ssr: false })

export default function BackgroundEffects() {
  return <GradientBackground />
}
