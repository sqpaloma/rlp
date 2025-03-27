"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Header() {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState(pathname)

  useEffect(() => {
    setActiveItem(pathname)
  }, [pathname])

  // Define constants for link styles
  const LINK_STYLES = {
    base: "hover:text-blue-600",
    active: "text-red-600 font-medium underline"
  }

  // Navigation items with their paths
  const navItems = [
    { path: "/", label: "Início" },
    { path: "/sobre", label: "Sobre" },
    { path: "/servicos", label: "Serviços" },
    { path: "#contato", label: "Contato", alwaysInactive: true },
    { path: "/blog", label: "Blog" }
  ]

  return (
    <header className="sticky top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between border-b border-blue-200 bg-white shadow-sm">
      <div className="flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RLPcrop1transparente-1024x235-KD4yuv86E6ME2NgUX3WPLvovkNomud.png"
          alt="RLP Engenharia Logo"
          width={205}
          height={47}
          className="h-12 w-auto"
        />
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map(item => (
          <Link 
            key={item.path} 
            href={item.path} 
            className={`${item.alwaysInactive ? LINK_STYLES.base : activeItem === item.path ? LINK_STYLES.active : LINK_STYLES.base}`}
            style={activeItem === item.path && !item.alwaysInactive ? { color: '#dc2626' } : {}}
          >
            {item.label}
          </Link>
        ))}
        <a
          href="https://wa.me/5511985782307?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Orçamento
        </a>
      </nav>
      <button className="md:hidden">
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
    </header>
  )
} 