import { X, CheckCircle } from 'lucide-react'

const beforeItems = [
  'Client context scattered across inbox, notes, CRM, calendar, and invoices.',
  'Follow-ups depend on memory and manual tracking.',
  'Projects, invoices, and messages live in separate systems.',
  'Admin work grows every time a new client starts.',
  'Switching tools means losing the thread.',
]

const afterItems = [
  'One connected client workflow where the next step is visible and drafted.',
  'Zuko surfaces what needs attention before it slips.',
  'Work, money, and communication stay connected around the client.',
  'New clients plug straight into the same workflow.',
  'Every module shares the same business context.',
]

export default function BeforeAfter() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="scroll-reveal from-up text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fewer disconnected tools.  
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">One connected client workflow.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Stop losing client context between apps that don’t talk to each other.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 gap-8 group">
          <div
            className="scroll-reveal from-left p-8 rounded-3xl bg-slate-900/50 border border-red-500/20 backdrop-blur-sm"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center"><X className="w-5 h-5 text-red-400" /></div>
              <h3 className="text-2xl font-bold text-red-400">Fragmented tools</h3>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/50 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="scroll-reveal from-right p-8 rounded-3xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 backdrop-blur-sm relative overflow-hidden"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center"><CheckCircle className="w-5 h-5 text-green-400" /></div>
                <h3 className="text-2xl font-bold text-green-400">With Zuko</h3>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
            <div className="w-16 h-16 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:scale-110 transition-transform duration-300">VS</div>
          </div>
        </div>
      </div>
    </section>
  )
}
