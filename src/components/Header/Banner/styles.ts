import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  padding-left: 170px;
`

export const Descricao = styled.div`
  justify-content: space-between;
  flex-direction: column;
  justify-content: space-between;
  display: flex;

  h2 {
    font-weight: 900;
    font-size: 32px;
    max-width: 675px;
    margin-bottom: 32px;
  }

  p {
    font-weight: 100;
    font-size: 32px;
    max-width: 100px;
    padding-top: 24px;
  }
`
