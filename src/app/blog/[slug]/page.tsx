import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Twitter, Facebook, Linkedin, TagIcon } from "lucide-react"

// Mock data for blog posts with a single primary tag
const blogPosts = [
  {
    id: 1,
    title: "A Importância da Manutenção Preventiva em Sistemas de Ar Condicionado",
    excerpt:
      "Descubra a importância da manutenção regular para garantir eficiência energética e prolongar a vida útil do seu sistema de climatização. Nossos especialistas compartilham dicas essenciais para manter seu equipamento funcionando perfeitamente.",
    category: "Manutenção",
    primaryTag: "Manutenção Preventiva",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0351-twVUbm5vtOoImb8DoVLIO44gl88JON.jpeg",
    slug: "manutencao-preventiva-ar-condicionado",
    date: "20 Fev 2024",
    author: {
      name: "RLP Engenharia",
      role: "Equipe Técnica",
    },
    content: `
      <h2>A Essência da Manutenção Preventiva</h2>
      <p>
        A manutenção preventiva é o processo sistemático que assegura o funcionamento adequado e a longevidade dos
        sistemas de ar condicionado. Através de inspeções regulares e procedimentos específicos, é possível
        identificar e corrigir potenciais problemas antes que eles se tornem falhas graves.
      </p>

      <h3>Principais Benefícios</h3>
      <ol>
        <li>
          <strong>Eficiência Energética:</strong> Sistemas bem mantidos operam com maior eficiência, resultando em
          menor consumo de energia e custos operacionais reduzidos.
        </li>
        <li>
          <strong>Qualidade do Ar:</strong> A manutenção regular garante que os filtros e componentes estejam
          limpos, proporcionando ar mais puro e saudável para os ocupantes.
        </li>
        <li>
          <strong>Vida Útil Prolongada:</strong> Equipamentos que recebem manutenção adequada tendem a durar mais
          e apresentar menos problemas ao longo do tempo.
        </li>
      </ol>

      <h2>Procedimentos Essenciais</h2>
      <p>
        A manutenção preventiva envolve uma série de procedimentos técnicos que devem ser realizados
        periodicamente. Entre os principais procedimentos, destacamos:
      </p>

      <ul>
        <li>Limpeza e substituição de filtros</li>
        <li>Verificação de níveis de gás refrigerante</li>
        <li>Inspeção de componentes elétricos</li>
        <li>Limpeza de serpentinas e ventiladores</li>
        <li>Verificação de drenos e sistema de drenagem</li>
      </ul>

      <h2>Inspeção e Diagnóstico</h2>
      <p>
        A inspeção elétrica é uma parte crucial da manutenção preventiva. Nossos técnicos utilizam equipamentos de medição 
        precisos para verificar a integridade dos componentes elétricos, tensões de operação e consumo de energia. Este 
        processo permite identificar potenciais problemas antes que resultem em falhas do equipamento ou consumo excessivo 
        de energia.
      </p>

      <h2>Frequência Recomendada</h2>
      <p>
        Para garantir o melhor desempenho do seu sistema de ar condicionado, recomendamos seguir um cronograma
        regular de manutenção:
      </p>

      <ul>
        <li>Manutenção básica: a cada 3 meses</li>
        <li>Manutenção completa: a cada 6 meses</li>
        <li>Revisão geral: anualmente</li>
      </ul>

      <h2>Conclusão</h2>
      <p>
        Investir em manutenção preventiva é essencial para garantir o funcionamento eficiente e duradouro do seu
        sistema de ar condicionado. Além de prevenir problemas futuros, essa prática resulta em economia
        significativa a longo prazo e assegura o conforto e bem-estar dos usuários.
      </p>
    `,
  },
]

// Function to find post by slug
const getPostBySlug = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug) || blogPosts[0]
}

