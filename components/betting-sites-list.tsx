"use client"

import { BettingSiteCard } from "./betting-site-card"
import { PromotionalBanner } from "./promotional-banner"
import { bettingSites, horizontalBanners } from "../data/mock-data"
import type { BettingSite } from "../types"

export function BettingSitesList() {
  return (
    <div className="space-y-1 w-full max-w-[1580px] mx-auto">
      {bettingSites.map((site: BettingSite, index: number) => (
        <div key={site.id} className="w-full">
          <BettingSiteCard site={site} rank={index + 1} />
          {/* Банер після 3-го елемента */}
          {/* {index === 2 && (
            <div className="my-2 w-full">
              <PromotionalBanner banner={horizontalBanners[0]} />
            </div>
          )} */}
          {/* Банер після 6-го елемента */}
          {/* {index === 5 && (
            <div className="my-2 w-full">
              <PromotionalBanner banner={horizontalBanners[1]} />
            </div>
          )} */}
        </div>
      ))}
    </div>
  )
}
