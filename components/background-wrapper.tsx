"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

/**
 * Client-side wrapper that lazily loads the background.
 * This can be used on any page where you want the starfield background.
 */
const StarfieldBackground = dynamic(() => import("./Starfield"), { ssr: false })

export default function BackgroundWrapper() {
  return (
    <Suspense fallback={null}>
      <StarfieldBackground />
    </Suspense>
  )
}
