import Hero from "@/components/Hero"
import About from "@/components/About"
import TechStackShowcase from "@/components/tech-stack"
import Contact from "@/components/Contact"
import GlobeWrapper from "@/components/globe-wrapper"
import FreeLancingMarquee from "@/components/marquee"
import {TracingBeam} from "@/components/tacing-beam"
// import {MouseEffect} from "@/components/mouse-effect"
import { SmoothCursor } from "@/components/ui/smooth-cursor";

import {WeUnoIntro} from "@/components/show-into"
import {TimelineDemo} from "@/components/timeline-component"
export default function Home() {
  return (
    <main className="relative bg-black">
            <WeUnoIntro />

      <SmoothCursor/>
      {/* Globe Background - Fixed Position */}
      <div className="fixed inset-0 z-0">
        <GlobeWrapper />
      </div>

      {/* Scrollable Content */}
          {/* <TracingBeam className="px-6"> */}

      <div className="relative z-10">
        <Hero />
        {/* <FreeLancingMarquee /> */}
        <About />
        <TimelineDemo/>
        <TechStackShowcase/>
        <Contact />
      </div>
{/* </TracingBeam> */}
    </main>
  )
}


