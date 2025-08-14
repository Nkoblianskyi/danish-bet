"use client"

import { useState, useEffect } from "react"
import { X, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "../types"

interface EditorChoiceModalProps {
  bettingSites: BettingSite[]
}

export function EditorChoiceModal({ bettingSites }: EditorChoiceModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Показувати модалку через 8 секунд після завантаження
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

  const sitesToShow = isMobile ? [top3Sites[0]] : reorderedSites

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="absolute top-44 right-2 sm:top-36 sm:right-28 text-tech-white hover:bg-tech-white/20 z-10 w-8 h-8 sm:w-10 sm:h-10 p-0 bg-tech-black/70 border-2 border-tech-gold rounded-full shadow-tech-glow"
      >
        <X className="w-4 h-4 sm:w-5 sm:h-5" />
      </Button>

      <div className="w-full  flex flex-col justify-center items-center max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl">
        {/* Header Banner */}
        <div className="text-center mb-2 sm:mb-4 px-2 flex-shrink-0">
          <div className="relative inline-block">
            <div className="bg-tech-gold text-tech-black font-bold py-2 sm:py-3 px-4 sm:px-8 relative border-2 border-tech-black shadow-tech-strong">
              <div className="flex items-center gap-2 justify-center">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-lg font-black tracking-wide tech-heading">REDAKTØRENS VALG</span>
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3" style={{ backgroundColor: "#C8102E" }}></div>
              <div className="absolute -top-1 -right-1 w-3 h-3" style={{ backgroundColor: "#C8102E" }}></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-tech-white"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-tech-white"></div>
            </div>
          </div>
        </div>

        {/* Cards Layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full px-2 flex-1 min-h-0">
          {sitesToShow.map((site: BettingSite, index: number) => {
            const isCenter = isMobile ? true : index === 1
            const rank = isMobile ? 1 : isCenter ? 1 : index === 0 ? 2 : 3

            return (
              <div
                key={site?.id || index}
                className={`tech-card overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col ${
                  isMobile || isCenter
                    ? "w-full sm:w-[200px] md:w-[240px] lg:w-[280px] h-[320px] sm:h-[320px] md:h-[380px] border-4 border-tech-gold shadow-tech-glow"
                    : "w-full sm:w-[180px] md:w-[220px] lg:w-[260px] h-[140px] sm:h-[300px] md:h-[360px] border-2 border-tech-white shadow-tech-strong"
                } bg-tech-white relative`}
              >
                {/* Rank Badge */}
                <div className="absolute top-0 left-0 z-20">
                  <div
                    className="tech-rank px-2 py-1 text-xs font-bold !text-white"
                    style={{ backgroundColor: "#C8102E" }}
                  >
                    #{rank}
                  </div>
                </div>

                {/* Logo section */}
                <div className="bg-black h-36 sm:h-36 md:h-36 flex items-center justify-center p-2 sm:p-3 border-b-2 border-tech-black flex-shrink-0 relative">
                  <img
                    src={site?.logo || "/placeholder.svg"}
                    alt={site?.name || "Site"}
                    className="h-32 sm:h-32 md:h-32 w-auto object-contain p-2"
                  />
                  {/* Corner flags */}
                  <div className="absolute -top-1 -left-1 w-2 h-2" style={{ backgroundColor: "#C8102E" }}></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2" style={{ backgroundColor: "#C8102E" }}></div>
                </div>

                {/* Content */}
                <div className="bg-tech-white text-tech-black flex-1 flex flex-col p-1 sm:p-2 md:p-3 text-center justify-between min-h-0 relative">
                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-tech-gold"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-tech-gold"></div>

                  <div className="flex flex-col items-center justify-center h-full gap-3">
                    {/* Bonus Amount */}
                    <div className="text-center">
                      <div className="text-sm sm:text-sm text-tech-gray-600 font-medium mb-1 tech-subheading">
                        VELKOMSTBONUS
                      </div>
                      <div
                        className={`${isMobile || isCenter ? "text-xl sm:text-xl md:text-2xl" : "text-sm sm:text-lg md:text-xl"} font-black text-tech-black tracking-wider leading-tight tech-heading`}
                      >
                        {site?.bonus}
                      </div>
                      <div
                        className={`${isMobile || isCenter ? "text-xl sm:text-xl md:text-xl" : "text-xs sm:text-sm md:text-base"} font-bold leading-tight tech-heading`}
                        style={{ color: "#C8102E" }}
                      >
                        {site?.welcomeOffer}
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-0.5 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`${isMobile || isCenter ? "w-3 sm:w-3 md:w-4 h-3 sm:h-3 md:h-4" : "w-1.5 sm:w-2.5 md:w-3 h-1.5 sm:h-2.5 md:h-3"} fill-current`}
                            style={{ color: "#C8102E" }}
                          />
                        ))}
                      </div>
                      <span
                        className={`font-bold tech-subheading ${isMobile || isCenter ? "text-sm sm:text-sm md:text-base" : "text-xs sm:text-sm"}`}
                        style={{ color: "#C8102E" }}
                      >
                        {site?.rating.toFixed(1)}/10
                      </span>
                    </div>

                    {/* CTA Button */}
                    <div className="flex-shrink-0">
                      <Link href={site?.link || "#"} target="_blank" rel="noopener noreferrer">
                        <Button
                          className={`bg-green-600 hover:bg-green-700 text-white font-bold border-2 border-green-800 ${
                            isMobile || isCenter
                              ? "py-2 sm:py-2 px-4 sm:px-4 text-sm sm:text-sm md:text-base"
                              : "py-0.5 sm:py-1.5 px-1.5 sm:px-3 text-xs sm:text-sm"
                          } shadow-tech-medium transition-all duration-300 hover:scale-105 whitespace-nowrap tech-subheading`}
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
          <div className="bg-tech-white/95 backdrop-blur-sm border-2 border-tech-gold p-2 sm:p-3 relative shadow-tech-strong">
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-2 h-2" style={{ backgroundColor: "#C8102E" }}></div>
            <div className="absolute -top-1 -right-1 w-2 h-2" style={{ backgroundColor: "#C8102E" }}></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-tech-gold"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-tech-gold"></div>

            <p className="text-tech-black text-[10px] sm:text-xs font-bold mb-0.5 sm:mb-1 tech-subheading">
              18+ Kun | spillemyndigheden.dk
            </p>
            <p className="text-tech-gray-700 text-[8px] sm:text-[10px] tech-body">
              Spil Ansvarligt | Spil Kan Være Vanedannende
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
