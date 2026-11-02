
import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Admin = () => {

 const [mensagens, setMensagens] = useState([])
const [carregando, setCarregando] = useState(true)

useEffect(() => {
  const buscarMensagens = async () => {
    try {
      const response = await fetch('http://localhost:3001/mensagens')

      if (!response.ok) {
        throw new Error('Erro ao buscar mensagens')
      }

      const dados = await response.json()
      setMensagens(dados)

    } catch (error) {
      console.error('Erro:', error)
    } finally {
      setCarregando(false)
    }
  }

  buscarMensagens()
}, [])

  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <main className="min-h-screen bg-[#F9F8F5] text-[#202122]">

      {/* Cabeçalho */}
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-5 md:px-10">
        <h1 className="text-2xl font-bold">
          InterGuide<span className="text-gray-400">.</span>
          <span className="ml-3 text-sm font-normal text-gray-400">
            Admin
          </span>
        </h1>

        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-gray-500 sm:block">
            {user?.name}
          </span>

          <button
            onClick={handleLogout}
            className="rounded-full bg-[#202122] px-5 py-2 text-sm text-white hover:bg-black"
          >
            Sair
          </button>
        </div>
      </header>

      {/* Conteúdo */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">

        <div className="mb-8">
          <p className="text-sm text-gray-500">Visão geral</p>
          <h2 className="mt-1 text-3xl font-semibold">
            Bem-vindo ao painel!
          </h2>
          <p className="mt-2 text-gray-500">
            Acompanhe as mensagens recebidas pelo InterGuide.
          </p>
        </div>

        {/* Indicadores */}
        <div className="mb-10 grid gap-5 sm:grid-cols-2">

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">Total de mensagens</p>
            <p className="mt-3 text-4xl font-semibold">
              {mensagens.length}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">Mensagens recebidas</p>
            <p className="mt-3 text-4xl font-semibold">
              {mensagens.length}
            </p>
          </div>

        </div>

        {/* Lista de mensagens */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

          <div className="border-b border-gray-200 p-6">
            <h3 className="text-xl font-semibold">
              Mensagens recebidas
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Confira o que os visitantes enviaram.
            </p>
          </div>

          {mensagens.length === 0 ? (

            <div className="p-12 text-center">
              <p className="text-lg font-medium">
                Nenhuma mensagem por enquanto.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                As mensagens enviadas pelo formulário aparecerão aqui.
              </p>
            </div>

          ) : (

            <div className="divide-y divide-gray-100">

              {carregando ? (
                <p className="p-6 text-sm text-gray-500">
                  Carregando mensagens...
                </p>
              ) : mensagens.length === 0 ? (
                <p className="p-6 text-sm text-gray-500">
                  Nenhuma mensagem recebida.
                </p>
              ) : (
                mensagens.map((item, index) => (

                  <article key={index} className="p-6 transition hover:bg-gray-50">

                    <div className="flex flex-col justify-between gap-3 sm:flex-row">

                      <div>
                        <h4 className="font-semibold">
                          {item.nome}
                        </h4>

                        <p className="mt-1 text-sm text-gray-500">
                          {item.email}
                        </p>
                      </div>

                      <span className="text-xs text-gray-400">
                        {new Date(item.data).toLocaleString('pt-BR')}
                      </span>

                    </div>

                    <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-gray-600">
                      {item.mensagem}
                    </p>

                  </article>

                ))
              )}

            </div>

          )}

        </div>

      </section>

    </main>
  )
}

export default Admin
