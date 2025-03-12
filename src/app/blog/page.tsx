"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { TagIcon } from "lucide-react"

// Updated blog posts with 2 articles per tag
const blogPosts = [
  // Manutenção Preventiva - 2 artigos
  {
    id: 1,
    title: "Manutenção Preventiva em Sistemas de Ar Condicionado",
    excerpt:
      "Descubra a importância da manutenção regular para garantir eficiência energética e prolongar a vida útil do seu sistema de climatização. Nossos especialistas compartilham dicas essenciais para manter seu equipamento funcionando perfeitamente.",
    category: "Manutenção",
    primaryTag: "Manutenção Preventiva",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0351-twVUbm5vtOoImb8DoVLIO44gl88JON.jpeg",
    slug: "manutencao-preventiva-ar-condicionado",
    date: "20 Fev 2024",
  },
  {
    id: 7,
    title: "Cronograma Ideal para Manutenção de Ar Condicionado",
    excerpt:
      "Estabeleça um calendário eficiente de manutenção preventiva para seus sistemas de climatização. Aprenda a frequência ideal para cada tipo de verificação e como planejar intervenções que minimizam interrupções nas operações.",
    category: "Manutenção",
    primaryTag: "Manutenção Preventiva",
    image: "/placeholder.svg?height=300&width=600",
    slug: "cronograma-manutencao-ar-condicionado",
    date: "18 Fev 2024",
  },

  // Segurança Predial - 2 artigos
  {
    id: 2,
    title: "Sistemas de Pressurização de Escadas: Segurança em Altura",
    excerpt:
      "Entenda como funciona e por que a pressurização de escadas é fundamental para a segurança em edifícios altos. Conheça as normas técnicas e os benefícios deste sistema essencial para evacuação segura em caso de emergências.",
    category: "Pressurização",
    primaryTag: "Segurança Predial",
    image: "/placeholder.svg?height=300&width=600",
    slug: "sistemas-pressurizacao-escadas",
    date: "15 Fev 2024",
  },
  {
    id: 8,
    title: "Rotas de Fuga e Sinalização de Emergência em Edifícios",
    excerpt:
      "A importância de um projeto adequado de rotas de fuga e sinalização para a segurança dos ocupantes. Conheça as normas técnicas e as melhores práticas para garantir a evacuação segura em situações de emergência.",
    category: "Segurança",
    primaryTag: "Segurança Predial",
    image: "/placeholder.svg?height=300&width=600",
    slug: "rotas-fuga-sinalizacao-emergencia",
    date: "12 Fev 2024",
  },

  // Combate a Incêndio - 2 artigos
  {
    id: 3,
    title: "Prevenção a Incêndios: Tecnologias e Normas Atuais",
    excerpt:
      "Conheça as principais tecnologias e normas técnicas para prevenção e combate a incêndios em edificações comerciais. Saiba como implementar sistemas eficientes que atendem às exigências legais e garantem a segurança dos ocupantes.",
    category: "Prevenção",
    primaryTag: "Combate a Incêndio",
    image: "/placeholder.svg?height=300&width=600",
    slug: "prevencao-incendios-tecnologias",
    date: "10 Fev 2024",
  },
  {
    id: 9,
    title: "Sistemas de Sprinklers: Instalação e Manutenção",
    excerpt:
      "Um guia completo sobre sistemas automáticos de sprinklers para combate a incêndios. Aprenda sobre os diferentes tipos, requisitos de instalação e procedimentos de manutenção para garantir a eficácia em situações críticas.",
    category: "Prevenção",
    primaryTag: "Combate a Incêndio",
    image: "/placeholder.svg?height=300&width=600",
    slug: "sistemas-sprinklers-instalacao-manutencao",
    date: "08 Fev 2024",
  },

  // Segurança do Trabalho - 2 artigos
  {
    id: 4,
    title: "Segurança do Trabalho na Instalação de HVAC",
    excerpt:
      "Práticas essenciais de segurança para profissionais que atuam na instalação e manutenção de sistemas de climatização. Descubra como proteger sua equipe e cumprir as normas regulamentadoras durante os serviços técnicos.",
    category: "Segurança",
    primaryTag: "Segurança do Trabalho",
    image: "/placeholder.svg?height=300&width=600",
    slug: "seguranca-trabalho-hvac",
    date: "05 Fev 2024",
  },
  {
    id: 10,
    title: "EPIs Essenciais para Técnicos de Climatização",
    excerpt:
      "Conheça os equipamentos de proteção individual indispensáveis para técnicos que trabalham com sistemas de ar condicionado e refrigeração. Aprenda como selecionar, utilizar e manter os EPIs adequados para cada tipo de atividade.",
    category: "Segurança",
    primaryTag: "Segurança do Trabalho",
    image: "/placeholder.svg?height=300&width=600",
    slug: "epis-tecnicos-climatizacao",
    date: "03 Fev 2024",
  },

  // Eficiência Energética - 2 artigos
  {
    id: 5,
    title: "Eficiência Energética em Sistemas de Climatização Comercial",
    excerpt:
      "Aprenda como otimizar o consumo de energia em sistemas de climatização para edifícios comerciais. Estratégias e tecnologias que reduzem custos operacionais e minimizam o impacto ambiental.",
    category: "Eficiência",
    primaryTag: "Eficiência Energética",
    image: "/placeholder.svg?height=300&width=600",
    slug: "eficiencia-energetica-climatizacao",
    date: "01 Fev 2024",
  },
  {
    id: 11,
    title: "Automação e Controle Inteligente para Economia de Energia",
    excerpt:
      "Como a automação e os sistemas de controle inteligente podem revolucionar a eficiência energética em edifícios. Descubra tecnologias que permitem monitoramento em tempo real e ajustes automáticos para otimizar o consumo.",
    category: "Eficiência",
    primaryTag: "Eficiência Energética",
    image: "/placeholder.svg?height=300&width=600",
    slug: "automacao-controle-inteligente-energia",
    date: "29 Jan 2024",
  },

  // Sistemas de Detecção - 2 artigos
  {
    id: 6,
    title: "Manutenção de Sistemas de Detecção de Incêndio",
    excerpt:
      "Guia completo sobre a manutenção preventiva e corretiva de sistemas de detecção de incêndio. Procedimentos essenciais para garantir o funcionamento adequado em situações de emergência.",
    category: "Manutenção",
    primaryTag: "Sistemas de Detecção",
    image: "/placeholder.svg?height=300&width=600",
    slug: "manutencao-sistemas-deteccao-incendio",
    date: "25 Jan 2024",
  },
  {
    id: 12,
    title: "Tecnologias Avançadas em Detecção Precoce de Incêndios",
    excerpt:
      "Conheça as mais recentes inovações em sistemas de detecção precoce de incêndios. Desde detectores de fumaça inteligentes até sistemas baseados em inteligência artificial que podem identificar riscos antes que se tornem emergências.",
    category: "Tecnologia",
    primaryTag: "Sistemas de Detecção",
    image: "/placeholder.svg?height=300&width=600",
    slug: "tecnologias-avancadas-deteccao-incendios",
    date: "22 Jan 2024",
  },
]

