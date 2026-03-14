import { ChevronDown, Play } from 'lucide-react'
import { useApp }            from '../context/AppContext'

const PLATFORMS      = ['PC', 'PS5', 'XBOX', 'SWITCH']
const TITLE_GRADIENT = 'linear-gradient(130deg, #FFFFFF 0%, #B8D8F5 35%, #5BBFFF 60%, #22C55E 100%)'

export default function Hero() {
  const { t } = useApp()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Background — pure CSS atmospheric dark ── */}

      {/* Subtle perspective grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Color atmosphere blobs */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 65% 55% at 80% 25%, rgba(34,197,94,0.13) 0%, transparent 65%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 50% at 10% 65%, rgba(91,191,255,0.10) 0%, transparent 65%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 45% 40% at 50% 100%, rgba(0,201,184,0.07) 0%, transparent 60%)' }} />

      {/* Vignette — keep edges dark */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(5,13,26,0.7) 100%)' }} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none" style={{ background: 'linear-gradient(to top, #050D1A 0%, transparent 100%)' }} />

      {/* Decorative corner lines */}
      <div className="absolute top-32 left-8 w-16 h-px bg-green/40 hidden md:block" />
      <div className="absolute top-32 left-8 w-px h-16 bg-green/40 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-32 w-full">

        {/* Badge */}
        <div className="flex mb-8">
          <div className="inline-flex items-center gap-2 bg-fg/5 backdrop-blur-sm border border-green/25 rounded-full px-4 py-1.5 text-green text-xs font-bold uppercase tracking-widest">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            {t.hero.badge}
          </div>
        </div>

        {/* Title — filter lives on the wrapper, NOT on the gradient-text element.
            Putting filter + WebkitBackgroundClip:text on the same node causes
            browsers to skip the clip and render the full background rectangle. */}
        <h1
          className="font-black uppercase leading-[0.85] mb-6 select-none"
          style={{
            fontSize: 'clamp(5.5rem, 17vw, 13rem)',
            filter: 'drop-shadow(0 0 60px rgba(91,191,255,0.15))',
          }}
        >
          <span
            style={{
              display: 'block',
              lineHeight: 'inherit',
              background: TITLE_GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            GAME
          </span>
        </h1>

        {/* Tagline */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-px bg-green" />
          <p className="text-fg/70 text-sm font-semibold uppercase tracking-[0.35em]">
            {t.hero.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-fg/60 text-lg max-w-md leading-relaxed mb-10 font-light">
          {t.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
          <a
            href="#preorder"
            id="preorder"
            className="group relative overflow-hidden bg-green hover:bg-amber text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded-sm transition-all duration-300 hover:shadow-2xl hover:shadow-green/35 active:scale-95"
          >
            <span className="relative z-10">{t.hero.cta_preorder}</span>
            <div className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 bg-white/10 transition-transform duration-500" />
          </a>

          <button className="flex items-center gap-3 border border-fg/20 hover:border-sky/50 hover:bg-sky/8 text-fg font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-sm transition-all duration-300 group">
            <div className="w-7 h-7 rounded-full bg-fg/10 group-hover:bg-sky/20 flex items-center justify-center transition-colors duration-300">
              <Play size={12} className="text-sky ml-0.5" fill="currentColor" />
            </div>
            {t.hero.cta_trailer}
          </button>
        </div>

        {/* Platforms */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-muted text-xs uppercase tracking-widest font-semibold">{t.hero.available}</span>
          <span className="text-fg/15 text-xs">|</span>
          {PLATFORMS.map(p => (
            <span
              key={p}
              className="bg-fg/5 border border-fg/10 hover:border-sky/30 hover:bg-sky/5 text-muted hover:text-fg text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded cursor-pointer transition-all duration-200"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#game"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-fg transition-colors duration-200 group"
      >
        <span className="text-xs uppercase tracking-widest font-semibold opacity-60 group-hover:opacity-100 transition-opacity">
          {t.hero.scroll}
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  )
}
