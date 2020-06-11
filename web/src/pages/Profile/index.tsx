import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../services/api'
import logoImg from '../../assets/logo.svg'

import { Container, Header, LogoutButton, CustomButton, GridList, Item } from './styles'
import { Logo } from '../../styles/global'

const Profile: React.FC = () => {
  const [incidents, setIncidents] = useState([])
  const history = useHistory()

  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('name')


  useEffect(() => {
    async function fetchIncidents() {
      try {
        const response = await api.get('/profile', {
          headers: {
            Authorization: ongId
          }
        })
  
        setIncidents(response.data)
      } catch (error) {
        alert('Algo deu errado')        
      }
    }

    fetchIncidents()
  }, [ongId])
  
  async function handleDelete(id: string) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })

      setIncidents(incidents.filter((incident: any) => incident.id !== id))
    } catch (error) {
      alert('Algo deu errado')
    }
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Logo" />
        <span>Bem vinda, {ongName}</span>

        <CustomButton to="/incidents/new">Cadastrar novo caso</CustomButton>
        <LogoutButton type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </LogoutButton>
      </Header>

      <h1>Casos cadastrados</h1>

      <GridList>
        {incidents.map( (incident: any) => (
          <Item key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
            
            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>
            
            <strong>VALOR:</strong>
            <p>{incident.value}</p>

            <button type="button" onClick={() => handleDelete(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </Item>
        ))}
      </GridList>
    </Container>
  )
}

export default Profile