"use client"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function MainHeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "Januar",
      "Februar",
      "Marts",
      "April",
      "Maj",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "December",
    ]
    const currentMonth = monthNames[now.getMonth()]
    const currentYear = now.getFullYear()
    return `${currentMonth} ${currentYear}`
  }

  return (
    <>
      {/* Desktop Hero */}
      <div className="hidden lg:block relative overflow-hidden mb-6">
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg max-w-[1580px] mx-auto rounded-lg">
          <div className="relative px-8 py-8">
            <div className="relative z-10 text-center">
              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="text-3xl xl:text-4xl font-bold mb-3 leading-tight text-gray-900">
                  Bedste Danske Betting Sider
                </h1>

                <h2 className="text-lg xl:text-xl font-medium mb-4 text-gray-600">
                  Ekspert Anmeldelser & Analyse for {getCurrentMonthYear()}
                </h2>

                <div className="w-20 h-0.5 bg-green-600 mx-auto mb-4"></div>

                <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  Uafhængige anmeldelser af Danmarks bedste betting platforme med verificerede bonusser og ekspert
                  vurderinger
                </p>
              </div>

              {/* Bottom Disclaimer */}
              <div className="text-sm text-gray-600 space-y-3">
                <p>Kun nye kunder | 18+ | Vilkår & betingelser gælder</p>
                <div className="flex justify-center gap-6 text-xs">
                  <button
                    onClick={onAdvertiserModalOpen}
                    className="text-gray-700 hover:text-green-600 transition-colors underline"
                  >
                    Annoncør Oplysning
                  </button>
                  <span className="text-gray-400">|</span>
                  <button
                    onClick={onTermsModalOpen}
                    className="text-gray-700 hover:text-green-600 transition-colors underline"
                  >
                    Vilkår & Betingelser
                  </button>
                  <span className="text-gray-400">|</span>
                  <span className="text-red-600 font-medium">Spil Ansvarligt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Mobile Hero */}
      <div className="lg:hidden mb-6">
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg max-w-[1580px] mx-auto rounded-lg">
          <div className="px-4 py-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Bedste Danske Betting Sider</h1>
            <h2 className="text-sm md:text-base font-medium mb-4 text-gray-600">
              Ekspert Anmeldelser for {getCurrentMonthYear()}
            </h2>

            <div className="w-16 h-0.5 bg-green-600 mx-auto mb-4"></div>

            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Uafhængig analyse af Danmarks bedste betting platforme
            </p>

            <div className="text-xs text-gray-600 space-y-2">
              <p>Kun nye kunder | 18+ | Vilkår gælder</p>
              <div className="flex justify-center gap-4">
                <button onClick={onAdvertiserModalOpen} className="text-gray-700 underline">
                  Oplysning
                </button>
                <button onClick={onTermsModalOpen} className="text-gray-700 underline">
                  Vilkår
                </button>
                <span className="text-red-600 font-medium">Spil Ansvarligt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
