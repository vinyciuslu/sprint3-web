import React from 'react'

const Galeria = () => {
  return (
    <>
      <section id="galeria">
          <div id="cabecalho-galeria">
        
          <div>
            <div>
              <p class="titulo-galeria">
              <span class="titulo-linha"></span>
               Galeria
            </p>
            </div>
            <div>
              <h2 id="titulo">Referência visual</h2>
            </div>
          </div>

          <div>
            <p id="desc-galeria">Mockups e composições concentuais - com definições de funcionalidade</p>
          </div>

        </div>

          <div id="fotos">
            <img src="public/zeiss.png" alt="" class="imagem" id="galeria-4"/>
            <img src="public/lente.png" alt="" class="imagem"  id="galeria-1"/>
            <img src="public/tela.png" alt="" class="imagem" id="galeria-2"/>
            <img src="public/tela2.png" alt="" class="imagem" id="galeria-3"/>
          </div>

      </section>
    </>
  )
}

export default Galeria
