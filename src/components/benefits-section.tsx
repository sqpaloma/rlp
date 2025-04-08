import { Building2, ShieldCheck, Zap } from "lucide-react"

export default function BenefitsSection() {
  const features = [
    {
      icon: <Zap className="w-7 h-7 text-blue-600" />,
      title: "Climatização eficiente",
      description:
        "Projetos de ar condicionado que garantem conforto térmico com baixo consumo energético, adaptados às necessidades específicas de cada ambiente.",
    },
    {
      icon: <Building2 className="w-7 h-7 text-blue-600" />,
      title: "Pressurização de escadas",
      description:
        "Sistemas que garantem rotas de fuga seguras em caso de incêndio, atendendo às normas técnicas e requisitos legais para edificações.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-blue-600" />,
      title: "Proteção contra incêndios",
      description:
        "Soluções completas de detecção e alarme que identificam precocemente situações de risco, protegendo vidas e patrimônio com tecnologia avançada.",
    },
  ]

  return (
    <section className="relative px-6 -mt-20 mb-20">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16">
        <div className="flex flex-col md:flex-row gap-16 mb-16">
      <div className="w-full md:w-1/2">
        <div className="text-blue-600 font-medium mb-4">SOLUÇÕES COMPLETAS</div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Experiência que cresce com seu projeto.
        </h2>
      </div>
      <div className="w-full md:w-1/2">
        <p className="text-lg text-gray-600">
          Desenvolvemos projetos personalizados de climatização e proteção contra incêndios que se adaptam às
          necessidades específicas da sua obra, garantindo eficiência e segurança.
        </p>
      </div>
    </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index}>
              <div className="w-14 h-14 flex items-center justify-center border-2 border-gray-200 rounded-md mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

