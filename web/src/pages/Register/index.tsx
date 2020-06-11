import React, { useState, FormEvent } from 'react'
import logoImg from '../../assets/logo.svg'
import { useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import { InputGroup } from './styles'
import { Logo, Button, Input, CustomLink, Card, ContainerFlexCenter as Container } from '../../styles/global'

const Register: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUF] = useState('')

  const history = useHistory()

  async function handleRegister(e: FormEvent) {
    e.preventDefault()

    const data = { name, email, whatsapp, city, uf }

    try {
      const response = await api.post('ongs', data)
      localStorage.setItem('id', response.data.id)
      alert('Cadastro realizado com sucesso')
      history.push('/')
    } catch (error) {
      alert('Erro no cadastro')      
    }
  }

  return (
    <Container>
      <Card>
        <section>
          <Logo src={logoImg} alt="Logo"/>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os dados da sua ONG.</p>

          <CustomLink to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Já tenho cadastro
          </CustomLink>
        </section>

        <form onSubmit={handleRegister}>
          <Input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
          <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
          <Input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>

          <InputGroup >
            <Input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
            <Input placeholder="UF" style={{ width: 80 }} value={uf} onChange={e => setUF(e.target.value)} />
          </InputGroup>

          <Button type="submit">Cadastrar</Button>

        </form>
      </Card>
    </Container>
  )
}

export default Register