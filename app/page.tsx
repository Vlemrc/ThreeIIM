"use client"
import FloatingScene from "./components/FloatingScene"
import Project from "./components/Project"
import { useState } from "react"
import Logo from "./components/Logo"
import { data } from './components/data'

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const activeItem = data.find(item => item.id === activeProject)

  return (
    <main style={{ backgroundColor: activeItem?.bgcolor}}>
      <Logo color={activeItem?.color} setActiveProject={setActiveProject} />
      <FloatingScene activeProject={activeProject} setActiveProject={setActiveProject} />
      <Project activeProject={activeProject} setActiveProject={setActiveProject} />
    </main>
  )
}