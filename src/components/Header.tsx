"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { clsx } from 'clsx'

type NavItem = {
  path: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { path: "/", label: "Início" },
  { path: "/sobre", label: "Sobre" },
  { path: "/servicos", label: "Serviços" },
  { path: "/contato", label: "Contato" },
  { path: "/blog", label: "Blog" }
]

const LOGO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RLPcrop1transparente-1024x235-KD4yuv86E6ME2NgUX3WPLvovkNomud.png"
const WHATSAPP_URL = "https://wa.me/5511985782307?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between border-b border-blue-200 bg-white shadow-sm">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={LOGO_URL}
            alt="RLP Engenharia Logo"
            width={205}
            height={47}
            className="h-12 w-auto"
            priority
          />
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        {NAV_ITEMS.map(({ path, label }) => (
          <Link 
            key={path} 
            href={path} 
            className={clsx(
             pathname !== path && "text-gray-600 hover:text-blue-600 transition-colors",
              pathname === path && "text-blue-600 underline underline-offset-[12px] decoration-[3px] decoration-blue-600"
            )}
          >
            {label}
          </Link>
        ))}
        
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Orçamento
        </Link>
      </nav>

      <MenuButton />
    </header>
  )
} 

const MenuButton = () => (
  <button className="md:hidden" aria-label="Toggle menu">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
)