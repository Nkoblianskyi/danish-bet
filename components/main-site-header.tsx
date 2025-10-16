import Link from "next/link"
import Image from "next/image"

export function MainSiteHeader() {
  return (
    <header className="bg-black/10  fixed w-full top-0 z-40">
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="h-12 flex items-center justify-center px-4 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-14 h-14 flex items-center justify-center relative ">
              <Image src="/logo.png" alt="Logo" width={48} height={48} className="w-8 h-8 " />
            </div>
          </Link>
          <div className="absolute right-0 top-0 bottom-0 w-1" style={{ backgroundColor: "#C8102E" }}></div>
        </div>
      </div>

      {/* Desktop/Tablet Header */}
      <div className="hidden md:block">
        <div className="container mx-auto max-w-[1150px]">
          <div className="flex items-center justify-center">
            {/* Logo and Brand - Centered */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-18 h-16  flex items-center justify-center tech-scanner">
                  <Image src="/logo.png" alt="Logo" width={52} height={52} className="w-12 h-10" />
                </div>
              </div>
            </Link>
            <div className="absolute right-0 top-0 bottom-0 w-1" style={{ backgroundColor: "#C8102E" }}></div>
          </div>
        </div>
      </div>
    </header>
  )
}
