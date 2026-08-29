import React from 'react'

const Publico = () => {
  return (
    <>
    <section id="publico" class="publico">
    <div class="shell">
        <div class="publico-header">
          <h2 class="publico-titulo">
            Pensado para quem está sempre aprendendo.
          </h2>

          <p class="publico-desc">
            Estudantes em tempo integral vivem entre salas, deslocamentos e
            materiais soltos. O InterGuide nasce dessa rotina — não de uma tela
            a mais.
          </p>
        </div>

        <div class="publico-grid">
          <div class="publico-rotina">
            <p class="titulo">Rotina</p>

            <div class="publico-rotina-conteudo">
              <p class="publico-hr">8h</p>

              <p class="publico-text">
                de dia acadêmico contínuo, com pouco espaço para parar e
                organizar informação.
              </p>
            </div>
          </div>

          <div class="publico-image desk-image">
            <img
              src="images/gallery-desk.jpg"
              width={1008}
              height={752}
              alt="Caderno, caneta e celular sobre uma mesa de concreto"
            />
          </div>

          <div class="publico-card">
            <p class="titulo">Espaços</p>

            <h3>Muitos ambientes por dia</h3>

            <p>
              Laboratórios, bibliotecas, corredores e transporte — cada um com
              um contexto próprio.
            </p>
          </div>

          <article class="publico-card">
            <p class="titulo">Hábito</p>

            <h3>A câmera é o primeiro reflexo</h3>

            <p>
              Antes de anotar, o estudante fotografa. O conceito começa
              exatamente aí.
            </p>
          </article>

          <div class="publico-image abstract-image">
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
