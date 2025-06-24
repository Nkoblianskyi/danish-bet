"use client"

import { Shield, Award, TrendingUp, Zap } from "lucide-react"
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
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg max-w-[1150px] mx-auto rounded-lg">
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

                {/* Trust Indicators */}
                <div className="mt-8">
                  <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
                    <div className="flex items-center gap-2 text-tech-white bg-tech-black px-3 py-2 border border-tech-gold">
                      <Image src="/flag.png" alt="Logo" width={20} height={20} className="w-5 h-5" />
                      <span className="text-xs font-bold tech-subheading">LICENSERET</span>
                    </div>
                    <div className="flex items-center gap-2 text-tech-black bg-tech-gold px-3 py-2 border border-tech-black">
                      <Award className="w-4 h-4 text-tech-black" />
                      <span className="text-xs font-bold tech-subheading">VERIFICERET</span>
                    </div>
                    <div
                      className="flex items-center gap-2 text-tech-white px-3 py-2 border border-tech-black"
                      style={{ backgroundColor: "#C8102E" }}
                    >
                      <TrendingUp className="w-4 h-4 text-tech-white" />
                      <span className="text-xs font-bold tech-subheading">OPDATERET</span>
                    </div>
                    <div className="flex items-center gap-2 text-tech-black bg-tech-white px-3 py-2 border border-tech-black">
                      <Zap className="w-4 h-4 text-tech-gold" />
                      <span className="text-xs font-bold tech-subheading">ØJEBLIKKELIG</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Mobile Hero */}
      <div className="lg:hidden mb-6">
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg max-w-[1150px] mx-auto rounded-lg">
          <div className="px-4 py-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Bedste Danske Betting Sider</h1>
            <h2 className="text-sm md:text-base font-medium mb-4 text-gray-600">
              Ekspert Anmeldelser for {getCurrentMonthYear()}
            </h2>

            <div className="w-16 h-0.5 bg-green-600 mx-auto mb-4"></div>

            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Uafhængig analyse af Danmarks bedste betting platforme
            </p>

            {/* Trust Indicators */}
            <div className="mt-6">
              <div className="flex flex-wrap justify-center items-center gap-3">
                <div className="flex items-center gap-2 text-tech-white bg-tech-black px-2 py-1 border border-tech-gold">
                  <Shield className="w-3 h-3 text-tech-gold" />
                  <span className="text-xs font-bold tech-subheading">LICENSERET</span>
                </div>
                <div className="flex items-center gap-2 text-tech-black bg-tech-gold px-2 py-1 border border-tech-black">
                  <Award className="w-3 h-3 text-tech-black" />
                  <span className="text-xs font-bold tech-subheading">VERIFICERET</span>
                </div>
                <div
                  className="flex items-center gap-2 text-tech-white px-2 py-1 border border-tech-black"
                  style={{ backgroundColor: "#C8102E" }}
                >
                  <TrendingUp className="w-3 h-3 text-tech-white" />
                  <span className="text-xs font-bold tech-subheading">OPDATERET</span>
                </div>
                <div className="flex items-center gap-2 text-tech-black bg-tech-white px-2 py-1 border border-tech-black">
                  <Zap className="w-3 h-3 text-tech-gold" />
                  <span className="text-xs font-bold tech-subheading">ØJEBLIKKELIG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