// Tag component for consistent styling
const ArticleTag = ({ tag }: { tag: string }) => (
  <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full">
    <TagIcon className="h-4 w-4 text-blue-500 mr-2" />
    <span className="text-sm font-medium text-blue-600">{tag}</span>
  </div>
)

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  return (
    
     

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back to Blog Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para o Blog
        </Link>

        {/* Imagem Destacada */}
        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        {/* Conteúdo do Artigo */}
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">{post.title}</h1>

          {/* Informações do Autor */}
          <div className="flex items-center justify-center mb-12 space-x-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
               
              </div>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-gray-600">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Texto do Artigo */}
          <div className="prose prose-lg max-w-none">
            <h2>A Essência da Manutenção Preventiva</h2>
            <p>
              A manutenção preventiva é o processo sistemático que assegura o funcionamento adequado e a longevidade dos
              sistemas de ar condicionado. Através de inspeções regulares e procedimentos específicos, é possível
              identificar e corrigir potenciais problemas antes que eles se tornem falhas graves.
            </p>

            <h3>Principais Benefícios</h3>
            <ol>
              <li>
                <strong>Eficiência Energética:</strong> Sistemas bem mantidos operam com maior eficiência, resultando em
                menor consumo de energia e custos operacionais reduzidos.
              </li>
              <li>
                <strong>Qualidade do Ar:</strong> A manutenção regular garante que os filtros e componentes estejam
                limpos, proporcionando ar mais puro e saudável para os ocupantes.
              </li>
              <li>
                <strong>Vida Útil Prolongada:</strong> Equipamentos que recebem manutenção adequada tendem a durar mais
                e apresentar menos problemas ao longo do tempo.
              </li>
            </ol>

            <h2>Procedimentos Essenciais</h2>
            <p>
              A manutenção preventiva envolve uma série de procedimentos técnicos que devem ser realizados
              periodicamente. Entre os principais procedimentos, destacamos:
            </p>

            <ul>
              <li>Limpeza e substituição de filtros</li>
              <li>Verificação de níveis de gás refrigerante</li>
              <li>Inspeção de componentes elétricos</li>
              <li>Limpeza de serpentinas e ventiladores</li>
              <li>Verificação de drenos e sistema de drenagem</li>
            </ul>

            <h2>Inspeção e Diagnóstico</h2>
            <div className="my-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0351-twVUbm5vtOoImb8DoVLIO44gl88JON.jpeg"
                  alt="Técnico realizando medições elétricas em unidade de ar condicionado"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 text-center mb-6">
                Técnico realizando medições elétricas durante manutenção preventiva
              </p>
            </div>
            <p className="text-gray-600">
              A inspeção elétrica é uma parte crucial da manutenção preventiva. Nossos técnicos utilizam equipamentos de
              medição precisos para verificar a integridade dos componentes elétricos, tensões de operação e consumo de
              energia. Este processo permite identificar potenciais problemas antes que resultem em falhas do
              equipamento ou consumo excessivo de energia.
            </p>

            <h2>Frequência Recomendada</h2>
            <p>
              Para garantir o melhor desempenho do seu sistema de ar condicionado, recomendamos seguir um cronograma
              regular de manutenção:
            </p>

            <ul>
              <li>Manutenção básica: a cada 3 meses</li>
              <li>Manutenção completa: a cada 6 meses</li>
              <li>Revisão geral: anualmente</li>
            </ul>

            <h2>Conclusão</h2>
            <p>
              Investir em manutenção preventiva é essencial para garantir o funcionamento eficiente e duradouro do seu
              sistema de ar condicionado. Além de prevenir problemas futuros, essa prática resulta em economia
              significativa a longo prazo e assegura o conforto e bem-estar dos usuários.
            </p>
          </div>

          {/* Article Tag - Clearly separated from content */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center">
            <Link
              href={`/blog?tag=${encodeURIComponent(post.primaryTag)}`}
              className="transition-transform hover:scale-105"
            >
              <ArticleTag tag={post.primaryTag} />
            </Link>
          </div>
        </article>
      </div>
  )
}
    