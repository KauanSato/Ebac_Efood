import styled from 'styled-components'
import { cores } from '../../../styles'

export const Card = styled.div`
  background-color: #fff;
  width: 472px;
  height: 398px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid ${cores.vermelho};
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 32px;
`

export const CardImage = styled.img`
  width: 100%;
  height: 224px;
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
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 8px;
  height: 100%;
  padding-bottom: 16px;

  .LearnMore {
    position: absolute;
    bottom: 16px;
    left: 6px;
    display: inline;
  }
`
