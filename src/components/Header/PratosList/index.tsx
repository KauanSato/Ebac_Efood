import Product from '../Pratos'
import { CardList, Container } from './styles'
import Pratos from '../../../models/Pratos'

export type Props = {
  pratos: Pratos[]
}

const PratoList = ({ pratos }: Props) => (
  <Container>
    <CardList>
      {pratos.map((prato) => (
        <Product
          key={prato.id}
          title={prato.title}
          image={prato.image}
          desc={prato.desc}
        />
      ))}
    </CardList>
  </Container>
)

export default PratoList
