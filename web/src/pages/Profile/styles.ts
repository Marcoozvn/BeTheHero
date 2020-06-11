import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  height: 100vh;
  padding: 0 40px;

  h1 {
    font-size: 20px;
    margin-top: 80px;
    margin-bottom: 24px;
    color: ${props => props.theme.colors.textPrimary};
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    margin-left: 24px;
    color: ${props => props.theme.colors.textSecondary}
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }
`

export const LogoutButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  &:hover {
    border-color: #999;
  }
`

export const CustomButton = styled(Link)`
  width: 100%;
  height: 50px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  line-height: 50px;
  transition: filter 0.2s;
  color: ${props => props.theme.colors.background};
`

export const GridList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  list-style: none;
`

export const Item = styled.li`
  padding: 24px;
  border-radius: 8px;
  position: relative;
  background: ${props => props.theme.colors.cardBackground};

  strong {
    display: block;
    margin-bottom: 16px;
    color: ${props => props.theme.colors.textSecondary};
  }

  p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }

  p + strong {
    margin-top: 32px;
  }

  button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: ${props => props.theme.colors.cardBackground};
  }
`
