import Link from "next/link"
import Image from "next/image"

export function MainSiteHeader() {
  return (
    <header className="tech-header sticky top-0 z-40">
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="h-12 flex items-center justify-center px-4 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-tech-gold"></div>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-tech-gold border border-tech-black flex items-center justify-center relative">
              <Image src="/logo.png" alt="Logo" width={30} height={30} className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-2 h-2" style={{ backgroundColor: "#C8102E" }}></div>
            </div>
            <div className="text-center">
              <h1 className="text-sm font-bold leading-tight tech-heading">
                <span className="text-tech-gold">BETTING</span>
                <span className="text-tech-white"> BEDSTE</span>
                <span style={{ color: "#C8102E" }}> DANSKE</span>
              </h1>
              <p className="text-xs text-tech-gray-300 font-medium tech-subheading">EKSPERT ANALYSE 2025</p>
            </div>
          </Link>
          <div className="absolute right-0 top-0 bottom-0 w-1" style={{ backgroundColor: "#C8102E" }}></div>
        </div>
      </div>

      {/* Desktop/Tablet Header */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-3 max-w-[1150px]">
          <div className="flex items-center justify-center">
            {/* Logo and Brand - Centered */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-tech-gold border-2 border-tech-black flex items-center justify-center tech-scanner">
                  <Image src="/logo.png" alt="Logo" width={24} height={24} className="w-8 h-8" />
                </div>
                <div
                  className="absolute -top-1 -right-1 w-3 h-3 border border-tech-black"
                  style={{ backgroundColor: "#C8102E" }}
                ></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-tech-white border border-tech-black"></div>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold tech-heading">
                  <span className="text-tech-white">BETTING</span>
                  <span className="text-tech-white"> BEDSTE</span>
                  <span style={{ color: "#C8102E" }}> DANSKE</span>
                  <span className="text-tech-white"> SIDER</span>
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
