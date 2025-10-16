"use client"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: SiteCardProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const getRankLabel = (rank: number) => {
    switch (rank) {
      case 1:
        return "BEDSTE SPILLESAL"
      case 2:
        return "EKSKLUSIVT TILBUD"
      case 3:
        return "TREND"
      case 4:
        return "VERIFICERET"
      default:
        return "VURDET"
    }
  }

  return (
    <div className="block animate-fade-in">
      {/* Desktop Layout */}
      <div
        className={`hidden lg:block tech-card ${rank === 1 ? "border-4 border-tech-gold tech-glow" : "border border-tech-gray-300"} relative overflow-hidden cursor-pointer mb-2 mx-4`}
      >
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {/* Main Content */}
          <div className="h-40 flex items-center py-6 px-6 bg-tech-white relative">
            {/* PLATFORM - 30% */}
            <div className="flex-[0_0_30%] pr-2 flex justify-center items-center h-full relative z-10">
              <div className="bg-black border-2 border-tech-black p-4 shadow-tech-medium relative mt-4">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-36 xl:w-44 h-16 xl:h-20 object-contain"
                />
              </div>
            </div>

            {/* Rank and Status Badges - positioned absolutely */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              {rank <= 4 && (
                <div
                  className="tech-badge px-2 sm:px-3 md:px-4 py-1 text-xs font-bold !text-black bg-yellow-500 whitespace-nowrap"
                >
                  {getRankLabel(rank)}
                </div>
              )}
            </div>

            {/* WELCOME PACKAGE - 25% */}
            <div className="flex-[0_0_25%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-xs text-tech-gray-600 uppercase font-bold mb-1 tech-subheading">VELKOMSTBONUS</div>
              <div className="text-lg xl:text-xl font-bold text-tech-black mb-1 tech-heading">{site.bonus}</div>
              <div className="text-sm xl:text-lg font-bold text-tech-black tech-heading">{site.welcomeOffer}</div>
            </div>

            {/* RATING - 12% */}
            <div className="flex-[0_0_12%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div
                className="text-4xl xl:text-5xl font-bold leading-none mb-1 tech-heading text-green-700"
              >
                {site.rating.toFixed(1)}
              </div>
              <div className="text-xs font-bold text-tech-gray-600 tech-subheading">SCORE</div>
            </div>

            {/* USER SCORE - 20% */}
            <div className="flex-[0_0_20%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-xs text-tech-gray-600 mb-2 tech-subheading">
                ({formatVotes(site.votes)} ANMELDELSER)
              </div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 xl:w-5 h-4 xl:h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-tech-black font-bold tech-subheading">FREMRAGENDE</div>
            </div>

            {/* ACCESS - 13% */}
            <div className="flex-[0_0_13%] pl-2 text-center flex flex-col justify-center items-center h-full relative z-10">
              <div className="w-full">
                <Button className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-800 w-full h-12 mb-2 text-sm font-bold tech-subheading shadow-lg">
                  FÅ BONUS
                </Button>
                <div className="text-xs text-tech-gray-600 font-bold tech-subheading">
                  BESØG {site.name.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Footer Disclaimer */}
        <div className="px-6 pb-4 border-t border-neutral-200 bg-neutral-50">
          <p className="text-xs text-neutral-500 text-center py-2">
            18+ | Sikker spil |{" "}
            <a
              href="https://spillemyndigheden.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:text-brand-700 underline"
            >
              spillemyndigheden.dk
            </a>
          </p>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="pr-2 hidden md:block lg:hidden tech-card border border-tech-gray-300 relative overflow-hidden cursor-pointer mb-2 mx-4">
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="pt-6 pb-4 bg-tech-white relative">
            <div className="absolute top-0 left-0 flex z-30" style={{ margin: 0, padding: 0 }}>

              {rank <= 4 && (
                <div
                  className="tech-badge px-2 py-0.5 text-xs font-bold !text-black whitespace-nowrap bg-yellow-400"
                  style={{ margin: 0 }}
                >
                  {getRankLabel(rank)}
                </div>
              )}
            </div>

            <div className="grid grid-cols-12 gap-2 items-center relative z-10">
              <div className="col-span-3 flex justify-center p-2">
                <div className="bg-black border-2 border-tech-black p-2 shadow-tech-soft w-full max-w-[120px] relative">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-12 object-contain" />
                </div>
              </div>

              {/* Bonus - 3 колонки */}
              <div className="col-span-3 text-center">
                <div className="text-xs text-tech-gray-600 uppercase font-bold mb-1 tech-subheading">VELKOMSTBONUS</div>
                <div className="text-sm font-bold text-tech-black mb-1 tech-heading">{site.bonus}</div>
                <div className="text-base font-bold text-tech-black tech-heading">{site.welcomeOffer}</div>
              </div>

              {/* Score - 2 колонки */}
              <div className="col-span-2 text-center">
                <div className="text-xl font-bold leading-none tech-heading text-green-700">
                  {site.rating.toFixed(1)}
                </div>
                <div className="text-xs font-bold text-tech-gray-600 tech-subheading">SCORE</div>
              </div>

              {/* Rating - 2 колонки */}
              <div className="col-span-2 text-center">
                <div className="text-xs text-tech-gray-600 mb-1 tech-subheading">({formatVotes(site.votes)})</div>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current text-yellow-400"/>
                  ))}
                </div>
              </div>

              {/* Button - 2 колонки */}
              <div className="col-span-2 text-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-800 px-2 py-1 text-xs w-full font-bold tech-subheading shadow-lg">
                  FÅ BONUS
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden tech-card relative overflow-hidden cursor-pointer mb-1 mx-2">
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {/* Main Content */}
          <div className="p-2 relative bg-tech-white">
            {/* Badges */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              {rank <= 4 && (
                <div
                  className="tech-badge px-3 py-1 text-xs font-bold !text-black bg-yellow-400 whitespace-nowrap"

                >
                  {getRankLabel(rank)}
                </div>
              )}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-2 items-center mt-5 relative z-10">
              {/* Logo Column */}
              <div className="flex justify-center">
                <div className="bg-black border-2 border-tech-black p-2 shadow-tech-soft relative">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-16 w-auto object-contain" />
                </div>
              </div>

              {/* Bonus Column */}
              <div className="text-center">
                <div className="text-xs text-tech-gray-600 uppercase font-bold mb-1 tech-subheading">VELKOMSTBONUS</div>
                <div className="text-lg font-bold text-tech-black leading-tight mb-1 tech-heading">{site.bonus}</div>
                <div className="text-sm font-bold text-tech-black leading-tight tech-heading">{site.welcomeOffer}</div>
              </div>
            </div>

            {/* Rating Row */}
            <div className="grid grid-cols-3 items-center justify-center gap-1 mt-1 pt-1 border-t-2 border-tech-gray-200 relative z-10">
              <div className="text-center">
                <div className="text-xl font-bold leading-none mb-1 mt-1.5 tech-heading text-green-700">
                  {site.rating.toFixed(1)}
                </div>
                <div className="text-[8px] text-tech-gray-600 font-bold tech-subheading">SCORE</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center gap-0.5 mt-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <div className="text-[10px] text-tech-gray-600 font-bold tech-subheading">
                  ({formatVotes(site.votes)})
                </div>
              </div>

              {/* Button Column */}
              <div className="flex justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-800 px-4 py-2 text-sm w-full font-bold tech-subheading shadow-lg">
                  FÅ BONUS
                </Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Footer Disclaimer */}
        {/* <div className="px-4 pb-2 border-t border-neutral-200 bg-neutral-50">
          <p className="text-xs text-neutral-500 text-center py-2">
            18+ | Sikker spil |{" "}
            <a
              href="https://spillemyndigheden.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:text-brand-700 underline"
            >
              spillemyndigheden.dk
            </a>
          </p>
        </div> */}
      </div>
    </div>
  )
}
