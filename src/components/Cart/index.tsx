import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as S from './styles'
import { formataPreco } from '../../models/formatters'
import { close, remove } from '../../store/reducers/cart'
import Button from '../Button'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getValorTotal = () => {
    return items.reduce((acumulador, item) => {
      return acumulador + item.preco
    }, 0)
  }
  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <div className="close-button">
          <S.CartCloseButton onClick={closeCart}></S.CartCloseButton>
        </div>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
              ></button>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </div>
            </S.CartItem>
          ))}
        </ul>
        <S.Price>
          <p>Valor total</p>
          <p>{formataPreco(getValorTotal())}</p>
        </S.Price>
        <Button type="button" title="Clique para continuar com a entrega">
          Continuar com a entrega
        </Button>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
