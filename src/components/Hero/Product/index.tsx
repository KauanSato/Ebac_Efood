import Estrela from '../../../assets/images/estrela.png'
import Button from '../../Button'
import Tag from '../../Tag'
import * as S from './styles'

type Props = {
  id: number
  image: string
  title: string
  rating: number
  desc: string
  categoria: string
  destaque?: boolean
}

export const Product = ({
  id,
  image,
  title,
  rating,
  desc,
  categoria,
  destaque
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 230) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <S.CardImage src={image} />
      <S.TagContainer>
        {destaque && <Tag>Destaque da semana</Tag>}
        <Tag>{categoria}</Tag>
      </S.TagContainer>
      <S.CardDiv>
        <S.Titulo>
          {title}
          <div>
            {rating}
            <img src={Estrela} alt="Star" />
          </div>
        </S.Titulo>
        <S.Descricao>{getDescricao(desc)}</S.Descricao>
        <div className="LearnMore">
          <Button type="link" to={`/perfil/${id}`} title="LearnMore">
            Saiba mais
          </Button>
        </div>
      </S.CardDiv>
    </S.Card>
  )
}

export default Product
