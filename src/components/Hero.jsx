

const Hero = () => {
  return (
  <>
    <section id="hero"class="hero"> 
   
    <div class="grade-fundo"></div>

      <div class="container">
        <div class="grid-inicio">

          <div class="conteudo-inicio">

            <p class="titulo">
              <span class="titulo-linha"></span>
              Projeto acadêmico · 2026
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

           <div class="visual-inicio">

        <img
          src='images/fundo.png'
          alt="Mockup do InterGuide"
          class="imagem-inicio"
        />

      </div>

        </div>
      </div>

    </section>
  </>
  )
}

export default Hero
