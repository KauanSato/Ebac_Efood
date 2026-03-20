import styled from 'styled-components'
import HeroVector from '../../assets/images/Vector.png'

export const HeroBackground = styled.div`
  background-image: url(${HeroVector});
  height: 384px;
  width: 100%;
  display: block;
`

export const HeroContainer = styled.div`
  text-align: center;
  padding: 40px 16px;
  align-items: center;

  h1 {
    margin-top: 139px;
    font-size: 36px;
    font-weight: 900;
  }
`
