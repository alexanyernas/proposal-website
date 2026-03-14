import { Play }   from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Trailer() {
  const { t } = useApp()

  return (
    <section id="media" className="bg-dark py-28 px-6 relative overflow-hidden">

      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 120%, rgba(34,197,94,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-green text-xs font-bold uppercase tracking-widest mb-3">{t.trailer.label}</p>
          <h2 className="text-4xl md:text-5xl font-black text-fg uppercase">
            {t.trailer.heading}&nbsp;<span className="text-amber">{t.trailer.accent}</span>
          </h2>
        </div>

        {/* Video card */}
        <div className="group relative cursor-pointer">
          <div className="relative aspect-video rounded-sm overflow-hidden border border-fg/5 group-hover:border-green/25 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-green/8">

            {/* Cinematic dark thumbnail — intentionally dark regardless of theme */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #050D1A 0%, #0C2040 35%, #071525 65%, #050D1A 100%)' }} />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 65% 40%, rgba(91,191,255,0.12) 0%, transparent 65%)' }} />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 85%, rgba(34,197,94,0.15) 0%, transparent 65%)' }} />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 40% 40% at 85% 20%, rgba(0,201,184,0.07) 0%, transparent 70%)' }} />

            {/* Horizon */}
            <div
              className="absolute left-0 right-0"
              style={{
                top: '60%',
                height: '1px',
                background: 'linear-gradient(to right, transparent 5%, rgba(91,191,255,0.25) 40%, rgba(255,212,72,0.15) 60%, transparent 95%)',
              }}
            />

            {/* Scan lines */}
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,1) 3px, rgba(255,255,255,1) 4px)' }}
            />

            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-black uppercase tracking-[0.3em] select-none" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', color: 'rgba(91,191,255,0.06)' }}>
                GAME
              </span>
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-green/15 scale-150 animate-ping" />
                <div className="relative w-20 h-20 rounded-full bg-green group-hover:bg-amber transition-colors duration-300 flex items-center justify-center shadow-2xl shadow-green/40 group-hover:scale-105 transition-transform">
                  <Play size={28} className="text-white ml-1" fill="currentColor" />
                </div>
              </div>
              <span className="text-white/50 group-hover:text-white/80 text-xs font-bold uppercase tracking-widest transition-colors duration-300">
                {t.trailer.watchBtn}
              </span>
            </div>

            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-white/10 text-white/80 text-xs font-bold px-2.5 py-1 rounded-sm">2:47</div>
            <div className="absolute bottom-4 left-4  bg-black/80 backdrop-blur-sm border border-white/10 text-white/50 text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider">4K Ultra</div>
          </div>

          <div
            className="absolute -bottom-3 left-12 right-12 h-6 blur-xl opacity-25 group-hover:opacity-40 transition-opacity rounded-full"
            style={{ background: '#22C55E' }}
          />
        </div>
      </div>
    </section>
  )
}
