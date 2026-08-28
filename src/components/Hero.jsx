

const Hero = () => {
  return (
  <>
    <section id="hero "class="hero"> 
   
    <div class="grade-fundo"></div>

      <div class="container">
        <div class="grid-inicio">

          <div class="conteudo-inicio">

            <p className="titulo">
              <span className="titulo-linha"></span>
              Conceito acadêmico · 2026
            </p>

            <h1>
            Sua câmera.
            <br />
            <span>Mais</span> 
            <br />
            inteligente.
            </h1>

            <p class="desc-inicio"> 
                InterGuide é um conceito de guia inteligente que vive dentro da câmera do smartphone. Em vez de apenas registrar o que está à frente, a câmera passa a oferecer contexto e orientação para quem estuda em tempo integral.
            </p>

            <div class="acoes-inicio"> 

              <a href="#solucao" class="botao-principal">
                Conhecer o conceito
              </a>

              <a href="#galeria" class="link-secundario"> 
                Ver galeria visual
              </a>

            </div>

          </div>

           <div className="visual-inicio">

        <img
          src='src/assets/fundo.png'
          alt="Mockup do InterGuide"
          className="imagem-inicio"
        />

      </div>

        </div>
      </div>

    </section>
  </>
  )
}

export default Hero
