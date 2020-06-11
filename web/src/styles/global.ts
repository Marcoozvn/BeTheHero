import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 16px Roboto, sans-serif;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: ${props => props.theme.colors.cardBackground};
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 50px;
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  color: ${props => props.theme.colors.textInput};
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
  background: ${props => props.theme.colors.inputBackground};
  margin-top: 8px;
`

export const TextArea = styled.textarea`
  width: 100%;
  resize: vertical;
  color:  ${props => props.theme.colors.textInput};
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
  background: ${props => props.theme.colors.inputBackground};
  margin-top: 8px;
`

export const Logo = styled.img`
  width: 150px;
`

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
  color: ${props => props.theme.colors.textPrimary};

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 8px;
  }
`

export const Card = styled.div`
  width: 90%;
  padding: 96px;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${props => props.theme.colors.boxShadow};
  background: ${props => props.theme.colors.registerCardBackground};

  section {
    width: 100%;
    max-width: 380px;
  }

  h1 {
    margin: 56px 0 24px;
    font-size: 24px;
    color: ${props => props.theme.colors.textPrimary};
  }

  p {
    font-size: 16px;
    color: ${props => props.theme.colors.textSecondary};
    line-height: 24px;
  }

  form {
    width: 100%;
    max-width: 450px;
  }
`

export const ContainerFlexCenter = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
