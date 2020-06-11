import React, { useState, FormEvent } from 'react'
import api from '../../services/api'
import logoImg from '../../assets/logo.svg'
import { useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { CustomLink, Card, Logo, Input, TextArea, Button, ContainerFlexCenter as Container } from '../../styles/global'

const NewIncident: React.FC = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const history = useHistory()

  const ongId = localStorage.getItem('ongId')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    
    try {
      await api.post('/incidents', { title, description, value }, 
      {
        headers: {
          Authorization: ongId
        }
      })

      history.push('/profile')
    } catch (error) {
      alert('Algo deu errado!')
    }
  }

  return (
    <Container>
      <Card>
        <section>
          <Logo src={logoImg} alt="Logo"/>
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <CustomLink  to="/profile">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para a home
          </CustomLink>
        </section>

        <form onSubmit={handleSubmit}>
          <Input placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)}/>
          <TextArea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
          <Input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)}/>

          <Button className="button" type="submit">Cadastrar</Button>

        </form>
      </Card>
    </Container>
  )
}

export default NewIncident