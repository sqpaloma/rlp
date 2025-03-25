import { ChevronRight } from "lucide-react"

export default function FAQSection() {
  return (
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
  )
} 