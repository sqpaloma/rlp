import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
     

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
                Paulo, contando apenas com a sua esposa Andreia Pellegrini.
              </p>
              <p className="text-gray-600 mb-4">
                Em 2002, uma parceria estratégica foi firmada com o Engenheiro Waldemar Cençom, marcando o início de
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
    </div>
  )
}



