"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Html, Environment } from "@react-three/drei"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib"
import type { Group } from "three"

interface Item {
  id: number
  title: string
  description: string
}

interface FloatingDivsProps {
  items: Item[]
}

export default function FloatingScene() {
  const items: Item[] = [
    { id: 1, title: "Projet 1", description: "Description du projet 1" },
    { id: 2, title: "Projet 2", description: "Description du projet 2" },
    { id: 3, title: "Projet 3", description: "Description du projet 3" },
    { id: 4, title: "Projet 4", description: "Description du projet 4" },
    { id: 5, title: "Projet 5", description: "Description du projet 5" },
    { id: 6, title: "À propos", description: "En savoir plus sur moi" },
  ]

  const controlsRef = useRef<OrbitControlsImpl>(null)

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <color attach="background" args={["#0E0C17"]} />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      <FloatingDivs items={items} />

      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

function FloatingDivs({ items }: FloatingDivsProps) {
  const radius = 4
  const groupRef = useRef<Group>(null)
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)

  const handleProjectClick = (id: number) => {
    if (isNavigating) return

    setIsNavigating(true)

    // Attendre que l'animation de sortie commence
    setTimeout(() => {
      if (id === 6) {
        router.push("/about")
      } else {
        router.push(`/projects/${id}`)
      }
    }, 300)
  }

  return (
    <group ref={groupRef}>
      {items.map((item, index) => {
        const angle = (index / items.length) * Math.PI * 2
        const x = Math.sin(angle) * radius
        const z = Math.cos(angle) * radius

        return (
          <Html key={item.id} position={[x, 0, z]} transform occlude distanceFactor={1.2} rotation={[0, angle, 0]}>
            <div className="floating-card">
              <div
                className="p-4 h-[600px] w-[800px] bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 transform transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleProjectClick(item.id)}
              >
                <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
                <button className="mt-4 px-4 py-2 bg-primary text-black rounded hover:bg-primary/80 transition-colors">
                  Voir plus
                </button>
              </div>
            </div>
          </Html>
        )
      })}
    </group>
  )
}

