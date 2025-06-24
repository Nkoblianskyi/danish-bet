"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosurePopup({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-tech-white border-2 border-tech-black shadow-tech-strong max-w-2xl w-full h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-tech-black text-tech-white p-4 sm:p-6 flex-shrink-0 border-b-2 border-tech-gold">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold tech-heading">ADVERTISER DISCLOSURE</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-tech-white hover:bg-tech-white/20 border border-tech-gold"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-tech-white">
          <div className="space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">HOW WE MAKE MONEY</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Betting Best Irish Sites is an independent comparison website that helps users find the best betting
                sites in Ireland. We may receive compensation when you click on links to betting sites featured on our
                website.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                OUR COMMITMENT TO YOU
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 mb-3 tech-body leading-relaxed">
                This compensation does not influence our rankings, reviews, or recommendations. Our editorial team
                maintains complete independence in evaluating betting sites based on factors such as:
              </p>
              <ul className="text-sm sm:text-base text-tech-gray-700 list-disc list-inside space-y-2 tech-body">
                <li>Licensing and regulation</li>
                <li>Security and safety measures</li>
                <li>Betting odds and markets</li>
                <li>Welcome bonuses and promotions</li>
                <li>Customer service quality</li>
                <li>Payment methods and withdrawal speeds</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">TRANSPARENCY</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                We believe in complete transparency with our users. All betting sites featured on our platform are
                clearly marked, and we only recommend operators that are licensed and regulated in Ireland or other
                reputable jurisdictions.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">YOUR RESPONSIBILITY</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                While we strive to provide accurate and up-to-date information, it is your responsibility to verify all
                terms and conditions directly with the betting operator before placing any bets. Always gamble
                responsibly and within your means.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-tech-red/10 border-t-2 border-tech-red p-3 sm:p-4 flex-shrink-0">
          <p className="text-tech-red font-semibold text-center text-sm tech-subheading">
            18+ | Irish players only | Gambling can be addictive — Play safe.
          </p>
        </div>
      </div>
    </div>
  )
}
