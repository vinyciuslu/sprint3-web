
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
      <footer class="footer">

        <div class="shell">
            <div class="footer-conteudo">
                <a href="#hero" class="footer-logo">
                    <span class="footer-nome">
                        InterGuide
                    </span>
                </a>

                <ul class="footer-nav">
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
