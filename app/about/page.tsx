import Link from "next/link"
import { ArrowLeft, Shield, Award, TrendingUp, Users, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbage til Hjem
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg max-w-4xl mx-auto overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">Om Platformen</h1>
          </div>
          <p className="text-green-100 text-lg">Din pålidelige kilde til betting information og analyse</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Vores Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Vi leverer objektive og grundige analyser af betting platforme for at hjælpe danske spillere med at
                træffe informerede beslutninger.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Vores Tilgang</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Hver platform evalueres grundigt baseret på sikkerhed, brugeroplevelse, odds kvalitet og kundeservice.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-green-600" />
              Evalueringskriterier
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Sikkerhed & Licens</h4>
                <p className="text-sm text-gray-600">Verificering af licenser og sikkerhedsforanstaltninger</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Brugeroplevelse</h4>
                <p className="text-sm text-gray-600">Navigation, design og funktionalitet</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Odds & Markeder</h4>
                <p className="text-sm text-gray-600">Konkurrencedygtige odds og markedsudvalg</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Bonusser</h4>
                <p className="text-sm text-gray-600">Værdi og gennemsigtighed af tilbud</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Betalinger</h4>
                <p className="text-sm text-gray-600">Hastighed og sikkerhed af transaktioner</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
                <p className="text-sm text-gray-600">Tilgængelighed og kvalitet af kundeservice</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-900">Vores Forpligtelse</h3>
            </div>
            <p className="text-blue-800 mb-3">
              Vi opretholder høje standarder for objektivitet og gennemsigtighed i alle vores anmeldelser og
              rangeringer.
            </p>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• Uafhængige evalueringer baseret på faktiske tests</li>
              <li>• Regelmæssige opdateringer af information</li>
              <li>• Fokus på danske spilleres behov</li>
              <li>• Fremme af ansvarligt spil</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-bold text-red-800">Vigtig Information</h3>
            </div>
            <p className="text-red-700 mb-2">
              Spil skal altid forblive underholdning. Spil aldrig med penge du ikke har råd til at tabe.
            </p>
            <p className="text-red-700 font-semibold">
              Hvis spil bliver et problem, søg hjælp hos relevante organisationer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
