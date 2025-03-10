"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const carouselImages = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0348-w55GDjrlN3Fl9RW7vhKmuOQ1Kgv9I3.jpeg",
    title: "Edifício Comercial Santana",
    address: "Av. Água Fria 532, Santana, São Paulo - SP",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0349-s1XJm2g6AeblIcHlzXO7TaTwc1ZTW5.jpeg",
    title: "Residencial Brasília Office",
    address: "Av. Água Fria 532, Santana, São Paulo - SP",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0362-ut7sqOkUfqqkMsBlJIuKq25XRe9qlL.jpeg",
    title: "Edifício Corporativo Blue Tower",
    address: "Av. Paulista 1200, Bela Vista, São Paulo - SP",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0363-pcH23whE30HcKRfbs1rq4H9DmnPqml.webp",
    title: "Residencial Vista Moderna",
    address: "Rua Augusta 1500, Consolação, São Paulo - SP",
  },
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Adicionar estado e referência para controlar o autoplay
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  // Função para obter o próximo índice em um loop circular
  const getNextIndex = (index: number) => (index + 1) % carouselImages.length

  // Função para obter o índice anterior em um loop circular
  const getPrevIndex = (index: number) => (index - 1 + carouselImages.length) % carouselImages.length

  // Configurar o autoplay com useEffect - tempo reduzido para 3 segundos
  useEffect(() => {
    if (autoplay && !isTransitioning) {
      autoplayRef.current = setInterval(() => {
        handleSlideChange("next")
      }, 3000) // Muda a cada 3 segundos
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, isTransitioning, currentIndex])

  // Função para lidar com a mudança de slides com transição suave
  const handleSlideChange = (direction: "next" | "prev") => {
    if (isTransitioning) return

    setIsTransitioning(true)

    // Calcular o próximo índice
    const nextIndex = direction === "next" ? getNextIndex(currentIndex) : getPrevIndex(currentIndex)

    // Atualizar o índice após um pequeno delay para permitir a transição
    setTimeout(() => {
      setCurrentIndex(nextIndex)
      // Resetar o estado de transição após a mudança
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 300)
  }

  const handleManualNavigation = (direction: "next" | "prev") => {
    // Pausar o autoplay temporariamente
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }

    // Navegar na direção solicitada
    handleSlideChange(direction)

    // Reiniciar o autoplay após 10 segundos de inatividade
    setTimeout(() => {
      setAutoplay(true)
    }, 10000)
  }

  // Obter os índices para os três slides visíveis
  const mainSlideIndex = currentIndex
  const secondarySlideIndex = getNextIndex(currentIndex)
 // const nextSlideIndex = getNextIndex(secondarySlideIndex)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
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

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-6 md:px-12 py-12 md:py-20">
        <div className="w-full md:w-1/2 pr-0 md:pr-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Especialistas em Climatização e Proteção Contra Incêndios para Todas as Obras
          </h1>
          <p className="text-red-700 mb-8">
            Há 27 anos, entregamos projetos eficientes e seguros para garantir conforto térmico e proteção contra
            incêndios em sua obra.
          </p>
          <a
            href="https://wa.me/5511985782307?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-full md:w-auto inline-block text-center font-bold text-lg shadow-lg hover:shadow-xl"
          >
            Fale com um Especialista
          </a>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative">
            {/* Novo layout do carrossel com slide principal e secundário */}
            <div className="flex justify-center space-x-6 relative">
              {/* Slide Principal */}
              <div className={`w-1/2 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src={carouselImages[mainSlideIndex].src || "/placeholder.svg"}
                    alt={carouselImages[mainSlideIndex].title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    priority
                  />
                </div>
                <div className="mt-4 h-16">
                  {" "}
                  {/* Fixed height for text area */}
                  <h3 className="font-semibold text-lg">{carouselImages[mainSlideIndex].title}</h3>
                  <p className="text-gray-600 text-sm">{carouselImages[mainSlideIndex].address}</p>
                </div>
              </div>

              {/* Slide Secundário (mais opaco) */}
              <div
                className={`w-1/3 transition-opacity duration-300 relative ${isTransitioning ? "opacity-0" : "opacity-30"}`}
              >
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src={carouselImages[secondarySlideIndex].src || "/placeholder.svg"}
                    alt={carouselImages[secondarySlideIndex].title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 17vw"
                  />

                  {/* Arrow indicator at the end of the secondary photo */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <ChevronRight className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 h-16">
                  {" "}
                  {/* Fixed height for text area */}
                  <h3 className="font-semibold text-sm">{carouselImages[secondarySlideIndex].title}</h3>
                  <p className="text-gray-600 text-xs">{carouselImages[secondarySlideIndex].address}</p>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={() => handleManualNavigation("prev")}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors disabled:opacity-50"
                disabled={isTransitioning}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => handleManualNavigation("next")}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors disabled:opacity-50"
                disabled={isTransitioning}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Evite custos elevados com climatização ineficiente e falhas na proteção contra incêndios
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            A RLP Engenharia resolve esses desafios com soluções eficientes e seguras para climatização, pressurização
            de escadas e detecção de incêndios. Há 27 anos, garantimos conforto térmico e proteção para obras de todos
            os portes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 mb-4 rounded-lg overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Sistema de climatização"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Climatização de ambientes</h3>
                <p className="text-gray-600 text-sm">
                  Projetos e instalações de sistemas de ar-condicionado para garantir conforto e eficiência energética.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 mb-4 rounded-lg overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Sistema de pressurização de escadas"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Pressurização de escadas</h3>
                <p className="text-gray-600 text-sm">
                  Soluções para segurança contra incêndios, garantindo a evacuação segura em emergências.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 mb-4 rounded-lg overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Sistema de detecção de incêndio"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Detecção e alarme de incêndio</h3>
                <p className="text-gray-600 text-sm">
                  Sistemas inteligentes para monitoramento e prevenção de incêndios.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 mb-4 rounded-lg overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Manutenção preventiva"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Manutenção preventiva e corretiva</h3>
                <p className="text-gray-600 text-sm">
                  Otimizar o desempenho e a durabilidade dos sistemas prevenindo falhas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/5 mb-8 md:mb-0">
              <div className="bg-gray-100 p-4 rounded-3xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-BjSO8OJbdbCcJ5sBH9X7Mcb3apWCAv.png"
                  alt="Técnico trabalhando em equipamento"
                  width={500}
                  height={500}
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 md:pl-12">
              <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
                Desde 1995
              </div>
              <h2 className="text-3xl font-bold mb-6">Excelência em Engenharia e Compromisso com Resultados</h2>
              <p className="text-gray-600 mb-6">
                A RLP Engenharia atua há mais de 25 anos no mercado, oferecendo soluções de alta qualidade em projetos
                estruturais, gerenciamento de obras e consultoria técnica.
              </p>
              <p className="text-gray-600 mb-8">
                Nossa equipe é formada por profissionais altamente qualificados, com vasta experiência no setor e
                comprometimento com a excelência técnica e a satisfação dos clientes.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-blue-600 text-3xl font-bold mb-2">300+</div>
                  <div className="text-gray-600 text-sm">Projetos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-600 text-3xl font-bold mb-2">25+</div>
                  <div className="text-gray-600 text-sm">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-600 text-3xl font-bold mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Profissionais</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-600 text-3xl font-bold mb-2">98%</div>
                  <div className="text-gray-600 text-sm">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Perguntas Frequentes</h2>
          <p className="text-center text-gray-600 mb-12">
            Não encontrou a resposta que procura? Entre em contato com nossa
            <a href="#" className="text-blue-600 ml-1">
              equipe de atendimento
            </a>
            .
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center cursor-pointer">
              <h3 className="font-medium">Quais são os principais benefícios da pressurização de escadas?</h3>
              <ChevronRight className="w-5 h-5" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center cursor-pointer">
              <h3 className="font-medium">Como funciona o sistema de detecção e alarme de incêndio?</h3>
              <ChevronRight className="w-5 h-5" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center cursor-pointer">
              <h3 className="font-medium">Qual a frequência recomendada para manutenção de ar condicionado?</h3>
              <ChevronRight className="w-5 h-5" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center cursor-pointer">
              <h3 className="font-medium">Quais normas técnicas a RLP Engenharia segue em seus projetos?</h3>
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-12 md:py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-sm text-gray-500 mb-2">Fale Conosco</h3>
              <h2 className="text-3xl font-bold mb-8">Teremos prazer em atendê-lo!</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Telefone:</h3>
                  <p className="font-medium">(11) 4567-8900</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">E-mail:</h3>
                  <p className="font-medium">contato@rlpengenharia.com.br</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Endereço:</h3>
                  <p className="font-medium">
                    Av. Paulista, 1000 - Bela Vista
                    <br />
                    São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 md:pl-12">
              <form>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Departamento:</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="department" className="mr-2" defaultChecked />
                      <span>Suporte</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="department" className="mr-2" />
                      <span>Vendas</span>
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Assunto</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Assunto" />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Seu nome" />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md h-32"
                    placeholder="Digite sua mensagem..."
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <a href="#" className="text-gray-600 hover:text-blue-600 text-sm flex items-center">
                    Carreiras
                    <span className="ml-2 px-2 py-1 text-xs bg-blue-600 text-white rounded">CONTRATANDO</span>
                  </a>
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
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006\
.722 1.824z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm">© 2024 RLP Engenharia. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

