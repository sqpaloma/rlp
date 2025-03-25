import Image from "next/image"

export default function ExcellenceSection() {
  return (
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
              Desde 1998
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
  )
} 