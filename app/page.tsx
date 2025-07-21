import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Blog from "@/components/Blog"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import GlobeWrapper from "@/components/globe-wrapper"

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
        <About />
        <Services />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
