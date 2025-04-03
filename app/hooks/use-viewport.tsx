"use client"

import { useState, useEffect } from "react"

export function useViewport() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    // Set initial width
    setWidth(window.innerWidth)

    // Update width on resize
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { width, isMobile: width < 1200 }
}