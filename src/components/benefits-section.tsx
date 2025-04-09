import { Building2, ShieldCheck, Zap } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Climatização eficiente",
    description:
      "Projetos de ar condicionado que garantem conforto térmico com baixo consumo energético, adaptados às necessidades específicas de cada ambiente.",
  },
  {
    icon: Building2,
    title: "Pressurização de escadas",
    description:
      "Sistemas que garantem rotas de fuga seguras em caso de incêndio, atendendo às normas técnicas e requisitos legais para edificações.",
  },
  {
    icon: ShieldCheck,
    title: "Proteção contra incêndios",
    description:
      "Soluções completas de detecção e alarme que identificam precocemente situações de risco, protegendo vidas e patrimônio com tecnologia avançada.",
  },
  {
    icon: ShieldCheck,
    title: "Proteção contra incêndios",
    description:
      "Soluções completas de detecção e alarme que identificam precocemente situações de risco, protegendo vidas e patrimônio com tecnologia avançada.",
  },
]

export default function BenefitsSection() {
  return (
    <section className="px-6 mb-12 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="bg-gray-100 rounded-2xl shadow-xl p-8 md:p-12 md:mx-12">
          {/* Cabeçalho da seção */}
          <div className="flex flex-col md:flex-row gap-10 mb-10">
            <div className="md:w-1/2">
              <div className="text-blue-600 font-medium mb-3">SOLUÇÕES COMPLETAS</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Experiência que cresce com seu projeto.
              </h2>
            </div>
            <div className="md:w-1/2">
            </div>
          </div>

          {/* Blocos com os benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, description }, index) => (
              <div key={index}>
                <div className="w-12 h-12 flex items-center justify-center rounded-md mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

