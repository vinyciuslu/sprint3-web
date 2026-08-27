import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav class="menu">
        <div id="nav esquerda">
          <a id="logo" href="#hero">InterGuide</a>
        </div>
        <div id="nav meio">
        <a class="meio" href="#solucao">Solução</a>
        <a class="meio" href="#publico">Público-Alvo</a>
        <a class="meio" href="#galeria">Galeria</a>
        <a class="meio" href="#equipe">Sobre</a>
        </div>
        <div id="direita">
        <a id="botao-contato" href="#contato">Contate-nos</a>
        </div>

      </nav>
    </>
  )
}

export default Navbar
