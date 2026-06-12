import BackgroundEffects from './components/sections/BackgroundEffects'
import Navigation from './components/sections/Navigation'
import Hero from './components/sections/Hero'
import TrustStrip from './components/sections/TrustStrip'
import CoreIdea from './components/sections/CoreIdea'
import CoreLoop from './components/sections/CoreLoop'
import AIAgents from './components/sections/AIAgents'
import BeforeAfter from './components/sections/BeforeAfter'
import Features from './components/sections/Features'
import PainPoints from './components/sections/PainPoints'
import Dashboard from './components/sections/Dashboard'
import Security from './components/sections/Security'
import WhoItsFor from './components/sections/WhoItsFor'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundEffects />
      <Navigation />
      <Hero />
      <TrustStrip />
      <CoreIdea />
      <CoreLoop />
      <AIAgents />
      <BeforeAfter />
      <Features />
      <PainPoints />
      <Dashboard />
      <Security />
      <WhoItsFor />
      <FinalCTA />
      <Footer />
    </main>
  )
}
