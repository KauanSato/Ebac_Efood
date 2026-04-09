import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ProductsList from '../../components/Hero/ProductsList'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: info } = useGetRestaurantsQuery()

  if (!info) {
    return <h3>Carregando restaurantes...</h3>
  }

  return (
    <>
      <Hero />
      <ProductsList restaurantes={info} />
      <Footer />
    </>
  )
}

export default Home