// Extract all unique tags from blog posts
const getAllTags = () => {
  const allTags = blogPosts.map((post) => post.primaryTag)
  return ["Todos"].concat([...new Set(allTags)].sort())
}

// Tag component for consistent styling
const ArticleTag = ({ tag }: { tag: string }) => (
  <div className="mt-auto pt-4 border-t border-gray-100">
    <div className="flex items-center">
      <TagIcon className="h-4 w-4 text-blue-500 mr-2" />
      <span className="text-sm font-medium text-blue-600">{tag}</span>
    </div>
  </div>
)

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState("Todos")
  const allTags = getAllTags()

  // Filter posts based on selected tag
  const filteredPosts =
    selectedTag === "Todos" ? blogPosts : blogPosts.filter((post) => post.primaryTag === selectedTag)

  // Get featured post (first post after filtering)
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null
  // Get remaining posts
  const remainingPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : []

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="py-4 px-6 md:px-12 flex items-center justify-between bg-white border-b border-gray-200">
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
          <Link href="/servicos" className="text-gray-600 hover:text-blue-600">
            Serviços
          </Link>
          <Link href="/#contato" className="text-gray-600 hover:text-blue-600">
            Contato
          </Link>
          <Link href="/blog" className="text-blue-600 font-medium">
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

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Blog Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-gray-600 text-xl">Últimos artigos e novidades</p>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">Nenhum artigo encontrado com esta tag.</h3>
            <button
              onClick={() => setSelectedTag("Todos")}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Ver todos os artigos
            </button>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <div className="bg-white rounded-2xl p-6 mb-12 shadow-sm">
                <Link href={`/blog/${featuredPost.slug}`} className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2">
                    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                      <Image
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col h-full">
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold hover:text-blue-600 transition-colors mb-4">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-sm text-gray-500">{featuredPost.date}</span>
                        <span className="text-sm font-medium text-gray-600">{featuredPost.category}</span>
                      </div>
                    </div>
                    <ArticleTag tag={featuredPost.primaryTag} />
                  </div>
                </Link>
              </div>
            )}

            {/* Tag Filtering System - Moved below featured article */}
            <div className="mb-8 mt-12">
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedTag === tag
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Article Grid */}
            {remainingPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {remainingPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                  >
                    <div className="relative h-48">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold hover:text-blue-600 transition-colors mb-3">{post.title}</h3>
                        <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-sm text-gray-500">{post.date}</span>
                          <span className="text-sm font-medium text-gray-600">{post.category}</span>
                        </div>
                      </div>
                      <ArticleTag tag={post.primaryTag} />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 bg-white border-t border-gray-100 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RLPcrop1transparente-1024x235-KD4yuv86E6ME2NgUX3WPLvovkNomud.png"
              alt="RLP Engenharia Logo"
              width={150}
              height={35}
              className="h-10 w-auto"
            />
          </div>
          <div className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} RLP Engenharia. Todos os direitos reservados.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8">
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <p className="text-gray-600 text-sm">Endereço: Rua Lorem Ipsum, 123 - São Paulo, SP</p>
            <p className="text-gray-600 text-sm">Telefone: (11) 1234-5678</p>
            <p className="text-gray-600 text-sm">Email: contato@rlpengenharia.com.br</p>
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
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

