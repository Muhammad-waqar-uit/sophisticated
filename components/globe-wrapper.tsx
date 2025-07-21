"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

/**
 * Client-side wrapper that lazily loads the interactive Globe.
 * Keeping `ssr: false` here is safe because this file is a Client Component.
 */
const Globe = dynamic(() => import("@/components/Globe"), { ssr: false })

export default function GlobeWrapper() {
  return (
    <Suspense fallback={<div>Loading globe…</div>}>
      <Globe />
    </Suspense>
  )
}
