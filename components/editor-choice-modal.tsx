"use client"

import { useState, useEffect } from "react"
import { X, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BettingSite } from "@/types"



interface EditorChoiceModalProps {
  bettingSites: BettingSite[]
}

export function EditorChoiceModal({ bettingSites }: EditorChoiceModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Показувати модалку через 8 секунд після завантаження
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  // Беремо тільки перший сайт
  const topSite = bettingSites[0]

  if (!topSite) return null

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-tech-white hover:bg-tech-white/20 z-10 w-10 h-10 p-0 bg-tech-black/70 border-2 border-tech-gold rounded-full shadow-tech-glow"
      >
        <X className="w-5 h-5" />
      </Button>

      <div className="w-full max-w-sm mx-auto flex flex-col justify-center items-center h-full">
        {/* Header Banner */}
        <div className="text-center mb-6 px-2 flex-shrink-0">
          <div className="relative inline-block">
            <div className="bg-tech-gold text-tech-black font-bold py-3 px-8 relative border-2 border-tech-black shadow-tech-strong">
              <div className="flex items-center gap-2 justify-center">
                <Award className="w-5 h-5" />
                <span className="text-lg font-black tracking-wide tech-heading">REDAKTØRENS VALG</span>
                <Award className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Single Card - Vertical Layout */}
        <div className="tech-card overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col w-full max-w-[320px] h-[420px] border-4 border-tech-gold shadow-tech-glow bg-tech-white relative">
          {/* Rank Badge */}
          <div className="absolute top-0 left-0 z-20">
            <div className="tech-rank px-3 py-1 text-sm font-bold !text-black">#1</div>
          </div>

          {/* Logo section */}
          <div className="bg-black h-28 flex items-center justify-center p-4 border-b-2 border-tech-black flex-shrink-0 relative">
            <img
              src={topSite.logo || "/placeholder.svg"}
              alt={topSite.name || "Site"}
              className="h-24 w-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="bg-tech-white text-tech-black flex-1 flex flex-col p-4 text-center justify-between min-h-0 relative">


            <div className="flex flex-row items-center justify-center gap-4">
              {/* Rating Stars */}
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>

              {/* Rating Score */}
              <div>
                <span className="font-bold tech-subheading text-lg text-green-700">
                  {topSite.rating.toFixed(1)}/10
                </span>
              </div>
            </div>

            {/* Bonus Amount */}
            <div className="flex-1 flex flex-col justify-center mb-2">
              <div className="text-sm text-tech-gray-600 font-medium mb-2 tech-subheading">VELKOMSTBONUS</div>
              <div className="text-xl font-black text-tech-black tracking-wider leading-tight tech-heading mb-2">
                {topSite.bonus}
              </div>
              <div className="text-xl font-bold leading-tight tech-heading text-black">
                {topSite.welcomeOffer}
              </div>
            </div>



            {/* CTA Button */}
            <div>
              <Link href={topSite.link || "#"} target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white font-bold border-2 border-green-800 py-3 px-6 text-base w-full shadow-tech-medium transition-all duration-300 hover:scale-105 tech-subheading"
                  onClick={() => setIsOpen(false)}
                >
                  FÅ BONUS
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 px-2 flex-shrink-0">
          <div className="bg-tech-white/95 backdrop-blur-sm border-2 border-tech-gold p-3 relative shadow-tech-strong">


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
