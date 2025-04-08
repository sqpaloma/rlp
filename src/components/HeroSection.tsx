import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
              Líder em Soluções de Engenharia
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 max-w-2xl">
              Especialistas em Climatização e Proteção Contra Incêndios para Todas as Obras
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Oferecemos serviços especializados em refrigeração industrial,
              HVAC comercial, ventilação e pressurização de escadas para
              construtoras e empreiteiras.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5511985782307?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition w-full md:w-auto text-center font-bold text-lg shadow-lg hover:shadow-xl"
              >
                Fale com um Especialista
              </a>
              <a
                href="/servicos"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-md hover:bg-gray-50 transition w-full md:w-auto text-center font-bold text-lg shadow-lg hover:shadow-xl"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-96 md:h-full">
            <Image
              src="/technician2.jpeg"
              alt="Equipe da RLP Engenharia trabalhando em um projeto"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}