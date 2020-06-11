import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

import { Container, Image } from './styles'
import { Button, Input, Logo, CustomLink } from '../../styles/global'

const Logon: React.FC = () => {
  const [id, setId] = useState('')
  const history = useHistory()

  async function handleLogin(e: FormEvent) {
    e.preventDefault()

    try {
      const response = await api.post('/sessions', { id })
      
      localStorage.setItem('ongId', id)
      localStorage.setItem('name', response.data.name)

      history.push('/profile')
    } catch (error) {
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <Container>
      <section className="form">
        <Logo src={logoImg} alt="Logo" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <Input type="text" placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>
          <Button type="submit">Entrar</Button>

          <CustomLink to="/register">
            <FiLogIn size={16} color={'#E02041'}/>
            Não tenho cadastro
          </CustomLink>
        </form>
      </section>
      <Image src={heroesImg} alt="Heroes" />
    </Container>
  )
}

export default Logon