import React, { useState, useEffect, useContext } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity, Switch } from 'react-native'
import { ThemeContext } from '../../contexts/ThemeContext'

import api from '../../services/api'
import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Incidents() {
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [style, setStyle] = useState({})
  const { theme, changeTheme } = useContext(ThemeContext)

  const navigation = useNavigation()

  useEffect(() => {
    loadIncidents()
  }, [])

  useEffect(() => {
    if (theme === 'light') {
      const myStyle = styles('#f0f0f5', '#13131a', '#737380', '#41414d', '#fff')
      setStyle(myStyle)
    } else {
      const myStyle = styles('#111', '#fff', '#dcdce6', '#fff', '#222')
      setStyle(myStyle)
    }
  }, [theme])

  async function loadIncidents() {
    if (loading) {
      return
    }

    if (total > 0 && incidents.length === total) {
      return
    }

    setLoading(true)
    const response = await api.get(`incidents?page=${page}`)

    setIncidents([...incidents, ...response.data])
    setPage(page + 1)
    setTotal(response.headers['x-total-count'])
    setLoading(false)
  }

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident })
  }

  function handleToogle() {
    if (theme == 'light') {
      changeTheme('dark')
    } else {
      changeTheme('light')
    }
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={logoImg}/>
        <View style={style.headerRight}>
          <Switch
          style={style.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleToogle}
          value={theme == 'light' ? true : false}/>
          <Text style={style.headerText}>
            Tema <Text style={style.headerTextBold}>{theme == 'light' ? 'Light' : 'Dark'}</Text>
          </Text>
        </View>
      </View>

      <Text style={style.title}>Bem-vindo!</Text>
      <Text style={style.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList 
        style={style.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={style.incident}>
            <Text style={style.incidentProperty}>ONG:</Text>
            <Text style={style.incidentValue}>{incident.name}</Text>
            
            <Text style={style.incidentProperty}>CASO:</Text>
            <Text style={style.incidentValue}>{incident.title}</Text>

            <Text style={style.incidentProperty}>VALOR:</Text>
            <Text style={style.incidentValue}>
              {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}
            </Text>

            <TouchableOpacity style={style.detailsButton} onPress={() => navigateToDetail(incident)}>
              <Text style={style.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name='arrow-right' size={16} color='#E02041'/>
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  )
}