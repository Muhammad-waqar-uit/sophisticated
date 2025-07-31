"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function MouseEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <motion.div
        className="absolute w-6 h-6 bg-blue-500 rounded-full opacity-80 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12, // Center the circle on cursor
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Outer ring for additional effect */}
      <motion.div
        className="absolute w-10 h-10 border-2 border-blue-400 rounded-full opacity-40"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.8,
        }}
      />
    </div>
  )
}
