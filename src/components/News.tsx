import { ArrowRight, Clock } from 'lucide-react'
import { useApp }            from '../context/AppContext'

const ACCENTS = ['#22C55E', '#5BBFFF', '#00C9B8']

export default function News() {
  const { t } = useApp()

  return (
    <section id="news" className="bg-dark py-28 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-sky text-xs font-bold uppercase tracking-widest mb-3">{t.news.label}</p>
            <h2 className="text-4xl md:text-5xl font-black text-fg uppercase leading-none">
              {t.news.heading}&nbsp;<span className="text-amber">{t.news.accent}</span>
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-muted hover:text-fg text-xs font-bold uppercase tracking-widest transition-colors group">
            {t.news.allNews}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.news.items.map(({ category, date, readTime, title, excerpt }, i) => {
            const accent = ACCENTS[i]
            return (
              <article
                key={i}
                className="group relative bg-card border border-fg/5 hover:border-fg/12 rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30 flex flex-col cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: accent }} />
                <div className="p-6 pt-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>{category}</span>
                    <span className="text-muted text-xs flex items-center gap-1.5 font-semibold">
                      <Clock size={11} />{readTime}
                    </span>
                  </div>
                  <h3 className="text-fg font-black text-base leading-snug mb-3 group-hover:text-amber transition-colors duration-300 flex-1">
                    {title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">{excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-fg/5">
                    <span className="text-muted text-xs font-semibold">{date}</span>
                    <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ color: accent }}>
                      {t.news.read} <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
