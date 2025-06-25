"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Award, Clock, Users, Zap, Target } from "lucide-react"

export function MainSiteFooter() {
  return (
    <footer className="bg-tech-black text-tech-white py-16 mt-20 border-t-4 border-tech-gold relative">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid-bg opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-[1150px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <div className="relative">
                <div className="w-16 h-16 bg-tech-gold border-2 border-tech-black flex items-center justify-center shadow-tech-glow group-hover:shadow-tech-red-glow transition-all duration-300">
                  <Image src="/logo.png" alt="Dansk Flag" width={40} height={40} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3" style={{ backgroundColor: "#C8102E" }}></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-tech-white"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold tech-heading">
                  <span className="text-tech-gold">BETTING</span>
                  <span className="text-tech-white"> BEDSTE</span>
                  <span style={{ color: "#C8102E" }}> DANSKE</span>
                  <span className="text-tech-gold"> SIDER</span>
                </h3>
                <p className="text-sm text-tech-gray-400 tech-subheading">DANMARKS FØRENDE BETTING ANALYSE</p>
              </div>
            </Link>
            <p className="text-tech-gray-300 leading-relaxed mb-6 tech-body">
              Avanceret algoritmisk analyse af Danmarks bedste betting platforme. Vi leverer omfattende tekniske
              anmeldelser, realtids data verifikation og ekspert anbefalinger for at optimere din betting oplevelse.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-tech-gray-400">
              <div className="flex items-center gap-2 bg-tech-white/5 p-2 border border-tech-gold/20">
                <Users className="w-4 h-4 text-tech-gold" />
                <span className="tech-subheading">50.000+ VERIFICEREDE BRUGERE</span>
              </div>
              <div
                className="flex items-center gap-2 bg-tech-white/5 p-2 border-tech-red/20"
                style={{ borderColor: "#C8102E33" }}
              >
                <Award className="w-4 h-4" style={{ color: "#C8102E" }} />
                <span className="tech-subheading">EKSPERT CERTIFICERET</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-tech-gold tech-heading flex items-center gap-2">
              <Target className="w-5 h-5" />
              HURTIG ADGANG
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-tech-gray-300 hover:text-tech-gold transition-colors duration-300 flex items-center gap-3 tech-subheading"
                >
                  <div className="w-2 h-2 bg-tech-gold"></div>
                  OM PLATFORMEN
                </Link>
              </li>
              <li>
                <Link
                  href="/responsible-gaming"
                  className="text-tech-gray-300 transition-colors duration-300 flex items-center gap-3 tech-subheading"
                  style={{ color: "#C8102E" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C8102E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9AA0A6")}
                >
                  <div className="w-2 h-2" style={{ backgroundColor: "#C8102E" }}></div>
                  ANSVARLIGT SPIL
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-tech-gray-300 hover:text-tech-gold transition-colors duration-300 flex items-center gap-3 tech-subheading"
                >
                  <div className="w-2 h-2 bg-tech-gold"></div>
                  COOKIE POLITIK
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-tech-gray-300 transition-colors duration-300 flex items-center gap-3 tech-subheading"
                  style={{ color: "#C8102E" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C8102E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9AA0A6")}
                >
                  <div className="w-2 h-2" style={{ backgroundColor: "#C8102E" }}></div>
                  PRIVATLIVSPOLITIK
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Safety */}
          <div>
            <h4 className="text-lg font-bold mb-6 tech-heading flex items-center gap-2" style={{ color: "#C8102E" }}>
              <Shield className="w-5 h-5" />
              SIKKERHEDSPROTOKOL
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border border-tech-gold/20">
                <Image src="/denmark-flag-icon.webp" alt="Logo" width={20} height={20} className="w-5 h-5" />
                <span className="text-sm tech-subheading">LICENSERET & REGULERET</span>
              </div>
              <div
                className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border"
                style={{ borderColor: "#C8102E33" }}
              >
                <Clock className="w-4 h-4" style={{ color: "#C8102E" }} />
                <span className="text-sm tech-subheading">SIKKER & VERIFICERET</span>
              </div>
              <div className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border border-tech-gold/20">
                <Award className="w-4 h-4 text-tech-gold" />
                <span className="text-sm tech-subheading">EKSPERT VALIDERET</span>
              </div>
              <div
                className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border"
                style={{ borderColor: "#C8102E33" }}
              >
                <Zap className="w-4 h-4" style={{ color: "#C8102E" }} />
                <span className="text-sm tech-subheading">REALTIDS OPDATERINGER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Gambling Partners */}
        <div className="border-t-2 border-tech-gold/30 pt-12 mb-12">
          <h4 className="text-xl font-bold mb-8 text-center text-tech-gold tech-heading">ANSVARLIGT SPIL PARTNERE</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <Link href="https://spillemyndigheden.dk/" className="group">
              <div className="bg-tech-white border-2 border-tech-black p-4 shadow-tech-medium group-hover:shadow-tech-glow transition-all duration-300 transform group-hover:scale-105 relative">
                <img src="/spillemyn.svg" alt="Spillemyndigheden" className="h-8 md:h-10 object-contain" />
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-tech-gold"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2" style={{ backgroundColor: "#C8102E" }}></div>
              </div>
            </Link>
            <Link href="https://stopspillet.dk/" className="group">
              <div className=" border-2 border-tech-black p-4 shadow-tech-medium group-hover:shadow-tech-glow transition-all duration-300 transform group-hover:scale-105 relative">
                <img src="/stopsillet.svg" alt="StopSpillet" className="h-8 md:h-10 object-contain" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-tech-gold"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2" style={{ backgroundColor: "#C8102E" }}></div>
              </div>
            </Link>
            <Link href="https://www.rofus.nu/" className="group">
              <div className=" border-2 border-tech-black p-4 shadow-tech-medium group-hover:shadow-tech-glow transition-all duration-300 transform group-hover:scale-105 relative">
                <img src="/rofus.png" alt="ROFUS" className="h-6 md:h-8 object-contain" />
                <div className="absolute -top-1 -left-1 w-2 h-2" style={{ backgroundColor: "#C8102E" }}></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-tech-gold"></div>
              </div>
            </Link>
            <Link href="https://www.begambleaware.org/" className="group">
              <div className="bg-tech-white border-2 border-tech-black p-4 shadow-tech-medium group-hover:shadow-tech-glow transition-all duration-300 transform group-hover:scale-105 relative">
                <img src="/gamble.webp" alt="GambleAware" className="h-8 md:h-10 object-contain" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-tech-gold"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2" style={{ backgroundColor: "#C8102E" }}></div>
              </div>
            </Link>
            <Link href="https://www.gamcare.org.uk/" className="group">
              <div className="bg-tech-white border-2 border-tech-black p-4 shadow-tech-medium group-hover:shadow-tech-glow transition-all duration-300 transform group-hover:scale-105 relative">
                <img src="/gamecare.svg" alt="GamCare" className="h-8 md:h-10 object-contain" />
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-tech-gold"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2" style={{ backgroundColor: "#C8102E" }}></div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 pt-8 text-center" style={{ borderColor: "#C8102E4D" }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <p className="text-tech-gray-400 text-sm tech-body">
              © 2025 BETTINGBESTEDANSKESIDER.DK | ALLE RETTIGHEDER FORBEHOLDES
            </p>
            <div className="flex items-center gap-6 text-sm text-tech-gray-400">
              <span className="tech-subheading">UDVIKLET I DANMARK</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 border border-tech-black" style={{ backgroundColor: "#C8102E" }}></div>
                <div className="w-4 h-3 bg-tech-white border border-tech-black"></div>
              </div>
            </div>
          </div>
          <div className="border-2 p-6 relative" style={{ backgroundColor: "#C8102E33", borderColor: "#C8102E" }}>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3" style={{ backgroundColor: "#C8102E" }}></div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-tech-gold"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-tech-gold"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3" style={{ backgroundColor: "#C8102E" }}></div>

            <p className="font-bold text-sm mb-2 tech-heading" style={{ color: "#C8102E" }}>
              🔞 18+ | KUN DANSKE SPILLERE | SPIL KAN VÆRE VANEDANNENDE — SPIL SIKKERT
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
