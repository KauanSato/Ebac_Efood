import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 4px;
  display: inline-block;
`
