"use client"
import Logo from "./Logo"
import IconIn from "./IconIn"

export default function MobileMessage() {
  // Fonctions factices pour les props
  const dummySetActiveProject = (id: number | null) => {}
  const dummySetIsVisible = (isVisible: boolean) => {}

  return (
    <section className="h-full w-full flex items-center justify-center p-6" style={{backgroundColor: "#0E0C17"}}>
      <Logo 
        color="#ffffff" 
        setActiveProject={dummySetActiveProject}
        setIsVisible={dummySetIsVisible}
      />
      <div className="h-full w-full flex justify-center flex-col gap-6 p-6">
        <h1 className="text-5xl italic mb-4 text-white font-sixcaps">
          Web Developer currently pursuing a Master's degree, crafting user-centered, with visually stunning digital experiences.
        </h1>
        <p className="text-xs uppercase text-white">
          Visit on desktop to explore my projects and learn more about my works.
        </p>
      </div>
      <IconIn color="#ffffff" />
    </section>
  )
}