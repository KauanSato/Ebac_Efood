import { HeaderBackground, HeaderContainer, Logo } from './styled'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBackground>
      <HeaderContainer className="container">
        <Link to="/">
          <a>Restaurantes</a>
        </Link>
        <Logo src={logo} alt="Efood" />
        <span onClick={openCart} style={{ cursor: 'pointer' }}>
          {items.length} produto(s) no carrinho
        </span>
      </HeaderContainer>
    </HeaderBackground>
  )
}

export default Header
