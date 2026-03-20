import styled from 'styled-components'
import { cores } from '../../../styles'

export const Card = styled.div`
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: ${cores.vermelho};
  color: ${cores.pardo};
`

export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`

export const CardImage = styled.img`
  width: 100%;
  height: 167px;
  padding-bottom: 8px;
  display: block;
`
