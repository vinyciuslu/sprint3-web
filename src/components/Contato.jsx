import React from 'react'

const Contato = () => {
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
            <a href="mailto:vinyciuslu@gmail.com"id="email">contato@interguide.com</a>
          </div>
          <div class="formulario">
            <form action="">
              <div class="campo">
                <label htmlFor="nome"></label>
                <input type="text" id="nome" name="nome" placeholder='Seu Nome' required />
              </div>
              <div class="campo">
                <label htmlFor="email"></label>
                <input type="email" id="email" name="email" placeholder='email@email.com' required />
              </div>
              <div class="campo">
                <label htmlFor="mensagem"></label>
                <textarea id="mensagem" name="mensagem" placeholder='Conte o que você achou do projeto' required></textarea>
              </div>
              <button type='submit'>
                Enviar mensagem
              </button>
            </form>
          </div>
      </section>
    </>
  )
}

export default Contato
