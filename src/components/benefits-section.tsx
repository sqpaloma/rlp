import Image from 'next/image';

export default function BenefitsSection() {
  return (
    <section className="bg-gray-100 py-12 md:py-20 px-6 md:px-12">
<div className="max-w-7xl mx-auto">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
    Evite custos elevados com climatização ineficiente e falhas na proteção contra incêndios
  </h2>
  <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
    A RLP Engenharia resolve esses desafios com soluções eficientes e seguras para climatização, pressurização
    de escadas e detecção de incêndios. Há 27 anos, garantimos conforto térmico e proteção para obras de todos
    os portes.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="bg-white p-6 rounded-lg shadow-sm overflow-hidden">
      <div className="h-48 mb-4 rounded-lg overflow-hidden relative">
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt="Sistema de climatização"
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Climatização de ambientes</h3>
        <p className="text-gray-600 text-sm">
          Projetos e instalações de sistemas de ar-condicionado para garantir conforto e eficiência energética.
        </p>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm overflow-hidden">
      <div className="h-48 mb-4 rounded-lg overflow-hidden relative">
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt="Sistema de pressurização de escadas"
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Pressurização de escadas</h3>
        <p className="text-gray-600 text-sm">
          Soluções para segurança contra incêndios, garantindo a evacuação segura em emergências.
        </p>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm overflow-hidden">
      <div className="h-48 mb-4 rounded-lg overflow-hidden relative">
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt="Sistema de detecção de incêndio"
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Detecção e alarme de incêndio</h3>
        <p className="text-gray-600 text-sm">
          Sistemas inteligentes para monitoramento e prevenção de incêndios.
        </p>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm overflow-hidden">
      <div className="h-48 mb-4 rounded-lg overflow-hidden relative">
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt="Manutenção preventiva"
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Manutenção preventiva e corretiva</h3>
        <p className="text-gray-600 text-sm">
          Otimizar o desempenho e a durabilidade dos sistemas prevenindo falhas.
        </p>
      </div>
    </div>
  </div>
</div>
</section>
  )
}


{/* Benefits Section */}
