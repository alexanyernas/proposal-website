import { useApp } from '../context/AppContext'

const PLATFORM_DEFS = [
  { accent: '#5BBFFF',               badge: false },
  { accent: '#006FCD',               badge: false },
  { accent: '#107C10',               badge: false },
  { accent: '#E60012',               badge: true  },
]

export default function Platforms() {
  const { t } = useApp()

  return (
    <section id="platforms" className="bg-surface py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber text-xs font-bold uppercase tracking-widest mb-3">{t.platforms.label}</p>
          <h2 className="text-4xl md:text-5xl font-black text-fg uppercase leading-none">
            {t.platforms.heading}&nbsp;<span className="text-amber">{t.platforms.accent}</span>
          </h2>
          <p className="text-muted mt-4 max-w-md mx-auto leading-relaxed">{t.platforms.sub}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.platforms.items.map(({ name, subtitle }, i) => {
            const { accent, badge } = PLATFORM_DEFS[i]
            return (
              <div
                key={name}
                className={`group relative bg-card border border-fg/5 hover:border-fg/15 rounded-sm p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${badge ? 'opacity-70 hover:opacity-100' : ''}`}
              >
                <div
                  className="w-14 h-14 rounded-full transition-transform duration-300 group-hover:scale-110"
                  style={{ background: accent, boxShadow: `0 0 24px ${accent}50` }}
                />
                <div className="text-center">
                  <div className="text-fg font-black text-xl uppercase tracking-wider">{name}</div>
                  <div className="text-muted text-xs mt-0.5 font-medium">{subtitle}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
