import * as S from './styles'
import fechar from '../../../assets/images/close 1.png'
import { Prato } from '../PratosList'

type Props = {
  product: Prato | null
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
          <img src={product.image} alt={product.title} />
          <div>
            <h4>{product.title}</h4>
            <p>{product.descP}</p>
            <p>
              Serve de <span>2 a 3</span>
            </p>
            <S.BotaoModal>Adicionar ao carrinho - {product.preco}</S.BotaoModal>
          </div>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Modal>
  )
}

export default ProductModal
