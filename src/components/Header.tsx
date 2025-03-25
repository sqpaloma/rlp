import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="py-4 px-6 md:px-12 flex items-center justify-between border-b border-gray-200">
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
        <Link href="/" className="text-blue-600 font-medium">
          Início
        </Link>
        <Link href="/sobre" className="text-gray-600 hover:text-blue-600">
          Sobre
        </Link>
        <Link href="/servicos" className="text-gray-600 hover:text-blue-600">
          Serviços
        </Link>
        <a href="#contato" className="text-gray-600 hover:text-blue-600">
          Contato
        </a>
        <Link href="/blog" className="text-gray-600 hover:text-blue-600">
          Blog
        </Link>
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