export default function ContactSection() {
  return (
    <section id="contato" className="py-12 md:py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-sm text-gray-500 mb-2">Fale Conosco</h3>
            <h2 className="text-3xl font-bold mb-8">Teremos prazer em atendê-lo!</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Telefone:</h3>
                <p className="font-medium">(11) 4567-8900</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">E-mail:</h3>
                <p className="font-medium">contato@rlpengenharia.com.br</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Endereço:</h3>
                <p className="font-medium">
                  Av. Paulista, 1000 - Bela Vista
                  <br />
                  São Paulo - SP, 01310-100
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 md:pl-12">
            <form>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Departamento:</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="department" className="mr-2" defaultChecked />
                    <span>Suporte</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="department" className="mr-2" />
                    <span>Vendas</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Assunto</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Assunto" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Seu nome" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md h-32"
                  placeholder="Digite sua mensagem..."
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 