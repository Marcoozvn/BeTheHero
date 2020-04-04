import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('name');


  useEffect(() => {
    fetchIncidents();
  }, []);
  
  async function fetchIncidents() {
    try {
      const response = await api.get('/profile', {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(response.data);
    } catch (error) {
      alert('Algo deu errado');        
    }
  }
  async function handleDelete(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert('Algo deu errado')
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Logo" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map( incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
            
            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>
            
            <strong>VALOR:</strong>
            <p>{incident.value}</p>

            <button type="button" onClick={() => handleDelete(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}