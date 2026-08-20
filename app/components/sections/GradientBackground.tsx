'use client'

// Re-themed: the aurora/gradient layer is retired. The page now sits on a
// flat warm-cream ground; this layer only guarantees the ground color under
// any overscroll.
export default function GradientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-cream" />
    </div>
  )
}
