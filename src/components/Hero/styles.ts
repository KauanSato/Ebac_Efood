import styled from 'styled-components'
import HeroVector from '../../assets/images/Vector.png'
import { breakpoints } from '../../styles'

export const HeroBackground = styled.div`
  background-image: url(${HeroVector});
  height: 360px;
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const HeroContainer = styled.div`
  text-align: center;
  padding: 40px 16px;
  margin: auto 0;
  align-items: center;

  h1 {
    font-weight: 900;
    font-size: 36px;
    max-width: 540px;
    width: 100%;
    margin: 0 auto;
    line-height: 42px;
  }

  img {
    margin-bottom: 139px;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 40px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    line-height: 32px;
    max-width: 100%;
  }
`
