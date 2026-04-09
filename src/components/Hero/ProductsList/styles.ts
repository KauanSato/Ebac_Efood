import styled from 'styled-components'
import { breakpoints } from '../../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 120px;
`

export const CardList = styled.ul`
  display: grid;
  padding: 80px 0;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 24px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
