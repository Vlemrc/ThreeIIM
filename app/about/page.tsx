import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PageWrapper from "@/app/components/page-wrapper"

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto py-12 px-4 text-white">
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Link>

        <h1 className="text-4xl font-bold mb-6">À propos de moi</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <img
              src="/placeholder.svg?height=400&width=300"
              alt="Photo de profil"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:col-span-2">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg">
                Je suis un développeur web passionné par les technologies 3D et les expériences interactives. Spécialisé
                dans Next.js et Three.js, je crée des sites web immersifs et innovants.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">Compétences</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Développement frontend avec React et Next.js</li>
                <li>Création d'expériences 3D avec Three.js et React Three Fiber</li>
                <li>Design UI/UX</li>
                <li>Animation et interactions web</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-3">Parcours</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies,
                nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies,
                nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">Contact</h2>
              <p>N'hésitez pas à me contacter pour discuter de vos projets ou pour toute autre question.</p>
              <div className="flex gap-4 mt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                  Email
                </button>
                <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors">
                  LinkedIn
                </button>
                <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

