import { useState }                                        from 'react'
import { Send }                                          from 'lucide-react'
import { XIcon, YoutubeIcon, TwitchIcon, DiscordIcon }   from './SocialIcons'
import { useApp }                                        from '../context/AppContext'

const SOCIALS = [
  { Icon: XIcon,       label: 'X / Twitter', color: '#5BBFFF', bg: 'rgba(91,191,255,0.08)'  },
  { Icon: YoutubeIcon, label: 'YouTube',      color: '#22C55E', bg: 'rgba(34,197,94,0.08)'   },
  { Icon: TwitchIcon,  label: 'Twitch',       color: '#9B59B6', bg: 'rgba(155,89,182,0.08)'  },
  { Icon: DiscordIcon, label: 'Discord',      color: '#00C9B8', bg: 'rgba(0,201,184,0.08)'   },
]

export default function Newsletter() {
  const { t } = useApp()
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section id="community" className="bg-surface py-28 px-6 relative overflow-hidden">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(34,197,94,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left — Community */}
          <div>
            <p className="text-sky text-xs font-bold uppercase tracking-widest mb-3">{t.newsletter.communityLabel}</p>
            <h2 className="text-4xl font-black text-fg uppercase leading-none mb-6">
              {t.newsletter.communityHeading}<br />
              <span className="text-amber">{t.newsletter.communityAccent}</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-sm">{t.newsletter.communitySub}</p>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ Icon, label, color, bg }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-sm flex items-center justify-center border border-fg/5 hover:border-fg/20 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: bg, color }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Newsletter */}
          <div className="bg-card border border-fg/5 rounded-sm p-8">
            <h3 className="text-fg font-black text-2xl uppercase leading-none mb-2">{t.newsletter.formHeading}</h3>
            <p className="text-muted text-sm mb-6 leading-relaxed">{t.newsletter.formSub}</p>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-teal/15 border border-teal/25 flex items-center justify-center">
                  <Send size={22} className="text-teal" />
                </div>
                <div>
                  <p className="text-fg font-black text-lg mb-1">{t.newsletter.successTitle}</p>
                  <p className="text-muted text-sm">{t.newsletter.successSub}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={t.newsletter.placeholder}
                  required
                  className="w-full bg-dark border border-fg/8 hover:border-fg/15 focus:border-sky/40 focus:outline-none rounded-sm px-4 py-3 text-fg placeholder-muted text-sm font-medium transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="w-full bg-green hover:bg-amber text-white font-black uppercase tracking-widest text-sm px-6 py-3 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-green/25 flex items-center justify-center gap-2 active:scale-95"
                >
                  {t.newsletter.subscribe} <Send size={13} />
                </button>
              </form>
            )}

            <p className="text-muted text-xs mt-4">{t.newsletter.legal}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
