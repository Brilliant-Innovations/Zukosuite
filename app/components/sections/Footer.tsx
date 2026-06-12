import Link from 'next/link'
import { Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white">Zuko</span>
            <span className="text-slate-600 mx-2">—</span>
            <span className="text-slate-500 text-sm">Draft-first AI for client work</span>
          </div>

          {/* Copyright + policy links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500">
            <span>© {new Date().getFullYear()} Zuko. All rights reserved.</span>
            <span className="hidden sm:block text-slate-700">·</span>
            <div className="flex gap-5">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
