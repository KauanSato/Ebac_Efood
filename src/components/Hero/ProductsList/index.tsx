import Product from '../Product'
import { CardList, Container } from './styles'
import type { Locais } from '../../../pages/Home'

export type Props = {
  restaurantes: Locais[]
}

const ProductsList = ({ restaurantes }: Props) => (
  <Container>
    <CardList>
      {restaurantes.map((restaurante) => (
        <Product
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
