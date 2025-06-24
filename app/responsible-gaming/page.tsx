import Link from "next/link"
import { ArrowLeft, Shield, Clock, AlertTriangle, Phone, Globe, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResponsibleGamingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbage til Hjem
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg max-w-4xl mx-auto overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">Ansvarligt Spil</h1>
          </div>
          <p className="text-red-100 text-lg">Din sikkerhed og velbefindende er vores topprioritet</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-red-800 font-bold text-xl">Vigtig Meddelelse</h2>
            </div>
            <p className="text-red-700 mb-2">
              Spil skal altid forblive sjovt og underholdende. Hvis betting stopper med at være fornøjeligt eller
              begynder at forårsage problemer i dit liv, er det tid til at søge hjælp.
            </p>
            <p className="text-red-700 font-semibold">Husk: Du er aldrig alene, og hjælp er altid tilgængelig.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900">Sæt Grænser</h3>
              </div>
              <ul className="text-blue-800 space-y-2 text-sm">
                <li>• Beslut tid og penge før du starter</li>
                <li>• Spil kun med penge du har råd til at tabe</li>
                <li>• Tag regelmæssige pauser</li>
                <li>• Lån aldrig penge til spil</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">Selvhjælpsværktøjer</h3>
              </div>
              <ul className="text-green-800 space-y-2 text-sm">
                <li>• Indskudsgrænser</li>
                <li>• Tabsgrænser</li>
                <li>• Session tidsgrænser</li>
                <li>• Selvudelukkelse</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Advarselstegn</h2>
            <p className="text-gray-700 mb-4">
              Det er vigtigt at genkende hvornår spil måske bliver et problem. Hold øje med disse tegn:
            </p>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="text-yellow-800 space-y-2 text-sm">
                <li>• Bruge mere tid eller penge end planlagt</li>
                <li>• Føle angst eller skyld omkring spil</li>
                <li>• Skjule spilaktiviteter for andre</li>
                <li>• Forsømme arbejde eller familie</li>
                <li>• Tænke konstant på spil</li>
                <li>• Være ude af stand til at stoppe</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Spillemyndigheden</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Danmarks officielle spilmyndighed der regulerer og overvåger spilmarkedet.
              </p>
              <p className="text-sm text-gray-600">Tilbyder information og vejledning om ansvarligt spil.</p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Hjælpelinjer</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Professionel støtte og rådgivning er tilgængelig for alle der har brug for hjælp.
              </p>
              <p className="text-sm text-gray-600">Gratis og fortrolig hjælp døgnet rundt.</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <h3 className="text-yellow-800 font-bold mb-3">For Familie og Venner</h3>
            <p className="text-yellow-700 mb-3">
              Spilproblemer påvirker ikke kun spilleren - de påvirker også familier og venner.
            </p>
            <ul className="text-yellow-700 space-y-2 text-sm">
              <li>• Ignorer ikke problemet</li>
              <li>• Opfordr til at søge professionel hjælp</li>
              <li>• Lån ikke penge eller betal spilgæld</li>
              <li>• Sørg for dit eget velbefindende</li>
            </ul>
          </div>

          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Husk</h3>
            <p className="text-gray-700 mb-4">
              Spilafhængighed er en medicinsk tilstand, ikke en moralsk fejl. Helbredelse er mulig med den rette støtte
              og behandling.
            </p>
            <p className="text-lg font-semibold text-green-600">
              Det første skridt er at anerkende problemet og bede om hjælp.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
