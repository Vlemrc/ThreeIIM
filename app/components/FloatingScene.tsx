"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Html, Environment } from "@react-three/drei"
import { useRef, useState } from "react"
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib"
import type { Group } from "three"
import { data, Project } from "./data"



interface FloatingDivsProps {
  items: Project[];
  setActiveProject: (id: number | null) => void;
  activeProject: number | null;
}

interface FloatingSceneProps {
  activeProject: number | null;
  setActiveProject: (id: number | null) => void;
}

export default function FloatingScene({ activeProject, setActiveProject }: FloatingSceneProps) {
  const items = data

  const controlsRef = useRef<OrbitControlsImpl>(null)

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      <FloatingDivs items={items} setActiveProject={setActiveProject} activeProject={activeProject} />

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

function FloatingDivs({ items, setActiveProject, activeProject }: FloatingDivsProps) {
  const radius = 4
  const groupRef = useRef<Group>(null)

  return (
    <group ref={groupRef}>
      {items.map((item, index) => {
        const angle = (index / items.length) * Math.PI * 2
        const x = Math.sin(angle) * radius
        const z = Math.cos(angle) * radius

        return (
          <Html className={`${!activeProject ? "opacity-100 pointer-events-all" : "opacity-0 pointer-events-none"}`} key={item.id} position={[x, 0, z]} transform occlude distanceFactor={1.2} rotation={[0, angle, 0]}>
            <div className="floating-card">
              <div
                className="p-4 h-[520px] w-[800px] bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg grayscale hover:grayscale-0 transform transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center"}}
                onClick={() => setActiveProject(item.id)}
              >
              </div>
            </div>
          </Html>
        )
      })}
    </group>
  )
}

