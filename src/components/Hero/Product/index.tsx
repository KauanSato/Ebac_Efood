import Estrela from '../../../assets/images/estrela.png'
import Button from '../../Button'
import Tag from '../../Tag'
import * as S from './styles'

type Props = {
  image: string
  title: string
  rating: number
  desc: string
  categoria: string
  destaque?: string
}

export const Product = ({
  image,
  title,
  rating,
  desc,
  categoria,
  destaque
}: Props) => {
  //const LinkAdress = link
  return (
    <S.Card>
      <S.CardImage src={image} />
      <S.TagContainer>
        {destaque && <Tag>{destaque}</Tag>}
        <Tag key={destaque}>{categoria}</Tag>
      </S.TagContainer>
      <S.CardDiv>
        <S.Titulo>
          {title}
          <div>
            {rating}
            <img src={Estrela} alt="Star" />
          </div>
        </S.Titulo>
        <S.Descricao>{desc}</S.Descricao>
        <div className="LearnMore">
          <Button type="link" to="/Perfil" title="LearnMore">
            Saiba mais
          </Button>
        </div>
      </S.CardDiv>
    </S.Card>
  )
}

export default Product
