import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Navbar = () => {

  const [menuAberto, setMenuAberto] = useState(false)
  const { user } = useAuth()

  return (
    <>
      <nav className="menu">

        <div id="nav-esquerda">
          <a id="logo" href="#hero">
            InterGuide
          </a>
        </div>

        <div className="nav-meio">
          <a href="#solucao">Solução</a>
          <a href="#publico">Público-Alvo</a>
          <a href="#galeria">Galeria</a>
          <a href="#equipe">Equipe</a>
        </div>

        <div className="nav-direita">
          <a id="botao-contato" href="#contato">
            Contate-nos
          </a>

          <Link
            to={user ? '/admin' : '/login'}
            id="botao-login"
          >
            {user ? 'Painel administrativo' : 'Entrar'}
          </Link>
        </div>

        <button
        type="button"
        className="menu-lista" 
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuAberto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`menu-cell ${menuAberto ? "aberto" : ""}`}>

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

          <Link
            to={user ? '/admin' : '/login'}
            onClick={() => setMenuAberto(false)}
          >
            {user ? 'Painel administrativo' : 'Entrar'}
          </Link>
                    
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
