import { AppProvider } from './context/AppContext'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Features        from './components/Features'
import Trailer         from './components/Trailer'
import Gallery         from './components/Gallery'
import News            from './components/News'
import Platforms       from './components/Platforms'
import FAQ             from './components/FAQ'
import Newsletter      from './components/Newsletter'
import Footer          from './components/Footer'

function Site() {
  return (
    <div className="min-h-screen font-sans bg-dark text-fg">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Trailer />
        <Gallery />
        <News />
        <Platforms />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <Site />
    </AppProvider>
  )
}
