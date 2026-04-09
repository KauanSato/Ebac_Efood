import styled from 'styled-components'
import HeroVector from '../../assets/images/Vector.png'

export const HeaderBackground = styled.header`
  background-image: url(${HeroVector});
  display: flex;
  align-items: center;
  padding: 40px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  font-size: 18px;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    background-color: transparent;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 58px;
  cursor: pointer;
`
