const Membro = ({ nome, funcao, inicial }) => {
  return (
    <li className="time-membro">
      <span className="time-inicial">
        {inicial}
      </span>

      <h3 className="time-nome">{nome}</h3>
      <p className="time-funcao">{funcao}</p>
    </li>
  )
}

export default Membro