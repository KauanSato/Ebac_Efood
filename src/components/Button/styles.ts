import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${cores.pardo};
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  cursor: pointer;
  display: inline-block;
  border: none;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelho};
  color: ${cores.pardo};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
`
