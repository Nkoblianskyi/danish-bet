"use client"

import Link from "next/link"

interface VerticalPromotionalBannerProps {
  position: "left" | "right"
  site: {
    id: number
    name: string
    logo: string
    welcomeOffer: string
    link: string
    backgroundImage: string
  }
}

export function VerticalPromotionalBanner({ position, site }: VerticalPromotionalBannerProps) {
  return (
    <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-[700px] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${site.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* 1. SPECIAL OFFER Tab - залишається як було */}
          <div
            className="flex-shrink-0 h-[22px] flex items-center justify-center relative mx-auto mt-0 bg-red-600 text-white font-bold text-[10px] tracking-widest shadow-lg"
            style={{
              borderRadius: "0 0 8px 8px",
              width: "85%",
            }}
          >
            SPECIAL OFFER
          </div>

          {/* Центральна частина з лого, бонусом і кнопкою */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            {/* 2. LOGO Section */}
            <div className="flex-shrink-0 mb-4">
              <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-16 w-auto object-contain" />
            </div>

            {/* 3. BONUS Text */}
            <div className="flex-shrink-0 mb-6">
              <div className="text-white text-2xl font-black leading-tight drop-shadow-lg">{site.welcomeOffer}</div>
            </div>

            {/* 4. BUTTON - Новий дизайн */}
            <div className="flex-shrink-0">
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-6 py-2 rounded text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20 whitespace-nowrap">
                CLAIM BONUS
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
