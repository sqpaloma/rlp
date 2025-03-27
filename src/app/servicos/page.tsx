import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ServicosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Nossos Serviços</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Soluções completas em climatização, pressurização de escadas e detecção de incêndios para garantir conforto,
            eficiência e segurança em sua obra.
          </p>
        </div>
      </section>

      {/* Climatização Section */}
      <section id="climatizacao" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="bg-gray-50 p-6 rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0351-MoQRX1pF6fqQ1JCOzMsV1BMXSBNpBF.jpeg"
                  alt="Técnico realizando manutenção em sistema de ar condicionado"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Climatização</h2>
              <p className="text-gray-600 mb-6">
                Desenvolvemos projetos personalizados de climatização para ambientes comerciais, industriais e
                residenciais, garantindo conforto térmico, eficiência energética e qualidade do ar interior.
              </p>

              <h3 className="text-xl font-semibold mb-4">Como resolvemos seus desafios</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="block text-gray-800">Conforto térmico inteligente</strong>
                    <span className="text-gray-600">
                      Sistemas que se adaptam às condições ambientais e de ocupação, garantindo temperatura ideal em
                      todos os ambientes.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="block text-gray-800">Eficiência energética</strong>
                    <span className="text-gray-600">
                      Projetos que reduzem o consumo de energia e os custos operacionais, com retorno do investimento a
                      médio prazo.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="block text-gray-800">Qualidade do ar interior</strong>
                    <span className="text-gray-600">
                      Sistemas que garantem a renovação e filtragem do ar, promovendo ambientes mais saudáveis e
                      produtivos.
                    </span>
                  </span>
                </li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-3">Benefícios e Resultados</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">Redução de até 30% no consumo de energia</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">Aumento da produtividade dos ocupantes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">Conformidade com normas técnicas</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">Maior vida útil dos equipamentos</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/5511985782307?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20climatização"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Solicitar orçamento para climatização
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pressurização Section */}
      <section id="pressurizacao" className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="bg-white p-6 rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KXz4ce9F9IIe8nwfMihMF015UZYTKC.jpeg"
                  alt="Sistema de pressurização de escadas com dutos e equipamentos"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Pressurização de Escadas</h2>
              <p className="text-gray-600 mb-6">
                Projetamos e instalamos sistemas de pressurização de escadas que garantem rotas de fuga seguras em caso
                de incêndio, atendendo às normas técnicas e requisitos legais.
              </p>

              <h3 className="text-xl font-semibold mb-4">Como resolvemos seus desafios</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="block text-gray-800">Evacuação segura em emergências</strong>
                    <span className="text-gray-600">
                      Sistemas que mantêm as escadas livres de fumaça, permitindo a evacuação segura dos ocupantes em
                      caso de incêndio.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="block text-gray-800">Conformidade normativa</strong>
                    <span className="text-gray-600">
                      Projetos que atendem integralmente às normas técnicas e exigências do Corpo de Bombeiros,
                      facilitando a obtenção do AVCB.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="block text-gray-800">Integração com outros sistemas</strong>
                    <span className="text-gray-600">
                      Soluções que se integram aos demais sistemas de segurança contra incêndio, como detecção, alarme e
                      sprinklers.
                    </span>
                  </span>
                </li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-3">Benefícios e Resultados</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">Segurança reforçada para ocupantes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">Valorização do imóvel</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">Redução de prêmios de seguro</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">Aprovação facilitada junto aos órgãos competentes</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/5511985782307?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20pressurização%20de%20escadas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Solicitar orçamento para pressurização
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detecção de Incêndios Section */}
      <section id="deteccao" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="bg-gray-50 p-6 rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0371-SiP4RcqVkjbqnM4oAHWvD5Hgi1paFu.jpeg"
                  alt="Detector de fumaça Intelbras instalado em teto"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Detecção de Incêndios</h2>
              <p className="text-gray-600 mb-6">
                Implementamos sistemas inteligentes de detecção e alarme de incêndio que identificam precocemente
                situações de risco, permitindo ações rápidas e eficazes para proteção de vidas e patrimônio.
              </p>

              <h3 className="text-xl font-semibold mb-4">Como resolvemos seus desafios</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="block text-gray-800">Detecção precoce de incêndios</strong>
                    <span className="text-gray-600">
                      Tecnologias avançadas que detectam princípios de incêndio antes que se propaguem, minimizando
                      danos e riscos.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="block text-gray-800">Monitoramento contínuo</strong>
                    <span className="text-gray-600">
                      Sistemas que funcionam 24 horas por dia, 7 dias por semana, garantindo proteção permanente para
                      sua edificação.
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="block text-gray-800">Automação de resposta</strong>
                    <span className="text-gray-600">
                      Integração com outros sistemas prediais para ações automáticas em caso de emergência, como
                      desligamento de ar condicionado e acionamento de alarmes.
                    </span>
                  </span>
                </li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-3">Benefícios e Resultados</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">Proteção de vidas e patrimônio</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">Redução de danos em caso de sinistro</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">Conformidade com normas de segurança</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">Tranquilidade para gestores e ocupantes</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/5511985782307?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20detecção%20de%20incêndios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Solicitar orçamento para detecção de incêndios
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para garantir conforto e segurança em sua obra?</h2>
          <p className="text-xl mb-8 opacity-90">
            Nossa equipe de especialistas está pronta para desenvolver a solução ideal para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5511985782307?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-md hover:bg-gray-100 transition font-bold"
            >
              Solicitar orçamento
            </a>
            <Link
              href="/#contato"
              className="bg-blue-700 text-white px-8 py-4 rounded-md hover:bg-blue-800 transition border border-blue-500"
            >
              Falar com um especialista
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

