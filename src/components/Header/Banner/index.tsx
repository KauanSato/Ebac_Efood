import { Descricao, Imagem } from './styles'

type Props = {
  nome: string
  categoria: string
  capa: string
}

const Banner = ({ nome, categoria, capa }: Props) => {
  return (
    <Imagem
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.6)) , url(${capa})`
      }}
    >
      <Descricao>
        <p>{categoria}</p>
        <h2>{nome}</h2>
      </Descricao>
    </Imagem>
  )
}

export default Banner
