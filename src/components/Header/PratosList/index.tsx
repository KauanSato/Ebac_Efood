import Prato from '../Pratos'
import { CardList, Container } from './styles'
import { useState } from 'react'
import ProductModal from '../PratosModal'

export interface InfoPrato {
  id: number
  nome: string
  descricao: string
  porcao: string
  foto: string
  preco: number
}

export type Props = {
  pratos: InfoPrato[]
}

const PratoList = ({ pratos }: Props) => {
  const [modal, setModal] = useState({
    isVisible: false,
    data: null as InfoPrato | null
  })

  return (
    <Container>
      <CardList>
        {pratos.map((prato) => (
          <Prato
            key={prato.id}
            title={prato.nome}
            image={prato.foto}
            desc={prato.descricao}
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
