import React, { useState } from 'react'

const Contato = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [enviado, setEnviado] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault()

  const mensagens = JSON.parse(localStorage.getItem('mensagens')) || []
  const novaMensagem = { nome, email, mensagem, data: new Date().toISOString() }
  mensagens.push(novaMensagem)
  localStorage.setItem('mensagens', JSON.stringify(mensagens))

  setEnviado(true)

  alert(
    'Mensagem enviada com sucesso!\n\n' +
    'Quer ver as mensagens salvas? Abra o console do navegador (F12) e digite:\n' +
    "JSON.parse(localStorage.getItem('mensagens'))"
  )

  setNome('')
  setEmail('')
  setMensagem('')
}

  return (
    <>
      <section id="contato" class="contato">
          <div class="titulo-contato">
            <p class="titulo-galeria">
              <span class="titulo-linha"></span>
              Contato
            </p>
            <h2 id="titulo-contato">Vamos explorar <br/>novas<br/> possibilidades para a câmera?</h2>
            <p id="desc-contato"> O InterGuide faz parte de um projeto acadêmico aberto para conversas, críticas e colaborações.</p>
            <a href="mailto:vinyciuslu@gmail.com" id="email-contato">contato@interguide.com</a>
          </div>
          <div class="formulario">
            <form onSubmit={handleSubmit}>
              <div class="campo">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder='Seu Nome'
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
              <div class="campo">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='email@email.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div class="campo">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder='Conte o que você achou do projeto'
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type='submit'>
                Enviar mensagem
              </button>

              {/* {enviado && <p class="confirmacao-envio">Mensagem enviada com sucesso!</p>} */}
            </form>
          </div>
      </section>
    </>
  )
}

export default Contato
