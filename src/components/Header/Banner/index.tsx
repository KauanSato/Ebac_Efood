import * as S from './styles'

type Props = {
  nome: string
  categoria: string
  capa: string
}

const Banner = ({ nome, categoria, capa }: Props) => {
  return (
    <S.Imagem
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.6)) , url(${capa})`
      }}
    >
      <S.Descricao>
        <S.Categoria>{categoria}</S.Categoria>
        <S.Titulo>{nome}</S.Titulo>
      </S.Descricao>
    </S.Imagem>
  )
}

export default Banner
