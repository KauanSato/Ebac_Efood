import * as S from './styles'
import fechar from '../../../assets/images/close 1.png'
import { InfoPrato } from '../PratosList'
import { formataPreco } from '../../../models/formatters'
import { useDispatch } from 'react-redux'
import { add, open } from '../../../store/reducers/cart'
import { toast } from 'react-toastify'

type Props = {
  product: InfoPrato | null
  isVisible: boolean
  onClose: () => void
}

const ProductModal = ({ product, isVisible, onClose }: Props) => {
  const dispatch = useDispatch()

  const addItem = () => {
    if (product) {
      dispatch(add(product))
      onClose()

      toast.success('Item adicionao! Ver carrinho', {
        onClick: () => dispatch(open()),
        icon: <span>🛒</span>,
        position: 'bottom-right',
        autoClose: 4000,
        pauseOnHover: true,
        draggable: true
      })
    }
  }

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
            <S.BotaoModal onClick={addItem}>
              Adicionar ao carrinho - {formataPreco(product.preco)}
            </S.BotaoModal>
          </div>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Modal>
  )
}

export default ProductModal
