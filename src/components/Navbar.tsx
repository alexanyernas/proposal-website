import { useState, useEffect } from 'react'
import { Menu, X }                        from 'lucide-react'
import { XIcon, YoutubeIcon, TwitchIcon } from './SocialIcons'
import { useApp }                         from '../context/AppContext'

export default function Navbar() {
  const { t, lang, toggleLang } = useApp()
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.game,      href: '#game'      },
    { label: t.nav.media,     href: '#media'     },
    { label: t.nav.news,      href: '#news'      },
    { label: t.nav.community, href: '#community' },
    { label: t.nav.faq,       href: '#faq'       },
    { label: t.nav.contact,   href: '#contact'   },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md border-fg/5 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-dark/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="#" className="flex-shrink-0 group">
          <span className="text-2xl font-black tracking-[0.25em] text-fg uppercase select-none">
            GA<span className="text-green group-hover:text-amber transition-colors duration-200">ME</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="relative text-muted hover:text-fg text-xs font-bold uppercase tracking-widest transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-green after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right: social + toggles + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Social */}
          <div className="flex items-center gap-3 text-muted">
            <a href="#" aria-label="X / Twitter" className="hover:text-sky   transition-colors duration-200"><XIcon       size={14} /></a>
            <a href="#" aria-label="YouTube"     className="hover:text-green transition-colors duration-200"><YoutubeIcon size={14} /></a>
            <a href="#" aria-label="Twitch"      className="hover:text-teal  transition-colors duration-200"><TwitchIcon  size={14} /></a>
          </div>

          <div className="w-px h-5 bg-fg/10" />

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="text-xs font-black uppercase tracking-widest text-muted hover:text-fg border border-fg/10 hover:border-fg/25 px-2.5 py-1 rounded-sm transition-all duration-200"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>

          <div className="w-px h-5 bg-fg/10" />

          {/* CTA */}
          <a
            href="#preorder"
            className="bg-green hover:bg-amber text-white font-black text-xs uppercase tracking-widest px-6 py-2.5 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-green/30 active:scale-95"
          >
            {t.nav.preorder}
          </a>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="text-xs font-black uppercase tracking-widest text-muted border border-fg/15 px-2 py-1 rounded-sm"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <button onClick={() => setOpen(!open)} className="p-1 text-fg" aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-dark/98 border-t border-fg/5`}
      >
        <nav className="px-6 py-5 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-fg text-sm font-bold uppercase tracking-widest transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#preorder"
            className="mt-1 bg-green text-white font-black text-sm uppercase tracking-widest px-6 py-3 rounded-sm text-center"
          >
            {t.nav.preorder}
          </a>
        </nav>
      </div>
    </header>
  )
}
