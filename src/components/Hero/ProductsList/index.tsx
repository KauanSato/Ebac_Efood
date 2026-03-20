import Product from '../Product'
import { CardList, Container } from './styles'
import Restaurantes from '../../../models/Restaurantes'

export type Props = {
  restaurantes: Restaurantes[]
}

const ProductsList = ({ restaurantes }: Props) => (
  <Container>
    <CardList>
      {restaurantes.map((restaurante) => (
        <Product
          key={restaurante.id}
          title={restaurante.title}
          destaque={restaurante.destaque}
          categoria={restaurante.categoria}
          image={restaurante.image}
          desc={restaurante.desc}
          rating={restaurante.rating}
        />
      ))}
    </CardList>
  </Container>
)

export default ProductsList
