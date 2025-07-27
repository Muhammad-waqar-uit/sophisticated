"use client"

import { motion } from "framer-motion"
import Services from "@/components/Services"

export default function ServicesPage() {
  return (
    <main className="pt-[80px] min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
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
