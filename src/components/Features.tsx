import { Globe2, Crosshair, Hammer } from 'lucide-react'
import type { LucideIcon }          from 'lucide-react'
import { useApp }                   from '../context/AppContext'

const ICONS: LucideIcon[] = [Globe2, Crosshair, Hammer]
const ACCENTS = ['#5BBFFF', '#22C55E', '#00C9B8']

export default function Features() {
  const { t } = useApp()

  return (
    <section id="game" className="bg-surface py-28 px-6 relative overflow-hidden">

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(91,191,255,0.35), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sky text-xs font-bold uppercase tracking-widest mb-3">{t.features.label}</p>
          <h2 className="text-4xl md:text-5xl font-black text-fg uppercase leading-tight">
            {t.features.heading}&nbsp;<span className="text-amber">{t.features.accent}</span>
          </h2>
          <p className="text-muted mt-5 max-w-lg mx-auto leading-relaxed">{t.features.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.features.items.map(({ title, desc }, i) => {
            const Icon   = ICONS[i]
            const accent = ACCENTS[i]
            return (
              <div
                key={title}
                className="group relative bg-card border border-fg/5 hover:border-fg/12 rounded-sm p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 80% 60% at 10% 10%, ${accent}12 0%, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className="relative z-10 inline-flex items-center justify-center rounded mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ width: 52, height: 52, background: `${accent}14`, border: `1px solid ${accent}28` }}
                >
                  <Icon size={22} style={{ color: accent }} />
                </div>

                <h3 className="relative z-10 text-lg font-black text-fg uppercase tracking-wide mb-4 leading-snug">
                  {title}
                </h3>
                <p className="relative z-10 text-muted leading-relaxed text-sm">{desc}</p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
