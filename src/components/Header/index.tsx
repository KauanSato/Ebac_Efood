import { HeaderBackground, HeaderContainer, Logo } from './styled'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBackground>
    <HeaderContainer className="container">
      <a href="#">Restaurantes</a>
      <Logo src={logo} alt="Efood" />
      <a href="#">0 produto(s) no carrinho</a>
    </HeaderContainer>
  </HeaderBackground>
)

export default Header
