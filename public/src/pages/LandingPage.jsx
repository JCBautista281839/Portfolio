import { useCallback, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

function LandingPage() {
  const [loading, setLoading] = useState(true)
  const finishLoading = useCallback(() => setLoading(false), [])

  return (
    <>
      {loading && <Loader onDone={finishLoading} />}

      <div className={`landing-page${loading ? ' landing-page--loading' : ''}`}>
        <Header />
        <Hero />
        <Features />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default LandingPage
