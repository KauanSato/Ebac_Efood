import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ProductsList from '../../components/Hero/ProductsList'
import Restaurantes from '../../models/Restaurantes'
import Sushi from '../../assets/images/sushi.png'
import Macarrao from '../../assets/images/macarrao.png'

const info: Restaurantes[] = [
  {
    title: 'Hioki Sushi',
    destaque: 'Destaque da semana',
    categoria: 'Japonesa',
    desc: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: 4.9,
    image: Sushi,
    id: 1
  },
  {
    title: 'La Dolce Vita Trattoria',
    categoria: 'Italiana',
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    image: Macarrao,
    id: 2
  },
  {
    title: 'La Dolce Vita Trattoria',
    categoria: 'Italiana',
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    image: Macarrao,
    id: 3
  },
  {
    title: 'La Dolce Vita Trattoria',
    categoria: 'Italiana',
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    image: Macarrao,
    id: 4
  },
  {
    title: 'La Dolce Vita Trattoria',
    categoria: 'Italiana',
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    image: Macarrao,
    id: 5
  },
  {
    title: 'La Dolce Vita Trattoria',
    categoria: 'Italiana',
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    image: Macarrao,
    id: 6
  }
]

const Home = () => (
  <>
    <Hero />
    <ProductsList restaurantes={info} />
    <Footer />
  </>
)

export default Home
