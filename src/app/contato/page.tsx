"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-6 md:px-12 pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Entre em Contato</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Estamos à disposição para atender suas necessidades em climatização, pressurização de escadas e detecção de
            incêndios.
          </p>
        </div>
      </section>

      {/* Fale Conosco Section */}
      <section id="fale-conosco" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Fale Conosco</h2>

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

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
                  <p className="text-gray-600 mb-2">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 9h às 13h</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <form className="space-y-4">
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
                    <label className="flex items-center">
                      <input type="radio" name="department" className="mr-2" />
                      <span>Financeiro</span>
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
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="(00) 00000-0000"
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

      {/* Map Section */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossa Localização</h2>
          <div className="h-96 bg-gray-200 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951624297!2d-46.65390508502264!3d-23.564611284683726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f481fd9f%3A0x9982bfde4df54830!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1648146662764!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

