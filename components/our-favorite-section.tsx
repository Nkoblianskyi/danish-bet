"use client"

import { Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { bettingSites } from "../data/mock-data"

export function OurFavoriteSection() {
  const favoriteSite = bettingSites[0] // Перший сайт з мок даних

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

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

      {/* Favorite Site Card - Desktop */}
      <div className="hidden lg:block tech-card border-2 border-tech-gold tech-glow relative overflow-hidden cursor-pointer mb-2 mx-4">
        <Link href={favoriteSite.link} target="_blank" rel="noopener noreferrer" className="block">
          {/* Main Content */}
          <div className="h-40 flex items-center py-6 px-6 bg-tech-white relative">
            {/* PLATFORM - 30% */}
            <div className="flex-[0_0_30%] pr-2 flex justify-center items-center h-full relative z-10">
              <div className="bg-black border-2 border-tech-black p-4 shadow-tech-medium relative mt-4">
                <img
                  src={favoriteSite.logo || "/placeholder.svg"}
                  alt={favoriteSite.name}
                  className="w-36 xl:w-44 h-16 xl:h-20 object-contain"
                />

              </div>
            </div>

            {/* Rank and Status Badges - positioned absolutely */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              <div
                className="tech-badge px-2 sm:px-3 md:px-4 py-1 text-xs font-bold !text-black bg-yellow-400 whitespace-nowrap"

              >
                FAVORIT
              </div>
            </div>

            {/* WELCOME PACKAGE - 25% */}
            <div className="flex-[0_0_25%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-xs text-tech-gray-600 uppercase font-bold mb-1 tech-subheading">VELKOMSTBONUS</div>
              <div className="text-lg xl:text-xl font-bold text-tech-black mb-1 tech-heading">{favoriteSite.bonus}</div>
              <div className="text-lg xl:text-xl font-bold text-tech-black tech-heading">
                {favoriteSite.welcomeOffer}
              </div>
            </div>

            {/* RATING - 12% */}
            <div className="flex-[0_0_12%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div
                className="text-4xl xl:text-5xl font-bold leading-none mb-1 tech-heading text-green-700"
              >
                {favoriteSite.rating.toFixed(1)}
              </div>
              <div className="text-xs font-bold text-tech-gray-600 tech-subheading">SCORE</div>
            </div>

            {/* USER SCORE - 20% */}
            <div className="flex-[0_0_20%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-xs text-tech-gray-600 mb-2 tech-subheading">
                ({formatVotes(favoriteSite.votes)} ANMELDELSER)
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
                  BESØG {favoriteSite.name.toUpperCase()}
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

      {/* Favorite Site Card - Tablet */}
      <div className="hidden md:block lg:hidden tech-card border-2 border-tech-gold tech-glow relative overflow-hidden cursor-pointer mb-2 mx-4">
        <Link href={favoriteSite.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="pt-6 pb-4 pl-8 pr-4 bg-tech-white relative">
            <div className="grid grid-cols-12 gap-2 items-center relative z-10">
              {/* Logo - 3 колонки */}
              <div className="col-span-3 flex justify-center">
                <div className="bg-black border-2 border-tech-black p-2 shadow-tech-soft w-full mt-4 relative">
                  <img
                    src={favoriteSite.logo || "/placeholder.svg"}
                    alt={favoriteSite.name}
                    className="w-full h-12 object-contain"
                  />
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-0 left-0 flex gap-0 z-30">
                <div
                  className="tech-badge px-2 py-0.5 text-xs font-bold !text-black bg-yellow-400 whitespace-nowrap"
                >
                  FAVORIT
                </div>
              </div>

              {/* Bonus - 3 колонки */}
              <div className="col-span-3 text-center">
                <div className="text-xs text-tech-gray-600 uppercase font-bold mb-1 tech-subheading">BONUS</div>
                <div className="text-sm font-bold text-tech-black mb-1 tech-heading">{favoriteSite.bonus}</div>
                <div className="text-sm font-bold text-tech-black tech-heading">{favoriteSite.welcomeOffer}</div>
              </div>

              {/* Score - 2 колонки */}
              <div className="col-span-2 text-center">
                <div className="text-xl font-bold leading-none tech-heading text-green-700">
                  {favoriteSite.rating.toFixed(1)}
                </div>
                <div className="text-xs font-bold text-tech-gray-600 tech-subheading">SCORE</div>
              </div>

              {/* Rating - 2 колонки */}
              <div className="col-span-2 text-center">
                <div className="text-xs text-tech-gray-600 mb-1 tech-subheading">
                  ({formatVotes(favoriteSite.votes)})
                </div>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current text-yellow-400" />
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

        {/* Footer Disclaimer */}
        <div className="px-4 pb-4 border-t border-neutral-200 bg-neutral-50 pl-8 pr-4">
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

      {/* Favorite Site Card - Mobile */}
      <div className="md:hidden tech-card border-2 border-tech-gold tech-glow relative overflow-hidden cursor-pointer mb-2 mx-2">
        <Link href={favoriteSite.link} target="_blank" rel="noopener noreferrer" className="block">
          {/* Main Content */}
          <div className="p-3 relative bg-tech-white">
            {/* Badges */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              <div
                className="tech-badge px-1.5 py-0.5 text-xs font-bold !text-black bg-yellow-400 whitespace-nowrap"
              >
                FAVORIT
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-3 gap-2 items-center mt-8 relative z-10">
              {/* Logo Column */}
              <div className="flex justify-center">
                <div className="bg-black border-2 border-tech-black p-2 shadow-tech-soft relative">
                  <img
                    src={favoriteSite.logo || "/placeholder.svg"}
                    alt={favoriteSite.name}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Bonus Column */}
              <div className="text-center">
                <div className="text-xs text-tech-gray-600 uppercase font-bold mb-1 tech-subheading">BONUS</div>
                <div className="text-lg font-bold text-tech-black leading-tight mb-1 tech-heading">
                  {favoriteSite.bonus}
                </div>
                <div className="text-lg font-bold text-tech-black leading-tight tech-heading">
                  {favoriteSite.welcomeOffer}
                </div>
              </div>

              {/* Button Column */}
              <div className="flex justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-800 px-2 py-1 text-xs w-full font-bold tech-subheading shadow-lg">
                  FÅ BONUS
                </Button>
              </div>
            </div>

            {/* Rating Row */}
            <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t-2 border-tech-gray-200 relative z-10">
              <div className="text-center">
                <div className="text-lg font-bold leading-none mb-1 tech-heading text-green-700">
                  {favoriteSite.rating.toFixed(1)}
                </div>
                <div className="text-xs text-tech-gray-600 font-bold tech-subheading">SCORE</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-current" style={{ color: "#C8102E" }} />
                  ))}
                </div>
                <div className="text-xs text-tech-gray-600 font-bold tech-subheading">
                  ({formatVotes(favoriteSite.votes)})
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
