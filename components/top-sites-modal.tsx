"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

export function TopSitesModal({ bettingSites, casinoSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedTerms, setExpandedTerms] = useState<{ [key: number]: boolean }>({})
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
    // Не показувати модалку на мобільних
    if (isMobile) return

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [isMobile])

  if (!isOpen) return null

  // Змінюємо порядок: центр (1-й), ліва (2-й), права (3-й)
  const top3Sites = bettingSites.slice(0, 3)
  const reorderedSites = [
    top3Sites[1], // 2-й сайт (BetVictor) - ліва позиція
    top3Sites[0], // 1-й сайт (Novibet) - центральна позиція
    top3Sites[2], // 3-й сайт (Midnite) - права позиція
  ]

  const toggleTerms = (siteId: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedTerms((prev) => ({
      ...prev,
      [siteId]: !prev[siteId],
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-tech-white hover:bg-tech-white/10 z-10 w-10 h-10 p-0 bg-tech-black/50 border border-tech-gold"
      >
        <X className="w-5 h-5" />
      </Button>

      <div className="w-full max-w-6xl">
        {/* Title */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-tech-white mb-1 md:mb-2 tech-heading">
            TOP IRISH BETTING SITES
          </h2>
          <p className="text-tech-gray-300 text-xs md:text-sm font-medium tech-subheading">
            Expert reviewed and ranked for Irish players
          </p>
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
                    ? "w-[280px] md:w-[320px] h-[380px] md:h-[400px] border-2 border-tech-gold shadow-tech-glow"
                    : "w-[240px] md:w-[280px] h-[360px] md:h-[380px] border-2 border-tech-white shadow-tech-strong"
                } bg-tech-white rounded-lg`}
              >
                {/* Logo section */}
                <div className="bg-tech-gray-50 h-16 md:h-20 flex items-center justify-center p-3 md:p-4 border-b-2 border-tech-gray-200 flex-shrink-0">
                  <img
                    src={site?.logo || "/placeholder.svg"}
                    alt={site?.name || "Site"}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>

                {/* Content */}
                <div className="bg-tech-white text-tech-black flex-1 flex flex-col p-3 md:p-4 text-center">
                  {/* Stars */}
                  <div className="flex justify-center gap-0.5 md:gap-1 mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 md:w-4 h-3 md:h-4 fill-tech-gold text-tech-gold" />
                    ))}
                  </div>

                  {/* Offer */}
                  <div className="flex-1 flex flex-col justify-center mb-3 md:mb-4">
                    <div
                      className={`${isCenter ? "text-lg md:text-xl" : "text-base md:text-lg"} font-bold mb-2 text-tech-black tech-heading`}
                    >
                      {site?.bonus}
                    </div>
                    <div
                      className={`${isCenter ? "text-base md:text-lg" : "text-sm md:text-base"} font-semibold text-tech-red tech-heading`}
                    >
                      {site?.welcomeOffer}
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mb-3">
                    <Link href={site?.link || "#"} target="_blank" rel="noopener noreferrer">
                      <Button className="tech-button py-2 md:py-2.5 px-3 md:px-4 text-xs md:text-sm w-full font-bold tech-subheading">
                        CLAIM BONUS
                      </Button>
                    </Link>
                  </div>

                  {/* Terms */}
                  <div className="text-[7px] md:text-[8px] text-tech-gray-700 leading-tight bg-tech-gray-50 border border-tech-gray-200 p-2 md:p-2.5 min-h-[60px] md:min-h-[70px] tech-body">
                    {site?.terms}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-4 md:mt-6">
          <div className="bg-tech-white/95 backdrop-blur-sm border-2 border-tech-gold p-2 md:p-3 max-w-xl mx-auto">
            <p className="text-tech-black text-xs font-medium mb-1 tech-subheading">
              18+ Only | Terms & Conditions Apply | BeGambleAware.org
            </p>
            <p className="text-tech-gray-700 text-[10px] tech-body">
              Licensed Irish Operators | Play Responsibly | Gambling Can Be Addictive
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
