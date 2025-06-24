import Link from "next/link"
import { ArrowLeft, Cookie, Shield, Settings, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbage til Hjem
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg max-w-4xl mx-auto overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">Cookie Politik</h1>
          </div>
          <p className="text-blue-100 text-lg">Information om hvordan vi bruger cookies på vores platform</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Info className="w-6 h-6 text-blue-600" />
              <h2 className="text-blue-900 font-bold text-xl">Hvad er Cookies?</h2>
            </div>
            <p className="text-blue-800">
              Cookies er små datafiler som gemmes på din enhed når du besøger vores hjemmeside. De hjælper os med at
              forbedre din oplevelse og levere relevant indhold.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Nødvendige Cookies</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Disse cookies er essentielle for hjemmesidens grundlæggende funktioner.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Navigation og sikkerhed</li>
                <li>• Indstillinger og præferencer</li>
                <li>• Session management</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Funktionelle Cookies</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">Disse cookies forbedrer funktionaliteten og personalisering.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Sprogindstillinger</li>
                <li>• Brugergrænseflader</li>
                <li>• Tilpasset indhold</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Kategorier</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Session Cookies</h4>
                <p className="text-sm text-gray-600">
                  Midlertidige cookies som slettes når du lukker din browser. Bruges til at opretholde din session mens
                  du navigerer.
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Permanente Cookies</h4>
                <p className="text-sm text-gray-600">
                  Forbliver på din enhed i en bestemt periode. Hjælper med at huske dine præferencer ved fremtidige
                  besøg.
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Tredjeparters Cookies</h4>
                <p className="text-sm text-gray-600">
                  Cookies fra eksterne tjenester som analytics og sociale medier. Hjælper os med at forstå hvordan vores
                  site bruges.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <h3 className="text-green-800 font-bold mb-3">Administrer Dine Cookie Indstillinger</h3>
            <p className="text-green-700 mb-3">Du har fuld kontrol over cookie indstillinger i din browser:</p>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• Se alle gemte cookies</li>
              <li>• Slet specifikke eller alle cookies</li>
              <li>• Blokér cookies fra bestemte sites</li>
              <li>• Indstil automatisk sletning</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <h3 className="text-yellow-800 font-bold mb-3">Dit Samtykke</h3>
            <p className="text-yellow-700">
              Ved at fortsætte med at bruge vores hjemmeside accepterer du vores brug af cookies som beskrevet i denne
              politik. Du kan til enhver tid ændre dine cookie præferencer gennem din browsers indstillinger.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
