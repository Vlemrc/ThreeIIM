"use client"
import FloatingScene from "./components/FloatingScene"
import Project from "./components/Project"
import { useState } from "react"
import Logo from "./components/Logo"
import { data } from './components/data'
import IconIn from "./components/IconIn"

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const activeItem = data.find(item => item.id === activeProject)
  const [isVisible, setIsVisible] = useState(false)

  return (
    <main style={{ backgroundColor: activeItem?.bgcolor}}>
      <Logo color={activeItem?.color} setActiveProject={setActiveProject} setIsVisible={setIsVisible} />
      <div className={`h-full w-full ${isVisible ? "opacity-0" : "opacity-100"} transition-opacity duration-300 delay-1000`}>
        <FloatingScene 
          activeProject={activeProject} 
          setActiveProject={setActiveProject} 
          setIsVisible={setIsVisible} 
        />
      </div>
      <Project activeProject={activeProject} setActiveProject={setActiveProject} isVisible={isVisible} setIsVisible={setIsVisible} />
      <IconIn color={activeItem?.color} />
    </main>
  )
}