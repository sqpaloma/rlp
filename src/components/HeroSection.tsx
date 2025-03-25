import ImageCarousel from "./ImageCarousel"

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center px-6 md:px-12 py-12 md:py-20">
      <div className="w-full md:w-1/2 pr-0 md:pr-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Especialistas em Climatização e Proteção Contra Incêndios para Todas as Obras
        </h1>
        <p className="text-g-700 mb-16">
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
        <ImageCarousel />
      </div>
    </section>
  )
} 