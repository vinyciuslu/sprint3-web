

const Hero = ({ titulo, descricao, imagem }) => {
  return (
    <section id="hero"className="hero"> 
   
    <div className="grade-fundo"></div>

      <div className="container">
        <div className="grid-inicio">

          <div className="conteudo-inicio">

            <p className="titulo">
              <span className="titulo-linha"></span>
              Projeto acadêmico · 2026
            </p>

            <h1>{titulo}</h1>

            <p className="desc-inicio">
              {descricao}
            </p>

            <div className="acoes-inicio"> 

              <a href="#solucao" className="botao-principal">
                Conhecer o conceito
              </a>

              <a href="#galeria" className="link-secundario"> 
                Ver galeria visual
              </a>

            </div>

          </div>

           <div className="visual-inicio">

        <img
          src={imagem}
          alt="Mockup do InterGuide"
          className="imagem-inicio"
        />

      </div>

        </div>
      </div>

    </section>
  )
}

export default Hero
