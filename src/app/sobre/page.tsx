import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function SobrePage() {
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
          <Link href="/sobre" className="text-blue-600 font-medium">
            Sobre
          </Link>
          <Link href="/servicos" className="text-gray-600 hover:text-blue-600">
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

      {/* História da Empresa */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start">
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                A RLP Engenharia foi fundada em 1998 pelo engenheiro Reinaldo Luiz Pellegrini, que identificou uma
                oportunidade no mercado de climatização e proteção contra incêndios. Com sua visão inovadora e
                compromisso com a excelência técnica, a empresa iniciou suas atividades em um pequeno apartamento em São
                Paulo, contando apenas com a sua esposa.
              </p>
              <p className="text-gray-600 mb-4">
                Em 2002, uma parceria estratégica foi firmada com seu grande amigo Waldemar Cençom, marcando o início de
                uma fase de expansão. Ao longo dos anos, a RLP Engenharia ampliou sua atuação para diversas cidades do
                estado de São Paulo, como Campinas e Guarujá, consolidando-se como referência em soluções de engenharia
                para climatização e segurança. Hoje, nossa carteira de clientes inclui algumas das maiores construtoras
                e incorporadoras do estado.
              </p>
              <p className="text-gray-600 mb-8">
                Nossa trajetória é pautada pela busca contínua por inovação tecnológica e aprimoramento dos processos,
                sempre com foco na satisfação dos clientes e na sustentabilidade dos projetos.
              </p>

              {/* Espaço para fotos dos diretores */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto">
                <div className="bg-gray-100 p-4 rounded-xl">
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Reinaldo Luiz Pellegrini"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="font-semibold">Reinaldo Luiz Pellegrini</h4>
                    <p className="text-blue-600 text-sm">Fundador e Diretor</p>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Waldemar Cençom"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="font-semibold">Waldemar Cençom</h4>
                    <p className="text-blue-600 text-sm">Diretor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Missão e Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Missão</h3>
              <p className="text-gray-600">
                Oferecer soluções inovadoras e eficientes em climatização e proteção contra incêndios, garantindo
                conforto, segurança e sustentabilidade para nossos clientes e para a sociedade.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como a empresa líder em soluções de engenharia para climatização e proteção contra
                incêndios no Brasil, referência em inovação, qualidade e sustentabilidade.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Excelência técnica</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Inovação constante</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Compromisso com o cliente</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Sustentabilidade</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Ética e transparência</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Nossos Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise Técnica</h3>
              <p className="text-gray-600">
                Nossa equipe é formada por engenheiros e técnicos altamente qualificados, com certificações nas
                principais normas e tecnologias do setor.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Soluções Personalizadas</h3>
              <p className="text-gray-600">
                Desenvolvemos projetos sob medida para cada cliente, considerando as especificidades técnicas,
                orçamentárias e estéticas de cada empreendimento.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tecnologia de Ponta</h3>
              <p className="text-gray-600">
                Utilizamos as mais avançadas tecnologias e equipamentos do mercado, garantindo eficiência energética e
                operacional para nossos clientes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustentabilidade</h3>
              <p className="text-gray-600">
                Nossos projetos são desenvolvidos com foco na redução do consumo energético e do impacto ambiental,
                contribuindo para a sustentabilidade dos empreendimentos.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento Completo</h3>
              <p className="text-gray-600">
                Oferecemos suporte em todas as etapas do projeto, desde a concepção até a manutenção, garantindo
                tranquilidade e satisfação para nossos clientes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conformidade Normativa</h3>
              <p className="text-gray-600">
                Todos os nossos projetos são desenvolvidos em conformidade com as normas técnicas nacionais e
                internacionais, garantindo segurança e qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Reinaldo Luiz Pellegrini"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Reinaldo Luiz Pellegrini</h3>
              <p className="text-blue-600 mb-2">Fundador e CEO</p>
              <p className="text-gray-600 text-sm">
                Engenheiro Mecânico com mais de 35 anos de experiência em projetos de climatização e proteção contra
                incêndios.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Waldemar Cençom"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Waldemar Cençom</h3>
              <p className="text-blue-600 mb-2">Diretor de Operações</p>
              <p className="text-gray-600 text-sm">
                Engenheiro Civil especializado em gestão de projetos, responsável pela coordenação das operações da
                empresa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Carlos Eduardo Santos"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Carlos Eduardo Santos</h3>
              <p className="text-blue-600 mb-2">Diretor Técnico</p>
              <p className="text-gray-600 text-sm">
                Engenheiro Mecânico com MBA em Gestão de Projetos, responsável pelo desenvolvimento de soluções
                inovadoras.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Mariana Costa"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Mariana Costa</h3>
              <p className="text-blue-600 mb-2">Diretora Comercial</p>
              <p className="text-gray-600 text-sm">
                Administradora com especialização em Marketing, responsável pelo relacionamento com clientes e expansão
                de negócios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conquistas e Resultados */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Conquistas e Certificações</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 text-blue-600 mr-2" />
                Certificações
              </h3>
              <ul className="space-y-4">
                <li className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">ISO 9001:2015</h4>
                  <p className="text-gray-600 text-sm">Sistema de Gestão da Qualidade</p>
                </li>
                <li className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">ISO 14001:2015</h4>
                  <p className="text-gray-600 text-sm">Sistema de Gestão Ambiental</p>
                </li>
                <li className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">OHSAS 18001</h4>
                  <p className="text-gray-600 text-sm">Sistema de Gestão de Saúde e Segurança Ocupacional</p>
                </li>
                <li className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">PBQP-H Nível A</h4>
                  <p className="text-gray-600 text-sm">Programa Brasileiro da Qualidade e Produtividade do Habitat</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 text-blue-600 mr-2" />
                Prêmios e Reconhecimentos
              </h3>
              <ul className="space-y-4">
                <li className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Prêmio Master Imobiliário 2019</h4>
                  <p className="text-gray-600 text-sm">
                    Categoria Inovação Tecnológica pelo projeto de climatização do Edifício Platinum Tower
                  </p>
                </li>
                <li className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Top of Mind 2020 - Construção Civil</h4>
                  <p className="text-gray-600 text-sm">
                    Empresa mais lembrada no segmento de climatização e proteção contra incêndios
                  </p>
                </li>
                <li className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Prêmio ASBEA 2021</h4>
                  <p className="text-gray-600 text-sm">
                    Melhor projeto de instalações para o Complexo Empresarial Green Business
                  </p>
                </li>
                <li className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">Selo Verde 2022</h4>
                  <p className="text-gray-600 text-sm">
                    Reconhecimento por práticas sustentáveis em projetos de climatização
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">O Que Nossos Clientes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &quot;A RLP Engenharia foi fundamental para o sucesso do nosso empreendimento. A equipe técnica demonstrou
                grande conhecimento e comprometimento, entregando soluções eficientes e dentro do prazo.&quot;
              </p>
              <div>
                <p className="font-semibold">Ricardo Almeida</p>
                <p className="text-gray-500 text-sm">Diretor de Engenharia, Construtora Alpha</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &quot;Trabalhamos com a RLP Engenharia em diversos projetos e sempre ficamos impressionados com a qualidade
                técnica e o atendimento personalizado. São parceiros de confiança para qualquer empreendimento.&quot;
              </p>
              <div>
                <p className="font-semibold">Fernanda Souza</p>
                <p className="text-gray-500 text-sm">Gerente de Projetos, Incorporadora Beta</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &quot;As soluções de climatização implementadas pela RLP Engenharia em nosso centro empresarial resultaram em
                uma economia de energia de 30%. Além da eficiência, o suporte técnico contínuo tem sido fundamental para
                a manutenção do desempenho dos sistemas.&quot;
              </p>
              <div>
                <p className="font-semibold">Marcelo Oliveira</p>
                <p className="text-gray-500 text-sm">Diretor de Facilities, Centro Empresarial Gamma</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Entre em Contato</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-gray-600">
                        Av. Paulista, 1000 - Bela Vista
                        <br />
                        São Paulo - SP, 01310-100
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Telefone</p>
                      <p className="text-gray-600">(11) 4567-8900</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-gray-600">contato@rlpengenharia.com.br</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-100 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-gray-700" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-100 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-gray-700" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-100 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-gray-700" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-100 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Assunto</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Assunto" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md h-32"
                    placeholder="Digite sua mensagem..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
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
                  <Link href="/servicos#climatizacao" className="text-gray-600 hover:text-blue-600 text-sm">
                    Climatização
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#pressurizacao" className="text-gray-600 hover:text-blue-600 text-sm">
                    Pressurização de Escadas
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#deteccao" className="text-gray-600 hover:text-blue-600 text-sm">
                    Detecção de Incêndio
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#manutencao" className="text-gray-600 hover:text-blue-600 text-sm">
                    Manutenção
                  </Link>
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
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
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



