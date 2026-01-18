"use client"

import { motion } from "framer-motion"
import Services from "@/components/Services"
import dynamic from "next/dynamic"
import { SmoothCursor } from "@/components/ui/smooth-cursor"

// Lazy load Starfield component to improve initial page load
const Starfield = dynamic(() => import("@/components/Starfield"), {
  ssr: false,
  loading: () => null
})

export default function ServicesPage() {
  return (
    <main className="pt-[80px] min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <SmoothCursor/>
      <Starfield/>
      <div className="container mx-auto px-6 py-24">
        <motion.div
          key="services-motion"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Services />
        </motion.div>
      </div>
    </main>
  )
}
