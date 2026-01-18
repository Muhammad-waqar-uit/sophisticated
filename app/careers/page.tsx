"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// Lazy load Starfield component to improve initial page load
const Starfield = dynamic(() => import("@/components/Starfield"), {
  ssr: false,
  loading: () => null
})

export default function CareersPage() {
  return (
    <main className="pt-[80px] min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Starfield/>
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            No Career Openings
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            We currently don't have any open positions. Please check back later or follow us on social media for updates.
          </p>
        </motion.div>
      </div>
    </main>
  )
}