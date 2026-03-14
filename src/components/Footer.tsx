import { Heart }                                        from 'lucide-react'
import { XIcon, YoutubeIcon, TwitchIcon, DiscordIcon }  from './SocialIcons'
import { useApp }                                        from '../context/AppContext'

const SOCIALS = [
  { Icon: XIcon,       color: '#5BBFFF', label: 'X / Twitter' },
  { Icon: YoutubeIcon, color: '#22C55E', label: 'YouTube'      },
  { Icon: TwitchIcon,  color: '#9B59B6', label: 'Twitch'       },
  { Icon: DiscordIcon, color: '#00C9B8', label: 'Discord'      },
]

export default function Footer() {
  const { t } = useApp()

  return (
    <footer id="contact" className="bg-dark border-t border-fg/5 px-6 pt-16 pb-8 relative overflow-hidden">

      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.45), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pb-12 border-b border-fg/5">

          {/* Brand */}
          <div className="col-span-2">
            <div className="text-3xl font-black tracking-[0.25em] text-fg uppercase mb-4 select-none">
              GA<span className="text-green">ME</span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-7">{t.footer.tagline}</p>
            <div className="flex items-center gap-2.5">
              {SOCIALS.map(({ Icon, color, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-sm bg-fg/5 hover:bg-fg/10 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ color }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {t.footer.sections.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-fg font-black text-xs uppercase tracking-widest mb-5">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-muted hover:text-fg text-sm transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-muted">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            {t.footer.legal.map(l => (
              <a key={l} href="#" className="hover:text-fg transition-colors duration-200">{l}</a>
            ))}
          </div>
          <p className="flex items-center gap-1.5">
            {t.footer.crafted} <Heart size={10} className="text-green" fill="currentColor" /> {t.footer.by}
          </p>
        </div>
      </div>
    </footer>
  )
}
