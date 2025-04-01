"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  // Réinitialiser l'état de visibilité lors du changement de page
  useEffect(() => {
    setIsVisible(false)

    // Petit délai pour s'assurer que l'animation de sortie de la page précédente est terminée
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className={`transition-opacity h-full w-full duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  )
}

