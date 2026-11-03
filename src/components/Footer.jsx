
const Footer = () => {
const nav = [
    {
      label: "Solução",
      href: "#solucao",
    },
    {
      label: "Público-Alvo",
      href: "#publico",
    },
    {
      label: "Galeria",
      href: "#galeria",
    },
    {
      label: "Equipe",
      href: "#equipe",
    },
  ];

  return (
    <>
      <footer className="footer">

        <div className="shell">
            <div className="footer-conteudo">
                <a href="#hero" className="footer-logo">
                    <span className="footer-nome">
                        InterGuide
                    </span>
                </a>

                <ul className="footer-nav">
                    {nav.map((link) => (
                    <li key={link.label}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>

            <p className="footer-copy">
                &copy; InterGuide 2026 — Todos os direitos reservados.
                Todos os mockups são ilustrativos.
            </p>
        </div>

      </footer>
    </>
  )
}

export default Footer
