"use client"

import { Award } from "lucide-react"
import { BettingSiteCard } from "@/components/betting-site-card"
import { bettingSites } from "../data/mock-data"

export function OurFavoriteSection() {
  const favoriteSite = bettingSites[0]

  return (
    <div className="mt-12 max-w-[1150px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="bg-tech-white/95 backdrop-blur-sm rounded-lg p-6 shadow-tech-strong border-2 border-tech-gold relative">
          {/* Corner accents */}
          <div className="absolute -top-1 -left-1 w-3 h-3" style={{ backgroundColor: "#C8102E" }}></div>
          <div className="absolute -top-1 -right-1 w-3 h-3" style={{ backgroundColor: "#C8102E" }}></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-tech-gold"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-tech-gold"></div>

          <div className="flex items-center justify-center gap-3 mb-3">
            <Award className="w-6 h-6" style={{ color: "#C8102E" }} />
            <h2 className="text-2xl lg:text-3xl font-bold text-tech-black tech-heading">
              VORES <span style={{ color: "#C8102E" }}>FAVORIT</span>
            </h2>
            <Award className="w-6 h-6" style={{ color: "#C8102E" }} />
          </div>
          <p className="text-tech-gray-700 tech-body">
            Redaktørens anbefaling baseret på omfattende analyse og brugeroplevelse
          </p>
        </div>
      </div>

      <BettingSiteCard site={favoriteSite} rank={1} />
    </div>
  )
}
