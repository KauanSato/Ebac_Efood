import Product from '../Pratos'
import { CardList, Container } from './styles'
import Pratos from '../../../models/Pratos'
import { useState } from 'react'
import ProductModal from '../PratosModal'

export interface Prato {
  id: number
  title: string
  desc: string
  descP: string
  image: string
  preco: string
}

export type Props = {
  pratos: Pratos[]
}

const PratoList = ({ pratos }: Props) => {
  const [modal, setModal] = useState({
    isVisible: false,
    data: null as Prato | null
  })

  return (
    <Container>
      <CardList>
        {pratos.map((prato) => (
          <Product
            key={prato.id}
            title={prato.title}
            image={prato.image}
            desc={prato.desc}
            descP={prato.descP}
            preco={prato.preco}
            onOpen={() => setModal({ isVisible: true, data: prato })}
          />
        ))}
      </CardList>
      <ProductModal
        product={modal.data}
        isVisible={modal.isVisible}
        onClose={() => setModal({ isVisible: false, data: null })}
      />
    </Container>
  )
}

export default PratoList
