"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsConditionsPopup({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-tech-white border-2 border-tech-black shadow-tech-strong max-w-2xl w-full h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-tech-black text-tech-white p-4 sm:p-6 flex-shrink-0 border-b-2 border-tech-gold">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold tech-heading">TERMS & CONDITIONS</h2>
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
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">GENERAL TERMS</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                By using Betting Best Irish Sites, you agree to comply with and be bound by the following terms and
                conditions. These terms apply to all users of our website and services.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">AGE RESTRICTIONS</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                You must be at least 18 years old to use this website. We take age verification seriously and promote
                responsible gambling practices. If you are under 18, please leave this website immediately.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">RESPONSIBLE GAMBLING</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 mb-3 tech-body leading-relaxed">
                We are committed to promoting responsible gambling. Please remember:
              </p>
              <ul className="text-sm sm:text-base text-tech-gray-700 list-disc list-inside space-y-2 tech-body">
                <li>Only gamble with money you can afford to lose</li>
                <li>Set time and spending limits before you start</li>
                <li>Never chase your losses</li>
                <li>Take regular breaks from gambling</li>
                <li>Seek help if gambling becomes a problem</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">INFORMATION ACCURACY</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                While we strive to provide accurate and up-to-date information about betting sites, bonuses, and
                promotions, we cannot guarantee the accuracy of all content. Terms and conditions may change without
                notice.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">THIRD-PARTY LINKS</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Our website contains links to third-party betting sites. We are not responsible for the content, terms,
                or practices of these external sites. Always review their terms and conditions before use.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                LIMITATION OF LIABILITY
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Betting Best Irish Sites shall not be liable for any direct, indirect, incidental, or consequential
                damages arising from your use of this website or the information contained herein.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">HELP & SUPPORT</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 mb-3 tech-body leading-relaxed">
                If you need help with gambling addiction, please contact:
              </p>
              <ul className="text-sm sm:text-base text-tech-gray-700 list-disc list-inside space-y-2 tech-body">
                <li>
                  <strong>GambleAware:</strong> www.gambleaware.org
                </li>
                <li>
                  <strong>GamCare:</strong> www.gamcare.org.uk
                </li>
                <li>
                  <strong>Gamblers Anonymous:</strong> www.gamblersanonymous.org.uk
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-tech-red/10 border-t-2 border-tech-red p-3 sm:p-4 flex-shrink-0">
          <p className="text-tech-red font-semibold text-center text-sm tech-subheading">
            18+ | Wagering and T&Cs apply | Play responsibly
          </p>
        </div>
      </div>
    </div>
  )
}
