import styled from 'styled-components'
import { ContainerFlexCenter } from '../../styles/global'

export const Container = styled(ContainerFlexCenter)`

  section {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
  }

  form {
    margin-top: 100px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 24px;
    color: ${props => props.theme.colors.textPrimary}
  }
`

export const Image = styled.img`
  width: 520px;
`