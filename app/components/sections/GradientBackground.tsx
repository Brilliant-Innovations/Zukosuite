'use client'

import { useEffect, useState } from 'react'

export default function GradientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Aurora orbs — fixed, blurred, quiet */}
      <div
        className="absolute rounded-full blur-[120px] opacity-30"
        style={{
          width: 600, height: 600,
          top: -120, right: -100,
          background: 'radial-gradient(circle, rgba(99,102,241,0.7) 0%, rgba(168,85,247,0.4) 50%, transparent 75%)',
        }}
      />
      <div
        className="absolute rounded-full blur-[100px] opacity-20"
        style={{
          width: 500, height: 500,
          bottom: -80, left: -80,
          background: 'radial-gradient(circle, rgba(6,182,212,0.7) 0%, rgba(59,130,246,0.4) 50%, transparent 75%)',
        }}
      />
      <div
        className="absolute rounded-full blur-[140px] opacity-15"
        style={{
          width: 400, height: 400,
          top: '45%', right: '15%',
          background: 'radial-gradient(circle, rgba(244,114,182,0.5) 0%, rgba(168,85,247,0.2) 60%, transparent 80%)',
        }}
      />

      {/* Mouse-tracking blob */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-3xl [animation:blob-pulse_4s_ease-in-out_infinite]"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(168,85,247,0.12) 50%, transparent 70%)',
          left: mousePosition.x - 400,
          top: mousePosition.y - 400,
        }}
      />
    </div>
  )
}