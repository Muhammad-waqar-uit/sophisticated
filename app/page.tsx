import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import TechStackShowcase from "@/components/tech-stack"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import GlobeWrapper from "@/components/globe-wrapper"
import FreeLancingMarquee from "@/components/marquee"
export default function Home() {
  return (
    <main className="relative bg-black">
      {/* Globe Background - Fixed Position */}
      <div className="fixed inset-0 z-0">
        <GlobeWrapper />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 h-screen overflow-y-auto overflow-x-hidden">
        <Navigation />
        <Hero />
        <FreeLancingMarquee />
        <About />
        <TechStackShowcase/>
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
