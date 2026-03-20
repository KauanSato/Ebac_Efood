import Button from '../../Button'
import * as S from './styles'

type Props = {
  image: string
  title: string
  desc: string
  link?: string
}

export const Prato = ({ image, title, desc }: Props) => {
  //const LinkAdress = link
  return (
    <S.Card>
      <S.CardImage src={image} />
      <S.Titulo>{title}</S.Titulo>
      <S.Descricao>{desc}</S.Descricao>
      <Button type="button" title="Adicionar ao carrinho">
        Adicionar ao carrinho
      </Button>
    </S.Card>
  )
}

export default Prato
