import Button from '../../Button'
import * as S from './styles'

type Props = {
  image: string
  title: string
  desc: string
  descP: string
  link?: string
  preco: string
  onOpen: () => void
}

export const Prato = ({ image, title, desc, onOpen }: Props) => {
  //const LinkAdress = link
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
