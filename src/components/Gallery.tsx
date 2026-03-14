import { Expand }  from 'lucide-react'
import { useApp }  from '../context/AppContext'

const STYLES = [
  'linear-gradient(145deg, #0a0400 0%, #2a0e00 35%, #7a2500 65%, #FF6224 85%, #FFD448 100%)',
  'linear-gradient(145deg, #050D1A 0%, #071828 40%, #0a3055 65%, #5BBFFF 100%)',
  'linear-gradient(145deg, #030d06 0%, #061a0c 40%, #0d3518 65%, #22C55E 100%)',
  'linear-gradient(145deg, #06080f 0%, #0d1020 45%, #181525 70%, #7A9AB5 100%)',
  'linear-gradient(145deg, #120800 0%, #2e1800 40%, #7a4500 65%, #FFD448 85%, #FF6224 100%)',
  'linear-gradient(145deg, #050D1A 0%, #070f1e 40%, #0a1e3a 65%, #00C9B8 90%, #5BBFFF 100%)',
]
const ACCENTS  = ['#FF6224', '#5BBFFF', '#22C55E', '#7A9AB5', '#FFD448', '#00C9B8']
const FEATURED = [true, false, false, false, false, false]
const DOTS     = [
  { top: '8%',  left: '15%', size: 2   },
  { top: '18%', left: '42%', size: 1.5 },
  { top: '12%', left: '68%', size: 2.5 },
  { top: '6%',  left: '83%', size: 1   },
  { top: '22%', left: '55%', size: 2   },
  { top: '15%', left: '28%', size: 1   },
]

export default function Gallery() {
  const { t } = useApp()

  return (
    <section id="screenshots" className="bg-surface py-28 px-6 relative overflow-hidden">

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(0,201,184,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-teal text-xs font-bold uppercase tracking-widest mb-3">{t.gallery.label}</p>
          <h2 className="text-4xl md:text-5xl font-black text-fg uppercase">
            {t.gallery.heading}&nbsp;<span className="text-amber">{t.gallery.accent}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" style={{ gridAutoRows: '200px' }}>
          {t.gallery.items.map(({ title, category }, i) => {
            const style   = STYLES[i]
            const accent  = ACCENTS[i]
            const featured = FEATURED[i]
            return (
              <div key={i} className={`group relative overflow-hidden rounded-sm cursor-pointer ${featured ? 'row-span-2' : ''}`}>

                <div className="absolute inset-0" style={{ background: style }} />
                <div className="absolute inset-0 opacity-50" style={{ background: `radial-gradient(ellipse 70% 50% at 75% 25%, ${accent}30 0%, transparent 65%)` }} />
                <div
                  className="absolute left-0 right-0 h-px opacity-50"
                  style={{ top: featured ? '55%' : '58%', background: `linear-gradient(to right, transparent, ${accent}50, transparent)` }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(5,13,26,0.75) 0%, transparent 100%)' }} />

                {DOTS.map((d, j) => (
                  <div key={j} className="absolute rounded-full opacity-50" style={{ width: d.size, height: d.size, top: d.top, left: d.left, background: accent }} />
                ))}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <Expand size={20} className="text-white" />
                    <span className="text-white text-xs font-bold uppercase tracking-widest">{t.gallery.view}</span>
                  </div>
                </div>

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs font-black uppercase tracking-widest block mb-0.5" style={{ color: accent }}>{category}</span>
                  <span className="text-white text-sm font-bold">{title}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
