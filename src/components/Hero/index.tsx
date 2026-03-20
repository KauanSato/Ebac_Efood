import logo from '../../assets/images/logo.svg'
import { HeroBackground, HeroContainer } from './styles'

const Hero = () => (
  <HeroBackground>
    <HeroContainer>
      <img src={logo} alt="Efood" />
      <h1>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </h1>
    </HeroContainer>
  </HeroBackground>
)

export default Hero
