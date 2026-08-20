import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image src="/zuko.png" alt="Zuko" width={1257} height={359} className="h-7 w-auto" />
            <span className="text-muted text-sm">Your next move, already drafted</span>
          </div>

          {/* Copyright + policy links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted">
            <span>© {new Date().getFullYear()} Zuko. All rights reserved.</span>
            <span className="hidden sm:block text-[#d5cdb8]">·</span>
            <div className="flex gap-5">
              <Link href="/privacy" className="text-body hover:text-ink transition-colors">Privacy</Link>
              <Link href="/terms" className="text-body hover:text-ink transition-colors">Terms of Use</Link>
              <Link href="/cookies" className="text-body hover:text-ink transition-colors">Cookie Policy</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
