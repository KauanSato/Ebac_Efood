import Product from '../Product'
import { CardList, Container } from './styles'
import type { Restaurante } from '../../../models/api'

export type Props = {
  restaurantes: Restaurante[]
}

const ProductsList = ({ restaurantes }: Props) => (
  <Container className="container">
    <CardList>
      {restaurantes.map((restaurante) => (
        <Product
          id={restaurante.id}
          key={restaurante.id}
          title={restaurante.titulo}
          destaque={restaurante.destacado}
          categoria={restaurante.tipo}
          image={restaurante.capa}
          desc={restaurante.descricao}
          rating={restaurante.avaliacao}
        />
      ))}
    </CardList>
  </Container>
)

export default ProductsList
