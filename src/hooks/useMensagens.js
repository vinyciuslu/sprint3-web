import { useState, useCallback } from 'react'

const API_URL = 'http://localhost:3001/mensagens'

const useMensagens = () => {
  const [mensagens, setMensagens] = useState([])
  const [carregando, setCarregando] = useState(false)

  const buscarMensagens = useCallback(async () => {
    setCarregando(true)

    try {
      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error('Erro ao buscar mensagens')
      }

      const dados = await response.json()
      setMensagens(dados)

      return dados

    } catch (error) {
      console.error(error)
      throw error

    } finally {
      setCarregando(false)
    }
  }, [])

  const enviarMensagem = async (novaMensagem) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novaMensagem)
    })

    if (!response.ok) {
      throw new Error('Erro ao enviar mensagem')
    }

    return await response.json()
  }

  return {
    mensagens,
    carregando,
    buscarMensagens,
    enviarMensagem
  }
}

export default useMensagens