"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PageWrapper from "@/app/components/page-wrapper"

// Simuler une base de données de projets
const projectsData = [
  {
    id: 1,
    title: "Projet 1",
    description: "Description détaillée du projet 1",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Projet 2",
    description: "Description détaillée du projet 2",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Projet 3",
    description: "Description détaillée du projet 3",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Projet 4",
    description: "Description détaillée du projet 4",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    title: "Projet 5",
    description: "Description détaillée du projet 5",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function ProjectPage() {
  const params = useParams()
  const projectId = Number(params.id)

  // Trouver le projet correspondant à l'ID
  const project = projectsData.find((p) => p.id === projectId)

  if (!project) {
    return (
      <PageWrapper>
        <div className="container mx-auto py-12 px-4 text-white">
          <h1 className="text-3xl font-bold mb-6">Projet non trouvé</h1>
          <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <div className="container mx-auto py-12 px-4 text-white">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg">{project.description}</p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">Détails du projet</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies,
                nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies,
                nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">Technologies utilisées</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Next.js</li>
                <li>Three.js / React Three Fiber</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

