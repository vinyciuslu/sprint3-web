const Equipe = () => {
  const membros = [
    {
      nome: "Vinycius Lu",
      funcao: "DEV",
      inicial: "VL",
    },
    {
      nome: "Matheus Tamataya",
      funcao: "DEV",
      inicial: "MT",
    },
    {
      nome: "Leonardo Daniel",
      funcao: "Lindo",
      inicial: "LD",
    },
    {
      nome: "Bernardo SukJo",
      funcao: "pensante",
      inicial: "BS",
    },
  ];

  return (
    <>
      <section id="equipe" class="time">
        <div class="shell">
          <div class="time-header">
            <h2 class="time-titulo">Equipe</h2>

            <p class="time-subtitulo">Projeto universtário</p>
          </div>

          <ul class="time-lista">
            {membros.map((membro) => (
            <li key={membro.nome} class="time-membro">
              <span class="time-inicial">
                {membro.inicial}
              </span>

              <h3 class="time-nome">{membro.nome}</h3>
              <p class="time-funcao">{membro.funcao}</p>
            </li>
          ))}
          </ul>

        </div>
      </section>
    </>
  )
}

export default Equipe
