"use client"

import { useState, useEffect } from "react"
import { X, Star, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "../types"

interface EditorChoiceModalProps {
  bettingSites: BettingSite[]
}

export function EditorChoiceModal({ bettingSites }: EditorChoiceModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Показувати модалку через 5 секунд після завантаження
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  // Беремо перші 3 сайти
  const top3Sites = bettingSites.slice(0, 3)
  // Змінюємо порядок: центр (1-й), ліва (2-й), права (3-й)
  const reorderedSites = [
    top3Sites[1], // 2-й сайт (Unibet) - ліва позиція
    top3Sites[0], // 1-й сайт (Bet365) - центральна позиція
    top3Sites[2], // 3-й сайт (Danske Spil) - права позиція
  ]

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 w-10 h-10 p-0 bg-black/50 border border-white/30 rounded-full"
      >
        <X className="w-5 h-5" />
      </Button>

      <div className="w-full max-w-5xl">
        {/* Golden Banner */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-bold py-3 px-8 relative rounded-lg shadow-lg">
            {/* Banner decorative elements */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-0 h-0 border-t-[15px] border-t-transparent border-r-[15px] border-r-yellow-400 border-b-[15px] border-b-transparent"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-0 h-0 border-t-[15px] border-t-transparent border-l-[15px] border-l-yellow-400 border-b-[15px] border-b-transparent"></div>

            <span className="text-sm md:text-base font-black tracking-wide">REDAKTØRENS VALG DENNE UGE</span>
          </div>
        </div>

        {/* Cards Layout */}
        <div className="flex items-end justify-center gap-3 md:gap-4 w-full">
          {reorderedSites.map((site: BettingSite, index: number) => {
            const isCenter = index === 1
            const rank = isCenter ? 1 : index === 0 ? 2 : 3

            return (
              <div
                key={site?.id || index}
                className={`overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col ${
                  isCenter
                    ? "w-[280px] md:w-[320px] h-[420px] md:h-[450px] border-4 border-red-600 shadow-2xl"
                    : "w-[240px] md:w-[280px] h-[400px] md:h-[430px] border-4 border-red-500 shadow-xl"
                } bg-black/90 backdrop-blur-sm rounded-lg`}
              >
                {/* Logo section */}
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-16 md:h-20 flex items-center justify-center p-3 md:p-4 border-b-2 border-yellow-400 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    {isCenter && <Crown className="w-6 h-6 text-yellow-400" />}
                    <img
                      src={site?.logo || "/placeholder.svg"}
                      alt={site?.name || "Site"}
                      className="h-10 md:h-12 w-auto object-contain"
                    />
                    {isCenter && <Crown className="w-6 h-6 text-yellow-400" />}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-black/90 text-white flex-1 flex flex-col p-3 md:p-4 text-center">
                  {/* Welcome Package Text */}
                  <div className="mb-2">
                    <p className={`${isCenter ? "text-base" : "text-sm"} text-gray-300 font-medium`}>
                      Velkomstpakke Op Til
                    </p>
                  </div>

                  {/* Bonus Amount */}
                  <div className="flex-1 flex flex-col justify-center mb-3 md:mb-4">
                    <div
                      className={`${isCenter ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"} font-black mb-2 text-yellow-400 tracking-wider`}
                    >
                      {site?.bonus}
                    </div>
                    <div className={`${isCenter ? "text-lg md:text-xl" : "text-base md:text-lg"} font-bold text-white`}>
                      {site?.welcomeOffer}
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center justify-center gap-0.5 md:gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`${isCenter ? "w-5 h-5" : "w-4 h-4"} fill-yellow-400 text-yellow-400`} />
                    ))}
                    <span className={`text-white font-bold ${isCenter ? "text-lg" : "text-base"} ml-2`}>
                      {site?.rating.toFixed(1)}
                      <span className="text-gray-400">/10</span>
                    </span>
                  </div>

                  {/* CTA Button */}
                  <div className="mb-3">
                    <Link href={site?.link || "#"} target="_blank" rel="noopener noreferrer">
                      <Button
                        className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold ${
                          isCenter ? "py-3 px-6 text-base" : "py-2 px-4 text-sm"
                        } rounded-lg shadow-lg transition-all duration-300 hover:scale-105`}
                        onClick={() => setIsOpen(false)}
                      >
                        FÅ BONUS
                      </Button>
                    </Link>
                  </div>

                  {/* Terms */}
                  <div className="text-[8px] md:text-[9px] text-gray-400 leading-tight bg-gray-900/50 border border-gray-700 p-2 min-h-[50px] md:min-h-[60px] rounded">
                    {site?.terms.slice(0, 120)}...
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <div className="bg-black/80 backdrop-blur-sm border-2 border-yellow-400 p-3 max-w-xl mx-auto rounded-lg">
            <p className="text-white text-sm font-medium mb-1">
              18+ Kun | Vilkår & Betingelser Gælder | spillemyndigheden.dk
            </p>
            <p className="text-gray-300 text-xs">
              Licenserede Danske Operatører | Spil Ansvarligt | Spil Kan Være Vanedannende
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
