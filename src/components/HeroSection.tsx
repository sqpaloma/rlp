import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="flex items-start px-6 md:px-12 py-16 md:py-28 pt-24 bg-white max-w-7xl w-full mx-auto">
      
        <div className="flex flex-col md:flex-row gap-48">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col h-full">
              <h1 className="text-8xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Especialistas em Climatização e Proteção Contra Incêndios para Todas as Obras
              </h1>
              <p className="text-gray-600 text-lg mb-10">
                Há 27 anos, entregamos projetos eficientes e seguros para garantir conforto térmico e proteção contra
                incêndios em sua obra.
              </p>
              <a
                href="https://wa.me/5511985782307?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition w-full md:w-auto inline-block text-center font-bold text-lg shadow-lg hover:shadow-xl mt-auto"
              >
                Fale com um Especialista
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="h-full flex items-end">
              <div className="w-full">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <div className="relative" style={{ height: "400px" }}>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0348-w55GDjrlN3Fl9RW7vhKmuOQ1Kgv9I3.jpeg"
                      alt="RLP Engenharia - Projeto de Climatização"
                      fill
                      className="object-cover rounded-xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  )
}