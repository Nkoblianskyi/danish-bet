"use client"

import Link from "next/link"
import type { HorizontalBanner as HorizontalBannerType } from "../types"
import Image from "next/image"
import { Zap, Star } from "lucide-react"

interface PromotionalBannerProps {
  banner: HorizontalBannerType
}

export function PromotionalBanner({ banner }: PromotionalBannerProps) {
  return (
    <div className="mb-6 max-w-[1580px] mx-auto">
      <Link
        href={banner.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-[1.01] transition-all duration-300"
      >
        <div className="relative overflow-hidden tech-card border-2 border-tech-black h-20 sm:h-24 md:h-28 lg:h-32">
          {/* Background Image */}
          <Image
            src={banner.backgroundImage || "/placeholder.svg"}
            alt="Banner Background"
            fill
            className="object-cover"
            style={{ objectPosition: "center" }}
          />

          {/* Tech overlay */}
          <div className="absolute inset-0 bg-tech-black/60 tech-grid-bg"></div>

          {/* Special Offer Flag */}
          <div className="absolute top-0 left-0 bg-tech-red text-tech-white px-4 py-2 text-xs font-bold z-10 shadow-tech-strong tech-subheading flex items-center gap-1">
            <Star className="w-3 h-3" />
            SPECIAL OFFER
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-tech-gold"></div>
          <div className="absolute bottom-0 left-4 w-4 h-4 bg-tech-gold"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-tech-red"></div>

          {/* Main Content */}
          <div className="relative z-10 h-full flex items-center justify-between px-4 sm:px-6 md:px-8">
            {/* Left: Logo */}
            <div className="flex items-center justify-center flex-shrink-0">
              <div className="bg-tech-white border-2 border-tech-black p-3 shadow-tech-strong relative">
                <img
                  src={banner.logo || "/placeholder.svg"}
                  alt={banner.name}
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
                />
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-tech-gold"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-tech-red"></div>
              </div>
            </div>

            {/* Center: Bonus Text */}
            <div className="flex-1 text-center px-4">
              <div className="text-tech-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tech-heading drop-shadow-lg">
                {banner.welcomeOffer}
              </div>
              <div className="w-16 h-1 bg-tech-gold mx-auto mt-2"></div>
            </div>

            {/* Right: Button */}
            <div className="flex items-center flex-shrink-0">
              <button className="tech-button px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 text-sm sm:text-base md:text-lg font-bold tech-subheading whitespace-nowrap flex items-center gap-2">
                <Zap className="w-4 h-4" />
                CLAIM NOW
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
