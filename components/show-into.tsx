// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// export function WeUnoIntro({
//   duration = 3000, // milliseconds
// }: {
//   duration?: number
// }) {
//   const [showIntro, setShowIntro] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowIntro(false)
//     }, duration)

//     return () => clearTimeout(timer)
//   }, [duration])

//   return (
//     <AnimatePresence>
//       {showIntro && (
//         <motion.div
//           initial={{ x: 0 }}
//           exit={{ x: "100%" }}
//           transition={{
//             duration: 1.2,
//             ease: [0.76, 0, 0.24, 1],
//           }}
//           className="fixed inset-0 z-50 bg-white flex items-center justify-center"
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-center"
//           >
//             <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-4">
//               XTEN<span className="text-orange-500">.</span>
//             </h1>
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: "100%" }}
//               transition={{ delay: 1, duration: 1 }}
//               className="h-0.5 bg-gray-900 mx-auto"
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function WeUnoIntro({
  duration = 3000, // milliseconds
}: {
  duration?: number
}) {
  const [showIntro, setShowIntro] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Only show on the root page ("/")
    if (pathname !== "/") {
      setShowIntro(false)
      return
    }

    // Prevent re-showing if already shown (optional)
    const hasSeenIntro = localStorage.getItem("seen-intro")
    if (hasSeenIntro) {
      setShowIntro(false)
      return
    }

    const timer = setTimeout(() => {
      setShowIntro(false)
      localStorage.setItem("seen-intro", "true")
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, pathname])

  return (
    <AnimatePresence mode="wait">
      {showIntro && (
        <motion.div
          initial={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-50 bg-white flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-4">
              XTEN<span className="text-orange-500">.</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1 }}
              className="h-0.5 bg-gray-900 mx-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
