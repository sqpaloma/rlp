import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ServicosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="py-4 px-6 md:px-12 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RLPcrop1transparente-1024x235-KD4yuv86E6ME2NgUX3WPLvovkNomud.png"
              alt="RLP Engenharia Logo"
              width={205}
              height={47}
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Início
          </Link>
          <Link href="/sobre" className="text-gray-600 hover:text-blue-600">
            Sobre
          </Link>
          <Link href="/servicos" className="text-blue-600 font-medium">
            Serviços
          </Link>
          <Link href="/#contato" className="text-gray-600 hover:text-blue-600">
            Contato
          </Link>
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
                  <a href="#climatizacao" className="text-gray-600 hover:text-blue-600 text-sm">
                    Climatização
                  </a>
                </li>
                <li>
                  <a href="#pressurizacao" className="text-gray-600 hover:text-blue-600 text-sm">
                    Pressurização de Escadas
                  </a>
                </li>
                <li>
                  <a href="#deteccao" className="text-gray-600 hover:text-blue-600 text-sm">
                    Detecção de Incêndio
                  </a>
                </li>
                <li>
                  <a href="#manutencao" className="text-gray-600 hover:text-blue-600 text-sm">
                    Manutenção
                  </a>
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
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 100-6 3 3 0 000 6z"
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
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-600 text-center">
              &copy; {new Date().getFullYear()} RLP Engenharia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

