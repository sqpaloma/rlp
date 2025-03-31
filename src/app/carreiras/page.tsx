"use client"

import { useState } from "react"
import { Upload, CheckCircle } from "lucide-react"
import Header from "@/components/Header"

export default function CarreirasPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [jobPosition, setJobPosition] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)
  }

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)

      setTimeout(() => {
        setSubmitSuccess(false)
        setSelectedFile(null)
        setJobPosition("")
        const form = e.target as HTMLFormElement
        form.reset()
      }, 3000)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      
      
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-6 md:px-12 pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Carreiras</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Faça parte da nossa equipe e contribua para projetos inovadores em engenharia e climatização.
          </p>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Junte-se a nós</h2>
              <p className="text-gray-600 mb-6">
                Estamos sempre em busca de talentos para integrar nossa equipe. Se você é apaixonado por engenharia,
                climatização e proteção contra incêndios, e busca crescimento profissional, envie seu currículo.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold text-blue-800 mb-2">Por que trabalhar na RLP Engenharia?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Ambiente colaborativo e inovador</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Oportunidades de crescimento e desenvolvimento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Projetos desafiadores e diversificados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Pacote de benefícios competitivo</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Envie seu currículo</h3>

                {submitSuccess ? (
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-green-800 mb-2">Currículo enviado com sucesso!</h4>
                    <p className="text-green-600">Agradecemos seu interesse. Entraremos em contato em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleCareerSubmit} className="space-y-4">
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Nome Completo</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        placeholder="seu.email@exemplo.com"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Telefone</label>
                      <input
                        type="tel"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Vaga de Interesse</label>
                      <select
                        className="w-full p-3 border border-gray-300 rounded-md bg-white"
                        value={jobPosition}
                        onChange={(e) => setJobPosition(e.target.value)}
                        required
                      >
                        <option value="" disabled>Selecione uma vaga</option>
                        <option value="engenheiro">Engenheiro</option>
                        <option value="assistente-rh">Assistente de RH</option>
                        <option value="analista-manutencao">Analista de Manutenção</option>
                        <option value="ajudante-refrigeracao">Ajudante de Refrigeração</option>
                        <option value="tecnico-refrigeracao">Técnico de Refrigeração</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Mensagem (opcional)</label>
                      <textarea
                        className="w-full p-3 border border-gray-300 rounded-md h-24"
                        placeholder="Conte-nos um pouco sobre você e suas experiências..."
                      ></textarea>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">Currículo (PDF)</label>
                      <div className="border border-gray-300 border-dashed rounded-md p-4 text-center">
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf"
                          className="hidden"
                          onChange={handleFileChange}
                          required
                        />
                        <label htmlFor="resume" className="cursor-pointer flex flex-col items-center justify-center">
                          <Upload className="w-8 h-8 text-gray-400 mb-2" />
                          {selectedFile ? (
                            <span className="text-blue-600 font-medium">{selectedFile.name}</span>
                          ) : (
                            <>
                              <span className="text-gray-600 mb-1">Clique para fazer upload do seu currículo</span>
                              <span className="text-gray-500 text-sm">Apenas arquivos PDF (máx. 5MB)</span>
                            </>
                          )}
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition flex items-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          "Enviar Currículo"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 