import Banner from '../../components/Header/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PratoList from '../../components/Header/PratosList'
import Pratos from '../../models/Pratos'
import Pizza from '../../assets/images/pizza.png'

const info: Pratos[] = [
  {
    title: 'Pizza Marguerita',
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    id: 1
  },
  {
    title: 'Pizza Marguerita',
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    id: 2
  },
  {
    title: 'Pizza Marguerita',
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    id: 3
  },
  {
    title: 'Pizza Marguerita',
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    id: 4
  },
  {
    title: 'Pizza Marguerita',
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    id: 5
  },
  {
    title: 'Pizza Marguerita',
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    id: 6
  }
]

const Perfil = () => (
  <>
    <Header />
    <Banner />
    <PratoList pratos={info} />
    <Footer />
  </>
)

export default Perfil
