import Link from "next/link"
import { ArrowLeft, Lock, Eye, Shield, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
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
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">Privatlivspolitik</h1>
          </div>
          <p className="text-purple-100 text-lg">Hvordan vi beskytter og håndterer dine personlige oplysninger</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900">Hvilke Data Vi Indsamler</h3>
              </div>
              <ul className="text-blue-800 space-y-2 text-sm">
                <li>• Grundlæggende brugeroplysninger</li>
                <li>• Browser og enhedsoplysninger</li>
                <li>• Brugsstatistikker og præferencer</li>
                <li>• Interaktionsdata på platformen</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">Hvordan Vi Bruger Data</h3>
              </div>
              <ul className="text-green-800 space-y-2 text-sm">
                <li>• Forbedre platformens funktionalitet</li>
                <li>• Levere relevant indhold</li>
                <li>• Analysere brugeradfærd</li>
                <li>• Sikre platform sikkerhed</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Databeskyttelse Principper</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Minimering</h4>
                <p className="text-sm text-gray-600">
                  Vi indsamler kun de data der er nødvendige for platformens drift
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Sikkerhed</h4>
                <p className="text-sm text-gray-600">Alle data beskyttes med moderne sikkerhedsforanstaltninger</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Gennemsigtighed</h4>
                <p className="text-sm text-gray-600">Klar kommunikation om hvordan dine data bruges</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-purple-600" />
              <h3 className="text-purple-900 font-bold text-xl">Dine Rettigheder</h3>
            </div>
            <p className="text-purple-800 mb-3">Du har følgende rettigheder vedrørende dine personlige data:</p>
            <ul className="text-purple-800 space-y-2 text-sm">
              <li>• Ret til indsigt i dine gemte data</li>
              <li>• Ret til rettelse af ukorrekte oplysninger</li>
              <li>• Ret til sletning af dine data</li>
              <li>• Ret til begrænsning af databehandling</li>
              <li>• Ret til dataportabilitet</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sikkerhedsforanstaltninger</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Vi implementerer omfattende sikkerhedsforanstaltninger for at beskytte dine personlige oplysninger:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tekniske Foranstaltninger</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Kryptering af følsomme data</li>
                    <li>• Sikre serverinfrastrukturer</li>
                    <li>• Regelmæssige sikkerhedsopdateringer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Organisatoriske Foranstaltninger</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Begrænset adgang til data</li>
                    <li>• Medarbejdertræning i datasikkerhed</li>
                    <li>• Regelmæssige sikkerhedsgennemgange</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <h3 className="text-yellow-800 font-bold mb-3">Opdateringer af Politikken</h3>
            <p className="text-yellow-700">
              Vi kan periodisk opdatere denne privatlivspolitik for at afspejle ændringer i vores praksis eller
              juridiske krav. Væsentlige ændringer vil blive kommunikeret tydeligt på platformen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
