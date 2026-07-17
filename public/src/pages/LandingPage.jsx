import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Features />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default LandingPage
