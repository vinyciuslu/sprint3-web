import Membro from './Membro'

const Equipe = () => {
  const membros = [
    {
      nome: "Vinycius Lu",
      funcao: "Web Designer",
      inicial: "VL",
    },
    {
      nome: "Matheus Tamataya",
      funcao: "Developer",
      inicial: "MT",
    },
    {
      nome: "Leonardo Daniel",
      funcao: "Product Owner",
      inicial: "LD",
    },
    {
      nome: "Bernardo Kim",
      funcao: "Software Engineer",
      inicial: "BK",
    },
  ];

  return (
    <>
      <section id="equipe" className="time">
        <div className="shell">
          <div className="time-header">
            <h2 className="time-titulo">Equipe</h2>

            <p className="time-subtitulo">Projeto universtário</p>
          </div>

          <ul className="time-lista">
            {membros.map((membro) => (
              <Membro
                key={membro.nome}
                nome={membro.nome}
                funcao={membro.funcao}
                inicial={membro.inicial}
              />
            ))}
          </ul>

        </div>
      </section>
    </>
  )
}

export default Equipe
