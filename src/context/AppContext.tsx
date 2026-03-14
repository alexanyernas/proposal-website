import { createContext, useContext, useState } from 'react'
import type { ReactNode }                      from 'react'
import { translations }                        from '../i18n/translations'
import type { Lang, Translations }             from '../i18n/translations'

interface AppContextValue {
  lang:       Lang
  toggleLang: () => void
  t:          Translations
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const toggleLang = () => setLang(l => l === 'en' ? 'es' : 'en')

  return (
    <AppContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
