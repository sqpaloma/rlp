import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RLPcrop1transparente-1024x235-KD4yuv86E6ME2NgUX3WPLvovkNomud.png"
              alt="RLP Engenharia Logo"
              width={150}
              height={35}
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-600 text-sm">
              Soluções completas em climatização e proteção contra incêndios para sua obra.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviço</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicos#climatizacao" className="text-gray-600 hover:text-blue-600 text-sm">
                  Climatização
                </Link>
              </li>
              <li>
                <Link href="/servicos#pressurizacao" className="text-gray-600 hover:text-blue-600 text-sm">
                  Pressurização de Escadas
                </Link>
              </li>
              <li>
                <Link href="/servicos#deteccao" className="text-gray-600 hover:text-blue-600 text-sm">
                  Detecção de Incêndio
                </Link>
              </li>
              <li>
                <Link href="/servicos#manutencao" className="text-gray-600 hover:text-blue-600 text-sm">
                  Manutenção
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-blue-600 text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  Projetos
                </a>
              </li>
              <li>
                <Link href="/carreiras" className="text-gray-600 hover:text-blue-600 text-sm flex items-center">
                  Carreiras
                  <span className="ml-2 px-2 py-1 text-xs bg-blue-600 text-white rounded">CONTRATANDO</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-100 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-100 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.722 1.824z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm">© 2024 RLP Engenharia. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
} 