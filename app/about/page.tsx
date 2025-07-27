"use client"

import { motion } from "framer-motion"
import About from "@/components/About"

export default function AboutPage() {
  return (
    <main className="pt-[80px] min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <About />
        </motion.div>
      </div>
    </main>
  )
}
