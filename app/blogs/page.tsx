"use client"

import { motion } from "framer-motion"

export default function BlogPage() {
  return (
    <main className="pt-[80px] min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Blog Coming Soon
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            We're working on something amazing. Stay tuned!
          </p>
        </motion.div>
      </div>
    </main>
  )
}
