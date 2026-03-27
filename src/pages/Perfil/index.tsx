import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Banner from '../../components/Header/Banner'
import PratoList from '../../components/Header/PratosList'
import { useParams } from 'react-router-dom'
import { useGetPratosQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetPratosQuery(id || '')

  if (!restaurante) return <h3>Carregando...</h3>

  return (
    <>
      <Header />
      <Banner
        capa={restaurante.capa}
        categoria={restaurante.tipo}
        nome={restaurante.titulo}
      />
      <PratoList pratos={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
