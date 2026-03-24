import styled from 'styled-components'
import HeroVector from '../../assets/images/Vector.png'

export const HeaderBackground = styled.header`
  background-image: url(${HeroVector});
  display: flex;
  height: 186px;
  justify-content: center;
  align-items: center;
  padding: 48px 0;
  max-width: 100%;
  z-index: 100;
  position: sticky;
  top: 0;
`

export const HeaderContainer = styled.div`
  font-weight: 900;
  font-size: 18px;
  border: none;
  background-color: transparent;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 58px;
  cursor: pointer;
`
