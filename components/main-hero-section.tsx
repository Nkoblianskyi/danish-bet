"use client"

import { Award, TrendingUp, Zap } from "lucide-react"
import Image from "next/image"

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
        <div className="bg-white/70 shadow-lg max-w-[1150px] mx-auto rounded-lg">
          <div className="relative px-8 py-8">
            <div className="relative z-10 text-center">
              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="text-3xl xl:text-4xl font-bold mb-3 leading-tight text-black uppercase">
                  Bedste <span style={{ color: "#C8102E" }}>Danske</span> Betting Sider 2025
                </h1>

                <h2 className="text-lg xl:text-xl font-medium mb-4 text-black">Ekspert Anmeldelser & Analyse</h2>

                <div className="w-20 h-0.5 bg-green-600 mx-auto mb-4"></div>

                <p className="text-base text-black max-w-2xl mx-auto leading-relaxed">
                  Uafhængige anmeldelser af Danmarks bedste betting platforme med verificerede bonusser og ekspert
                  vurderinger
                </p>

                {/* Trust Indicators */}
                <div className="mt-8">
                  <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <Image src="/denmark-flag-icon.webp" alt="Logo" width={20} height={20} className="w-5 h-5" />
                      <span className="text-xs font-bold tech-subheading">LICENSERET</span>
                    </div>
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <Award className="w-4 h-4 text-black" />
                      <span className="text-xs font-bold tech-subheading">VERIFICERET</span>
                    </div>
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <TrendingUp className="w-4 h-4 text-black" />
                      <span className="text-xs font-bold tech-subheading">OPDATERET</span>
                    </div>
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <Zap className="w-4 h-4 text-black" />
                      <span className="text-xs font-bold tech-subheading">ØJEBLIKKELIG</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-tech-black  font-medium">Opdateret: {getCurrentMonthYear()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Mobile Hero */}
      <div className="lg:hidden mb-2">
        <div className="bg-white/70 shadow-lg max-w-[1150px] mx-auto rounded-lg">
          <div className="px-4 py-4 text-center">
            <h1 className="text-2x md:text-3xl font-bold mb-3 text-black">
              Bedste <span style={{ color: "#C8102E" }}>Danske</span> Betting Sider
            </h1>

            <div className="w-16 h-0.5 bg-green-600 mx-auto mb-4"></div>

            <p className="text-sm text-black mb-2 leading-relaxed">
              Uafhængig analyse af Danmarks bedste betting platformel
            </p>

            {/* Trust Indicators */}
            <div className="mt-6">
              <div className="flex justify-center items-center gap-1 sm:gap-3">
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <Image src="/denmark-flag-icon.webp" alt="Logo" width={20} height={20} className="w-5 h-5" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">LICENSERET</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <Award className="w-3 h-3 text-black" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">VERIFICERET</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <TrendingUp className="w-3 h-3 text-black" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">OPDATERET</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs text-tech-black  font-medium">Opdateret: {getCurrentMonthYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
