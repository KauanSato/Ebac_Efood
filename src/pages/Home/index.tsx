import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ProductsList from '../../components/Hero/ProductsList'
import { useEffect, useState } from 'react'

export type Locais = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

export type CardapioItem = {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
  quantidade: number
}

const Home = () => {
  const [info, setInfo] = useState<Locais[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setInfo(res))
  }, [])

  return (
    <>
      <Hero />
      <ProductsList restaurantes={info} />
      <Footer />
    </>
  )
}

export default Home
