import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  pardo: '#FFEBD9',
  branco: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.branco};
    color: ${cores.vermelho};
  }
`
