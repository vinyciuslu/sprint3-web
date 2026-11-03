
import Navbar from '../components/Navbar'
import Contato from '../components/Contato'
import Equipe from '../components/Equipe'
import Galeria from '../components/Galeria'
import Publico from '../components/Publico'
import Solucao from '../components/Solucao'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        titulo={<>Sua câmera. <br /> Mais inteligente.</>}
        descricao="InterGuide é um conceito de guia inteligente que vive dentro da câmera do smartphone. Em vez de apenas registrar o que está à frente, a câmera passa a oferecer contexto e orientação para quem estuda em tempo integral."
        imagem="images/fundo.png"
      />
      <Solucao />
      <Publico />
      <Galeria />
      <Equipe />
      <Contato />
      <Footer />
    </>
  )
}

export default Home
