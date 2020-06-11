import React, { useContext } from 'react'
import DarkModeToggle from 'react-dark-mode-toggle'
import { ThemeContext } from 'styled-components'

import { Container } from './styles'

interface Props {
  changeTheme: () => void
}

const Toolbar: React.FC<Props> = ({ changeTheme }) => {
  const { title } = useContext(ThemeContext)

  return (
    <Container >
      <DarkModeToggle checked={title === 'dark'} size={60} onChange={changeTheme}/>
    </Container>
  )
}

export default Toolbar