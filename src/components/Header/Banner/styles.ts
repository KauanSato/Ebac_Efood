import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  padding-left: 170px;
  position: relative;
  padding: 32px 0;
`

export const Descricao = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Categoria = styled.span`
  font-weight: 100;
  font-size: 32px;
  text-transform: capitalize;
`
export const Titulo = styled.h2`
  font-weight: 900;
  font-size: 32px;
`
