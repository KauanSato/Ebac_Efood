import Button from '../../Button'
import * as S from './styles'

type Props = {
  image: string
  title: string
  desc: string
  link?: string
  preco: number
  onOpen: () => void
}

const Prato = ({ image, title, desc, onOpen }: Props) => {
  return (
    <S.Card>
      <S.CardImage src={image} />
      <S.Titulo>{title}</S.Titulo>
      <S.Descricao>{desc}</S.Descricao>
      <Button onClick={onOpen} type="button" title="Adicionar ao carrinho">
        Adicionar ao carrinho
      </Button>
    </S.Card>
  )
}

export default Prato
