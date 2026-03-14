import { useState }  from 'react'
import { ChevronDown } from 'lucide-react'
import { useApp }      from '../context/AppContext'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-fg/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
        <span className="text-fg font-bold text-sm leading-snug group-hover:text-amber transition-colors duration-200 pr-2">
          {question}
        </span>
        <ChevronDown
          size={16}
          className={`text-muted flex-shrink-0 mt-0.5 transition-transform duration-300 ${
            open ? 'rotate-180 text-amber' : 'group-hover:text-fg'
          }`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 pb-5' : 'max-h-0'}`}>
        <p className="text-muted text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { t } = useApp()

  return (
    <section id="faq" className="bg-dark py-28 px-6 relative overflow-hidden">

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(91,191,255,0.2), transparent)' }}
      />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal text-xs font-bold uppercase tracking-widest mb-3">{t.faq.label}</p>
          <h2 className="text-4xl md:text-5xl font-black text-fg uppercase leading-none">
            {t.faq.heading}&nbsp;<span className="text-amber">{t.faq.accent}</span>
          </h2>
        </div>

        <div className="bg-card border border-fg/5 rounded-sm px-8 py-2">
          {t.faq.items.map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
