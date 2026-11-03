

const Publico = () => {
  return (
    <>
    <section id="publico" className="publico">
    <div className="shell">
        <div className="publico-header">
          <h2 className="publico-titulo">
            Pensado para quem está sempre aprendendo.
          </h2>

          <p className="publico-desc">
            Estudantes em tempo integral vivem entre salas, deslocamentos e
            materiais soltos. O InterGuide nasce dessa rotina — não de uma tela
            a mais.
          </p>
        </div>

        <div className="publico-grid">
          <div className="publico-rotina">
            <p className="titulo">Rotina</p>

            <div className="publico-rotina-conteudo">
              <p className="publico-hr">8h</p>

              <p className="publico-text">
                de dia acadêmico contínuo, com pouco espaço para parar e
                organizar informação.
              </p>
            </div>
          </div>

          <div className="publico-image desk-image">
            <img
              src="images/gallery-desk.jpg"
              width={1008}
              height={752}
              alt="Caderno, caneta e celular sobre uma mesa de concreto"
            />
          </div>

          <div className="publico-card">
            <p className="titulo">Espaços</p>

            <h3>Muitos ambientes por dia</h3>

            <p>
              Laboratórios, bibliotecas, corredores e transporte — cada um com
              um contexto próprio.
            </p>
          </div>

          <article className="publico-card">
            <p className="titulo">Hábito</p>

            <h3>A câmera é o primeiro reflexo</h3>

            <p>
              Antes de anotar, o estudante fotografa. O conceito começa
              exatamente aí.
            </p>
          </article>

          <div className="publico-image abstract-image">
            <img
              src="images/gallery-wide.jpg"
              width={1008}
              height={1008}
              alt=" "
            />
          </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Publico
