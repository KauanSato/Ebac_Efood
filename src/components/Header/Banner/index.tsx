import { Descricao, Imagem } from './styles'
import Macarrao from '../../../assets/images/macarrao.png'

const Banner = () => (
  <Imagem
    style={{
      backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.6)) , url(${Macarrao})`
    }}
  >
    <Descricao>
      <p>Italiana</p>
      <h2>La Dolce Vita Trattoria</h2>
    </Descricao>
  </Imagem>
)

export default Banner
