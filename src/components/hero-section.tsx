import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
  <section className="flex flex-col md:flex-row items-center px-6 md:px-12 py-12 md:py-20">
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Especialistas em Climatização e Proteção Contra Incêndios para Todas as Obras
            </h1>
            <p className="text-gray-600 mb-8">
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
}
