import React, { useState } from 'react'

const Navbar = () => {

  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <>
      <nav class="menu">

        <div id="nav-esquerda">
          <a id="logo" href="#hero">
            InterGuide
          </a>
        </div>

        <div class="nav-meio">
          <a href="#solucao">Solução</a>
          <a href="#publico">Público-Alvo</a>
          <a href="#galeria">Galeria</a>
          <a href="#equipe">Equipe</a>
        </div>

        <div class="nav-direita">
          <a id="botao-contato" href="#contato">
            Contate-nos
          </a>
        </div>

        <button class="menu-lista" 
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label='Abrir menu'
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class={`menu-cell ${menuAberto ? "aberto" : ""}`}>

          <a href='#solucao' onClick={() => setMenuAberto (false)}> 
            Solução
          </a>
          
          <a href='#publico' onClick={() => setMenuAberto (false)}> 
            Público-Alvo
          </a>
          <a href='#galeria' onClick={() => setMenuAberto (false)}> 
            Galeria
          </a>
          <a href='#equipe' onClick={() => setMenuAberto (false)}> 
            Equipe
          </a>

          <a 
            href='#contato'
            id='botao-contato-cell'
            onClick={() => setMenuAberto (false)}
            >
              Contate-nos
          </a>

        </div>
        
      </nav>
    </>
  )
}

export default Navbar
