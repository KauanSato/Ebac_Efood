import styled from 'styled-components'
import { cores } from '../../../styles'

export const Card = styled.div`
  background-color: #fff;
  color: ${cores.vermelho};
  position: relative;
  border: 1px solid ${cores.vermelho};
`

export const Titulo = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    font-size: 18px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const CardImage = styled.img`
  width: 100%;
  display: block;
  height: 217px;
  object-fit: cover;
`

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const TagMore = styled.div`
  position: absolute;
  bottom: 6px;
  left: 6px;
  display: inline;
`

export const CardDiv = styled.div`
  padding: 8px;
  border-top: none;
`
