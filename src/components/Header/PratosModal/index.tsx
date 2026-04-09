import * as S from './styles'
import fechar from '../../../assets/images/close 1.png'
import { InfoPrato } from '../PratosList'
import { formataPreco } from '../../../models/formatters'

type Props = {
  product: InfoPrato | null
  isVisible: boolean
  onClose: () => void
}

const ProductModal = ({ product, isVisible, onClose }: Props) => {
  if (!isVisible || !product) return null

  return (
    <S.Modal className="visivel">
      <div className="overlay" onClick={onClose}></div>
      <S.ModalContainer>
        <img onClick={onClose} src={fechar} alt="ícone de fechar" />
        <S.ModalContent>
          <img src={product.foto} alt={product.nome} />
          <div>
            <h4>{product.nome}</h4>
            <p>{product.descricao}</p>
            <p>
              Serve de <span>{product.porcao}</span>
            </p>
            <S.BotaoModal>
              Adicionar ao carrinho - {formataPreco(product.preco)}
            </S.BotaoModal>
          </div>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Modal>
  )
}

export default ProductModal
