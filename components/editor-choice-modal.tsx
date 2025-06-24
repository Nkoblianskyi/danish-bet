"use client"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
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
    }, 8000)

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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:bg-white/20 z-10 w-8 h-8 sm:w-10 sm:h-10 p-0 bg-black/50 border border-white/30 rounded-full"
      >
        <X className="w-4 h-4 sm:w-5 sm:h-5" />
      </Button>

      <div className="w-full h-full flex flex-col justify-center items-center max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl">
        {/* Golden Banner */}
        <div className="text-center mb-2 sm:mb-4 px-2 flex-shrink-0">
          <div className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-bold py-1 sm:py-2 px-3 sm:px-6 relative rounded-lg shadow-lg">
            <span className="text-xs sm:text-sm font-black tracking-wide">REDAKTØRENS VALG</span>
          </div>
        </div>

        {/* Cards Layout - Mobile: Stack vertically, Tablet+: Horizontal */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full px-2 flex-1 min-h-0">
          {reorderedSites.map((site: BettingSite, index: number) => {
            const isCenter = index === 1
            const rank = isCenter ? 1 : index === 0 ? 2 : 3

            return (
              <div
                key={site?.id || index}
                className={`overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col ${
                  isCenter
                    ? "w-full sm:w-[200px] md:w-[240px] lg:w-[280px] h-[140px] sm:h-[320px] md:h-[380px] border-4 border-red-600 shadow-2xl"
                    : "w-full sm:w-[180px] md:w-[220px] lg:w-[260px] h-[120px] sm:h-[300px] md:h-[360px] border-4 border-red-500 shadow-xl"
                } bg-black/90 backdrop-blur-sm rounded-lg`}
              >
                {/* Logo section */}
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-14 sm:h-20 md:h-24 flex items-center justify-center p-2 sm:p-3 border-b-2 border-yellow-400 flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <img
                      src={site?.logo || "/placeholder.svg"}
                      alt={site?.name || "Site"}
                      className="h-8 sm:h-14 md:h-16 w-auto object-contain"
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="bg-black/90 text-white flex-1 flex flex-col p-1 sm:p-2 md:p-3 text-center justify-between min-h-0">
                  {/* Mobile: Horizontal layout, Desktop: Vertical */}
                  <div className="flex sm:flex-col items-center sm:items-center justify-center sm:justify-center h-full">
                    {/* Bonus Amount - Centered */}
                    <div className="flex-1 sm:flex-none text-center">
                      <div className="text-xs sm:text-sm text-gray-300 font-medium mb-0 sm:mb-1">Velkomstpakke</div>
                      <div
                        className={`${isCenter ? "text-base sm:text-xl md:text-3xl" : "text-sm sm:text-lg md:text-2xl"} font-black text-yellow-400 tracking-wider leading-tight`}
                      >
                        {site?.bonus}
                      </div>
                      <div
                        className={`${isCenter ? "text-sm sm:text-sm md:text-lg" : "text-xs sm:text-sm md:text-base"} font-bold text-white leading-tight`}
                      >
                        {site?.welcomeOffer}
                      </div>
                    </div>

                    {/* Rating Stars - Moved to center with more spacing */}
                    <div className="flex flex-col items-center sm:my-4 mx-4 sm:mx-0">
                      <div className="flex items-center gap-0.5 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`${isCenter ? "w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4" : "w-1.5 sm:w-2.5 md:w-3 h-1.5 sm:h-2.5 md:h-3"} fill-yellow-400 text-yellow-400`}
                          />
                        ))}
                      </div>
                      <span
                        className={`text-sm sm:text-base md:text-lg font-bold ${isCenter ? "text-xs sm:text-sm md:text-base" : "text-xs sm:text-sm md:text-base"}`}
                      >
                        {site?.rating.toFixed(1)}/10
                      </span>
                    </div>

                    {/* CTA Button - Moved to right/bottom */}
                    <div className="flex-shrink-0">
                      <Link href={site?.link || "#"} target="_blank" rel="noopener noreferrer">
                        <Button
                          className={`bg-green-600 hover:bg-green-700 text-white font-bold ${
                            isCenter
                              ? "py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm md:text-base"
                              : "py-0.5 sm:py-1.5 px-1.5 sm:px-3 text-xs sm:text-sm"
                          } rounded shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap`}
                          onClick={() => setIsOpen(false)}
                        >
                          FÅ BONUS
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-2 sm:mt-4 px-2 flex-shrink-0">
          <div className="bg-black/80 backdrop-blur-sm border-2 border-yellow-400 p-1.5 sm:p-2 rounded-lg">
            <p className="text-white text-[10px] sm:text-xs font-medium mb-0.5 sm:mb-1">
              18+ Kun | spillemyndigheden.dk
            </p>
            <p className="text-gray-300 text-[8px] sm:text-[10px]">Spil Ansvarligt | Spil Kan Være Vanedannende</p>
          </div>
        </div>
      </div>
    </div>
  )
}
